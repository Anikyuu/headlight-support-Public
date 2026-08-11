const APP_ID = "7JA4767MS4.com.aniq.headlight";
const SHARE_ORIGIN = "https://share.head-light.app";
const COLLECTION_PAGE = "https://head-light.app/share.html";
const MAX_POST_BYTES = 7_000_000;
const MAX_IMAGE_BYTES = 4_750_000;
const MAX_PAYLOAD_CHARS = 120_000;
const MAX_SHARES_PER_DAY = 20;

const AASA = JSON.stringify({
  applinks: {
    details: [
      {
        appIDs: [APP_ID],
        components: [
          {
            "/": "/import/*",
            comment: "Open a shared Headlight collection in the app.",
          },
        ],
      },
    ],
  },
});

const fallbackHTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Headlight</title>
</head>
<body>
  <script>location.replace("${COLLECTION_PAGE}" + location.hash);<\/script>
  <noscript><a href="${COLLECTION_PAGE}">Open Headlight collection</a></noscript>
</body>
</html>`;

function json(value, status = 200) {
  return new Response(JSON.stringify(value), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function decodeCollectionPayload(payload) {
  if (typeof payload !== "string" || !payload || payload.length > MAX_PAYLOAD_CHARS) {
    throw new Error("Invalid collection payload.");
  }
  let base64 = payload.replaceAll("-", "+").replaceAll("_", "/");
  base64 += "=".repeat((4 - (base64.length % 4)) % 4);
  const binary = atob(base64);
  const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
  const collection = JSON.parse(new TextDecoder().decode(bytes));
  if (
    collection?.version !== 1 ||
    typeof collection.name !== "string" ||
    !collection.name.trim() ||
    !Array.isArray(collection.entries) ||
    collection.entries.length < 1 ||
    collection.entries.length > 48
  ) {
    throw new Error("Unsupported collection.");
  }
  for (const entry of collection.entries) {
    const url = new URL(entry.url);
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      throw new Error("Unsafe collection URL.");
    }
  }
  return collection;
}

function decodeJPEG(base64) {
  if (typeof base64 !== "string" || !base64) throw new Error("Missing cover image.");
  const binary = atob(base64);
  if (binary.length < 4 || binary.length > MAX_IMAGE_BYTES) throw new Error("Cover image is too large.");
  const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
  if (bytes[0] !== 0xff || bytes[1] !== 0xd8 || bytes[2] !== 0xff) {
    throw new Error("Cover image must be JPEG.");
  }
  return bytes;
}

function randomID() {
  const bytes = crypto.getRandomValues(new Uint8Array(9));
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

async function rateLimitKey(request) {
  const address = request.headers.get("CF-Connecting-IP") || "unknown";
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(address));
  return `rate:${Array.from(new Uint8Array(digest)).slice(0, 12).map((byte) => byte.toString(16).padStart(2, "0")).join("")}`;
}

async function createShare(request, env) {
  const contentLength = Number(request.headers.get("Content-Length") || 0);
  if (contentLength > MAX_POST_BYTES) return json({ error: "Request is too large." }, 413);

  let body;
  try {
    const rawBody = await request.arrayBuffer();
    if (rawBody.byteLength > MAX_POST_BYTES) {
      return json({ error: "Request is too large." }, 413);
    }
    body = JSON.parse(new TextDecoder().decode(rawBody));
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  let collection;
  let image;
  try {
    if (body.coverPolicy !== "headlight-neutral-v1") {
      throw new Error("Unsupported cover policy.");
    }
    collection = decodeCollectionPayload(body.payload);
    image = decodeJPEG(body.imageBase64);
  } catch (error) {
    return json({ error: error.message || "Invalid share." }, 400);
  }

  const limitKey = await rateLimitKey(request);
  const currentCount = Number(await env.SHARES.get(limitKey) || 0);
  if (currentCount >= MAX_SHARES_PER_DAY) {
    return json({ error: "Daily share limit reached." }, 429);
  }

  let id = randomID();
  while (await env.SHARES.get(`share:${id}`)) id = randomID();
  const metadata = JSON.stringify({
    payload: body.payload,
    name: collection.name.trim().slice(0, 160),
    count: collection.entries.length,
    coverPolicy: body.coverPolicy,
    createdAt: new Date().toISOString(),
  });

  await Promise.all([
    env.SHARES.put(`share:${id}`, metadata),
    env.SHARES.put(`image:${id}`, image.buffer),
    env.SHARES.put(limitKey, String(currentCount + 1), { expirationTtl: 86_400 }),
  ]);

  return json({ url: `${SHARE_ORIGIN}/s/${id}` }, 201);
}

function shareHTML(id, metadata) {
  const title = escapeHTML(metadata.name || "Headlight Collection");
  const shortURL = `${SHARE_ORIGIN}/s/${id}`;
  const imageURL = `${shortURL}/cover.jpg`;
  const destination = `${COLLECTION_PAGE}#collection=${metadata.payload}`;
  return `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="referrer" content="no-referrer">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Headlight">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="A collection shared from Headlight">
  <meta property="og:url" content="${shortURL}">
  <meta property="og:image" content="${imageURL}">
  <meta property="og:image:secure_url" content="${imageURL}">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:alt" content="Headlight collection cover">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:image" content="${imageURL}">
  <meta name="twitter:image:alt" content="Headlight collection cover">
  <title>${title} — Headlight</title>
</head>
<body>
  <script>location.replace(${JSON.stringify(destination)});<\/script>
  <noscript><a href="${escapeHTML(destination)}">Open collection</a></noscript>
</body>
</html>`;
}

async function serveShortShare(pathname, env) {
  const match = pathname.match(/^\/s\/([A-Za-z0-9_-]{12})(\/cover\.jpg)?\/?$/);
  if (!match) return null;
  const id = match[1];

  if (match[2]) {
    const image = await env.SHARES.get(`image:${id}`, { type: "arrayBuffer" });
    if (!image) return new Response("Not found", { status: 404 });
    return new Response(image, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
      },
    });
  }

  const raw = await env.SHARES.get(`share:${id}`);
  if (!raw) return new Response("Not found", { status: 404 });
  const metadata = JSON.parse(raw);
  return new Response(shareHTML(id, metadata), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "Content-Security-Policy": "default-src 'none'; script-src 'unsafe-inline'; base-uri 'none'; frame-ancestors 'none'",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (
      url.pathname === "/.well-known/apple-app-site-association" ||
      url.pathname === "/apple-app-site-association"
    ) {
      return new Response(AASA, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "public, max-age=3600",
          "X-Content-Type-Options": "nosniff",
        },
      });
    }

    if (url.pathname === "/import" || url.pathname === "/import/") {
      return new Response(fallbackHTML, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
          "Content-Security-Policy": "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; base-uri 'none'",
        },
      });
    }

    if (request.method === "POST" && url.pathname === "/api/shares") {
      return createShare(request, env);
    }

    if (request.method === "GET" || request.method === "HEAD") {
      const share = await serveShortShare(url.pathname, env);
      if (share) return share;
    }

    return new Response("Not found", { status: 404 });
  },
};

const AASA = JSON.stringify({
  applinks: {
    details: [
      {
        appIDs: ["7JA4767MS4.com.aniq.headlight"],
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
  <script>location.replace("https://head-light.app/share.html" + location.hash);<\/script>
  <noscript><a href="https://head-light.app/share.html">Open Headlight collection</a></noscript>
</body>
</html>`;

export default {
  async fetch(request) {
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
          "Content-Security-Policy":
            "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; base-uri 'none'",
        },
      });
    }

    return new Response("Not found", { status: 404 });
  },
};

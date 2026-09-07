# Homepage product presentation

The homepage uses the same `phone-artwork.js` renderer and `device.js` rotation controls as the existing design studio. It does not execute the app itself. The homepage has five curated looks; the full studio remains at `design.html`.

## Gallery

Run `node scripts/build-hero-designs.mjs` from the site root. It writes 138 SVG designs and the marked gallery block in `index.html`. The block contains an inert catalog template and a compact static fallback.

The live `hero-gallery.js` mounts only the slots needed to fill the three lanes, with different speeds, directions and starting offsets. A slot is replaced only after it leaves the clipped wall. `gallery-sequence.js` selects its replacement from the shared 138-design catalog: no design may occur twice in the mounted slots, and photos/backgrounds are balanced across all lanes. At ordinary viewport widths, each photo background can occur once; all five similar paper textures share one slot. That background limit increases only for unusually wide viewports that cannot be filled from the remaining catalog. Old designs gain priority over time so the whole catalog remains reachable. The initial selection also varies between page loads.

Motion pauses outside the viewport, in hidden tabs, on user request, or with Reduced Motion enabled. Newly mounted SVGs load while still offscreen. Run `node scripts/check-gallery-sequence.mjs` to verify no simultaneous duplicate designs across four widths, the single-background limit at normal widths, and full catalog coverage over a simulated run.

The five paper/texture backgrounds are existing Head-Light app assets. The six colorful photographic/art backgrounds are generated examples of the app's custom-image background capability; they are not additional bundled app presets. Generation descriptions are in `hero-background-prompts.md`. JPEG copies in `img/hero-backgrounds/` are 600-pixel web assets.

## Localization

`home-localizations.js` keys the five additional languages by English source HTML (normalized through a template element). This replaces the homepage's legacy numeric-index installer while leaving other pages and `site-localizations.js` intact. The text and matching old indexes were recovered from the last 156-entry homepage (`c53c002a8`), combined with the existing overrides, and aligned to the current source copy. `home-static-localizations.js` contains additional translations for editorial copy. New text needs a matching key or explicit eight-language spans; do not depend on section order for translations.

The original hidden hand image remains only to preserve the source-image inventory while the shared legacy localization file is being edited separately. It is not displayed in the product hero.

## Verification, 2026-09-07

- Shared renderer: 952 combinations match the previous design studio output exactly.
- 138 unique source assets. The shared live queue shows every design over time; simultaneous duplicate designs are excluded. Four simulated viewport widths verified, including 390px mobile and 3840px wide desktop.
- Browser: Japanese desktop and 390px mobile layouts, all eight language selections without horizontal overflow, look selection, arrow-key device rotation, pause/resume of all three lanes, image loading.
- Local preview only. No production deployment performed for this revision.
- Follow-up after Kai’s screenshot: replaced the fixed repeated strips with offscreen slot replacement. Browser samples confirmed different first/last designs over time, 42 mounted designs / 42 unique designs at the preview width, and no repeated photo/paper families.

# Homepage product presentation

The homepage uses the same `phone-artwork.js` renderer and `device.js` rotation controls as the existing design studio. It does not execute the app itself. The homepage has five curated looks; the full studio remains at `design.html`.

## Gallery

Run `node scripts/build-hero-designs.mjs` from the site root. It writes 138 SVG designs and the marked gallery block in `index.html`. Each of the three lanes contains every design in a distinct deterministic order, repeated once for a seamless loop. The lanes have independent durations, offsets and directions. All images are lazy loaded and share cached assets. Motion pauses outside the viewport, in hidden tabs, on user request, or with Reduced Motion enabled.

The five paper/texture backgrounds are existing Head-Light app assets. The six colorful photographic/art backgrounds are generated examples of the app's custom-image background capability; they are not additional bundled app presets. Generation descriptions are in `hero-background-prompts.md`. JPEG copies in `img/hero-backgrounds/` are 600-pixel web assets.

## Localization

`home-localizations.js` keys the five additional languages by English source HTML (normalized through a template element). This replaces the homepage's legacy numeric-index installer while leaving other pages and `site-localizations.js` intact. The text and matching old indexes were recovered from the last 156-entry homepage (`c53c002a8`), combined with the existing overrides, and aligned to the current source copy. `home-static-localizations.js` contains additional translations for editorial copy. New text needs a matching key or explicit eight-language spans; do not depend on section order for translations.

The original hidden hand image remains only to preserve the source-image inventory while the shared legacy localization file is being edited separately. It is not displayed in the product hero.

## Verification, 2026-09-07

- Shared renderer: 952 combinations match the previous design studio output exactly.
- 138 unique assets; all 138 occur in each lane, in different orders; both halves of each lane match for seamless looping.
- Browser: Japanese desktop and 390px mobile layouts, all eight language selections without horizontal overflow, look selection, arrow-key device rotation, pause/resume of all three lanes, image loading.
- Local preview only. No production deployment performed for this revision.

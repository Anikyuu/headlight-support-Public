# Homepage product presentation

The homepage uses the same `phone-artwork.js` renderer and `device.js` rotation controls as the existing design studio. It does not execute the app itself. The homepage starts with the white smiling design and offers a die below the phone. Each press uses the studio’s shared `randomDesign` function to change the style, face, body/retro palette and device pose. The full studio remains at `design.html`. The app icon is prominently displayed at 112px on desktop and 96px on mobile.

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
- The initial verification was performed in local preview before publication.
- Follow-up after Kai’s screenshot: replaced the fixed repeated strips with offscreen slot replacement. Browser samples confirmed different first/last designs over time, 42 mounted designs / 42 unique designs at the preview width, and no repeated photo/paper families.

## Direct navigation and About page

The top menu links directly to `about.html`, `design.html`, and `tools.html`. `site-nav.js` supplies eight-language labels; `site-nav.css` keeps every destination visible in a second row on mobile. Both the homepage and About page use it.

`about.html` introduces the existing approved copy through the collection, words, journal and the thinking behind Head-Light, reusing actual screenshots and the existing introduction illustration. `about.js` uses the same keyed translations and saved language as the homepage. The app icon was moved unchanged from the inline base64 image to `img/app-icon.png` so both pages can share it.

Browser verification: two mode controls, Simple removes the illustrated eyes, 112/96px icon CSS, direct navigation to the existing design and tools pages, About page in all eight languages at 390px without horizontal overflow, all three mobile menu links visible. This follow-up was verified in local preview before publication.

The homepage device is deliberately smaller: 220px normally, 190px on mobile, and 250px on large desktops. Kai requested removal of the visible rotation hint and front-view button. Direct dragging and keyboard rotation remain, along with the die and prominent app icon. `setupDevice` therefore accepts a missing angle button; the full studio still supplies its existing button.

## Download guidance and publication

The inward-facing pulsing arrows initially requested around App Store badges were later removed after Kai felt they did not suit the design. The homepage and About page now show the badges alone. Delivery uses the existing GitHub Pages main branch.

The hero frame uses scoped border-box sizing and derives its outer height from the SVG screen ratio plus rim/bezel insets (8px desktop, 5px mobile). The SVG fills the matching viewport with `xMidYMid slice` to avoid black letterbox gaps from fractional rounding.

Kai clarified that the upper black island was not the unwanted line. The hero keeps both original device indicators; only the physical frame/screen fit correction remains. The former two-mode control was replaced by the die at Kai’s request. The die gives a short roll response, and illustrated faces blink while the hero is visible. Reduced Motion removes automatic blinking and interpolated movement. Keyboard and eight-language labels were verified in the browser.

## Brand name and supported devices

The hero shows the full hyphenated `HEAD-LIGHT` above the icon. Kai explicitly preferred the original quiet gold typography over a large bold name: 14px, weight 600, .55em tracking, #b08d57. Preserve this treatment rather than enlarging it. The approved supporting tagline is unchanged in all eight languages. The supported devices form a separate small line below the download badge, with middle-dot separators.

## Dice discoverability

A tester overlooked the original 66px white die. Kai rejected visible instruction copy, so keep the button icon-only: 82px, white with a gray die and a raised edge. Kai rejected both the gold and dark graphite versions because they disrupted the page design. Until the first activation, the die gives a short bounce/tilt and a faint expanding outline every 4.6 seconds. Stop these cues after the first activation and pause them when the button is offscreen or the tab is hidden. Reduced Motion removes both cues. The existing eight-language accessible names and click/keyboard shuffle behavior remain. Browser checks verified the empty visible text, 82px target, initial cues and their removal after clicking, and all eight accessible labels at 390px without overflow. Whether more visitors notice it still requires a new user observation.

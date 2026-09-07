# Head-Light feature comics

Kai requested that every homepage item use the same colored hand-drawn comic style as the opening heavy-to-light story. Each image is a **three-panel before / use / after story**, with an exaggerated emotional change and a small visual joke. The initial single-scene drafts were rejected and are not used.

There are Japanese and English editions for each of the twelve sections. Both editions include men and women with East Asian, white Western and Black appearances, varied hair colors and hairstyles. The cast changes between the two editions while the feature story and visual style remain consistent. Other page languages use the English image edition, with alternative text in the selected language. All artwork is fictional and generated.

| Files | Story |
| --- | --- |
| collection-ja/en.png | Scattered favorite cards become a shelf worth hugging. |
| words-ja/en.png | A fleeting idea is caught with a spoken note. |
| journal-ja/en.png | Forgotten daily moments become a surprisingly long diary. |
| routines-ja/en.png | A muddled morning becomes a pleasant sequence. |
| tools-ja/en.png | Too many tools become one useful choice. |
| design-ja/en.png | A dull phone screen becomes a personally chosen app design. |
| sorting-ja/en.png | Jumbled thoughts become separate plans, tasks and ideas. |
| tidy-ja/en.png | A towering task pile becomes a manageable plan for now. |
| handoff-ja/en.png | Personally selected context makes an AI answer more relevant. |
| favorites-ja/en.png | Favorite things bring a warmer expression and a lighter step. |
| pricing-ja/en.png | Optional AI help reduces repetitive organizing. |
| support-ja/en.png | Confusion becomes understanding after asking for help. |

The current exact filenames, dimensions and full prompts are in `generation-manifest.json`; corrected assets may carry a version suffix. All assets were created with the built-in image-generation tool using the selected opening comic as their visual reference. Selected PNGs are copied unchanged into this repository. Anatomy and app-screen details were reviewed and corrected where necessary.

`feature-comics.js` changes a single image element's source when the page language changes. Images use explicit dimensions, asynchronous decoding and lazy loading. `feature-comics.css` keeps all three panels visible without cropping and gently blends their white background into the existing page. The real app screenshots remain alongside the existing feature explanations. No visible captions or repeated explanatory copy were added.

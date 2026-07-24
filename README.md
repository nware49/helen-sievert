# Helen Sievert — Portfolio

A single-page portfolio website for Helen Sievert, styled as a broadsheet
newspaper. It collects her thesis, academic writing, and (soon) her
journalism, and is built to be published with **GitHub Pages**.

- **`index.html`** — the site itself (layout, styling, and the code that
  renders the writing cards). You normally don't need to edit this.
- **`data.js`** — the content: the list of writing samples and journalism
  clips. **This is the file you edit to add new pieces.**
- **`writings/`** — the PDFs that the site links to.
- **`.github/workflows/deploy.yml`** — publishes the site automatically.

---

## Adding a new writing sample

1. Put the PDF in the **`writings/`** folder. Use a simple lowercase name with
   dashes instead of spaces, e.g. `my-new-essay.pdf`.
2. Open **`data.js`**, copy one of the existing `{ ... }` blocks in the
   `WRITINGS` list, paste it in, and fill in the fields (title, `file`, blurb,
   etc.). Keep the commas between blocks.
3. Commit and push. The new card appears on the site automatically after the
   deploy finishes.

Set `featured: true` on a piece (and give it a `dek` and `lede`) to rotate it
through the banner at the top of the page.

## Adding a Bourne Enterprise (or other) article

Add a block to the **`JOURNALISM`** list in `data.js`. Each clip can either
link to the story online (`url:`) or to a PDF you've uploaded to `writings/`
(`file:`). Until the first clip is added, the Newsroom section shows a short
"coming soon" note.

---

## Publishing to GitHub Pages

The site is served from the repository's default branch (**`main`**).

1. Merge this work into `main`.
2. The **Deploy portfolio to GitHub Pages** workflow runs automatically and,
   on its first run, turns Pages on for the repo. When it finishes, the live
   URL is shown on the workflow's summary page and under
   **Settings → Pages** (typically `https://<user>.github.io/helen-sievert/`).

If the first automatic run can't enable Pages on its own, set it once by hand:
**Settings → Pages → Build and deployment → Source: GitHub Actions**, then
re-run the workflow from the **Actions** tab.

### Things worth updating

- **Contact details** in `index.html` (email and LinkedIn) are placeholders —
  search for `example.com` and the LinkedIn `href="#"` and replace them.
- **Portrait**: the About section uses a printed-style placeholder. To use a
  real photo, drop it in an `about/` folder and follow the comment next to
  `about-photo` in `index.html`.

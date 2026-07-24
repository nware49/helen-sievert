# Helen Sievert Portfolio

A portfolio website for Helen Sievert, styled as a broadsheet newspaper. It
collects her thesis, academic writing, and (soon) her journalism, and is built
to be published with **GitHub Pages**. Each writing sample can be read in full
on the site itself, with a link to the original PDF at the bottom.

### Pages

- **`index.html`**: the front page (masthead, featured banner, previews).
- **`writing.html`**: the full grid of writing samples.
- **`newsroom.html`**: journalism (Bourne Enterprise clips).
- **`experience.html`** / **`about.html`**: experience and about/contact.
- **`reading/<slug>.html`**: one readable page per sample (the full text).

### Shared files

- **`data.js`**: the content list: writing samples and journalism clips.
  **This is the main file you edit to add new pieces.**
- **`styles.css`**: all styling (shared by every page).
- **`site.js`**: the masthead, navigation, and footer, injected into every
  page so they stay identical everywhere.
- **`writings/`**: the source PDFs.
- **`tools/gen_reading.py`**: builds the `reading/` pages from the PDFs
  (see below). `tools/fragments/` holds hand-cleaned text for two pieces whose
  PDF layout doesn't extract cleanly.
- **`.github/workflows/deploy.yml`**: publishes the site automatically.

---

## Adding a new writing sample

1. Put the PDF in **`writings/`**. Use a simple lowercase name with dashes,
   e.g. `my-new-essay.pdf`.
2. Add the piece's details (title, category, venue) to the `META` block near
   the top of **`tools/gen_reading.py`**, then build its reading page:
   ```
   python3 tools/gen_reading.py
   ```
   This writes `reading/my-new-essay.html`, the page where readers see the
   full text. (Requires `pdftotext` from **poppler-utils**:
   `apt-get install poppler-utils` or `brew install poppler`.)
3. Open **`data.js`**, copy an existing `{ ... }` block in the `WRITINGS` list,
   paste it in, and fill in the fields, including `page:
   "reading/my-new-essay.html"`. Keep the commas between blocks.
4. Commit and push. The new card appears automatically after the deploy runs.

*Shortcut:* if you'd rather skip step 2, leave `page` off the block and the
card will link straight to the PDF instead of an on-site reading page.

Set `featured: true` on a piece (and give it a `dek` and `lede`) to rotate it
through the banner on the front page.

## Adding a Bourne Enterprise (or other) article

Add a block to the **`JOURNALISM`** list in `data.js`. Each clip can link to
the story online (`url:`) or to a PDF you've uploaded to `writings/` (`file:`).
Until the first clip is added, the Newsroom page shows a short "coming soon"
note.

---

## Publishing to GitHub Pages

The site is served from the repository's default branch (**`main`**).

1. Merge this work into `main`.
2. The **Deploy portfolio to GitHub Pages** workflow runs automatically and, on
   its first run, turns Pages on for the repo. When it finishes, the live URL
   is shown on the workflow's summary page and under **Settings → Pages**
   (typically `https://<user>.github.io/helen-sievert/`).

If the first automatic run can't enable Pages on its own, set it once by hand:
**Settings → Pages → Build and deployment → Source: GitHub Actions**, then
re-run the workflow from the **Actions** tab.

### Things worth updating

- **Contact details** (email and LinkedIn) are placeholders. They live in
  `site.js` (footer) and `about.html`; search for `example.com` and the
  LinkedIn `href="#"` and replace them.
- **Portrait**: the About page uses a printed-style placeholder. To use a real
  photo, drop it in an `about/` folder and follow the comment next to
  `about-photo` in `about.html`.

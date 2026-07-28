# CLAUDE.md: working rules for this repository

This repo is Helen Sievert's portfolio site (static HTML, published with GitHub
Pages). Content is driven by `data.js`; the per-sample reading pages under
`reading/` are generated from the PDFs by `tools/gen_reading.py`.

## Hard rule: never use em dashes

Do not use the em dash character (U+2014) or the corresponding named or numeric HTML entity
anywhere in this repository. Treat this as strict, with no exceptions made for
convenience or style. (This paragraph, and this whole file, deliberately
contain none.)

It applies to everything you author or generate:

- site content: HTML pages, `data.js` (blurbs, deks, ledes, venues), `site.js` text
- code, comments, and docstrings (`tools/`, etc.)
- `README.md` and any other documentation
- commit messages and pull-request titles and descriptions
- anything produced by the generator that is not Helen's own words (page titles,
  figure notes, editor notes, captions)

Where you would reach for an em dash, use a comma, a colon, a parenthesis, or a
period instead. For example:

- a clause aside becomes a comma: `identity, and how socialization shapes it`
- a lead-in to an elaboration becomes a period and a new sentence: `public service meet. It spans an honors thesis`
- a parenthetical becomes actual parentheses: `Figure 1 (see the original document)`

If code must match an em dash that appears in Helen's source text (for example a
regex over extracted PDF text), write it with the `\u2014` escape, not the
literal character. See `NUMERIC_ONLY` in `tools/gen_reading.py`.

### The one exception: Helen's own writing

Text taken verbatim from Helen's writing samples keeps her original punctuation.
The **bodies** of the `reading/*.html` pages are her words, extracted from the
PDFs in `writings/`. If her writing uses an em dash, leave it exactly as written.
Do not "correct" her prose.

The same exception applies to her journalism: the **bodies** of the
`news/*.html` pages, and the `blurb` field of each `JOURNALISM` entry in
`data.js`, are quoted verbatim from her published Bourne Enterprise clippings
in `articles/` (via `tools/gen_news.py`). Leave any em dash in that quoted
text as written.

Everything the site itself says in its own voice (titles, descriptions, section
labels, buttons, notes) is yours, and must never use an em dash.

En dashes (U+2013) and hyphens are fine. This rule is specifically about em dashes.

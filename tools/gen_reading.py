#!/usr/bin/env python3
"""
Generate in-site "reading" pages for each writing sample from the PDFs.

For most pieces the text is extracted with `pdftotext -raw` and reflowed into
clean paragraphs (PDF text has hard line breaks; paragraph breaks are inferred
from lines that stop short of the wrap margin). A few pieces with awkward
layouts (columns / footnotes) are supplied as hand-cleaned HTML fragments in
tools/fragments/<slug>.html and used verbatim.

Run from the repo root:   python3 tools/gen_reading.py
Outputs:                  reading/<slug>.html   (one per sample)

Requires: poppler-utils (pdftotext).
"""

import os, re, subprocess, html, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WRITINGS = os.path.join(ROOT, "writings")
OUT = os.path.join(ROOT, "reading")
FRAGS = os.path.join(os.path.dirname(os.path.abspath(__file__)), "fragments")

# ---------------------------------------------------------------- metadata ----
META = {
  "second-generation-immigrants-thesis": dict(
      category="Honors Thesis",
      title="Exploring the Identity Formation, Socialization, and Political Engagement of Second-Generation Immigrants",
      venue="Commonwealth Honors College, UMass Amherst · May 2024",
      meta="Honors Thesis advised by Dr. Razvan Sibii · ~49 pp."),
  "media-coverage-war-in-ukraine": dict(
      category="Research Paper",
      title="Media Coverage of the War in Ukraine",
      venue="PoliSci 393M",
      meta="Research Paper · 12 pp."),
  "climate-change-policy-memo": dict(
      category="Policy Memo",
      title="Finding a Sustainable Consensus: A Shared Duty to Mitigate Climate Change",
      venue="University of Massachusetts Amherst · December 15, 2023",
      meta="Policy Memo · 5 pp."),
  "immigration-rights-stakeholders-analysis": dict(
      category="Policy Analysis",
      title="Immigration Rights: A Stakeholders Analysis",
      venue="PoliSci 391PC · December 2023 · Co-authored",
      meta="Policy Analysis · 10 pp."),
  "three-theories-analysis": dict(
      category="Political Theory",
      title="Three Theories of Democratic Resistance",
      venue="On Arendt, Dahl & Milgram",
      meta="Essay · 3 pp."),
  "international-security-final": dict(
      category="International Security",
      title="Public Opinion and International Security",
      venue="International Security",
      meta="Exam Essay · 3 pp."),
  "making-foreign-policy": dict(
      category="Foreign Policy",
      title="Making Foreign Policy: The Instruments of Power",
      venue="Foreign Policy",
      meta="Essay · 2 pp."),
  "stanley-milgram-analysis": dict(
      category="Political Theory",
      title="Obedience to Authority: A Milgram Analysis",
      venue="On Stanley Milgram's Obedience to Authority",
      meta="Essay · 2 pp."),
}

# order shown / generated
ORDER = list(META.keys())

# --------------------------------------------------------------- parse cfg ----
# Only for pieces parsed from the PDF (others come from tools/fragments/).
REFS_HEADINGS = {"references", "works cited", "works listed", "works consulted",
                 "bibliography", "sources"}

PARSE = {
  "making-foreign-policy": dict(strip_lead=0),
  "three-theories-analysis": dict(strip_lead=0),
  "stanley-milgram-analysis": dict(strip_lead=0),
  "immigration-rights-stakeholders-analysis": dict(
      strip_lead=4,
      headings={"Stakeholders Analysis"},
      stop_at="Stakeholders Analysis Worksheet",
      note="The original assignment also includes a stakeholder-analysis worksheet and a graph, which are best viewed in the original document."),
  "media-coverage-war-in-ukraine": dict(
      strip_lead=4,
      headings={"Introduction", "Background", "Research Questions", "Data & Methods",
                "Results", "Content", "Rhetoric", "Voice", "Takeaways"},
      subheads={"Content", "Rhetoric", "Voice"},
      drop=[r"^See Appendix$"],
      presub=[(r"coding scheme1\s*\n\.\s*This", "coding scheme. This")],
      stop_at="Appendix",
      note="The original paper includes three figures and a coding appendix, which are best viewed in the original document."),
  "second-generation-immigrants-thesis": dict(
      thesis=True,
      drop=[r"^Sievert \d+$", r"^Note\. From ", r"^https?://\S+$"]),
}

STOPWORDS = {"to","be","the","of","a","it","is","and","in","on","for","an","or",
             "this","that","how","are","who","as","its","by","with"}

def content_words(s):
    ws = re.findall(r"[a-z]+", s.lower())
    return {w for w in ws if len(w) > 1 and w not in STOPWORDS}

# ----------------------------------------------------------------- helpers ----
def raw_text(pdf):
    return subprocess.run(["pdftotext", "-raw", pdf, "-"],
                          capture_output=True, text=True).stdout

def slugify(s):
    s = re.sub(r"[^\w\s-]", "", s.lower())
    return re.sub(r"[\s_]+", "-", s).strip("-") or "sec"

NUMERIC_ONLY = re.compile("^[\\d.,%$\u2013\u2014\\-\\s]+$")   # pure numbers/percents/dashes

def clean_lines(text, cfg):
    for pat, rep in cfg.get("presub", []):      # merge footnote-split sentences, etc.
        text = re.sub(pat, rep, text)
    lines = [ln.replace("\f", "").rstrip() for ln in text.split("\n")]
    drop_res = [re.compile(p) for p in cfg.get("drop", [])]
    out = []
    for ln in lines:
        s = ln.strip()
        if s and NUMERIC_ONLY.match(s):        # drop page/footnote numbers, chart data
            continue
        if any(r.match(s) for r in drop_res):
            continue
        out.append(ln)
    return out

def flush(buf, blocks, mode):
    if not buf:
        return
    text = " ".join(x.strip() for x in buf).strip()
    text = re.sub(r"\s+", " ", text)
    if text:
        blocks.append(("ref" if mode == "refs" else "p", text))
    buf.clear()

def reflow(lines, cfg, headings, subheads, toc_entries=None):
    """Turn cleaned lines into a list of (kind, text[, id]) blocks.

    toc_entries (thesis only): list of dicts {text, level, id, cw} matched
    fuzzily against body lines so headings keep their proper level and anchor
    even when the body wording differs slightly from the table of contents.
    """
    lens = [len(l) for l in lines if l.strip() and l.strip() not in headings]
    thresh = (max(lens) * 0.72) if lens else 60
    hnorm = {h.lower(): h for h in headings}
    snorm = {h.lower() for h in subheads}
    fig_re = re.compile(r"^Figure \d+$")
    used = set()

    def toc_match(line):
        cw = content_words(line)
        if not cw:
            return None
        best, best_r = None, 0
        for i, e in enumerate(toc_entries):
            if i in used or not e["cw"]:
                continue
            inter = len(cw & e["cw"])
            r_toc = inter / len(e["cw"])
            r_line = inter / len(cw)
            # The line must BE the heading: nearly all of its words are the
            # heading's words, and it isn't much longer than the heading. This
            # keeps prose that merely reuses the heading's phrasing from matching.
            if (r_toc >= 0.7 and r_line >= 0.85
                    and len(cw) <= len(e["cw"]) + 1 and r_toc > best_r):
                best, best_r = i, r_toc
        return best

    blocks, buf, mode = [], [], "prose"
    for ln in lines:
        s = ln.strip()
        if not s:
            flush(buf, blocks, mode); continue
        low = s.lower()
        if low in REFS_HEADINGS:
            flush(buf, blocks, mode); mode = "refs"
            blocks.append(("h2", s, slugify(s))); continue
        if toc_entries and len(s) <= 64:
            j = toc_match(s.lstrip("●•*").strip())
            if j is not None:
                flush(buf, blocks, mode); used.add(j)
                e = toc_entries[j]
                blocks.append(("h%d" % e["level"], e["text"], e["id"])); continue
        if s in headings or low in hnorm:
            flush(buf, blocks, mode)
            kind = "h3" if (low in snorm) else "h2"
            blocks.append((kind, hnorm.get(low, s))); continue
        if fig_re.match(s):
            flush(buf, blocks, mode)
            blocks.append(("figref", s + " (see the original document)")); continue
        buf.append(s)
        if len(s) < thresh:
            flush(buf, blocks, mode)
    flush(buf, blocks, mode)
    return blocks

def parse_thesis(text, cfg):
    lines = clean_lines(text, cfg)
    # locate the two "Abstract" lines; body begins at the 2nd (real) one
    abs_idx = [i for i, l in enumerate(lines) if l.strip() == "Abstract"]
    toc_start = next((i for i, l in enumerate(lines) if l.strip() == "Table of Contents"), None)
    body_start = abs_idx[1] if len(abs_idx) >= 2 else 0
    # --- table of contents ---
    toc = []            # list of (text, level, id) for display
    toc_entries = []    # dicts used for fuzzy matching
    if toc_start is not None:
        for l in lines[toc_start + 1: body_start]:
            s = l.strip()
            if not s:
                continue
            level = 3 if s[:1] in "●•*" else 2
            s = s.lstrip("●•*").strip()
            s = re.sub(r"[\.…\s]*\d*\s*$", "", s).strip()   # strip dot leaders + page no.
            if not s:
                continue
            hid = slugify(s)
            toc.append((s, level, hid))
            toc_entries.append(dict(text=s, level=level, id=hid, cw=content_words(s)))
    blocks = reflow(lines[body_start:], cfg, set(), set(), toc_entries)
    return toc, blocks

def parse_generic(text, cfg):
    lines = clean_lines(text, cfg)
    if cfg.get("stop_at"):
        for i, l in enumerate(lines):
            if l.strip() == cfg["stop_at"]:
                lines = lines[:i]; break
    # strip leading title-block lines
    n = cfg.get("strip_lead", 0)
    while n > 0:
        while lines and not lines[0].strip():
            lines.pop(0)
        if lines:
            lines.pop(0)
        n -= 1
    return reflow(lines, cfg, cfg.get("headings", set()), cfg.get("subheads", set()))

def apply_fixups(blocks, cfg):
    fx = cfg.get("fixups", [])
    if not fx:
        return blocks
    out = []
    for b in blocks:
        if b[0] in ("p", "ref"):
            t = b[1]
            for a, c in fx:
                t = t.replace(a, c)
            out.append((b[0], t))
        else:
            out.append(b)
    return out

# ------------------------------------------------------------- rendering ----
def render_blocks(blocks):
    html_parts, in_refs = [], False
    for b in blocks:
        kind, txt = b[0], b[1]
        hid = b[2] if len(b) > 2 else None
        idattr = ' id="%s"' % hid if hid else ""
        if kind == "h2":
            if in_refs: html_parts.append("</div>"); in_refs = False
            html_parts.append("<h2%s>%s</h2>" % (idattr, html.escape(txt)))
            if txt.lower() in REFS_HEADINGS:
                html_parts.append('<div class="refs">'); in_refs = True
        elif kind == "h3":
            html_parts.append("<h3%s>%s</h3>" % (idattr, html.escape(txt)))
        elif kind == "figref":
            html_parts.append('<p class="figref">%s</p>' % html.escape(txt))
        elif kind == "ref":
            html_parts.append('<p class="ref">%s</p>' % html.escape(txt))
        else:
            html_parts.append("<p>%s</p>" % html.escape(txt))
    if in_refs:
        html_parts.append("</div>")
    return "\n".join(html_parts)

def render_toc(toc):
    if not toc:
        return ""
    items = "".join('<li style="margin-left:%dem"><a href="#%s">%s</a></li>'
                    % (0 if lvl == 2 else 1.2, hid, html.escape(t))
                    for t, lvl, hid in toc)
    return ('<nav class="toc"><div class="toc-label">Contents</div><ol>%s</ol></nav>'
            % items)

PAGE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} · Helen Sievert</title>
<meta name="description" content="{descr}">
<link rel="icon" href="../favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;0,800;0,900;1,500;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&family=Oswald:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../styles.css">
</head>
<body>

<div id="site-header"></div>

<main class="wrap article">
  <div class="article-head">
    <span class="kicker">{category}</span>
    <h1>{title}</h1>
    <p class="venue">{venue}</p>
    <div class="article-meta">{meta}</div>
  </div>

  {toc}
  <article class="prose">
{body}
  </article>

  <div class="article-foot">
    <a class="btn solid" href="../writings/{slug}.pdf" target="_blank" rel="noopener">View / download the original document (PDF) →</a>
    <a class="btn" href="../writing.html">← All writing</a>
  </div>
</main>

<div id="site-footer"></div>

<script>window.SITE_BASE="../";window.SITE_PAGE="writing";</script>
<script src="../site.js"></script>
</body>
</html>
"""

def build(slug):
    m = META[slug]
    frag_path = os.path.join(FRAGS, slug + ".html")
    toc_html = ""
    if os.path.exists(frag_path):
        with open(frag_path, encoding="utf-8") as f:
            body = f.read().strip()
    else:
        cfg = PARSE[slug]
        text = raw_text(os.path.join(WRITINGS, slug + ".pdf"))
        if cfg.get("thesis"):
            toc, blocks = parse_thesis(text, cfg)
            toc_html = render_toc(toc)
        else:
            blocks = parse_generic(text, cfg)
        blocks = apply_fixups(blocks, cfg)
        if cfg.get("note"):
            blocks.append(("editor-note", cfg["note"]))
        # editor-note rendering
        parts = []
        for b in blocks:
            if b[0] == "editor-note":
                parts.append('<p class="editor-note"><b>Note:</b> %s</p>' % html.escape(b[1]))
            else:
                parts.append(render_blocks([b]))
        body = "\n".join(parts)

    descr = "%s by Helen Sievert. %s" % (m["category"], m["title"])
    page = PAGE.format(
        title=html.escape(m["title"]), category=html.escape(m["category"]),
        venue=html.escape(m["venue"]), meta=html.escape(m["meta"]),
        descr=html.escape(descr), slug=slug, toc=toc_html, body=body)
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, slug + ".html"), "w", encoding="utf-8") as f:
        f.write(page)
    return len(body)

if __name__ == "__main__":
    for slug in ORDER:
        try:
            n = build(slug)
            src = "fragment" if os.path.exists(os.path.join(FRAGS, slug + ".html")) else "parsed"
            print("  %-46s %-9s %6d chars" % (slug, src, n))
        except Exception as e:
            print("  !! %s: %s" % (slug, e), file=sys.stderr)

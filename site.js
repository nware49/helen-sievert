/* ============================================================================
   Shared site chrome (masthead, navigation, footer) for every page.
   ----------------------------------------------------------------------------
   Each page includes this file and, before it, sets two globals:

     window.SITE_BASE  — path back to the site root ("" for pages in the root,
                          "../" for pages inside a sub-folder like reading/).
     window.SITE_PAGE  — which nav item to highlight: "home", "writing",
                          "newsroom", "experience", or "about".

   The page just needs three empty hooks in its markup:
     <div id="site-header"></div>   ... your content ...   <div id="site-footer"></div>
   ============================================================================ */
(function () {
  var BASE = window.SITE_BASE || "";
  var PAGE = window.SITE_PAGE || "";
  var YEAR = new Date().getFullYear();

  var NAV = [
    ["home",       "Front Page",       "index.html"],
    ["writing",    "Writing",          "writing.html"],
    ["newsroom",   "Newsroom",         "newsroom.html"],
    ["experience", "Experience",       "experience.html"],
    ["about",      "About & Contact",  "about.html"]
  ];

  function navHtml() {
    return '<nav class="sections">' + NAV.map(function (n) {
      var cur = (n[0] === PAGE) ? ' aria-current="page"' : '';
      return '<a href="' + BASE + n[2] + '"' + cur + '>' + n[1] + '</a>';
    }).join("") + '</nav>';
  }

  function headerHtml() {
    var furniture =
      '<div class="top-furniture"><span>Vol. I · No. 1</span><span>Pro Bono Publico</span></div>';

    if (PAGE === "home") {
      var today = new Date().toLocaleDateString("en-US",
        { weekday: "long", year: "numeric", month: "long", day: "numeric" });
      return '' +
        '<div class="wrap"><header>' +
          furniture +
          '<div class="masthead">' +
            '<h1 class="nameplate">Helen Sievert</h1>' +
            '<p class="tagline">Political Science · Writing · Journalism</p>' +
          '</div>' +
          '<div class="dateline">' +
            '<span>Today Is — <b>' + today + '</b></span>' +
            '<span>Established MMXXVI</span>' +
          '</div>' +
        '</header></div>' +
        navHtml();
    }

    // Compact header for interior pages.
    return '' +
      '<div class="wrap"><header class="site-head">' +
        furniture +
        '<a class="mini-nameplate" href="' + BASE + 'index.html">Helen Sievert</a>' +
      '</header></div>' +
      navHtml();
  }

  function footerHtml() {
    return '' +
      '<footer><div class="wrap">' +
        '<p class="ft-name">Helen Sievert</p>' +
        '<p class="ft-tag">Writing · Research · Journalism</p>' +
        '<div class="contact-links">' +
          // Update these two with Helen's real details (see README).
          '<a href="mailto:helen.sievert@example.com">Email</a>' +
          '<a href="#" target="_blank" rel="noopener">LinkedIn</a>' +
          '<a href="' + BASE + 'writings/second-generation-immigrants-thesis.pdf" target="_blank" rel="noopener">Honors Thesis</a>' +
        '</div>' +
        '<p class="colophon">Set in Playfair Display, Source Serif &amp; Oswald · ' +
          'Composed for the web · © ' + YEAR + ' Helen Sievert · All rights reserved</p>' +
      '</div></footer>';
  }

  function mount(id, html) {
    var el = document.getElementById(id);
    if (el) el.outerHTML = html; // replace the placeholder entirely
  }

  mount("site-header", headerHtml());
  mount("site-footer", footerHtml());
})();

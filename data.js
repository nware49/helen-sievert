/* ============================================================================
   Helen Sievert portfolio content
   ----------------------------------------------------------------------------
   This is the ONLY file you need to edit to add or change writing samples.
   You don't need to touch index.html.

   HOW TO ADD A NEW WRITING SAMPLE
   -------------------------------
   1. Put the PDF in the  writings/  folder. Give it a simple lowercase name
      with dashes instead of spaces, e.g.  my-new-essay.pdf
   2. Build the on-site reading page from the PDF text:
          python3 tools/gen_reading.py
      (Add the piece's title/venue to tools/gen_reading.py first; it writes
      reading/my-new-essay.html, the page readers see the full text on.)
   3. Copy one of the { ... } blocks in the WRITINGS list below, paste it in,
      and fill in the fields, including "page". Keep the commas between blocks.
   4. Save. That's it: the new card appears on the site automatically.

   (If you skip step 2, just leave "page" off the block and the card will link
   straight to the PDF instead of an on-site reading page.)

   HOW TO ADD A BOURNE ENTERPRISE (OR OTHER) ARTICLE
   -------------------------------------------------
   Add a block to the JOURNALISM list further down. An article can link to a
   PDF you upload (put it in  writings/ ) OR to the story online (use "url").

   Field guide for a writing sample:
     category : short label shown in small caps  (e.g. "Research Paper")
     title    : the piece's title
     file     : path to the PDF, e.g. "writings/my-new-essay.pdf"
     page     : on-site reading page, e.g. "reading/my-new-essay.html" (optional)
     venue    : where/when it was written (course, professor, date), optional
     meta     : tiny tag under the card (e.g. "12 pp. · PDF"), optional
     blurb    : one or two sentences describing the piece
     featured : true puts it in the rotating banner at the top (optional).
                Featured pieces also need "dek" and "lede".
     dek      : italic one-line summary for the banner (featured only)
     lede     : one or more paragraphs for the banner (featured only)
   ============================================================================ */

window.WRITINGS = [

  {
    category: "Honors Thesis",
    title: "Exploring the Identity Formation, Socialization, and Political Engagement of Second-Generation Immigrants",
    file: "writings/second-generation-immigrants-thesis.pdf",
    page: "reading/second-generation-immigrants-thesis.html",
    venue: "Commonwealth Honors College, UMass Amherst · May 2024",
    meta: "~49 pp. · PDF",
    blurb: "An honors thesis on how second-generation immigrants form political identity, and how family, community, and social pressures shape the way they enter the American electorate.",
    featured: true,
    dek: "How second-generation immigrants form political identity, and how socialization shapes the way they enter the American electorate.",
    lede: [
      "This honors thesis examines the political socialization and identity formation of second-generation immigrants, asking how family, community, and social pressures shape their political engagement and their role within the electorate.",
      "Completed through the Commonwealth Honors College at UMass Amherst, it pairs scholarship on immigration and political behavior with original analysis."
    ]
  },

  {
    category: "Research Paper",
    title: "Media Coverage of the War in Ukraine",
    file: "writings/media-coverage-war-in-ukraine.pdf",
    page: "reading/media-coverage-war-in-ukraine.html",
    venue: "PoliSci 393M",
    meta: "12 pp. · PDF",
    blurb: "A study of how political and market pressures shape media coverage of foreign conflict, using reporting on the Russo-Ukrainian War as a case study of the press's role in a democracy.",
    featured: true,
    dek: "Who gets a voice in the coverage of a foreign war, and how political and market pressures decide.",
    lede: [
      "This paper treats media coverage of the Russo-Ukrainian War as a case study in how the press performs its democratic functions: watchdog, election forum, informing society, and representing society.",
      "It argues that political and market pressures can bend coverage away from the public it is meant to serve, with consequences for both domestic and international affairs."
    ]
  },

  {
    category: "Policy Memo",
    title: "Finding a Sustainable Consensus: A Shared Duty to Mitigate Climate Change",
    file: "writings/climate-change-policy-memo.pdf",
    page: "reading/climate-change-policy-memo.html",
    venue: "UMass Amherst · December 2023",
    meta: "5 pp. · PDF",
    blurb: "A policy memo making the case that climate change is a bipartisan issue, with recommendations grounded in public-opinion data on corporate accountability, regulation, and constituent outreach.",
    featured: true,
    dek: "A policy case that climate change is a bipartisan issue, with a set of recommendations grounded in public opinion.",
    lede: [
      "Written as a policy memo, this piece argues that a year of extreme weather has made climate change impossible to treat as a partisan question.",
      "Drawing on public-opinion polling, it recommends placing accountability on corporations, incentivizing environment-friendly regulation, and expanding outreach to constituents."
    ]
  },

  {
    category: "Policy Analysis",
    title: "Immigration Rights: A Stakeholders Analysis",
    file: "writings/immigration-rights-stakeholders-analysis.pdf",
    page: "reading/immigration-rights-stakeholders-analysis.html",
    venue: "PoliSci 391PC · December 2023",
    meta: "10 pp. · PDF · Co-authored",
    blurb: "A stakeholder analysis of human rights within American immigration, weighing the competing interests and influence of Congress, U.S. Immigration and Customs Enforcement, and the American Immigration Council."
  },

  {
    category: "Political Theory",
    title: "Three Theories of Democratic Resistance",
    file: "writings/three-theories-analysis.pdf",
    page: "reading/three-theories-analysis.html",
    venue: "Arendt · Dahl · Milgram",
    meta: "3 pp. · PDF",
    blurb: "A comparative analysis of Hannah Arendt, Robert Dahl, and Stanley Milgram on whether, and how, citizens can resist the rise of an undemocratic leader."
  },

  {
    category: "International Security",
    title: "Public Opinion and International Security",
    file: "writings/international-security-final.pdf",
    page: "reading/international-security-final.html",
    venue: "International Security",
    meta: "3 pp. · PDF",
    blurb: "An essay on how public perception of norms, treaties, and international order shapes, and is shaped by, the security decisions of powerful states."
  },

  {
    category: "Foreign Policy",
    title: "Making Foreign Policy: The Instruments of Power",
    file: "writings/making-foreign-policy.pdf",
    page: "reading/making-foreign-policy.html",
    venue: "Foreign Policy",
    meta: "2 pp. · PDF",
    blurb: "An essay on how states construct foreign policy through the balance of positive and negative power and the diplomatic, informational, military, and economic instruments of statecraft."
  },

  {
    category: "Political Theory",
    title: "Obedience to Authority: A Milgram Analysis",
    file: "writings/stanley-milgram-analysis.pdf",
    page: "reading/stanley-milgram-analysis.html",
    venue: "After Stanley Milgram",
    meta: "2 pp. · PDF",
    blurb: "A close reading of Milgram's work on obedience, examining how hierarchy and social conditioning can erode individual conscience."
  }

];


/* ============================================================================
   JOURNALISM: The Bourne Enterprise & other published clips
   ----------------------------------------------------------------------------
   This list starts empty. As Helen's Bourne Enterprise articles are ready,
   add a block for each. Two ways to link a clip:

     • Online story:  set  "url": "https://www.capenews.net/..."
     • Uploaded PDF:  put the file in  writings/  and set  "file": "writings/clip.pdf"

   Example (delete the // in front of each line to use it):
   // {
   //   title: "Selectmen approve new harbor plan",
   //   publication: "The Bourne Enterprise",
   //   date: "March 2025",
   //   url: "https://www.capenews.net/bourne/...",
   //   blurb: "Coverage of the town's vote on the waterfront redevelopment."
   // }

   While this list is empty, the site shows a short "coming soon" note in the
   Newsroom section. As soon as you add one clip, that note is replaced by the
   real clips.
   ============================================================================ */

window.JOURNALISM = [

  // Bourne Enterprise articles will go here.

];

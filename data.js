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
   The entries below are generated automatically from the plain-text
   clippings in  articles/ , one .txt per published piece (Title / Author /
   Date / URL header, blank line, then the article body).

   HOW TO ADD A NEW CLIPPING
   -------------------------
   1. Save the article as plain text in  articles/  with that same header
      format (see any existing file there for an example).
   2. Run:
          python3 tools/gen_news.py
      This builds  news/<slug>.html  (the full article, readable on-site,
      with a link back to the original at the bottom) and rewrites the
      entire block below in this file. Do not hand-edit the block; your
      edits will be overwritten the next time the script runs.

   Each generated entry has: title, publication, date, an optional
   "coauthors" (when the byline includes writers other than Helen), url
   (the original story), page (the on-site news/ page), and blurb (the
   article's own lede paragraph, used verbatim).

   While this list is empty, the site shows a short "coming soon" note in the
   Newsroom section. As soon as it has an entry, that note is replaced by the
   real clips.
   ============================================================================ */

window.JOURNALISM = [

// AUTO-GENERATED BY tools/gen_news.py: entries below are rebuilt from articles/*.txt. Do not hand-edit; re-run the script instead.

  {
    title: "Collision On Scenic Highway Results In Three Transports To Hospitals",
    publication: "The Bourne Enterprise",
    date: "July 26, 2026",
    url: "https://www.capenews.net/police_fire/collision-on-scenic-highway-results-in-three-transports-to-hospitals/article_a22849e1-cbb8-40b6-a489-79c2764fbfb0.html",
    page: "news/collision-on-scenic-highway-results-in-three-transports-to-hospitals.html",
    blurb: "Bourne Police and Fire departments were dispatched at approximately 6:48 AM on Sunday, July 26, to a report of a motor vehicle accident on Scenic Highway near the Herring Run Rest Area."
  },

  {
    title: "No Injuries Reported In Seacoast Shores Boulevard House Fire",
    publication: "The Bourne Enterprise",
    date: "July 26, 2026",
    url: "https://www.capenews.net/police_fire/no-injuries-reported-in-seacoast-shores-boulevard-house-fire/article_7d693f38-6c52-4cef-9b1d-847d5cc3f993.html",
    page: "news/no-injuries-reported-in-seacoast-shores-boulevard-house-fire.html",
    blurb: "A fire at a home on Seacoast Shores Boulevard in East Falmouth led to both the Falmouth and Joint Base Cape Cod fire departments to respond on Saturday, July 25."
  },

  {
    title: "Fire At Red Brook Home Results In Fatality",
    publication: "The Bourne Enterprise",
    date: "July 25, 2026",
    url: "https://www.capenews.net/falmouth/news/fire-at-red-brook-home-results-in-fatality/article_a87e9d79-3513-426e-9205-d7757d571cf9.html",
    page: "news/fire-at-red-brook-home-results-in-fatality.html",
    blurb: "An early morning fire in a single-family home at 15 Red Brook Road in East Falmouth resulted in a fatality on Friday, July 24."
  },

  {
    title: "Bourne Select Board Hears Update On MOU Progress",
    publication: "The Bourne Enterprise",
    date: "July 24, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-hears-update-on-mou-progress/article_9c8d7286-f9d2-4e3e-b5ee-bd7b549344ff.html",
    page: "news/bourne-select-board-hears-update-on-mou-progress.html",
    blurb: "Town Administrator Marlene V. McCollem provided an update to the Select Board in regard to the development of a Memorandum of Understanding (MOU) with the Massachusetts Department of Transportation (MassDOT) regarding the Cape Cod bridges replacement project during a meeting held on Tuesday , July 21 ."
  },

  {
    title: "Bourne Select Board Reconfirms Cataumet Fish Liquor License Legislation Language",
    publication: "The Bourne Enterprise",
    date: "July 24, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-reconfirms-cataumet-fish-liquor-license-legislation-language/article_05686be4-6dc2-43bc-ad3a-cee45a2c2586.html",
    page: "news/bourne-select-board-reconfirms-cataumet-fish-liquor-license-legislation-language.html",
    blurb: "The Bourne Select Board unanimously voted to approve the language featured in the most recent draft of the special legislation liquor license for Cataumet Fish at its meeting on Tuesday , July 21 , reaffirming its vote on June 9."
  },

  {
    title: "Sampson Selected By Bourne Select Board As New Town Moderator",
    publication: "The Bourne Enterprise",
    date: "July 24, 2026",
    url: "https://www.capenews.net/bourne/news/sampson-selected-by-bourne-select-board-as-new-town-moderator/article_f2912034-4aa3-4de6-b85e-7863df23d2e3.html",
    page: "news/sampson-selected-by-bourne-select-board-as-new-town-moderator.html",
    blurb: "Arthur Wayne Sampson will serve as Bourne’s town moderator until the town’s annual election next spring after the Select Board unanimously voted to affirm his nomination at its meeting on Tuesday , July 21 ."
  },

  {
    title: "Watershed Permits Process Continues For Bourne Select Board",
    publication: "The Bourne Enterprise",
    date: "July 24, 2026",
    url: "https://www.capenews.net/bourne/news/watershed-permits-process-continues-for-bourne-select-board/article_f75feb22-4954-4f3d-97cf-207c4eb62867.html",
    page: "news/watershed-permits-process-continues-for-bourne-select-board.html",
    blurb: "The Bourne Select Board heard updates about the watershed permit application processes for Bourne’s two watershed areas—Phinneys Harbor and Megansett Squeteague Harbor from Town Administrator Marlene V. McCollem at its meeting on Tuesday , July 21 ."
  },

  {
    title: "Bourne Select Board Prepares Questions, Comments For MassDOT Public Hearing",
    publication: "The Bourne Enterprise",
    date: "July 22, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-prepares-questions-comments-for-massdot-public-hearing/article_50271b31-46e6-4221-b660-a479faac7254.html",
    page: "news/bourne-select-board-prepares-questions-comments-for-massdot-public-hearing.html",
    blurb: "In preparation for the Massachusetts Department of Transportation’s (MassDOT) design public hearing regarding the Sagamore Bridge replacement project on Thursday, July 23, from 6 to 8 PM at the Bourne High School, the Bourne Select Board formulated questions and comments at its meeting on Tuesday , July 21 ."
  },

  {
    title: "Bourne Historical Commission Approves Three Remodeling Requests",
    publication: "The Bourne Enterprise",
    date: "July 17, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-historical-commission-approves-three-remodeling-requests/article_5beb21ae-006b-4ab8-a471-940a33d58143.html",
    page: "news/bourne-historical-commission-approves-three-remodeling-requests.html",
    blurb: "The Bourne Historical Commission approved requests for construction on three properties in Bourne, all older than 75 years, at its demolition delay hearing on Tuesday , July 14 ."
  },

  {
    title: "Bourne Historical Commission Discusses Demolitions In Historic Taylor's Point",
    publication: "The Bourne Enterprise",
    date: "July 17, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-historical-commission-discusses-demolitions-in-historic-taylors-point/article_a19a01da-369a-4c04-9df9-e774df96839f.html",
    page: "news/bourne-historical-commission-discusses-demolitions-in-historic-taylors-point.html",
    blurb: "The development of the Massachusetts Maritime Academy’s (MMA) campus on Taylor’s Point in Buzzards Bay was a point of discussion at the Bourne Historical Commission’s meeting on Tuesday , July 14 , as members emphasized the historic and economic importance of the neighborhood."
  },

  {
    title: "Bourne Historical Commission Welcomes New Member",
    publication: "The Bourne Enterprise",
    date: "July 17, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-historical-commission-welcomes-new-member/article_55a85420-cb7e-4db5-872b-d3be07f99b29.html",
    page: "news/bourne-historical-commission-welcomes-new-member.html",
    blurb: "The Bourne Historical Commission welcomed a new member, appointed officers and named representatives at its meeting on Tuesday , July 14 ."
  },

  {
    title: "Bourne Select Board Approves DPW's Chapter 90 Request For FY27",
    publication: "The Bourne Enterprise",
    date: "July 17, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-approves-dpws-chapter-90-request-for-fy27/article_b855f01f-a1b2-46e3-951e-d362d46b2226.html",
    page: "news/bourne-select-board-approves-dpws-chapter-90-request-for-fy27.html",
    blurb: "Bourne Public Works Director Matthew Sawicki’s request for use of Chapter 90 funds for Fiscal Year 2027 projects was approved unanimously by the Select Board at its meeting on July 7."
  },

  {
    title: "Bourne Select Board Approves Additional Accessible Parking Spot At Community Center",
    publication: "The Bourne Enterprise",
    date: "July 15, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-approves-additional-accessible-parking-spot-at-community-center/article_0824e0ac-4a10-497d-a858-169224d2fa9d.html",
    page: "news/bourne-select-board-approves-additional-accessible-parking-spot-at-community-center.html",
    blurb: "Upon hearing requests for additional accessible parking spots at two town-owned properties at its meeting on July 7, the Bourne Select Board ultimately decided to have its policy subcommittee examine the town’s accessible parking regulations further."
  },

  {
    title: "Local Donor, Recipient Raise Awareness For Organ Donations",
    publication: "The Bourne Enterprise",
    date: "July 10, 2026",
    url: "https://www.capenews.net/bourne/news/local-donor-recipient-raise-awareness-for-organ-donations/article_da8c33cc-c01c-431b-bc53-060f29e1329a.html",
    page: "news/local-donor-recipient-raise-awareness-for-organ-donations.html",
    blurb: "Kidney donor Kelly DeMello of Buzzards Bay and recipient Paul Rakoski of Newmarket, New Hampshire, recently participated in the Transplant Games of America in Denver."
  },

  {
    title: "Barnstable County Entomologist Breaks Down Tick Risks, Offers Safety Tips",
    publication: "The Bourne Enterprise",
    date: "July 10, 2026",
    url: "https://www.capenews.net/regional_news/barnstable-county-entomologist-breaks-down-tick-risks-offers-safety-tips/article_e6312311-d599-45f8-b868-a86e9c7fbade.html",
    page: "news/barnstable-county-entomologist-breaks-down-tick-risks-offers-safety-tips.html",
    blurb: "Tick exposure is highest during the spring and summer months and again in the mid- to late fall, with emergency room visits related to tick bites on Cape Cod typically spiking in June and July, Barnstable County entomologist Escher Cattle said during a presentation to the Barnstable County Board of Regional Commissioners and the Bourne Select Board on June 29."
  },

  {
    title: "Bourne Commission On Disabilities Approves Funds For Basketball Court Accessibility",
    publication: "The Bourne Enterprise",
    date: "July 10, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-commission-on-disabilities-approves-funds-for-basketball-court-accessibility/article_4846ff24-0af6-423c-ba68-15e348c255c2.html",
    page: "news/bourne-commission-on-disabilities-approves-funds-for-basketball-court-accessibility.html",
    blurb: "At its meeting on June 30, the Bourne Commission on Disabilities voted to approve the Bourne Recreation Committee’s request for funds to provide accessibility to the recreation area behind the Bourne Veteran’s Memorial Community Center."
  },

  {
    title: "County Advances Plans For Regional Compost Facility",
    publication: "The Bourne Enterprise",
    date: "July 10, 2026",
    url: "https://www.capenews.net/regional_news/county-advances-plans-for-regional-compost-facility/article_fc0aab2f-8016-4c9a-8ca1-0a87a2559a81.html",
    page: "news/county-advances-plans-for-regional-compost-facility.html",
    blurb: "Barnstable County is moving forward with plans to develop a regional composting facility on Joint Base Cape Cod, with officials now working through property transfer, permitting and funding questions for the proposed site."
  },

  {
    title: "Food Trucks Spark Debate At Bourne Select Board",
    publication: "The Bourne Enterprise",
    date: "July 10, 2026",
    url: "https://www.capenews.net/bourne/news/food-trucks-spark-debate-at-bourne-select-board/article_c8610dc9-786d-48ed-a7f2-62df6cdce70c.html",
    page: "news/food-trucks-spark-debate-at-bourne-select-board.html",
    blurb: "Small business and food truck owners filled the meeting room at the Bourne Veteran’s Memorial Community Center during a discussion on the presence of food trucks during concerts at Buzzards Bay Park during a select board meeting held on Tuesday , July 7 ."
  },

  {
    title: "Bourne Select Board Deliberates On Watershed Permits Process",
    publication: "The Bourne Enterprise",
    date: "July 3, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-deliberates-on-watershed-permits-process/article_183f61e5-ad50-4298-855d-6d7c355efba4.html",
    page: "news/bourne-select-board-deliberates-on-watershed-permits-process.html",
    blurb: "The Bourne Select Board continued its discussion on Tuesday , June 30, in regard to obtaining watershed permits for the town’s two watershed areas: Phinneys Harbor and Megansett Squeteague Harbor."
  },

  {
    title: "Bourne Select Board Discusses MOU For Bridges Project, Requests Information For MassDOT Meeting",
    publication: "The Bourne Enterprise",
    date: "July 3, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-discusses-mou-for-bridges-project-requests-information-for-massdot-meeting/article_0d793a4d-c6bc-45ec-acd9-c6bfe36e9b66.html",
    page: "news/bourne-select-board-discusses-mou-for-bridges-project-requests-information-for-massdot-meeting.html",
    blurb: "In relation to the Cape Cod bridges replacement project, the Bourne Select Board discussed its comments in preparation for an upcoming design public hearing and developing a memorandum of understanding (MOU) with the Massachusetts Department of Transportation at its meeting on Tuesday , June 30 ."
  },

  {
    title: "Bourne Select Board Hears HCA Updates, Supports Liquor License Legislation",
    publication: "The Bourne Enterprise",
    date: "July 3, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-hears-hca-updates-supports-liquor-license-legislation/article_5588de6a-b790-44c1-9e0c-56b7bb35d3b3.html",
    page: "news/bourne-select-board-hears-hca-updates-supports-liquor-license-legislation.html",
    blurb: "The Bourne Select Board at its meeting on June 30 received updates from the three cannabis dispensaries that were awarded a social equity host community agreement (HCA) with the town: Capeway Cannabis, Bourne Cannabis and Chief Cannabis."
  },

  {
    title: "Bourne Select Board Hears HCA Updates",
    publication: "The Bourne Enterprise",
    date: "July 3, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-hears-hca-updates/article_67e8950e-a8f8-4759-8044-c3b42d7a66cb.html",
    page: "news/bourne-select-board-hears-hca-updates.html",
    blurb: "The Bourne Select Board received updates at its meeting on June 30 from the three cannabis dispensaries in town that were awarded a social equity host community agreement (HCA) with the town: Capeway Cannabis, Bourne Cannabis and Chief Cannabis."
  },

  {
    title: "Bourne Select Board To File For Another Liquor License",
    publication: "The Bourne Enterprise",
    date: "July 3, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-to-file-for-another-liquor-license/article_348a8c31-e9c8-4490-affd-59c72896129c.html",
    page: "news/bourne-select-board-to-file-for-another-liquor-license.html",
    blurb: "The Select Board unanimously voted to file special legislation for a liquor license for an annual all-alcoholic beverages retail license for off-premise consumption at 365 Barlows Landing Road in Pocasset. A citizen’s petition filed by Jigneshkumar Patel, an owner of H&J Convenience Inc., which also does business as Country Farms in Pocasset, had been approved at Special Town Meeting this past May."
  },

  {
    title: "Bourne Select Board Waives First Right Of Refusal",
    publication: "The Bourne Enterprise",
    date: "July 3, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-waives-first-right-of-refusal/article_19b2a42b-9e67-412b-95f8-c12cce880ccf.html",
    page: "news/bourne-select-board-waives-first-right-of-refusal.html",
    blurb: "The Select Board unanimously voted to not exercise its right of first refusal to purchase a .97-acre portion of land after the property’s owners sent the town a notice of intent to sell, pursuant to Chapter 61A, Section 14 of the state’s general laws."
  },

  {
    title: "Road Closures Announced For Bourne's Fourth Of July Parade, Police Chief Shares Safety Reminders",
    publication: "The Bourne Enterprise",
    date: "July 3, 2026",
    url: "https://www.capenews.net/bourne/news/road-closures-announced-for-bournes-fourth-of-july-parade-police-chief-shares-safety-reminders/article_a537ae3a-1a6c-4bef-958f-667a56ebd620.html",
    page: "news/road-closures-announced-for-bournes-fourth-of-july-parade-police-chief-shares-safety-reminders.html",
    blurb: "With the summer season revving up and the upcoming Fourth of July celebrations on Saturday, Bourne Police Chief Brandon M. Esip presented safety reminders and upcoming temporary road closures at the Select Board’s meeting on Tuesday , June 30 ."
  },

  {
    title: "Patuisset Beach Reopens After Testing Meets 'Safe And Acceptable Standards'",
    publication: "The Bourne Enterprise",
    date: "July 1, 2026",
    url: "https://www.capenews.net/bourne/news/patuisset-beach-reopens-after-testing-meets-safe-and-acceptable-standards/article_bf2e609a-850a-412d-baf5-cbdd9e66c84c.html",
    page: "news/patuisset-beach-reopens-after-testing-meets-safe-and-acceptable-standards.html",
    blurb: "Patuisset Beach was reopened on Wednesday , July 1 , after testing revealed that the water quality had improved."
  },

  {
    title: "Barry Johnson Receives Citation From Barnstable County Commissioners",
    publication: "The Bourne Enterprise",
    date: "July 1, 2026",
    url: "https://www.capenews.net/bourne/news/barry-johnson-receives-citation-from-barnstable-county-commissioners/article_b9510cab-3d3c-4289-9870-9dbff1b82f68.html",
    page: "news/barry-johnson-receives-citation-from-barnstable-county-commissioners.html",
    blurb: "Barry H. Johnson received a citation recognizing his more than 50-year public service career at a joint meeting between the Barnstable County Board of Regional Commissioners and the Bourne Select Board on Monday , June 29 ."
  },

  {
    title: "Bourne To Open Cooling Center Due To Hot Temperatures",
    publication: "The Bourne Enterprise",
    date: "June 29, 2026",
    url: "https://www.capenews.net/bourne/briefs/bourne-to-open-cooling-center-due-to-hot-temperatures/article_34b623fc-6e85-4767-b7c9-194478888962.html",
    page: "news/bourne-to-open-cooling-center-due-to-hot-temperatures.html",
    blurb: "On Monday, June 29, the Town of Bourne announced that it will open a cooling center at the Bourne Police Department, located at 35 Armory Road in Buzzards Bay, beginning on Tuesday, June 30, until Friday, July 3."
  },

  {
    title: "No Injuries Reported After Two-Vehicle Accident On Teaticket Highway",
    publication: "The Bourne Enterprise",
    date: "June 28, 2026",
    url: "https://www.capenews.net/police_fire/no-injuries-reported-after-two-vehicle-accident-on-teaticket-highway/article_1c63e134-2b81-4871-aa11-21ad7b45d82e.html",
    page: "news/no-injuries-reported-after-two-vehicle-accident-on-teaticket-highway.html",
    blurb: "On Sunday, June 28, at 3:58 PM, the Falmouth Fire Rescue Department responded to a report of a motor vehicle collision at 485 Teaticket Highway, near the Great Bay Motel."
  },

  {
    title: "Three-Car Accident On MacArthur Boulevard Southbound",
    publication: "The Bourne Enterprise",
    date: "June 28, 2026",
    url: "https://www.capenews.net/police_fire/three-car-accident-on-macarthur-boulevard-southbound/article_6344c088-2fd4-449a-925a-5d177a21ec4c.html",
    page: "news/three-car-accident-on-macarthur-boulevard-southbound.html",
    blurb: "At 11 AM, the Bourne Fire and Rescue Department responded to a report of a motor vehicle accident on MacArthur Boulevard heading southbound, on Sunday, June 28."
  },

  {
    title: "Vehicle Crashes Into Redemption Center At Kenyon’s Market",
    publication: "The Bourne Enterprise",
    date: "June 27, 2026",
    url: "https://www.capenews.net/police_fire/vehicle-crashes-into-redemption-center-at-kenyon-s-market/article_3f6fe250-ba2c-4e18-9ce9-9a70ee0385ec.html",
    page: "news/vehicle-crashes-into-redemption-center-at-kenyons-market.html",
    blurb: "On Saturday, June 27, at 4:58 PM, the Falmouth Fire and Rescue Department responded to a report of a motor vehicle accident at Kenyon’s Market located at 769 East Falmouth Highway."
  },

  {
    title: "Falmouth Fire Dept. Responds To Two-Car Accident On Rt. 28",
    publication: "The Bourne Enterprise",
    date: "June 27, 2026",
    url: "https://www.capenews.net/police_fire/falmouth-fire-dept-responds-to-two-car-accident-on-rt-28/article_4e99fbd9-7671-4b16-aadc-0b780212cdd2.html",
    page: "news/falmouth-fire-dept-responds-to-two-car-accident-on-rt-28.html",
    blurb: "The Falmouth Fire and Rescue Department responded to a report of a motor-vehicle collision at East Falmouth Highway and Muriel Lane, at 11:16 AM on Saturday, June 27."
  },

  {
    title: "Car Versus Motorbike Accident On Falmouth Road",
    publication: "The Bourne Enterprise",
    date: "June 27, 2026",
    url: "https://www.capenews.net/police_fire/car-versus-motorbike-accident-on-falmouth-road/article_7e25ef46-d27a-4e19-9e3e-571a7e651fd1.html",
    page: "news/car-versus-motorbike-accident-on-falmouth-road.html",
    blurb: "Around 9:22 AM on Saturday, June 27, the Mashpee Fire Department was dispatched after a report of a motor vehicle-motorbike accident at the intersection of Falmouth Road and Bowdoin Road."
  },

  {
    title: "Bourne Health Board Advocates Against Ultra-Processed Foods",
    publication: "The Bourne Enterprise",
    date: "June 26, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-health-board-advocates-against-ultra-processed-foods/article_2e26a668-4d56-4a93-b167-8d511f4fabc7.html",
    page: "news/bourne-health-board-advocates-against-ultra-processed-foods.html",
    blurb: "The Bourne Board of Health unanimously voted to send a statement, which was drafted by board clerk Dr. Miguel A. Prieto, to the Select Board and the School Committee, for their consideration and for submission to The Bourne Enterprise at its meeting on Wednesday , June 24 . The statement, which the board had voted to sign on to, stated and explained the board’s opposition to ultra-processed foods and the consumption of it, especially in schools, due to a new study revealing a correlation to an increased risk of health issues."
  },

  {
    title: "Bourne Sewer Commissioners Continue To Discuss Intermunicipal Agreement",
    publication: "The Bourne Enterprise",
    date: "June 26, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-sewer-commissioners-continue-to-discuss-intermunicipal-agreement/article_9f46d565-29b0-4792-907d-86d4536cbdb9.html",
    page: "news/bourne-sewer-commissioners-continue-to-discuss-intermunicipal-agreement.html",
    blurb: "The Board of Sewer Commissioners continued its discussion on Tuesday , June 23, about the intermunicipal agreement (IMA) between the Town of Bourne and the Town of Wareham for the transfer of Bourne’s flow to Wareham’s wastewater treatment facility. At its last meeting on May 26 , the board had agreed to examine and review the IMA to gain a better understanding of its details."
  },

  {
    title: "Elevated Bacteria Levels Close Patuisset Beach",
    publication: "The Bourne Enterprise",
    date: "June 26, 2026",
    url: "https://www.capenews.net/bourne/news/elevated-bacteria-levels-close-patuisset-beach/article_353f9c8f-91de-4617-8bf8-82bf13965ee5.html",
    page: "news/elevated-bacteria-levels-close-patuisset-beach.html",
    blurb: "Routine weekly testing on June 19 revealed an elevated presence of fecal coliform bacteria at Patuisset Beach, resulting in the beach’s closure."
  },

  {
    title: "Updates To Buzzards Bay Wastewater Treatment Facility Complete",
    publication: "The Bourne Enterprise",
    date: "June 26, 2026",
    url: "https://www.capenews.net/bourne/news/updates-to-buzzards-bay-wastewater-treatment-facility-complete/article_616d292c-ff84-4b03-a15e-daedd8f984d0.html",
    page: "news/updates-to-buzzards-bay-wastewater-treatment-facility-complete.html",
    blurb: "A status update on the Buzzards Bay Wastewater Treatment Facility was provided to the Bourne Board of Sewer Commissioners by Public Works Director Matthew Sawicki on Tuesday , June 23 , after Kubota USA, the manufacturer of the facility’s membrane bioreactor, conducted a trial run in the beginning of May after some updates were made at the facility."
  },

  {
    title: "Local, State Officials Take A Ride On Potential MBTA Rail Service Line",
    publication: "The Bourne Enterprise",
    date: "June 24, 2026",
    url: "https://www.capenews.net/bourne/news/local-state-officials-take-a-ride-on-potential-mbta-rail-service-line/article_8c563ac6-893c-4efa-b89b-2659b1915b83.html",
    page: "news/local-state-officials-take-a-ride-on-potential-mbta-rail-service-line.html",
    blurb: "State and local officials taking a closer look at what it would take to restore year-round passenger rail service to Cape Cod, toured existing rail infrastructure between Buzzards Bay and Middleborough aboard an MBTA inspection train on June 22."
  },

  {
    title: "Bourne Select Board Reviews Special Legislation For Liquor Licenses",
    publication: "The Bourne Enterprise",
    date: "June 19, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-reviews-special-legislation-for-liquor-licenses/article_793c01b9-99e3-466c-a65b-27cc24a4b189.html",
    page: "news/bourne-select-board-reviews-special-legislation-for-liquor-licenses.html",
    blurb: "At its meeting on June 9, the Bourne Select Board aimed to be consistent with the language featured in two individual special legislation liquor licenses for Cataumet Fish and H&J Convenience, Inc."
  },

  {
    title: "Bourne Select Board Weighs Exercising Right Of First Refusal",
    publication: "The Bourne Enterprise",
    date: "June 19, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-weighs-exercising-right-of-first-refusal/article_6a06db19-0b5b-4832-a5a3-cc91f852611a.html",
    page: "news/bourne-select-board-weighs-exercising-right-of-first-refusal.html",
    blurb: "The Bourne Select Board discussed the prospect of the town purchasing a .97-acre portion of land after the property’s owners sent the town a notice of intent to sell, pursuant to Chapter 61A, Section 14 of the state’s general laws, during a meeting held on June 9."
  },

  {
    title: "Pocasset Water Quality Coalition Advocates For Stricter Cesspool Regulations",
    publication: "The Bourne Enterprise",
    date: "June 19, 2026",
    url: "https://www.capenews.net/bourne/news/pocasset-water-quality-coalition-advocates-for-stricter-cesspool-regulations/article_8b528a4e-edc0-4fde-a8d3-767b05df5bba.html",
    page: "news/pocasset-water-quality-coalition-advocates-for-stricter-cesspool-regulations.html",
    blurb: "Pocasset Water Quality Coalition president Keith Barber advocated for changing the amount of time that Bourne residents have to upgrade a cesspool to a septic system from two years to one year during a Board of Health meeting on June 10."
  },

  {
    title: "Bourne Select Board Briefs: Marina Update, Approves BANs Sale, Supports SAFER Grant",
    publication: "The Bourne Enterprise",
    date: "June 17, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-briefs-marina-update-approves-bans-sale-supports-safer-grant/article_8182614e-f591-4999-a073-d027acb64da7.html",
    page: "news/bourne-select-board-briefs-marina-update-approves-bans-sale-supports-safer-grant.html",
    blurb: "Bourne Deparment of Natural Resources Director Hannah Lawrence provided an update on the status of the Monument Beach marina expansion project to the Bourne Select Board at its meeting on June 9."
  },

  {
    title: "Bourne Bike, Pedestrian Committee Updates Select Board",
    publication: "The Bourne Enterprise",
    date: "June 12, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-bike-pedestrian-committee-updates-select-board/article_239ed32b-feea-4795-9863-487c3aed9c9a.html",
    page: "news/bourne-bike-pedestrian-committee-updates-select-board.html",
    blurb: "The Town Administrator’s Advisory Committee on Pedestrian Bicycle Pathway shared an update on the future of both the rail trail project and it as a committee at the Select Board’s meeting on Tuesday , June 9 ."
  },

  {
    title: "Community Input Emphasized In Replacement Of Bourne, Sagamore Bridges",
    publication: "The Bourne Enterprise",
    date: "June 12, 2026",
    url: "https://www.capenews.net/bourne/news/community-input-emphasized-in-replacement-of-bourne-sagamore-bridges/article_f7fa7ed5-8b23-4bb9-a5b0-b0413c6a8bb0.html",
    page: "news/community-input-emphasized-in-replacement-of-bourne-sagamore-bridges.html",
    blurb: "The Cape Cod Bridges Project Advisory Group gathered at the Massachusetts Maritime Academy campus on Tuesday to share project updates and next steps, and to provide an opportunity for discussion that focused primarily on facilitating dialogue and promoting community involvement."
  },

  {
    title: "New Hen Cove Boat Ramp Slated For Completion",
    publication: "The Bourne Enterprise",
    date: "June 12, 2026",
    url: "https://www.capenews.net/bourne/news/new-hen-cove-boat-ramp-slated-for-completion/article_4295125d-3030-49d4-838e-4c80e6c426c2.html",
    page: "news/new-hen-cove-boat-ramp-slated-for-completion.html",
    blurb: "Bourne Department of Natural Resources Director Hannah Lawrence announced the end date for the Hen Cove ramp project in Pocasset at the Select Board’s meeting on Tuesday , June 9 ."
  },

  {
    title: "Bourne Town Counsel Clarifies Appointment Process For Town Moderator",
    publication: "The Bourne Enterprise",
    date: "June 10, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-town-counsel-clarifies-appointment-process-for-town-moderator/article_31150244-3655-409d-ae5e-46a29448c7c0.html",
    page: "news/bourne-town-counsel-clarifies-appointment-process-for-town-moderator.html",
    blurb: "With a vacancy in the position of town moderator, Town Counsel Bryan F. Bertram and Town Administrator Marlene V. McCollem provided clarification as to what the next steps are in filling that role at the Bourne Select Board’s meeting on Tuesday , June 9 ."
  },

  {
    title: "Big Brother Big Sister Matches Celebrate Year of Mentorship",
    publication: "The Bourne Enterprise",
    date: "June 5, 2026",
    url: "https://www.capenews.net/bourne/news/big-brother-big-sister-matches-celebrate-year-of-mentorship/article_549c14f8-9f33-4000-9f68-f1b16a756660.html",
    page: "news/big-brother-big-sister-matches-celebrate-year-of-mentorship.html",
    blurb: "Big Brother Big Sister duos celebrated the relationships they formed through the youth-mentorship program this year during a graduation ceremony held at Massachusetts Maritime Academy (MMA) on Wednesday , June 3 . An additional ceremony was held on Thursday , June 4 ."
  },

  {
    title: "Bourne Selected For Living Shorelines Project To Restore Salt Marsh",
    publication: "The Bourne Enterprise",
    date: "June 5, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-selected-for-living-shorelines-project-to-restore-salt-marsh/article_173febe8-ee0d-4228-af3f-bb78b73ff351.html",
    page: "news/bourne-selected-for-living-shorelines-project-to-restore-salt-marsh.html",
    blurb: "The Nature Conservancy recently selected Bourne as one of three towns in Massachusetts to participate in an inaugural living shorelines planning series to restore approximately 1,000 square feet of salt marsh located in Monks Park."
  },

  {
    title: "Survey Seeks Input From Bourne Residents Ages 60+ On Community Needs",
    publication: "The Bourne Enterprise",
    date: "June 3, 2026",
    url: "https://www.capenews.net/bourne/briefs/survey-seeks-input-from-bourne-residents-ages-60-on-community-needs/article_027ba0b6-08d7-43b3-879f-13a03da04a43.html",
    page: "news/survey-seeks-input-from-bourne-residents-ages-60-on-community-needs.html",
    blurb: "Bourne residents over the age of 60 will have a chance to voice and share their experiences with the Town of Bourne and the Council on Aging (COA) throughout June."
  },

  {
    title: "Bourne Sewer Commission Discusses Intermunicipal Agreement, Wastewater Treatment Facility",
    publication: "The Bourne Enterprise",
    date: "May 29, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-sewer-commission-discusses-intermunicipal-agreement-wastewater-treatment-facility/article_8ddd5b7f-1866-4b75-906b-3220da7e47d0.html",
    page: "news/bourne-sewer-commission-discusses-intermunicipal-agreement-wastewater-treatment-facility.html",
    blurb: "The Bourne Board of Sewer Commissioners discussed the intermunicipal agreement with the Town of Wareham regarding wastewater treatment and the status of the Buzzards Bay Wastewater Treatment Facility project at its meeting on Tuesday , May 26 ."
  },

  {
    title: "Bourne Sewer Commissioners Vote To Reappoint Officers",
    publication: "The Bourne Enterprise",
    date: "May 29, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-sewer-commissioners-vote-to-reappoint-officers/article_cde97fcc-e4d1-462d-82f9-6f619d41e272.html",
    page: "news/bourne-sewer-commissioners-vote-to-reappoint-officers.html",
    blurb: "The Bourne Board of Sewer Commissioners voted to maintain its officer positions at its meeting on Tuesday , May 26 , with Anne-Marie Siroonian, Jeanne L. Azarovitz and Mary Jane Mastrangelo set to continue to serve as chairwoman, vice chairwoman and clerk, respectively, for another year."
  },

  {
    title: "Bourne Town Counsel Confirms Minimal Impact Of Pathway Construction At Keith Field",
    publication: "The Bourne Enterprise",
    date: "May 29, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-town-counsel-confirms-minimal-impact-of-pathway-construction-at-keith-field/article_1b3f4663-7a64-46ce-b766-2217f686e3c5.html",
    page: "news/bourne-town-counsel-confirms-minimal-impact-of-pathway-construction-at-keith-field.html",
    blurb: "The Bourne Select Board received an update from town counsel regarding the Massachusetts Department of Transportation’s (MassDOT) request for concurrence in regard to a proposed improvement around Keith Field in South Sagamore."
  },

  {
    title: "Upper Cape Tech Looks To Replace Roof, Build New Gym",
    publication: "The Bourne Enterprise",
    date: "May 29, 2026",
    url: "https://www.capenews.net/bourne/news/upper-cape-tech-looks-to-replace-roof-build-new-gym/article_d910d523-80ed-4add-9573-4c1fe1bd64bf.html",
    page: "news/upper-cape-tech-looks-to-replace-roof-build-new-gym.html",
    blurb: "Upper Cape Cod Regional Technical School (UCT) has been accepted into the Massachusetts School Building Authority (MSBA) subsidy program, marking a major step forward in securing funds for a new roof for the school’s main building and a new gymnasium. The state program will help offset the cost of the project, but the sending towns will be responsible for covering the portion not reimbursed by the MSBA."
  },

  {
    title: "Bourne Select Board Votes On Officer Positions",
    publication: "The Bourne Enterprise",
    date: "May 27, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-votes-on-officer-positions/article_c559c307-43d5-406d-b418-8198ebadc4d1.html",
    page: "news/bourne-select-board-votes-on-officer-positions.html",
    blurb: "Melissa A. Ferretti and Anne-Marie Siroonian will retain their positions as chairwoman and vice chairwoman of the Bourne Select Board, respectively, and Mary Jane Mastrangelo was newly voted to serve as the board’s clerk, after the board discussed and voted on the matter at its meeting on Tuesday , May 26 ."
  },

  {
    title: "Chapoquoit Yacht Club Launches Collaborations",
    publication: "The Bourne Enterprise",
    date: "May 22, 2026",
    url: "https://www.capenews.net/bourne/news/chapoquoit-yacht-club-launches-collaborations/article_95786ba9-1f5f-443f-be4b-478fc2f74002.html",
    page: "news/chapoquoit-yacht-club-launches-collaborations.html",
    blurb: "The Chapoquoit Yacht Club (CYC) has set sail on a new journey in its 123-year history."
  },

  {
    title: "Gas Prices Rising Across Upper Cape, But Drivers' Habits Largely Unchanged",
    publication: "The Bourne Enterprise",
    date: "May 22, 2026",
    coauthors: "Lin Lin Hutchinson, Cearra O’Hern and Owen Drury Sullivan",
    url: "https://www.capenews.net/regional_news/gas-prices-rising-across-upper-cape-but-drivers-habits-largely-unchanged/article_74cd94d9-73fe-4f28-a593-4b3c843861e9.html",
    page: "news/gas-prices-rising-across-upper-cape-but-drivers-habits-largely-unchanged.html",
    blurb: "From January to April, gas prices per gallon in Massachusetts have risen to well over $4. Businesses, towns and consumers have suffered as a result, and with Memorial Day weekend officially here, the Enterprise set out to see how these costs have impacted the towns, gas stations and drivers on the Upper Cape."
  },

  {
    title: "Bourne Resident Shaves Her Hair For Childhood Cancer Fundraiser",
    publication: "The Bourne Enterprise",
    date: "May 20, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-resident-shaves-her-hair-for-childhood-cancer-fundraiser/article_f42eb49a-085b-421e-a5b4-64cc8dc59de3.html",
    page: "news/bourne-resident-shaves-her-hair-for-childhood-cancer-fundraiser.html",
    blurb: "This will not be Susan Caffrey’s first time shaving her hair in the name of fundraising and raising awareness for childhood cancer."
  },

  {
    title: "Bourne Police Station Roof Building Committee Appoints New Members",
    publication: "The Bourne Enterprise",
    date: "May 15, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-police-station-roof-building-committee-appoints-new-members/article_a0b10dd8-a05e-41ff-9124-422529320363.html",
    page: "news/bourne-police-station-roof-building-committee-appoints-new-members.html",
    blurb: "Two of the three specialized seats on the Police Station Roof Building Committee have been filled. The seats had previously been vacant, resulting in the Select Board temporarily seating the committee, with the intention of pursuing filling the three seats with interested applicants. The matter was discussed during a Select Board meeting held on Tuesday , May 12 ."
  },

  {
    title: "Bourne Select Board Approves License For Bakery",
    publication: "The Bourne Enterprise",
    date: "May 15, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-approves-license-for-bakery/article_febfaf5a-1770-478b-949a-e8f38564f3f5.html",
    page: "news/bourne-select-board-approves-license-for-bakery.html",
    blurb: "Buzzards Bay’s Main Street is one step closer to having Uncle Jon’s Cookies."
  },

  {
    title: "Bourne Select Board Approves Licenses for New Golf Simulation Business",
    publication: "The Bourne Enterprise",
    date: "May 15, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-approves-licenses-for-new-golf-simulation-business/article_4b717f73-dc37-49ae-a08f-62528a65fc25.html",
    page: "news/bourne-select-board-approves-licenses-for-new-golf-simulation-business.html",
    blurb: "Another step was taken for the proposed golf simulator business on MacArthur Boulevard, as the Bourne Select Board approved an annual general on-premises all alcoholic beverages license and a new annual entertainment license."
  },

  {
    title: "Demolition Of Sagamore Beach Home Approved By Bourne Historical Commission",
    publication: "The Bourne Enterprise",
    date: "May 15, 2026",
    url: "https://www.capenews.net/bourne/news/demolition-of-sagamore-beach-home-approved-by-bourne-historical-commission/article_b91e0365-849c-43df-adb0-209ba7181b95.html",
    page: "news/demolition-of-sagamore-beach-home-approved-by-bourne-historical-commission.html",
    blurb: "The Bourne Historical Commission has approved the proposed demolition of a house at 210 Old Plymouth Road in Sagamore Beach. Town records show the home was built in 1948."
  },

  {
    title: "Federal, State And County Delegation Addresses Bourne Select Board",
    publication: "The Bourne Enterprise",
    date: "May 15, 2026",
    url: "https://www.capenews.net/bourne/news/federal-state-and-county-delegation-addresses-bourne-select-board/article_7c19df34-6b04-49ba-970b-9202c847631b.html",
    page: "news/federal-state-and-county-delegation-addresses-bourne-select-board.html",
    blurb: "The Select Board invited its federal, state and county delegation to speak at its meeting on Tuesday , May 12, regarding ongoing efforts and issues related to the Town of Bourne. Several members of the delegation were present and discussed a variety of topics, including funding, roads and bridges infrastructure, schools, municipalities, county resources and services, and legislative updates."
  },

  {
    title: "Town Of Bourne And BCT Collaborate On Open Space Parcels",
    publication: "The Bourne Enterprise",
    date: "May 15, 2026",
    url: "https://www.capenews.net/bourne/news/town-of-bourne-and-bct-collaborate-on-open-space-parcels/article_c4d5d991-4bf0-42c5-9cfe-cdc64e8514e0.html",
    page: "news/town-of-bourne-and-bct-collaborate-on-open-space-parcels.html",
    blurb: "The Bourne Conservation Trust (BCT) and the Town of Bourne are continuing their collaboration in conserving open spaces throughout the town."
  },

  {
    title: "Road Repairs Begin At Barlows Landing, Shore Road Intersection",
    publication: "The Bourne Enterprise",
    date: "May 13, 2026",
    url: "https://www.capenews.net/bourne/news/road-repairs-begin-at-barlows-landing-shore-road-intersection/article_c830284f-af65-411d-99ba-86877bab3cbe.html",
    page: "news/road-repairs-begin-at-barlows-landing-shore-road-intersection.html",
    blurb: "The Department of Public Works (DPW) began road work at the intersection of Barlows Landing Road and Shore Road on Monday , May 11 . Major road improvements will be conducted Monday through Friday from 7 AM to 4 PM. The work is anticipated to be “substantially complete” by Friday, June 26."
  },

  {
    title: "Fire Contained At Collision Center In Sandwich",
    publication: "The Bourne Enterprise",
    date: "May 10, 2026",
    url: "https://www.capenews.net/police_fire/fire-contained-at-collision-center-in-sandwich/article_7755d898-aab8-48fe-af2f-76960150942a.html",
    page: "news/fire-contained-at-collision-center-in-sandwich.html",
    blurb: "The Sandwich Fire Department responded to a report of a building fire at Rotary Collision Center at 336 Route 130 on May 7 at 1:37 PM."
  },

  {
    title: "Head-On Collision At Falmouth Road, Orchard Road",
    publication: "The Bourne Enterprise",
    date: "May 10, 2026",
    url: "https://www.capenews.net/police_fire/head-on-collision-at-falmouth-road-orchard-road/article_3873c6c3-a5d0-470b-a6ea-379cb4ddb18c.html",
    page: "news/head-on-collision-at-falmouth-road-orchard-road.html",
    blurb: "The Mashpee Fire and Police departments were dispatched after a report of a two-vehicle, head-on crash at the intersection of Falmouth and Orchard roads on Sunday , May 10 , at around 9:17 AM."
  },

  {
    title: "Bourne ISWM Temporarily Suspends Commerical Brush, Yard Waste Acceptance",
    publication: "The Bourne Enterprise",
    date: "May 8, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-iswm-temporarily-suspends-commerical-brush-yard-waste-acceptance/article_746e3a9c-4760-46ef-8e18-4509d1f33505.html",
    page: "news/bourne-iswm-temporarily-suspends-commerical-brush-yard-waste-acceptance.html",
    blurb: "The Bourne Department of Integrated Solid Waste Management (ISWM) has temporarily suspended acceptance of commercial brush and yard waste. This change will not affect residential users."
  },

  {
    title: "Bourne Select Board Authorizes Contract Negotiations With Pomroy Associates For Library Building",
    publication: "The Bourne Enterprise",
    date: "May 8, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-authorizes-contract-negotiations-with-pomroy-associates-for-library-building/article_64c18065-38b7-4cda-b6d6-08d11b28839b.html",
    page: "news/bourne-select-board-authorizes-contract-negotiations-with-pomroy-associates-for-library-building.html",
    blurb: "The Bourne Select Board authorized Town Administrator Marlene V. McCollem to negotiate the fee and enter into a contract with Pomroy Associates as the Owner’s Project Manager (OPM) to oversee the development of Bourne’s new library at its meeting on Monday , May 4 ."
  },

  {
    title: "All 32 Articles Pass At Bourne Town Meeting",
    publication: "The Bourne Enterprise",
    date: "May 6, 2026",
    url: "https://www.capenews.net/bourne/news/all-32-articles-pass-at-bourne-town-meeting/article_4e7b2bbc-f136-4932-862d-66d21891f614.html",
    page: "news/all-32-articles-pass-at-bourne-town-meeting.html",
    blurb: "All articles on both the Annual and Special Town Meeting warrants were approved by the approximately 289 Bourne residents in attendance on Monday night , May 4 , with the annual warrant featuring 29 articles and the special warrant totaling three."
  },

  {
    title: "Bourne Town Meeting Passes All 32 Articles",
    publication: "The Bourne Enterprise",
    date: "May 5, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-town-meeting-passes-all-32-articles/article_3ad0abf3-151b-49ad-85ee-59eb42e211b8.html",
    page: "news/bourne-town-meeting-passes-all-32-articles.html",
    blurb: "Approximately 289 Bourne residents voted to pass all the articles on the Annual and Special Town Meeting warrants on Monday night, May 4, with the annual warrant featuring 29 articles and the special warrant totaling three articles."
  },

  {
    title: "Bourne Historical Commission Approves Demolition Of Buzzards Bay Home",
    publication: "The Bourne Enterprise",
    date: "May 1, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-historical-commission-approves-demolition-of-buzzards-bay-home/article_7ea26c2c-a18a-4852-adfe-cfe48dfb9cd1.html",
    page: "news/bourne-historical-commission-approves-demolition-of-buzzards-bay-home.html",
    blurb: "The Bourne Historical Commission has approved the proposed demolition of a home on Lewis Point Road in Buzzards Bay. Town records show the home was built in 1949."
  },

  {
    title: "Bourne Library Building Committee Recommends Hiring Pomroy Associates As OPM",
    publication: "The Bourne Enterprise",
    date: "May 1, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-library-building-committee-recommends-hiring-pomroy-associates-as-opm/article_3008570b-cd2a-4653-9903-6331b4d979e7.html",
    page: "news/bourne-library-building-committee-recommends-hiring-pomroy-associates-as-opm.html",
    blurb: "The Bourne Library Building Committee has taken steps over the course of this past week to hire an owner’s project manager (OPM) to oversee the development of a new town library, culminating in the recommendation to the Select Board its decision to hire Pomroy Associates as OPM."
  },

  {
    title: "Guidelines And Procedures For Bourne Town Meetings",
    publication: "The Bourne Enterprise",
    date: "May 1, 2026",
    url: "https://www.capenews.net/bourne/news/guidelines-and-procedures-for-bourne-town-meetings/article_539e16ba-21b1-427d-9911-f095f9f45372.html",
    page: "news/guidelines-and-procedures-for-bourne-town-meetings.html",
    blurb: "With Annual and Special Town Meeting being held at the Bourne High School Auditorium on Monday, May 4, Bourne residents will have the opportunity to make decisions about the ongoing activities of the Town of Bourne."
  },

  {
    title: "Bourne Town Meeting To Vote On 32 Articles",
    publication: "The Bourne Enterprise",
    date: "April 29, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-town-meeting-to-vote-on-32-articles/article_b9d382c3-6679-4f0e-8c9c-8d1bdfebabd9.html",
    page: "news/bourne-town-meeting-to-vote-on-32-articles.html",
    blurb: "Bourne residents will have the chance to vote on 32 articles at the Annual and Special Town Meetings next week, with the annual warrant featuring 29 articles and the special warrant totaling three articles."
  },

  {
    title: "Bourne Board of Health Enforces Tobacco Violation",
    publication: "The Bourne Enterprise",
    date: "April 24, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-board-of-health-enforces-tobacco-violation/article_1acf27da-2381-4981-8bb8-33d2e9698ba4.html",
    page: "news/bourne-board-of-health-enforces-tobacco-violation.html",
    blurb: "A recent tobacco violation that was enforced by the Bourne Board of Health was discussed during the group’s meeting held on Wednesday , April 22 ."
  },

  {
    title: "Board Of Health Supports Syringe Service Programming",
    publication: "The Bourne Enterprise",
    date: "April 23, 2026",
    url: "https://www.capenews.net/bourne/news/board-of-health-supports-syringe-service-programming/article_85ef387a-9a11-4b20-bc82-cd7ace75cd60.html",
    page: "news/board-of-health-supports-syringe-service-programming.html",
    blurb: "The Bourne Board of Health voted to support the syringe service programming (SSP) operated by the non-profit AIDS Support Group of Cape Cod’s (ASGCC) Harm Reduction Outreach Services at its meeting on Wednesday , April 22 ."
  },

  {
    title: "Cataumet Couple Acquire Bootstrap Farm Club",
    publication: "The Bourne Enterprise",
    date: "April 23, 2026",
    url: "https://www.capenews.net/bourne/news/cataumet-couple-acquire-bootstrap-farm-club/article_5760022c-99ef-4a42-9f89-dd9dc492ea3c.html",
    page: "news/cataumet-couple-acquire-bootstrap-farm-club.html",
    blurb: "A new chapter under new ownership is underway for the Bootstrap Farm Club as it reopened on April 16 for another season of providing local and organic food to the Upper Cape."
  },

  {
    title: "Herring Pond Wampanoag Tribe Chairwoman Highlights Sovereignty",
    publication: "The Bourne Enterprise",
    date: "April 22, 2026",
    url: "https://www.capenews.net/bourne/news/herring-pond-wampanoag-tribe-chairwoman-highlights-sovereignty/article_e52f8cb7-8793-47e0-a60d-322446380dfd.html",
    page: "news/herring-pond-wampanoag-tribe-chairwoman-highlights-sovereignty.html",
    blurb: "Herring Pond Wampanoag Tribe chairwoman Melissa “Golden Dragonfly” A. Ferretti greeted the audience in Wôpanâak before sharing more about the Tribe’s history, culture and ongoing efforts at a lecture on Sunday."
  },

  {
    title: "Bourne Select Board Grants Affordable Housing Trust's Extension Request",
    publication: "The Bourne Enterprise",
    date: "April 17, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-grants-affordable-housing-trusts-extension-request/article_980d7ec9-6cad-4bfd-8f2c-b71a47afaa77.html",
    page: "news/bourne-select-board-grants-affordable-housing-trusts-extension-request.html",
    blurb: "After the Bourne Affordable Housing Trust and Housing Partnership requested an extension of the deadline to accept or decline the former police station at 173 Main Street in Buzzards Bay for use as affordable housing, the Select Board voted to extend the deadline by six months at its meeting on Tuesday , April 14 ."
  },

  {
    title: "Empty Seats On Bourne Police Roof Building Committee Causes Discussion",
    publication: "The Bourne Enterprise",
    date: "April 17, 2026",
    url: "https://www.capenews.net/bourne/news/empty-seats-on-bourne-police-roof-building-committee-causes-discussion/article_741b28e4-409a-444a-bae0-15f8d97d0e1d.html",
    page: "news/empty-seats-on-bourne-police-roof-building-committee-causes-discussion.html",
    blurb: "The three specialized seats on the Police Station Roof Building Committee remained unseated heading into the Select Board’s meeting on Tuesday , April 14 . To address this, Town Administrator Marlene V. McCollem sought to have a discussion with the board about whether it would want to fill the vacant seats itself."
  },

  {
    title: "Proposed Repairs At Jonathan Bourne Historical Center Well-Received",
    publication: "The Bourne Enterprise",
    date: "April 17, 2026",
    url: "https://www.capenews.net/bourne/news/proposed-repairs-at-jonathan-bourne-historical-center-well-received/article_fd23db93-ea2e-4316-8745-a5fab9a29fb8.html",
    page: "news/proposed-repairs-at-jonathan-bourne-historical-center-well-received.html",
    blurb: "Steps have been taken to address the water damage at the historic Jonathan Bourne Historical Center, as the historical center’s board of governors President William Prodouz updated the Select Board on the matter at its meeting on April 7."
  },

  {
    title: "Bourne Finalizes May Town Meeting Warrants",
    publication: "The Bourne Enterprise",
    date: "April 15, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-finalizes-may-town-meeting-warrants/article_56edba4c-0f94-4b81-bd3f-16fb5fbaf1c0.html",
    page: "news/bourne-finalizes-may-town-meeting-warrants.html",
    blurb: "At its meeting on Tuesday , April 14 , the Bourne Select Board approved Annual and Special Town Meeting warrants, with the annual warrant featuring a total of 29 articles and the special warrant featuring three."
  },

  {
    title: "Bourne Bike Path Committee Seeks Next Steps For Rail Trail Project",
    publication: "The Bourne Enterprise",
    date: "April 15, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-bike-path-committee-seeks-next-steps-for-rail-trail-project/article_b95af037-d1e3-4546-8d85-32ecc7f9d625.html",
    page: "news/bourne-bike-path-committee-seeks-next-steps-for-rail-trail-project.html",
    blurb: "To gain direction from the Bourne Select Board, the Bourne Town Administrator’s Advisory Committee on Pedestrian Bicycle Pathway voted to schedule to meet with the Select Board to discuss the future of the rail trail project, including phase one, at its meeting on Monday , April 13 ."
  },

  {
    title: "Sagamore Bridge Reopened After Accident On Southbound Lanes",
    publication: "The Bourne Enterprise",
    date: "April 14, 2026",
    url: "https://www.capenews.net/bourne/news/sagamore-bridge-reopened-after-accident-on-southbound-lanes/article_51814ce8-8216-4e9b-b983-0cd6391fb54e.html",
    page: "news/sagamore-bridge-reopened-after-accident-on-southbound-lanes.html",
    blurb: "The two southbound lanes of the Sagamore Bridge that were closed are now reopened. The lanes had been closed due to a two-car accident on the Cape-side of the bridge that occurred Tuesday morning, April 14."
  },

  {
    title: "Bourne Select Board Approves Donating Former Fire Station Parcel To MassDOT",
    publication: "The Bourne Enterprise",
    date: "April 10, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-approves-donating-former-fire-station-parcel-to-massdot/article_b5274f0a-718f-4828-998d-6d7771f35bf0.html",
    page: "news/bourne-select-board-approves-donating-former-fire-station-parcel-to-massdot.html",
    blurb: "The Bourne Select Board approved the donation of 1025 Scenic Highway—the location of the demolished former fire station—to the Massachusetts Department of Transportation for the construction of the new Sagamore Bridge. The board’s approval is subject to Special Town Meeting approval in the fall."
  },

  {
    title: "Cataumet Fish Liquor License Review Continues",
    publication: "The Bourne Enterprise",
    date: "April 10, 2026",
    url: "https://www.capenews.net/bourne/news/cataumet-fish-liquor-license-review-continues/article_2ae8b472-ab9a-463c-80f3-7e0839555fc6.html",
    page: "news/cataumet-fish-liquor-license-review-continues.html",
    blurb: "Town Counsel Bryan F. Bertram on Tuesday , April 7, updated the Select Board on the language of the special legislation liquor license for Cataumet Fish."
  },

  {
    title: "Select Board, FinCom Continue Making Town Meeting Recommendations",
    publication: "The Bourne Enterprise",
    date: "April 9, 2026",
    url: "https://www.capenews.net/bourne/news/select-board-fincom-continue-making-town-meeting-recommendations/article_db4356dd-406e-4137-8ed2-d56ee0d97273.html",
    page: "news/select-board-fincom-continue-making-town-meeting-recommendations.html",
    blurb: "The Finance Committee and the Select Board continued to make recommendations for the remaining articles on Annual and Special Town Meeting warrants, in meetings on Monday , April 6, and Tuesday , April 7, respectively."
  },

  {
    title: "Residents Press MassDOT On Bridge Replacement Details",
    publication: "The Bourne Enterprise",
    date: "April 8, 2026",
    url: "https://www.capenews.net/falmouth/news/residents-press-massdot-on-bridge-replacement-details/article_237f8c95-589e-4c11-9ccc-807db867141f.html",
    page: "news/residents-press-massdot-on-bridge-replacement-details.html",
    blurb: "Residents of the Upper Cape filled the Hermann Foundation Meeting Room at the Falmouth Public Library on Monday as state Senator Dylan A. Fernandes (D-Plymouth and Barnstable) hosted a forum on the Sagamore and Bourne bridge replacement project."
  },

  {
    title: "Bourne Public Schools Presents FY27 Budget",
    publication: "The Bourne Enterprise",
    date: "April 3, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-public-schools-presents-fy27-budget/article_090cfcf4-58f6-4130-a566-9159f8cb9493.html",
    page: "news/bourne-public-schools-presents-fy27-budget.html",
    blurb: "Bourne Public Schools (BPS) Superintendent Kerri Anne Quinlan-Zhou and Director of Business Services Jordan Geist presented an operating budget of $28,265,695 for Fiscal Year 2027, which is an increase of $547,057 or 1.97% from FY26, to the Bourne Select Board and Finance Committee on Monday , March 30 . As of the 2025-2026 school year, 1,497 students are enrolled at BPS, including 24 out-of-district special education students."
  },

  {
    title: "Bourne Select Board Grants Liquor License To Local Restaurant",
    publication: "The Bourne Enterprise",
    date: "April 3, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-grants-liquor-license-to-local-restaurant/article_398e2ab8-a87d-49fb-91f3-2edb40e098f8.html",
    page: "news/bourne-select-board-grants-liquor-license-to-local-restaurant.html",
    blurb: "Taste & Tide Restaurant, Inc. received a new annual wine and malt beverages on premises liquor license pending passing the final building and fire inspections, following a public hearing during the Bourne Select Board’s meeting on Tuesday , March 31 ."
  },

  {
    title: "UCT Presents Bourne's Share Of Budget",
    publication: "The Bourne Enterprise",
    date: "April 3, 2026",
    url: "https://www.capenews.net/bourne/news/uct-presents-bournes-share-of-budget/article_f24be00e-ffa0-4ce9-b509-41143132f0a6.html",
    page: "news/uct-presents-bournes-share-of-budget.html",
    blurb: "Upper Cape Cod Regional Technical School (UCT) Superintendent Roger Forget presented the school’s Fiscal Year 2027 operating budget to the Bourne Select Board and Finance Committee on Monday , March 30 . Bourne will provide $4,322,089 to UCT’s overall budget. This share increased $230,971, or 5.65%, over FY26."
  },

  {
    title: "Bourne Select Board, FinCom Begin Town Meeting Recommendations",
    publication: "The Bourne Enterprise",
    date: "April 2, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-fincom-begin-town-meeting-recommendations/article_c9bc597a-71c7-4f8e-b637-1aea01d0c47b.html",
    page: "news/bourne-select-board-fincom-begin-town-meeting-recommendations.html",
    blurb: "The Bourne Select Board met on Tuesday , March 31, and Finance Committee met on Monday , March 30, and Wednesday , April 1, to make recommendations for some of the articles on the draft Annual and Special Town Meeting warrants."
  },

  {
    title: "Sandwich Road Near Mid-Cape Connector Reopened After Truck Hit Pole",
    publication: "The Bourne Enterprise",
    date: "March 30, 2026",
    url: "https://www.capenews.net/bourne/news/sandwich-road-near-mid-cape-connector-reopened-after-truck-hit-pole/article_5bace30a-08d9-4aa5-9d48-ab5bb000a89b.html",
    page: "news/sandwich-road-near-mid-cape-connector-reopened-after-truck-hit-pole.html",
    blurb: "Around 5:10 PM on Sunday, March 29, Bourne Fire and Police departments and Massachusetts State Police responded to a report of a single-car, motor-vehicle accident near Autumn Way on Sandwich Road. A truck allegedly hit a utility pole, causing the pole and lines to fall across the street and potentially entrapping the driver."
  },

  {
    title: "Fire Damages Highview Condominium Unit, Owner Escapes Safely",
    publication: "The Bourne Enterprise",
    date: "March 29, 2026",
    url: "https://www.capenews.net/sandwich/news/fire-damages-highview-condominium-unit-owner-escapes-safely/article_79872b23-6425-4d73-9a85-4ca810b51979.html",
    page: "news/fire-damages-highview-condominium-unit-owner-escapes-safely.html",
    blurb: "On Sunday morning, March 29, the Sandwich Fire Department responded to Highview Condominiums at 9:25 AM, after the owner of Unit 58 reported smoke and an activated fire alarm in the unit."
  },

  {
    title: "Route 151 Reopened After Accident",
    publication: "The Bourne Enterprise",
    date: "March 28, 2026",
    url: "https://www.capenews.net/falmouth/news/route-151-reopened-after-accident/article_56428484-9c74-4757-a48d-88610fc2e943.html",
    page: "news/route-151-reopened-after-accident.html",
    blurb: "A two car-accident occurred on Friday afternoon, March 27, around 754 Nathan Ellis Highway (Route 151). Around 2:47 PM, Falmouth Police and Fire/Emergency Departments responded to a call reporting the crash."
  },

  {
    title: "Bourne Health Board Reviews Preliminary South Side Fire Station Septic Plan",
    publication: "The Bourne Enterprise",
    date: "March 27, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-health-board-reviews-preliminary-south-side-fire-station-septic-plan/article_b1d18190-8d69-4a9a-81d5-cdad24a4855d.html",
    page: "news/bourne-health-board-reviews-preliminary-south-side-fire-station-septic-plan.html",
    blurb: "The proposed septic system upgrade to support the development of the south side fire station at 171 Clay Pond Road underwent a preliminary concept review at the Bourne Board of Health’s meeting on March 25, during which questions were raised about the proposed septic system’s design flow and technology and associated costs."
  },

  {
    title: "Bourne Sewer Commission OKs MMA Sewer Account Closure, $3,948 Fee Abatement",
    publication: "The Bourne Enterprise",
    date: "March 27, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-sewer-commission-oks-mma-sewer-account-closure-3-948-fee-abatement/article_e6d72c9f-1181-4efa-ba9c-6a477a3ca083.html",
    page: "news/bourne-sewer-commission-oks-mma-sewer-account-closure-3948-fee-abatement.html",
    blurb: "The Bourne Board of Sewer Commissioners approved Massachusetts Maritime Academy’s (MMA) request for an abatement and the closure of the sewer account at 16 Tower Lane during its meeting on Tuesday , March 24 , subject to two conditions."
  },

  {
    title: "MassDevelopment Presents Update On Base Cantonment Redevelopment Plan",
    publication: "The Bourne Enterprise",
    date: "March 27, 2026",
    url: "https://www.capenews.net/bourne/news/massdevelopment-presents-update-on-base-cantonment-redevelopment-plan/article_06f106a9-3702-4293-94e7-8f6649943cd1.html",
    page: "news/massdevelopment-presents-update-on-base-cantonment-redevelopment-plan.html",
    blurb: "MassDevelopment appeared before the Bourne Select Board on March 17 to provide an update regarding the Joint Base Cape Cod Cantonment Area Master Plan to redevelop approximately 7,000 acres of land known as the cantonment area, located on the south side of the base."
  },

  {
    title: "Bourne Select Board Reviews Liquor License Revisions",
    publication: "The Bourne Enterprise",
    date: "March 25, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-reviews-liquor-license-revisions/article_ccf1ac36-52ef-4f21-9421-28c6180bf936.html",
    page: "news/bourne-select-board-reviews-liquor-license-revisions.html",
    blurb: "Discussion surrounding Cataumet Fish receiving a liquor license continued on March 17, as Town Counsel Bryan F. Bertram reviewed with the Bourne Select Board the revisions proposed by the state Legislature in connection with Bill H5084."
  },

  {
    title: "Bourne Select Board, FinCom Continue To Hear Proposed Town Meeting Articles",
    publication: "The Bourne Enterprise",
    date: "March 20, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-fincom-continue-to-hear-proposed-town-meeting-articles/article_37c92290-cfce-45a0-97e1-10de14ca60c9.html",
    page: "news/bourne-select-board-fincom-continue-to-hear-proposed-town-meeting-articles.html",
    blurb: "The Finance Committee and the Select Board heard presentations on additional proposed Town Meeting articles this week. The Finance Committee met on Monday , March 16 , and the Select Board met on Tuesday , March 17 ."
  },

  {
    title: "Proposed CPA-Funded Articles Presented To Bourne FinCom, Select Board",
    publication: "The Bourne Enterprise",
    date: "March 20, 2026",
    url: "https://www.capenews.net/bourne/news/proposed-cpa-funded-articles-presented-to-bourne-fincom-select-board/article_a95055c7-0088-4a44-aee1-57e7019e8e27.html",
    page: "news/proposed-cpa-funded-articles-presented-to-bourne-fincom-select-board.html",
    blurb: "The Bourne Finance Committee and the Select Board heard presentations for the Fiscal Year 2027 Community Preservation Act (CPA) funding proposals March 16 and March 17, respectively. Both will vote at a later date on whether or not to recommend the proposed CPA-funded articles to the May Town Meeting."
  },

  {
    title: "Bourne FY27 Budget Balanced After Deficit Discussions",
    publication: "The Bourne Enterprise",
    date: "March 19, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-fy27-budget-balanced-after-deficit-discussions/article_f1fb287c-335d-4e7e-be21-20c29e01942f.html",
    page: "news/bourne-fy27-budget-balanced-after-deficit-discussions.html",
    blurb: "The Bourne School District cut its operating budget by $478,532, matching the town’s FY27 budget deficit following discussion during last week’s joint meeting with the Select Board and School Committee."
  },

  {
    title: "Bill Authorizing New Fire Station Borrowing Passes Legislature, Needs Governor's Signature",
    publication: "The Bourne Enterprise",
    date: "March 18, 2026",
    url: "https://www.capenews.net/bourne/news/bill-authorizing-new-fire-station-borrowing-passes-legislature-needs-governors-signature/article_1f8c3049-f361-4a8d-af32-176257105af9.html",
    page: "news/bill-authorizing-new-fire-station-borrowing-passes-legislature-needs-governors-signature.html",
    blurb: "The Town of Bourne is getting closer to being able to borrow funds for the south side fire station, slated to replace the now-closed Pocasset station on Barlows Landing Road and the temporary quarters on Thomas Philbrick Road in Monument Beach."
  },

  {
    title: "Bourne FinCom Hears FY27 Budget Updates",
    publication: "The Bourne Enterprise",
    date: "March 13, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-fincom-hears-fy27-budget-updates/article_f26a6265-3a8f-48e2-8c35-6b13ff00b654.html",
    page: "news/bourne-fincom-hears-fy27-budget-updates.html",
    blurb: "At the Bourne Finance Committee meeting on Monday , March 9 , Town Administrator Marlene V. McCollem and Finance Director Erica Flemming shared various updates and amendments to the town’s Fiscal Year 2027 budget."
  },

  {
    title: "Bourne School Committee, Select Board Discuss FY27 Budget Deficit",
    publication: "The Bourne Enterprise",
    date: "March 13, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-school-committee-select-board-discuss-fy27-budget-deficit/article_ddeaa87c-75a7-464c-9fc1-a4b723d25414.html",
    page: "news/bourne-school-committee-select-board-discuss-fy27-budget-deficit.html",
    blurb: "The conversation around the Fiscal Year 2027 budget continued as the Bourne School Committee and Bourne Select Board discussed the impact of the increased cherry sheet assessment, which is the main driver of the deficit."
  },

  {
    title: "Bourne FinCom Hears Town Meeting Articles",
    publication: "The Bourne Enterprise",
    date: "March 11, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-fincom-hears-town-meeting-articles/article_19ddfd5e-8b36-4747-b038-42f22bb602af.html",
    page: "news/bourne-fincom-hears-town-meeting-articles.html",
    blurb: "Articles ranging from betterments to annual requests for town services and equipment proposed for Annual Town Meeting were presented to the Finance Committee on Monday , March 9 ."
  },

  {
    title: "Community Preservation Committee Recommends Requests",
    publication: "The Bourne Enterprise",
    date: "March 6, 2026",
    url: "https://www.capenews.net/bourne/news/community-preservation-committee-recommends-requests/article_c5f86bca-ea1c-4bc6-aa24-719429e0b3ef.html",
    page: "news/community-preservation-committee-recommends-requests.html",
    blurb: "Various requests for Community Preservation Act (CPA) funds for Fiscal Year 2027 were presented for comment at the Bourne Community Preservation Committee (CPC) meeting on Wednesday , March 4 , ranging from building maintenance to recreational initiatives."
  },

  {
    title: "MassDOT Eyes Vacant Lot For Scenic Highway On-Ramp",
    publication: "The Bourne Enterprise",
    date: "March 6, 2026",
    url: "https://www.capenews.net/bourne/news/massdot-eyes-vacant-lot-for-scenic-highway-on-ramp/article_78ba4a3a-2d00-4c31-893f-e8d403c74a76.html",
    page: "news/massdot-eyes-vacant-lot-for-scenic-highway-on-ramp.html",
    blurb: "Discussions about the Sagamore Bridge construction continued as Luisa Paiewonsky, Massachusetts Department of Transportation’s (MassDOT) executive director for megaprojects, and David Anderson, lead consultant at HNTB, appeared before the Bourne Select Board on Tuesday , March 3, to provide continued updates on the project’s various facets."
  },

  {
    title: "Select Board Questions UCT Enrollment Discrepancies",
    publication: "The Bourne Enterprise",
    date: "March 6, 2026",
    url: "https://www.capenews.net/bourne/news/select-board-questions-uct-enrollment-discrepancies/article_e50891e5-a076-4943-9aac-2edcb258f899.html",
    page: "news/select-board-questions-uct-enrollment-discrepancies.html",
    blurb: "With the Bourne Fiscal Year 2027 budget in flux and experiencing shortfalls, the Select Board on Tuesday , March 3, had a discussion with Upper Cape Cod Regional Technical School (UCT) Superintendent Roger Forget about enrollment."
  },

  {
    title: "Keene House Relocation Funds To Return To Bourne CPC",
    publication: "The Bourne Enterprise",
    date: "February 27, 2026",
    url: "https://www.capenews.net/bourne/news/keene-house-relocation-funds-to-return-to-bourne-cpc/article_5531d5c3-afed-4899-bd65-0fd1107e91c5.html",
    page: "news/keene-house-relocation-funds-to-return-to-bourne-cpc.html",
    blurb: "The Bourne Community Preservation Committee (CPC) voted on February 18 that the $250,000 in Community Preservation Act (CPA) funds allocated to the Bourne Historical Society (BHS) to move the historic Keene House from Sandwich Road to the Aptucxet Trading Post Museum be returned to the Community Preservation Committee. The BHS had voted to return the funds to the CPC last year."
  },

  {
    title: "Bourne Announces Pilot Program For Substance Use Treatment, Behavorial Health Services",
    publication: "The Bourne Enterprise",
    date: "February 20, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-announces-pilot-program-for-substance-use-treatment-behavorial-health-services/article_3a52eb8e-3aad-40da-ae89-d9a8b21fe22c.html",
    page: "news/bourne-announces-pilot-program-for-substance-use-treatment-behavorial-health-services.html",
    blurb: "The Town of Bourne has entered into a one-year contract for a pilot program with Care Solace that will be offered to residents seeking behavioral health services and substance use disorder treatment, starting on Wednesday, April 1."
  },

  {
    title: "Bourne To Review Private Way Betterment Policy",
    publication: "The Bourne Enterprise",
    date: "February 20, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-to-review-private-way-betterment-policy/article_259d57b7-a5fa-4fd3-8565-c58d7e7e63ef.html",
    page: "news/bourne-to-review-private-way-betterment-policy.html",
    blurb: "The petition for the betterment of Tara Terrace, Eldridge Street and Eldridge Street Extension continued on February 10 as the Select Board heard from Town Engineer Timothy Lydon, Town Counsel Bryan F. Bertram and the public, who had a variety of opinions."
  },

  {
    title: "MBPC Raises $53,250 For Bourne Friends Food Pantry",
    publication: "The Bourne Enterprise",
    date: "February 18, 2026",
    url: "https://www.capenews.net/bourne/news/mbpc-raises-53-250-for-bourne-friends-food-pantry/article_17aad255-3885-4d03-a761-7a75bd51949d.html",
    page: "news/mbpc-raises-53250-for-bourne-friends-food-pantry.html",
    blurb: "After raising $53,250 through its annual polar plunge and potluck dinner and dance, which featured auctions and raffles, the Monument Beach Polar Club (MBPC) donated the funds to the Bourne Friends Food Pantry on February 12."
  },

  {
    title: "Bourne Advisory Committee On Pedestrian Bicycle Pathway's Future Discussed",
    publication: "The Bourne Enterprise",
    date: "February 13, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-advisory-committee-on-pedestrian-bicycle-pathways-future-discussed/article_00553ed6-2471-431e-985b-f19b437547e2.html",
    page: "news/bourne-advisory-committee-on-pedestrian-bicycle-pathways-future-discussed.html",
    blurb: "The scope and charge of the Town Administrator’s Advisory Committee on Pedestrian Bicycle Pathway was discussed by the Select Board on Tuesday , February 10, in light of Town Administrator Marlene V. McCollem’s recommendation to dissolve the advisory committee."
  },

  {
    title: "Bourne FinCom To Wait For Town Counsel's Opinion",
    publication: "The Bourne Enterprise",
    date: "February 13, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-fincom-to-wait-for-town-counsels-opinion/article_643f69b0-4b58-4955-811b-2938fe2916e7.html",
    page: "news/bourne-fincom-to-wait-for-town-counsels-opinion.html",
    blurb: "After having a joint meeting with the Select Board on February 2 regarding the roles and responsibilities of the groups at Town Meeting, the Finance Committee had a debrief on the matter on Monday , February 9 ."
  },

  {
    title: "Bourne Finance Committee Hears FY27 Capital Requests",
    publication: "The Bourne Enterprise",
    date: "February 13, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-finance-committee-hears-fy27-capital-requests/article_ca4719fb-876c-4433-9d51-a87fb34bb04a.html",
    page: "news/bourne-finance-committee-hears-fy27-capital-requests.html",
    blurb: "With Bourne’s Fiscal Year 2027 budget sent to the Finance Committee, department heads presented their capital requests to the committee."
  },

  {
    title: "Select Board Agrees On Phased Approach For Watershed Permitting",
    publication: "The Bourne Enterprise",
    date: "February 13, 2026",
    url: "https://www.capenews.net/bourne/news/select-board-agrees-on-phased-approach-for-watershed-permitting/article_fe428f61-aed0-47a2-bc0d-fedfa4930cdc.html",
    page: "news/select-board-agrees-on-phased-approach-for-watershed-permitting.html",
    blurb: "The Bourne Select Board had a preliminary discussion with Town Administrator Marlene V. McCollem on February 3 about what approach the town should take regarding starting the process of watershed permit applications for Bourne’s two watershed areas: Phinneys Harbor and Megansett Squeteague Harbor."
  },

  {
    title: "Bourne Facing Budget Shortfalls",
    publication: "The Bourne Enterprise",
    date: "February 6, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-facing-budget-shortfalls/article_2a72c54e-d4c1-4ac0-9a9e-2c3d05c0418e.html",
    page: "news/bourne-facing-budget-shortfalls.html",
    blurb: "Despite unexpected expenses creating shortfalls and unknown variables for the Fiscal Year 2027 budget, the Bourne Select Board voted to send an unbalanced budget to the Finance Committee on January 27 and emphasized the importance of communication."
  },

  {
    title: "Bourne FinCom, Select Board Discuss Town Meeting Roles, Responsibilties",
    publication: "The Bourne Enterprise",
    date: "February 6, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-fincom-select-board-discuss-town-meeting-roles-responsibilties/article_f5fdc5d7-6404-49a9-859e-d00c9c95de4c.html",
    page: "news/bourne-fincom-select-board-discuss-town-meeting-roles-responsibilties.html",
    blurb: "On Monday, February 2, the Select Board and Finance Committee held a joint meeting to discuss the roles and responsibilities of the annual Town Meeting, specifically clarifying which group will make motions and provide verbal explanations."
  },

  {
    title: "Bourne Select Board Hears Scenic Highway Median Project",
    publication: "The Bourne Enterprise",
    date: "February 6, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-hears-scenic-highway-median-project/article_6d7587ed-8c75-44bd-986e-8f246d95d9b0.html",
    page: "news/bourne-select-board-hears-scenic-highway-median-project.html",
    blurb: "The Bourne Select Board heard from the Massachusetts Department of Transportation (MassDOT) District 5 team on January 27 about the ongoing project to install a raised, four-feet-wide, concrete center median along approximately 1.5 miles of Scenic Highway from Nightingale Pond Road to Edgehill Road."
  },

  {
    title: "Bourne Town Clerk Proposes Articles For Town Meeting",
    publication: "The Bourne Enterprise",
    date: "February 6, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-town-clerk-proposes-articles-for-town-meeting/article_13f0ddec-d452-47c2-b14a-7a90cd143b0c.html",
    page: "news/bourne-town-clerk-proposes-articles-for-town-meeting.html",
    blurb: "On Tuesday , February 3 , Town Clerk Barry H. Johnson presented two proposed articles to increase dog licensing and vital records fees for Annual Town Meeting to the Select Board. The articles, if adopted by the town, are estimated to generate $22,000 in the general fund for Fiscal Year 2027."
  },

  {
    title: "New Owners Of Sub-Marines Sandwich Shop: Ready To Serve Community",
    publication: "The Bourne Enterprise",
    date: "February 6, 2026",
    url: "https://www.capenews.net/bourne/news/new-owners-of-sub-marines-sandwich-shop-ready-to-serve-community/article_94291ecf-42ac-4447-bee8-38bb0a7249e1.html",
    page: "news/new-owners-of-sub-marines-sandwich-shop-ready-to-serve-community.html",
    blurb: "“People love sandwiches for lunch, breakfast, dinner,” said Milan Basnet, the new co-owner and co-manager of Sub-Marines. “We want to give the best sandwich at any time of the day.”"
  },

  {
    title: "Bourne DNR Requests Annual Funding For Ramp, Pier, Dredging Projects",
    publication: "The Bourne Enterprise",
    date: "January 30, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-dnr-requests-annual-funding-for-ramp-pier-dredging-projects/article_eaf5ed6c-a6b4-49e0-9933-6ab6161ae849.html",
    page: "news/bourne-dnr-requests-annual-funding-for-ramp-pier-dredging-projects.html",
    blurb: "The Department of Natural Resources (DNR) and Storm Harbor Committee presented to the Bourne Select Board an annual request of $250,000 to fund the capital project of dredging, ramp and pier repair and maintenance."
  },

  {
    title: "Bourne Select Board Approves Sale Of BANs Worth $17.2M",
    publication: "The Bourne Enterprise",
    date: "January 30, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-approves-sale-of-bans-worth-17-2m/article_21d96f4a-754d-4f58-bcf9-49b39dcc6c4d.html",
    page: "news/bourne-select-board-approves-sale-of-bans-worth-172m.html",
    blurb: "The Bourne Select Board voted to approve the sale of Bond Anticipation Notes (BANs), totaling to $17,222,239, on January 20. The funds generated from the sale of the bonds will help fund capital projects in town that are either already underway or in the pipeline."
  },

  {
    title: "Bourne Sewer Commission, Rec. Authority Resolve Sewer Fee Cost",
    publication: "The Bourne Enterprise",
    date: "January 30, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-sewer-commission-rec-authority-resolve-sewer-fee-cost/article_407c2805-fc15-4b07-ab40-89f7d3cf5920.html",
    page: "news/bourne-sewer-commission-rec-authority-resolve-sewer-fee-cost.html",
    blurb: "Discussions between the Bourne Board of Sewer Commissioners and the Bourne Recreation Authority (BRA) regarding the sewer system development fee for Bourne Scenic Park resulted in a reduction to $195,900."
  },

  {
    title: "MassDOT Interested In Vacant Land For Scenic Highway On-Ramp To Sagamore Bridge",
    publication: "The Bourne Enterprise",
    date: "January 30, 2026",
    url: "https://www.capenews.net/bourne/news/massdot-interested-in-vacant-land-for-scenic-highway-on-ramp-to-sagamore-bridge/article_bde3bfeb-ae4f-4986-9675-a3656201b914.html",
    page: "news/massdot-interested-in-vacant-land-for-scenic-highway-on-ramp-to-sagamore-bridge.html",
    blurb: "The Massachusetts Department of Transportation (MassDOT) bridges team presented to the Bourne Select Board on January 20, explaining its interest and need for the town-owned vacant parcel at 1025 Scenic Highway—the location of the demolished former fire station—for the construction of the new Sagamore Bridge."
  },

  {
    title: "Bourne Department Heads Present Proposed FY27 Operating Budgets",
    publication: "The Bourne Enterprise",
    date: "January 23, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-department-heads-present-proposed-fy27-operating-budgets/article_da55e076-d85c-4140-89dc-6d93ca136074.html",
    page: "news/bourne-department-heads-present-proposed-fy27-operating-budgets.html",
    blurb: "Fiscal Year 2027 budget discussions for the Town of Bourne continued as the operating budgets of departments were presented on January 13. The Sewer Commissioners reviewed their proposed budget on Tuesday , January 20 ."
  },

  {
    title: "Bourne Select Board Discusses The County's Proposed Luxury House Transfer Fee",
    publication: "The Bourne Enterprise",
    date: "January 23, 2026",
    coauthors: "Katie Nelson",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-discusses-the-countys-proposed-luxury-house-transfer-fee/article_40879c80-6d10-44e1-a408-2e74491d4ee8.html",
    page: "news/bourne-select-board-discusses-the-countys-proposed-luxury-house-transfer-fee.html",
    blurb: "A draft of a regional home rule petition for a new luxury tax suggests that “luxury homes” be defined as $1 million or more. Previous drafts of the petition proposed that luxury homes be considered $2 million or more."
  },

  {
    title: "Sunset Acres Road Repair Petition Continues",
    publication: "The Bourne Enterprise",
    date: "January 16, 2026",
    url: "https://www.capenews.net/bourne/news/sunset-acres-road-repair-petition-continues/article_9f8e9e87-f845-46b8-b673-2c92c6a6a32a.html",
    page: "news/sunset-acres-road-repair-petition-continues.html",
    blurb: "Town Engineer Timothy Lydon returned to the Select Board on Tuesday , January 13, to continue a presentation about a petition to repair Tara Terrace, Eldridge Street and Eldridge Street Extension in the Sunset Acres I and II subdivisions."
  },

  {
    title: "Bourne Select Board Authorizes Bourne Cannabis As HCA Recipient",
    publication: "The Bourne Enterprise",
    date: "January 15, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-select-board-authorizes-bourne-cannabis-as-hca-recipient/article_5c152525-9252-49e3-a589-f0ff6f5153df.html",
    page: "news/bourne-select-board-authorizes-bourne-cannabis-as-hca-recipient.html",
    blurb: "After months of deliberation, the Select Board at its meeting on Tuesday , January 13, reached a final decision that Bourne Cannabis will be the recipient of the outstanding social equity host community agreement (HCA) for a cannabis dispensary in town."
  },

  {
    title: "Bourne's FY27 Budget Cites Trade-offs",
    publication: "The Bourne Enterprise",
    date: "January 8, 2026",
    url: "https://www.capenews.net/bourne/news/bournes-fy27-budget-cites-trade-offs/article_d73580a1-fc9d-41f5-a2f7-69a4cce71643.html",
    page: "news/bournes-fy27-budget-cites-trade-offs.html",
    blurb: "Town Administrator Marlene V. McCollem presented the proposed Fiscal Year 2027 Operating and Capital Budgets to the Select Board during a joint session with the Finance Committee on Tuesday , January 6 ."
  },

  {
    title: "Bourne Seeks Volunteers For Charter Review Committee And More",
    publication: "The Bourne Enterprise",
    date: "January 7, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-seeks-volunteers-for-charter-review-committee-and-more/article_6c5456a0-2d54-49e6-996b-0520314a20ec.html",
    page: "news/bourne-seeks-volunteers-for-charter-review-committee-and-more.html",
    blurb: "The Town of Bourne is seeking volunteers for its committees, commissions and boards, as approximately 20 out of 35 have at least one seat available for interested citizens, said Kathleen Thut, executive assistant to the town administrator."
  },

  {
    title: "Bourne Rings In 2026 With A True Polar Plunge",
    publication: "The Bourne Enterprise",
    date: "January 1, 2026",
    url: "https://www.capenews.net/bourne/news/bourne-rings-in-2026-with-a-true-polar-plunge/article_0141dace-371f-4048-af12-f16f6fd15e84.html",
    page: "news/bourne-rings-in-2026-with-a-true-polar-plunge.html",
    blurb: "Approximately 150 people began their new year plunging into 32°F water at Monument Beach on Thursday , January 1, for the 29th Annual Monument Beach Polar Plunge."
  },

  {
    title: "Nancy Jack Todd Leaves Legacy Of Ecological Sustainability",
    publication: "The Bourne Enterprise",
    date: "June 13, 2025",
    url: "https://www.capenews.net/falmouth/news/nancy-jack-todd-leaves-legacy-of-ecological-sustainability/article_d1ca26e6-e4ab-4bf4-927b-ef8c588efe52.html",
    page: "news/nancy-jack-todd-leaves-legacy-of-ecological-sustainability.html",
    blurb: "Often called the face of the early environmental movement, Nancy Jack Todd, who co-founded the New Alchemy Institute and Ocean Arks International in Falmouth, died on May 30. She was 87."
  }

// END AUTO-GENERATED

];

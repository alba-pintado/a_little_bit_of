/* =========================================================
   PAPERS & SCIENCE NEWS
   The quickest entry only needs an id, a doi and a date:
   the title, journal, year and authors are filled in
   automatically from the DOI (via Crossref).

   Fields:
     id      unique short name, no spaces          (required)
     doi     e.g. "10.1038/s41586-021-03819-2"     (recommended)
     url     use instead of doi for news articles without one
     date    the day YOU added it, "YYYY-MM-DD"    (required, sorts the list)
     kind    "paper" (default) or "news"
     note    your one-or-two-line takeaway
     tags    list of topics, used for the filter buttons
     title / journal / year / authors   optional: write them to override the automatic ones
     body    optional longer commentary in Markdown → gets its own page
     example true = shows an "example" badge. Delete these entries when you add your own.
   ========================================================= */
window.SITE = window.SITE || {};

SITE.papers = [
  {
    id: "alphafold2",
    doi: "10.1038/s41586-021-03819-2",
    date: "2026-10-20",
    tags: ["Structural biology", "Machine learning"],
    note: "Predicts a protein's 3D structure from its sequence at close to experimental accuracy. The paper that put deep learning at the centre of structural biology.",
    example: true
  },
  {
    id: "t2t-human-genome",
    doi: "10.1126/science.abj6987",
    date: "2026-10-12",
    tags: ["Genomics"],
    note: "The first truly gap-free human genome (T2T-CHM13), adding the ~8% that the reference assembly had been missing.",
    example: true
  },
  {
    id: "crispr-cas9-2012",
    doi: "10.1126/science.1225829",
    date: "2026-10-01",
    tags: ["Gene editing", "Molecular biology"],
    note: "Shows that Cas9 can be programmed with a single guide RNA to cut any DNA sequence: the starting point of CRISPR genome editing.",
    example: true,
    body: `
      This is an example of a paper with a longer commentary. Anything you write in
      the \`body\` field gets its own page, so you can explain the paper properly.

      ## Why it matters
      Write here why you chose this paper, what surprised you, and how it connects
      with your own work.

      ## Key figure
      Describe the figure that convinced you, or add an image:
      \`![Figure 1](images/your-figure.png)\`
    `
  }
];

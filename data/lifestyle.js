/* =========================================================
   LIFESTYLE POSTS
   Fields: id, title, date ("YYYY-MM-DD"), summary, tags,
           image (optional, e.g. "images/lifestyle/run.jpg"),
           body (Markdown), example (true = placeholder badge)
   ========================================================= */
window.SITE = window.SITE || {};

SITE.lifestyle = [
  {
    id: "example-weekly-routine",
    title: "Example post: my weekly training routine",
    date: "2026-10-10",
    summary: "A template post. Replace it with how you stay active, what you eat in a busy week, or a small adventure.",
    tags: ["Sport", "Routine"],
    example: true,
    body: `
      This is a template post so you can see how a Lifestyle entry looks.
      Duplicate it in \`data/lifestyle.js\`, change the \`id\`, and write your own.

      ## Things you can use in the text
      - **Bold** and *italics*
      - Lists like this one
      - Links: [a link](https://example.org)
      - Images: \`![description](images/lifestyle/photo.jpg)\`

      > And quotes, for the lines you want to stand out.
    `
  }
];

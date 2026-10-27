/* =========================================================
   BOOK REVIEWS
   Fields: id, title, author, year, rating (0–5), date (when you
           reviewed it), type ("Science", "Novel", …), summary,
           image (cover, optional — put covers in content/books/covers/), tags, body (Markdown)
   ========================================================= */
window.SITE = window.SITE || {};

SITE.books = [
  {
    id: "the-gene",
    title: "The Gene: An Intimate History",
    author: "Siddhartha Mukherjee",
    year: 2016,
    type: "Science",
    rating: 5,
    type_es: "Divulgación",
    date: "2026-09-28",
    summary: "Example review card. Write two lines here about what the book is and who should read it.",
    summary_es: "Tarjeta de reseña de ejemplo. Escribe aquí dos líneas sobre de qué va el libro y a quién se lo recomendarías.",
    tags: ["Genetics", "History of science"],
    example: true,
    body: `
      Example review. A structure that works well:

      ## What it's about
      One paragraph, no spoilers.

      ## What I liked
      ## What I didn't
      ## Who should read it
    `
  },
  {
    id: "entangled-life",
    title: "Entangled Life",
    author: "Merlin Sheldrake",
    year: 2020,
    type: "Science",
    rating: 4,
    type_es: "Divulgación",
    date: "2026-09-10",
    summary: "Example review card. Replace with your own review, or delete it.",
    summary_es: "Tarjeta de reseña de ejemplo. Cámbiala por tu reseña o bórrala.",
    tags: ["Fungi", "Ecology"],
    example: true,
    body: `Example review. Write your thoughts here.`
  }
];

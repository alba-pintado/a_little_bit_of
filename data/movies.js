/* =========================================================
   MOVIES, SERIES & DOCUMENTARIES
   Fields: id, title, type ("Film" | "Series" | "Documentary"),
           director or creator, year, rating (0–5), date,
           summary, image (optional), tags, body (Markdown)
   ========================================================= */
window.SITE = window.SITE || {};

SITE.movies = [
  {
    id: "my-octopus-teacher",
    title: "My Octopus Teacher",
    type: "Documentary",
    director: "Pippa Ehrlich & James Reed",
    year: 2020,
    rating: 5,
    date: "2026-10-03",
    summary: "Example review card. Write two lines on why it's worth watching.",
    tags: ["Nature", "Marine biology"],
    example: true,
    body: `Example review. Write your thoughts here.`
  },
  {
    id: "gattaca",
    title: "Gattaca",
    type: "Film",
    director: "Andrew Niccol",
    year: 1997,
    rating: 4,
    date: "2026-09-20",
    summary: "Example review card. A good one to write about from a geneticist's point of view.",
    tags: ["Sci-fi", "Genetics"],
    example: true,
    body: `Example review. Write your thoughts here.`
  }
];

/* =========================================================
   MOVIES, SERIES & DOCUMENTARIES
   Fields: id, title, type ("Film" | "Series" | "Documentary"),
           director or creator, year, rating (0–5), date,
           summary, image (optional — put posters in content/movies/posters/), tags, body (Markdown)
   ========================================================= */
window.SITE = window.SITE || {};

SITE.movies = [
  {
    id: "my-octopus-teacher",
    title: "My Octopus Teacher",
    type: "Documentary",
    type_es: "Documental",
    director: "Pippa Ehrlich & James Reed",
    year: 2020,
    rating: 5,
    date: "2026-10-03",
    summary: "Example review card. Write two lines on why it's worth watching.",
    summary_es: "Tarjeta de reseña de ejemplo. Escribe dos líneas sobre por qué merece la pena verlo.",
    tags: ["Nature", "Marine biology"],
    example: true,
    body: `Example review. Write your thoughts here.`
  },
  {
    id: "gattaca",
    title: "Gattaca",
    type: "Film",
    type_es: "Película",
    director: "Andrew Niccol",
    year: 1997,
    rating: 4,
    date: "2026-09-20",
    summary: "Example review card. A good one to write about from a geneticist's point of view.",
    summary_es: "Tarjeta de reseña de ejemplo. Muy buena para comentarla desde el punto de vista de una genetista.",
    tags: ["Sci-fi", "Genetics"],
    example: true,
    body: `Example review. Write your thoughts here.`
  }
];

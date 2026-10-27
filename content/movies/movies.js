/* =========================================================
   MOVIES, SERIES & DOCUMENTARIES
   Fields: id, title, type ("Film" | "Series" | "Documentary"),
           genres (list of keys from SITE.movieGenres below, e.g. ["scifi", "drama"]),
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
    genres: ["documentary"],
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
    genres: ["scifi", "drama", "thriller"],
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

/* All genres, in both languages. Use the key (left) in each review's "genres".
   You can add more: { key: "short-name", en: "English", es: "Español" } */
SITE.movieGenres = [
  { key: "action",      en: "Action",          es: "Acción" },
  { key: "adventure",   en: "Adventure",       es: "Aventura" },
  { key: "animation",   en: "Animation",       es: "Animación" },
  { key: "biography",   en: "Biography",       es: "Biográfica" },
  { key: "comedy",      en: "Comedy",          es: "Comedia" },
  { key: "crime",       en: "Crime",           es: "Policíaca" },
  { key: "documentary", en: "Documentary",     es: "Documental" },
  { key: "drama",       en: "Drama",           es: "Drama" },
  { key: "family",      en: "Family",          es: "Familiar" },
  { key: "fantasy",     en: "Fantasy",         es: "Fantasía" },
  { key: "history",     en: "History",         es: "Histórica" },
  { key: "horror",      en: "Horror",          es: "Terror" },
  { key: "musical",     en: "Musical",         es: "Musical" },
  { key: "mystery",     en: "Mystery",         es: "Misterio" },
  { key: "romance",     en: "Romance",         es: "Romántica" },
  { key: "scifi",       en: "Science fiction", es: "Ciencia ficción" },
  { key: "sport",       en: "Sport",           es: "Deportes" },
  { key: "thriller",    en: "Thriller",        es: "Suspense" },
  { key: "war",         en: "War",             es: "Bélica" },
  { key: "western",     en: "Western",         es: "Western" }
];

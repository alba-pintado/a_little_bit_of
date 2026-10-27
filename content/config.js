/* =========================================================
   SITE SETTINGS — edit these and the whole site updates.
   Leave a value as "" to hide it.
   ========================================================= */
window.SITE = window.SITE || {};

SITE.config = {
  name: "Alba Pintado Rodrigo",
  title: "A Little Bit Of…",
  tagline: "For the curious and weird ones",

  // Your photo for the home page (in assets/images).
  photo: "assets/images/perfil.jpg",

  // Links shown in the footer (leave "" to hide)
  email: "",                       // e.g. "hello@yourdomain.com"
  github: "https://github.com/alba-pintado",
  linkedin: "",                    // e.g. "https://www.linkedin.com/in/your-name"
  orcid: "",                       // e.g. "https://orcid.org/0000-0000-0000-0000"
  googleScholar: "",
  podcastFeed: ""                  // Spotify / Apple / iVoox link to your podcast
};

/* The sections of the site, in menu order.
   Fields ending in _es are the Spanish version.
   key   = the page name (pages/key.html)
   icon  = the sticker shown on the home page and the section header */
SITE.sections = [
  { key: "science",   icon: "assets/icons/science.png",
    label: "Science & Bioinformatics", label_es: "Ciencia y Bioinformática",
    short: "Science", short_es: "Ciencia",
    blurb: "Papers, news, tutorials and courses in R, Python and machine learning",
    blurb_es: "Papers, noticias, tutoriales y cursos de R, Python y machine learning" },
  { key: "tutoring",  icon: "assets/icons/tutoring.png",
    label: "Tutoring", label_es: "Clases particulares",
    short: "Tutoring", short_es: "Clases",
    blurb: "High-level exercises and model exams, from 1º ESO to 2º Bachillerato",
    blurb_es: "Ejercicios de alto nivel y exámenes modelo, de 1º ESO a 2º Bachillerato" },
  { key: "lifestyle", icon: "assets/icons/lifestyle.png",
    label: "Lifestyle", label_es: "Lifestyle",
    short: "Lifestyle", short_es: "Lifestyle",
    blurb: "Staying active, eating well and small everyday adventures",
    blurb_es: "Moverse, comer bien y pequeñas aventuras del día a día" },
  { key: "books",     icon: "assets/icons/books.png",
    label: "Books", label_es: "Libros",
    short: "Books", short_es: "Libros",
    blurb: "What I'm reading and what I thought of it",
    blurb_es: "Lo que estoy leyendo y lo que me ha parecido" },
  { key: "travel",    icon: "assets/icons/travel.png",
    label: "Travel", label_es: "Viajes",
    short: "Travel", short_es: "Viajes",
    blurb: "Trips, routes and the places worth the detour",
    blurb_es: "Viajes, rutas y los sitios que merecen el desvío" },
  { key: "movies",    icon: "assets/icons/movies.png",
    label: "Movies, Series & Documentaries", label_es: "Pelis, series y documentales",
    short: "Movies & Series", short_es: "Pelis y series",
    blurb: "Reviews of films, series and documentaries",
    blurb_es: "Reseñas de películas, series y documentales" },
  { key: "music",     icon: "assets/icons/music.png",
    label: "Music & Podcasts", label_es: "Música y podcasts",
    short: "Music & Podcasts", short_es: "Música y podcasts",
    blurb: "My podcast, plus the music and shows on repeat",
    blurb_es: "Mi podcast, y la música y los programas que no dejo de escuchar" }
];

/* =========================================================
   SITE SETTINGS — edit these and the whole site updates.
   Leave a value as "" to hide it.
   ========================================================= */
window.SITE = window.SITE || {};

SITE.config = {
  name: "Alba Pintado Rodrigo",
  title: "A Little Bit Of…",
  tagline: "For the curious and weird ones",

  // Your photo for the home page. Put the file in /images and write its name here.
  // If the file doesn't exist yet, the phage plushie stands in for you.
  photo: "images/perfil.jpg",

  // Links shown in the footer (leave "" to hide)
  email: "",                       // e.g. "hello@yourdomain.com"
  github: "https://github.com/alba-pintado",
  linkedin: "",                    // e.g. "https://www.linkedin.com/in/your-name"
  orcid: "",                       // e.g. "https://orcid.org/0000-0000-0000-0000"
  googleScholar: "",
  podcastFeed: ""                  // Spotify / Apple / iVoox link to your podcast
};

/* The sections of the site, in menu order.
   key   = the page name (key + ".html")
   icon  = the sticker shown on the home page and the section header */
SITE.sections = [
  { key: "science",   label: "Science & Bioinformatics", short: "Science",   icon: "icons/science.png",
    blurb: "Papers, news, tutorials and courses in R, Python and machine learning" },
  { key: "tutoring",  label: "Tutoring",                 short: "Tutoring",  icon: "icons/tutoring.png",
    blurb: "Classes and materials from 1º ESO to 2º Bachillerato" },
  { key: "lifestyle", label: "Lifestyle",                short: "Lifestyle", icon: "icons/lifestyle.png",
    blurb: "Staying active, eating well and small everyday adventures" },
  { key: "books",     label: "Books",                    short: "Books",     icon: "icons/books.png",
    blurb: "What I'm reading and what I thought of it" },
  { key: "travel",    label: "Travel",                   short: "Travel",    icon: "icons/travel.png",
    blurb: "Trips, routes and the places worth the detour" },
  { key: "movies",    label: "Movies, Series & Documentaries", short: "Movies & Series", icon: "icons/movies.png",
    blurb: "Reviews of films, series and documentaries" },
  { key: "music",     label: "Music & Podcasts",         short: "Music & Podcasts", icon: "icons/music.png",
    blurb: "My podcast, plus the music and shows on repeat" }
];

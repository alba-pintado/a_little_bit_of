/* =========================================================
   MUSIC & PODCASTS
   SITE.podcast = episodes of YOUR podcast (numbered, newest last)
     Fields: id, number, title, date, summary, url (Spotify/iVoox/YouTube…),
             embed (optional iframe src to play it on the page), body (show notes)
   SITE.music  = things you recommend
     Fields: id, title, artist, type ("Album" | "Song" | "Podcast" | "Playlist"),
             url, note, date, tags
   ========================================================= */
window.SITE = window.SITE || {};

SITE.podcast = [
  {
    id: "ep-01",
    number: 1,
    title: "Example episode: why this podcast exists",
    title_es: "Episodio de ejemplo: por qué existe este podcast",
    date: "2026-10-01",
    summary: "Template for your first episode. Add the link to where it's published in the url field.",
    summary_es: "Plantilla para tu primer episodio. Pon en el campo url el enlace donde esté publicado.",
    url: "",
    example: true,
    body: `
      ## Show notes
      - Topics covered
      - Papers or books mentioned (add their links)
      - Where to find the guest
    `
  }
];

SITE.music = [
  {
    id: "radiolab",
    title: "Radiolab",
    artist: "WNYC Studios",
    type: "Podcast",
    url: "https://radiolab.org/",
    note: "Example recommendation. Write one line on why you like it.",
    note_es: "Recomendación de ejemplo. Escribe una línea sobre por qué te gusta.",
    date: "2026-09-15",
    tags: ["Science"],
    example: true
  },
  {
    id: "this-podcast-will-kill-you",
    title: "This Podcast Will Kill You",
    artist: "Erin Welsh & Erin Allmann Updyke",
    type: "Podcast",
    url: "https://thispodcastwillkillyou.com/",
    note: "Example recommendation: epidemiology and disease ecology told by two scientists.",
    note_es: "Recomendación de ejemplo: epidemiología y ecología de las enfermedades contadas por dos científicas.",
    date: "2026-09-02",
    tags: ["Science", "Health"],
    example: true
  }
];

/* =========================================================
   TUTORING
   ---------------------------------------------------------
   PDFs: you DON'T need to write them here.
   Drop each PDF into its folder and the site lists it on its own:

     content/tutoring/materials/<level>/<subject>/ejercicios/   → high-level exercises
     content/tutoring/materials/<level>/<subject>/examenes/     → model exams

   e.g. content/tutoring/materials/2bach/quimica/examenes/examen-modelo-1.pdf
   The file name becomes the title ("examen-modelo-1.pdf" → "Examen modelo 1").
   A file ending in "-soluciones.pdf" is linked as the solutions of the
   file with the same name (examen-modelo-1-soluciones.pdf).

   You can still add a PDF or a link by hand in "extra" below,
   for example a PDF hosted somewhere else.
   ========================================================= */
window.SITE = window.SITE || {};

SITE.tutoring = {
  intro: {
    en: "Classes in maths, physics, chemistry and biology, from 1º ESO to 2º Bachillerato. For every subject you'll find high-level exercises, model exams and the websites I recommend.",
    es: "Clases de matemáticas, física, química y biología, de 1º ESO a 2º Bachillerato. En cada asignatura tienes ejercicios de alto nivel, exámenes modelo y las webs que te recomiendo."
  },
  note: {
    en: "I am from Madrid, Spain, and I usually give my classes in Spanish. For this reason, most of the documents are in Spanish. However, if you would like any of the documents in English, please do not hesitate to contact me and I can provide them in English.",
    es: ""
  },

  /* Levels: name shown on the site + folder name inside materials/ */
  levels: [
    { name: "1º ESO",          folder: "1eso" },
    { name: "2º ESO",          folder: "2eso" },
    { name: "3º ESO",          folder: "3eso" },
    { name: "4º ESO",          folder: "4eso" },
    { name: "1º Bachillerato", folder: "1bach" },
    { name: "2º Bachillerato", folder: "2bach" }
  ],

  /* Subjects: name in both languages, folder name, and recommended websites.
     A website with "levels" only shows in those levels; without it, in all. */
  subjects: {
    mat: {
      en: "Mathematics", es: "Matemáticas", folder: "matematicas",
      websites: [
        { title: "Khan Academy", url: "https://es.khanacademy.org/math",
          note: "Free videos and exercises for every topic, step by step.",
          note_es: "Vídeos y ejercicios gratis de todos los temas, paso a paso." },
        { title: "GeoGebra", url: "https://www.geogebra.org",
          note: "Graph functions and play with geometry interactively.",
          note_es: "Representa funciones y juega con la geometría de forma interactiva." },
        { title: "Wolfram|Alpha", url: "https://www.wolframalpha.com",
          note: "Check your results: derivatives, integrals, equations.",
          note_es: "Comprueba tus resultados: derivadas, integrales, ecuaciones." }
      ]
    },
    fis: {
      en: "Physics", es: "Física", folder: "fisica",
      websites: [
        { title: "Fisicalab", url: "https://www.fisicalab.com",
          note: "Physics theory by level, worked problems and formulas.",
          note_es: "Teoría de física por niveles, problemas resueltos y fórmulas." },
        { title: "PhET (Universidad de Colorado)", url: "https://phet.colorado.edu/es/",
          note: "Interactive simulations to see the physics in action.",
          note_es: "Simulaciones interactivas para ver la física en acción." },
        { title: "Khan Academy", url: "https://es.khanacademy.org/science/physics",
          note: "Videos and practice exercises.", note_es: "Vídeos y ejercicios de práctica." }
      ]
    },
    qui: {
      en: "Chemistry", es: "Química", folder: "quimica",
      websites: [
        { title: "Ptable", url: "https://ptable.com",
          note: "Interactive periodic table: properties, orbitals, isotopes.",
          note_es: "Tabla periódica interactiva: propiedades, orbitales, isótopos." },
        { title: "PhET (Universidad de Colorado)", url: "https://phet.colorado.edu/es/",
          note: "Simulations: build molecules, balance reactions, pH.",
          note_es: "Simulaciones: construye moléculas, ajusta reacciones, pH." },
        { title: "Khan Academy", url: "https://es.khanacademy.org/science/chemistry",
          note: "Videos and practice exercises.", note_es: "Vídeos y ejercicios de práctica." }
      ]
    },
    bio: {
      en: "Biology", es: "Biología", folder: "biologia",
      websites: [
        { title: "Khan Academy", url: "https://es.khanacademy.org/science/biology",
          note: "Videos on cells, genetics, evolution and more.",
          note_es: "Vídeos de célula, genética, evolución y más." },
        { title: "HHMI BioInteractive", url: "https://www.biointeractive.org",
          note: "High-quality animations and real data (in English).",
          note_es: "Animaciones de gran calidad y datos reales (en inglés)." },
        { title: "Cells Alive!", url: "https://www.cellsalive.com",
          note: "Interactive cell models, mitosis and meiosis (in English).",
          note_es: "Modelos interactivos de la célula, mitosis y meiosis (en inglés)." }
      ]
    }
  },

  /* Websites for every subject of one level */
  levelWebsites: [
    { levels: ["2bach"], title: "PAU Madrid – exámenes y modelos (UC3M)", url: "https://uc3m.es/pruebasacceso/modelos-examenes",
      note: "Past university entrance exams and model exams, by subject, with marking criteria.",
      note_es: "Exámenes de la PAU de años anteriores y modelos, por asignatura, con criterios de corrección." }
  ],

  /* Optional: PDFs or links added by hand, e.g.
     { level: "2bach", subject: "qui", type: "exams",       // or "exercises"
       title: "Model exam 2024", title_es: "Modelo 2024", url: "https://…", solutions: "https://…" } */
  extra: []
};

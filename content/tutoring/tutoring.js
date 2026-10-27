/* =========================================================
   TUTORING
   Every subject of every level has two lists of PDFs:
     exercises → high-level exercises
     exams     → model exams
   Each PDF:
     { title: "Exam 1 – Kinematics", title_es: "Examen 1 – Cinemática",
       url: "content/tutoring/materials/4eso/fisica/examen-1.pdf",
       solutions: "content/tutoring/materials/4eso/fisica/examen-1-soluciones.pdf" }   ← optional
   Put the files in the matching folder inside content/tutoring/materials/
   (see content/tutoring/materials/LEEME.md for the folder names).
   ========================================================= */
window.SITE = window.SITE || {};

SITE.tutoring = {
  intro: {
    en: "Classes in maths, physics, chemistry and biology, from 1º ESO to 2º Bachillerato. For every subject you'll find high-level exercises and model exams to download.",
    es: "Clases de matemáticas, física, química y biología, de 1º ESO a 2º Bachillerato. En cada asignatura tienes ejercicios de alto nivel y exámenes modelo para descargar."
  },
  note: {
    en: "I am from Madrid, Spain, and I usually give my classes in Spanish. For this reason, most of the documents are in Spanish. However, if you would like any of the documents in English, please do not hesitate to contact me and I can provide them in English.",
    es: ""
  },

  /* Subject names in both languages (key = short code used below) */
  subjects: {
    mat: { en: "Mathematics", es: "Matemáticas" },
    fis: { en: "Physics",     es: "Física" },
    qui: { en: "Chemistry",   es: "Química" },
    bio: { en: "Biology",     es: "Biología" }
  },

  levels: [
    { name: "1º ESO", subjects: {
        mat: { exercises: [], exams: [] },
        fis: { exercises: [], exams: [] },
        qui: { exercises: [], exams: [] },
        bio: { exercises: [], exams: [] } } },
    { name: "2º ESO", subjects: {
        mat: { exercises: [], exams: [] },
        fis: { exercises: [], exams: [] },
        qui: { exercises: [], exams: [] },
        bio: { exercises: [], exams: [] } } },
    { name: "3º ESO", subjects: {
        mat: { exercises: [], exams: [] },
        fis: { exercises: [], exams: [] },
        qui: { exercises: [], exams: [] },
        bio: { exercises: [], exams: [] } } },
    { name: "4º ESO", subjects: {
        mat: { exercises: [], exams: [] },
        fis: { exercises: [], exams: [] },
        qui: { exercises: [], exams: [] },
        bio: { exercises: [], exams: [] } } },
    { name: "1º Bachillerato", subjects: {
        mat: { exercises: [], exams: [] },
        fis: { exercises: [], exams: [] },
        qui: { exercises: [], exams: [] },
        bio: { exercises: [], exams: [] } } },
    { name: "2º Bachillerato", subjects: {
        mat: { exercises: [], exams: [] },
        fis: { exercises: [], exams: [] },
        qui: { exercises: [], exams: [] },
        bio: { exercises: [], exams: [] } } }
  ]
};

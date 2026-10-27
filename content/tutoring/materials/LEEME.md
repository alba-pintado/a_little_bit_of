# Materiales de tutorías

Cada curso y asignatura tiene su carpeta:

```
content/tutoring/materials/
├── 1eso/   matematicas/  fisica/  quimica/  biologia/
├── 2eso/   …
├── 3eso/   …
├── 4eso/   …
├── 1bach/  …
└── 2bach/  …
```

1. Guarda el PDF en su carpeta, con un nombre sin espacios, tildes ni ñ:
   `content/tutoring/materials/2bach/quimica/examen-modelo-1.pdf`
2. Añádelo en `content/tutoring/tutoring.js`, en el curso y la asignatura que toque:

```js
qui: {
  exercises: [
    { title: "Equilibrium – advanced problems", title_es: "Equilibrio – problemas avanzados",
      url: "content/tutoring/materials/2bach/quimica/equilibrio-avanzado.pdf",
      solutions: "content/tutoring/materials/2bach/quimica/equilibrio-avanzado-soluciones.pdf" }
  ],
  exams: [
    { title: "Model exam 1", title_es: "Examen modelo 1",
      url: "content/tutoring/materials/2bach/quimica/examen-modelo-1.pdf" }
  ]
}
```

- `exercises` = ejercicios de alto nivel; `exams` = exámenes modelo.
- `solutions` es opcional: si lo pones, sale un enlace "Soluciones" al lado.
- Los archivos `.gitkeep` solo sirven para que Git guarde las carpetas vacías; puedes dejarlos.
- Intenta que cada PDF pese menos de 5 MB (GitHub no admite archivos de más de 100 MB).

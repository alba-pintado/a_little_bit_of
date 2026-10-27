# Cómo añadir contenido a la web

Todo el contenido está en la carpeta **`data/`**. No hace falta tocar el HTML:
editas un archivo, guardas, haces commit y en un minuto está publicado.

| Quiero añadir… | Archivo |
|---|---|
| Un paper o una noticia científica | `data/papers.js` |
| Un tutorial de bioinformática | `data/tutorials.js` |
| Una lección de R, Python o ML | `data/courses.js` |
| Ejercicios de alto nivel o exámenes modelo (PDF) | `data/tutoring.js` + carpeta `materials/` |
| Un post de lifestyle | `data/lifestyle.js` |
| Una reseña de libro | `data/books.js` |
| Una reseña de peli, serie o documental | `data/movies.js` |
| Un viaje | `data/travel.js` |
| Un episodio de tu podcast o una recomendación | `data/music.js` |
| Tu nombre, email, LinkedIn, ORCID, foto… | `data/config.js` |

> Las entradas que pone **`example: true`** son ejemplos: salen con una etiqueta amarilla
> "example". Bórralas o cámbialas por las tuyas.

---

## Lo primero: tu foto y tus enlaces

1. Tu foto está en **`images/perfil.jpg`**. Para cambiarla, sustituye ese archivo
   por otra foto cuadrada con el mismo nombre.
2. Abre `data/config.js` y rellena `email`, `linkedin`, `orcid`, `googleScholar`
   y `podcastFeed`. Lo que dejes en `""` no aparece.

---

## Añadir un paper (solo necesitas el DOI)

Abre `data/papers.js` y copia este bloque **dentro de los corchetes `[ ]`**,
separándolo del anterior con una coma:

```js
  {
    id: "nombre-corto-sin-espacios",
    doi: "10.1038/s41586-021-03819-2",
    date: "2026-10-27",
    tags: ["Genomics"],
    note: "Una o dos frases con lo que te llevas del paper."
  },
```

El **título, la revista, el año y los autores se rellenan solos** a partir del DOI.
Si quieres escribirlos tú, añade `title`, `journal`, `year` o `authors`.

Para una **noticia** sin DOI, usa `kind: "news"` y `url: "https://…"` en lugar de `doi`.

Si quieres escribir un comentario largo, añade un campo `body` (ver Markdown abajo):
el paper tendrá su propia página.

---

## Añadir una reseña, viaje, post o tutorial

Todos funcionan igual: copia una entrada existente, cambia el `id` (tiene que ser
único) y el resto de campos. El texto largo va en `body`, entre comillas invertidas
`` ` ``:

```js
  {
    id: "el-gen",
    title: "The Gene",
    author: "Siddhartha Mukherjee",
    year: 2016,
    type: "Science",
    rating: 5,
    date: "2026-10-27",
    summary: "Dos líneas que salen en la tarjeta.",
    tags: ["Genetics"],
    image: "images/books/el-gen.jpg",
    body: `
      Aquí va la reseña completa, en **Markdown**.
    `
  },
```

- `date` siempre como `"AAAA-MM-DD"`: es lo que ordena las listas y la sección
  "Recently added" de la portada.
- `tags` crea automáticamente los botones de filtro.
- `image` es opcional. Guarda las fotos en `images/` (por ejemplo `images/travel/`).
  Comprímelas antes (menos de ~300 KB cada una) para que la web cargue rápido.

---

## Añadir una lección a un curso (R, Python, ML)

En `data/courses.js`, cada curso tiene una lista `lessons` **en orden**.
Para publicar una lección que estaba como "coming soon", quítale `soon: true`
y añádele `date`, `summary` y `body`. Las flechas de "Previous / Next" se generan solas.

Para un curso nuevo (por ejemplo, Bash), copia un bloque de curso entero y cambia
`key`, `title`, `description` y las lecciones.

---

## Subir ejercicios de alto nivel y exámenes modelo

Cada curso y asignatura ya tiene su carpeta dentro de `materials/`
(`materials/2bach/quimica/`, `materials/1eso/matematicas/`…).

1. Guarda el PDF en su carpeta, con un nombre sin espacios, tildes ni ñ:
   `materials/2bach/quimica/examen-modelo-1.pdf`
2. En `data/tutoring.js`, busca el curso y la asignatura
   (`mat` = Matemáticas, `fis` = Física, `qui` = Química, `bio` = Biología)
   y añade el PDF en `exercises` (ejercicios de alto nivel) o en `exams` (exámenes modelo):

```js
qui: {
  exercises: [
    { title: "Equilibrium – advanced problems", title_es: "Equilibrio – problemas avanzados",
      url: "materials/2bach/quimica/equilibrio-avanzado.pdf",
      solutions: "materials/2bach/quimica/equilibrio-avanzado-soluciones.pdf" }
  ],
  exams: [
    { title: "Model exam 1", title_es: "Examen modelo 1",
      url: "materials/2bach/quimica/examen-modelo-1.pdf" }
  ]
},
```

`solutions` es opcional: si lo pones, aparece un enlace "Soluciones" al lado del PDF.
Más detalles en `materials/LEEME.md`.

---

## Web en dos idiomas (inglés / español)

Arriba a la derecha hay un botón **ES / EN**. La web recuerda el idioma que eligió
cada visitante; la primera vez usa el del navegador.

Para que un texto salga en español, añade el mismo campo terminado en **`_es`**:

```js
  {
    id: "el-gen",
    title: "The Gene",
    title_es: "El gen",
    summary: "Two lines in English.",
    summary_es: "Dos líneas en español.",
    body: `Review in English…`,
    body_es: `Reseña en español…`
  },
```

- Funciona con cualquier campo de texto: `title`, `summary`, `body`, `note`, `place`, `type`, `level`…
- Si un campo no tiene versión `_es`, se muestra en inglés (y al revés). Si falta el
  `body` en un idioma, la página avisa: "solo disponible en inglés / en español".
- Puedes escribir solo en español si quieres: pon únicamente los campos `_es`.
- Los textos de la portada (presentación, subtítulo…) están en `index.html`,
  dentro de bloques `data-lang="en"` y `data-lang="es"`.

---

## Markdown: cómo dar formato al texto de `body`

~~~~
## Un título de sección
Texto normal. **Negrita**, *cursiva* y `código`.

- Una lista
- con puntos

1. Una lista
2. numerada

[Un enlace](https://ejemplo.com)
![Descripción de la foto](images/travel/foto.jpg)

> Una cita destacada

```r
# un bloque de código con colores (r, python, bash…)
x <- c(1, 2, 3)
```
~~~~

Ojo: dentro de `body` no puedes escribir una comilla invertida suelta;
si la necesitas, escríbela como `` \` ``.

---

## Ver los cambios antes de subirlos

Abre `index.html` con doble clic, o mejor, en una terminal dentro de la carpeta:

```bash
python3 -m http.server 8000
```

y entra en http://localhost:8000

Si una página sale en blanco, casi siempre es una **coma que falta** entre dos
entradas o una comilla sin cerrar. Pulsa F12 → pestaña *Console*: te dice el archivo
y la línea del error.

---

## Publicar (GitHub Pages)

La primera vez:

1. En GitHub, entra en el repositorio → **Settings** → **Pages**.
2. En *Build and deployment*, *Source*: **Deploy from a branch**.
3. *Branch*: **main**, carpeta **/ (root)** → **Save**.
4. En uno o dos minutos la web estará en
   **https://alba-pintado.github.io/a_little_bit_of/**

Después, cada vez que hagas commit y push a `main`, la web se actualiza sola:

```bash
git add .
git commit -m "Nueva reseña: The Gene"
git push
```

También puedes editar los archivos de `data/` directamente en la web de GitHub
(icono del lápiz) y darle a *Commit changes*.

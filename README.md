<p align="center">
  <img src="images/phage.png" alt="" width="120">
</p>

<h1 align="center">A Little Bit Of…</h1>
<p align="center"><em>For the curious and weird ones</em></p>
<p align="center">
  <img src="images/signature.svg" alt="by Alba Pintado Rodrigo" width="360">
</p>

<p align="center">
  <a href="https://alba-pintado.github.io/a_little_bit_of/"><strong>Visit the site</strong></a>
</p>

---

Personal website of **Alba Pintado Rodrigo**, biologist and bioinformatician from Madrid.
It mixes the professional and the personal: science and bioinformatics on one side,
books, travel, films and podcasts on the other.

## What's inside

| Section | Content |
|---|---|
| **Science & Bioinformatics** | Papers and science news with their DOI (title, journal and authors are fetched automatically from Crossref), step-by-step bioinformatics tutorials, and courses in **R**, **Python** and **machine learning** |
| **Tutoring** | High-level exercises and model exams (PDF) for maths, physics, chemistry and biology, from 1º ESO to 2º Bachillerato |
| **Lifestyle** | Staying active, eating well, everyday adventures |
| **Books** · **Movies, Series & Documentaries** | Reviews with ratings |
| **Travel** | Trips and itineraries |
| **Music & Podcasts** | Podcast episodes and recommendations |

The whole site is available in **English and Spanish** (switch with the ES / EN button). Every page has a search over the whole site (press <kbd>/</kbd>) and tag filters.

## How it's built

A static site with no build step and no framework: plain HTML, CSS and JavaScript,
hosted on GitHub Pages.

```
├── index.html, science.html, books.html, …   one page per section
├── post.html                                 renders any single entry (?c=books&id=…)
├── data/                                     ← all the content lives here
│   ├── config.js                             name, links, menu sections
│   ├── papers.js  tutorials.js  courses.js
│   ├── books.js   movies.js     travel.js
│   └── lifestyle.js  music.js   tutoring.js
├── assets/css/style.css                      design
├── assets/js/site.js                         menu, search, filters, Markdown, DOI lookup
├── materials/                                tutoring PDFs, one folder per level and subject
├── icons/                                    section stickers
└── images/                                   photos, signature, favicon
```

Content is written as JavaScript objects with Markdown bodies, so adding a post
means editing one file in `data/`. Code blocks in tutorials and lessons are
syntax-highlighted. Papers only need a DOI.

See **[COMO-ANADIR-CONTENIDO.md](COMO-ANADIR-CONTENIDO.md)** (Spanish) for a step-by-step guide.

## Run it locally

```bash
git clone https://github.com/alba-pintado/a_little_bit_of.git
cd a_little_bit_of
python3 -m http.server 8000
# open http://localhost:8000
```

Opening `index.html` directly also works.

## Credits

Typefaces: [Caprasimo](https://fonts.google.com/specimen/Caprasimo), [Outfit](https://fonts.google.com/specimen/Outfit) and [Homemade Apple](https://fonts.google.com/specimen/Homemade+Apple) (Google Fonts).
Paper metadata: [Crossref REST API](https://www.crossref.org/documentation/retrieve-metadata/rest-api/).
Markdown: [marked](https://marked.js.org/). Code highlighting: [highlight.js](https://highlightjs.org/).

© Alba Pintado Rodrigo. All rights reserved for the written content and images.

/* =========================================================
   A Little Bit Of… — site engine
   Builds the menu, footer and search on every page, loads
   your content from /data, and renders it.
   You normally never need to edit this file: add content
   in the /data folder instead (see COMO-ANADIR-CONTENIDO.md).
   ========================================================= */
(function () {
  "use strict";

  const DATA_FILES = [
    "data/config.js", "data/papers.js", "data/tutorials.js", "data/courses.js",
    "data/tutoring.js", "data/lifestyle.js", "data/books.js", "data/travel.js",
    "data/movies.js", "data/music.js"
  ];

  /* Which section each kind of content belongs to */
  const COLLECTIONS = {
    papers:    { section: "science",   label: "Paper",    tab: "papers" },
    tutorials: { section: "science",   label: "Tutorial", tab: "tutorials" },
    lessons:   { section: "science",   label: "Lesson",   tab: "courses" },
    lifestyle: { section: "lifestyle", label: "Lifestyle" },
    books:     { section: "books",     label: "Book review" },
    travel:    { section: "travel",    label: "Trip" },
    movies:    { section: "movies",    label: "Review" },
    podcast:   { section: "music",     label: "Podcast episode" },
    music:     { section: "music",     label: "Recommendation" }
  };

  /* ---------- small helpers ---------- */
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (sel, root = document) => root.querySelector(sel);

  function fmtDate(d, opts) {
    if (!d) return "";
    const date = new Date(d + (String(d).length === 10 ? "T12:00:00" : ""));
    if (isNaN(date)) return esc(d);
    return date.toLocaleDateString("en-GB", opts || { day: "numeric", month: "short", year: "numeric" });
  }

  function stars(n, max = 5) {
    if (n == null) return "";
    const full = Math.round(n);
    return `<span class="stars" aria-label="${n} out of ${max}">` +
      "★".repeat(full) + `<span class="off">${"★".repeat(Math.max(0, max - full))}</span></span>`;
  }

  function tagList(tags, extraClass = "") {
    if (!tags || !tags.length) return "";
    return `<div class="tags">${tags.map((t) => `<span class="tag ${extraClass}">${esc(t)}</span>`).join("")}</div>`;
  }

  const exampleTag = (item) => (item && item.example ? `<span class="tag example" title="Placeholder: replace with your own content">example</span>` : "");

  const postUrl = (collection, id) => `post.html?c=${encodeURIComponent(collection)}&id=${encodeURIComponent(id)}`;

  /* Markdown → HTML. Uses the "marked" library when it loaded,
     otherwise a tiny fallback so the text still shows. */
  function md(text) {
    if (!text) return "";
    const clean = dedent(text);
    if (window.marked) return window.marked.parse(clean);
    return miniMarkdown(clean);
  }

  /* Small Markdown renderer used when the CDN library can't load:
     headings, paragraphs, lists, code blocks, quotes, bold, italics,
     inline code, links and images. */
  function inline(s) {
    const codes = [];
    s = esc(s).replace(/`([^`]+)`/g, (_, c) => { codes.push(c); return `\u0000${codes.length - 1}\u0000`; });
    s = s
      .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1" loading="lazy">')
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>");
    return s.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${codes[i]}</code>`);
  }
  function miniMarkdown(src) {
    const lines = src.split("\n"), out = [];
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (/^```/.test(line)) {
        const lang = line.slice(3).trim(), buf = [];
        i++;
        while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
        i++;
        out.push(`<pre><code${lang ? ` class="language-${esc(lang)}"` : ""}>${esc(buf.join("\n"))}</code></pre>`);
      } else if (/^#{1,4}\s/.test(line)) {
        const n = line.match(/^#+/)[0].length;
        out.push(`<h${n}>${inline(line.replace(/^#+\s*/, ""))}</h${n}>`); i++;
      } else if (/^>\s?/.test(line)) {
        const buf = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) buf.push(lines[i++].replace(/^>\s?/, ""));
        out.push(`<blockquote><p>${inline(buf.join(" "))}</p></blockquote>`);
      } else if (/^\s*([-*]|\d+\.)\s/.test(line)) {
        const ordered = /^\s*\d+\./.test(line), items = [];
        while (i < lines.length && /^\s*([-*]|\d+\.)\s/.test(lines[i])) {
          let item = lines[i++].replace(/^\s*([-*]|\d+\.)\s/, "");
          while (i < lines.length && /^\s{2,}\S/.test(lines[i]) && !/^\s*([-*]|\d+\.)\s/.test(lines[i])) item += " " + lines[i++].trim();
          items.push(`<li>${inline(item)}</li>`);
        }
        out.push(ordered ? `<ol>${items.join("")}</ol>` : `<ul>${items.join("")}</ul>`);
      } else if (!line.trim()) {
        i++;
      } else {
        const buf = [];
        while (i < lines.length && lines[i].trim() && !/^(```|#{1,4}\s|>|\s*([-*]|\d+\.)\s)/.test(lines[i])) buf.push(lines[i++]);
        out.push(`<p>${inline(buf.join(" "))}</p>`);
      }
    }
    return out.join("\n");
  }
  function dedent(s) {
    const lines = String(s).replace(/^\n+|\s+$/g, "").split("\n");
    const ind = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^ */)[0].length));
    return lines.map((l) => l.slice(ind)).join("\n");
  }
  function highlight(root) {
    if (window.hljs) root.querySelectorAll("pre code").forEach((el) => window.hljs.highlightElement(el));
  }

  /* All content as one flat list, newest first — used by search and "latest" */
  function allItems() {
    const S = window.SITE || {};
    const out = [];
    for (const key of Object.keys(COLLECTIONS)) {
      let list = S[key];
      if (key === "lessons") list = flattenLessons();
      if (!Array.isArray(list)) continue;
      for (const item of list) {
        out.push({
          collection: key,
          item,
          title: item.title || item.doi || "",
          date: item.date || "",
          text: [item.title, item.author, item.authors, item.journal, item.summary, item.note, item.place, item.artist, item.doi, (item.tags || []).join(" ")].join(" ")
        });
      }
    }
    return out.sort((a, b) => String(b.date).localeCompare(String(a.date)));
  }

  function flattenLessons() {
    const out = [];
    (window.SITE.courses || []).forEach((course) =>
      (course.lessons || []).forEach((l) => out.push(Object.assign({ course: course.key, courseTitle: course.title, tags: [course.title] }, l))));
    return out;
  }

  function itemHref(collection, item) {
    if (collection === "papers") return item.body ? postUrl("papers", item.id) : (item.doi ? `https://doi.org/${item.doi}` : item.url || "science.html#papers");
    if (collection === "music") return item.url || "music.html";
    if (collection === "podcast" && !item.body) return item.url || "music.html";
    return postUrl(collection, item.id);
  }

  function sectionOf(collection) {
    const key = COLLECTIONS[collection].section;
    return (window.SITE.sections || []).find((s) => s.key === key);
  }

  /* ---------- loading ---------- */
  function loadScript(src) {
    return new Promise((resolve) => {
      const s = document.createElement("script");
      s.src = src; s.onload = resolve; s.onerror = () => { console.warn("Could not load", src); resolve(); };
      document.head.appendChild(s);
    });
  }
  let readyPromise;
  function ready() {
    if (!readyPromise) {
      window.SITE = window.SITE || {};
      readyPromise = Promise.all(DATA_FILES.map(loadScript)).then(() => {
        buildChrome();
        return window.SITE;
      });
    }
    return readyPromise;
  }

  /* ---------- header, footer, search ---------- */
  const ICON_SEARCH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
  const ICON_MENU = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';

  function buildChrome() {
    const S = window.SITE, C = S.config || {};
    const here = (location.pathname.split("/").pop() || "index.html").replace(".html", "") || "index";
    const params = new URLSearchParams(location.search);
    const activeKey = here === "post" && COLLECTIONS[params.get("c")] ? COLLECTIONS[params.get("c")].section : here;

    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
      <div class="wrap">
        <a class="brand" href="index.html"><img src="images/favicon.png" alt="">${esc(C.title || "A Little Bit Of…")}</a>
        <button class="icon-btn menu-btn" aria-expanded="false" aria-controls="site-nav">${ICON_MENU}<span>Menu</span></button>
        <nav class="site-nav" id="site-nav" aria-label="Main">
          <ul>${(S.sections || []).map((s) => `<li><a href="${s.key}.html"${s.key === activeKey ? ' aria-current="page"' : ""}>${esc(s.short)}</a></li>`).join("")}</ul>
        </nav>
        <button class="icon-btn search-btn" aria-label="Search the site">${ICON_SEARCH}<kbd>/</kbd></button>
      </div>`;
    document.body.prepend(header);

    const skip = document.createElement("a");
    skip.href = "#main"; skip.className = "sr-only"; skip.textContent = "Skip to content";
    skip.addEventListener("focus", () => skip.classList.remove("sr-only"));
    skip.addEventListener("blur", () => skip.classList.add("sr-only"));
    document.body.prepend(skip);

    const nav = $("#site-nav"), menuBtn = $(".menu-btn");
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open);
    });

    const links = [
      C.email && `<li><a href="mailto:${esc(C.email)}">Email</a></li>`,
      C.github && `<li><a href="${esc(C.github)}" rel="me">GitHub</a></li>`,
      C.linkedin && `<li><a href="${esc(C.linkedin)}" rel="me">LinkedIn</a></li>`,
      C.orcid && `<li><a href="${esc(C.orcid)}" rel="me">ORCID</a></li>`,
      C.googleScholar && `<li><a href="${esc(C.googleScholar)}" rel="me">Google Scholar</a></li>`,
      C.podcastFeed && `<li><a href="${esc(C.podcastFeed)}">Podcast</a></li>`
    ].filter(Boolean).join("");

    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="wrap">
        <div>
          <img class="sig" src="images/signature.svg" alt="by ${esc(C.name)}">
          <small>© ${new Date().getFullYear()} ${esc(C.name)} · Made in Madrid</small>
        </div>
        <ul>${links}</ul>
      </div>`;
    document.body.appendChild(footer);

    buildSearch();
  }

  function buildSearch() {
    const dlg = document.createElement("dialog");
    dlg.className = "search-dialog";
    dlg.setAttribute("aria-label", "Search");
    dlg.innerHTML = `
      <form method="dialog" role="search">
        ${ICON_SEARCH.replace("<svg", '<svg width="20" height="20"')}
        <label class="sr-only" for="site-search">Search everything</label>
        <input id="site-search" type="search" placeholder="Search papers, reviews, trips, lessons…" autocomplete="off">
        <button class="icon-btn" value="close" aria-label="Close search">Esc</button>
      </form>
      <ul class="search-results" aria-live="polite"></ul>`;
    document.body.appendChild(dlg);

    const input = $("#site-search", dlg), results = $(".search-results", dlg);
    const items = allItems();

    function render(q) {
      q = q.trim().toLowerCase();
      if (!q) { results.innerHTML = `<li class="none">Type to search across every section.</li>`; return; }
      const words = q.split(/\s+/);
      const hits = items.filter((it) => words.every((w) => it.text.toLowerCase().includes(w))).slice(0, 30);
      results.innerHTML = hits.length
        ? hits.map((h) => `<li><a href="${esc(itemHref(h.collection, h.item))}">${esc(h.title)}<small>${esc(COLLECTIONS[h.collection].label)} · ${esc(sectionOf(h.collection)?.label || "")}</small></a></li>`).join("")
        : `<li class="none">Nothing matches “${esc(q)}”. Try a shorter word or a tag like “genomics”.</li>`;
    }
    input.addEventListener("input", () => render(input.value));
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); const a = $(".search-results a", dlg); if (a) location.href = a.href; }
    });

    const open = () => { render(""); input.value = ""; dlg.showModal(); input.focus(); };
    $(".search-btn").addEventListener("click", open);
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
    document.addEventListener("keydown", (e) => {
      const typing = /input|textarea|select/i.test(document.activeElement?.tagName || "");
      if (e.key === "/" && !typing && !dlg.open) { e.preventDefault(); open(); }
    });
  }

  /* ---------- section header ---------- */
  function pageHead(key, title, lead) {
    const s = (window.SITE.sections || []).find((x) => x.key === key) || {};
    document.title = `${title || s.label} · ${window.SITE.config.title}`;
    return `
      <div class="page-head">
        <div><h1>${esc(title || s.label)}</h1>${lead ? `<p class="lead">${lead}</p>` : ""}</div>
        ${s.icon ? `<img src="${esc(s.icon)}" alt="">` : ""}
      </div>`;
  }

  /* ---------- filterable list helper ---------- */
  function filterable(mount, list, renderList, opts = {}) {
    const tags = [...new Set(list.flatMap((i) => i.tags || []))].sort((a, b) => a.localeCompare(b));
    let active = null, query = "";
    mount.innerHTML = `
      <div class="toolbar">
        <label class="sr-only" for="f-${opts.id}">Filter</label>
        <input id="f-${opts.id}" type="search" placeholder="${esc(opts.placeholder || "Filter…")}">
        ${tags.map((t) => `<button class="chip" type="button" aria-pressed="false" data-tag="${esc(t)}">${esc(t)}</button>`).join("")}
      </div>
      <div class="list-out"></div>`;
    const out = $(".list-out", mount);
    function draw() {
      const q = query.toLowerCase();
      const shown = list.filter((i) =>
        (!active || (i.tags || []).includes(active)) &&
        (!q || JSON.stringify(i).toLowerCase().includes(q)));
      out.innerHTML = shown.length ? renderList(shown) : `<div class="empty">${list.length ? "Nothing matches that filter." : esc(opts.empty || "Nothing here yet.")}</div>`;
      if (opts.after) opts.after(out, shown);
    }
    $("input", mount).addEventListener("input", (e) => { query = e.target.value; draw(); });
    mount.querySelectorAll(".chip").forEach((b) => b.addEventListener("click", () => {
      active = active === b.dataset.tag ? null : b.dataset.tag;
      mount.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", c.dataset.tag === active));
      draw();
    }));
    draw();
  }

  /* ---------- papers: fills in missing details from the DOI ---------- */
  const doiCache = {};
  function crossref(doi) {
    if (doiCache[doi]) return doiCache[doi];
    let cached = null;
    try { cached = JSON.parse(localStorage.getItem("doi:" + doi) || "null"); } catch (e) { /* storage blocked */ }
    if (cached) return (doiCache[doi] = Promise.resolve(cached));
    doiCache[doi] = fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (!j) return null;
        const m = j.message;
        const meta = {
          title: (m.title || [])[0],
          journal: (m["container-title"] || [])[0] || m.publisher,
          year: (m.issued && m.issued["date-parts"] && m.issued["date-parts"][0][0]) || "",
          authors: (m.author || []).map((a) => [a.given, a.family].filter(Boolean).join(" ") || a.name).filter(Boolean)
        };
        try { localStorage.setItem("doi:" + doi, JSON.stringify(meta)); } catch (e) { /* ignore */ }
        return meta;
      })
      .catch(() => null);
    return doiCache[doi];
  }

  function authorLine(a) {
    if (!a) return "";
    if (typeof a === "string") return a;
    if (a.length <= 3) return a.join(", ");
    return `${a[0]} et al.`;
  }

  function paperCard(p) {
    const doiLink = p.doi ? `https://doi.org/${p.doi}` : p.url;
    const titleHref = p.body ? postUrl("papers", p.id) : doiLink;
    const known = p.title && p.journal;
    return `
      <article class="paper" data-kind="${esc(p.kind || "paper")}" data-doi="${esc(p.doi || "")}" ${known ? "" : 'data-fetch="1"'}>
        <div class="inner">
          <div class="ref">${p.kind === "news" ? "News" : "Paper"} · <span class="j">${esc(p.journal || "")}</span>${p.year ? ` · <span class="y">${esc(p.year)}</span>` : '<span class="y"></span>'} ${exampleTag(p)}</div>
          <h3>${titleHref ? `<a href="${esc(titleHref)}">` : ""}<span class="t">${p.title ? esc(p.title) : '<span class="loading-line"></span>'}</span>${titleHref ? "</a>" : ""}</h3>
          <div class="ref a">${esc(authorLine(p.authors))}</div>
          ${p.note ? `<p class="take">${esc(p.note)}</p>` : ""}
          <div class="foot">
            ${p.doi ? `<a class="doi" href="https://doi.org/${esc(p.doi)}">doi:${esc(p.doi)}</a><button class="copy-btn" type="button" data-copy="https://doi.org/${esc(p.doi)}">Copy DOI link</button>` : ""}
            ${p.date ? `<span class="muted">Added ${fmtDate(p.date)}</span>` : ""}
            ${tagList(p.tags)}
          </div>
        </div>
      </article>`;
  }

  function hydratePapers(root) {
    root.querySelectorAll(".copy-btn").forEach((b) => b.addEventListener("click", () => {
      navigator.clipboard?.writeText(b.dataset.copy).then(() => { b.textContent = "Copied"; setTimeout(() => (b.textContent = "Copy DOI link"), 1600); });
    }));
    root.querySelectorAll('.paper[data-fetch="1"]').forEach((el) => {
      const doi = el.dataset.doi;
      const p = (window.SITE.papers || []).find((x) => x.doi === doi) || {};
      if (!doi) return;
      crossref(doi).then((meta) => {
        if (!meta) { if (!p.title) $(".t", el).textContent = `doi:${doi}`; return; }
        if (!p.title) $(".t", el).textContent = meta.title || `doi:${doi}`;
        if (!p.journal) $(".j", el).textContent = meta.journal || "";
        if (!p.year && meta.year) $(".y", el).textContent = ` · ${meta.year}`;
        if (!p.authors) $(".a", el).textContent = authorLine(meta.authors);
      });
    });
  }

  /* ---------- reusable renderers ---------- */
  const R = {
    papers: (list) => `<div class="papers">${list.map(paperCard).join("")}</div>`,

    entries: (collection) => (list) => `<div class="entries">${list.map((e) => `
      <article class="entry">
        <div class="meta">${fmtDate(e.date)}${e.level ? ` · ${esc(e.level)}` : ""} ${exampleTag(e)}</div>
        <h3><a href="${postUrl(collection, e.id)}">${esc(e.title)}</a></h3>
        <p>${esc(e.summary || "")}</p>
        ${tagList(e.tags)}
      </article>`).join("")}</div>`,

    reviews: (collection) => (list) => `<div class="reviews">${list.map((r) => `
      <article class="review">
        <div class="cover">${r.image ? `<img src="${esc(r.image)}" alt="" loading="lazy">` : `<span>${esc((r.title || "?").trim()[0])}</span>`}</div>
        <div class="body">
          <div class="tags">${r.type ? `<span class="tag blush">${esc(r.type)}</span>` : ""}${exampleTag(r)}</div>
          <h3><a href="${postUrl(collection, r.id)}">${esc(r.title)}</a></h3>
          <div class="by">${esc(r.author || r.director || r.creator || "")}${r.year ? ` (${esc(r.year)})` : ""}</div>
          ${stars(r.rating)}
          <p>${esc(r.summary || "")}</p>
        </div>
      </article>`).join("")}</div>`,

    trips: (list) => `<div class="trips">${list.map((t) => `
      <article class="trip tape">
        <div class="photo">${t.image ? `<img src="${esc(t.image)}" alt="${esc(t.title)}" loading="lazy">` : `<span aria-hidden="true">${esc(t.emoji || "✈︎")}</span>`}</div>
        <h3><a href="${postUrl("travel", t.id)}">${esc(t.title)}</a></h3>
        <p>${esc(t.place || "")}${t.date ? ` · ${fmtDate(t.date, { month: "long", year: "numeric" })}` : ""} ${exampleTag(t)}</p>
      </article>`).join("")}</div>`
  };

  /* ---------- home "latest" ---------- */
  function latest(n = 6) {
    return allItems().filter((x) => x.date).slice(0, n);
  }

  window.Site = { ready, esc, fmtDate, stars, tagList, exampleTag, md, highlight, postUrl, pageHead, filterable,
    paperCard, hydratePapers, crossref, authorLine, R, latest, itemHref, sectionOf, COLLECTIONS, flattenLessons, $ };
})();

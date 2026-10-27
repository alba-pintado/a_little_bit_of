/* =========================================================
   TRAVEL
   Fields: id, title, place, date ("YYYY-MM" or "YYYY-MM-DD"),
           image (cover photo, optional — put photos in images/travel/),
           emoji (shown when there is no photo), summary, tags,
           body (Markdown: your itinerary, tips, photos)
   ========================================================= */
window.SITE = window.SITE || {};

SITE.travel = [
  {
    id: "example-trip",
    title: "Example trip: a long weekend",
    place: "Somewhere worth the detour",
    date: "2026-08-15",
    emoji: "🧭",
    summary: "A template for your travel posts.",
    tags: ["Europe"],
    example: true,
    body: `
      A structure that works well for trips:

      ## Day by day
      1. **Day 1** – where you went, what you ate
      2. **Day 2** – …

      ## Where to stay
      ## Budget
      ## What I'd do differently

      Add photos with \`![caption](images/travel/photo.jpg)\`.
    `
  }
];

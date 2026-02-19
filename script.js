/* TYPEWRITER PARA PERFIL Y OBJETIVO */
function typeWriter(element, speed = 30) {
  const text = element.innerText;
  element.innerText = "";
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerText += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

window.addEventListener("load", () => {
  const title = document.querySelector(".caprasimo-regular");
  const subtitle = document.querySelector(".subtitle");
  const svg = document.querySelector(".signature path");

  // Fade-in del título
  title.style.transition = "opacity 1s ease";
  title.style.opacity = 1;

  // Fade-in del subtítulo después del título
  setTimeout(() => {
    subtitle.style.transition = "opacity 1s ease";
    subtitle.style.opacity = 1;
  }, 1200); // 1.2s delay

  // Animar la firma SVG después del subtítulo
  setTimeout(() => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.transition = "stroke-dashoffset 2.5s linear";
    path.style.strokeDashoffset = 0;
  }, 2500);
});








/* EJECUCIÓN AL CARGAR LA PÁGINA */
window.addEventListener("load", () => {
  // Typewriter para párrafos de perfil y objetivo
  const typeElements = document.querySelectorAll(".profile-box p, .objective-box p");
  typeElements.forEach((el, index) => {
    setTimeout(() => typeWriter(el), 500 + index * 600);
  });

  // Typewriter para la firma
  const signature = document.getElementById("signature-text");
  if (signature) typeSignature(signature, 100, 1500);
});

/* ICONOS + TITULOS redirigen a secciones */
document.querySelectorAll("#sections-icons .icon-section").forEach(icon => {
  icon.addEventListener("click", () => {
    const targetId = icon.getAttribute("data-target");
    window.location.href = targetId + ".html";
  });
});

/* BUSCADOR INTERNO */
const searchBtn = document.getElementById("search-btn");
if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    const query = prompt("Enter keyword to search:");
    if (!query) return;

    const sections = document.querySelectorAll("section");
    let found = false;
    sections.forEach(sec => {
      if (sec.innerText.toLowerCase().includes(query.toLowerCase())) {
        sec.scrollIntoView({ behavior: "smooth" });
        found = true;
      }
    });
    if (!found) alert("No results found in the page.");
  });
}







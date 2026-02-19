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
  // Título y subtitulo difuminados
  const title = document.querySelector(".caprasimo-regular");
  const subtitle = document.querySelector(".subtitle");
  title.classList.add("fade-in");
  subtitle.classList.add("fade-in-delay");

  // Firma
  const authorSign = document.querySelector("#author-sign text");

  // Esperamos a que termine la animación del subtitulo
  subtitle.addEventListener("animationend", () => {
    document.querySelector("#author-sign").style.opacity = 1;
    authorSign.style.animation = "draw 2.5s linear forwards"; // trazo desde la izquierda
  });
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







/* TYPEWRITER */
function typeWriter(element,speed=30){
  const text = element.innerText;
  element.innerText = "";
  let i=0;
  function typing(){
    if(i<text.length){
      element.innerText+=text.charAt(i);
      i++;
      setTimeout(typing,speed);
    }
  }
  typing();
}

window.addEventListener("load", ()=>{
  const typeElements = document.querySelectorAll(".profile-box p, .objective-box p");
  typeElements.forEach((el,index)=>{
    setTimeout(()=>typeWriter(el),500+index*600);
  });
});

/* ICONOS + TITULOS redirigen a secciones */
document.querySelectorAll("#sections-icons .icon-section").forEach(icon=>{
  icon.addEventListener("click", ()=>{
    const targetId = icon.getAttribute("data-target");
    const section = document.getElementById(targetId);
    if(section){
      section.scrollIntoView({behavior:"smooth"});
    }
  });
});

/* BUSCADOR interno */
document.getElementById("search-btn").addEventListener("click", ()=>{
  const query = prompt("Enter keyword to search:");
  if(!query) return;

  const sections = document.querySelectorAll("section");
  let found = false;
  sections.forEach(sec=>{
    if(sec.innerText.toLowerCase().includes(query.toLowerCase())){
      sec.scrollIntoView({behavior:"smooth"});
      found = true;
    }
  });
  if(!found) alert("No results found in the page.");
});






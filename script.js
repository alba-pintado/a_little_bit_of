/* TYPEWRITER */
function typeWriter(element, speed=30){
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

/* ICON NAVIGATION */
document.querySelectorAll("#sections-icons .icon-section").forEach(icon=>{
  icon.addEventListener("click", ()=>{
    const targetUrl = icon.getAttribute("data-target");
    window.location.href = targetUrl; // redirige a otra página
  });
});

/* BUSCADOR */
document.getElementById("search-btn").addEventListener("click", ()=>{
  const query = document.getElementById("search-input").value.trim();
  if(query){
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
  }
});





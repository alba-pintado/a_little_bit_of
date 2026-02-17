/* TYPEWRITER EFFECT */
function typeWriter(element, speed=30){
  const text = element.innerText;
  element.innerText = "";
  let i=0;
  function typing(){
    if(i<text.length){
      element.innerText += text.charAt(i);
      i++;
      setTimeout(typing, speed);
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



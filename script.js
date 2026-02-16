// Scroll animations
const scrollElements = document.querySelectorAll(".scroll-appear");
const profileBox = document.querySelector(".pop-up .profile-box");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};

const displayScrollElement = (element) => {
  element.classList.add("visible");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  });

  // Pop-up perfil
  if (profileBox && elementInView(profileBox.parentElement, 1.5)) {
    profileBox.classList.add("visible");
  }
};

window.addEventListener("scroll", handleScrollAnimation);
handleScrollAnimation();

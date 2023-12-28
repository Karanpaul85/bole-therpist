document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav");
  var testimonials = document.querySelector("#testimonials-slider");
  if (testimonials) {
    new Splide("#testimonials-slider", {
      type: "loop",
      perPage: 3,
      autoplay: false,
      arrows: false,
      interval: 3500,
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    }).mount();
  }

  //get first letter of reviewer
  const allReviewers = document.querySelectorAll(".splide__slide .revier");
  allReviewers &&
    allReviewers.forEach((item) => {
      const firstLetter = item.textContent[0];
      item.setAttribute("data-before", firstLetter);
    });
  //scroll to id
  const links = document.querySelectorAll("#header a");
  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const hmBar = document.querySelector(".hm");
    if (navbar.classList.contains("open") && hmBar.classList.contains("open")) {
      navbar.classList.remove("open");
      hmBar.classList.remove("open");
    }

    const href = this.getAttribute("href");
    let offsetTop = null;
    if (href === "#banner") {
      offsetTop = document.querySelector(href).offsetTop;
    } else {
      offsetTop = document.querySelector(href).offsetTop - 70;
    }
    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
  //add hemburger icon and functionality
  const headerRight = document.querySelector(".header-right");
  if (headerRight) {
    const hm = document.createElement("div");
    hm.classList = "hm";
    hm.innerHTML = "<span></span>";
    hm.addEventListener("click", () => {
      if (hm.classList.contains("open") && navbar) {
        hm.classList.remove("open");
        navbar.classList.remove("open");
      } else {
        hm.classList.add("open");
        navbar.classList.add("open");
      }
    });
    headerRight.appendChild(hm);
  }
  if (window.location.hash === "#mailSuccess") {
    const thankYou = document.querySelector(".thankYou");
    const closeMsg = document.querySelector(".closeMsg");
    if (thankYou) {
      thankYou.style.display = "flex";
    }
    closeMsg?.addEventListener("click", function () {
      thankYou.style.display = "none";
    });
  }
});
// and remove class on scroll
const element = document.getElementById("header");
const classToAdd = "dark";
let scrollPosition = window.scrollY;

window.addEventListener("scroll", function () {
  scrollPosition = window.scrollY;
  if (scrollPosition >= 30) {
    element.classList.add(classToAdd);
  } else {
    element.classList.remove(classToAdd);
  }
});

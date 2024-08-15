function toggleMenu() {
  let menu = document.getElementById("main-menu");
  if (menu.classList.contains("menu-visible")) {
    menu.classList.remove("menu-visible")
    menu.classList.add("menu-hidden")
  } else if (menu.classList.contains("menu-hidden")) {
    menu.classList.remove("menu-hidden")
    menu.classList.add("menu-visible")
  } else {
    menu.classList.add("menu-visible")
  }
}

const carousels = document.getElementsByClassName("carousel-container");
let carouselStates = [];

let carousel = carouselStates[0];
let slides = carousel.children;
console.log(slides);

for (let i = 0; i < carousels.length; i++) {
  carouselStates.push({
    activeIndex: 0,
    items: carousels[i].getElementsByClassName("carousel-card"),
  });
}

function carouselNext(carouselIndex) {
  const carousel = carouselStates[carouselIndex];

}

function carouselPrevious(carouselIndex) {
  const carousel = carouselStates[carouselIndex];
}

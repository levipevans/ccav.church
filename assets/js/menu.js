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

for (let i = 0; i < carousels.length; i++) {
  carouselStates.push({
    activeIndex: 0,
    items: carousels[i].children,
  });
}

let carouselState = carouselStates[0];
let carousel = carouselState.items;
let slides = carousel[1].children;
carousel[0].addEventListener("click", e => {
  carouselState.activeIndex -= 1;
  if (carouselState.activeIndex < 0) carouselState.activeIndex = carousel[1].children.length;
  console.log(carouselState.activeIndex);
  moveSlide(carouselState.activeIndex);
});
carousel[2].addEventListener("click", e => {
  carouselState.activeIndex += 1;
  if (carouselState.activeIndex < 0) carouselState.activeIndex = carousel[1].children.length;
  console.log(carouselState.activeIndex);
  moveSlide(carouselState.activeIndex);
});
function moveSlide(index) {

}
console.log("Carousel: " + carousel);
console.log(slides)
for (let element of slides) {
  console.log("slides: " + element);
}
console.log("slides: " + slides);








function carouselNext(carouselIndex) {
  const carousel = carouselStates[carouselIndex];

}

function carouselPrevious(carouselIndex) {
  const carousel = carouselStates[carouselIndex];
}

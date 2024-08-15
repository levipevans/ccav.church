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
    items: carousels[i].getElementsByClassName("carousel-card"),
  });
}

function carouselNext(carouselIndex) {
  const carousel = carouselStates[carouselIndex];
  if (carousel.activeIndex < carousel.items.length - 1) {
    const nextIndex = carousel.activeIndex + 1;
    carousel.items[nextIndex].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    carousel.items[nextIndex].classList.add("carousel-card-active");
    carousel.items[carousel.activeIndex].classList.remove("carousel-card-active");
    carousel.activeIndex = nextIndex;
  }
  else {
    const nextIndex = 0;
    carousel.items[nextIndex].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    carousel.items[nextIndex].classList.add("carousel-card-active");
    carousel.items[carousel.activeIndex].classList.remove("carousel-card-active");
    carousel.activeIndex = nextIndex;
  }
}

function carouselPrevious(carouselIndex) {
  const carousel = carouselStates[carouselIndex];
  if (carousel.activeIndex > 0) {
    const previousIndex = carousel.activeIndex - 1;
    carousel.items[carousel.activeIndex].classList.remove("carousel-card-active");
    carousel.items[previousIndex].classList.add("carousel-card-active");
    carousel.items[previousIndex].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    carousel.activeIndex = previousIndex;
  }
  else {
    const previousIndex = carousel.items.length - 1;
    carousel.items[carousel.activeIndex].classList.remove("carousel-card-active");
    carousel.items[previousIndex].classList.add("carousel-card-active");
    carousel.items[previousIndex].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    carousel.activeIndex = previousIndex;
  }
}

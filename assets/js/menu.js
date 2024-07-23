function toggleMenu() {
    var menu = document.getElementById("main-menu");
    if (menu.classList.contains("menu-visible")) {
      menu.classList.remove("menu-visible")
      menu.classList.add("menu-hidden")
    } else if( menu.classList.contains("menu-hidden")) {
      menu.classList.remove("menu-hidden")
      menu.classList.add("menu-visible")
    } else {
      menu.classList.add("menu-visible")
    }
  }
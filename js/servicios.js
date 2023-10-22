function AlterMenu(menu, boolean) {
  const Menu = document.getElementById(menu);
  if (boolean == true ){
    Menu.classList.add("fadeInDown");
    Menu.classList.remove("fadeOut");
    Menu.style.display = "flex";
  } else {
    Menu.classList.remove("fadeInDown");
    Menu.classList.add("fadeOut");
    setTimeout(function() {
      Menu.style.display = "none";
    }, 1000);
  }
}
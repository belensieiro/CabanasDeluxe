var elementsActivated = [];

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible && !elementsActivated[i]) {
      reveals[i].classList.add("active");
      elementsActivated[i] = true; // Marcar el elemento como activado
    } else if (elementTop >= windowHeight - elementVisible) {
      elementsActivated[i] = false; // Reiniciar el estado si el elemento no es visible
    }
  }
}

window.addEventListener("scroll", reveal);

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
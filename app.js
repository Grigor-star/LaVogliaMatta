var header = document.querySelector(".header");
var main = document.querySelector(".main");

// Function to add a class when scrolling
function handleScroll() {
  var scrollY = window.scrollY;

  // Check if the user has scrolled down (you can customize this condition)
  if (scrollY > 1) {
    header.classList.add("scrolled");
    main.classList.add("main-scrolled");
  } else {
    header.classList.remove("scrolled");
    main.classList.remove("main-scrolled");
  }
}

// Attach the handleScroll function to the scroll event
window.addEventListener("scroll", handleScroll);

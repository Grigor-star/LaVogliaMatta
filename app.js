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

function setActive(element) {
  // Remove the "active" class from all links
  var links = document.querySelectorAll(".navbar a");
  links.forEach(function (link) {
    link.classList.remove("active");
  });

  // Add the "active" class to the clicked link
  element.classList.add("active");
  console.log(window.location.href);
}

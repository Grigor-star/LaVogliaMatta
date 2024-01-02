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
}

const handleHamburgerClick = () => {
  const hamburgerMenu = document.querySelector(".hamburger-nav");
  hamburgerMenu.classList.add("active");
};

const handleHamburgerClose = () => {
  const hamburgerMenu = document.querySelector(".hamburger-nav");
  hamburgerMenu.classList.remove("active");
};

let orderArray = [];

const handleOrderClick = (num) => {
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((element, index) => {
    if (index === num) {
      // Select the p and h3 elements within the div
      const pElement = element.querySelector("p");
      const h3Element = element.querySelector("h3");
      const imgElement = element.querySelector("img");

      // Get the values of the p and h3 elements
      const pValue = pElement.textContent.trim();
      const h3Value = h3Element.textContent.trim();
      const imgSrc = imgElement.src;

      const baseUrl = `https://${window.location.host}/LaVogliaMatta/`;

      // Use replace to remove the base URL
      const trimmedSrc = imgSrc.replace(baseUrl, "");

      // Now, you can use pValue and h3Value as needed
      console.log(element);
      console.log(imgSrc);
      console.log(trimmedSrc);
      console.log("Price:", pValue);
      console.log("Name:", h3Value);
      console.log(window.location.host);
      console.log(window.location.pathname);
    }
  });
};

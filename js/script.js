//Get current year
const currentYear = new Date().getFullYear();
const currentYearElement = document.getElementById("currentYear");

if (currentYearElement) {
  currentYearElement.innerHTML = currentYear;
}

// Add box shadow and to the navbar once scrolled down
const navbar = document.getElementById("navbarWrapper");
const heroSection = document.getElementById("hero");

// Check if the navbar, and hero section exist
if (navbar && heroSection) {
  window.addEventListener("scroll", function () {
    // Get the top offset of the hero section
    const heroTopOffset = heroSection.getBoundingClientRect().top;

    // Check if the top of the page has passed the current hero section
    if (heroTopOffset <= 0) {
      // If passed, change navbar background color, and set box shadow
      navbar.classList.add("navbar-scrolled");
    } else {
      // If not passed, revert to default styles
      navbar.classList.remove("navbar-scrolled");
    }
  });
}

// Function to toggle navbar button classes based on screen width
const btn = document.getElementById("navbarBtn");
// Check if screen size is up to 992px
const mobileScreen = window.matchMedia("(max-width: 992px)");
function toggleButtonClass(e) {
  if (e.matches) {
    btn.classList.remove("btn-primary", "btn-shadow");
    btn.classList.add("btn-link");
  } else {
    btn.classList.remove("btn-link");
    btn.classList.add("btn-primary", "btn-shadow");
  }
}
mobileScreen.addEventListener("change", toggleButtonClass);
toggleButtonClass(mobileScreen);

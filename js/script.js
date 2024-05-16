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
function toggleButtonClass() {
  const btn = document.getElementById("navbarBtn");
  if (window.innerWidth < 992) {
    // Check if screen width is less than 768px (typical mobile screen width)
    btn.classList.remove("btn-primary");
    btn.classList.remove("btn-shadow");
    btn.classList.add("btn-link");
  } else {
    btn.classList.remove("btn-link");
    btn.classList.add("btn-primary");
    btn.classList.add("btn-shadow");
  }
}
toggleButtonClass();

// Listen to window resize
window.addEventListener("resize", toggleButtonClass);

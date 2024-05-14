//Get current year
function updateCurrentYear() {
  const currentYear = new Date().getFullYear();
  const currentYearElement = document.querySelector(".currentYear");

  if (currentYearElement) {
    currentYearElement.innerHTML = currentYear;
  }
}
updateCurrentYear();

// toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", handleStyleSwitcherToggle);

function handleStyleSwitcherToggle() {
  document.querySelector(".style-switcher").classList.toggle("open");
}

// hide style-switcher on scroll
window.addEventListener("scroll", hideStyleSwitcher);

function hideStyleSwitcher() {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
}

//theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

//theme light and dark mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", handleThemeChange);

function handleThemeChange() {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
}

window.addEventListener("load", themeChange);

function themeChange() {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
}

//toggle open/close portfolio description

const descriptionBtns = document.querySelectorAll(
  ".portfolio-description-button"
);

for (let descriptionBtn of descriptionBtns) {
  descriptionBtn.addEventListener("click", descriptionToggler);
  function descriptionToggler() {
    descriptionBtn.nextElementSibling.classList.toggle("active");
  }
}

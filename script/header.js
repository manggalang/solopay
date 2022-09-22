
const header = document.querySelector(".header");
const headerHeight = header.offsetTop;
const navMobile = document.querySelector(".header-navigation");

function headerOnScroll() {
  if (window.pageYOffset > headerHeight) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
}

function hamburgerButton(x) {
  x.classList.toggle("close");
  navMobile.classList.toggle("showNav");
}

window.onscroll = function() {headerOnScroll()};
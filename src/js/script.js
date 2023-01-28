// hamburger menu
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
const links = document.querySelectorAll(".nav-links li")

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open")
  links.forEach((link) => {
    link.classList.toggle("fade")
  })
})

// scroll to top
// const scrollToTop = document.querySelector('.scroll-to-top');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 150) {
//         scrollToTop.classList.add('show');
//     } else {
//         scrollToTop.classList.remove('show');
//     }
// });

// scrollToTop.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     });
// });

// header scroll change
var scrollTrigger = 100

window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].style.backgroundColor = "#0094c6"
    document.getElementById("logo").className = "logo-scroll"
    document.querySelector("body > header > a").className = "en-ar-scroll"
    document.getElementsByTagName("header")[0].style.boxShadow =
      "0px 7px 15px 5px rgb(0 0 0 / 32%)"
  } else {
    document.getElementsByTagName("header")[0].style.backgroundColor =
      "transparent"
    document.getElementById("logo").className = "logo"
    document.querySelector("body > header > a").className = "en-ar"
    document.getElementsByTagName("header")[0].style.boxShadow = "none"
  }

  let section = document.querySelector("#skills")
  let progbars = document.querySelectorAll(".skill")

  if (window.scrollY >= section.offsetTop - 100) {
    progbars.forEach((el) => {
      el.style.width = el.dataset.width
    })
  }
}

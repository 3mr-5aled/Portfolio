"use strict";

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entery) {
    // console.log(entery)
    if (entery.isIntersecting) {
      entery.target.classList.add("show");
    } else {
      entery.target.classList.remove("show");
    }
  });
});
var hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(function (el) {
  return observer.observe(el);
});
"use strict";

// hamburger menu
var hamburger = document.querySelector(".hamburger");
var navLinks = document.querySelector(".nav-links");
var links = document.querySelectorAll(".nav-links li");
hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("open");
  links.forEach(function (link) {
    link.classList.toggle("fade");
  });
});

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
var scrollTrigger = 100;
window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].style.backgroundColor = "#0094c6";
    document.getElementById("logo").className = "logo-scroll";
    document.querySelector("body > header > a").className = "en-ar-scroll";
    document.getElementsByTagName("header")[0].style.boxShadow = "0px 7px 15px 5px rgb(0 0 0 / 32%)";
  } else {
    document.getElementsByTagName("header")[0].style.backgroundColor = "transparent";
    document.getElementById("logo").className = "logo";
    document.querySelector("body > header > a").className = "en-ar";
    document.getElementsByTagName("header")[0].style.boxShadow = "none";
  }
  var section = document.querySelector("#skills");
  var progbars = document.querySelectorAll(".skill");
  if (window.scrollY >= section.offsetTop - 100) {
    progbars.forEach(function (el) {
      el.style.width = el.dataset.width;
    });
  }
};
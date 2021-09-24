// Scroll to top function

let up = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 200 ? up.classList.add("show") : up.classList.remove("show");
};
up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Full Page Tabs

function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Website Preloader

let loader = document.querySelector(".loader-wrapper");

window.addEventListener("load", function fadeOutEffect() {
  var fadeTarget = document.querySelector(".loader-wrapper");
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.5;
    } else {
      clearInterval(fadeEffect);
    }
  }, 300);
  setInterval(function () {
    loader.style.display = "none";
  }, 1500);
});

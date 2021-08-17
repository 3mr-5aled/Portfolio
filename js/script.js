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
// function showPage(page) {
//   document.querySelectorAll("article > div").forEach((div) => {
//     div.style.display = "none";
//   });
//   document.querySelector(`#${page}`).style.display = "grid";
// }
// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelectorAll("#pages").forEach((pages) => {
//     pages.onclick = function () {
//       showPage(this.dataset.page);
//     };
//   });
// });
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

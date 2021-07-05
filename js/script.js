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
function showPage(page) {
  document.querySelectorAll("article > div").forEach((div) => {
    div.style.display = "none";
  });
  document.querySelector(`#${page}`).style.display = "grid";
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("#pages").forEach((pages) => {
    pages.onclick = function () {
      showPage(this.dataset.page);
    };
  });
});

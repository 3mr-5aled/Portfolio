//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function myFunction(x) {
  x.classList.toggle("change");
}

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
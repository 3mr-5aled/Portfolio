const observer = new IntersectionObserver((entries) => {
  entries.forEach((entery) => {
    console.log(entery)
    if (entery.isIntersecting) {
      entery.target.classList.add("show")
    } else {
      entery.target.classList.remove("show")
    }
  })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))

var elements = document.querySelectorAll(".animation")

elements.forEach(element => {
    if (element.getBoundingClientRect().top < 700) {
        element.classList.add('show')
    } else {
        element.classList.remove('show')
    }
})

window.addEventListener("scroll", () => {
  elements.forEach(element => {
        if (element.getBoundingClientRect().top < 700) {
            element.classList.add('show')
        } else {
            element.classList.remove('show')
        }
    })
})
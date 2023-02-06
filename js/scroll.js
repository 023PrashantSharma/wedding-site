const observer = new IntersectionObserver((enteries) => {
    enteries.forEach(entery => {
        if (entery.isIntersecting) {
            entery.target.classList.add('show-scroll')
        } else {
            entery.target.classList.remove("show-scroll")
        }
    });
})
const hiddenElement = document.querySelectorAll(".hidden-scroll")
hiddenElement.forEach((el) => {
    observer.observe(el)
})
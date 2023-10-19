document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0
    const slides = document.querySelectorAll(".slide")
    const totalSlides = slides.length
    const slideInterval = 4000

    function showSlide(n) {
        slides[currentSlide].style.display = "none"
        currentSlide = (n + totalSlides) % totalSlides
        slides[currentSlide].style.display = "block"
    }

    function autoSlide() {
        showSlide(currentSlide + 1)
    }

    showSlide(currentSlide)

    setInterval(autoSlide, slideInterval)
})


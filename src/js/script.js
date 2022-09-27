// Hamburger Menu
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', function() {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})


// Carousel
let carousel = document.querySelectorAll(".carousel-item");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let counter = 0;

prev.addEventListener("click", function() {
    counter--;
    carouselMove()
});
next.addEventListener("click", function() {
    counter++;
    carouselMove()
});

function carouselMove() {
    if (counter === 0) {
        prev.style.display = "none"
    } else if (counter < carousel.length - 1) {
        prev.style.display = "block"
        next.style.display = "block"
    } else {
        next.style.display = "none"
    }

    carousel.forEach(function(item) {
        item.style.transform = `translateX(-${counter * 55}%)`
    })
}
prev.style.display = "none"
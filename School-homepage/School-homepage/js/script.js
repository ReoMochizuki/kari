const sliderTrack = document.getElementById("sliderTrack");

const totalSlides = 3;
const slideWidth = 800;

let currentIndex = 0;

function moveSlide() {
sliderTrack.style.transform =
`translateX(-${currentIndex * slideWidth}px)`;
}

document.getElementById("next").addEventListener("click", () => {

currentIndex++;

if (currentIndex >= totalSlides) {
currentIndex = 0;
}

moveSlide();
});

document.getElementById("prev").addEventListener("click", () => {

currentIndex--;

if (currentIndex < 0) {
currentIndex = totalSlides - 1;
}

moveSlide();
});

setInterval(() => {

currentIndex++;

if (currentIndex >= totalSlides) {
currentIndex = 0;
}

moveSlide();

}, 3000);
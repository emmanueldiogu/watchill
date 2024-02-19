import "./scss/style.scss";
/**
 ********************************
 *********** CAROUSEL ***********
 ********************************
 */

// SLIDES CONTAINER (<ul class="hero__slides" data-slides>)
const slider = document.querySelector("[data-slider]");

// Create array of the children slide
const slides = [...slider.children];

// Dots array
const dotsNav = document.querySelector("[data-slide-dots]");
const dots = [...dotsNav.children];

// Stack slide next to each other
slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
});

// find the current slide index and dot index
let currentSlide = document.querySelector("[data-current-slide]");
let currentSlideIndex = slides.indexOf(currentSlide);
let currentDot = document.querySelector("[data-dot-active]");
let currentDotIndex = dots.indexOf(currentDot);

// Change position on click of button
const prevButton = document.querySelector('[data-slide-button="prev"]');
prevButton.addEventListener("click", () => {
    if (currentSlideIndex === 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex--;
    }

    updateCurrentSlide();
    updateActiveDot();
});

const nextButton = document.querySelector('[data-slide-button="next"]');
nextButton.addEventListener("click", () => {
    if (currentSlideIndex === slides.length - 1) {
        currentSlideIndex = 0;
    } else {
        currentSlideIndex++;
    }

    updateCurrentSlide();
    updateActiveDot();
});

// Function to update the current slide
function updateCurrentSlide() {
    currentSlide.removeAttribute("data-current-slide");
    currentSlide = slides[currentSlideIndex];
    currentSlide.setAttribute("data-current-slide", "true");

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlideIndex) * 100}%)`;
    });
}

// Function to update the active dot
function updateActiveDot() {
    currentDot.removeAttribute("data-dot-active");
    currentDot = dots[currentSlideIndex];
    currentDot.setAttribute("data-dot-active", "true");
}

// Add active dataset to the active dot and when I click any button, go to the corresponding slide index
dotsNav.addEventListener("click", (e) => {
    const targetDot = e.target;

    if (!targetDot.classList.contains("dot")) return;
    const targetDotIndex = dots.indexOf(targetDot);
    console.log("Clicked dot index:", targetDotIndex);

    currentSlideIndex = targetDotIndex;

    updateCurrentSlide();
    updateActiveDot();
});

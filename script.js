document.addEventListener("DOMContentLoaded", function () {
    const slidesWrapper = document.querySelector('.slides-wrapper');
    const slides = slidesWrapper.querySelectorAll('.slide');
    const nextButtons = slidesWrapper.querySelectorAll('.next-button');
    const backButtons = slidesWrapper.querySelectorAll('.back-button');
    let currentIndex = 0;

    function showSlide(index) {
        const slideWidth = slides[0].offsetWidth;
        slidesWrapper.style.transform = `translateX(-${index * 100}vw)`;
    }

    showSlide(currentIndex);

    function slideNext() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            showSlide(currentIndex);
        }
    }

    function slideBack() {
        if (currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
        }
    }

    nextButtons.forEach((button) => {
        button.addEventListener("click", slideNext);
    });

    backButtons.forEach((button) => {
        button.addEventListener("click", slideBack);
    });

    const slide2Choices = document.querySelectorAll(".slide2Choice");
    let activeChoice = null;

    slide2Choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            if (activeChoice) {
                activeChoice.style.opacity = 0.5;
            }

            choice.style.opacity = 1;

            // Enable the next-button for the current slide
            nextButtons[currentIndex].removeAttribute("disabled");
            nextButtons[currentIndex].style.opacity = 1; // Set opacity to 1 when enabled

            activeChoice = choice;
        });
    });

    // Initially, disable the next-button for all slides and set opacity to 0.4
    nextButtons.forEach((button) => {
        button.setAttribute("disabled", "true");
        button.style.opacity = 0.4;
    });

    // Enable the next-button for the initial slide
    nextButtons[currentIndex].removeAttribute("disabled");
    nextButtons[currentIndex].style.opacity = 1;

    const slide6Stars = document.querySelectorAll(".slide6 .star");
    let activeStar = null;

    slide6Stars.forEach((star, index) => {
        star.addEventListener("click", () => {
            for (let i = 0; i <= index; i++) {
                slide6Stars[i].style.opacity = 1;
            }

            for (let i = index + 1; i < slide6Stars.length; i++) {
                slide6Stars[i].style.opacity = 0.4;
            }

            // Enable the next-button for slide6 when a star is clicked
            nextButtons[5].removeAttribute("disabled");
            nextButtons[5].style.opacity = 1; // Set opacity to 1 when enabled
        });
    });

    // Initially, disable the next-button for slide6 and set opacity to 0.4
    nextButtons[5].setAttribute("disabled", "true");
    nextButtons[5].style.opacity = 0.4;

    const slide7Inputs = document.querySelectorAll(".slide7 input");

    slide7Inputs.forEach((input) => {
        input.addEventListener("input", checkSlide7Inputs);
    });

    function checkSlide7Inputs() {
        const slide7InputsArray = Array.from(slide7Inputs);
        const allInputsFilled = slide7InputsArray.every((input) => input.value.trim() !== "");

        if (allInputsFilled) {
            // Enable the next-button for slide7 when all inputs are filled
            nextButtons[6].removeAttribute("disabled");
            nextButtons[6].style.opacity = 1;
        } else {
            // Disable the next-button for slide7 if any input is empty
            nextButtons[6].setAttribute("disabled", "true");
            nextButtons[6].style.opacity = 0.4;
        }
    }

    // Initially, disable the next-button for slide7
    nextButtons[6].setAttribute("disabled", "true");
    nextButtons[6].style.opacity = 0.4;
});

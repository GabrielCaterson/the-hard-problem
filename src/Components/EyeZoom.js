// JavaScript code
// Get the eye and eye-container elements
let eye = document.querySelector(".eye");
let eyeContainer = document.querySelector(".eye-container");

// Get the height of the eye-container element
let eyeContainerHeight = eyeContainer.offsetHeight;

// Add a scroll event listener to the eye-container element
eyeContainer.addEventListener("scroll", function() {
    // Get the current scroll position of the eye-container element
    let scrollTop = eyeContainer.scrollTop;

    // Calculate the percentage of the scroll position relative to the height of the eye-container element
    let percentage = scrollTop / eyeContainerHeight;

    // Set the animation-play-state property of the eye element to running
    eye.style.animationPlayState = "running";

    // Set the animation-delay property of the eye element to a negative value based on the percentage
    // This will make the animation start from a certain point depending on the scroll position
    eye.style.animationDelay = -percentage + "s";
});
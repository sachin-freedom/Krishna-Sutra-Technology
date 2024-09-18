const sliders = document.querySelectorAll(".slider");
const prevButtons = document.querySelectorAll(".previous");
const nextButtons = document.querySelectorAll(".next");

// Iterate over the sliders and their corresponding buttons
sliders.forEach((slider, index) => {
  const prevButton = prevButtons[index];
  const nextButton = nextButtons[index];

  // Scroll the slider to the left
  prevButton.addEventListener("click", () => {
    slider.scrollBy({
      left: -slider.clientWidth,
      behavior: "smooth",
    });
  });

  // Scroll the slider to the right
  nextButton.addEventListener("click", () => {
    slider.scrollBy({
      left: slider.clientWidth,
      behavior: "smooth",
    });
  });
});

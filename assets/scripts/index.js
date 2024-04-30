"use strict";

// ! Mobile Navigation Bar

const menuToggleBtn = document.querySelector(".mobile-nav-bar-toggle");
const mobileNavBarMenu = document.querySelector(".mobile-nav-bar-menu");

menuToggleBtn.addEventListener("click", () => {
    mobileNavBarMenu.classList.toggle("show");
});

// ! Frequently Asked Questions

const questionsIcon = document.querySelectorAll(".questions-icon");

questionsIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    // Traverse up the DOM to find the parent .question-card element
    const questionCard = icon.closest(".question-card");

    // Find the .question-card-answer-text element within the specific question card
    const answerText = questionCard.querySelector(".question-card-answer-text");

    // Toggle the class for the answer text
    answerText.classList.toggle("answer__displayed");

    // Toggle between the two icons based on the presence of "answer__displayed" class
    if (answerText.classList.contains("answer__displayed")) {
      icon.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
    } else {
      icon.innerHTML = '<i class="fa-solid fa-circle-plus"></i>';
    }
  });
});



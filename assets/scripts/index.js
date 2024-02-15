"use strict";

const questionsIcon = document.querySelectorAll(".questions-icon");

questionsIcon.forEach(icon => {
    icon.addEventListener("click", () => {

        // Traverse up the DOM to find the parent .question-card element
        const questionCard = icon.closest(".question-card");

        // Find the .question-card-answer-text element within the specific question card
        const answerText = questionCard.querySelector(".question-card-answer-text");

        // Toggle the class for the answer text
        answerText.classList.toggle("answer__displayed");
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
      const answer = question.nextElementSibling;
      answer.style.display = "none"; // Hide answers initially

      question.addEventListener("click", () => {
          // Toggle visibility
          answer.style.display = answer.style.display === "block" ? "none" : "block";
      });
  });
});

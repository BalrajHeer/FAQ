document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            const answer = question.nextElementSibling;
            answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        });
    });
});

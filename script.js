const quizButtons = document.querySelectorAll('.test-button')

quizButtons.forEach(function(button){
    button.addEventListener('click', function() {
        const answer = button.nextElementSibling
        answer.textContent = button.dataset.answer
        answer.classList.toggle('show-answer')
    })
})

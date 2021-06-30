// First solution
//      using selectors inside the element

// Seelect articles
const questions = document.querySelectorAll('.question');

questions.forEach( question => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', () => {
        questions.forEach( item => {
            if(item !== question) {
                item.classList.remove('show-text');
            }
        })
        question.classList.toggle('show-text');
    })
})


// Second solution
//      traversing the dom

/* const buttons = document.querySelectorAll('.question-btn');

buttons.forEach( button => {
    button.addEventListener('click', (event) => {
        const question = event.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
}); */
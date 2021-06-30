const quizData = [
    {
        question: 'How old is Andrew?',
        a: 28,
        b: 35,
        c: 46,
        d: 41,
        correct: 'd'
    },
    {
        question: 'What was the most used programming language in 2020?',
        a: 'Java',
        b: 'C++',
        c: 'Python',
        d: 'Javascript',
        correct: 'a'
    },
    {
        question: 'Who is the actual President of the U.S.?',
        a: 'Joe Biden',
        b: 'Donald Trump',
        c: 'Bill Gates',
        d: 'Elon Musk',
        correct: 'a'
    },
    {
        question: 'What does HTML mean?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'High Text Marker Language',
        d: 'Hosting Terminal Marker Line',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '1995',
        b: '1996',
        c: '1994',
        d: 'none of them',
        correct: 'd'
    }
];

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const quiz = document.getElementById('quiz');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerHTML = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerElements.forEach(answerElement => {
        if (answerElement.checked) {
            answer = answerElement.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerElements.forEach(answerElement => {
        answerElement.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {

        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Your correct answers are ${score} out of ${quizData.length}</h2>
            <button onclick="location.reload()">Restart</button>`
        }
    }
})

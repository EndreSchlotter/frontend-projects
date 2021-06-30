function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parentDiv = arrow.parentElement;
            const nextForm = parentDiv.nextElementSibling;

            //Check for validation
            if(input.type === 'text' && validateUser(input)) {
                nextSlide(parentDiv, nextForm);
            } else if (input.type === 'email' && validateEmail(input)) {
                nextSlide(parentDiv, nextForm);
            } else if (input.type === 'password' && validateUser(input)) {
                nextSlide(parentDiv, nextForm);
            } else {
                parentDiv.style.animation = 'shake 0.5s ease';
            }
            //get rif of animation
            parentDiv.addEventListener('animationend', () => {
                parentDiv.style.animation = '';
            })
        });
    });
}

function validateUser(user){
    if(user.value.length < 6) {
        console.log('Not enough characters!');
        error('rgb(189,87,87)');
    } else {
        error('rgb(87,189,130)');
        return true;
    }
}


function validateEmail(email){
    const validation = /^[^\s@]+@[^s@]+\.[^\s@]+$/;
    if(validation.test(email.value)) {
        error('rgb(87,189,130)');
        return true;
    } else {
        error('rgb(189,87,87)');
    }
}

function nextSlide(parentDiv, nextForm) {
    parentDiv.classList.add('inactive');
    parentDiv.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color) {
    document.body.style.backgroundColor = color;
}

animatedForm();
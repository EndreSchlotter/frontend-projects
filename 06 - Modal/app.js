//select modal-btn, modal-overlay, close-btn

let modalBtn = document.querySelector('.modal-btn');
let modal = document.querySelector('.modal-overlay');
let modalCloseBtn = document.querySelector('.close-btn');

// listen for click events on modal-btn
// when user clicks close-btn add .OPEN-MODAL to modal overlay

modalBtn.addEventListener('click', () => {
    modal.classList.add('open-modal');
})

//listen for click events on close-btn
// when user clicks close-btn remove .OPEN-MODAL from modal overlay

modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('open-modal');
})

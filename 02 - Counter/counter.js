let counter = 0;

const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach( button => {
    button.addEventListener('click', (e) => {
       const buttonClass = e.currentTarget.classList;
       if(buttonClass.contains('decrease')){
           counter--
       } else if (buttonClass.contains('increase')) {
           counter++
       } else {
           counter = 0;
       }
       value.innerHTML = counter;
    })
})
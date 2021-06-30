const hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

let button = document.querySelector('.btn');
let container = document.querySelector('.container');
let text = document.querySelector('.chosen-color');
text.innerHTML = '';


button.addEventListener('click', () => {
    randomHexColor = '#';
    for(let i = 0; i < 6; i++) {
        randomHexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    container.style.backgroundColor = randomHexColor;
    text.innerHTML = randomHexColor;
})
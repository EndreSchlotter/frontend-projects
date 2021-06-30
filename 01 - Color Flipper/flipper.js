const colors = ['red', 'lightskyblue', 'lightseagreen', '#f46564'];

let button = document.querySelector('.btn');
let container = document.querySelector('.container');
let text = document.querySelector('.chosen-color');
text.innerHTML = '';

button.addEventListener('click', () => {
    let randomColor = colors[Math.floor(Math.random()*colors.length)]
    container.style.backgroundColor = randomColor;
    text.innerHTML = randomColor;
})
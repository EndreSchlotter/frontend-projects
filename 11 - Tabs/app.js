const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (event) => {
    const dataId = event.target.dataset.id;
    if(dataId) {
        //remove active from other buttons than add active for actual button
        btns.forEach( btn => {
            btn.classList.remove('active');
            event.target.classList.add('active');
        });
        // hide other articles
        articles.forEach( article => {
            article.classList.remove('active');
        });
        const element = document.getElementById(dataId);
        element.classList.add('active');
    }
})
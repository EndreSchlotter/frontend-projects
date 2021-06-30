// MDN
// The DOMContentLoaded event fires when the initial HTML doc
// has been completely loaded and parsed, without waiting for
// stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, includng
// all dependent resources such as stylesheets and images.

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', (event) => {
    if(!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        video.pause();
    } else {
        btn.classList.remove('slide');
        video.play();
    }
})

// preloader

const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
})

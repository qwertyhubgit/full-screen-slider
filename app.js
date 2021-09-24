const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const container = document.querySelector('.container');

const slidesCount = mainSlide.querySelectorAll('div').length;
let slideIndex = 0;


sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

function changeSlide(direction) {
    if (direction === 'up') {
        slideIndex++
        if (slideIndex === slidesCount) {
            slideIndex = 0
        }
    } else if (direction === 'down') {
        slideIndex--
        if (slideIndex < 0) {
            slideIndex = slidesCount - 1
        }
    }
    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${slideIndex * height}px)`
    sidebar.style.transform = `translateY(${slideIndex * height}px)`
};

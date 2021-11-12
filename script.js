const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const imgs = document.getElementById('imgs');

const img = document.querySelectorAll('#imgs img')

console.log(img);

let idx = 0;

let interval = setInterval(run, 10000)

function run() {
    idx++ 
    changeImage();
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 1000}px)`
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 10000)
}

nextBtn.addEventListener('click', () => {
    idx++
    changeImage();
    resetInterval()
});

prevBtn.addEventListener('click', () => {
    idx--
    changeImage();
    resetInterval()
});
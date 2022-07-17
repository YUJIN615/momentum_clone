const images = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];
const randomBg = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement('img');
const main = document.querySelector('main');

main.style.background = `url(./img/${randomBg}) no-repeat center / cover`

// bgImage.src = `../img/${randomBg}`;

// document.body.appendChild(bgImage);
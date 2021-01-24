const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

const particlesOnScreen = 245;
let w;
let h;
const particlesArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
w = window.innerWidth;
h = window.innerHeight;

function random(min, max) {
  return min + Math.random() * (max - min + 1);
}

function clientResize(ev) {
  w = canvas.width;
  h = canvas.height;
}

window.addEventListener('resize', clientResize);

// createSnowFlakes();
function createSnowFlakes() {
  for (let i = 0; i < particlesOnScreen; i++) {
    particlesArray.push({
      x: Math.random() * w,
      y: Math.random() * h,
      opacity: Math.random(),
      speedX: random(-1, 1),
      speedY: random(1, 2),
      radius: random(0.5, 4.2),
    });
  }
}

function drawSnowFlakes() {
  for (let i = 0; i < particlesArray.length; i++) {
    const gradient = ctx.createRadialGradient(
      particlesArray[i].x,
      particlesArray[i].y,
      0,
      particlesArray[i].x,
      particlesArray[i].y,
      particlesArray[i].radius,
    );

    // gradient.addColorStop(0, `rgba(30, 144, 255, ${particlesArray[i].opacity})` );
    // gradient.addColorStop(0.8, `rgba(100, 149, 237, ${particlesArray[i].opacity})` );
    // gradient.addColorStop(1, `rgba(65, 105, 225, ${particlesArray[i].opacity})` );

    gradient.addColorStop(0, `rgba(255, 255, 255,${particlesArray[i].opacity})`); // white
    gradient.addColorStop(0.8, `rgba(210, 236, 242,${particlesArray[i].opacity})`); // bluish
    gradient.addColorStop(1, `rgba(237, 247, 249,${particlesArray[i].opacity})`);

    ctx.beginPath();
    ctx.arc(
      particlesArray[i].x,
      particlesArray[i].y,
      particlesArray[i].radius,
      0,
      Math.PI * 2,
      false,
    );

    ctx.fillStyle = gradient;
    ctx.fill();
  }
}

function moveSnowFlakes() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].x += particlesArray[i].speedX;
    particlesArray[i].y += particlesArray[i].speedY;

    if (particlesArray[i].y > h) {
      particlesArray[i].x = Math.random() * w * 1.5;
      particlesArray[i].y = -50;
    }
  }
}

function updateSnowFall() {
  ctx.clearRect(0, 0, w, h);
  drawSnowFlakes();
  moveSnowFlakes();
}

export { createSnowFlakes, updateSnowFall };

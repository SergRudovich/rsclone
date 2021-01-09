/* eslint-disable linebreak-style */

import Player from './player';
import Obstacle from './obstacle ';
import Text from './text';
import RandomRange from './random-range';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// Variables
let score;
let scoreText;
let highscore;
let highscoreText;
let player;
let gravity;
let obstacles = [];
let gameSpeed;
const keys = {};

// Event Listeners
document.addEventListener('keydown', (evt) => {
  keys[evt.code] = true;
});
document.addEventListener('keyup', (evt) => {
  keys[evt.code] = false;
});

function SpawnObstacle() {
  const size = RandomRange(20, 70);
  const type = RandomRange(0, 1);
  const obstacle = new Obstacle(canvas.width + size, canvas.height - size, size, size, '#2484E4', ctx, gameSpeed);

  if (type === 1) {
    obstacle.y -= player.originalHeight - 10;
  }
  obstacles.push(obstacle);
}

const initialSpawnTimer = 200;
let spawnTimer = initialSpawnTimer;
function Update() {
  requestAnimationFrame(Update);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  spawnTimer -= 1;
  if (spawnTimer <= 0) {
    SpawnObstacle();
    spawnTimer = initialSpawnTimer - gameSpeed * 8;

    if (spawnTimer < 60) {
      spawnTimer = 60;
    }
  }

  // Spawn Enemies
  for (let i = 0; i < obstacles.length; i += 1) {
    const o = obstacles[i];

    if (o.x + o.w < 0) {
      obstacles.splice(i, 1);
    }

    if (
      player.x < o.x + o.w
        && player.x + player.w > o.x
        && player.y < o.y + o.h
        && player.y + player.h > o.y
    ) {
      obstacles = [];
      score = 0;
      spawnTimer = initialSpawnTimer;
      gameSpeed = 3;
      window.localStorage.setItem('highscore', highscore);
    }

    o.Update();
  }

  player.Animate();

  score += 1;
  scoreText.t = `Score: ${score}`;
  scoreText.Draw();

  if (score > highscore) {
    highscore = score;
    highscoreText.t = `Highscore: ${highscore}`;
  }

  highscoreText.Draw();

  gameSpeed += 0.003;
}

function Start() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.font = '20px sans-serif';

  gameSpeed = 3;
  gravity = 1;

  score = 0;
  highscore = 0;
  if (localStorage.getItem('highscore')) {
    highscore = localStorage.getItem('highscore');
  }

  player = new Player(25, 0, 50, 50, '#FF5858', canvas, ctx, keys, gravity);

  scoreText = new Text(`Score: ${score}`, 25, 25, 'left', '#212121', '20', ctx);
  highscoreText = new Text(`Highscore: ${highscore}`, canvas.width - 25, 25, 'right', '#212121', '20', ctx);

  requestAnimationFrame(Update);
}

Start();

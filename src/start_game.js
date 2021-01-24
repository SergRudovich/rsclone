import Hero from './hero';
import { Text } from './text';
import { SpawnObstacle } from './spawn_obstacle';
import { canvas, ctx } from './index';
import { createSnowFlakes, updateSnowFall } from './snow_flakes';
import GameSound from './game-sound';
import { getCoin, coinsCounter } from './get_coin';
import getClouds from './get_clouds';
import { lang } from './lang';
import getPlatform from './get_platform';

let gravity;
let score;
let highScore;
let scoreText;
let hightScoreText;

let gameSpeed;
let player;
let obstacles = [];
const coins = [];

const keys = {};
let coinImage;
// const jumpTrue = false;
const playSound = new GameSound();

function start() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 205;

  document.addEventListener('keydown', (e) => {
    keys[e.code] = true;
  });

  document.addEventListener('keyup', (e) => {
    keys[e.code] = false;
  });

  ctx.font = '20px sans-serif';

  gameSpeed = 3;
  // gravity = 1;

  score = 0;
  highScore = 0;

  if (localStorage.getItem('highscore')) {
    highScore = localStorage.getItem('highscore');
  }

  coinImage = new Image();
  coinImage.src = localStorage.getItem('SpriteImage');

  player = new Hero({
    image: coinImage,
    width: 600,
    height: 100,
    numberOfFrames: 6,
    ticksPerFrame: 4,
    x: 50,
    y: 50,
    test: canvas.height,
  });

  // window.onload = function () {
  player.start();
  // };

  scoreText = new Text(
    `${lang[localStorage.getItem('langSelected')].scoreTxt} ${score}`, 25, 25, 'left', '#212121', '20',
  );
  hightScoreText = new Text(
    `${lang[localStorage.getItem('langSelected')].bestScoreTxt} ${highScore}`, canvas.width - 25, 25, 'right', '#212121', '20',
  );

  createSnowFlakes();
  // playSound.playFon();
  requestAnimationFrame(Update);
}

const initialSpawnTimer = 200;
let spawnTimer = initialSpawnTimer;

function Update() {
  requestAnimationFrame(Update);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // выключить фоновую музыку
  if (keys.KeyQ) {
    // window.gameState.isFonSound = false;
    playSound.stopFon();
  }

  // включить фоновую музыку
  if (keys.KeyA) {
    // window.gameState.isFonSound = true;
    playSound.playFon();
  }

  // spawn obstacles
  spawnTimer -= 1;
  if (spawnTimer <= 0) {
    SpawnObstacle();
    spawnTimer = initialSpawnTimer - gameSpeed * 8;

    if (spawnTimer < 60) {
      spawnTimer = 60;
    }
  }

  updateSnowFall();

  // spawn enemies
  for (let i = 0; i < obstacles.length; i += 1) {
    const o = obstacles[i];

    if (o.x + o.width < 0) {
      obstacles.splice(i, 1);
    }

    // перезагрузка игры при столкновении
    if (
      player.dx < o.x + o.width
      && player.dx + (player.width / 10) - 10 > o.x
      && player.y < o.y + o.height
      && player.y + player.height >= o.y
    ) {
      // playSound.playDead();
      obstacles = [];
      gameSpeed = 3;
      score = 0;
      coinsCounter.counter = 0;
      spawnTimer = initialSpawnTimer;
      window.localStorage.setItem('highscore', highScore);
    }
    o.Update();
  }

  score += 1;
  scoreText.t = `${lang[localStorage.getItem('langSelected')].scoreTxt} ${score}`;

  scoreText.Draw();

  if (score > highScore) {
    highScore = score;
    hightScoreText.t = `${lang[localStorage.getItem('langSelected')].bestScoreTxt} ${highScore}`;
  }

  gameSpeed += 0.003;
  hightScoreText.Draw();

  // spawn platform
  getPlatform();

  // spawn coin
  getCoin();

  // spawn clouds
  getClouds();
}

export {
  start, gameSpeed, obstacles, keys, score, player, coins,
};

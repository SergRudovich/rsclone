import Hero from './hero';
import Text from './text';
import { SpawnObstacle } from './spawn_obstacle';
import { canvas, ctx } from './index';
import { createSnowFlakes, updateSnowFall } from './snow_flakes';
import GameSound from './game-sound';
import { getCoin, coinsCounter } from './get_coin';
import getClouds from './get_clouds';
import { lang } from './lang';
import getPlatform from './get_platform';
import main from './pages/main';
import { dead } from './pages/dead';
import gameOver from './pages/game-over';

// let lives;
let score;
let highScore;
let highCoins;
let scoreText;
let hightScoreText;
let hightCoinsText;
let livesText;
let gameSpeed;
let player;
let obstacles = [];
const coins = [];

const keys = {};
let coinImage;
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
  // lives = 3;
  score = 0;
  highScore = 0;
  highCoins = 0;

  if (localStorage.getItem('highscore')) {
    highScore = localStorage.getItem('highscore');
  }
  if (localStorage.getItem('highCoins')) {
    highCoins = localStorage.getItem('highCoins');
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

  player.start();

  scoreText = new Text(
    `${lang[localStorage.getItem('langSelected')].scoreTxt} ${score}`, 25, 25, 'left', '#212121', '20',
  );
  livesText = new Text(
    `${lang[localStorage.getItem('langSelected')].livesTxt} ${localStorage.getItem('lives')}`, 500, 25, 'right', '#212121', '20',
  );
  hightScoreText = new Text(
    `${lang[localStorage.getItem('langSelected')].bestScoreTxt} ${highScore}`, canvas.width - 150, 25, 'right', '#212121', '20',
  );
  hightCoinsText = new Text(
    `${lang[localStorage.getItem('langSelected')].coinsTxt} ${highCoins}`, canvas.width - 25, 25, 'right', '#212121', '20',
  );
  createSnowFlakes();
  // playSound.playFon();
  requestAnimationFrame(Update);
}

const initialSpawnTimer = 200;
let spawnTimer = initialSpawnTimer;

function Update() {
  if (localStorage.getItem('animate') === 'true') requestAnimationFrame(Update);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // выключить фоновую музыку
  if (keys.KeyQ) {
    playSound.stopFon();
  }

  // включить фоновую музыку
  if (keys.KeyA) {
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
      playSound.playDead();
      obstacles = [];
      gameSpeed = 3;
      localStorage.setItem('lives', localStorage.getItem('lives') - 1);
      if (localStorage.getItem('lives') == 0) {
        gameOver();
      } else {
        // dead.show();
      }
      livesText.t = `${lang[localStorage.getItem('langSelected')].livesTxt} ${localStorage.getItem('lives')}`;
      score = 0;
      player.dx = 0;
      player.y = 0;
      coinsCounter.counter = 0;
      spawnTimer = initialSpawnTimer;
      window.localStorage.setItem('highscore', highScore);
      window.localStorage.setItem('highCoins', highCoins);
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

  if (coinsCounter.counter > highCoins) {
    highCoins = coinsCounter.counter;
    hightCoinsText.t = `${lang[localStorage.getItem('langSelected')].coinsTxt} ${highCoins}`;
  }

  gameSpeed += 0.003;
  hightScoreText.Draw();
  hightCoinsText.Draw();
  livesText.Draw();

  // spawn platform
  getPlatform();

  // spawn coin
  getCoin();

  // spawn clouds
  getClouds();
}

export {
  start, Update, gameSpeed, obstacles, keys, score, player, coins,
};

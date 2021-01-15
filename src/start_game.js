import Hero from './hero';
import { Text } from './text';
import { SpawnObstacle } from './spawn_obstacle';
import {canvas, ctx} from './index';
import { createSnowFlakes, updateSnowFall } from './snow_flakes';
import GameSound from './game-sound';

import getPlatform from './get_platform';

let gravity;
let score;
let highScore;
let scoreText;
let hightScoreText;

let gameSpeed;
let player;
let obstacles = [];
let bigPlatform;
let mediumPlatform;

let keys = {};
let coinImage;
let jumpTrue = false;

// const playSound = new GameSound();

function start () {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 205;

  document.addEventListener('keydown', (e) => {
    keys[e.code] = true;
  });

  document.addEventListener('keyup', (e) => {
    keys[e.code] = false;
  });


  ctx.font = "20px sans-serif";

  gameSpeed = 3;
  gravity = 1;

  score = 0;
  highScore = 0;

  if(localStorage.getItem('highscore')){
    highScore = localStorage.getItem('highscore');
  }

  coinImage = new Image();
  coinImage.src = 'images/sprite2.png';

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

  window.onload = function () {
    player.start();
  }

  scoreText = new Text(
    `Score: ${score}`, 25, 25, "left", "#212121", "20"
  );
  hightScoreText = new Text(
    `Highscore: ${highScore}`, canvas.width - 25, 25, "right", "#212121", "20"
  );

  createSnowFlakes();
  // playSound.playFon();

  requestAnimationFrame(Update);
}

let initialSpawnTimer = 200;
let spawnTimer = initialSpawnTimer;

function Update () {
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
  spawnTimer--;
  if (spawnTimer <= 0) {
    SpawnObstacle();
    spawnTimer = initialSpawnTimer - gameSpeed * 8;

    if (spawnTimer < 60) {
      spawnTimer = 60;
    }
  }

  updateSnowFall();

  // spawn enemies
  for (let i = 0; i < obstacles.length; i++){
    let o = obstacles[i];

    if (o.x + o.width < 0){
      obstacles.splice(i, 1);
    }


    // перезагрузка игры при столкновении
    if (
      player.x < o.x + o.width &&
      player.x + (player.width / 10) - 10 > o.x &&
      player.y < o.y + o.height &&
      player.y + player.height >= o.y
    ) {
      // playSound.playDead();
      obstacles = [];
      gameSpeed = 3;
      score = 0;
      spawnTimer = initialSpawnTimer;
      window.localStorage.setItem('highscore', highScore);
    }
    o.Update();
  }

  score++;
  scoreText.t = "Score: " + score;


  scoreText.Draw();

  if (score > highScore) {
    highScore = score;
    hightScoreText.t = `Highscore: ${highScore}`;
  }

  gameSpeed += 0.003;
  hightScoreText.Draw();

  // spawn platform
  getPlatform();
}

export {start, gameSpeed, obstacles, keys, score, player};

import { Player } from './player';
import  PlayerTwo  from './playerTwo';
import { Text } from './text';
import { SpawnObstacle } from './spawn_obstacle';
import {canvas, ctx} from './index';

let gravity;
let score;
let highScore;
let scoreText;
let hightScoreText;

let gameSpeed;
let player;
let obstacles = [];

let keys = {};
let coinImage;
let jumpTrue = false;


function start () {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  document.addEventListener('keydown', (e) => {
    keys[e.code] = true;

    // getJumpImageOne('images/robot-jump.png');
  });

  document.addEventListener('keyup', (e) => {
    keys[e.code] = false;

    // getJumpImageOne('images/robot-jump-two.png');
  });

  // function getJumpImageOne(src){
  //
  //   if(keys['Space'] == false && jumpTrue == false){
  //
  //     console.log(1)
  //     coinImage.src = src;
  //     player = new PlayerTwo({
  //       ctx: canvas.getContext('2d'),
  //       image: coinImage,
  //       width: 65,
  //       height: 100,
  //       numberOfFrames: 1,
  //       ticksPerFrame: 1,
  //       dy: canvas.height - 100,
  //     });
  //
  //     jumpTrue = true;
  //   }
  // }



  ctx.font = "20px sans-serif";

  gameSpeed = 3;
  gravity = 1;

  score = 0;
  highScore = 0;

  if(localStorage.getItem('highscore')){
    highScore = localStorage.getItem('highscore');
  }

  // player = new Player(25, 0, 50, 50, '#ff5858');
  // player = new P layerTwo(25, 0, 50, 50);

  coinImage = new Image();
  coinImage.src = 'images/robot.png';

  player = new PlayerTwo({
    ctx: canvas.getContext('2d'),
    image: coinImage,
    width: 500,
    height: 100,
    numberOfFrames: 6,
    ticksPerFrame: 4,
    x: 50,
    y: 50,
  });

  coinImage.onload = function () {
    player.start();
    console.log(player)
  }


  scoreText = new Text(
    `Score: ${score}`, 25, 25, "left", "#212121", "20"
  );
  hightScoreText = new Text(
    `Highscore: ${highScore}`, canvas.width - 25, 25, "right", "#212121", "20"
  );
  requestAnimationFrame(Update);
}

let initialSpawnTimer = 200;
let spawnTimer = initialSpawnTimer;

function Update () {
  requestAnimationFrame(Update);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  spawnTimer--;
  if (spawnTimer <= 0) {
    SpawnObstacle();
    spawnTimer = initialSpawnTimer - gameSpeed * 8;

    if (spawnTimer < 60) {
      spawnTimer = 60;
    }
  }

  // spawn enemies

  for (let i = 0; i < obstacles.length; i++){
    let o = obstacles[i];

    // console.log(player.x);
    // console.log('o.x: ', o.x);
    // console.log('o.width: ', o.width);
    // console.log('o.width + o.x :', o.width + o.x);
    //
    // console.log('player.x: ', player.x);
    // console.log('player.x + player.width :', player.x + player.width);

    console.log(player)
    if (o.x + o.width < 0){
      obstacles.splice(i, 1);
    }


    // перезагрузка игры при столкновении

    if (
      player.x < o.x + o.width &&
      player.x + (player.width / 10) > o.x &&
      player.y < o.y + o.height &&
      player.y + player.height > o.y
    ) {
      obstacles = [];
      gameSpeed = 3;
      score = 0;
      spawnTimer = initialSpawnTimer;
      window.localStorage.setItem('highscore', highScore);
    }
    o.Update();
  }
  //
  // player.Animate();


  score++;
  scoreText.t = "Score: " + score;

  scoreText.Draw();

  if (score > highScore) {
    highScore = score;
    hightScoreText.t = `Highscore: ${highScore}`;

  }

  // gameSpeed += 0.003;
  hightScoreText.Draw();
}

// export {start, gameSpeed, obstacles, player};
export {start, gameSpeed, obstacles, keys};

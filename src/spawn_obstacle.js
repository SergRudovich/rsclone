import Obstacle from './obstacle';
import {canvas} from './index';
// import {gameSpeed, player, obstacles} from './start_game';
import {gameSpeed, obstacles} from './start_game';


function SpawnObstacle () {
  // let size = RandomIntRange(20, 70);
  let type = RandomIntRange(3, 4);


  let obstacle = new Obstacle({
    x: canvas.width,
    y: canvas.height,
    width: 50,
    height: 50,
    gameSpeed: gameSpeed,
    imageSrc: `images/obstacle${type}.png`,
  });


  // if (type == 1) {
  //   obstacle.y -= player.originalHeight - 10;
  // }

  obstacles.push(obstacle);
}

function RandomIntRange (min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export {SpawnObstacle};

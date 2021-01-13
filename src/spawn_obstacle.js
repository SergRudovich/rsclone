import {Obstacle} from './obstacle';
import {canvas} from './index';
// import {gameSpeed, player, obstacles} from './start_game';
import {gameSpeed, obstacles} from './start_game';


function SpawnObstacle () {
  let size = RandomIntRange(20, 70);
  let type = RandomIntRange(0, 1);
  let obstacle = new Obstacle(
    canvas.width + size, canvas.height - size, size, size, '#2484E4', gameSpeed
  );

  // if (type == 1) {
  //   obstacle.y -= player.originalHeight - 10;
  // }

  obstacles.push(obstacle);
}

function RandomIntRange (min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export {SpawnObstacle};

import Obstacle from './obstacle';
import { canvas } from './index';
import { gameSpeed, obstacles } from './start_game';

function SpawnObstacle() {
  // let size = RandomIntRange(20, 70);
  const type = RandomIntRange(3, 4);

  const obstacle = new Obstacle({
    x: canvas.width,
    y: canvas.height,
    width: 50,
    height: 50,
    gameSpeed,
    imageSrc: `images/obstacle${type}.png`,
  });

  obstacles.push(obstacle);
}

function RandomIntRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export { SpawnObstacle };

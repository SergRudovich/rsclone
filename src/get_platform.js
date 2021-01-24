import { score, player, gameSpeed } from './start_game';
import { canvas } from './index';
import Platform from './Platform';
import getRandomInt from './get_random_int';

let platform;

let randTime;
const platformRandTime = [200, 220, 250, 300];

const platforms = [];
const platformsOptions = [
  {
    src: 'images/platforma1.png',
    width: 495,
    height: 115,
    flightAltitude: 250,
  },
  {
    src: 'images/platforma2.png',
    width: 280,
    height: 115,
    flightAltitude: 300,
  },
];

export default function getPlatform() {
  if (score % 200 === 0) {
    randTime = platformRandTime[getRandomInt(0, 4)];
  }

  if (score % randTime === 0) {
    let type = getRandomInt(0, 2);
    type = platformsOptions[type];

    platform = new Platform({
      x: canvas.width,
      y: canvas.height,
      flightAltitude: type.flightAltitude,
      width: type.width,
      height: type.height,
      gameSpeed,
      imageSrc: type.src,
    });

    platforms.push(platform);
  }

  let flag = false;

  for (const platform of platforms) {
    platform.update();

    if (
      (player.dx > platform.x && player.dx < platform.x + platform.width - 40)
      && player.y < canvas.height - platform.flightAltitude
    ) {
      player.test = canvas.height - platform.flightAltitude + 2;
      flag = true;
    } else if (!flag) {
      player.test = canvas.height;
      flag = false;
    }
  }
}

import { score, player, gameSpeed } from './start_game';
import { canvas } from './index';
import Platform from './Platform';
import getRandomInt from './get_random_int';

let platform;
let platforms = [];
let platformsOptions = [
  {
    src: `images/platforma1.png`,
    width: 495,
    height: 115,
  },
  {
    src: `images/platforma2.png`,
    width: 280,
    height: 115,
  }
];



export default function getPlatform(){
  
  if(score % 200 == 0){    

    let type = getRandomInt(0, 2);
    type = platformsOptions[type];

    platform = new Platform({
      x: canvas.width,
      y: canvas.height,
      flightAltitude: 250,
      width: type.width,
      height: type.height,
      gameSpeed: gameSpeed,
      imageSrc: type.src,
    });

    platforms.push(platform);
  }


  let flag = false;

  for(let platform of platforms) {
    platform.update();

    if (
      (player.dx > platform.x && player.dx < platform.x + platform.width - 40)
      && player.y < canvas.height - platform.flightAltitude
    ) {
      player.test = canvas.height - platform.flightAltitude + 2;
      flag = true;
    } else {
      if (!flag) {
        player.test = canvas.height;
        flag = false;
      }
    }
  }
}

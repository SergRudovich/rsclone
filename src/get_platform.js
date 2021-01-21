import { score, player, gameSpeed } from './start_game';
import spawnPlatform from './spawn_platform';
import { canvas } from './index';
import Platform from './Platform';

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
  
  if(score % 300 == 0){    

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

  if (platforms) {
    platforms.map((platform) => {
      platform.update();
      if (
        (player.dx > platform.x && player.dx < platform.x + platform.width - 40)
        && player.y < canvas.height - platform.flightAltitude
      ) {
        player.test = canvas.height - platform.flightAltitude + 2;
      } else {
        player.test = canvas.height;
      }
    });
  }

  // if(platform) {
  //   platform.update();
  //   console.log(platform);

  //   if (platform.x + platform.width < 0){
  //     platform.x = 100000;
  //   }

  //   if(
  //     player.x > platform.x
  //     && player.y < canvas.height - platform.flightAltitude
  //     )
  //     {
  //       player.test = canvas.height - platform.flightAltitude + 2
  //     } else {
  //       player.test = canvas.height;
  //     }

  // }

  // platforms.push(platform);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
}

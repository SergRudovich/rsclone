import {score, player } from './start_game';
import spawnPlatform from './spawn_platform';
import {canvas} from './index';
import Platform from './Platform';
import {gameSpeed} from './start_game';

let platform;
let platforms = [];

export default function getPlatform(){
  
  if(score % 300 == 0){    

    platform = new Platform({
      x: canvas.width,
      y: canvas.height,
      flightAltitude: 250,
      width: 495,
      height: 115,
      gameSpeed: gameSpeed,
      imageSrc: `images/platforma1.png`,
    });

    platforms.push(platform)
  } 

  if(platforms) {
    
    platforms.map(platform => {
      platform.update();
      
      if(
        player.x > platform.x
        && player.y < canvas.height - platform.flightAltitude
        )
        {
          player.test = canvas.height - platform.flightAltitude + 2
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
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
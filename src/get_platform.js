import {score, player } from './start_game';
import spawnPlatform from './spawn_platform';
import {canvas} from './index';

let testPlatform;

export default function getPlatform(){
  if(score % 400 == 0 && score != 800){    

    let rund = getRandomInt(1, 3);

    testPlatform = spawnPlatform({
      src: `images/platforma${rund}.png`,
      width: 495,
      height: 115,
      flightAltitude: 250,
    });
  } 
  
  

  if(testPlatform) {
    
    if (testPlatform.x + testPlatform.width < 0){
      testPlatform.x = 100000;
    }

    if(
      player.x > testPlatform.x
      && player.y < canvas.height - testPlatform.flightAltitude
      )
      {
        player.test = canvas.height - testPlatform.flightAltitude + 2
      } else {
        player.test = canvas.height;
      }
      testPlatform.Update();
  }
} 

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
import {score, player } from './start_game';
import spawnPlatform from './spawn_platform';
import {canvas} from './index';

let platformsBig = [];
let platformsMedium = [];
let testPlatform;
let testPlatformTwo;

export default function getPlatform(){
  if(score % 400 == 0 && score != 800){    

    let rund = getRandomInt(1, 3);
    console.log(rund)

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


  // else if (score % 500 == 0) {
  //   spawnPlatform({
  //     src: `images/platforma2.png`,
  //     width: 280,
  //     height: 115,
  //     platform: platformsBig,
  //     flightAltitude: 350,
  //   });
  // }


  // for (let i = 0; i < platformsBig.length; i++) {

  //   let o = platformsBig[i];

  //   if (o.x + o.width < 0){
  //     platformsBig.splice(i, 1);
  //     o.x = 1000;
  //   }

  //   if(
  //     player.x > o.x 
  //     && player.y < canvas.height - o.flightAltitude
  //     )
  //     {
  //      player.test = canvas.height - o.flightAltitude + 2;
  //     } else {
  //       player.test = canvas.height;
  //     }
  //     o.Update();
  // }
  
  // for (let i = 0; i < platformsMedium.length; i++) {

  //   let o = platformsMedium[i];

  //   if (o.x + o.width < 0){
  //     platformsMedium.splice(i, 1);
  //     o.x = 1000;
  //   }

  //   if(
  //     player.x > o.x 
  //     && player.y < canvas.height - o.flightAltitude
  //     )
  //     {
  //      player.test = canvas.height - o.flightAltitude + 2;
  //     } else {
  //       player.test = canvas.height;
  //     }
  //     o.Update();
  // }
} 

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

// export {platformsBig, platformsMedium}
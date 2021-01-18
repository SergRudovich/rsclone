import Platform from './Platform';
import {canvas} from './index';
// import {platformsBig, platformsMedium} from './get_platform';
import {gameSpeed} from './start_game';


export default function spawnPlatform(options){

  let platformOne = new Platform({
    x: canvas.width,
    y: canvas.height,
    flightAltitude: options.flightAltitude,
    width: options.width,
    height: options.height,
    gameSpeed: gameSpeed,
    imageSrc: options.src,
  });

  // options.platform.push(platformOne);
  return platformOne;
}
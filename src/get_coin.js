import {score, player } from './start_game';
import {canvas} from './index';
import Coin from './coin';
import {gameSpeed} from './start_game';

let coin;

export default function getCoin () {

  if(score % 200 == 0) { 
  
    coin = new Coin({
      x: canvas.width,
      y: 250,
      width: 504,
      height: 84,
      numberOfFrames: 6,
      ticksPerFrame: 4,
      gameSpeed: gameSpeed,
    });
  }

  if(coin){
    coin.start();
  }
  

  // console.log(coin)
}
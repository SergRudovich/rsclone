import {score, player } from './start_game';
import {canvas} from './index';
import Coin from './coin';
import {gameSpeed} from './start_game';
import {coinsText} from './start_game';

let coin;
let coins = [];
// let coinsCounter = 0;

function getCoin () {

  if(score % 200 == 0) { 

    coin = new Coin({
      x: canvas.width,
      y: 350,
      width: 504,
      height: 84,
      numberOfFrames: 6,
      ticksPerFrame: 4,
      gameSpeed: gameSpeed,
    });

    coins.push(coin);
  }


  if(coins.length > 0) {

    coins.forEach(coin => {
      coin.start();
      
      if (
        player.dx < coin.x + coin.width &&
        player.dx + (player.width / 10) - 10 > coin.x &&
        player.y < coin.y + coin.height &&
        player.y + player.height >= coin.y
      ) {
        
        coin.y = 10000;
        coin.playCoinSound();
        // coinsCounter++;
        
        coinsText.upCounter();
        // console.log(coinsText)
      }

      if (coin.x < -50) { 
        coin.y = 10000;
      }
    });
  }
}

export {getCoin}

import Coin from './coin';
import {gameSpeed, coins} from './start_game';

export default function spawnCoin () {

  let coin = new Coin({
    x: 50,
    y: 250,
    width: 504,
    height: 84,
    numberOfFrames: 6,
    ticksPerFrame: 4,
    gameSpeed: gameSpeed,
  });

  coins.push(coin);
}
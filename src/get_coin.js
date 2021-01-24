import { score, player, gameSpeed } from './start_game';
import { canvas } from './index';
import Coin from './coin';

import Text from './text';
import { lang } from './lang';
import getRandomInt from './get_random_int';

let coin;
const coins = [];

let coinsText;
// должен быть именно обьект а не переменная типа let coinsCounter = 0;
// удалить эти строки через несколько коммитов)
export const coinsCounter = {
  counter: 0,
};

let coinY;
let randTime;
const randY = [
  {
    y: 350,
  },
  {
    y: 600,
  },
  {
    y: 300,
  },
];

function getCoin() {
  coinsText = new Text(
    `${lang[localStorage.getItem('langSelected')].coinsTxt} ${coinsCounter.counter}`, 350, 25, 'right', '#212121', '20',
  );

  coinsText.Draw();

  if (score % 200 === 0) {
    randTime = getRandomInt(20, 100);
    randTime += 200;
    coinY = randY[getRandomInt(0, 3)];
  }

  if (score % randTime === 0) {
    coin = new Coin({
      x: canvas.width,
      y: coinY.y,
      width: 504,
      height: 84,
      numberOfFrames: 6,
      ticksPerFrame: 4,
      gameSpeed,
    });

    coins.push(coin);
  }

  if (coins.length > 0) {
    coins.forEach((coin) => {
      coin.start();

      if (
        player.dx < coin.x + (coin.width / 6)
        && player.dx + (player.width / 10) - 10 > coin.x
        && player.y < coin.y + coin.height
        && player.y + player.height >= coin.y
      ) {
        coin.y = 10000;
        coin.playCoinSound();
        coinsCounter.counter += 1;
      }

      if (coin.x < -50) {
        coin.y = 10000;
      }
    });
  }
}

export { getCoin };

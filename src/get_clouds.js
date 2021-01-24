import { score } from './start_game';
import Cloud from './cloud';
import getRandomInt from './get_random_int';

const cloudsSet = [
  {
    src: 'images/clouds.png',
    sx: 0,
    sy: 0,
    sWidth: 220,
    sHeight: 160,
    dy: 150,
    dWidth: 220,
    dHeight: 160,
  },
  {
    src: 'images/clouds.png',
    sx: 250,
    sy: 0,
    sWidth: 220,
    sHeight: 160,
    dy: 100,
    dWidth: 220,
    dHeight: 160,
  },
];

let cloud;
const clouds = [];
let random;

export default function getClouds() {
  if (score % 500 === 0) {
    random = cloudsSet[getRandomInt(0, 2)];
    cloud = new Cloud(random);

    clouds.push(cloud);
  }

  clouds.map((cloud) => {
    cloud.update();
  });
}

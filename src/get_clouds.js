import { score } from './start_game';
import  Cloud  from './cloud';

let clouds = [
  {
    src: `images/clouds.png`,
    sx: 0,
    sy: 0,
    sWidth: 220,
    sHeight: 160,
    dy: 150,
    dWidth: 220,
    dHeight: 160,
  },
  {
    src: `images/clouds.png`,
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
let random;

export default function getClouds() {
  if(score % 250 == 0){   
    
    random = clouds[getRandomInt(0, 2)];
    cloud = new Cloud(random);
  }

  if(cloud) {
    cloud.update();
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
}
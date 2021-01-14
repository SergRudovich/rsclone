// import { Hero } from './hero';
import { Obstacle } from './obstacle';
import { Text } from './text';
import { start } from './start_game';

// let keys = {};

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// window.gameState = {
//   soundUrl: '.././dist/sound/',
//   imgUrl: '.././dist/img/',
//   isFonSound: true,
//   isPlayerSound: true,
//   set isStartGame(value) {
//     Start();
//   },
// };

// document.addEventListener('keydown', (e) => {
//   keys[e.code] = true;
// });
//
// document.addEventListener('keyup', (e) => {
//   keys[e.code] = false;
// });

start();

// export {canvas, ctx, keys}
export { canvas, ctx };

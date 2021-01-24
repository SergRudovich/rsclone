/* eslint-disable linebreak-style */
// import { Hero } from './hero';
import { Obstacle } from './obstacle';
import { Text } from './text';
import { start } from './start_game';
import main from './pages/main';

// let keys = {};

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

if (!localStorage.getItem('langSelected')) localStorage.setItem('langSelected', 'en');
if (!localStorage.getItem('SpriteImage')) localStorage.setItem('SpriteImage', 'images/sprite2.png');

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

main();
// start();

// export {canvas, ctx, keys}
export { canvas, ctx };

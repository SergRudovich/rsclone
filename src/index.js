/* eslint-disable linebreak-style */

import main from './pages/main';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

localStorage.setItem('animate', 'true');
localStorage.setItem('lives', 3);
if (!localStorage.getItem('langSelected')) localStorage.setItem('langSelected', 'en');
if (!localStorage.getItem('SpriteImage')) localStorage.setItem('SpriteImage', 'images/sprite2.png');

main();

export { canvas, ctx };

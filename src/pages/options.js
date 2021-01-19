/* eslint-disable linebreak-style */
import { canvas } from '../index';
import { start } from '../start_game';
import help from './help';

export default function options() {
  canvas.classList.add('hidden');
  const pageWrapper = document.querySelector('.page-wrapper');
  const page = document.querySelector('.page') || document.createElement('div');
  page.classList.add('page', 'page-image');
  page.innerHTML = `
  <a class="btnflip start-help start" href="#">
		<span class="btnflip-item btnflip__front">Start Game</span>
		<span class="btnflip-item btnflip__center"></span>
		<span class="btnflip-item btnflip__back">Start Game</span>
</a>

<a class="btnflip options-help help" href="#">
		<span class="btnflip-item btnflip__front">Help</span>
		<span class="btnflip-item btnflip__center"></span>
		<span class="btnflip-item btnflip__back">Help</span>
</a>
  `;

  function startGame() {
    pageWrapper.innerHTML = '';
    pageWrapper.classList.add('hidden');
    canvas.classList.remove('hidden');
    start();
  }

  pageWrapper.appendChild(page);
  pageWrapper.classList.remove('hidden');
  const startBtn = document.querySelector('.start');
  startBtn.addEventListener('click', startGame);

  const helpBtn = document.querySelector('.help');
  helpBtn.addEventListener('click', () => {
    help();
  });
}
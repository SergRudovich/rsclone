/* eslint-disable linebreak-style */
import { canvas } from '../index';
import { start } from '../start_game';
import options from './options';

export default function help() {
  canvas.classList.add('hidden');
  const pageWrapper = document.querySelector('.page-wrapper');
  const page = document.querySelector('.page') || document.createElement('div');
  page.classList.add('page', 'page-image');
  page.innerHTML = `
  <div class="help-txt-wrapper">
  Your mission is to collect all the coins. To do this you only have a certain number of lives.
  <p>Keyboard Control</p>
  W, Space - JUMP
  <br>M - MOVE RIGHT
  <br>N - MOVE LEFT
  <br>A - MUSIC ON
  <br>Q - MUSIC OFF
  <br>Esc - Main MENU
  <div>
  <a class="btnflip start-help start" href="#">
          <span class="btnflip-item btnflip__front">Start Game</span>
          <span class="btnflip-item btnflip__center"></span>
          <span class="btnflip-item btnflip__back">Start Game</span>
  </a>
  
  <a class="btnflip options-help options" href="#">
          <span class="btnflip-item btnflip__front">Options</span>
          <span class="btnflip-item btnflip__center"></span>
          <span class="btnflip-item btnflip__back">Options</span>
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

  const optionsBtn = document.querySelector('.options');
  optionsBtn.addEventListener('click', () => {
    options();
  });
}

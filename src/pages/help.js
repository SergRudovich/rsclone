/* eslint-disable linebreak-style */
import { canvas } from '../index';
import { start } from '../start_game';
import { lang } from '../lang';
import options from './options';

export default function help() {
  canvas.classList.add('hidden');
  const lg = localStorage.getItem('langSelected');
  const pageWrapper = document.querySelector('.page-wrapper');
  const page = document.querySelector('.page') || document.createElement('div');
  page.classList.add('page', 'page-image');
  page.innerHTML = `
  <div class="help-txt-wrapper">
  ${lang[lg].helpTxt1}
  <p>${lang[lg].helpTxt2}</p>
  ${lang[lg].helpTxt3}
  <br>${lang[lg].helpTxt4}
  <br>${lang[lg].helpTxt5}
  <br>${lang[lg].helpTxt6}
  <br>${lang[lg].helpTxt7}
  <br>${lang[lg].helpTxt8}
  </div>
  <a class="btnflip start-help start" href="#">
          <span class="btnflip-item btnflip__front">${lang[lg].startGameBtn}</span>
          <span class="btnflip-item btnflip__center"></span>
          <span class="btnflip-item btnflip__back">${lang[lg].startGameBtn}</span>
  </a>
  
  <a class="btnflip options-help options" href="#">
          <span class="btnflip-item btnflip__front">${lang[lg].optionsBtn}</span>
          <span class="btnflip-item btnflip__center"></span>
          <span class="btnflip-item btnflip__back">${lang[lg].optionsBtn}</span>
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

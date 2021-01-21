/* eslint-disable linebreak-style */
import { canvas } from '../index';
import { start } from '../start_game';
import help from './help';
import { lang } from '../lang';

export default function options() {
  canvas.classList.add('hidden');
  const lg = localStorage.getItem('langSelected');
  const pageWrapper = document.querySelector('.page-wrapper');
  const page = document.querySelector('.page') || document.createElement('div');
  page.classList.add('page', 'page-image');
  page.innerHTML = `
  <div class="help-txt-wrapper">
  <p class="menuItem" id='menuFieldSize'>
  <label>${lang[lg].selectLng}</label>
  <select id="selectLang">
      <option value="en" selected="selected">english</option>
      <option value="ru">русский</option>
      <option value="br">беларуская</option>
  </select>
  </p>
  </div>
  <a class="btnflip start-help start" href="#">
		<span class="btnflip-item btnflip__front">${lang[lg].startGameBtn}</span>
		<span class="btnflip-item btnflip__center"></span>
		<span class="btnflip-item btnflip__back">${lang[lg].startGameBtn}</span>
</a>

<a class="btnflip options-help help" href="#">
		<span class="btnflip-item btnflip__front">${lang[lg].helpBtn}</span>
		<span class="btnflip-item btnflip__center"></span>
		<span class="btnflip-item btnflip__back">${lang[lg].helpBtn}</span>
</a>
  `;
  document.querySelector('#selectLang > option[selected]').removeAttribute('selected');
  document.querySelector(`#selectLang > option[value=${lg}]`).setAttribute('selected', 'selected');

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

  const selectLang = document.querySelector('#selectLang');
  selectLang.addEventListener('change', () => {
    localStorage.setItem('langSelected', selectLang.value);
    options();
  });
}

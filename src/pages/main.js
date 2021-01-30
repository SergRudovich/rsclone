/* eslint-disable linebreak-style */
import { canvas } from '../index';
import { start } from '../start_game';
import help from './help';
import options from './options';
import { lang } from '../lang';

export default function main() {
  canvas.classList.add('hidden');
  const lg = localStorage.getItem('langSelected');
  const pageWrapper = document.querySelector('.page-wrapper');
  const page = document.querySelector('.page') || document.createElement('div');
  page.classList.add('page', 'page-image');
  page.innerHTML = `
<a class="btnflip start-main start" href="#">
  <span class="btnflip-item btnflip__front">${lang[lg].startGameBtn}</span>
  <span class="btnflip-item btnflip__center"></span>
  <span class="btnflip-item btnflip__back">${lang[lg].startGameBtn}</span>
</a>

<a class="btnflip options-main options" href="#">
  <span class="btnflip-item btnflip__front">${lang[lg].optionsBtn}</span>
  <span class="btnflip-item btnflip__center"></span>
  <span class="btnflip-item btnflip__back">${lang[lg].optionsBtn}</span>
</a>

<a class="btnflip help-main help" href="#">  
  <span class="btnflip-item btnflip__front">${lang[lg].helpBtn}</span>
  <span class="btnflip-item btnflip__center"></span>
  <span class="btnflip-item btnflip__back">${lang[lg].helpBtn}</span>
</a>
<footer class="footer">
<strong>
<a href="https://github.com/SergRudovich" target="blank">Sergey Rudovich</a>
&nbsp|&nbsp
<a href="https://github.com/conservativ007" target="blank">Maks conservativ007</a>
<p style="text-align: center">
<a href="https://rs.school/js/" target="blank">
<img src="https://rs.school/images/rs_school_js.svg" alt="RS School" style="width: 50px"></a>
<span class="footer__year">© 2021</span>
</p>
</strong>
</footer>
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

  const optionsBtn = document.querySelector('.options');
  optionsBtn.addEventListener('click', () => {
    options();
  });
}

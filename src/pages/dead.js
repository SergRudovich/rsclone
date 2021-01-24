/* eslint-disable linebreak-style */
import { lang } from '../lang';
import { start } from '../start_game';

const dead = {
  show() {
    localStorage.setItem('animate', 'false');
    const lg = localStorage.getItem('langSelected');
    const page = document.querySelector('.page') || document.createElement('div');
    page.classList.add('zindex');
    page.innerHTML = `
  <div class="help-txt-wrapper">
Вы потеряли жизнь.
<br>Кликни чтобы продолжить.
  </div>
  `;
    document.body.appendChild(page);
    document.addEventListener('click', () => {
      document.body.removeChild(page);
      localStorage.setItem('animate', 'true');
      start();
    });
  },
  hide() {
    const page1 = document.querySelector('.page');
    page1.classList.add('hidden');
  },
};

export { dead };

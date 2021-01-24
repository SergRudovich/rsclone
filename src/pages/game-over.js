/* eslint-disable linebreak-style */
import { lang } from '../lang';
import { canvas } from '../index';

export default function gameOver() {
  document.body.removeChild(canvas);
  localStorage.setItem('animate', 'false');
  const lg = localStorage.getItem('langSelected');
  const pageWrapper = document.querySelector('.page-wrapper');
  const page = document.querySelector('.page') || document.createElement('div');
  page.classList.add('page', 'game-over-image');
  page.innerHTML = `
    <div class="help-txt-wrapper">
    Вы проиграли. Кликни чтобы продолжить.
    </div>
    `;
  pageWrapper.appendChild(page);
  pageWrapper.classList.remove('hidden');
  document.addEventListener('click', () => {
    window.location.reload();
  });
}

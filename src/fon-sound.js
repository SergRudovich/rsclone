/* eslint-disable linebreak-style */

export default class FonSound {
  constructor() {
    this.url = window.gameState.soundUrl;
    this.num = 1;
    this.fonSound = new Audio(`${this.url}run${this.num}.mp3`);
    document.body.appendChild(this.fonSound);
  }

  play() {
    this.fonSound.loop = true;
    this.fonSound.play();
  }

  stop() {
    this.fonSound.pause();
  }
}

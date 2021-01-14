/* eslint-disable linebreak-style */

export default class GameSound {
  constructor() {
    // this.url = window.gameState.soundUrl;
    // this.num = 1;
    this.fonSound = new Audio('sound/fon1.mp3');
    document.body.appendChild(this.fonSound);
    this.fonSound.volume = 0.1;
    this.deadSound = new Audio('sound/dead.mp3');
    document.body.appendChild(this.deadSound);
  }

  playFon() {
    this.fonSound.loop = true;
    this.fonSound.play();
  }

  stopFon() {
    this.fonSound.pause();
  }

  playDead() {
    this.deadSound.play();
  }
}

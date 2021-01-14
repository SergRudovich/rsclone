/* eslint-disable linebreak-style */

export default class PlayerSound {
  constructor() {
    // this.url = window.gameState.soundUrl;
    this.soundUp = new Audio('sound/jumpUp.mp3');
    document.body.appendChild(this.soundUp);
    this.soundDown = new Audio('sound/gravityDown.mp3');
    document.body.appendChild(this.soundDown);
    this.isGravityDown = false;
    this.isJumpUp = false;
  }

  jumpUp() {
    if (!this.isJumpUp) {
      this.soundUp.play();
      this.isJumpUp = true;
    }
  }

  jumpDown() {
    this.soundUp.pause();
    this.soundUp.currentTime = 0.0;
    this.isJumpUp = false;
  }

  gravityDown() {
    if (!this.isGravityDown) {
      this.soundDown.play();
      this.isGravityDown = true;
    }
  }

  gravityUp() {
    this.soundDown.pause();
    this.soundDown.currentTime = 0.0;
    this.isGravityDown = false;
  }
}

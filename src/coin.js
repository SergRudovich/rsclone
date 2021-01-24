import { canvas, ctx } from './index';

export default class Coin {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;

    console.log(this.width);

    this.height = options.height;

    this.ticksPerFrame = options.ticksPerFrame || 0;
    this.numberOfFrames = options.numberOfFrames || 1;

    this.gameSpeed = options.gameSpeed;

    this.frameIndex = 0;
    this.tickCount = 0;

    this.dx = -this.gameSpeed;

    this.image = new Image();
    this.image.src = './images/coin.png';

    this.audioObj = new Audio('./sound/coin2.mp3');
  }

  update() {
    this.x += this.dx;

    this.tickCount++;

    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.frameIndex < this.numberOfFrames - 1) {
        this.frameIndex += 1;
      } else {
        this.frameIndex = 0;
      }
    }
  }

  render() {
    ctx.drawImage(
      this.image,
      (this.frameIndex * this.width) / this.numberOfFrames,
      0,
      this.width / this.numberOfFrames,
      this.height,
      this.x,
      this.y,
      this.width / this.numberOfFrames,
      this.height,
    );
  }

  playCoinSound() {
    this.audioObj.play();
  }

  start() {
    this.update();
    this.render();
  }
}

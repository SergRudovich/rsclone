import {canvas, ctx} from './index';

export default class Coin {

  constructor (options) {
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    
    this.ticksPerFrame = options.ticksPerFrame || 0;
    this.numberOfFrames = options.numberOfFrames || 1;

    this.gameSpeed = options.gameSpeed;

    this.frameIndex = 0;
    this.tickCount = 0;

    this.dx = -this.gameSpeed;

    this.image = new Image();
    this.image.src = './images/coin.png';
  }

  update() {
    this.x += this.dx;

    this.tickCount++;

    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.frameIndex < this.numberOfFrames - 1) {
          this.frameIndex++;
      } else {
          this.frameIndex = 0;
      }
    }
  }

  render() {
    ctx.drawImage(
      this.image,
      this.frameIndex * this.width / this.numberOfFrames,
      0,
      this.width / this.numberOfFrames,
      this.height,
      this.x,
      this.y,
      this.width / this.numberOfFrames,
      this.height
    )
  }

  start() {
    this.update();
    this.render();
  }
}
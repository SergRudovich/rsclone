import { canvas, ctx } from './index.js';

export default class Obstacle {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    this.gameSpeed = options.gameSpeed;

    this.dx = -this.gameSpeed;

    this.image = new Image();
    this.image.src = options.imageSrc;
  }

  Update() {
    this.x += this.dx;
    this.render();
  }

  render() {
    ctx.drawImage(
      this.image,
      this.x,
      canvas.height - 55,
    );
  }
}

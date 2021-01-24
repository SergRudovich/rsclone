import { canvas, ctx } from './index.js';
import { gameSpeed } from './start_game';

export default class Cloud {
  constructor(options) {
    this.x = canvas.width;
    this.sx = options.sx;
    this.sy = options.sy;
    this.sWidth = options.sWidth;
    this.sHeight = options.sHeight;
    this.dy = options.dy;
    this.dWidth = options.sWidth;
    this.dHeight = options.sHeight;

    this.dx = -gameSpeed / gameSpeed;

    this.image = new Image();
    this.image.src = options.src;
  }

  update() {
    this.x += this.dx;
    this.render();
  }

  render() {
    ctx.drawImage(
      this.image,
      this.sx,
      this.sy,
      this.sWidth,
      this.sHeight,
      this.x,
      this.dy,
      this.dWidth,
      this.dHeight,
    );
  }
}

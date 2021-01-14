import {canvas, ctx} from './index.js';


export class Obstacle {
  constructor (x, y, width, height, color, gameSpeed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.gameSpeed = gameSpeed;

    this.dx = -this.gameSpeed;
  }

  Update () {
    this.x += this.dx;
    this.Draw();
    this.dx = -this.gameSpeed;
  }

  Draw () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.closePath();
  }
}

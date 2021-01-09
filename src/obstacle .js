/* eslint-disable linebreak-style */
export default class Obstacle {
  constructor(x, y, w, h, c, ctx, gameSpeed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.ctx = ctx;
    this.gameSpeed = gameSpeed;
    this.dx = -this.gameSpeed;
  }

  Update() {
    this.x += this.dx;
    this.Draw();
    this.dx = -this.gameSpeed;
  }

  Draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.c;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
    this.ctx.closePath();
  }
}

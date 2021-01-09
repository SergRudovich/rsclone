/* eslint-disable linebreak-style */
export default class Text {
  constructor(t, x, y, a, c, s, ctx) {
    this.t = t;
    this.x = x;
    this.y = y;
    this.a = a;
    this.c = c;
    this.s = s;
    this.ctx = ctx;
  }

  Draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.c;
    this.ctx.font = `${this.s}px sans-serif`;
    this.ctx.textAlign = this.a;
    this.ctx.fillText(this.t, this.x, this.y);
    this.ctx.closePath();
  }
}

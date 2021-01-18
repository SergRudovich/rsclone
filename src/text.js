import {ctx} from './index';

export class Text {
  constructor (t, x, y, a, c, s) {
    this.t = t;
    this.x = x;
    this.y = y;
    this.a = a;
    this.c = c;
    this.s = s;
    this.counter = 0;
  }

  getCounter() {
    return this.counter;
  }

  upCounter() {
    this.counter = this.counter + 1;
  }

  Draw () {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.font = `${this.s}px sans-serif`;
    ctx.textAlign = this.a;
    ctx.fillText(this.t, this.x, this.y);
    ctx.closePath();
  }
}

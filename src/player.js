/* eslint-disable linebreak-style */
export default class Player {
  constructor(x, y, w, h, c, canvas, ctx, keys, gravity) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.canvas = canvas;
    this.ctx = ctx;
    this.keys = keys;
    this.gravity = gravity;
    this.dy = 0;
    this.jumpForce = 15;
    this.originalHeight = h;
    this.grounded = false;
    this.jumpTimer = 0;
  }

  Animate() {
    // Jump
    if (this.keys.Space || this.keys.KeyW) {
      this.Jump();
    } else {
      this.jumpTimer = 0;
    }

    if (this.keys.ShiftLeft || this.keys.KeyS) {
      this.h = this.originalHeight / 2;
    } else {
      this.h = this.originalHeight;
    }

    this.y += this.dy;

    // Gravity
    if (this.y + this.h < this.canvas.height) {
      this.dy += this.gravity;
      this.grounded = false;
    } else {
      this.dy = 0;
      this.grounded = true;
      this.y = this.canvas.height - this.h;
    }

    this.Draw();
  }

  Jump() {
    if (this.grounded && this.jumpTimer === 0) {
      this.jumpTimer = 1;
      this.dy = -this.jumpForce;
    } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
      this.jumpTimer += 1;
      this.dy = -this.jumpForce - (this.jumpTimer / 50);
    }
  }

  Draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.c;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
    this.ctx.closePath();
  }
}

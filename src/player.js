// import {keys, canvas, ctx} from './index';
import {canvas, ctx} from './index';

export class Player {
  constructor (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    this.dy = 0;
    this.jumpForce = 15;
    this.originalHeight = height;
    this.grounded = false;
    this.jumpTimer = 0;

    this.gravity = 1;
  }

  Animate () {
    // jump

    if(keys['Space'] || keys['KeyW']){

      this.Jump();
    } else {
      this.jumpTimer = 0;
    }

    if (keys['ShiftLeft'] || keys['KeyS']) {
      this.height = this.originalHeight / 2;
    } else {
      this.height = this.originalHeight;
    }

    this.y += this.dy;

    // gravity
    if (this.y + this.height < canvas.height) {
      this.dy += this.gravity;
      this.grounded = false;

    } else {
      this.dy = 0;
      this.grounded = true;
      this.y = canvas.height - this.height;
    }
    this.Draw();
  }

  Jump () {
    if (this.grounded && this.jumpTimer == 0) {
      this.jumpTimer = 1;
      this.dy = -this.jumpForce;
    } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
      this.jumpTimer++;
      this.dy = -this.jumpForce - (this.jumpTimer / 50);
    }
  }

  Draw () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.closePath();
  }
}

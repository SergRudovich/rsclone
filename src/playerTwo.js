import {canvas, ctx} from './index';
import {keys} from './start_game';


export default class PlayerTwo {
  constructor(options) {
    this.ctx = options.ctx;

    this.image = options.image;

    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = options.ticksPerFrame || 0;
    this.numberOfFrames = options.numberOfFrames || 1;

    this.width = options.width;
    this.height = options.height;


    this.dy = options.dy || 0;
    this.jumpForce = 15;
    this.grounded = false;
    this.jumpTimer = 0;

    this.y = options.y;
    this.x = options.x;
    this.gravity = 1;
  }

  update() {
    this.tickCount++;

    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.frameIndex < this.numberOfFrames - 1) {
          this.frameIndex++;
      } else {
          this.frameIndex = 0;
      }
    }

    console.log(this.numberOfFrames)

  }

  render() {
    this.ctx.clearRect(0, 0, this.width / this.numberOfFrames, this.height);

    this.ctx.drawImage(
      this.image,
      this.frameIndex * this.width / this.numberOfFrames,
      0,
      this.width / this.numberOfFrames,
      this.height,
      0,
      this.y,
      this.width / this.numberOfFrames,
      this.height
    )
  }

  // gravity
  gravityGo() {
    this.y += this.dy;

    if (this.y + this.height < canvas.height) {
      this.dy += this.gravity;
      this.grounded = false;
    } else {
      this.dy = 0;
      this.grounded = true;
      this.y = canvas.height - this.height;
    }
  }

  // jump
  getReadyToJump() {
    if(keys['Space'] || keys['KeyW']){

      this.Jump();
    } else {
      this.jumpTimer = 0;
    }
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


  start() {
    let loop = () => {
      this.update();
      this.render();
      this.gravityGo();
      this.getReadyToJump();

      window.requestAnimationFrame(loop);
    }

    window.requestAnimationFrame(loop);
  }
}

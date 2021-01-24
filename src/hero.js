import { canvas, ctx } from './index';
import { keys } from './start_game';
import PlayerSound from './player-sound';
import { dead } from './pages/dead';
export default class Hero {
  constructor(options) {
    this.image = options.image;

    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = options.ticksPerFrame || 0;
    this.numberOfFrames = options.numberOfFrames || 1;

    this.width = options.width;
    this.height = options.height;

    this.dy = options.dy || 0;
    this.dx = 0;
    this.sx = 0;
    this.jumpForce = 15;
    this.grounded = false;
    this.jumpTimer = 0;

    this.y = options.y;
    this.x = options.x;
    this.gravity = 1;

    this.isLeft = false;

    // platform
    this.test = options.test;

    this.sound = new PlayerSound();
  }

  update() {
    this.tickCount += 1;

    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.frameIndex < this.numberOfFrames - 1) {
        this.frameIndex += 1;
      } else {
        this.frameIndex = 0;
      }
    }
  }

  render() {
    ctx.drawImage(
      this.image,
      (this.frameIndex * this.width) / this.numberOfFrames,
      this.sx,
      this.width / this.numberOfFrames,
      this.height,
      this.dx,
      this.y,
      this.width / this.numberOfFrames,
      this.height,
    );
  }

  // gravity
  // gravityGo() {
  //   console.log(this.test)
  //   this.y += this.dy;

  //   if (this.y + this.height < canvas.height) {
  //     this.dy += this.gravity;
  //     this.grounded = false;
  //   } else {
  //     this.dy = 0;
  //     this.grounded = true;
  //     this.y = canvas.height - this.height;
  //   }
  // }

  gravityGo() {
    this.y += this.dy;

    if (this.y + this.height < this.test) {
      this.dy += this.gravity;
      this.grounded = false;
      if (this.dy > 0) {
        this.numberOfFrames = 1;
        if (this.isLeft) {
          this.sx = 300;
        } else {
          this.sx = 400;
        }
      }
    } else {
      this.dy = 0;
      this.grounded = true;
      // dead.hide();
      this.numberOfFrames = 6;
      if (this.isLeft) {
        this.sx = 100;
      } else {
        this.sx = 0;
      }
      this.y = this.test - this.height;
    }
  }

  // jump
  getReadyToJump() {
    if (keys.Space || keys.KeyW || keys.ArrowUp) {
      this.sound.jumpUp();
      this.Jump();
    } else {
      this.jumpTimer = 0;
    }
    if (keys.KeyM || keys.ArrowRight) {
      if (this.dx < canvas.width - 100) this.dx += 5;
      this.sx = 0;
      this.isLeft = false;
      this.numberOfFrames = 6;
    }
    if (keys.KeyN || keys.ArrowLeft) {
      if (this.dx > 0) this.dx -= 5;
      this.sx = 100;
      this.isLeft = true;
      this.numberOfFrames = 6;
    }
    if (keys.Escape) {
      window.location.reload();
    }
  }

  Jump() {
    if (this.grounded && this.jumpTimer === 0) {
      this.jumpTimer = 1;
      this.dy = -this.jumpForce;
      this.sound.jumpDown();
    } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
      this.jumpTimer += 1;
      this.dy = -this.jumpForce - (this.jumpTimer / 50);
      this.numberOfFrames = 1;
      if (this.isLeft) {
        this.sx = 200;
      } else {
        this.sx = 500;
      }
    }
  }

  start() {
    const loop = () => {
      this.update();
      this.render();
      this.gravityGo();
      this.getReadyToJump();

      if (localStorage.getItem('animate') === 'true') window.requestAnimationFrame(loop);
    };
    this.image.onload = () => {
      window.requestAnimationFrame(loop);
    };
  }
}

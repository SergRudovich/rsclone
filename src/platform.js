import {canvas, ctx} from './index.js';


export default class Platform {
  constructor (options) {
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    this.flightAltitude = options.flightAltitude;
    this.gameSpeed = options.gameSpeed;

    this.dx = -this.gameSpeed;

    this.image = new Image();
    this.image.src = options.imageSrc;
  }

  update () {
    this.x += this.dx;
    this.render();
  }

  render() {
    ctx.drawImage(
      this.image,
      this.x,
      canvas.height - this.flightAltitude,
    )
  }

  // start() {
  //   let loop = () => {
  //     this.update();
  //     this.render();

  //     window.requestAnimationFrame(loop);
  //   }

  //   window.requestAnimationFrame(loop);
  // }
}




/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Platform.js":
/*!*************************!*\
  !*** ./src/Platform.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Platform
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Platform = /*#__PURE__*/function () {
  function Platform(options) {
    _classCallCheck(this, Platform);

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

  _createClass(Platform, [{
    key: "update",
    value: function update() {
      this.x += this.dx;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(this.image, this.x, _index_js__WEBPACK_IMPORTED_MODULE_0__.canvas.height - this.flightAltitude);
    } // start() {
    //   let loop = () => {
    //     this.update();
    //     this.render();
    //     window.requestAnimationFrame(loop);
    //   }
    //   window.requestAnimationFrame(loop);
    // }

  }]);

  return Platform;
}();



/***/ }),

/***/ "./src/coin.js":
/*!*********************!*\
  !*** ./src/coin.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Coin
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Coin = /*#__PURE__*/function () {
  function Coin(options) {
    _classCallCheck(this, Coin);

    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    this.ticksPerFrame = options.ticksPerFrame || 0;
    this.numberOfFrames = options.numberOfFrames || 1;
    this.gameSpeed = options.gameSpeed;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.dx = -this.gameSpeed;
    this.image = new Image();
    this.image.src = './images/coin.png';
    this.audioObj = new Audio('./sound/coin2.mp3');
  }

  _createClass(Coin, [{
    key: "update",
    value: function update() {
      this.x += this.dx;
      this.tickCount++;

      if (this.tickCount > this.ticksPerFrame) {
        this.tickCount = 0;

        if (this.frameIndex < this.numberOfFrames - 1) {
          this.frameIndex++;
        } else {
          this.frameIndex = 0;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(this.image, this.frameIndex * this.width / this.numberOfFrames, 0, this.width / this.numberOfFrames, this.height, this.x, this.y, this.width / this.numberOfFrames, this.height);
    }
  }, {
    key: "playCoinSound",
    value: function playCoinSound() {
      this.audioObj.play();
    }
  }, {
    key: "start",
    value: function start() {
      this.update();
      this.render();
    }
  }]);

  return Coin;
}();



/***/ }),

/***/ "./src/game-sound.js":
/*!***************************!*\
  !*** ./src/game-sound.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ GameSound
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable linebreak-style */
var GameSound = /*#__PURE__*/function () {
  function GameSound() {
    _classCallCheck(this, GameSound);

    // this.url = window.gameState.soundUrl;
    // this.num = 1;
    this.fonSound = new Audio('sound/fon1.mp3');
    document.body.appendChild(this.fonSound);
    this.fonSound.volume = 0.1;
    this.deadSound = new Audio('sound/dead.mp3');
    document.body.appendChild(this.deadSound);
  }

  _createClass(GameSound, [{
    key: "playFon",
    value: function playFon() {
      this.fonSound.loop = true;
      this.fonSound.play();
    }
  }, {
    key: "stopFon",
    value: function stopFon() {
      this.fonSound.pause();
    }
  }, {
    key: "playDead",
    value: function playDead() {
      this.deadSound.play();
    }
  }]);

  return GameSound;
}();



/***/ }),

/***/ "./src/get_coin.js":
/*!*************************!*\
  !*** ./src/get_coin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getCoin
/* harmony export */ });
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _coin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coin */ "./src/coin.js");




var coin;
var coins = [];
function getCoin() {
  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % 200 == 0) {
    coin = new _coin__WEBPACK_IMPORTED_MODULE_2__.default({
      x: _index__WEBPACK_IMPORTED_MODULE_1__.canvas.width,
      y: 350,
      width: 504,
      height: 84,
      numberOfFrames: 6,
      ticksPerFrame: 4,
      gameSpeed: _start_game__WEBPACK_IMPORTED_MODULE_0__.gameSpeed
    });
    coins.push(coin);
  }

  if (coins.length > 0) {
    coins.forEach(function (coin) {
      coin.start();

      if (_start_game__WEBPACK_IMPORTED_MODULE_0__.player.dx < coin.x + coin.width && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.dx + _start_game__WEBPACK_IMPORTED_MODULE_0__.player.width / 10 - 10 > coin.x && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.y < coin.y + coin.height && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.y + _start_game__WEBPACK_IMPORTED_MODULE_0__.player.height >= coin.y) {
        coin.y = 10000;
        coin.playCoinSound();
      }

      if (coin.x < -50) {
        coin.y = 10000;
      }
    });
  }
}

/***/ }),

/***/ "./src/get_platform.js":
/*!*****************************!*\
  !*** ./src/get_platform.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getPlatform
/* harmony export */ });
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");
/* harmony import */ var _spawn_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spawn_platform */ "./src/spawn_platform.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Platform */ "./src/Platform.js");




var platform;
var platforms = [];
function getPlatform() {
  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % 300 === 0) {
    platform = new _Platform__WEBPACK_IMPORTED_MODULE_3__.default({
      x: _index__WEBPACK_IMPORTED_MODULE_2__.canvas.width,
      y: _index__WEBPACK_IMPORTED_MODULE_2__.canvas.height,
      flightAltitude: 250,
      width: 495,
      height: 115,
      gameSpeed: _start_game__WEBPACK_IMPORTED_MODULE_0__.gameSpeed,
      imageSrc: 'images/platforma1.png'
    });
    platforms.push(platform);
  }

  if (platforms) {
    platforms.map(function (platform) {
      platform.update();

      if (_start_game__WEBPACK_IMPORTED_MODULE_0__.player.dx > platform.x && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.dx < platform.x + platform.width - 40 && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.y < _index__WEBPACK_IMPORTED_MODULE_2__.canvas.height - platform.flightAltitude) {
        _start_game__WEBPACK_IMPORTED_MODULE_0__.player.test = _index__WEBPACK_IMPORTED_MODULE_2__.canvas.height - platform.flightAltitude + 2;
      } else {
        _start_game__WEBPACK_IMPORTED_MODULE_0__.player.test = _index__WEBPACK_IMPORTED_MODULE_2__.canvas.height;
      }
    });
  } // if(platform) {
  //   platform.update();
  //   console.log(platform);
  //   if (platform.x + platform.width < 0){
  //     platform.x = 100000;
  //   }
  //   if(
  //     player.x > platform.x
  //     && player.y < canvas.height - platform.flightAltitude
  //     )
  //     {
  //       player.test = canvas.height - platform.flightAltitude + 2
  //     } else {
  //       player.test = canvas.height;
  //     }
  // }
  // platforms.push(platform);

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
}

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Hero
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");
/* harmony import */ var _player_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player-sound */ "./src/player-sound.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Hero = /*#__PURE__*/function () {
  function Hero(options) {
    _classCallCheck(this, Hero);

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
    this.isLeft = false; // platform

    this.test = options.test;
    this.sound = new _player_sound__WEBPACK_IMPORTED_MODULE_2__.default();
  }

  _createClass(Hero, [{
    key: "update",
    value: function update() {
      this.tickCount++;

      if (this.tickCount > this.ticksPerFrame) {
        this.tickCount = 0;

        if (this.frameIndex < this.numberOfFrames - 1) {
          this.frameIndex++;
        } else {
          this.frameIndex = 0;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(this.image, this.frameIndex * this.width / this.numberOfFrames, this.sx, this.width / this.numberOfFrames, this.height, this.dx, this.y, this.width / this.numberOfFrames, this.height);
    } // gravity
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

  }, {
    key: "gravityGo",
    value: function gravityGo() {
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
        this.numberOfFrames = 6;

        if (this.isLeft) {
          this.sx = 100;
        } else {
          this.sx = 0;
        }

        this.y = this.test - this.height;
      }
    } // jump

  }, {
    key: "getReadyToJump",
    value: function getReadyToJump() {
      if (_start_game__WEBPACK_IMPORTED_MODULE_1__.keys.Space || _start_game__WEBPACK_IMPORTED_MODULE_1__.keys.KeyW) {
        this.sound.jumpUp();
        this.Jump();
      } else {
        this.jumpTimer = 0;
      }

      if (_start_game__WEBPACK_IMPORTED_MODULE_1__.keys.KeyM) {
        if (this.dx < _index__WEBPACK_IMPORTED_MODULE_0__.canvas.width - 100) this.dx += 5;
        this.sx = 0;
        this.isLeft = false;
        this.numberOfFrames = 6;
      }

      if (_start_game__WEBPACK_IMPORTED_MODULE_1__.keys.KeyN) {
        if (this.dx > 0) this.dx -= 5;
        this.sx = 100;
        this.isLeft = true;
        this.numberOfFrames = 6;
      }
    }
  }, {
    key: "Jump",
    value: function Jump() {
      if (this.grounded && this.jumpTimer === 0) {
        this.jumpTimer = 1;
        this.dy = -this.jumpForce;
        this.sound.jumpDown();
      } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
        this.jumpTimer++;
        this.dy = -this.jumpForce - this.jumpTimer / 50;
        this.numberOfFrames = 1;

        if (this.isLeft) {
          this.sx = 200;
        } else {
          this.sx = 500;
        }
      }
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      var loop = function loop() {
        _this.update();

        _this.render();

        _this.gravityGo();

        _this.getReadyToJump();

        window.requestAnimationFrame(loop);
      };

      window.requestAnimationFrame(loop);
    }
  }]);

  return Hero;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canvas": () => /* binding */ canvas,
/* harmony export */   "ctx": () => /* binding */ ctx
/* harmony export */ });
/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obstacle */ "./src/obstacle.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./src/text.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");
// import { Hero } from './hero';


 // let keys = {};

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d'); // window.gameState = {
//   soundUrl: '.././dist/sound/',
//   imgUrl: '.././dist/img/',
//   isFonSound: true,
//   isPlayerSound: true,
//   set isStartGame(value) {
//     Start();
//   },
// };
// document.addEventListener('keydown', (e) => {
//   keys[e.code] = true;
// });
//
// document.addEventListener('keyup', (e) => {
//   keys[e.code] = false;
// });

(0,_start_game__WEBPACK_IMPORTED_MODULE_2__.start)(); // export {canvas, ctx, keys}



/***/ }),

/***/ "./src/obstacle.js":
/*!*************************!*\
  !*** ./src/obstacle.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Obstacle
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Obstacle = /*#__PURE__*/function () {
  function Obstacle(options) {
    _classCallCheck(this, Obstacle);

    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    this.gameSpeed = options.gameSpeed;
    this.dx = -this.gameSpeed;
    this.image = new Image();
    this.image.src = options.imageSrc;
  }

  _createClass(Obstacle, [{
    key: "Update",
    value: function Update() {
      this.x += this.dx;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(this.image, this.x, _index_js__WEBPACK_IMPORTED_MODULE_0__.canvas.height - 55);
    }
  }]);

  return Obstacle;
}();



/***/ }),

/***/ "./src/player-sound.js":
/*!*****************************!*\
  !*** ./src/player-sound.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PlayerSound
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable linebreak-style */
var PlayerSound = /*#__PURE__*/function () {
  function PlayerSound() {
    _classCallCheck(this, PlayerSound);

    // this.url = window.gameState.soundUrl;
    this.soundUp = new Audio('sound/jumpUp.mp3');
    document.body.appendChild(this.soundUp);
    this.soundDown = new Audio('sound/gravityDown.mp3');
    document.body.appendChild(this.soundDown);
    this.isGravityDown = false;
    this.isJumpUp = false;
  }

  _createClass(PlayerSound, [{
    key: "jumpUp",
    value: function jumpUp() {
      if (!this.isJumpUp) {
        this.soundUp.play();
        this.isJumpUp = true;
      }
    }
  }, {
    key: "jumpDown",
    value: function jumpDown() {
      this.soundUp.pause();
      this.soundUp.currentTime = 0.0;
      this.isJumpUp = false;
    }
  }, {
    key: "gravityDown",
    value: function gravityDown() {
      if (!this.isGravityDown) {
        this.soundDown.play();
        this.isGravityDown = true;
      }
    }
  }, {
    key: "gravityUp",
    value: function gravityUp() {
      this.soundDown.pause();
      this.soundDown.currentTime = 0.0;
      this.isGravityDown = false;
    }
  }]);

  return PlayerSound;
}();



/***/ }),

/***/ "./src/snow_flakes.js":
/*!****************************!*\
  !*** ./src/snow_flakes.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSnowFlakes": () => /* binding */ createSnowFlakes,
/* harmony export */   "updateSnowFall": () => /* binding */ updateSnowFall
/* harmony export */ });
var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');
var particlesOnScreen = 245;
var w, h;
var particlesArray = [];
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;

function random(min, max) {
  return min + Math.random() * (max - min + 1);
}

function clientResize(ev) {
  w = canvas.width;
  h = canvas.height;
}

window.addEventListener('resize', clientResize); // createSnowFlakes();

function createSnowFlakes() {
  for (var i = 0; i < particlesOnScreen; i++) {
    particlesArray.push({
      x: Math.random() * w,
      y: Math.random() * h,
      opacity: Math.random(),
      speedX: random(-1, 1),
      speedY: random(1, 2),
      radius: random(0.5, 4.2)
    });
  }
}

function drawSnowFlakes() {
  for (var i = 0; i < particlesArray.length; i++) {
    var gradient = ctx.createRadialGradient(particlesArray[i].x, particlesArray[i].y, 0, particlesArray[i].x, particlesArray[i].y, particlesArray[i].radius);
    gradient.addColorStop(0, "rgba(30, 144, 255, ".concat(particlesArray[i].opacity, ")"));
    gradient.addColorStop(0.8, "rgba(100, 149, 237, ".concat(particlesArray[i].opacity, ")"));
    gradient.addColorStop(1, "rgba(65, 105, 225, ".concat(particlesArray[i].opacity, ")"));
    ctx.beginPath();
    ctx.arc(particlesArray[i].x, particlesArray[i].y, particlesArray[i].radius, 0, Math.PI * 2, false);
    ctx.fillStyle = gradient;
    ctx.fill();
  }
}

function moveSnowFlakes() {
  for (var i = 0; i < particlesArray.length; i++) {
    particlesArray[i].x += particlesArray[i].speedX;
    particlesArray[i].y += particlesArray[i].speedY;

    if (particlesArray[i].y > h) {
      particlesArray[i].x = Math.random() * w * 1.5;
      particlesArray[i].y = -50;
    }
  }
}

function updateSnowFall() {
  ctx.clearRect(0, 0, w, h);
  drawSnowFlakes();
  moveSnowFlakes();
}



/***/ }),

/***/ "./src/spawn_obstacle.js":
/*!*******************************!*\
  !*** ./src/spawn_obstacle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpawnObstacle": () => /* binding */ SpawnObstacle
/* harmony export */ });
/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obstacle */ "./src/obstacle.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");

 // import {gameSpeed, player, obstacles} from './start_game';



function SpawnObstacle() {
  // let size = RandomIntRange(20, 70);
  var type = RandomIntRange(3, 4);
  var obstacle = new _obstacle__WEBPACK_IMPORTED_MODULE_0__.default({
    x: _index__WEBPACK_IMPORTED_MODULE_1__.canvas.width,
    y: _index__WEBPACK_IMPORTED_MODULE_1__.canvas.height,
    width: 50,
    height: 50,
    gameSpeed: _start_game__WEBPACK_IMPORTED_MODULE_2__.gameSpeed,
    imageSrc: "images/obstacle".concat(type, ".png")
  });
  _start_game__WEBPACK_IMPORTED_MODULE_2__.obstacles.push(obstacle);
}

function RandomIntRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}



/***/ }),

/***/ "./src/spawn_platform.js":
/*!*******************************!*\
  !*** ./src/spawn_platform.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ spawnPlatform
/* harmony export */ });
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Platform */ "./src/Platform.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");

 // import {platformsBig, platformsMedium} from './get_platform';


function spawnPlatform(options) {
  var platformOne = new _Platform__WEBPACK_IMPORTED_MODULE_0__.default({
    x: _index__WEBPACK_IMPORTED_MODULE_1__.canvas.width,
    y: _index__WEBPACK_IMPORTED_MODULE_1__.canvas.height,
    flightAltitude: options.flightAltitude,
    width: options.width,
    height: options.height,
    gameSpeed: _start_game__WEBPACK_IMPORTED_MODULE_2__.gameSpeed,
    imageSrc: options.src
  }); // options.platform.push(platformOne);

  return platformOne;
}

/***/ }),

/***/ "./src/start_game.js":
/*!***************************!*\
  !*** ./src/start_game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "start": () => /* binding */ start,
/* harmony export */   "gameSpeed": () => /* binding */ gameSpeed,
/* harmony export */   "obstacles": () => /* binding */ obstacles,
/* harmony export */   "keys": () => /* binding */ keys,
/* harmony export */   "score": () => /* binding */ score,
/* harmony export */   "player": () => /* binding */ player,
/* harmony export */   "coins": () => /* binding */ coins
/* harmony export */ });
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ "./src/hero.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./src/text.js");
/* harmony import */ var _spawn_obstacle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spawn_obstacle */ "./src/spawn_obstacle.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _snow_flakes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snow_flakes */ "./src/snow_flakes.js");
/* harmony import */ var _game_sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-sound */ "./src/game-sound.js");
/* harmony import */ var _get_coin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get_coin */ "./src/get_coin.js");
/* harmony import */ var _get_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get_platform */ "./src/get_platform.js");








var gravity;
var score;
var highScore;
var scoreText;
var hightScoreText;
var gameSpeed;
var player;
var obstacles = [];
var coins = [];
var keys = {};
var coinImage;
var jumpTrue = false; // let coin;

var playSound = new _game_sound__WEBPACK_IMPORTED_MODULE_5__.default();

function start() {
  _index__WEBPACK_IMPORTED_MODULE_3__.canvas.width = window.innerWidth;
  _index__WEBPACK_IMPORTED_MODULE_3__.canvas.height = window.innerHeight - 205;
  document.addEventListener('keydown', function (e) {
    keys[e.code] = true;
  });
  document.addEventListener('keyup', function (e) {
    keys[e.code] = false;
  });
  _index__WEBPACK_IMPORTED_MODULE_3__.ctx.font = '20px sans-serif';
  gameSpeed = 3;
  gravity = 1;
  score = 0;
  highScore = 0;

  if (localStorage.getItem('highscore')) {
    highScore = localStorage.getItem('highscore');
  }

  coinImage = new Image();
  coinImage.src = 'images/sprite2.png';
  player = new _hero__WEBPACK_IMPORTED_MODULE_0__.default({
    image: coinImage,
    width: 600,
    height: 100,
    numberOfFrames: 6,
    ticksPerFrame: 4,
    x: 50,
    y: 50,
    test: _index__WEBPACK_IMPORTED_MODULE_3__.canvas.height
  });

  window.onload = function () {
    player.start(); // coin.start();
  }; // coin = getCoin();
  // coin.start()
  // console.log(coin)


  scoreText = new _text__WEBPACK_IMPORTED_MODULE_1__.Text("Score: ".concat(score), 25, 25, 'left', '#212121', '20');
  hightScoreText = new _text__WEBPACK_IMPORTED_MODULE_1__.Text("Highscore: ".concat(highScore), _index__WEBPACK_IMPORTED_MODULE_3__.canvas.width - 25, 25, 'right', '#212121', '20');
  (0,_snow_flakes__WEBPACK_IMPORTED_MODULE_4__.createSnowFlakes)(); // playSound.playFon();

  requestAnimationFrame(Update);
}

var initialSpawnTimer = 200;
var spawnTimer = initialSpawnTimer;

function Update() {
  requestAnimationFrame(Update);
  _index__WEBPACK_IMPORTED_MODULE_3__.ctx.clearRect(0, 0, _index__WEBPACK_IMPORTED_MODULE_3__.canvas.width, _index__WEBPACK_IMPORTED_MODULE_3__.canvas.height); // выключить фоновую музыку

  if (keys.KeyQ) {
    // window.gameState.isFonSound = false;
    playSound.stopFon();
  } // включить фоновую музыку


  if (keys.KeyA) {
    // window.gameState.isFonSound = true;
    playSound.playFon();
  } // spawn obstacles


  spawnTimer -= 1;

  if (spawnTimer <= 0) {
    (0,_spawn_obstacle__WEBPACK_IMPORTED_MODULE_2__.SpawnObstacle)();
    spawnTimer = initialSpawnTimer - gameSpeed * 8;

    if (spawnTimer < 60) {
      spawnTimer = 60;
    }
  } // spawn coin
  // spawnCoin();


  (0,_snow_flakes__WEBPACK_IMPORTED_MODULE_4__.updateSnowFall)(); // spawn enemies

  for (var i = 0; i < obstacles.length; i += 1) {
    var o = obstacles[i];

    if (o.x + o.width < 0) {
      obstacles.splice(i, 1);
    } // перезагрузка игры при столкновении


    if (player.dx < o.x + o.width && player.dx + player.width / 10 - 10 > o.x && player.y < o.y + o.height && player.y + player.height >= o.y) {
      playSound.playDead();
      obstacles = [];
      gameSpeed = 3;
      score = 0;
      spawnTimer = initialSpawnTimer;
      window.localStorage.setItem('highscore', highScore);
    }

    o.Update();
  }

  score += 1;
  scoreText.t = "Score: ".concat(score);
  scoreText.Draw();

  if (score > highScore) {
    highScore = score;
    hightScoreText.t = "Highscore: ".concat(highScore);
  }

  gameSpeed += 0.003;
  hightScoreText.Draw(); // spawn platform

  (0,_get_platform__WEBPACK_IMPORTED_MODULE_7__.default)(); // spawn coin

  (0,_get_coin__WEBPACK_IMPORTED_MODULE_6__.default)();
}



/***/ }),

/***/ "./src/text.js":
/*!*********************!*\
  !*** ./src/text.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Text": () => /* binding */ Text
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Text = /*#__PURE__*/function () {
  function Text(t, x, y, a, c, s) {
    _classCallCheck(this, Text);

    this.t = t;
    this.x = x;
    this.y = y;
    this.a = a;
    this.c = c;
    this.s = s;
  }

  _createClass(Text, [{
    key: "Draw",
    value: function Draw() {
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = this.c;
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.font = "".concat(this.s, "px sans-serif");
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.textAlign = this.a;
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(this.t, this.x, this.y);
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.closePath();
    }
  }]);

  return Text;
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL1BsYXRmb3JtLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvY29pbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dhbWUtc291bmQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9nZXRfY29pbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dldF9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2hlcm8uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL29ic3RhY2xlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGxheWVyLXNvdW5kLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvc25vd19mbGFrZXMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9zcGF3bl9vYnN0YWNsZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3NwYXduX3BsYXRmb3JtLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvc3RhcnRfZ2FtZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3RleHQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIlBsYXRmb3JtIiwib3B0aW9ucyIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJmbGlnaHRBbHRpdHVkZSIsImdhbWVTcGVlZCIsImR4IiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsImltYWdlU3JjIiwicmVuZGVyIiwiY3R4IiwiY2FudmFzIiwiQ29pbiIsInRpY2tzUGVyRnJhbWUiLCJudW1iZXJPZkZyYW1lcyIsImZyYW1lSW5kZXgiLCJ0aWNrQ291bnQiLCJhdWRpb09iaiIsIkF1ZGlvIiwicGxheSIsInVwZGF0ZSIsIkdhbWVTb3VuZCIsImZvblNvdW5kIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2b2x1bWUiLCJkZWFkU291bmQiLCJsb29wIiwicGF1c2UiLCJjb2luIiwiY29pbnMiLCJnZXRDb2luIiwic2NvcmUiLCJwdXNoIiwibGVuZ3RoIiwiZm9yRWFjaCIsInN0YXJ0IiwicGxheWVyIiwicGxheUNvaW5Tb3VuZCIsInBsYXRmb3JtIiwicGxhdGZvcm1zIiwiZ2V0UGxhdGZvcm0iLCJtYXAiLCJnZXRSYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwicmFuZG9tIiwiSGVybyIsImR5Iiwic3giLCJqdW1wRm9yY2UiLCJncm91bmRlZCIsImp1bXBUaW1lciIsImdyYXZpdHkiLCJpc0xlZnQiLCJ0ZXN0Iiwic291bmQiLCJQbGF5ZXJTb3VuZCIsImtleXMiLCJqdW1wVXAiLCJKdW1wIiwianVtcERvd24iLCJncmF2aXR5R28iLCJnZXRSZWFkeVRvSnVtcCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwiT2JzdGFjbGUiLCJzb3VuZFVwIiwic291bmREb3duIiwiaXNHcmF2aXR5RG93biIsImlzSnVtcFVwIiwiY3VycmVudFRpbWUiLCJwYXJ0aWNsZXNPblNjcmVlbiIsInciLCJoIiwicGFydGljbGVzQXJyYXkiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRSZXNpemUiLCJldiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVTbm93Rmxha2VzIiwiaSIsIm9wYWNpdHkiLCJzcGVlZFgiLCJzcGVlZFkiLCJyYWRpdXMiLCJkcmF3U25vd0ZsYWtlcyIsImdyYWRpZW50IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJtb3ZlU25vd0ZsYWtlcyIsInVwZGF0ZVNub3dGYWxsIiwiY2xlYXJSZWN0IiwiU3Bhd25PYnN0YWNsZSIsInR5cGUiLCJSYW5kb21JbnRSYW5nZSIsIm9ic3RhY2xlIiwib2JzdGFjbGVzIiwicm91bmQiLCJzcGF3blBsYXRmb3JtIiwicGxhdGZvcm1PbmUiLCJoaWdoU2NvcmUiLCJzY29yZVRleHQiLCJoaWdodFNjb3JlVGV4dCIsImNvaW5JbWFnZSIsImp1bXBUcnVlIiwicGxheVNvdW5kIiwiZSIsImNvZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25sb2FkIiwiVGV4dCIsIlVwZGF0ZSIsImluaXRpYWxTcGF3blRpbWVyIiwic3Bhd25UaW1lciIsIktleVEiLCJzdG9wRm9uIiwiS2V5QSIsInBsYXlGb24iLCJvIiwic3BsaWNlIiwicGxheURlYWQiLCJzZXRJdGVtIiwidCIsIkRyYXciLCJhIiwiYyIsInMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUdxQkEsUTtBQUNuQixvQkFBYUMsT0FBYixFQUFzQjtBQUFBOztBQUNwQixTQUFLQyxDQUFMLEdBQVNELE9BQU8sQ0FBQ0MsQ0FBakI7QUFDQSxTQUFLQyxDQUFMLEdBQVNGLE9BQU8sQ0FBQ0UsQ0FBakI7QUFDQSxTQUFLQyxLQUFMLEdBQWFILE9BQU8sQ0FBQ0csS0FBckI7QUFDQSxTQUFLQyxNQUFMLEdBQWNKLE9BQU8sQ0FBQ0ksTUFBdEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCTCxPQUFPLENBQUNLLGNBQTlCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQk4sT0FBTyxDQUFDTSxTQUF6QjtBQUVBLFNBQUtDLEVBQUwsR0FBVSxDQUFDLEtBQUtELFNBQWhCO0FBRUEsU0FB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ckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Ii4vanMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9pbmRleC5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm0ge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICB0aGlzLmZsaWdodEFsdGl0dWRlID0gb3B0aW9ucy5mbGlnaHRBbHRpdHVkZTtcbiAgICB0aGlzLmdhbWVTcGVlZCA9IG9wdGlvbnMuZ2FtZVNwZWVkO1xuXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IG9wdGlvbnMuaW1hZ2VTcmM7XG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICB0aGlzLngsXG4gICAgICBjYW52YXMuaGVpZ2h0IC0gdGhpcy5mbGlnaHRBbHRpdHVkZSxcbiAgICApXG4gIH1cblxuICAvLyBzdGFydCgpIHtcbiAgLy8gICBsZXQgbG9vcCA9ICgpID0+IHtcbiAgLy8gICAgIHRoaXMudXBkYXRlKCk7XG4gIC8vICAgICB0aGlzLnJlbmRlcigpO1xuXG4gIC8vICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAvLyAgIH1cblxuICAvLyAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gIC8vIH1cbn1cblxuXG5cbiIsImltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luIHtcblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICBcbiAgICB0aGlzLnRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMDtcbiAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gb3B0aW9ucy5udW1iZXJPZkZyYW1lcyB8fCAxO1xuXG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgdGhpcy50aWNrQ291bnQgPSAwO1xuXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9ICcuL2ltYWdlcy9jb2luLnBuZyc7XG5cbiAgICB0aGlzLmF1ZGlvT2JqID0gbmV3IEF1ZGlvKCcuL3NvdW5kL2NvaW4yLm1wMycpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuXG4gICAgdGhpcy50aWNrQ291bnQrKztcblxuICAgIGlmICh0aGlzLnRpY2tDb3VudCA+IHRoaXMudGlja3NQZXJGcmFtZSkge1xuICAgICAgdGhpcy50aWNrQ291bnQgPSAwO1xuICAgICAgaWYgKHRoaXMuZnJhbWVJbmRleCA8IHRoaXMubnVtYmVyT2ZGcmFtZXMgLSAxKSB7XG4gICAgICAgICAgdGhpcy5mcmFtZUluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5mcmFtZUluZGV4ICogdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICAwLFxuICAgICAgdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMueCxcbiAgICAgIHRoaXMueSxcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgdGhpcy5oZWlnaHRcbiAgICApXG4gIH1cblxuICBwbGF5Q29pblNvdW5kKCkge1xuICAgIHRoaXMuYXVkaW9PYmoucGxheSgpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG59IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU291bmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGhpcy51cmwgPSB3aW5kb3cuZ2FtZVN0YXRlLnNvdW5kVXJsO1xyXG4gICAgLy8gdGhpcy5udW0gPSAxO1xyXG4gICAgdGhpcy5mb25Tb3VuZCA9IG5ldyBBdWRpbygnc291bmQvZm9uMS5tcDMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5mb25Tb3VuZCk7XHJcbiAgICB0aGlzLmZvblNvdW5kLnZvbHVtZSA9IDAuMTtcclxuICAgIHRoaXMuZGVhZFNvdW5kID0gbmV3IEF1ZGlvKCdzb3VuZC9kZWFkLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRlYWRTb3VuZCk7XHJcbiAgfVxyXG5cclxuICBwbGF5Rm9uKCkge1xyXG4gICAgdGhpcy5mb25Tb3VuZC5sb29wID0gdHJ1ZTtcclxuICAgIHRoaXMuZm9uU291bmQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgc3RvcEZvbigpIHtcclxuICAgIHRoaXMuZm9uU291bmQucGF1c2UoKTtcclxuICB9XHJcblxyXG4gIHBsYXlEZWFkKCkge1xyXG4gICAgdGhpcy5kZWFkU291bmQucGxheSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge3Njb3JlLCBwbGF5ZXIgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuaW1wb3J0IHtjYW52YXN9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IENvaW4gZnJvbSAnLi9jb2luJztcbmltcG9ydCB7Z2FtZVNwZWVkfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuXG5sZXQgY29pbjtcbmxldCBjb2lucyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb2luICgpIHtcblxuICBpZihzY29yZSAlIDIwMCA9PSAwKSB7IFxuXG4gICAgY29pbiA9IG5ldyBDb2luKHtcbiAgICAgIHg6IGNhbnZhcy53aWR0aCxcbiAgICAgIHk6IDM1MCxcbiAgICAgIHdpZHRoOiA1MDQsXG4gICAgICBoZWlnaHQ6IDg0LFxuICAgICAgbnVtYmVyT2ZGcmFtZXM6IDYsXG4gICAgICB0aWNrc1BlckZyYW1lOiA0LFxuICAgICAgZ2FtZVNwZWVkOiBnYW1lU3BlZWQsXG4gICAgfSk7XG5cbiAgICBjb2lucy5wdXNoKGNvaW4pO1xuICB9XG5cblxuICBpZihjb2lucy5sZW5ndGggPiAwKSB7XG5cbiAgICBjb2lucy5mb3JFYWNoKGNvaW4gPT4ge1xuICAgICAgY29pbi5zdGFydCgpO1xuICAgICAgXG4gICAgICBpZiAoXG4gICAgICAgIHBsYXllci5keCA8IGNvaW4ueCArIGNvaW4ud2lkdGggJiZcbiAgICAgICAgcGxheWVyLmR4ICsgKHBsYXllci53aWR0aCAvIDEwKSAtIDEwID4gY29pbi54ICYmXG4gICAgICAgIHBsYXllci55IDwgY29pbi55ICsgY29pbi5oZWlnaHQgJiZcbiAgICAgICAgcGxheWVyLnkgKyBwbGF5ZXIuaGVpZ2h0ID49IGNvaW4ueVxuICAgICAgKSB7XG4gICAgICAgIFxuICAgICAgICBjb2luLnkgPSAxMDAwMDtcbiAgICAgICAgY29pbi5wbGF5Q29pblNvdW5kKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2luLnggPCAtNTApIHsgXG4gICAgICAgIGNvaW4ueSA9IDEwMDAwO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBzY29yZSwgcGxheWVyLCBnYW1lU3BlZWQgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuaW1wb3J0IHNwYXduUGxhdGZvcm0gZnJvbSAnLi9zcGF3bl9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBQbGF0Zm9ybSBmcm9tICcuL1BsYXRmb3JtJztcblxubGV0IHBsYXRmb3JtO1xuY29uc3QgcGxhdGZvcm1zID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBsYXRmb3JtKCkge1xuICBpZiAoc2NvcmUgJSAzMDAgPT09IDApIHtcbiAgICBwbGF0Zm9ybSA9IG5ldyBQbGF0Zm9ybSh7XG4gICAgICB4OiBjYW52YXMud2lkdGgsXG4gICAgICB5OiBjYW52YXMuaGVpZ2h0LFxuICAgICAgZmxpZ2h0QWx0aXR1ZGU6IDI1MCxcbiAgICAgIHdpZHRoOiA0OTUsXG4gICAgICBoZWlnaHQ6IDExNSxcbiAgICAgIGdhbWVTcGVlZCxcbiAgICAgIGltYWdlU3JjOiAnaW1hZ2VzL3BsYXRmb3JtYTEucG5nJyxcbiAgICB9KTtcblxuICAgIHBsYXRmb3Jtcy5wdXNoKHBsYXRmb3JtKTtcbiAgfVxuXG4gIGlmIChwbGF0Zm9ybXMpIHtcbiAgICBwbGF0Zm9ybXMubWFwKChwbGF0Zm9ybSkgPT4ge1xuICAgICAgcGxhdGZvcm0udXBkYXRlKCk7XG4gICAgICBpZiAoXG4gICAgICAgIChwbGF5ZXIuZHggPiBwbGF0Zm9ybS54ICYmIHBsYXllci5keCA8IHBsYXRmb3JtLnggKyBwbGF0Zm9ybS53aWR0aCAtIDQwKVxuICAgICAgICAmJiBwbGF5ZXIueSA8IGNhbnZhcy5oZWlnaHQgLSBwbGF0Zm9ybS5mbGlnaHRBbHRpdHVkZVxuICAgICAgKSB7XG4gICAgICAgIHBsYXllci50ZXN0ID0gY2FudmFzLmhlaWdodCAtIHBsYXRmb3JtLmZsaWdodEFsdGl0dWRlICsgMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllci50ZXN0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIGlmKHBsYXRmb3JtKSB7XG4gIC8vICAgcGxhdGZvcm0udXBkYXRlKCk7XG4gIC8vICAgY29uc29sZS5sb2cocGxhdGZvcm0pO1xuXG4gIC8vICAgaWYgKHBsYXRmb3JtLnggKyBwbGF0Zm9ybS53aWR0aCA8IDApe1xuICAvLyAgICAgcGxhdGZvcm0ueCA9IDEwMDAwMDtcbiAgLy8gICB9XG5cbiAgLy8gICBpZihcbiAgLy8gICAgIHBsYXllci54ID4gcGxhdGZvcm0ueFxuICAvLyAgICAgJiYgcGxheWVyLnkgPCBjYW52YXMuaGVpZ2h0IC0gcGxhdGZvcm0uZmxpZ2h0QWx0aXR1ZGVcbiAgLy8gICAgIClcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgcGxheWVyLnRlc3QgPSBjYW52YXMuaGVpZ2h0IC0gcGxhdGZvcm0uZmxpZ2h0QWx0aXR1ZGUgKyAyXG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICBwbGF5ZXIudGVzdCA9IGNhbnZhcy5oZWlnaHQ7XG4gIC8vICAgICB9XG5cbiAgLy8gfVxuXG4gIC8vIHBsYXRmb3Jtcy5wdXNoKHBsYXRmb3JtKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47IC8vINCc0LDQutGB0LjQvNGD0Lwg0L3QtSDQstC60LvRjtGH0LDQtdGC0YHRjywg0LzQuNC90LjQvNGD0Lwg0LLQutC70Y7Rh9Cw0LXRgtGB0Y9cbn1cbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBrZXlzIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcbmltcG9ydCBQbGF5ZXJTb3VuZCBmcm9tICcuL3BsYXllci1zb3VuZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm8ge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5pbWFnZSA9IG9wdGlvbnMuaW1hZ2U7XG5cbiAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgIHRoaXMudGlja0NvdW50ID0gMDtcbiAgICB0aGlzLnRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMDtcbiAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gb3B0aW9ucy5udW1iZXJPZkZyYW1lcyB8fCAxO1xuXG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcblxuICAgIHRoaXMuZHkgPSBvcHRpb25zLmR5IHx8IDA7XG4gICAgdGhpcy5keCA9IDA7XG4gICAgdGhpcy5zeCA9IDA7XG4gICAgdGhpcy5qdW1wRm9yY2UgPSAxNTtcbiAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5qdW1wVGltZXIgPSAwO1xuXG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLmdyYXZpdHkgPSAxO1xuXG4gICAgdGhpcy5pc0xlZnQgPSBmYWxzZTtcblxuICAgIC8vIHBsYXRmb3JtXG4gICAgdGhpcy50ZXN0ID0gb3B0aW9ucy50ZXN0O1xuXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBQbGF5ZXJTb3VuZCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudGlja0NvdW50Kys7XG5cbiAgICBpZiAodGhpcy50aWNrQ291bnQgPiB0aGlzLnRpY2tzUGVyRnJhbWUpIHtcbiAgICAgIHRoaXMudGlja0NvdW50ID0gMDtcbiAgICAgIGlmICh0aGlzLmZyYW1lSW5kZXggPCB0aGlzLm51bWJlck9mRnJhbWVzIC0gMSkge1xuICAgICAgICB0aGlzLmZyYW1lSW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5mcmFtZUluZGV4ICogdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICB0aGlzLnN4LFxuICAgICAgdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMuZHgsXG4gICAgICB0aGlzLnksXG4gICAgICB0aGlzLndpZHRoIC8gdGhpcy5udW1iZXJPZkZyYW1lcyxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICk7XG4gIH1cblxuICAvLyBncmF2aXR5XG4gIC8vIGdyYXZpdHlHbygpIHtcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnRlc3QpXG4gIC8vICAgdGhpcy55ICs9IHRoaXMuZHk7XG5cbiAgLy8gICBpZiAodGhpcy55ICsgdGhpcy5oZWlnaHQgPCBjYW52YXMuaGVpZ2h0KSB7XG4gIC8vICAgICB0aGlzLmR5ICs9IHRoaXMuZ3Jhdml0eTtcbiAgLy8gICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgdGhpcy5keSA9IDA7XG4gIC8vICAgICB0aGlzLmdyb3VuZGVkID0gdHJ1ZTtcbiAgLy8gICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodDtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBncmF2aXR5R28oKSB7XG4gICAgdGhpcy55ICs9IHRoaXMuZHk7XG5cbiAgICBpZiAodGhpcy55ICsgdGhpcy5oZWlnaHQgPCB0aGlzLnRlc3QpIHtcbiAgICAgIHRoaXMuZHkgKz0gdGhpcy5ncmF2aXR5O1xuICAgICAgdGhpcy5ncm91bmRlZCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuZHkgPiAwKSB7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSAxO1xuICAgICAgICBpZiAodGhpcy5pc0xlZnQpIHtcbiAgICAgICAgICB0aGlzLnN4ID0gMzAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3ggPSA0MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5keSA9IDA7XG4gICAgICB0aGlzLmdyb3VuZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSA2O1xuICAgICAgaWYgKHRoaXMuaXNMZWZ0KSB7XG4gICAgICAgIHRoaXMuc3ggPSAxMDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN4ID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMueSA9IHRoaXMudGVzdCAtIHRoaXMuaGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGp1bXBcbiAgZ2V0UmVhZHlUb0p1bXAoKSB7XG4gICAgaWYgKGtleXMuU3BhY2UgfHwga2V5cy5LZXlXKSB7XG4gICAgICB0aGlzLnNvdW5kLmp1bXBVcCgpO1xuICAgICAgdGhpcy5KdW1wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuanVtcFRpbWVyID0gMDtcbiAgICB9XG4gICAgaWYgKGtleXMuS2V5TSkge1xuICAgICAgaWYgKHRoaXMuZHggPCBjYW52YXMud2lkdGggLSAxMDApIHRoaXMuZHggKz0gNTtcbiAgICAgIHRoaXMuc3ggPSAwO1xuICAgICAgdGhpcy5pc0xlZnQgPSBmYWxzZTtcbiAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSA2O1xuICAgIH1cbiAgICBpZiAoa2V5cy5LZXlOKSB7XG4gICAgICBpZiAodGhpcy5keCA+IDApIHRoaXMuZHggLT0gNTtcbiAgICAgIHRoaXMuc3ggPSAxMDA7XG4gICAgICB0aGlzLmlzTGVmdCA9IHRydWU7XG4gICAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gNjtcbiAgICB9XG4gIH1cblxuICBKdW1wKCkge1xuICAgIGlmICh0aGlzLmdyb3VuZGVkICYmIHRoaXMuanVtcFRpbWVyID09PSAwKSB7XG4gICAgICB0aGlzLmp1bXBUaW1lciA9IDE7XG4gICAgICB0aGlzLmR5ID0gLXRoaXMuanVtcEZvcmNlO1xuICAgICAgdGhpcy5zb3VuZC5qdW1wRG93bigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5qdW1wVGltZXIgPiAwICYmIHRoaXMuanVtcFRpbWVyIDwgMTUpIHtcbiAgICAgIHRoaXMuanVtcFRpbWVyKys7XG4gICAgICB0aGlzLmR5ID0gLXRoaXMuanVtcEZvcmNlIC0gKHRoaXMuanVtcFRpbWVyIC8gNTApO1xuICAgICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IDE7XG4gICAgICBpZiAodGhpcy5pc0xlZnQpIHtcbiAgICAgICAgdGhpcy5zeCA9IDIwMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3ggPSA1MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgdGhpcy5ncmF2aXR5R28oKTtcbiAgICAgIHRoaXMuZ2V0UmVhZHlUb0p1bXAoKTtcblxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICB9O1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgfVxufVxuIiwiLy8gaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7IE9ic3RhY2xlIH0gZnJvbSAnLi9vYnN0YWNsZSc7XHJcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuL3RleHQnO1xyXG5pbXBvcnQgeyBzdGFydCB9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XHJcblxyXG4vLyBsZXQga2V5cyA9IHt9O1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuLy8gd2luZG93LmdhbWVTdGF0ZSA9IHtcclxuLy8gICBzb3VuZFVybDogJy4uLy4vZGlzdC9zb3VuZC8nLFxyXG4vLyAgIGltZ1VybDogJy4uLy4vZGlzdC9pbWcvJyxcclxuLy8gICBpc0ZvblNvdW5kOiB0cnVlLFxyXG4vLyAgIGlzUGxheWVyU291bmQ6IHRydWUsXHJcbi8vICAgc2V0IGlzU3RhcnRHYW1lKHZhbHVlKSB7XHJcbi8vICAgICBTdGFydCgpO1xyXG4vLyAgIH0sXHJcbi8vIH07XHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuLy8gICBrZXlzW2UuY29kZV0gPSB0cnVlO1xyXG4vLyB9KTtcclxuLy9cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xyXG4vLyAgIGtleXNbZS5jb2RlXSA9IGZhbHNlO1xyXG4vLyB9KTtcclxuXHJcbnN0YXJ0KCk7XHJcblxyXG4vLyBleHBvcnQge2NhbnZhcywgY3R4LCBrZXlzfVxyXG5leHBvcnQgeyBjYW52YXMsIGN0eCB9O1xyXG4iLCJpbXBvcnQge2NhbnZhcywgY3R4fSBmcm9tICcuL2luZGV4LmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnN0YWNsZSB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgdGhpcy54ID0gb3B0aW9ucy54O1xuICAgIHRoaXMueSA9IG9wdGlvbnMueTtcbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICAgIHRoaXMuZ2FtZVNwZWVkID0gb3B0aW9ucy5nYW1lU3BlZWQ7XG5cbiAgICB0aGlzLmR4ID0gLXRoaXMuZ2FtZVNwZWVkO1xuXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW1hZ2Uuc3JjID0gb3B0aW9ucy5pbWFnZVNyYztcbiAgfVxuXG4gIFVwZGF0ZSAoKSB7XG4gICAgdGhpcy54ICs9IHRoaXMuZHg7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIHRoaXMueCxcbiAgICAgIGNhbnZhcy5oZWlnaHQgLSA1NSxcbiAgICApXG4gIH1cblxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJTb3VuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyB0aGlzLnVybCA9IHdpbmRvdy5nYW1lU3RhdGUuc291bmRVcmw7XHJcbiAgICB0aGlzLnNvdW5kVXAgPSBuZXcgQXVkaW8oJ3NvdW5kL2p1bXBVcC5tcDMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZFVwKTtcclxuICAgIHRoaXMuc291bmREb3duID0gbmV3IEF1ZGlvKCdzb3VuZC9ncmF2aXR5RG93bi5tcDMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZERvd24pO1xyXG4gICAgdGhpcy5pc0dyYXZpdHlEb3duID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzSnVtcFVwID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBqdW1wVXAoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNKdW1wVXApIHtcclxuICAgICAgdGhpcy5zb3VuZFVwLnBsYXkoKTtcclxuICAgICAgdGhpcy5pc0p1bXBVcCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBqdW1wRG93bigpIHtcclxuICAgIHRoaXMuc291bmRVcC5wYXVzZSgpO1xyXG4gICAgdGhpcy5zb3VuZFVwLmN1cnJlbnRUaW1lID0gMC4wO1xyXG4gICAgdGhpcy5pc0p1bXBVcCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ3Jhdml0eURvd24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNHcmF2aXR5RG93bikge1xyXG4gICAgICB0aGlzLnNvdW5kRG93bi5wbGF5KCk7XHJcbiAgICAgIHRoaXMuaXNHcmF2aXR5RG93biA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBncmF2aXR5VXAoKSB7XHJcbiAgICB0aGlzLnNvdW5kRG93bi5wYXVzZSgpO1xyXG4gICAgdGhpcy5zb3VuZERvd24uY3VycmVudFRpbWUgPSAwLjA7XHJcbiAgICB0aGlzLmlzR3Jhdml0eURvd24gPSBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiXG5sZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxubGV0IHBhcnRpY2xlc09uU2NyZWVuID0gMjQ1O1xubGV0IHcsIGg7XG5sZXQgcGFydGljbGVzQXJyYXkgPSBbXTtcblxudyA9IGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuaCA9IGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbmZ1bmN0aW9uIHJhbmRvbSAobWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSk7XG59XG5cbmZ1bmN0aW9uIGNsaWVudFJlc2l6ZSAoZXYpIHtcbiAgdyA9IGNhbnZhcy53aWR0aDtcbiAgaCA9IGNhbnZhcy5oZWlnaHQ7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjbGllbnRSZXNpemUpO1xuXG4vLyBjcmVhdGVTbm93Rmxha2VzKCk7XG5mdW5jdGlvbiBjcmVhdGVTbm93Rmxha2VzICgpIHtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc09uU2NyZWVuOyBpKyspe1xuICAgIHBhcnRpY2xlc0FycmF5LnB1c2goe1xuICAgICAgeDogTWF0aC5yYW5kb20oKSAqIHcsXG4gICAgICB5OiBNYXRoLnJhbmRvbSgpICogaCxcbiAgICAgIG9wYWNpdHk6IE1hdGgucmFuZG9tKCksXG4gICAgICBzcGVlZFg6IHJhbmRvbSgtMSwgMSksXG4gICAgICBzcGVlZFk6IHJhbmRvbSgxLCAyKSxcbiAgICAgIHJhZGl1czogcmFuZG9tKDAuNSwgNC4yKSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3U25vd0ZsYWtlcyAoKSB7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueCxcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnksXG4gICAgICAwLFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueCxcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnksXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS5yYWRpdXMsXG4gICAgKTtcblxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBgcmdiYSgzMCwgMTQ0LCAyNTUsICR7cGFydGljbGVzQXJyYXlbaV0ub3BhY2l0eX0pYCApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjgsIGByZ2JhKDEwMCwgMTQ5LCAyMzcsICR7cGFydGljbGVzQXJyYXlbaV0ub3BhY2l0eX0pYCApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBgcmdiYSg2NSwgMTA1LCAyMjUsICR7cGFydGljbGVzQXJyYXlbaV0ub3BhY2l0eX0pYCApO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSxcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnJhZGl1cyxcbiAgICAgIDAsXG4gICAgICBNYXRoLlBJKjIsXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlU25vd0ZsYWtlcyAoKSB7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgcGFydGljbGVzQXJyYXlbaV0ueCArPSBwYXJ0aWNsZXNBcnJheVtpXS5zcGVlZFg7XG4gICAgcGFydGljbGVzQXJyYXlbaV0ueSArPSBwYXJ0aWNsZXNBcnJheVtpXS5zcGVlZFk7XG5cbiAgICBpZihwYXJ0aWNsZXNBcnJheVtpXS55ID4gaCkge1xuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueCA9IE1hdGgucmFuZG9tKCkgKiB3ICogMS41O1xuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSA9IC01MDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlU25vd0ZhbGwgKCkge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuICBkcmF3U25vd0ZsYWtlcygpO1xuICBtb3ZlU25vd0ZsYWtlcygpO1xufVxuXG5leHBvcnQge2NyZWF0ZVNub3dGbGFrZXMsIHVwZGF0ZVNub3dGYWxsfVxuIiwiaW1wb3J0IE9ic3RhY2xlIGZyb20gJy4vb2JzdGFjbGUnO1xuaW1wb3J0IHtjYW52YXN9IGZyb20gJy4vaW5kZXgnO1xuLy8gaW1wb3J0IHtnYW1lU3BlZWQsIHBsYXllciwgb2JzdGFjbGVzfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuaW1wb3J0IHtnYW1lU3BlZWQsIG9ic3RhY2xlc30gZnJvbSAnLi9zdGFydF9nYW1lJztcblxuXG5mdW5jdGlvbiBTcGF3bk9ic3RhY2xlICgpIHtcbiAgLy8gbGV0IHNpemUgPSBSYW5kb21JbnRSYW5nZSgyMCwgNzApO1xuICBsZXQgdHlwZSA9IFJhbmRvbUludFJhbmdlKDMsIDQpO1xuXG5cbiAgbGV0IG9ic3RhY2xlID0gbmV3IE9ic3RhY2xlKHtcbiAgICB4OiBjYW52YXMud2lkdGgsXG4gICAgeTogY2FudmFzLmhlaWdodCxcbiAgICB3aWR0aDogNTAsXG4gICAgaGVpZ2h0OiA1MCxcbiAgICBnYW1lU3BlZWQ6IGdhbWVTcGVlZCxcbiAgICBpbWFnZVNyYzogYGltYWdlcy9vYnN0YWNsZSR7dHlwZX0ucG5nYCxcbiAgfSk7XG5cbiAgb2JzdGFjbGVzLnB1c2gob2JzdGFjbGUpO1xufVxuXG5mdW5jdGlvbiBSYW5kb21JbnRSYW5nZSAobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbn1cblxuZXhwb3J0IHtTcGF3bk9ic3RhY2xlfTtcbiIsImltcG9ydCBQbGF0Zm9ybSBmcm9tICcuL1BsYXRmb3JtJztcbmltcG9ydCB7Y2FudmFzfSBmcm9tICcuL2luZGV4Jztcbi8vIGltcG9ydCB7cGxhdGZvcm1zQmlnLCBwbGF0Zm9ybXNNZWRpdW19IGZyb20gJy4vZ2V0X3BsYXRmb3JtJztcbmltcG9ydCB7Z2FtZVNwZWVkfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwYXduUGxhdGZvcm0ob3B0aW9ucyl7XG5cbiAgbGV0IHBsYXRmb3JtT25lID0gbmV3IFBsYXRmb3JtKHtcbiAgICB4OiBjYW52YXMud2lkdGgsXG4gICAgeTogY2FudmFzLmhlaWdodCxcbiAgICBmbGlnaHRBbHRpdHVkZTogb3B0aW9ucy5mbGlnaHRBbHRpdHVkZSxcbiAgICB3aWR0aDogb3B0aW9ucy53aWR0aCxcbiAgICBoZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0LFxuICAgIGdhbWVTcGVlZDogZ2FtZVNwZWVkLFxuICAgIGltYWdlU3JjOiBvcHRpb25zLnNyYyxcbiAgfSk7XG5cbiAgLy8gb3B0aW9ucy5wbGF0Zm9ybS5wdXNoKHBsYXRmb3JtT25lKTtcbiAgcmV0dXJuIHBsYXRmb3JtT25lO1xufSIsImltcG9ydCBIZXJvIGZyb20gJy4vaGVybyc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi90ZXh0JztcbmltcG9ydCB7IFNwYXduT2JzdGFjbGUgfSBmcm9tICcuL3NwYXduX29ic3RhY2xlJztcbmltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVTbm93Rmxha2VzLCB1cGRhdGVTbm93RmFsbCB9IGZyb20gJy4vc25vd19mbGFrZXMnO1xuaW1wb3J0IEdhbWVTb3VuZCBmcm9tICcuL2dhbWUtc291bmQnO1xuaW1wb3J0IGdldENvaW4gZnJvbSAnLi9nZXRfY29pbic7XG5cbmltcG9ydCBnZXRQbGF0Zm9ybSBmcm9tICcuL2dldF9wbGF0Zm9ybSc7XG5cbmxldCBncmF2aXR5O1xubGV0IHNjb3JlO1xubGV0IGhpZ2hTY29yZTtcbmxldCBzY29yZVRleHQ7XG5sZXQgaGlnaHRTY29yZVRleHQ7XG5cbmxldCBnYW1lU3BlZWQ7XG5sZXQgcGxheWVyO1xubGV0IG9ic3RhY2xlcyA9IFtdO1xuY29uc3QgY29pbnMgPSBbXTtcblxuY29uc3Qga2V5cyA9IHt9O1xubGV0IGNvaW5JbWFnZTtcbmNvbnN0IGp1bXBUcnVlID0gZmFsc2U7XG5cbi8vIGxldCBjb2luO1xuXG5jb25zdCBwbGF5U291bmQgPSBuZXcgR2FtZVNvdW5kKCk7XG5cbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDIwNTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBrZXlzW2UuY29kZV0gPSB0cnVlO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAga2V5c1tlLmNvZGVdID0gZmFsc2U7XG4gIH0pO1xuXG4gIGN0eC5mb250ID0gJzIwcHggc2Fucy1zZXJpZic7XG5cbiAgZ2FtZVNwZWVkID0gMztcbiAgZ3Jhdml0eSA9IDE7XG5cbiAgc2NvcmUgPSAwO1xuICBoaWdoU2NvcmUgPSAwO1xuXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJykpIHtcbiAgICBoaWdoU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJyk7XG4gIH1cblxuICBjb2luSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgY29pbkltYWdlLnNyYyA9ICdpbWFnZXMvc3ByaXRlMi5wbmcnO1xuXG4gIHBsYXllciA9IG5ldyBIZXJvKHtcbiAgICBpbWFnZTogY29pbkltYWdlLFxuICAgIHdpZHRoOiA2MDAsXG4gICAgaGVpZ2h0OiAxMDAsXG4gICAgbnVtYmVyT2ZGcmFtZXM6IDYsXG4gICAgdGlja3NQZXJGcmFtZTogNCxcbiAgICB4OiA1MCxcbiAgICB5OiA1MCxcbiAgICB0ZXN0OiBjYW52YXMuaGVpZ2h0LFxuICB9KTtcblxuICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci5zdGFydCgpO1xuICAgIC8vIGNvaW4uc3RhcnQoKTtcbiAgfTtcblxuICAvLyBjb2luID0gZ2V0Q29pbigpO1xuICAvLyBjb2luLnN0YXJ0KClcbiAgLy8gY29uc29sZS5sb2coY29pbilcblxuICBzY29yZVRleHQgPSBuZXcgVGV4dChcbiAgICBgU2NvcmU6ICR7c2NvcmV9YCwgMjUsIDI1LCAnbGVmdCcsICcjMjEyMTIxJywgJzIwJyxcbiAgKTtcbiAgaGlnaHRTY29yZVRleHQgPSBuZXcgVGV4dChcbiAgICBgSGlnaHNjb3JlOiAke2hpZ2hTY29yZX1gLCBjYW52YXMud2lkdGggLSAyNSwgMjUsICdyaWdodCcsICcjMjEyMTIxJywgJzIwJyxcbiAgKTtcblxuICBjcmVhdGVTbm93Rmxha2VzKCk7XG4gIC8vIHBsYXlTb3VuZC5wbGF5Rm9uKCk7XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKFVwZGF0ZSk7XG59XG5cbmNvbnN0IGluaXRpYWxTcGF3blRpbWVyID0gMjAwO1xubGV0IHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcblxuZnVuY3Rpb24gVXBkYXRlKCkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoVXBkYXRlKTtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIC8vINCy0YvQutC70Y7Rh9C40YLRjCDRhNC+0L3QvtCy0YPRjiDQvNGD0LfRi9C60YNcbiAgaWYgKGtleXMuS2V5USkge1xuICAgIC8vIHdpbmRvdy5nYW1lU3RhdGUuaXNGb25Tb3VuZCA9IGZhbHNlO1xuICAgIHBsYXlTb3VuZC5zdG9wRm9uKCk7XG4gIH1cblxuICAvLyDQstC60LvRjtGH0LjRgtGMINGE0L7QvdC+0LLRg9GOINC80YPQt9GL0LrRg1xuICBpZiAoa2V5cy5LZXlBKSB7XG4gICAgLy8gd2luZG93LmdhbWVTdGF0ZS5pc0ZvblNvdW5kID0gdHJ1ZTtcbiAgICBwbGF5U291bmQucGxheUZvbigpO1xuICB9XG5cbiAgLy8gc3Bhd24gb2JzdGFjbGVzXG4gIHNwYXduVGltZXIgLT0gMTtcbiAgaWYgKHNwYXduVGltZXIgPD0gMCkge1xuICAgIFNwYXduT2JzdGFjbGUoKTtcbiAgICBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXIgLSBnYW1lU3BlZWQgKiA4O1xuXG4gICAgaWYgKHNwYXduVGltZXIgPCA2MCkge1xuICAgICAgc3Bhd25UaW1lciA9IDYwO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNwYXduIGNvaW5cbiAgLy8gc3Bhd25Db2luKCk7XG5cbiAgdXBkYXRlU25vd0ZhbGwoKTtcblxuICAvLyBzcGF3biBlbmVtaWVzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JzdGFjbGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbyA9IG9ic3RhY2xlc1tpXTtcblxuICAgIGlmIChvLnggKyBvLndpZHRoIDwgMCkge1xuICAgICAgb2JzdGFjbGVzLnNwbGljZShpLCAxKTtcbiAgICB9XG5cbiAgICAvLyDQv9C10YDQtdC30LDQs9GA0YPQt9C60LAg0LjQs9GA0Ysg0L/RgNC4INGB0YLQvtC70LrQvdC+0LLQtdC90LjQuFxuICAgIGlmIChcbiAgICAgIHBsYXllci5keCA8IG8ueCArIG8ud2lkdGhcbiAgICAgICYmIHBsYXllci5keCArIChwbGF5ZXIud2lkdGggLyAxMCkgLSAxMCA+IG8ueFxuICAgICAgJiYgcGxheWVyLnkgPCBvLnkgKyBvLmhlaWdodFxuICAgICAgJiYgcGxheWVyLnkgKyBwbGF5ZXIuaGVpZ2h0ID49IG8ueVxuICAgICkge1xuICAgICAgcGxheVNvdW5kLnBsYXlEZWFkKCk7XG4gICAgICBvYnN0YWNsZXMgPSBbXTtcbiAgICAgIGdhbWVTcGVlZCA9IDM7XG4gICAgICBzY29yZSA9IDA7XG4gICAgICBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXI7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hzY29yZScsIGhpZ2hTY29yZSk7XG4gICAgfVxuICAgIG8uVXBkYXRlKCk7XG4gIH1cblxuICBzY29yZSArPSAxO1xuICBzY29yZVRleHQudCA9IGBTY29yZTogJHtzY29yZX1gO1xuXG4gIHNjb3JlVGV4dC5EcmF3KCk7XG5cbiAgaWYgKHNjb3JlID4gaGlnaFNjb3JlKSB7XG4gICAgaGlnaFNjb3JlID0gc2NvcmU7XG4gICAgaGlnaHRTY29yZVRleHQudCA9IGBIaWdoc2NvcmU6ICR7aGlnaFNjb3JlfWA7XG4gIH1cblxuICBnYW1lU3BlZWQgKz0gMC4wMDM7XG4gIGhpZ2h0U2NvcmVUZXh0LkRyYXcoKTtcblxuICAvLyBzcGF3biBwbGF0Zm9ybVxuICBnZXRQbGF0Zm9ybSgpO1xuXG4gIC8vIHNwYXduIGNvaW5cbiAgZ2V0Q29pbigpO1xufVxuXG5leHBvcnQge1xuICBzdGFydCwgZ2FtZVNwZWVkLCBvYnN0YWNsZXMsIGtleXMsIHNjb3JlLCBwbGF5ZXIsIGNvaW5zLFxufTtcbiIsImltcG9ydCB7Y3R4fSBmcm9tICcuL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0IHtcclxuICBjb25zdHJ1Y3RvciAodCwgeCwgeSwgYSwgYywgcykge1xyXG4gICAgdGhpcy50ID0gdDtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5hID0gYTtcclxuICAgIHRoaXMuYyA9IGM7XHJcbiAgICB0aGlzLnMgPSBzO1xyXG4gIH1cclxuXHJcbiAgRHJhdyAoKSB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jO1xyXG4gICAgY3R4LmZvbnQgPSBgJHt0aGlzLnN9cHggc2Fucy1zZXJpZmA7XHJcbiAgICBjdHgudGV4dEFsaWduID0gdGhpcy5hO1xyXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMudCwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9
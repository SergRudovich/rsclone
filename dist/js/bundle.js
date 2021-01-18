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

      if (_start_game__WEBPACK_IMPORTED_MODULE_0__.player.x < coin.x + coin.width && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.x + _start_game__WEBPACK_IMPORTED_MODULE_0__.player.width / 10 - 10 > coin.x && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.y < coin.y + coin.height && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.y + _start_game__WEBPACK_IMPORTED_MODULE_0__.player.height >= coin.y) {
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
  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % 300 == 0) {
    platform = new _Platform__WEBPACK_IMPORTED_MODULE_3__.default({
      x: _index__WEBPACK_IMPORTED_MODULE_2__.canvas.width,
      y: _index__WEBPACK_IMPORTED_MODULE_2__.canvas.height,
      flightAltitude: 250,
      width: 495,
      height: 115,
      gameSpeed: _start_game__WEBPACK_IMPORTED_MODULE_0__.gameSpeed,
      imageSrc: "images/platforma1.png"
    });
    platforms.push(platform);
  }

  if (platforms) {
    platforms.map(function (platform) {
      platform.update();

      if (_start_game__WEBPACK_IMPORTED_MODULE_0__.player.x > platform.x && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.y < _index__WEBPACK_IMPORTED_MODULE_2__.canvas.height - platform.flightAltitude) {
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
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
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
// const playSound = new GameSound();

function start() {
  _index__WEBPACK_IMPORTED_MODULE_3__.canvas.width = window.innerWidth;
  _index__WEBPACK_IMPORTED_MODULE_3__.canvas.height = window.innerHeight - 205;
  document.addEventListener('keydown', function (e) {
    keys[e.code] = true;
  });
  document.addEventListener('keyup', function (e) {
    keys[e.code] = false;
  });
  _index__WEBPACK_IMPORTED_MODULE_3__.ctx.font = "20px sans-serif";
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


  scoreText = new _text__WEBPACK_IMPORTED_MODULE_1__.Text("Score: ".concat(score), 25, 25, "left", "#212121", "20");
  hightScoreText = new _text__WEBPACK_IMPORTED_MODULE_1__.Text("Highscore: ".concat(highScore), _index__WEBPACK_IMPORTED_MODULE_3__.canvas.width - 25, 25, "right", "#212121", "20");
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


  spawnTimer--;

  if (spawnTimer <= 0) {
    (0,_spawn_obstacle__WEBPACK_IMPORTED_MODULE_2__.SpawnObstacle)();
    spawnTimer = initialSpawnTimer - gameSpeed * 8;

    if (spawnTimer < 60) {
      spawnTimer = 60;
    }
  } // spawn coin
  // spawnCoin();


  (0,_snow_flakes__WEBPACK_IMPORTED_MODULE_4__.updateSnowFall)(); // spawn enemies

  for (var i = 0; i < obstacles.length; i++) {
    var o = obstacles[i];

    if (o.x + o.width < 0) {
      obstacles.splice(i, 1);
    } // перезагрузка игры при столкновении


    if (player.dx < o.x + o.width && player.dx + player.width / 10 - 10 > o.x && player.y < o.y + o.height && player.y + player.height >= o.y) {
      // playSound.playDead();
      obstacles = [];
      gameSpeed = 3;
      score = 0;
      spawnTimer = initialSpawnTimer;
      window.localStorage.setItem('highscore', highScore);
    }

    o.Update();
  }

  score++;
  scoreText.t = "Score: " + score;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL1BsYXRmb3JtLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvY29pbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dhbWUtc291bmQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9nZXRfY29pbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dldF9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2hlcm8uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL29ic3RhY2xlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGxheWVyLXNvdW5kLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvc25vd19mbGFrZXMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9zcGF3bl9vYnN0YWNsZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3NwYXduX3BsYXRmb3JtLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvc3RhcnRfZ2FtZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3RleHQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIlBsYXRmb3JtIiwib3B0aW9ucyIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJmbGlnaHRBbHRpdHVkZSIsImdhbWVTcGVlZCIsImR4IiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsImltYWdlU3JjIiwicmVuZGVyIiwiY3R4IiwiY2FudmFzIiwiQ29pbiIsInRpY2tzUGVyRnJhbWUiLCJudW1iZXJPZkZyYW1lcyIsImZyYW1lSW5kZXgiLCJ0aWNrQ291bnQiLCJhdWRpb09iaiIsIkF1ZGlvIiwicGxheSIsInVwZGF0ZSIsIkdhbWVTb3VuZCIsImZvblNvdW5kIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2b2x1bWUiLCJkZWFkU291bmQiLCJsb29wIiwicGF1c2UiLCJjb2luIiwiY29pbnMiLCJnZXRDb2luIiwic2NvcmUiLCJwdXNoIiwibGVuZ3RoIiwiZm9yRWFjaCIsInN0YXJ0IiwicGxheWVyIiwicGxheUNvaW5Tb3VuZCIsInBsYXRmb3JtIiwicGxhdGZvcm1zIiwiZ2V0UGxhdGZvcm0iLCJtYXAiLCJnZXRSYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwicmFuZG9tIiwiSGVybyIsImR5Iiwic3giLCJqdW1wRm9yY2UiLCJncm91bmRlZCIsImp1bXBUaW1lciIsImdyYXZpdHkiLCJpc0xlZnQiLCJ0ZXN0Iiwic291bmQiLCJQbGF5ZXJTb3VuZCIsImtleXMiLCJqdW1wVXAiLCJKdW1wIiwianVtcERvd24iLCJncmF2aXR5R28iLCJnZXRSZWFkeVRvSnVtcCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwiT2JzdGFjbGUiLCJzb3VuZFVwIiwic291bmREb3duIiwiaXNHcmF2aXR5RG93biIsImlzSnVtcFVwIiwiY3VycmVudFRpbWUiLCJwYXJ0aWNsZXNPblNjcmVlbiIsInciLCJoIiwicGFydGljbGVzQXJyYXkiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRSZXNpemUiLCJldiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVTbm93Rmxha2VzIiwiaSIsIm9wYWNpdHkiLCJzcGVlZFgiLCJzcGVlZFkiLCJyYWRpdXMiLCJkcmF3U25vd0ZsYWtlcyIsImdyYWRpZW50IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJtb3ZlU25vd0ZsYWtlcyIsInVwZGF0ZVNub3dGYWxsIiwiY2xlYXJSZWN0IiwiU3Bhd25PYnN0YWNsZSIsInR5cGUiLCJSYW5kb21JbnRSYW5nZSIsIm9ic3RhY2xlIiwib2JzdGFjbGVzIiwicm91bmQiLCJzcGF3blBsYXRmb3JtIiwicGxhdGZvcm1PbmUiLCJoaWdoU2NvcmUiLCJzY29yZVRleHQiLCJoaWdodFNjb3JlVGV4dCIsImNvaW5JbWFnZSIsImp1bXBUcnVlIiwiZSIsImNvZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25sb2FkIiwiVGV4dCIsIlVwZGF0ZSIsImluaXRpYWxTcGF3blRpbWVyIiwic3Bhd25UaW1lciIsIktleVEiLCJwbGF5U291bmQiLCJzdG9wRm9uIiwiS2V5QSIsInBsYXlGb24iLCJvIiwic3BsaWNlIiwic2V0SXRlbSIsInQiLCJEcmF3IiwiYSIsImMiLCJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFHcUJBLFE7QUFDbkIsb0JBQWFDLE9BQWIsRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0MsQ0FBTCxHQUFTRCxPQUFPLENBQUNDLENBQWpCO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTRixPQUFPLENBQUNFLENBQWpCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhSCxPQUFPLENBQUNHLEtBQXJCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjSixPQUFPLENBQUNJLE1BQXRCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkwsT0FBTyxDQUFDSyxjQUE5QjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJOLE9BQU8sQ0FBQ00sU0FBekI7QUFFQSxTQUFLQyxFQUFMLEdBQVUsQ0FBQyxLQUFLRCxTQUFoQjtBQUVBLFNBQUtFLEtBQUwsR0FBYSxJQUFJQyxLQUFKLEVBQWI7QUFDQSxTQUFLRCxLQUFMLENBQVdFLEdBQVgsR0FBaUJWLE9BQU8sQ0FBQ1csUUFBekI7QUFDRDs7Ozs2QkFFUztBQUNSLFdBQUtWLENBQUwsSUFBVSxLQUFLTSxFQUFmO0FBQ0EsV0FBS0ssTUFBTDtBQUNEOzs7NkJBRVE7QUFDUEMsMERBQUEsQ0FDRSxLQUFLTCxLQURQLEVBRUUsS0FBS1AsQ0FGUCxFQUdFYSxvREFBQSxHQUFnQixLQUFLVCxjQUh2QjtBQUtELEssQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENGOztJQUVxQlUsSTtBQUVuQixnQkFBYWYsT0FBYixFQUFzQjtBQUFBOztBQUNwQixTQUFLQyxDQUFMLEdBQVNELE9BQU8sQ0FBQ0MsQ0FBakI7QUFDQSxTQUFLQyxDQUFMLEdBQVNGLE9BQU8sQ0FBQ0UsQ0FBakI7QUFDQSxTQUFLQyxLQUFMLEdBQWFILE9BQU8sQ0FBQ0csS0FBckI7QUFDQSxTQUFLQyxNQUFMLEdBQWNKLE9BQU8sQ0FBQ0ksTUFBdEI7QUFFQSxTQUFLWSxhQUFMLEdBQXFCaEIsT0FBTyxDQUFDZ0IsYUFBUixJQUF5QixDQUE5QztBQUNBLFNBQUtDLGNBQUwsR0FBc0JqQixPQUFPLENBQUNpQixjQUFSLElBQTBCLENBQWhEO0FBRUEsU0FBS1gsU0FBTCxHQUFpQk4sT0FBTyxDQUFDTSxTQUF6QjtBQUVBLFNBQUtZLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBRUEsU0FBS1osRUFBTCxHQUFVLENBQUMsS0FBS0QsU0FBaEI7QUFFQSxTQUFLRSxLQUFMLEdBQWEsSUFBSUMsS0FBSixFQUFiO0FBQ0EsU0FBS0QsS0FBTCxDQUFXRSxHQUFYLEdBQWlCLG1CQUFqQjtBQUVBLFNBQUtVLFFBQUwsR0FBZ0IsSUFBSUMsS0FBSixDQUFVLG1CQUFWLENBQWhCO0FBQ0Q7Ozs7NkJBRVE7QUFDUCxXQUFLcEIsQ0FBTCxJQUFVLEtBQUtNLEVBQWY7QUFFQSxXQUFLWSxTQUFMOztBQUVBLFVBQUksS0FBS0EsU0FBTCxHQUFpQixLQUFLSCxhQUExQixFQUF5QztBQUN2QyxhQUFLRyxTQUFMLEdBQWlCLENBQWpCOztBQUNBLFlBQUksS0FBS0QsVUFBTCxHQUFrQixLQUFLRCxjQUFMLEdBQXNCLENBQTVDLEVBQStDO0FBQzNDLGVBQUtDLFVBQUw7QUFDSCxTQUZELE1BRU87QUFDSCxlQUFLQSxVQUFMLEdBQWtCLENBQWxCO0FBQ0g7QUFDRjtBQUNGOzs7NkJBRVE7QUFDUEwsdURBQUEsQ0FDRSxLQUFLTCxLQURQLEVBRUUsS0FBS1UsVUFBTCxHQUFrQixLQUFLZixLQUF2QixHQUErQixLQUFLYyxjQUZ0QyxFQUdFLENBSEYsRUFJRSxLQUFLZCxLQUFMLEdBQWEsS0FBS2MsY0FKcEIsRUFLRSxLQUFLYixNQUxQLEVBTUUsS0FBS0gsQ0FOUCxFQU9FLEtBQUtDLENBUFAsRUFRRSxLQUFLQyxLQUFMLEdBQWEsS0FBS2MsY0FScEIsRUFTRSxLQUFLYixNQVRQO0FBV0Q7OztvQ0FFZTtBQUNkLFdBQUtnQixRQUFMLENBQWNFLElBQWQ7QUFDRDs7OzRCQUVPO0FBQ04sV0FBS0MsTUFBTDtBQUNBLFdBQUtYLE1BQUw7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REg7SUFFcUJZLFM7QUFDbkIsdUJBQWM7QUFBQTs7QUFDWjtBQUNBO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixJQUFJSixLQUFKLENBQVUsZ0JBQVYsQ0FBaEI7QUFDQUssWUFBUSxDQUFDQyxJQUFULENBQWNDLFdBQWQsQ0FBMEIsS0FBS0gsUUFBL0I7QUFDQSxTQUFLQSxRQUFMLENBQWNJLE1BQWQsR0FBdUIsR0FBdkI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlULEtBQUosQ0FBVSxnQkFBVixDQUFqQjtBQUNBSyxZQUFRLENBQUNDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQixLQUFLRSxTQUEvQjtBQUNEOzs7OzhCQUVTO0FBQ1IsV0FBS0wsUUFBTCxDQUFjTSxJQUFkLEdBQXFCLElBQXJCO0FBQ0EsV0FBS04sUUFBTCxDQUFjSCxJQUFkO0FBQ0Q7Ozs4QkFFUztBQUNSLFdBQUtHLFFBQUwsQ0FBY08sS0FBZDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLRixTQUFMLENBQWVSLElBQWY7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Qkg7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJVyxJQUFKO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFFZSxTQUFTQyxPQUFULEdBQW9CO0FBRWpDLE1BQUdDLDhDQUFLLEdBQUcsR0FBUixJQUFlLENBQWxCLEVBQXFCO0FBRW5CSCxRQUFJLEdBQUcsSUFBSWxCLDBDQUFKLENBQVM7QUFDZGQsT0FBQyxFQUFFYSxnREFEVztBQUVkWixPQUFDLEVBQUUsR0FGVztBQUdkQyxXQUFLLEVBQUUsR0FITztBQUlkQyxZQUFNLEVBQUUsRUFKTTtBQUtkYSxvQkFBYyxFQUFFLENBTEY7QUFNZEQsbUJBQWEsRUFBRSxDQU5EO0FBT2RWLGVBQVMsRUFBRUEsa0RBQVNBO0FBUE4sS0FBVCxDQUFQO0FBVUE0QixTQUFLLENBQUNHLElBQU4sQ0FBV0osSUFBWDtBQUNEOztBQUdELE1BQUdDLEtBQUssQ0FBQ0ksTUFBTixHQUFlLENBQWxCLEVBQXFCO0FBRW5CSixTQUFLLENBQUNLLE9BQU4sQ0FBYyxVQUFBTixJQUFJLEVBQUk7QUFDcEJBLFVBQUksQ0FBQ08sS0FBTDs7QUFFQSxVQUNFQyxpREFBQSxHQUFXUixJQUFJLENBQUNoQyxDQUFMLEdBQVNnQyxJQUFJLENBQUM5QixLQUF6QixJQUNBc0MsaURBQUEsR0FBWUEscURBQUEsR0FBZSxFQUEzQixHQUFpQyxFQUFqQyxHQUFzQ1IsSUFBSSxDQUFDaEMsQ0FEM0MsSUFFQXdDLGlEQUFBLEdBQVdSLElBQUksQ0FBQy9CLENBQUwsR0FBUytCLElBQUksQ0FBQzdCLE1BRnpCLElBR0FxQyxpREFBQSxHQUFXQSxzREFBWCxJQUE0QlIsSUFBSSxDQUFDL0IsQ0FKbkMsRUFLRTtBQUVBK0IsWUFBSSxDQUFDL0IsQ0FBTCxHQUFTLEtBQVQ7QUFDQStCLFlBQUksQ0FBQ1MsYUFBTDtBQUNEOztBQUVELFVBQUlULElBQUksQ0FBQ2hDLENBQUwsR0FBUyxDQUFDLEVBQWQsRUFBa0I7QUFDaEJnQyxZQUFJLENBQUMvQixDQUFMLEdBQVMsS0FBVDtBQUNEO0FBQ0YsS0FqQkQ7QUFrQkQ7QUFDRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUl5QyxRQUFKO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBRWUsU0FBU0MsV0FBVCxHQUFzQjtBQUVuQyxNQUFHVCw4Q0FBSyxHQUFHLEdBQVIsSUFBZSxDQUFsQixFQUFvQjtBQUVsQk8sWUFBUSxHQUFHLElBQUk1Qyw4Q0FBSixDQUFhO0FBQ3RCRSxPQUFDLEVBQUVhLGdEQURtQjtBQUV0QlosT0FBQyxFQUFFWSxpREFGbUI7QUFHdEJULG9CQUFjLEVBQUUsR0FITTtBQUl0QkYsV0FBSyxFQUFFLEdBSmU7QUFLdEJDLFlBQU0sRUFBRSxHQUxjO0FBTXRCRSxlQUFTLEVBQUVBLGtEQU5XO0FBT3RCSyxjQUFRO0FBUGMsS0FBYixDQUFYO0FBVUFpQyxhQUFTLENBQUNQLElBQVYsQ0FBZU0sUUFBZjtBQUNEOztBQUVELE1BQUdDLFNBQUgsRUFBYztBQUVaQSxhQUFTLENBQUNFLEdBQVYsQ0FBYyxVQUFBSCxRQUFRLEVBQUk7QUFDeEJBLGNBQVEsQ0FBQ3BCLE1BQVQ7O0FBRUEsVUFDRWtCLGlEQUFBLEdBQVdFLFFBQVEsQ0FBQzFDLENBQXBCLElBQ0d3QyxpREFBQSxHQUFXM0IsaURBQUEsR0FBZ0I2QixRQUFRLENBQUN0QyxjQUZ6QyxFQUlFO0FBQ0VvQyw0REFBQSxHQUFjM0IsaURBQUEsR0FBZ0I2QixRQUFRLENBQUN0QyxjQUF6QixHQUEwQyxDQUF4RDtBQUNELE9BTkgsTUFNUztBQUNMb0MsNERBQUEsR0FBYzNCLGlEQUFkO0FBQ0Q7QUFDSixLQVpEO0FBYUQsR0FoQ2tDLENBb0NuQztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVFOztBQUVIOztBQUVELFNBQVNpQyxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFDOUJELEtBQUcsR0FBR0UsSUFBSSxDQUFDQyxJQUFMLENBQVVILEdBQVYsQ0FBTjtBQUNBQyxLQUFHLEdBQUdDLElBQUksQ0FBQ0UsS0FBTCxDQUFXSCxHQUFYLENBQU47QUFDQSxTQUFPQyxJQUFJLENBQUNFLEtBQUwsQ0FBV0YsSUFBSSxDQUFDRyxNQUFMLE1BQWlCSixHQUFHLEdBQUdELEdBQXZCLENBQVgsSUFBMENBLEdBQWpELENBSDhCLENBR3dCO0FBQ3ZELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVEO0FBQ0E7QUFDQTs7SUFFcUJNLEk7QUFDbkIsZ0JBQVl0RCxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtRLEtBQUwsR0FBYVIsT0FBTyxDQUFDUSxLQUFyQjtBQUVBLFNBQUtVLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0gsYUFBTCxHQUFxQmhCLE9BQU8sQ0FBQ2dCLGFBQVIsSUFBeUIsQ0FBOUM7QUFDQSxTQUFLQyxjQUFMLEdBQXNCakIsT0FBTyxDQUFDaUIsY0FBUixJQUEwQixDQUFoRDtBQUVBLFNBQUtkLEtBQUwsR0FBYUgsT0FBTyxDQUFDRyxLQUFyQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0osT0FBTyxDQUFDSSxNQUF0QjtBQUVBLFNBQUttRCxFQUFMLEdBQVV2RCxPQUFPLENBQUN1RCxFQUFSLElBQWMsQ0FBeEI7QUFDQSxTQUFLaEQsRUFBTCxHQUFVLENBQVY7QUFDQSxTQUFLaUQsRUFBTCxHQUFVLENBQVY7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFFQSxTQUFLekQsQ0FBTCxHQUFTRixPQUFPLENBQUNFLENBQWpCO0FBQ0EsU0FBS0QsQ0FBTCxHQUFTRCxPQUFPLENBQUNDLENBQWpCO0FBQ0EsU0FBSzJELE9BQUwsR0FBZSxDQUFmO0FBRUEsU0FBS0MsTUFBTCxHQUFjLEtBQWQsQ0F0Qm1CLENBd0JuQjs7QUFDQSxTQUFLQyxJQUFMLEdBQVk5RCxPQUFPLENBQUM4RCxJQUFwQjtBQUVBLFNBQUtDLEtBQUwsR0FBYSxJQUFJQyxrREFBSixFQUFiO0FBQ0Q7Ozs7NkJBRVE7QUFDUCxXQUFLN0MsU0FBTDs7QUFFQSxVQUFJLEtBQUtBLFNBQUwsR0FBaUIsS0FBS0gsYUFBMUIsRUFBeUM7QUFDdkMsYUFBS0csU0FBTCxHQUFpQixDQUFqQjs7QUFDQSxZQUFJLEtBQUtELFVBQUwsR0FBa0IsS0FBS0QsY0FBTCxHQUFzQixDQUE1QyxFQUErQztBQUM3QyxlQUFLQyxVQUFMO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZUFBS0EsVUFBTCxHQUFrQixDQUFsQjtBQUNEO0FBQ0Y7QUFDRjs7OzZCQUVRO0FBQ1BMLHVEQUFBLENBQ0UsS0FBS0wsS0FEUCxFQUVFLEtBQUtVLFVBQUwsR0FBa0IsS0FBS2YsS0FBdkIsR0FBK0IsS0FBS2MsY0FGdEMsRUFHRSxLQUFLdUMsRUFIUCxFQUlFLEtBQUtyRCxLQUFMLEdBQWEsS0FBS2MsY0FKcEIsRUFLRSxLQUFLYixNQUxQLEVBTUUsS0FBS0csRUFOUCxFQU9FLEtBQUtMLENBUFAsRUFRRSxLQUFLQyxLQUFMLEdBQWEsS0FBS2MsY0FScEIsRUFTRSxLQUFLYixNQVRQO0FBV0QsSyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O2dDQUVZO0FBQ1YsV0FBS0YsQ0FBTCxJQUFVLEtBQUtxRCxFQUFmOztBQUVBLFVBQUksS0FBS3JELENBQUwsR0FBUyxLQUFLRSxNQUFkLEdBQXVCLEtBQUswRCxJQUFoQyxFQUFzQztBQUNwQyxhQUFLUCxFQUFMLElBQVcsS0FBS0ssT0FBaEI7QUFDQSxhQUFLRixRQUFMLEdBQWdCLEtBQWhCOztBQUNBLFlBQUksS0FBS0gsRUFBTCxHQUFVLENBQWQsRUFBaUI7QUFDZixjQUFJLEtBQUtNLE1BQVQsRUFBaUI7QUFDZixpQkFBS0wsRUFBTCxHQUFVLEdBQVY7QUFDRCxXQUZELE1BRU87QUFDTCxpQkFBS0EsRUFBTCxHQUFVLEdBQVY7QUFDRDtBQUNGO0FBQ0YsT0FWRCxNQVVPO0FBQ0wsYUFBS0QsRUFBTCxHQUFVLENBQVY7QUFDQSxhQUFLRyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsYUFBS3pDLGNBQUwsR0FBc0IsQ0FBdEI7O0FBQ0EsWUFBSSxLQUFLNEMsTUFBVCxFQUFpQjtBQUNmLGVBQUtMLEVBQUwsR0FBVSxHQUFWO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZUFBS0EsRUFBTCxHQUFVLENBQVY7QUFDRDs7QUFDRCxhQUFLdEQsQ0FBTCxHQUFTLEtBQUs0RCxJQUFMLEdBQVksS0FBSzFELE1BQTFCO0FBQ0Q7QUFDRixLLENBRUQ7Ozs7cUNBQ2lCO0FBQ2YsVUFBSTZELG1EQUFBLElBQWNBLGtEQUFsQixFQUE2QjtBQUMzQixhQUFLRixLQUFMLENBQVdHLE1BQVg7QUFDQSxhQUFLQyxJQUFMO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBS1IsU0FBTCxHQUFpQixDQUFqQjtBQUNEOztBQUNELFVBQUlNLGtEQUFKLEVBQWU7QUFDYixZQUFJLEtBQUsxRCxFQUFMLEdBQVVPLGdEQUFBLEdBQWUsR0FBN0IsRUFBa0MsS0FBS1AsRUFBTCxJQUFXLENBQVg7QUFDbEMsYUFBS2lELEVBQUwsR0FBVSxDQUFWO0FBQ0EsYUFBS0ssTUFBTCxHQUFjLEtBQWQ7QUFDQSxhQUFLNUMsY0FBTCxHQUFzQixDQUF0QjtBQUNEOztBQUNELFVBQUlnRCxrREFBSixFQUFlO0FBQ2IsWUFBSSxLQUFLMUQsRUFBTCxHQUFVLENBQWQsRUFBaUIsS0FBS0EsRUFBTCxJQUFXLENBQVg7QUFDakIsYUFBS2lELEVBQUwsR0FBVSxHQUFWO0FBQ0EsYUFBS0ssTUFBTCxHQUFjLElBQWQ7QUFDQSxhQUFLNUMsY0FBTCxHQUFzQixDQUF0QjtBQUNEO0FBQ0Y7OzsyQkFFTTtBQUNMLFVBQUksS0FBS3lDLFFBQUwsSUFBaUIsS0FBS0MsU0FBTCxLQUFtQixDQUF4QyxFQUEyQztBQUN6QyxhQUFLQSxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsYUFBS0osRUFBTCxHQUFVLENBQUMsS0FBS0UsU0FBaEI7QUFDQSxhQUFLTSxLQUFMLENBQVdLLFFBQVg7QUFDRCxPQUpELE1BSU8sSUFBSSxLQUFLVCxTQUFMLEdBQWlCLENBQWpCLElBQXNCLEtBQUtBLFNBQUwsR0FBaUIsRUFBM0MsRUFBK0M7QUFDcEQsYUFBS0EsU0FBTDtBQUNBLGFBQUtKLEVBQUwsR0FBVSxDQUFDLEtBQUtFLFNBQU4sR0FBbUIsS0FBS0UsU0FBTCxHQUFpQixFQUE5QztBQUNBLGFBQUsxQyxjQUFMLEdBQXNCLENBQXRCOztBQUNBLFlBQUksS0FBSzRDLE1BQVQsRUFBaUI7QUFDZixlQUFLTCxFQUFMLEdBQVUsR0FBVjtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtBLEVBQUwsR0FBVSxHQUFWO0FBQ0Q7QUFDRjtBQUNGOzs7NEJBRU87QUFBQTs7QUFDTixVQUFNekIsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixhQUFJLENBQUNSLE1BQUw7O0FBQ0EsYUFBSSxDQUFDWCxNQUFMOztBQUNBLGFBQUksQ0FBQ3lELFNBQUw7O0FBQ0EsYUFBSSxDQUFDQyxjQUFMOztBQUVBQyxjQUFNLENBQUNDLHFCQUFQLENBQTZCekMsSUFBN0I7QUFDRCxPQVBEOztBQVNBd0MsWUFBTSxDQUFDQyxxQkFBUCxDQUE2QnpDLElBQTdCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pKSDtBQUNBO0FBQ0E7Q0FHQTs7QUFFQSxJQUFNakIsTUFBTSxHQUFHWSxRQUFRLENBQUMrQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQSxJQUFNNUQsR0FBRyxHQUFHQyxNQUFNLENBQUM0RCxVQUFQLENBQWtCLElBQWxCLENBQVosQyxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBbEMsa0RBQUssRyxDQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTs7SUFHcUJtQyxRO0FBQ25CLG9CQUFhM0UsT0FBYixFQUFzQjtBQUFBOztBQUNwQixTQUFLQyxDQUFMLEdBQVNELE9BQU8sQ0FBQ0MsQ0FBakI7QUFDQSxTQUFLQyxDQUFMLEdBQVNGLE9BQU8sQ0FBQ0UsQ0FBakI7QUFDQSxTQUFLQyxLQUFMLEdBQWFILE9BQU8sQ0FBQ0csS0FBckI7QUFDQSxTQUFLQyxNQUFMLEdBQWNKLE9BQU8sQ0FBQ0ksTUFBdEI7QUFDQSxTQUFLRSxTQUFMLEdBQWlCTixPQUFPLENBQUNNLFNBQXpCO0FBRUEsU0FBS0MsRUFBTCxHQUFVLENBQUMsS0FBS0QsU0FBaEI7QUFFQSxTQUFLRSxLQUFMLEdBQWEsSUFBSUMsS0FBSixFQUFiO0FBQ0EsU0FBS0QsS0FBTCxDQUFXRSxHQUFYLEdBQWlCVixPQUFPLENBQUNXLFFBQXpCO0FBQ0Q7Ozs7NkJBRVM7QUFDUixXQUFLVixDQUFMLElBQVUsS0FBS00sRUFBZjtBQUNBLFdBQUtLLE1BQUw7QUFDRDs7OzZCQUVRO0FBQ1BDLDBEQUFBLENBQ0UsS0FBS0wsS0FEUCxFQUVFLEtBQUtQLENBRlAsRUFHRWEsb0RBQUEsR0FBZ0IsRUFIbEI7QUFLRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Qkg7SUFFcUJrRCxXO0FBQ25CLHlCQUFjO0FBQUE7O0FBQ1o7QUFDQSxTQUFLWSxPQUFMLEdBQWUsSUFBSXZELEtBQUosQ0FBVSxrQkFBVixDQUFmO0FBQ0FLLFlBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxXQUFkLENBQTBCLEtBQUtnRCxPQUEvQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsSUFBSXhELEtBQUosQ0FBVSx1QkFBVixDQUFqQjtBQUNBSyxZQUFRLENBQUNDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQixLQUFLaUQsU0FBL0I7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNEOzs7OzZCQUVRO0FBQ1AsVUFBSSxDQUFDLEtBQUtBLFFBQVYsRUFBb0I7QUFDbEIsYUFBS0gsT0FBTCxDQUFhdEQsSUFBYjtBQUNBLGFBQUt5RCxRQUFMLEdBQWdCLElBQWhCO0FBQ0Q7QUFDRjs7OytCQUVVO0FBQ1QsV0FBS0gsT0FBTCxDQUFhNUMsS0FBYjtBQUNBLFdBQUs0QyxPQUFMLENBQWFJLFdBQWIsR0FBMkIsR0FBM0I7QUFDQSxXQUFLRCxRQUFMLEdBQWdCLEtBQWhCO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQUksQ0FBQyxLQUFLRCxhQUFWLEVBQXlCO0FBQ3ZCLGFBQUtELFNBQUwsQ0FBZXZELElBQWY7QUFDQSxhQUFLd0QsYUFBTCxHQUFxQixJQUFyQjtBQUNEO0FBQ0Y7OztnQ0FFVztBQUNWLFdBQUtELFNBQUwsQ0FBZTdDLEtBQWY7QUFDQSxXQUFLNkMsU0FBTCxDQUFlRyxXQUFmLEdBQTZCLEdBQTdCO0FBQ0EsV0FBS0YsYUFBTCxHQUFxQixLQUFyQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0gsSUFBSWhFLE1BQU0sR0FBR1ksUUFBUSxDQUFDK0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsSUFBSTVELEdBQUcsR0FBR0MsTUFBTSxDQUFDNEQsVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBRUEsSUFBSU8saUJBQWlCLEdBQUcsR0FBeEI7QUFDQSxJQUFJQyxDQUFKLEVBQU9DLENBQVA7QUFDQSxJQUFJQyxjQUFjLEdBQUcsRUFBckI7QUFFQUYsQ0FBQyxHQUFHcEUsTUFBTSxDQUFDWCxLQUFQLEdBQWVvRSxNQUFNLENBQUNjLFVBQTFCO0FBQ0FGLENBQUMsR0FBR3JFLE1BQU0sQ0FBQ1YsTUFBUCxHQUFnQm1FLE1BQU0sQ0FBQ2UsV0FBM0I7O0FBRUEsU0FBU2pDLE1BQVQsQ0FBaUJMLEdBQWpCLEVBQXNCQyxHQUF0QixFQUEyQjtBQUN6QixTQUFPRCxHQUFHLEdBQUdFLElBQUksQ0FBQ0csTUFBTCxNQUFpQkosR0FBRyxHQUFHRCxHQUFOLEdBQVksQ0FBN0IsQ0FBYjtBQUNEOztBQUVELFNBQVN1QyxZQUFULENBQXVCQyxFQUF2QixFQUEyQjtBQUN6Qk4sR0FBQyxHQUFHcEUsTUFBTSxDQUFDWCxLQUFYO0FBQ0FnRixHQUFDLEdBQUdyRSxNQUFNLENBQUNWLE1BQVg7QUFDRDs7QUFFRG1FLE1BQU0sQ0FBQ2tCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRixZQUFsQyxFLENBRUE7O0FBQ0EsU0FBU0csZ0JBQVQsR0FBNkI7QUFDM0IsT0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdWLGlCQUFuQixFQUFzQ1UsQ0FBQyxFQUF2QyxFQUEwQztBQUN4Q1Asa0JBQWMsQ0FBQy9DLElBQWYsQ0FBb0I7QUFDbEJwQyxPQUFDLEVBQUVpRCxJQUFJLENBQUNHLE1BQUwsS0FBZ0I2QixDQUREO0FBRWxCaEYsT0FBQyxFQUFFZ0QsSUFBSSxDQUFDRyxNQUFMLEtBQWdCOEIsQ0FGRDtBQUdsQlMsYUFBTyxFQUFFMUMsSUFBSSxDQUFDRyxNQUFMLEVBSFM7QUFJbEJ3QyxZQUFNLEVBQUV4QyxNQUFNLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxDQUpJO0FBS2xCeUMsWUFBTSxFQUFFekMsTUFBTSxDQUFDLENBQUQsRUFBSSxDQUFKLENBTEk7QUFNbEIwQyxZQUFNLEVBQUUxQyxNQUFNLENBQUMsR0FBRCxFQUFNLEdBQU47QUFOSSxLQUFwQjtBQVFEO0FBQ0Y7O0FBRUQsU0FBUzJDLGNBQVQsR0FBMkI7QUFDekIsT0FBSSxJQUFJTCxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdQLGNBQWMsQ0FBQzlDLE1BQWxDLEVBQTBDcUQsQ0FBQyxFQUEzQyxFQUE4QztBQUM1QyxRQUFJTSxRQUFRLEdBQUdwRixHQUFHLENBQUNxRixvQkFBSixDQUNiZCxjQUFjLENBQUNPLENBQUQsQ0FBZCxDQUFrQjFGLENBREwsRUFFYm1GLGNBQWMsQ0FBQ08sQ0FBRCxDQUFkLENBQWtCekYsQ0FGTCxFQUdiLENBSGEsRUFJYmtGLGNBQWMsQ0FBQ08sQ0FBRCxDQUFkLENBQWtCMUYsQ0FKTCxFQUtibUYsY0FBYyxDQUFDTyxDQUFELENBQWQsQ0FBa0J6RixDQUxMLEVBTWJrRixjQUFjLENBQUNPLENBQUQsQ0FBZCxDQUFrQkksTUFOTCxDQUFmO0FBU0FFLFlBQVEsQ0FBQ0UsWUFBVCxDQUFzQixDQUF0QiwrQkFBK0NmLGNBQWMsQ0FBQ08sQ0FBRCxDQUFkLENBQWtCQyxPQUFqRTtBQUNBSyxZQUFRLENBQUNFLFlBQVQsQ0FBc0IsR0FBdEIsZ0NBQWtEZixjQUFjLENBQUNPLENBQUQsQ0FBZCxDQUFrQkMsT0FBcEU7QUFDQUssWUFBUSxDQUFDRSxZQUFULENBQXNCLENBQXRCLCtCQUErQ2YsY0FBYyxDQUFDTyxDQUFELENBQWQsQ0FBa0JDLE9BQWpFO0FBRUEvRSxPQUFHLENBQUN1RixTQUFKO0FBQ0F2RixPQUFHLENBQUN3RixHQUFKLENBQ0VqQixjQUFjLENBQUNPLENBQUQsQ0FBZCxDQUFrQjFGLENBRHBCLEVBRUVtRixjQUFjLENBQUNPLENBQUQsQ0FBZCxDQUFrQnpGLENBRnBCLEVBR0VrRixjQUFjLENBQUNPLENBQUQsQ0FBZCxDQUFrQkksTUFIcEIsRUFJRSxDQUpGLEVBS0U3QyxJQUFJLENBQUNvRCxFQUFMLEdBQVEsQ0FMVixFQU1FLEtBTkY7QUFTQXpGLE9BQUcsQ0FBQzBGLFNBQUosR0FBZ0JOLFFBQWhCO0FBQ0FwRixPQUFHLENBQUMyRixJQUFKO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTQyxjQUFULEdBQTJCO0FBQ3pCLE9BQUksSUFBSWQsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHUCxjQUFjLENBQUM5QyxNQUFsQyxFQUEwQ3FELENBQUMsRUFBM0MsRUFBOEM7QUFDNUNQLGtCQUFjLENBQUNPLENBQUQsQ0FBZCxDQUFrQjFGLENBQWxCLElBQXVCbUYsY0FBYyxDQUFDTyxDQUFELENBQWQsQ0FBa0JFLE1BQXpDO0FBQ0FULGtCQUFjLENBQUNPLENBQUQsQ0FBZCxDQUFrQnpGLENBQWxCLElBQXVCa0YsY0FBYyxDQUFDTyxDQUFELENBQWQsQ0FBa0JHLE1BQXpDOztBQUVBLFFBQUdWLGNBQWMsQ0FBQ08sQ0FBRCxDQUFkLENBQWtCekYsQ0FBbEIsR0FBc0JpRixDQUF6QixFQUE0QjtBQUMxQkMsb0JBQWMsQ0FBQ08sQ0FBRCxDQUFkLENBQWtCMUYsQ0FBbEIsR0FBc0JpRCxJQUFJLENBQUNHLE1BQUwsS0FBZ0I2QixDQUFoQixHQUFvQixHQUExQztBQUNBRSxvQkFBYyxDQUFDTyxDQUFELENBQWQsQ0FBa0J6RixDQUFsQixHQUFzQixDQUFDLEVBQXZCO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQVN3RyxjQUFULEdBQTJCO0FBQ3pCN0YsS0FBRyxDQUFDOEYsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0J6QixDQUFwQixFQUF1QkMsQ0FBdkI7QUFDQWEsZ0JBQWM7QUFDZFMsZ0JBQWM7QUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGRDtDQUVBOztBQUNBOztBQUdBLFNBQVNHLGFBQVQsR0FBMEI7QUFDeEI7QUFDQSxNQUFJQyxJQUFJLEdBQUdDLGNBQWMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUF6QjtBQUdBLE1BQUlDLFFBQVEsR0FBRyxJQUFJcEMsOENBQUosQ0FBYTtBQUMxQjFFLEtBQUMsRUFBRWEsZ0RBRHVCO0FBRTFCWixLQUFDLEVBQUVZLGlEQUZ1QjtBQUcxQlgsU0FBSyxFQUFFLEVBSG1CO0FBSTFCQyxVQUFNLEVBQUUsRUFKa0I7QUFLMUJFLGFBQVMsRUFBRUEsa0RBTGU7QUFNMUJLLFlBQVEsMkJBQW9Ca0csSUFBcEI7QUFOa0IsR0FBYixDQUFmO0FBU0FHLHlEQUFBLENBQWVELFFBQWY7QUFDRDs7QUFFRCxTQUFTRCxjQUFULENBQXlCOUQsR0FBekIsRUFBOEJDLEdBQTlCLEVBQW1DO0FBQ2pDLFNBQU9DLElBQUksQ0FBQytELEtBQUwsQ0FBVy9ELElBQUksQ0FBQ0csTUFBTCxNQUFpQkosR0FBRyxHQUFHRCxHQUF2QixJQUE4QkEsR0FBekMsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJEO0NBRUE7O0FBQ0E7QUFHZSxTQUFTa0UsYUFBVCxDQUF1QmxILE9BQXZCLEVBQStCO0FBRTVDLE1BQUltSCxXQUFXLEdBQUcsSUFBSXBILDhDQUFKLENBQWE7QUFDN0JFLEtBQUMsRUFBRWEsZ0RBRDBCO0FBRTdCWixLQUFDLEVBQUVZLGlEQUYwQjtBQUc3QlQsa0JBQWMsRUFBRUwsT0FBTyxDQUFDSyxjQUhLO0FBSTdCRixTQUFLLEVBQUVILE9BQU8sQ0FBQ0csS0FKYztBQUs3QkMsVUFBTSxFQUFFSixPQUFPLENBQUNJLE1BTGE7QUFNN0JFLGFBQVMsRUFBRUEsa0RBTmtCO0FBTzdCSyxZQUFRLEVBQUVYLE9BQU8sQ0FBQ1U7QUFQVyxHQUFiLENBQWxCLENBRjRDLENBWTVDOztBQUNBLFNBQU95RyxXQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUEsSUFBSXZELE9BQUo7QUFDQSxJQUFJeEIsS0FBSjtBQUNBLElBQUlnRixTQUFKO0FBQ0EsSUFBSUMsU0FBSjtBQUNBLElBQUlDLGNBQUo7QUFFQSxJQUFJaEgsU0FBSjtBQUNBLElBQUltQyxNQUFKO0FBQ0EsSUFBSXVFLFNBQVMsR0FBRyxFQUFoQjtBQUNBLElBQUk5RSxLQUFLLEdBQUcsRUFBWjtBQUdBLElBQUkrQixJQUFJLEdBQUcsRUFBWDtBQUNBLElBQUlzRCxTQUFKO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLEtBQWYsQyxDQUVBO0FBRUE7O0FBRUEsU0FBU2hGLEtBQVQsR0FBa0I7QUFFaEIxQixrREFBQSxHQUFleUQsTUFBTSxDQUFDYyxVQUF0QjtBQUNBdkUsbURBQUEsR0FBZ0J5RCxNQUFNLENBQUNlLFdBQVAsR0FBcUIsR0FBckM7QUFFQTVELFVBQVEsQ0FBQytELGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQUNnQyxDQUFELEVBQU87QUFDMUN4RCxRQUFJLENBQUN3RCxDQUFDLENBQUNDLElBQUgsQ0FBSixHQUFlLElBQWY7QUFDRCxHQUZEO0FBSUFoRyxVQUFRLENBQUMrRCxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDZ0MsQ0FBRCxFQUFPO0FBQ3hDeEQsUUFBSSxDQUFDd0QsQ0FBQyxDQUFDQyxJQUFILENBQUosR0FBZSxLQUFmO0FBQ0QsR0FGRDtBQUtBN0csOENBQUEsR0FBVyxpQkFBWDtBQUVBUCxXQUFTLEdBQUcsQ0FBWjtBQUNBc0QsU0FBTyxHQUFHLENBQVY7QUFFQXhCLE9BQUssR0FBRyxDQUFSO0FBQ0FnRixXQUFTLEdBQUcsQ0FBWjs7QUFFQSxNQUFHTyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBSCxFQUFxQztBQUNuQ1IsYUFBUyxHQUFHTyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBWjtBQUNEOztBQUVETCxXQUFTLEdBQUcsSUFBSTlHLEtBQUosRUFBWjtBQUNBOEcsV0FBUyxDQUFDN0csR0FBVixHQUFnQixvQkFBaEI7QUFHQStCLFFBQU0sR0FBRyxJQUFJYSwwQ0FBSixDQUFTO0FBQ2hCOUMsU0FBSyxFQUFFK0csU0FEUztBQUVoQnBILFNBQUssRUFBRSxHQUZTO0FBR2hCQyxVQUFNLEVBQUUsR0FIUTtBQUloQmEsa0JBQWMsRUFBRSxDQUpBO0FBS2hCRCxpQkFBYSxFQUFFLENBTEM7QUFNaEJmLEtBQUMsRUFBRSxFQU5hO0FBT2hCQyxLQUFDLEVBQUUsRUFQYTtBQVFoQjRELFFBQUksRUFBRWhELGlEQUFhVjtBQVJILEdBQVQsQ0FBVDs7QUFXQW1FLFFBQU0sQ0FBQ3NELE1BQVAsR0FBZ0IsWUFBWTtBQUMxQnBGLFVBQU0sQ0FBQ0QsS0FBUCxHQUQwQixDQUUxQjtBQUNELEdBSEQsQ0F6Q2dCLENBOENoQjtBQUNBO0FBQ0E7OztBQUVBNkUsV0FBUyxHQUFHLElBQUlTLHVDQUFKLGtCQUNBMUYsS0FEQSxHQUNTLEVBRFQsRUFDYSxFQURiLEVBQ2lCLE1BRGpCLEVBQ3lCLFNBRHpCLEVBQ29DLElBRHBDLENBQVo7QUFHQWtGLGdCQUFjLEdBQUcsSUFBSVEsdUNBQUosc0JBQ0RWLFNBREMsR0FDWXRHLGdEQUFBLEdBQWUsRUFEM0IsRUFDK0IsRUFEL0IsRUFDbUMsT0FEbkMsRUFDNEMsU0FENUMsRUFDdUQsSUFEdkQsQ0FBakI7QUFJQTRFLGdFQUFnQixHQXpEQSxDQTBEaEI7O0FBRUFsQix1QkFBcUIsQ0FBQ3VELE1BQUQsQ0FBckI7QUFDRDs7QUFFRCxJQUFJQyxpQkFBaUIsR0FBRyxHQUF4QjtBQUNBLElBQUlDLFVBQVUsR0FBR0QsaUJBQWpCOztBQUVBLFNBQVNELE1BQVQsR0FBbUI7QUFDakJ2RCx1QkFBcUIsQ0FBQ3VELE1BQUQsQ0FBckI7QUFDQWxILG1EQUFBLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQkMsZ0RBQXBCLEVBQWtDQSxpREFBbEMsRUFGaUIsQ0FJakI7O0FBQ0EsTUFBSW1ELElBQUksQ0FBQ2lFLElBQVQsRUFBZTtBQUNiO0FBQ0FDLGFBQVMsQ0FBQ0MsT0FBVjtBQUNELEdBUmdCLENBVWpCOzs7QUFDQSxNQUFJbkUsSUFBSSxDQUFDb0UsSUFBVCxFQUFlO0FBQ2I7QUFDQUYsYUFBUyxDQUFDRyxPQUFWO0FBQ0QsR0FkZ0IsQ0FnQmpCOzs7QUFDQUwsWUFBVTs7QUFDVixNQUFJQSxVQUFVLElBQUksQ0FBbEIsRUFBcUI7QUFDbkJyQixrRUFBYTtBQUNicUIsY0FBVSxHQUFHRCxpQkFBaUIsR0FBRzFILFNBQVMsR0FBRyxDQUE3Qzs7QUFFQSxRQUFJMkgsVUFBVSxHQUFHLEVBQWpCLEVBQXFCO0FBQ25CQSxnQkFBVSxHQUFHLEVBQWI7QUFDRDtBQUNGLEdBekJnQixDQTJCakI7QUFDQTs7O0FBRUF2Qiw4REFBYyxHQTlCRyxDQWdDakI7O0FBQ0EsT0FBSyxJQUFJZixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcUIsU0FBUyxDQUFDMUUsTUFBOUIsRUFBc0NxRCxDQUFDLEVBQXZDLEVBQTBDO0FBQ3hDLFFBQUk0QyxDQUFDLEdBQUd2QixTQUFTLENBQUNyQixDQUFELENBQWpCOztBQUVBLFFBQUk0QyxDQUFDLENBQUN0SSxDQUFGLEdBQU1zSSxDQUFDLENBQUNwSSxLQUFSLEdBQWdCLENBQXBCLEVBQXNCO0FBQ3BCNkcsZUFBUyxDQUFDd0IsTUFBVixDQUFpQjdDLENBQWpCLEVBQW9CLENBQXBCO0FBQ0QsS0FMdUMsQ0FReEM7OztBQUNBLFFBQ0VsRCxNQUFNLENBQUNsQyxFQUFQLEdBQVlnSSxDQUFDLENBQUN0SSxDQUFGLEdBQU1zSSxDQUFDLENBQUNwSSxLQUFwQixJQUNBc0MsTUFBTSxDQUFDbEMsRUFBUCxHQUFha0MsTUFBTSxDQUFDdEMsS0FBUCxHQUFlLEVBQTVCLEdBQWtDLEVBQWxDLEdBQXVDb0ksQ0FBQyxDQUFDdEksQ0FEekMsSUFFQXdDLE1BQU0sQ0FBQ3ZDLENBQVAsR0FBV3FJLENBQUMsQ0FBQ3JJLENBQUYsR0FBTXFJLENBQUMsQ0FBQ25JLE1BRm5CLElBR0FxQyxNQUFNLENBQUN2QyxDQUFQLEdBQVd1QyxNQUFNLENBQUNyQyxNQUFsQixJQUE0Qm1JLENBQUMsQ0FBQ3JJLENBSmhDLEVBS0U7QUFDQTtBQUNBOEcsZUFBUyxHQUFHLEVBQVo7QUFDQTFHLGVBQVMsR0FBRyxDQUFaO0FBQ0E4QixXQUFLLEdBQUcsQ0FBUjtBQUNBNkYsZ0JBQVUsR0FBR0QsaUJBQWI7QUFDQXpELFlBQU0sQ0FBQ29ELFlBQVAsQ0FBb0JjLE9BQXBCLENBQTRCLFdBQTVCLEVBQXlDckIsU0FBekM7QUFDRDs7QUFDRG1CLEtBQUMsQ0FBQ1IsTUFBRjtBQUNEOztBQUVEM0YsT0FBSztBQUNMaUYsV0FBUyxDQUFDcUIsQ0FBVixHQUFjLFlBQVl0RyxLQUExQjtBQUdBaUYsV0FBUyxDQUFDc0IsSUFBVjs7QUFFQSxNQUFJdkcsS0FBSyxHQUFHZ0YsU0FBWixFQUF1QjtBQUNyQkEsYUFBUyxHQUFHaEYsS0FBWjtBQUNBa0Ysa0JBQWMsQ0FBQ29CLENBQWYsd0JBQWlDdEIsU0FBakM7QUFDRDs7QUFFRDlHLFdBQVMsSUFBSSxLQUFiO0FBQ0FnSCxnQkFBYyxDQUFDcUIsSUFBZixHQXRFaUIsQ0F3RWpCOztBQUNBOUYsd0RBQVcsR0F6RU0sQ0EyRWpCOztBQUNBVixvREFBTztBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlLRDtBQUVPLElBQU0yRixJQUFiO0FBQ0UsZ0JBQWFZLENBQWIsRUFBZ0J6SSxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0IwSSxDQUF0QixFQUF5QkMsQ0FBekIsRUFBNEJDLENBQTVCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtKLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUt6SSxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLMEksQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0Q7O0FBUkg7QUFBQTtBQUFBLDJCQVVVO0FBQ05qSSx1REFBQTtBQUNBQSx1REFBQSxHQUFnQixLQUFLZ0ksQ0FBckI7QUFDQWhJLGtEQUFBLGFBQWMsS0FBS2lJLENBQW5CO0FBQ0FqSSx1REFBQSxHQUFnQixLQUFLK0gsQ0FBckI7QUFDQS9ILHNEQUFBLENBQWEsS0FBSzZILENBQWxCLEVBQXFCLEtBQUt6SSxDQUExQixFQUE2QixLQUFLQyxDQUFsQztBQUNBVyx1REFBQTtBQUNEO0FBakJIOztBQUFBO0FBQUEsSTs7Ozs7O1VDRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Ii4vanMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9pbmRleC5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm0ge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICB0aGlzLmZsaWdodEFsdGl0dWRlID0gb3B0aW9ucy5mbGlnaHRBbHRpdHVkZTtcbiAgICB0aGlzLmdhbWVTcGVlZCA9IG9wdGlvbnMuZ2FtZVNwZWVkO1xuXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IG9wdGlvbnMuaW1hZ2VTcmM7XG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICB0aGlzLngsXG4gICAgICBjYW52YXMuaGVpZ2h0IC0gdGhpcy5mbGlnaHRBbHRpdHVkZSxcbiAgICApXG4gIH1cblxuICAvLyBzdGFydCgpIHtcbiAgLy8gICBsZXQgbG9vcCA9ICgpID0+IHtcbiAgLy8gICAgIHRoaXMudXBkYXRlKCk7XG4gIC8vICAgICB0aGlzLnJlbmRlcigpO1xuXG4gIC8vICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAvLyAgIH1cblxuICAvLyAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gIC8vIH1cbn1cblxuXG5cbiIsImltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luIHtcblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICBcbiAgICB0aGlzLnRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMDtcbiAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gb3B0aW9ucy5udW1iZXJPZkZyYW1lcyB8fCAxO1xuXG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgdGhpcy50aWNrQ291bnQgPSAwO1xuXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9ICcuL2ltYWdlcy9jb2luLnBuZyc7XG5cbiAgICB0aGlzLmF1ZGlvT2JqID0gbmV3IEF1ZGlvKCcuL3NvdW5kL2NvaW4yLm1wMycpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuXG4gICAgdGhpcy50aWNrQ291bnQrKztcblxuICAgIGlmICh0aGlzLnRpY2tDb3VudCA+IHRoaXMudGlja3NQZXJGcmFtZSkge1xuICAgICAgdGhpcy50aWNrQ291bnQgPSAwO1xuICAgICAgaWYgKHRoaXMuZnJhbWVJbmRleCA8IHRoaXMubnVtYmVyT2ZGcmFtZXMgLSAxKSB7XG4gICAgICAgICAgdGhpcy5mcmFtZUluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5mcmFtZUluZGV4ICogdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICAwLFxuICAgICAgdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMueCxcbiAgICAgIHRoaXMueSxcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgdGhpcy5oZWlnaHRcbiAgICApXG4gIH1cblxuICBwbGF5Q29pblNvdW5kKCkge1xuICAgIHRoaXMuYXVkaW9PYmoucGxheSgpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG59IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU291bmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGhpcy51cmwgPSB3aW5kb3cuZ2FtZVN0YXRlLnNvdW5kVXJsO1xyXG4gICAgLy8gdGhpcy5udW0gPSAxO1xyXG4gICAgdGhpcy5mb25Tb3VuZCA9IG5ldyBBdWRpbygnc291bmQvZm9uMS5tcDMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5mb25Tb3VuZCk7XHJcbiAgICB0aGlzLmZvblNvdW5kLnZvbHVtZSA9IDAuMTtcclxuICAgIHRoaXMuZGVhZFNvdW5kID0gbmV3IEF1ZGlvKCdzb3VuZC9kZWFkLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRlYWRTb3VuZCk7XHJcbiAgfVxyXG5cclxuICBwbGF5Rm9uKCkge1xyXG4gICAgdGhpcy5mb25Tb3VuZC5sb29wID0gdHJ1ZTtcclxuICAgIHRoaXMuZm9uU291bmQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgc3RvcEZvbigpIHtcclxuICAgIHRoaXMuZm9uU291bmQucGF1c2UoKTtcclxuICB9XHJcblxyXG4gIHBsYXlEZWFkKCkge1xyXG4gICAgdGhpcy5kZWFkU291bmQucGxheSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge3Njb3JlLCBwbGF5ZXIgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuaW1wb3J0IHtjYW52YXN9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IENvaW4gZnJvbSAnLi9jb2luJztcbmltcG9ydCB7Z2FtZVNwZWVkfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuXG5sZXQgY29pbjtcbmxldCBjb2lucyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb2luICgpIHtcblxuICBpZihzY29yZSAlIDIwMCA9PSAwKSB7IFxuXG4gICAgY29pbiA9IG5ldyBDb2luKHtcbiAgICAgIHg6IGNhbnZhcy53aWR0aCxcbiAgICAgIHk6IDM1MCxcbiAgICAgIHdpZHRoOiA1MDQsXG4gICAgICBoZWlnaHQ6IDg0LFxuICAgICAgbnVtYmVyT2ZGcmFtZXM6IDYsXG4gICAgICB0aWNrc1BlckZyYW1lOiA0LFxuICAgICAgZ2FtZVNwZWVkOiBnYW1lU3BlZWQsXG4gICAgfSk7XG5cbiAgICBjb2lucy5wdXNoKGNvaW4pO1xuICB9XG5cblxuICBpZihjb2lucy5sZW5ndGggPiAwKSB7XG5cbiAgICBjb2lucy5mb3JFYWNoKGNvaW4gPT4ge1xuICAgICAgY29pbi5zdGFydCgpO1xuICAgICAgXG4gICAgICBpZiAoXG4gICAgICAgIHBsYXllci54IDwgY29pbi54ICsgY29pbi53aWR0aCAmJlxuICAgICAgICBwbGF5ZXIueCArIChwbGF5ZXIud2lkdGggLyAxMCkgLSAxMCA+IGNvaW4ueCAmJlxuICAgICAgICBwbGF5ZXIueSA8IGNvaW4ueSArIGNvaW4uaGVpZ2h0ICYmXG4gICAgICAgIHBsYXllci55ICsgcGxheWVyLmhlaWdodCA+PSBjb2luLnlcbiAgICAgICkge1xuICAgICAgICBcbiAgICAgICAgY29pbi55ID0gMTAwMDA7XG4gICAgICAgIGNvaW4ucGxheUNvaW5Tb3VuZCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29pbi54IDwgLTUwKSB7IFxuICAgICAgICBjb2luLnkgPSAxMDAwMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtzY29yZSwgcGxheWVyIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcbmltcG9ydCBzcGF3blBsYXRmb3JtIGZyb20gJy4vc3Bhd25fcGxhdGZvcm0nO1xuaW1wb3J0IHtjYW52YXN9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IFBsYXRmb3JtIGZyb20gJy4vUGxhdGZvcm0nO1xuaW1wb3J0IHtnYW1lU3BlZWR9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XG5cbmxldCBwbGF0Zm9ybTtcbmxldCBwbGF0Zm9ybXMgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGxhdGZvcm0oKXtcbiAgXG4gIGlmKHNjb3JlICUgMzAwID09IDApeyAgICBcblxuICAgIHBsYXRmb3JtID0gbmV3IFBsYXRmb3JtKHtcbiAgICAgIHg6IGNhbnZhcy53aWR0aCxcbiAgICAgIHk6IGNhbnZhcy5oZWlnaHQsXG4gICAgICBmbGlnaHRBbHRpdHVkZTogMjUwLFxuICAgICAgd2lkdGg6IDQ5NSxcbiAgICAgIGhlaWdodDogMTE1LFxuICAgICAgZ2FtZVNwZWVkOiBnYW1lU3BlZWQsXG4gICAgICBpbWFnZVNyYzogYGltYWdlcy9wbGF0Zm9ybWExLnBuZ2AsXG4gICAgfSk7XG5cbiAgICBwbGF0Zm9ybXMucHVzaChwbGF0Zm9ybSlcbiAgfSBcblxuICBpZihwbGF0Zm9ybXMpIHtcbiAgICBcbiAgICBwbGF0Zm9ybXMubWFwKHBsYXRmb3JtID0+IHtcbiAgICAgIHBsYXRmb3JtLnVwZGF0ZSgpO1xuICAgICAgXG4gICAgICBpZihcbiAgICAgICAgcGxheWVyLnggPiBwbGF0Zm9ybS54XG4gICAgICAgICYmIHBsYXllci55IDwgY2FudmFzLmhlaWdodCAtIHBsYXRmb3JtLmZsaWdodEFsdGl0dWRlXG4gICAgICAgIClcbiAgICAgICAge1xuICAgICAgICAgIHBsYXllci50ZXN0ID0gY2FudmFzLmhlaWdodCAtIHBsYXRmb3JtLmZsaWdodEFsdGl0dWRlICsgMlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllci50ZXN0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgXG5cbiAgLy8gaWYocGxhdGZvcm0pIHtcbiAgLy8gICBwbGF0Zm9ybS51cGRhdGUoKTsgIFxuICAvLyAgIGNvbnNvbGUubG9nKHBsYXRmb3JtKTtcblxuICAvLyAgIGlmIChwbGF0Zm9ybS54ICsgcGxhdGZvcm0ud2lkdGggPCAwKXtcbiAgLy8gICAgIHBsYXRmb3JtLnggPSAxMDAwMDA7XG4gIC8vICAgfVxuXG4gIC8vICAgaWYoXG4gIC8vICAgICBwbGF5ZXIueCA+IHBsYXRmb3JtLnhcbiAgLy8gICAgICYmIHBsYXllci55IDwgY2FudmFzLmhlaWdodCAtIHBsYXRmb3JtLmZsaWdodEFsdGl0dWRlXG4gIC8vICAgICApXG4gIC8vICAgICB7XG4gIC8vICAgICAgIHBsYXllci50ZXN0ID0gY2FudmFzLmhlaWdodCAtIHBsYXRmb3JtLmZsaWdodEFsdGl0dWRlICsgMlxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgcGxheWVyLnRlc3QgPSBjYW52YXMuaGVpZ2h0O1xuICAvLyAgICAgfVxuICAgIFxuICAvLyB9XG5cbiAgICAvLyBwbGF0Zm9ybXMucHVzaChwbGF0Zm9ybSk7XG4gIFxufSBcblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47IC8v0JzQsNC60YHQuNC80YPQvCDQvdC1INCy0LrQu9GO0YfQsNC10YLRgdGPLCDQvNC40L3QuNC80YPQvCDQstC60LvRjtGH0LDQtdGC0YHRj1xufSIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBrZXlzIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcbmltcG9ydCBQbGF5ZXJTb3VuZCBmcm9tICcuL3BsYXllci1zb3VuZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm8ge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5pbWFnZSA9IG9wdGlvbnMuaW1hZ2U7XG5cbiAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgIHRoaXMudGlja0NvdW50ID0gMDtcbiAgICB0aGlzLnRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMDtcbiAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gb3B0aW9ucy5udW1iZXJPZkZyYW1lcyB8fCAxO1xuXG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcblxuICAgIHRoaXMuZHkgPSBvcHRpb25zLmR5IHx8IDA7XG4gICAgdGhpcy5keCA9IDA7XG4gICAgdGhpcy5zeCA9IDA7XG4gICAgdGhpcy5qdW1wRm9yY2UgPSAxNTtcbiAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5qdW1wVGltZXIgPSAwO1xuXG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLmdyYXZpdHkgPSAxO1xuXG4gICAgdGhpcy5pc0xlZnQgPSBmYWxzZTtcblxuICAgIC8vIHBsYXRmb3JtXG4gICAgdGhpcy50ZXN0ID0gb3B0aW9ucy50ZXN0O1xuXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBQbGF5ZXJTb3VuZCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudGlja0NvdW50Kys7XG5cbiAgICBpZiAodGhpcy50aWNrQ291bnQgPiB0aGlzLnRpY2tzUGVyRnJhbWUpIHtcbiAgICAgIHRoaXMudGlja0NvdW50ID0gMDtcbiAgICAgIGlmICh0aGlzLmZyYW1lSW5kZXggPCB0aGlzLm51bWJlck9mRnJhbWVzIC0gMSkge1xuICAgICAgICB0aGlzLmZyYW1lSW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5mcmFtZUluZGV4ICogdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICB0aGlzLnN4LFxuICAgICAgdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMuZHgsXG4gICAgICB0aGlzLnksXG4gICAgICB0aGlzLndpZHRoIC8gdGhpcy5udW1iZXJPZkZyYW1lcyxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICk7XG4gIH1cblxuICAvLyBncmF2aXR5XG4gIC8vIGdyYXZpdHlHbygpIHtcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnRlc3QpXG4gIC8vICAgdGhpcy55ICs9IHRoaXMuZHk7XG5cbiAgLy8gICBpZiAodGhpcy55ICsgdGhpcy5oZWlnaHQgPCBjYW52YXMuaGVpZ2h0KSB7XG4gIC8vICAgICB0aGlzLmR5ICs9IHRoaXMuZ3Jhdml0eTtcbiAgLy8gICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgdGhpcy5keSA9IDA7XG4gIC8vICAgICB0aGlzLmdyb3VuZGVkID0gdHJ1ZTtcbiAgLy8gICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodDtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBncmF2aXR5R28oKSB7XG4gICAgdGhpcy55ICs9IHRoaXMuZHk7XG5cbiAgICBpZiAodGhpcy55ICsgdGhpcy5oZWlnaHQgPCB0aGlzLnRlc3QpIHtcbiAgICAgIHRoaXMuZHkgKz0gdGhpcy5ncmF2aXR5O1xuICAgICAgdGhpcy5ncm91bmRlZCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuZHkgPiAwKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCkge1xuICAgICAgICAgIHRoaXMuc3ggPSAzMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zeCA9IDQwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmR5ID0gMDtcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0cnVlO1xuICAgICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IDY7XG4gICAgICBpZiAodGhpcy5pc0xlZnQpIHtcbiAgICAgICAgdGhpcy5zeCA9IDEwMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3ggPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy55ID0gdGhpcy50ZXN0IC0gdGhpcy5oZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8ganVtcFxuICBnZXRSZWFkeVRvSnVtcCgpIHtcbiAgICBpZiAoa2V5cy5TcGFjZSB8fCBrZXlzLktleVcpIHtcbiAgICAgIHRoaXMuc291bmQuanVtcFVwKCk7XG4gICAgICB0aGlzLkp1bXAoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5qdW1wVGltZXIgPSAwO1xuICAgIH1cbiAgICBpZiAoa2V5cy5LZXlNKSB7XG4gICAgICBpZiAodGhpcy5keCA8IGNhbnZhcy53aWR0aCAtIDEwMCkgdGhpcy5keCArPSA1O1xuICAgICAgdGhpcy5zeCA9IDA7XG4gICAgICB0aGlzLmlzTGVmdCA9IGZhbHNlO1xuICAgICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IDY7XG4gICAgfVxuICAgIGlmIChrZXlzLktleU4pIHtcbiAgICAgIGlmICh0aGlzLmR4ID4gMCkgdGhpcy5keCAtPSA1O1xuICAgICAgdGhpcy5zeCA9IDEwMDtcbiAgICAgIHRoaXMuaXNMZWZ0ID0gdHJ1ZTtcbiAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSA2O1xuICAgIH1cbiAgfVxuXG4gIEp1bXAoKSB7XG4gICAgaWYgKHRoaXMuZ3JvdW5kZWQgJiYgdGhpcy5qdW1wVGltZXIgPT09IDApIHtcbiAgICAgIHRoaXMuanVtcFRpbWVyID0gMTtcbiAgICAgIHRoaXMuZHkgPSAtdGhpcy5qdW1wRm9yY2U7XG4gICAgICB0aGlzLnNvdW5kLmp1bXBEb3duKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmp1bXBUaW1lciA+IDAgJiYgdGhpcy5qdW1wVGltZXIgPCAxNSkge1xuICAgICAgdGhpcy5qdW1wVGltZXIrKztcbiAgICAgIHRoaXMuZHkgPSAtdGhpcy5qdW1wRm9yY2UgLSAodGhpcy5qdW1wVGltZXIgLyA1MCk7XG4gICAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gMTtcbiAgICAgIGlmICh0aGlzLmlzTGVmdCkge1xuICAgICAgICB0aGlzLnN4ID0gMjAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zeCA9IDUwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBjb25zdCBsb29wID0gKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB0aGlzLmdyYXZpdHlHbygpO1xuICAgICAgdGhpcy5nZXRSZWFkeVRvSnVtcCgpO1xuXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgIH07XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICB9XG59XG4iLCIvLyBpbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHsgT2JzdGFjbGUgfSBmcm9tICcuL29ic3RhY2xlJztcclxuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4vdGV4dCc7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSAnLi9zdGFydF9nYW1lJztcclxuXHJcbi8vIGxldCBrZXlzID0ge307XHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4vLyB3aW5kb3cuZ2FtZVN0YXRlID0ge1xyXG4vLyAgIHNvdW5kVXJsOiAnLi4vLi9kaXN0L3NvdW5kLycsXHJcbi8vICAgaW1nVXJsOiAnLi4vLi9kaXN0L2ltZy8nLFxyXG4vLyAgIGlzRm9uU291bmQ6IHRydWUsXHJcbi8vICAgaXNQbGF5ZXJTb3VuZDogdHJ1ZSxcclxuLy8gICBzZXQgaXNTdGFydEdhbWUodmFsdWUpIHtcclxuLy8gICAgIFN0YXJ0KCk7XHJcbi8vICAgfSxcclxuLy8gfTtcclxuXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4vLyAgIGtleXNbZS5jb2RlXSA9IHRydWU7XHJcbi8vIH0pO1xyXG4vL1xyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbi8vICAga2V5c1tlLmNvZGVdID0gZmFsc2U7XHJcbi8vIH0pO1xyXG5cclxuc3RhcnQoKTtcclxuXHJcbi8vIGV4cG9ydCB7Y2FudmFzLCBjdHgsIGtleXN9XHJcbmV4cG9ydCB7IGNhbnZhcywgY3R4IH07XHJcbiIsImltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vaW5kZXguanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XG5cbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLmltYWdlU3JjO1xuICB9XG5cbiAgVXBkYXRlICgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy54LFxuICAgICAgY2FudmFzLmhlaWdodCAtIDU1LFxuICAgIClcbiAgfVxuXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllclNvdW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIHRoaXMudXJsID0gd2luZG93LmdhbWVTdGF0ZS5zb3VuZFVybDtcclxuICAgIHRoaXMuc291bmRVcCA9IG5ldyBBdWRpbygnc291bmQvanVtcFVwLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kVXApO1xyXG4gICAgdGhpcy5zb3VuZERvd24gPSBuZXcgQXVkaW8oJ3NvdW5kL2dyYXZpdHlEb3duLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kRG93bik7XHJcbiAgICB0aGlzLmlzR3Jhdml0eURvd24gPSBmYWxzZTtcclxuICAgIHRoaXMuaXNKdW1wVXAgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGp1bXBVcCgpIHtcclxuICAgIGlmICghdGhpcy5pc0p1bXBVcCkge1xyXG4gICAgICB0aGlzLnNvdW5kVXAucGxheSgpO1xyXG4gICAgICB0aGlzLmlzSnVtcFVwID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGp1bXBEb3duKCkge1xyXG4gICAgdGhpcy5zb3VuZFVwLnBhdXNlKCk7XHJcbiAgICB0aGlzLnNvdW5kVXAuY3VycmVudFRpbWUgPSAwLjA7XHJcbiAgICB0aGlzLmlzSnVtcFVwID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBncmF2aXR5RG93bigpIHtcclxuICAgIGlmICghdGhpcy5pc0dyYXZpdHlEb3duKSB7XHJcbiAgICAgIHRoaXMuc291bmREb3duLnBsYXkoKTtcclxuICAgICAgdGhpcy5pc0dyYXZpdHlEb3duID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdyYXZpdHlVcCgpIHtcclxuICAgIHRoaXMuc291bmREb3duLnBhdXNlKCk7XHJcbiAgICB0aGlzLnNvdW5kRG93bi5jdXJyZW50VGltZSA9IDAuMDtcclxuICAgIHRoaXMuaXNHcmF2aXR5RG93biA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCJcbmxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5sZXQgcGFydGljbGVzT25TY3JlZW4gPSAyNDU7XG5sZXQgdywgaDtcbmxldCBwYXJ0aWNsZXNBcnJheSA9IFtdO1xuXG53ID0gY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5oID0gY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuZnVuY3Rpb24gcmFuZG9tIChtaW4sIG1heCkge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKTtcbn1cblxuZnVuY3Rpb24gY2xpZW50UmVzaXplIChldikge1xuICB3ID0gY2FudmFzLndpZHRoO1xuICBoID0gY2FudmFzLmhlaWdodDtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNsaWVudFJlc2l6ZSk7XG5cbi8vIGNyZWF0ZVNub3dGbGFrZXMoKTtcbmZ1bmN0aW9uIGNyZWF0ZVNub3dGbGFrZXMgKCkge1xuICBmb3IobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzT25TY3JlZW47IGkrKyl7XG4gICAgcGFydGljbGVzQXJyYXkucHVzaCh7XG4gICAgICB4OiBNYXRoLnJhbmRvbSgpICogdyxcbiAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiBoLFxuICAgICAgb3BhY2l0eTogTWF0aC5yYW5kb20oKSxcbiAgICAgIHNwZWVkWDogcmFuZG9tKC0xLCAxKSxcbiAgICAgIHNwZWVkWTogcmFuZG9tKDEsIDIpLFxuICAgICAgcmFkaXVzOiByYW5kb20oMC41LCA0LjIpLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXdTbm93Rmxha2VzICgpIHtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSxcbiAgICAgIDAsXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSxcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnJhZGl1cyxcbiAgICApO1xuXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDMwLCAxNDQsIDI1NSwgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuOCwgYHJnYmEoMTAwLCAxNDksIDIzNywgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKDY1LCAxMDUsIDIyNSwgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLngsXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ucmFkaXVzLFxuICAgICAgMCxcbiAgICAgIE1hdGguUEkqMixcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICBjdHguZmlsbCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVTbm93Rmxha2VzICgpIHtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBwYXJ0aWNsZXNBcnJheVtpXS54ICs9IHBhcnRpY2xlc0FycmF5W2ldLnNwZWVkWDtcbiAgICBwYXJ0aWNsZXNBcnJheVtpXS55ICs9IHBhcnRpY2xlc0FycmF5W2ldLnNwZWVkWTtcblxuICAgIGlmKHBhcnRpY2xlc0FycmF5W2ldLnkgPiBoKSB7XG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54ID0gTWF0aC5yYW5kb20oKSAqIHcgKiAxLjU7XG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55ID0gLTUwO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVTbm93RmFsbCAoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG4gIGRyYXdTbm93Rmxha2VzKCk7XG4gIG1vdmVTbm93Rmxha2VzKCk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlU25vd0ZsYWtlcywgdXBkYXRlU25vd0ZhbGx9XG4iLCJpbXBvcnQgT2JzdGFjbGUgZnJvbSAnLi9vYnN0YWNsZSc7XG5pbXBvcnQge2NhbnZhc30gZnJvbSAnLi9pbmRleCc7XG4vLyBpbXBvcnQge2dhbWVTcGVlZCwgcGxheWVyLCBvYnN0YWNsZXN9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XG5pbXBvcnQge2dhbWVTcGVlZCwgb2JzdGFjbGVzfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuXG5cbmZ1bmN0aW9uIFNwYXduT2JzdGFjbGUgKCkge1xuICAvLyBsZXQgc2l6ZSA9IFJhbmRvbUludFJhbmdlKDIwLCA3MCk7XG4gIGxldCB0eXBlID0gUmFuZG9tSW50UmFuZ2UoMywgNCk7XG5cblxuICBsZXQgb2JzdGFjbGUgPSBuZXcgT2JzdGFjbGUoe1xuICAgIHg6IGNhbnZhcy53aWR0aCxcbiAgICB5OiBjYW52YXMuaGVpZ2h0LFxuICAgIHdpZHRoOiA1MCxcbiAgICBoZWlnaHQ6IDUwLFxuICAgIGdhbWVTcGVlZDogZ2FtZVNwZWVkLFxuICAgIGltYWdlU3JjOiBgaW1hZ2VzL29ic3RhY2xlJHt0eXBlfS5wbmdgLFxuICB9KTtcblxuICBvYnN0YWNsZXMucHVzaChvYnN0YWNsZSk7XG59XG5cbmZ1bmN0aW9uIFJhbmRvbUludFJhbmdlIChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xufVxuXG5leHBvcnQge1NwYXduT2JzdGFjbGV9O1xuIiwiaW1wb3J0IFBsYXRmb3JtIGZyb20gJy4vUGxhdGZvcm0nO1xuaW1wb3J0IHtjYW52YXN9IGZyb20gJy4vaW5kZXgnO1xuLy8gaW1wb3J0IHtwbGF0Zm9ybXNCaWcsIHBsYXRmb3Jtc01lZGl1bX0gZnJvbSAnLi9nZXRfcGxhdGZvcm0nO1xuaW1wb3J0IHtnYW1lU3BlZWR9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3Bhd25QbGF0Zm9ybShvcHRpb25zKXtcblxuICBsZXQgcGxhdGZvcm1PbmUgPSBuZXcgUGxhdGZvcm0oe1xuICAgIHg6IGNhbnZhcy53aWR0aCxcbiAgICB5OiBjYW52YXMuaGVpZ2h0LFxuICAgIGZsaWdodEFsdGl0dWRlOiBvcHRpb25zLmZsaWdodEFsdGl0dWRlLFxuICAgIHdpZHRoOiBvcHRpb25zLndpZHRoLFxuICAgIGhlaWdodDogb3B0aW9ucy5oZWlnaHQsXG4gICAgZ2FtZVNwZWVkOiBnYW1lU3BlZWQsXG4gICAgaW1hZ2VTcmM6IG9wdGlvbnMuc3JjLFxuICB9KTtcblxuICAvLyBvcHRpb25zLnBsYXRmb3JtLnB1c2gocGxhdGZvcm1PbmUpO1xuICByZXR1cm4gcGxhdGZvcm1PbmU7XG59IiwiaW1wb3J0IEhlcm8gZnJvbSAnLi9oZXJvJztcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHsgU3Bhd25PYnN0YWNsZSB9IGZyb20gJy4vc3Bhd25fb2JzdGFjbGUnO1xuaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVTbm93Rmxha2VzLCB1cGRhdGVTbm93RmFsbCB9IGZyb20gJy4vc25vd19mbGFrZXMnO1xuaW1wb3J0IEdhbWVTb3VuZCBmcm9tICcuL2dhbWUtc291bmQnO1xuaW1wb3J0IGdldENvaW4gZnJvbSAnLi9nZXRfY29pbic7XG5cblxuaW1wb3J0IGdldFBsYXRmb3JtIGZyb20gJy4vZ2V0X3BsYXRmb3JtJztcblxubGV0IGdyYXZpdHk7XG5sZXQgc2NvcmU7XG5sZXQgaGlnaFNjb3JlO1xubGV0IHNjb3JlVGV4dDtcbmxldCBoaWdodFNjb3JlVGV4dDtcblxubGV0IGdhbWVTcGVlZDtcbmxldCBwbGF5ZXI7XG5sZXQgb2JzdGFjbGVzID0gW107XG5sZXQgY29pbnMgPSBbXTtcblxuXG5sZXQga2V5cyA9IHt9O1xubGV0IGNvaW5JbWFnZTtcbmxldCBqdW1wVHJ1ZSA9IGZhbHNlO1xuXG4vLyBsZXQgY29pbjtcblxuLy8gY29uc3QgcGxheVNvdW5kID0gbmV3IEdhbWVTb3VuZCgpO1xuXG5mdW5jdGlvbiBzdGFydCAoKSB7XG5cbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMDU7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAga2V5c1tlLmNvZGVdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgIGtleXNbZS5jb2RlXSA9IGZhbHNlO1xuICB9KTtcblxuXG4gIGN0eC5mb250ID0gXCIyMHB4IHNhbnMtc2VyaWZcIjtcblxuICBnYW1lU3BlZWQgPSAzO1xuICBncmF2aXR5ID0gMTtcblxuICBzY29yZSA9IDA7XG4gIGhpZ2hTY29yZSA9IDA7XG5cbiAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hzY29yZScpKXtcbiAgICBoaWdoU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJyk7XG4gIH1cblxuICBjb2luSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgY29pbkltYWdlLnNyYyA9ICdpbWFnZXMvc3ByaXRlMi5wbmcnO1xuXG5cbiAgcGxheWVyID0gbmV3IEhlcm8oe1xuICAgIGltYWdlOiBjb2luSW1hZ2UsXG4gICAgd2lkdGg6IDYwMCxcbiAgICBoZWlnaHQ6IDEwMCxcbiAgICBudW1iZXJPZkZyYW1lczogNixcbiAgICB0aWNrc1BlckZyYW1lOiA0LFxuICAgIHg6IDUwLFxuICAgIHk6IDUwLFxuICAgIHRlc3Q6IGNhbnZhcy5oZWlnaHQsXG4gIH0pO1xuXG4gIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnN0YXJ0KCk7XG4gICAgLy8gY29pbi5zdGFydCgpO1xuICB9XG4gIFxuICAvLyBjb2luID0gZ2V0Q29pbigpO1xuICAvLyBjb2luLnN0YXJ0KClcbiAgLy8gY29uc29sZS5sb2coY29pbilcblxuICBzY29yZVRleHQgPSBuZXcgVGV4dChcbiAgICBgU2NvcmU6ICR7c2NvcmV9YCwgMjUsIDI1LCBcImxlZnRcIiwgXCIjMjEyMTIxXCIsIFwiMjBcIlxuICApO1xuICBoaWdodFNjb3JlVGV4dCA9IG5ldyBUZXh0KFxuICAgIGBIaWdoc2NvcmU6ICR7aGlnaFNjb3JlfWAsIGNhbnZhcy53aWR0aCAtIDI1LCAyNSwgXCJyaWdodFwiLCBcIiMyMTIxMjFcIiwgXCIyMFwiXG4gICk7XG5cbiAgY3JlYXRlU25vd0ZsYWtlcygpO1xuICAvLyBwbGF5U291bmQucGxheUZvbigpO1xuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShVcGRhdGUpO1xufVxuXG5sZXQgaW5pdGlhbFNwYXduVGltZXIgPSAyMDA7XG5sZXQgc3Bhd25UaW1lciA9IGluaXRpYWxTcGF3blRpbWVyO1xuXG5mdW5jdGlvbiBVcGRhdGUgKCkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoVXBkYXRlKTtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIC8vINCy0YvQutC70Y7Rh9C40YLRjCDRhNC+0L3QvtCy0YPRjiDQvNGD0LfRi9C60YNcbiAgaWYgKGtleXMuS2V5USkge1xuICAgIC8vIHdpbmRvdy5nYW1lU3RhdGUuaXNGb25Tb3VuZCA9IGZhbHNlO1xuICAgIHBsYXlTb3VuZC5zdG9wRm9uKCk7XG4gIH1cblxuICAvLyDQstC60LvRjtGH0LjRgtGMINGE0L7QvdC+0LLRg9GOINC80YPQt9GL0LrRg1xuICBpZiAoa2V5cy5LZXlBKSB7XG4gICAgLy8gd2luZG93LmdhbWVTdGF0ZS5pc0ZvblNvdW5kID0gdHJ1ZTtcbiAgICBwbGF5U291bmQucGxheUZvbigpO1xuICB9XG5cbiAgLy8gc3Bhd24gb2JzdGFjbGVzXG4gIHNwYXduVGltZXItLTtcbiAgaWYgKHNwYXduVGltZXIgPD0gMCkge1xuICAgIFNwYXduT2JzdGFjbGUoKTtcbiAgICBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXIgLSBnYW1lU3BlZWQgKiA4O1xuXG4gICAgaWYgKHNwYXduVGltZXIgPCA2MCkge1xuICAgICAgc3Bhd25UaW1lciA9IDYwO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNwYXduIGNvaW5cbiAgLy8gc3Bhd25Db2luKCk7XG5cbiAgdXBkYXRlU25vd0ZhbGwoKTtcblxuICAvLyBzcGF3biBlbmVtaWVzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JzdGFjbGVzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbyA9IG9ic3RhY2xlc1tpXTtcblxuICAgIGlmIChvLnggKyBvLndpZHRoIDwgMCl7XG4gICAgICBvYnN0YWNsZXMuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuXG4gICAgLy8g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutCwINC40LPRgNGLINC/0YDQuCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LhcbiAgICBpZiAoXG4gICAgICBwbGF5ZXIuZHggPCBvLnggKyBvLndpZHRoICYmXG4gICAgICBwbGF5ZXIuZHggKyAocGxheWVyLndpZHRoIC8gMTApIC0gMTAgPiBvLnggJiZcbiAgICAgIHBsYXllci55IDwgby55ICsgby5oZWlnaHQgJiZcbiAgICAgIHBsYXllci55ICsgcGxheWVyLmhlaWdodCA+PSBvLnlcbiAgICApIHtcbiAgICAgIC8vIHBsYXlTb3VuZC5wbGF5RGVhZCgpO1xuICAgICAgb2JzdGFjbGVzID0gW107XG4gICAgICBnYW1lU3BlZWQgPSAzO1xuICAgICAgc2NvcmUgPSAwO1xuICAgICAgc3Bhd25UaW1lciA9IGluaXRpYWxTcGF3blRpbWVyO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWdoc2NvcmUnLCBoaWdoU2NvcmUpO1xuICAgIH1cbiAgICBvLlVwZGF0ZSgpO1xuICB9XG5cbiAgc2NvcmUrKztcbiAgc2NvcmVUZXh0LnQgPSBcIlNjb3JlOiBcIiArIHNjb3JlO1xuXG5cbiAgc2NvcmVUZXh0LkRyYXcoKTtcblxuICBpZiAoc2NvcmUgPiBoaWdoU2NvcmUpIHtcbiAgICBoaWdoU2NvcmUgPSBzY29yZTtcbiAgICBoaWdodFNjb3JlVGV4dC50ID0gYEhpZ2hzY29yZTogJHtoaWdoU2NvcmV9YDtcbiAgfVxuXG4gIGdhbWVTcGVlZCArPSAwLjAwMztcbiAgaGlnaHRTY29yZVRleHQuRHJhdygpO1xuXG4gIC8vIHNwYXduIHBsYXRmb3JtXG4gIGdldFBsYXRmb3JtKCk7XG5cbiAgLy8gc3Bhd24gY29pblxuICBnZXRDb2luKCk7XG59XG5cbmV4cG9ydCB7c3RhcnQsIGdhbWVTcGVlZCwgb2JzdGFjbGVzLCBrZXlzLCBzY29yZSwgcGxheWVyLCBjb2luc307XG4iLCJpbXBvcnQge2N0eH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dCB7XHJcbiAgY29uc3RydWN0b3IgKHQsIHgsIHksIGEsIGMsIHMpIHtcclxuICAgIHRoaXMudCA9IHQ7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMuYSA9IGE7XHJcbiAgICB0aGlzLmMgPSBjO1xyXG4gICAgdGhpcy5zID0gcztcclxuICB9XHJcblxyXG4gIERyYXcgKCkge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuYztcclxuICAgIGN0eC5mb250ID0gYCR7dGhpcy5zfXB4IHNhbnMtc2VyaWZgO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IHRoaXMuYTtcclxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnQsIHRoaXMueCwgdGhpcy55KTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
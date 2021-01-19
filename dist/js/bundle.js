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
/* harmony import */ var _pages_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/main */ "./src/pages/main.js");
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
      if (_start_game__WEBPACK_IMPORTED_MODULE_1__.keys.Space || _start_game__WEBPACK_IMPORTED_MODULE_1__.keys.KeyW || _start_game__WEBPACK_IMPORTED_MODULE_1__.keys.ArrowUp) {
        this.sound.jumpUp();
        this.Jump();
      } else {
        this.jumpTimer = 0;
      }

      if (_start_game__WEBPACK_IMPORTED_MODULE_1__.keys.KeyM || _start_game__WEBPACK_IMPORTED_MODULE_1__.keys.ArrowRight) {
        if (this.dx < _index__WEBPACK_IMPORTED_MODULE_0__.canvas.width - 100) this.dx += 5;
        this.sx = 0;
        this.isLeft = false;
        this.numberOfFrames = 6;
      }

      if (_start_game__WEBPACK_IMPORTED_MODULE_1__.keys.KeyN || _start_game__WEBPACK_IMPORTED_MODULE_1__.keys.ArrowLeft) {
        if (this.dx > 0) this.dx -= 5;
        this.sx = 100;
        this.isLeft = true;
        this.numberOfFrames = 6;
      }

      if (_start_game__WEBPACK_IMPORTED_MODULE_1__.keys.Escape) {
        window.location.reload();
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
        this.jumpTimer += 1;
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

      this.image.onload = function () {
        window.requestAnimationFrame(loop);
      };
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
/* harmony import */ var _pages_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/main */ "./src/pages/main.js");
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

(0,_pages_main__WEBPACK_IMPORTED_MODULE_3__.default)(); // start();
// export {canvas, ctx, keys}



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

/***/ "./src/pages/help.js":
/*!***************************!*\
  !*** ./src/pages/help.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ help
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../start_game */ "./src/start_game.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./src/pages/options.js");
/* eslint-disable linebreak-style */



function help() {
  _index__WEBPACK_IMPORTED_MODULE_0__.canvas.classList.add('hidden');
  var pageWrapper = document.querySelector('.page-wrapper');
  var page = document.querySelector('.page') || document.createElement('div');
  page.classList.add('page', 'page-image');
  page.innerHTML = "\n  <div class=\"help-txt-wrapper\">\n  Your mission is to collect all the coins. To do this you only have a certain number of lives.\n  <p>Keyboard Control</p>\n  W, Space - JUMP\n  <br>M - MOVE RIGHT\n  <br>N - MOVE LEFT\n  <br>A - MUSIC ON\n  <br>Q - MUSIC OFF\n  <br>Esc - Main MENU\n  <div>\n  <a class=\"btnflip start-help start\" href=\"#\">\n          <span class=\"btnflip-item btnflip__front\">Start Game</span>\n          <span class=\"btnflip-item btnflip__center\"></span>\n          <span class=\"btnflip-item btnflip__back\">Start Game</span>\n  </a>\n  \n  <a class=\"btnflip options-help options\" href=\"#\">\n          <span class=\"btnflip-item btnflip__front\">Options</span>\n          <span class=\"btnflip-item btnflip__center\"></span>\n          <span class=\"btnflip-item btnflip__back\">Options</span>\n  </a>\n  ";

  function startGame() {
    pageWrapper.innerHTML = '';
    pageWrapper.classList.add('hidden');
    _index__WEBPACK_IMPORTED_MODULE_0__.canvas.classList.remove('hidden');
    (0,_start_game__WEBPACK_IMPORTED_MODULE_1__.start)();
  }

  pageWrapper.appendChild(page);
  pageWrapper.classList.remove('hidden');
  var startBtn = document.querySelector('.start');
  startBtn.addEventListener('click', startGame);
  var optionsBtn = document.querySelector('.options');
  optionsBtn.addEventListener('click', function () {
    (0,_options__WEBPACK_IMPORTED_MODULE_2__.default)();
  });
}

/***/ }),

/***/ "./src/pages/main.js":
/*!***************************!*\
  !*** ./src/pages/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ main
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../start_game */ "./src/start_game.js");
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help */ "./src/pages/help.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options */ "./src/pages/options.js");
/* eslint-disable linebreak-style */




function main() {
  _index__WEBPACK_IMPORTED_MODULE_0__.canvas.classList.add('hidden');
  var pageWrapper = document.querySelector('.page-wrapper');
  var page = document.querySelector('.page') || document.createElement('div');
  page.classList.add('page', 'page-image');
  page.innerHTML = "\n<a class=\"btnflip start-main start\" href=\"#\">\n\t\t<span class=\"btnflip-item btnflip__front\">Start Game</span>\n\t\t<span class=\"btnflip-item btnflip__center\"></span>\n\t\t<span class=\"btnflip-item btnflip__back\">Start Game</span>\n</a>\n\n<a class=\"btnflip options-main options\" href=\"#\">\n\t\t<span class=\"btnflip-item btnflip__front\">Options</span>\n\t\t<span class=\"btnflip-item btnflip__center\"></span>\n\t\t<span class=\"btnflip-item btnflip__back\">Options</span>\n</a>\n\n<a class=\"btnflip help-main help\" href=\"#\">\n\t\t<span class=\"btnflip-item btnflip__front\">Help</span>\n\t\t<span class=\"btnflip-item btnflip__center\"></span>\n\t\t<span class=\"btnflip-item btnflip__back\">Help</span>\n</a>\n\n  ";

  function startGame() {
    pageWrapper.innerHTML = '';
    pageWrapper.classList.add('hidden');
    _index__WEBPACK_IMPORTED_MODULE_0__.canvas.classList.remove('hidden');
    (0,_start_game__WEBPACK_IMPORTED_MODULE_1__.start)();
  }

  pageWrapper.appendChild(page);
  pageWrapper.classList.remove('hidden');
  var startBtn = document.querySelector('.start');
  startBtn.addEventListener('click', startGame);
  var helpBtn = document.querySelector('.help');
  helpBtn.addEventListener('click', function () {
    (0,_help__WEBPACK_IMPORTED_MODULE_2__.default)();
  });
  var optionsBtn = document.querySelector('.options');
  optionsBtn.addEventListener('click', function () {
    (0,_options__WEBPACK_IMPORTED_MODULE_3__.default)();
  });
}

/***/ }),

/***/ "./src/pages/options.js":
/*!******************************!*\
  !*** ./src/pages/options.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ options
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../start_game */ "./src/start_game.js");
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help */ "./src/pages/help.js");
/* eslint-disable linebreak-style */



function options() {
  _index__WEBPACK_IMPORTED_MODULE_0__.canvas.classList.add('hidden');
  var pageWrapper = document.querySelector('.page-wrapper');
  var page = document.querySelector('.page') || document.createElement('div');
  page.classList.add('page', 'page-image');
  page.innerHTML = "\n  <a class=\"btnflip start-help start\" href=\"#\">\n\t\t<span class=\"btnflip-item btnflip__front\">Start Game</span>\n\t\t<span class=\"btnflip-item btnflip__center\"></span>\n\t\t<span class=\"btnflip-item btnflip__back\">Start Game</span>\n</a>\n\n<a class=\"btnflip options-help help\" href=\"#\">\n\t\t<span class=\"btnflip-item btnflip__front\">Help</span>\n\t\t<span class=\"btnflip-item btnflip__center\"></span>\n\t\t<span class=\"btnflip-item btnflip__back\">Help</span>\n</a>\n  ";

  function startGame() {
    pageWrapper.innerHTML = '';
    pageWrapper.classList.add('hidden');
    _index__WEBPACK_IMPORTED_MODULE_0__.canvas.classList.remove('hidden');
    (0,_start_game__WEBPACK_IMPORTED_MODULE_1__.start)();
  }

  pageWrapper.appendChild(page);
  pageWrapper.classList.remove('hidden');
  var startBtn = document.querySelector('.start');
  startBtn.addEventListener('click', startGame);
  var helpBtn = document.querySelector('.help');
  helpBtn.addEventListener('click', function () {
    (0,_help__WEBPACK_IMPORTED_MODULE_2__.default)();
  });
}

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
  }); // window.onload = function () {

  player.start(); // coin.start();
  // };
  // coin = getCoin();
  // coin.start()
  // console.log(coin)

  scoreText = new _text__WEBPACK_IMPORTED_MODULE_1__.Text("Score: ".concat(score), 25, 25, 'left', '#212121', '20');
  hightScoreText = new _text__WEBPACK_IMPORTED_MODULE_1__.Text("Highscore: ".concat(highScore), _index__WEBPACK_IMPORTED_MODULE_3__.canvas.width - 25, 25, 'right', '#212121', '20');
  (0,_snow_flakes__WEBPACK_IMPORTED_MODULE_4__.createSnowFlakes)();
  playSound.playFon();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL1BsYXRmb3JtLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvY29pbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dhbWUtc291bmQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9nZXRfY29pbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dldF9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2hlcm8uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL29ic3RhY2xlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGFnZXMvaGVscC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3BhZ2VzL21haW4uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9wYWdlcy9vcHRpb25zLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGxheWVyLXNvdW5kLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvc25vd19mbGFrZXMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9zcGF3bl9vYnN0YWNsZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3NwYXduX3BsYXRmb3JtLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvc3RhcnRfZ2FtZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3RleHQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIlBsYXRmb3JtIiwib3B0aW9ucyIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJmbGlnaHRBbHRpdHVkZSIsImdhbWVTcGVlZCIsImR4IiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsImltYWdlU3JjIiwicmVuZGVyIiwiY3R4IiwiY2FudmFzIiwiQ29pbiIsInRpY2tzUGVyRnJhbWUiLCJudW1iZXJPZkZyYW1lcyIsImZyYW1lSW5kZXgiLCJ0aWNrQ291bnQiLCJhdWRpb09iaiIsIkF1ZGlvIiwicGxheSIsInVwZGF0ZSIsIkdhbWVTb3VuZCIsImZvblNvdW5kIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2b2x1bWUiLCJkZWFkU291bmQiLCJsb29wIiwicGF1c2UiLCJjb2luIiwiY29pbnMiLCJnZXRDb2luIiwic2NvcmUiLCJwdXNoIiwibGVuZ3RoIiwiZm9yRWFjaCIsInN0YXJ0IiwicGxheWVyIiwicGxheUNvaW5Tb3VuZCIsInBsYXRmb3JtIiwicGxhdGZvcm1zIiwiZ2V0UGxhdGZvcm0iLCJtYXAiLCJnZXRSYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwicmFuZG9tIiwiSGVybyIsImR5Iiwic3giLCJqdW1wRm9yY2UiLCJncm91bmRlZCIsImp1bXBUaW1lciIsImdyYXZpdHkiLCJpc0xlZnQiLCJ0ZXN0Iiwic291bmQiLCJQbGF5ZXJTb3VuZCIsImtleXMiLCJqdW1wVXAiLCJKdW1wIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJqdW1wRG93biIsImdyYXZpdHlHbyIsImdldFJlYWR5VG9KdW1wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib25sb2FkIiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJtYWluIiwiT2JzdGFjbGUiLCJoZWxwIiwicGFnZVdyYXBwZXIiLCJwYWdlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsInN0YXJ0R2FtZSIsInJlbW92ZSIsInN0YXJ0QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wdGlvbnNCdG4iLCJoZWxwQnRuIiwic291bmRVcCIsInNvdW5kRG93biIsImlzR3Jhdml0eURvd24iLCJpc0p1bXBVcCIsImN1cnJlbnRUaW1lIiwicGFydGljbGVzT25TY3JlZW4iLCJ3IiwiaCIsInBhcnRpY2xlc0FycmF5IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY2xpZW50UmVzaXplIiwiZXYiLCJjcmVhdGVTbm93Rmxha2VzIiwiaSIsIm9wYWNpdHkiLCJzcGVlZFgiLCJzcGVlZFkiLCJyYWRpdXMiLCJkcmF3U25vd0ZsYWtlcyIsImdyYWRpZW50IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJtb3ZlU25vd0ZsYWtlcyIsInVwZGF0ZVNub3dGYWxsIiwiY2xlYXJSZWN0IiwiU3Bhd25PYnN0YWNsZSIsInR5cGUiLCJSYW5kb21JbnRSYW5nZSIsIm9ic3RhY2xlIiwib2JzdGFjbGVzIiwicm91bmQiLCJzcGF3blBsYXRmb3JtIiwicGxhdGZvcm1PbmUiLCJoaWdoU2NvcmUiLCJzY29yZVRleHQiLCJoaWdodFNjb3JlVGV4dCIsImNvaW5JbWFnZSIsImp1bXBUcnVlIiwicGxheVNvdW5kIiwiZSIsImNvZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiVGV4dCIsInBsYXlGb24iLCJVcGRhdGUiLCJpbml0aWFsU3Bhd25UaW1lciIsInNwYXduVGltZXIiLCJLZXlRIiwic3RvcEZvbiIsIktleUEiLCJvIiwic3BsaWNlIiwicGxheURlYWQiLCJzZXRJdGVtIiwidCIsIkRyYXciLCJhIiwiYyIsInMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUdxQkEsUTtBQUNuQixvQkFBYUMsT0FBYixFQUFzQjtBQUFBOztBQUNw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Q0FBckI7QUFDQWhKLGtEQUFBLGFBQWMsS0FBS2lKLENBQW5CO0FBQ0FqSix1REFBQSxHQUFnQixLQUFLK0ksQ0FBckI7QUFDQS9JLHNEQUFBLENBQWEsS0FBSzZJLENBQWxCLEVBQXFCLEtBQUt6SixDQUExQixFQUE2QixLQUFLQyxDQUFsQztBQUNBVyx1REFBQTtBQUNEO0FBakJIOztBQUFBO0FBQUEsSTs7Ozs7O1VDRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Ii4vanMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9pbmRleC5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm0ge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICB0aGlzLmZsaWdodEFsdGl0dWRlID0gb3B0aW9ucy5mbGlnaHRBbHRpdHVkZTtcbiAgICB0aGlzLmdhbWVTcGVlZCA9IG9wdGlvbnMuZ2FtZVNwZWVkO1xuXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IG9wdGlvbnMuaW1hZ2VTcmM7XG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICB0aGlzLngsXG4gICAgICBjYW52YXMuaGVpZ2h0IC0gdGhpcy5mbGlnaHRBbHRpdHVkZSxcbiAgICApXG4gIH1cblxuICAvLyBzdGFydCgpIHtcbiAgLy8gICBsZXQgbG9vcCA9ICgpID0+IHtcbiAgLy8gICAgIHRoaXMudXBkYXRlKCk7XG4gIC8vICAgICB0aGlzLnJlbmRlcigpO1xuXG4gIC8vICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAvLyAgIH1cblxuICAvLyAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gIC8vIH1cbn1cblxuXG5cbiIsImltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luIHtcblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICBcbiAgICB0aGlzLnRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMDtcbiAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gb3B0aW9ucy5udW1iZXJPZkZyYW1lcyB8fCAxO1xuXG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgdGhpcy50aWNrQ291bnQgPSAwO1xuXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9ICcuL2ltYWdlcy9jb2luLnBuZyc7XG5cbiAgICB0aGlzLmF1ZGlvT2JqID0gbmV3IEF1ZGlvKCcuL3NvdW5kL2NvaW4yLm1wMycpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuXG4gICAgdGhpcy50aWNrQ291bnQrKztcblxuICAgIGlmICh0aGlzLnRpY2tDb3VudCA+IHRoaXMudGlja3NQZXJGcmFtZSkge1xuICAgICAgdGhpcy50aWNrQ291bnQgPSAwO1xuICAgICAgaWYgKHRoaXMuZnJhbWVJbmRleCA8IHRoaXMubnVtYmVyT2ZGcmFtZXMgLSAxKSB7XG4gICAgICAgICAgdGhpcy5mcmFtZUluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5mcmFtZUluZGV4ICogdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICAwLFxuICAgICAgdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMueCxcbiAgICAgIHRoaXMueSxcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgdGhpcy5oZWlnaHRcbiAgICApXG4gIH1cblxuICBwbGF5Q29pblNvdW5kKCkge1xuICAgIHRoaXMuYXVkaW9PYmoucGxheSgpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG59IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU291bmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGhpcy51cmwgPSB3aW5kb3cuZ2FtZVN0YXRlLnNvdW5kVXJsO1xyXG4gICAgLy8gdGhpcy5udW0gPSAxO1xyXG4gICAgdGhpcy5mb25Tb3VuZCA9IG5ldyBBdWRpbygnc291bmQvZm9uMS5tcDMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5mb25Tb3VuZCk7XHJcbiAgICB0aGlzLmZvblNvdW5kLnZvbHVtZSA9IDAuMTtcclxuICAgIHRoaXMuZGVhZFNvdW5kID0gbmV3IEF1ZGlvKCdzb3VuZC9kZWFkLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRlYWRTb3VuZCk7XHJcbiAgfVxyXG5cclxuICBwbGF5Rm9uKCkge1xyXG4gICAgdGhpcy5mb25Tb3VuZC5sb29wID0gdHJ1ZTtcclxuICAgIHRoaXMuZm9uU291bmQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgc3RvcEZvbigpIHtcclxuICAgIHRoaXMuZm9uU291bmQucGF1c2UoKTtcclxuICB9XHJcblxyXG4gIHBsYXlEZWFkKCkge1xyXG4gICAgdGhpcy5kZWFkU291bmQucGxheSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge3Njb3JlLCBwbGF5ZXIgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuaW1wb3J0IHtjYW52YXN9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IENvaW4gZnJvbSAnLi9jb2luJztcbmltcG9ydCB7Z2FtZVNwZWVkfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuXG5sZXQgY29pbjtcbmxldCBjb2lucyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb2luICgpIHtcblxuICBpZihzY29yZSAlIDIwMCA9PSAwKSB7IFxuXG4gICAgY29pbiA9IG5ldyBDb2luKHtcbiAgICAgIHg6IGNhbnZhcy53aWR0aCxcbiAgICAgIHk6IDM1MCxcbiAgICAgIHdpZHRoOiA1MDQsXG4gICAgICBoZWlnaHQ6IDg0LFxuICAgICAgbnVtYmVyT2ZGcmFtZXM6IDYsXG4gICAgICB0aWNrc1BlckZyYW1lOiA0LFxuICAgICAgZ2FtZVNwZWVkOiBnYW1lU3BlZWQsXG4gICAgfSk7XG5cbiAgICBjb2lucy5wdXNoKGNvaW4pO1xuICB9XG5cblxuICBpZihjb2lucy5sZW5ndGggPiAwKSB7XG5cbiAgICBjb2lucy5mb3JFYWNoKGNvaW4gPT4ge1xuICAgICAgY29pbi5zdGFydCgpO1xuICAgICAgXG4gICAgICBpZiAoXG4gICAgICAgIHBsYXllci5keCA8IGNvaW4ueCArIGNvaW4ud2lkdGggJiZcbiAgICAgICAgcGxheWVyLmR4ICsgKHBsYXllci53aWR0aCAvIDEwKSAtIDEwID4gY29pbi54ICYmXG4gICAgICAgIHBsYXllci55IDwgY29pbi55ICsgY29pbi5oZWlnaHQgJiZcbiAgICAgICAgcGxheWVyLnkgKyBwbGF5ZXIuaGVpZ2h0ID49IGNvaW4ueVxuICAgICAgKSB7XG4gICAgICAgIFxuICAgICAgICBjb2luLnkgPSAxMDAwMDtcbiAgICAgICAgY29pbi5wbGF5Q29pblNvdW5kKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2luLnggPCAtNTApIHsgXG4gICAgICAgIGNvaW4ueSA9IDEwMDAwO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBzY29yZSwgcGxheWVyLCBnYW1lU3BlZWQgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuaW1wb3J0IHNwYXduUGxhdGZvcm0gZnJvbSAnLi9zcGF3bl9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBQbGF0Zm9ybSBmcm9tICcuL1BsYXRmb3JtJztcblxubGV0IHBsYXRmb3JtO1xuY29uc3QgcGxhdGZvcm1zID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBsYXRmb3JtKCkge1xuICBpZiAoc2NvcmUgJSAzMDAgPT09IDApIHtcbiAgICBwbGF0Zm9ybSA9IG5ldyBQbGF0Zm9ybSh7XG4gICAgICB4OiBjYW52YXMud2lkdGgsXG4gICAgICB5OiBjYW52YXMuaGVpZ2h0LFxuICAgICAgZmxpZ2h0QWx0aXR1ZGU6IDI1MCxcbiAgICAgIHdpZHRoOiA0OTUsXG4gICAgICBoZWlnaHQ6IDExNSxcbiAgICAgIGdhbWVTcGVlZCxcbiAgICAgIGltYWdlU3JjOiAnaW1hZ2VzL3BsYXRmb3JtYTEucG5nJyxcbiAgICB9KTtcblxuICAgIHBsYXRmb3Jtcy5wdXNoKHBsYXRmb3JtKTtcbiAgfVxuXG4gIGlmIChwbGF0Zm9ybXMpIHtcbiAgICBwbGF0Zm9ybXMubWFwKChwbGF0Zm9ybSkgPT4ge1xuICAgICAgcGxhdGZvcm0udXBkYXRlKCk7XG4gICAgICBpZiAoXG4gICAgICAgIChwbGF5ZXIuZHggPiBwbGF0Zm9ybS54ICYmIHBsYXllci5keCA8IHBsYXRmb3JtLnggKyBwbGF0Zm9ybS53aWR0aCAtIDQwKVxuICAgICAgICAmJiBwbGF5ZXIueSA8IGNhbnZhcy5oZWlnaHQgLSBwbGF0Zm9ybS5mbGlnaHRBbHRpdHVkZVxuICAgICAgKSB7XG4gICAgICAgIHBsYXllci50ZXN0ID0gY2FudmFzLmhlaWdodCAtIHBsYXRmb3JtLmZsaWdodEFsdGl0dWRlICsgMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllci50ZXN0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIGlmKHBsYXRmb3JtKSB7XG4gIC8vICAgcGxhdGZvcm0udXBkYXRlKCk7XG4gIC8vICAgY29uc29sZS5sb2cocGxhdGZvcm0pO1xuXG4gIC8vICAgaWYgKHBsYXRmb3JtLnggKyBwbGF0Zm9ybS53aWR0aCA8IDApe1xuICAvLyAgICAgcGxhdGZvcm0ueCA9IDEwMDAwMDtcbiAgLy8gICB9XG5cbiAgLy8gICBpZihcbiAgLy8gICAgIHBsYXllci54ID4gcGxhdGZvcm0ueFxuICAvLyAgICAgJiYgcGxheWVyLnkgPCBjYW52YXMuaGVpZ2h0IC0gcGxhdGZvcm0uZmxpZ2h0QWx0aXR1ZGVcbiAgLy8gICAgIClcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgcGxheWVyLnRlc3QgPSBjYW52YXMuaGVpZ2h0IC0gcGxhdGZvcm0uZmxpZ2h0QWx0aXR1ZGUgKyAyXG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICBwbGF5ZXIudGVzdCA9IGNhbnZhcy5oZWlnaHQ7XG4gIC8vICAgICB9XG5cbiAgLy8gfVxuXG4gIC8vIHBsYXRmb3Jtcy5wdXNoKHBsYXRmb3JtKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47IC8vINCc0LDQutGB0LjQvNGD0Lwg0L3QtSDQstC60LvRjtGH0LDQtdGC0YHRjywg0LzQuNC90LjQvNGD0Lwg0LLQutC70Y7Rh9Cw0LXRgtGB0Y9cbn1cbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBrZXlzIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcbmltcG9ydCBQbGF5ZXJTb3VuZCBmcm9tICcuL3BsYXllci1zb3VuZCc7XG5pbXBvcnQgbWFpbiBmcm9tICcuL3BhZ2VzL21haW4nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVybyB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmltYWdlID0gb3B0aW9ucy5pbWFnZTtcblxuICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgdGhpcy50aWNrQ291bnQgPSAwO1xuICAgIHRoaXMudGlja3NQZXJGcmFtZSA9IG9wdGlvbnMudGlja3NQZXJGcmFtZSB8fCAwO1xuICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSBvcHRpb25zLm51bWJlck9mRnJhbWVzIHx8IDE7XG5cbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuXG4gICAgdGhpcy5keSA9IG9wdGlvbnMuZHkgfHwgMDtcbiAgICB0aGlzLmR4ID0gMDtcbiAgICB0aGlzLnN4ID0gMDtcbiAgICB0aGlzLmp1bXBGb3JjZSA9IDE1O1xuICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBUaW1lciA9IDA7XG5cbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgdGhpcy54ID0gb3B0aW9ucy54O1xuICAgIHRoaXMuZ3Jhdml0eSA9IDE7XG5cbiAgICB0aGlzLmlzTGVmdCA9IGZhbHNlO1xuXG4gICAgLy8gcGxhdGZvcm1cbiAgICB0aGlzLnRlc3QgPSBvcHRpb25zLnRlc3Q7XG5cbiAgICB0aGlzLnNvdW5kID0gbmV3IFBsYXllclNvdW5kKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy50aWNrQ291bnQgKz0gMTtcblxuICAgIGlmICh0aGlzLnRpY2tDb3VudCA+IHRoaXMudGlja3NQZXJGcmFtZSkge1xuICAgICAgdGhpcy50aWNrQ291bnQgPSAwO1xuICAgICAgaWYgKHRoaXMuZnJhbWVJbmRleCA8IHRoaXMubnVtYmVyT2ZGcmFtZXMgLSAxKSB7XG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICAodGhpcy5mcmFtZUluZGV4ICogdGhpcy53aWR0aCkgLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgdGhpcy5zeCxcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICB0aGlzLmR4LFxuICAgICAgdGhpcy55LFxuICAgICAgdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICApO1xuICB9XG5cbiAgLy8gZ3Jhdml0eVxuICAvLyBncmF2aXR5R28oKSB7XG4gIC8vICAgY29uc29sZS5sb2codGhpcy50ZXN0KVxuICAvLyAgIHRoaXMueSArPSB0aGlzLmR5O1xuXG4gIC8vICAgaWYgKHRoaXMueSArIHRoaXMuaGVpZ2h0IDwgY2FudmFzLmhlaWdodCkge1xuICAvLyAgICAgdGhpcy5keSArPSB0aGlzLmdyYXZpdHk7XG4gIC8vICAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHRoaXMuZHkgPSAwO1xuICAvLyAgICAgdGhpcy5ncm91bmRlZCA9IHRydWU7XG4gIC8vICAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQ7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgZ3Jhdml0eUdvKCkge1xuICAgIHRoaXMueSArPSB0aGlzLmR5O1xuXG4gICAgaWYgKHRoaXMueSArIHRoaXMuaGVpZ2h0IDwgdGhpcy50ZXN0KSB7XG4gICAgICB0aGlzLmR5ICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLmR5ID4gMCkge1xuICAgICAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gMTtcbiAgICAgICAgaWYgKHRoaXMuaXNMZWZ0KSB7XG4gICAgICAgICAgdGhpcy5zeCA9IDMwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN4ID0gNDAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHkgPSAwO1xuICAgICAgdGhpcy5ncm91bmRlZCA9IHRydWU7XG4gICAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gNjtcbiAgICAgIGlmICh0aGlzLmlzTGVmdCkge1xuICAgICAgICB0aGlzLnN4ID0gMTAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zeCA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLnkgPSB0aGlzLnRlc3QgLSB0aGlzLmhlaWdodDtcbiAgICB9XG4gIH1cblxuICAvLyBqdW1wXG4gIGdldFJlYWR5VG9KdW1wKCkge1xuICAgIGlmIChrZXlzLlNwYWNlIHx8IGtleXMuS2V5VyB8fCBrZXlzLkFycm93VXApIHtcbiAgICAgIHRoaXMuc291bmQuanVtcFVwKCk7XG4gICAgICB0aGlzLkp1bXAoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5qdW1wVGltZXIgPSAwO1xuICAgIH1cbiAgICBpZiAoa2V5cy5LZXlNIHx8IGtleXMuQXJyb3dSaWdodCkge1xuICAgICAgaWYgKHRoaXMuZHggPCBjYW52YXMud2lkdGggLSAxMDApIHRoaXMuZHggKz0gNTtcbiAgICAgIHRoaXMuc3ggPSAwO1xuICAgICAgdGhpcy5pc0xlZnQgPSBmYWxzZTtcbiAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSA2O1xuICAgIH1cbiAgICBpZiAoa2V5cy5LZXlOIHx8IGtleXMuQXJyb3dMZWZ0KSB7XG4gICAgICBpZiAodGhpcy5keCA+IDApIHRoaXMuZHggLT0gNTtcbiAgICAgIHRoaXMuc3ggPSAxMDA7XG4gICAgICB0aGlzLmlzTGVmdCA9IHRydWU7XG4gICAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gNjtcbiAgICB9XG4gICAgaWYgKGtleXMuRXNjYXBlKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICB9XG5cbiAgSnVtcCgpIHtcbiAgICBpZiAodGhpcy5ncm91bmRlZCAmJiB0aGlzLmp1bXBUaW1lciA9PT0gMCkge1xuICAgICAgdGhpcy5qdW1wVGltZXIgPSAxO1xuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZTtcbiAgICAgIHRoaXMuc291bmQuanVtcERvd24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuanVtcFRpbWVyID4gMCAmJiB0aGlzLmp1bXBUaW1lciA8IDE1KSB7XG4gICAgICB0aGlzLmp1bXBUaW1lciArPSAxO1xuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZSAtICh0aGlzLmp1bXBUaW1lciAvIDUwKTtcbiAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSAxO1xuICAgICAgaWYgKHRoaXMuaXNMZWZ0KSB7XG4gICAgICAgIHRoaXMuc3ggPSAyMDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN4ID0gNTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIHRoaXMuZ3Jhdml0eUdvKCk7XG4gICAgICB0aGlzLmdldFJlYWR5VG9KdW1wKCk7XG5cbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfTtcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfTtcbiAgfVxufVxuIiwiLy8gaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7IE9ic3RhY2xlIH0gZnJvbSAnLi9vYnN0YWNsZSc7XHJcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuL3RleHQnO1xyXG5pbXBvcnQgeyBzdGFydCB9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XHJcbmltcG9ydCBtYWluIGZyb20gJy4vcGFnZXMvbWFpbic7XHJcblxyXG4vLyBsZXQga2V5cyA9IHt9O1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuLy8gd2luZG93LmdhbWVTdGF0ZSA9IHtcclxuLy8gICBzb3VuZFVybDogJy4uLy4vZGlzdC9zb3VuZC8nLFxyXG4vLyAgIGltZ1VybDogJy4uLy4vZGlzdC9pbWcvJyxcclxuLy8gICBpc0ZvblNvdW5kOiB0cnVlLFxyXG4vLyAgIGlzUGxheWVyU291bmQ6IHRydWUsXHJcbi8vICAgc2V0IGlzU3RhcnRHYW1lKHZhbHVlKSB7XHJcbi8vICAgICBTdGFydCgpO1xyXG4vLyAgIH0sXHJcbi8vIH07XHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuLy8gICBrZXlzW2UuY29kZV0gPSB0cnVlO1xyXG4vLyB9KTtcclxuLy9cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xyXG4vLyAgIGtleXNbZS5jb2RlXSA9IGZhbHNlO1xyXG4vLyB9KTtcclxuXHJcbm1haW4oKTtcclxuLy8gc3RhcnQoKTtcclxuXHJcbi8vIGV4cG9ydCB7Y2FudmFzLCBjdHgsIGtleXN9XHJcbmV4cG9ydCB7IGNhbnZhcywgY3R4IH07XHJcbiIsImltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vaW5kZXguanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XG5cbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLmltYWdlU3JjO1xuICB9XG5cbiAgVXBkYXRlICgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy54LFxuICAgICAgY2FudmFzLmhlaWdodCAtIDU1LFxuICAgIClcbiAgfVxuXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5pbXBvcnQgeyBzdGFydCB9IGZyb20gJy4uL3N0YXJ0X2dhbWUnO1xyXG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVscCgpIHtcclxuICBjYW52YXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgY29uc3QgcGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS13cmFwcGVyJyk7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJywgJ3BhZ2UtaW1hZ2UnKTtcclxuICBwYWdlLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiaGVscC10eHQtd3JhcHBlclwiPlxyXG4gIFlvdXIgbWlzc2lvbiBpcyB0byBjb2xsZWN0IGFsbCB0aGUgY29pbnMuIFRvIGRvIHRoaXMgeW91IG9ubHkgaGF2ZSBhIGNlcnRhaW4gbnVtYmVyIG9mIGxpdmVzLlxyXG4gIDxwPktleWJvYXJkIENvbnRyb2w8L3A+XHJcbiAgVywgU3BhY2UgLSBKVU1QXHJcbiAgPGJyPk0gLSBNT1ZFIFJJR0hUXHJcbiAgPGJyPk4gLSBNT1ZFIExFRlRcclxuICA8YnI+QSAtIE1VU0lDIE9OXHJcbiAgPGJyPlEgLSBNVVNJQyBPRkZcclxuICA8YnI+RXNjIC0gTWFpbiBNRU5VXHJcbiAgPGRpdj5cclxuICA8YSBjbGFzcz1cImJ0bmZsaXAgc3RhcnQtaGVscCBzdGFydFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPlN0YXJ0IEdhbWU8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+U3RhcnQgR2FtZTwvc3Bhbj5cclxuICA8L2E+XHJcbiAgXHJcbiAgPGEgY2xhc3M9XCJidG5mbGlwIG9wdGlvbnMtaGVscCBvcHRpb25zXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2Zyb250XCI+T3B0aW9uczwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj5PcHRpb25zPC9zcGFuPlxyXG4gIDwvYT5cclxuICBgO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgICBwYWdlV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIHBhZ2VXcmFwcGVyLmFwcGVuZENoaWxkKHBhZ2UpO1xyXG4gIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xyXG5cclxuICBjb25zdCBvcHRpb25zQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMnKTtcclxuICBvcHRpb25zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgb3B0aW9ucygpO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSAnLi4vc3RhcnRfZ2FtZSc7XHJcbmltcG9ydCBoZWxwIGZyb20gJy4vaGVscCc7XHJcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluKCkge1xyXG4gIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICBjb25zdCBwYWdlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXdyYXBwZXInKTtcclxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnLCAncGFnZS1pbWFnZScpO1xyXG4gIHBhZ2UuaW5uZXJIVE1MID0gYFxyXG48YSBjbGFzcz1cImJ0bmZsaXAgc3RhcnQtbWFpbiBzdGFydFwiIGhyZWY9XCIjXCI+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPlN0YXJ0IEdhbWU8L3NwYW4+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+U3RhcnQgR2FtZTwvc3Bhbj5cclxuPC9hPlxyXG5cclxuPGEgY2xhc3M9XCJidG5mbGlwIG9wdGlvbnMtbWFpbiBvcHRpb25zXCIgaHJlZj1cIiNcIj5cclxuXHRcdDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2Zyb250XCI+T3B0aW9uczwvc3Bhbj5cclxuXHRcdDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuXHRcdDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj5PcHRpb25zPC9zcGFuPlxyXG48L2E+XHJcblxyXG48YSBjbGFzcz1cImJ0bmZsaXAgaGVscC1tYWluIGhlbHBcIiBocmVmPVwiI1wiPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj5IZWxwPC9zcGFuPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPkhlbHA8L3NwYW4+XHJcbjwvYT5cclxuXHJcbiAgYDtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gICAgcGFnZVdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBwYWdlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIGNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIHN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwYWdlV3JhcHBlci5hcHBlbmRDaGlsZChwYWdlKTtcclxuICBwYWdlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XHJcblxyXG4gIGNvbnN0IGhlbHBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVscCcpO1xyXG4gIGhlbHBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBoZWxwKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucycpO1xyXG4gIG9wdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBvcHRpb25zKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IHsgc3RhcnQgfSBmcm9tICcuLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IGhlbHAgZnJvbSAnLi9oZWxwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wdGlvbnMoKSB7XHJcbiAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIGNvbnN0IHBhZ2VXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2Utd3JhcHBlcicpO1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScsICdwYWdlLWltYWdlJyk7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgPGEgY2xhc3M9XCJidG5mbGlwIHN0YXJ0LWhlbHAgc3RhcnRcIiBocmVmPVwiI1wiPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj5TdGFydCBHYW1lPC9zcGFuPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPlN0YXJ0IEdhbWU8L3NwYW4+XHJcbjwvYT5cclxuXHJcbjxhIGNsYXNzPVwiYnRuZmxpcCBvcHRpb25zLWhlbHAgaGVscFwiIGhyZWY9XCIjXCI+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPkhlbHA8L3NwYW4+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+SGVscDwvc3Bhbj5cclxuPC9hPlxyXG4gIGA7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICAgIHBhZ2VXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBjYW52YXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBzdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgcGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbiAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XHJcblxyXG4gIGNvbnN0IGhlbHBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVscCcpO1xyXG4gIGhlbHBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBoZWxwKCk7XHJcbiAgfSk7XHJcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllclNvdW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIHRoaXMudXJsID0gd2luZG93LmdhbWVTdGF0ZS5zb3VuZFVybDtcclxuICAgIHRoaXMuc291bmRVcCA9IG5ldyBBdWRpbygnc291bmQvanVtcFVwLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kVXApO1xyXG4gICAgdGhpcy5zb3VuZERvd24gPSBuZXcgQXVkaW8oJ3NvdW5kL2dyYXZpdHlEb3duLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kRG93bik7XHJcbiAgICB0aGlzLmlzR3Jhdml0eURvd24gPSBmYWxzZTtcclxuICAgIHRoaXMuaXNKdW1wVXAgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGp1bXBVcCgpIHtcclxuICAgIGlmICghdGhpcy5pc0p1bXBVcCkge1xyXG4gICAgICB0aGlzLnNvdW5kVXAucGxheSgpO1xyXG4gICAgICB0aGlzLmlzSnVtcFVwID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGp1bXBEb3duKCkge1xyXG4gICAgdGhpcy5zb3VuZFVwLnBhdXNlKCk7XHJcbiAgICB0aGlzLnNvdW5kVXAuY3VycmVudFRpbWUgPSAwLjA7XHJcbiAgICB0aGlzLmlzSnVtcFVwID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBncmF2aXR5RG93bigpIHtcclxuICAgIGlmICghdGhpcy5pc0dyYXZpdHlEb3duKSB7XHJcbiAgICAgIHRoaXMuc291bmREb3duLnBsYXkoKTtcclxuICAgICAgdGhpcy5pc0dyYXZpdHlEb3duID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdyYXZpdHlVcCgpIHtcclxuICAgIHRoaXMuc291bmREb3duLnBhdXNlKCk7XHJcbiAgICB0aGlzLnNvdW5kRG93bi5jdXJyZW50VGltZSA9IDAuMDtcclxuICAgIHRoaXMuaXNHcmF2aXR5RG93biA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCJcbmxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5sZXQgcGFydGljbGVzT25TY3JlZW4gPSAyNDU7XG5sZXQgdywgaDtcbmxldCBwYXJ0aWNsZXNBcnJheSA9IFtdO1xuXG53ID0gY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5oID0gY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuZnVuY3Rpb24gcmFuZG9tIChtaW4sIG1heCkge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKTtcbn1cblxuZnVuY3Rpb24gY2xpZW50UmVzaXplIChldikge1xuICB3ID0gY2FudmFzLndpZHRoO1xuICBoID0gY2FudmFzLmhlaWdodDtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNsaWVudFJlc2l6ZSk7XG5cbi8vIGNyZWF0ZVNub3dGbGFrZXMoKTtcbmZ1bmN0aW9uIGNyZWF0ZVNub3dGbGFrZXMgKCkge1xuICBmb3IobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzT25TY3JlZW47IGkrKyl7XG4gICAgcGFydGljbGVzQXJyYXkucHVzaCh7XG4gICAgICB4OiBNYXRoLnJhbmRvbSgpICogdyxcbiAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiBoLFxuICAgICAgb3BhY2l0eTogTWF0aC5yYW5kb20oKSxcbiAgICAgIHNwZWVkWDogcmFuZG9tKC0xLCAxKSxcbiAgICAgIHNwZWVkWTogcmFuZG9tKDEsIDIpLFxuICAgICAgcmFkaXVzOiByYW5kb20oMC41LCA0LjIpLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXdTbm93Rmxha2VzICgpIHtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSxcbiAgICAgIDAsXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSxcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnJhZGl1cyxcbiAgICApO1xuXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDMwLCAxNDQsIDI1NSwgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuOCwgYHJnYmEoMTAwLCAxNDksIDIzNywgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKDY1LCAxMDUsIDIyNSwgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLngsXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ucmFkaXVzLFxuICAgICAgMCxcbiAgICAgIE1hdGguUEkqMixcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICBjdHguZmlsbCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVTbm93Rmxha2VzICgpIHtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBwYXJ0aWNsZXNBcnJheVtpXS54ICs9IHBhcnRpY2xlc0FycmF5W2ldLnNwZWVkWDtcbiAgICBwYXJ0aWNsZXNBcnJheVtpXS55ICs9IHBhcnRpY2xlc0FycmF5W2ldLnNwZWVkWTtcblxuICAgIGlmKHBhcnRpY2xlc0FycmF5W2ldLnkgPiBoKSB7XG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54ID0gTWF0aC5yYW5kb20oKSAqIHcgKiAxLjU7XG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55ID0gLTUwO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVTbm93RmFsbCAoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG4gIGRyYXdTbm93Rmxha2VzKCk7XG4gIG1vdmVTbm93Rmxha2VzKCk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlU25vd0ZsYWtlcywgdXBkYXRlU25vd0ZhbGx9XG4iLCJpbXBvcnQgT2JzdGFjbGUgZnJvbSAnLi9vYnN0YWNsZSc7XG5pbXBvcnQge2NhbnZhc30gZnJvbSAnLi9pbmRleCc7XG4vLyBpbXBvcnQge2dhbWVTcGVlZCwgcGxheWVyLCBvYnN0YWNsZXN9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XG5pbXBvcnQge2dhbWVTcGVlZCwgb2JzdGFjbGVzfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuXG5cbmZ1bmN0aW9uIFNwYXduT2JzdGFjbGUgKCkge1xuICAvLyBsZXQgc2l6ZSA9IFJhbmRvbUludFJhbmdlKDIwLCA3MCk7XG4gIGxldCB0eXBlID0gUmFuZG9tSW50UmFuZ2UoMywgNCk7XG5cblxuICBsZXQgb2JzdGFjbGUgPSBuZXcgT2JzdGFjbGUoe1xuICAgIHg6IGNhbnZhcy53aWR0aCxcbiAgICB5OiBjYW52YXMuaGVpZ2h0LFxuICAgIHdpZHRoOiA1MCxcbiAgICBoZWlnaHQ6IDUwLFxuICAgIGdhbWVTcGVlZDogZ2FtZVNwZWVkLFxuICAgIGltYWdlU3JjOiBgaW1hZ2VzL29ic3RhY2xlJHt0eXBlfS5wbmdgLFxuICB9KTtcblxuICBvYnN0YWNsZXMucHVzaChvYnN0YWNsZSk7XG59XG5cbmZ1bmN0aW9uIFJhbmRvbUludFJhbmdlIChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xufVxuXG5leHBvcnQge1NwYXduT2JzdGFjbGV9O1xuIiwiaW1wb3J0IFBsYXRmb3JtIGZyb20gJy4vUGxhdGZvcm0nO1xuaW1wb3J0IHtjYW52YXN9IGZyb20gJy4vaW5kZXgnO1xuLy8gaW1wb3J0IHtwbGF0Zm9ybXNCaWcsIHBsYXRmb3Jtc01lZGl1bX0gZnJvbSAnLi9nZXRfcGxhdGZvcm0nO1xuaW1wb3J0IHtnYW1lU3BlZWR9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3Bhd25QbGF0Zm9ybShvcHRpb25zKXtcblxuICBsZXQgcGxhdGZvcm1PbmUgPSBuZXcgUGxhdGZvcm0oe1xuICAgIHg6IGNhbnZhcy53aWR0aCxcbiAgICB5OiBjYW52YXMuaGVpZ2h0LFxuICAgIGZsaWdodEFsdGl0dWRlOiBvcHRpb25zLmZsaWdodEFsdGl0dWRlLFxuICAgIHdpZHRoOiBvcHRpb25zLndpZHRoLFxuICAgIGhlaWdodDogb3B0aW9ucy5oZWlnaHQsXG4gICAgZ2FtZVNwZWVkOiBnYW1lU3BlZWQsXG4gICAgaW1hZ2VTcmM6IG9wdGlvbnMuc3JjLFxuICB9KTtcblxuICAvLyBvcHRpb25zLnBsYXRmb3JtLnB1c2gocGxhdGZvcm1PbmUpO1xuICByZXR1cm4gcGxhdGZvcm1PbmU7XG59IiwiaW1wb3J0IEhlcm8gZnJvbSAnLi9oZXJvJztcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHsgU3Bhd25PYnN0YWNsZSB9IGZyb20gJy4vc3Bhd25fb2JzdGFjbGUnO1xuaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZVNub3dGbGFrZXMsIHVwZGF0ZVNub3dGYWxsIH0gZnJvbSAnLi9zbm93X2ZsYWtlcyc7XG5pbXBvcnQgR2FtZVNvdW5kIGZyb20gJy4vZ2FtZS1zb3VuZCc7XG5pbXBvcnQgZ2V0Q29pbiBmcm9tICcuL2dldF9jb2luJztcblxuaW1wb3J0IGdldFBsYXRmb3JtIGZyb20gJy4vZ2V0X3BsYXRmb3JtJztcblxubGV0IGdyYXZpdHk7XG5sZXQgc2NvcmU7XG5sZXQgaGlnaFNjb3JlO1xubGV0IHNjb3JlVGV4dDtcbmxldCBoaWdodFNjb3JlVGV4dDtcblxubGV0IGdhbWVTcGVlZDtcbmxldCBwbGF5ZXI7XG5sZXQgb2JzdGFjbGVzID0gW107XG5jb25zdCBjb2lucyA9IFtdO1xuXG5jb25zdCBrZXlzID0ge307XG5sZXQgY29pbkltYWdlO1xuY29uc3QganVtcFRydWUgPSBmYWxzZTtcblxuLy8gbGV0IGNvaW47XG5cbmNvbnN0IHBsYXlTb3VuZCA9IG5ldyBHYW1lU291bmQoKTtcblxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjA1O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGtleXNbZS5jb2RlXSA9IHRydWU7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICBrZXlzW2UuY29kZV0gPSBmYWxzZTtcbiAgfSk7XG5cbiAgY3R4LmZvbnQgPSAnMjBweCBzYW5zLXNlcmlmJztcblxuICBnYW1lU3BlZWQgPSAzO1xuICBncmF2aXR5ID0gMTtcblxuICBzY29yZSA9IDA7XG4gIGhpZ2hTY29yZSA9IDA7XG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoc2NvcmUnKSkge1xuICAgIGhpZ2hTY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoc2NvcmUnKTtcbiAgfVxuXG4gIGNvaW5JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBjb2luSW1hZ2Uuc3JjID0gJ2ltYWdlcy9zcHJpdGUyLnBuZyc7XG5cbiAgcGxheWVyID0gbmV3IEhlcm8oe1xuICAgIGltYWdlOiBjb2luSW1hZ2UsXG4gICAgd2lkdGg6IDYwMCxcbiAgICBoZWlnaHQ6IDEwMCxcbiAgICBudW1iZXJPZkZyYW1lczogNixcbiAgICB0aWNrc1BlckZyYW1lOiA0LFxuICAgIHg6IDUwLFxuICAgIHk6IDUwLFxuICAgIHRlc3Q6IGNhbnZhcy5oZWlnaHQsXG4gIH0pO1xuXG4gIC8vIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnN0YXJ0KCk7XG4gICAgLy8gY29pbi5zdGFydCgpO1xuICAvLyB9O1xuXG4gIC8vIGNvaW4gPSBnZXRDb2luKCk7XG4gIC8vIGNvaW4uc3RhcnQoKVxuICAvLyBjb25zb2xlLmxvZyhjb2luKVxuXG4gIHNjb3JlVGV4dCA9IG5ldyBUZXh0KFxuICAgIGBTY29yZTogJHtzY29yZX1gLCAyNSwgMjUsICdsZWZ0JywgJyMyMTIxMjEnLCAnMjAnLFxuICApO1xuICBoaWdodFNjb3JlVGV4dCA9IG5ldyBUZXh0KFxuICAgIGBIaWdoc2NvcmU6ICR7aGlnaFNjb3JlfWAsIGNhbnZhcy53aWR0aCAtIDI1LCAyNSwgJ3JpZ2h0JywgJyMyMTIxMjEnLCAnMjAnLFxuICApO1xuXG4gIGNyZWF0ZVNub3dGbGFrZXMoKTtcbiAgcGxheVNvdW5kLnBsYXlGb24oKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKFVwZGF0ZSk7XG59XG5cbmNvbnN0IGluaXRpYWxTcGF3blRpbWVyID0gMjAwO1xubGV0IHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcblxuZnVuY3Rpb24gVXBkYXRlKCkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoVXBkYXRlKTtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIC8vINCy0YvQutC70Y7Rh9C40YLRjCDRhNC+0L3QvtCy0YPRjiDQvNGD0LfRi9C60YNcbiAgaWYgKGtleXMuS2V5USkge1xuICAgIC8vIHdpbmRvdy5nYW1lU3RhdGUuaXNGb25Tb3VuZCA9IGZhbHNlO1xuICAgIHBsYXlTb3VuZC5zdG9wRm9uKCk7XG4gIH1cblxuICAvLyDQstC60LvRjtGH0LjRgtGMINGE0L7QvdC+0LLRg9GOINC80YPQt9GL0LrRg1xuICBpZiAoa2V5cy5LZXlBKSB7XG4gICAgLy8gd2luZG93LmdhbWVTdGF0ZS5pc0ZvblNvdW5kID0gdHJ1ZTtcbiAgICBwbGF5U291bmQucGxheUZvbigpO1xuICB9XG5cbiAgLy8gc3Bhd24gb2JzdGFjbGVzXG4gIHNwYXduVGltZXIgLT0gMTtcbiAgaWYgKHNwYXduVGltZXIgPD0gMCkge1xuICAgIFNwYXduT2JzdGFjbGUoKTtcbiAgICBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXIgLSBnYW1lU3BlZWQgKiA4O1xuXG4gICAgaWYgKHNwYXduVGltZXIgPCA2MCkge1xuICAgICAgc3Bhd25UaW1lciA9IDYwO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNwYXduIGNvaW5cbiAgLy8gc3Bhd25Db2luKCk7XG5cbiAgdXBkYXRlU25vd0ZhbGwoKTtcblxuICAvLyBzcGF3biBlbmVtaWVzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JzdGFjbGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbyA9IG9ic3RhY2xlc1tpXTtcblxuICAgIGlmIChvLnggKyBvLndpZHRoIDwgMCkge1xuICAgICAgb2JzdGFjbGVzLnNwbGljZShpLCAxKTtcbiAgICB9XG5cbiAgICAvLyDQv9C10YDQtdC30LDQs9GA0YPQt9C60LAg0LjQs9GA0Ysg0L/RgNC4INGB0YLQvtC70LrQvdC+0LLQtdC90LjQuFxuICAgIGlmIChcbiAgICAgIHBsYXllci5keCA8IG8ueCArIG8ud2lkdGhcbiAgICAgICYmIHBsYXllci5keCArIChwbGF5ZXIud2lkdGggLyAxMCkgLSAxMCA+IG8ueFxuICAgICAgJiYgcGxheWVyLnkgPCBvLnkgKyBvLmhlaWdodFxuICAgICAgJiYgcGxheWVyLnkgKyBwbGF5ZXIuaGVpZ2h0ID49IG8ueVxuICAgICkge1xuICAgICAgcGxheVNvdW5kLnBsYXlEZWFkKCk7XG4gICAgICBvYnN0YWNsZXMgPSBbXTtcbiAgICAgIGdhbWVTcGVlZCA9IDM7XG4gICAgICBzY29yZSA9IDA7XG4gICAgICBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXI7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hzY29yZScsIGhpZ2hTY29yZSk7XG4gICAgfVxuICAgIG8uVXBkYXRlKCk7XG4gIH1cblxuICBzY29yZSArPSAxO1xuICBzY29yZVRleHQudCA9IGBTY29yZTogJHtzY29yZX1gO1xuXG4gIHNjb3JlVGV4dC5EcmF3KCk7XG5cbiAgaWYgKHNjb3JlID4gaGlnaFNjb3JlKSB7XG4gICAgaGlnaFNjb3JlID0gc2NvcmU7XG4gICAgaGlnaHRTY29yZVRleHQudCA9IGBIaWdoc2NvcmU6ICR7aGlnaFNjb3JlfWA7XG4gIH1cblxuICBnYW1lU3BlZWQgKz0gMC4wMDM7XG4gIGhpZ2h0U2NvcmVUZXh0LkRyYXcoKTtcblxuICAvLyBzcGF3biBwbGF0Zm9ybVxuICBnZXRQbGF0Zm9ybSgpO1xuXG4gIC8vIHNwYXduIGNvaW5cbiAgZ2V0Q29pbigpO1xufVxuXG5leHBvcnQge1xuICBzdGFydCwgZ2FtZVNwZWVkLCBvYnN0YWNsZXMsIGtleXMsIHNjb3JlLCBwbGF5ZXIsIGNvaW5zLFxufTtcbiIsImltcG9ydCB7Y3R4fSBmcm9tICcuL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0IHtcclxuICBjb25zdHJ1Y3RvciAodCwgeCwgeSwgYSwgYywgcykge1xyXG4gICAgdGhpcy50ID0gdDtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5hID0gYTtcclxuICAgIHRoaXMuYyA9IGM7XHJcbiAgICB0aGlzLnMgPSBzO1xyXG4gIH1cclxuXHJcbiAgRHJhdyAoKSB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jO1xyXG4gICAgY3R4LmZvbnQgPSBgJHt0aGlzLnN9cHggc2Fucy1zZXJpZmA7XHJcbiAgICBjdHgudGV4dEFsaWduID0gdGhpcy5hO1xyXG4gICAgY3R4LmZpbGxUZXh0KHRoaXMudCwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9
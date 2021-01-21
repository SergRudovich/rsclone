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

/***/ "./src/cloud.js":
/*!**********************!*\
  !*** ./src/cloud.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Cloud
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Cloud = /*#__PURE__*/function () {
  function Cloud(options) {
    _classCallCheck(this, Cloud);

    this.x = _index_js__WEBPACK_IMPORTED_MODULE_0__.canvas.width;
    this.sx = options.sx;
    this.sy = options.sy;
    this.sWidth = options.sWidth;
    this.sHeight = options.sHeight;
    this.dy = options.dy;
    this.dWidth = options.sWidth;
    this.dHeight = options.sHeight;
    this.dx = -_start_game__WEBPACK_IMPORTED_MODULE_1__.gameSpeed;
    this.image = new Image();
    this.image.src = options.src;
  }

  _createClass(Cloud, [{
    key: "update",
    value: function update() {
      this.x += this.dx;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.x, this.dy, this.dWidth, this.dHeight);
    }
  }]);

  return Cloud;
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

/***/ "./src/get_clouds.js":
/*!***************************!*\
  !*** ./src/get_clouds.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getClouds
/* harmony export */ });
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");
/* harmony import */ var _cloud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cloud */ "./src/cloud.js");
/* harmony import */ var _get_random_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get_random_int */ "./src/get_random_int.js");



var clouds = [{
  src: "images/clouds.png",
  sx: 0,
  sy: 0,
  sWidth: 220,
  sHeight: 160,
  dy: 150,
  dWidth: 220,
  dHeight: 160
}, {
  src: "images/clouds.png",
  sx: 250,
  sy: 0,
  sWidth: 220,
  sHeight: 160,
  dy: 100,
  dWidth: 220,
  dHeight: 160
}];
var cloud;
var random;
function getClouds() {
  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % 250 == 0) {
    random = clouds[(0,_get_random_int__WEBPACK_IMPORTED_MODULE_2__.default)(0, 2)];
    cloud = new _cloud__WEBPACK_IMPORTED_MODULE_1__.default(random);
  }

  if (cloud) {
    cloud.update();
  }
}

/***/ }),

/***/ "./src/get_coin.js":
/*!*************************!*\
  !*** ./src/get_coin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coinsCounter": () => /* binding */ coinsCounter,
/* harmony export */   "getCoin": () => /* binding */ getCoin
/* harmony export */ });
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _coin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coin */ "./src/coin.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text */ "./src/text.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lang */ "./src/lang.js");






var coin;
var coins = [];
var coinsText; // должен быть именно обьект а не переменная типа let coinsCounter = 0;
// удалить эти строки через несколько коммитов)

var coinsCounter = {
  counter: 0
};

function getCoin() {
  coinsText = new _text__WEBPACK_IMPORTED_MODULE_3__.Text("".concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[localStorage.getItem('langSelected')].coinsTxt, " ").concat(coinsCounter.counter), 350, 25, "right", "#212121", "20");
  coinsText.Draw();

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
        coinsCounter.counter += 1;
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Platform */ "./src/Platform.js");
/* harmony import */ var _get_random_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get_random_int */ "./src/get_random_int.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var platform;
var platforms = [];
var platformsOptions = [{
  src: "images/platforma1.png",
  width: 495,
  height: 115
}, {
  src: "images/platforma2.png",
  width: 280,
  height: 115
}];
function getPlatform() {
  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % 200 == 0) {
    var type = (0,_get_random_int__WEBPACK_IMPORTED_MODULE_3__.default)(0, 2);
    type = platformsOptions[type];
    platform = new _Platform__WEBPACK_IMPORTED_MODULE_2__.default({
      x: _index__WEBPACK_IMPORTED_MODULE_1__.canvas.width,
      y: _index__WEBPACK_IMPORTED_MODULE_1__.canvas.height,
      flightAltitude: 250,
      width: type.width,
      height: type.height,
      gameSpeed: _start_game__WEBPACK_IMPORTED_MODULE_0__.gameSpeed,
      imageSrc: type.src
    });
    platforms.push(platform);
  }

  var flag = false;

  var _iterator = _createForOfIteratorHelper(platforms),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _platform = _step.value;

      _platform.update();

      if (_start_game__WEBPACK_IMPORTED_MODULE_0__.player.dx > _platform.x && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.dx < _platform.x + _platform.width - 40 && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.y < _index__WEBPACK_IMPORTED_MODULE_1__.canvas.height - _platform.flightAltitude) {
        _start_game__WEBPACK_IMPORTED_MODULE_0__.player.test = _index__WEBPACK_IMPORTED_MODULE_1__.canvas.height - _platform.flightAltitude + 2;
        flag = true;
      } else {
        if (!flag) {
          _start_game__WEBPACK_IMPORTED_MODULE_0__.player.test = _index__WEBPACK_IMPORTED_MODULE_1__.canvas.height;
          flag = false;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ }),

/***/ "./src/get_random_int.js":
/*!*******************************!*\
  !*** ./src/get_random_int.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ getRandomInt
/* harmony export */ });
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
/* eslint-disable linebreak-style */
// import { Hero } from './hero';



 // let keys = {};

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
if (!localStorage.getItem('langSelected')) localStorage.setItem('langSelected', 'en'); // window.gameState = {
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

/***/ "./src/lang.js":
/*!*********************!*\
  !*** ./src/lang.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lang": () => /* binding */ lang
/* harmony export */ });
var lang = {
  en: {
    scoreTxt: 'Score:',
    coinsTxt: 'Coins:',
    bestScoreTxt: 'Best score:',
    startGameBtn: 'Start Game',
    optionsBtn: 'Options',
    selectLng: 'Select language:',
    helpBtn: 'Help',
    helpTxt1: 'Your mission is to collect all the coins. To do this you only have a certain number  of lives. You can jump, move left and right within screen.',
    helpTxt2: 'Keyboard Control:',
    helpTxt3: 'W, Space, ^ - JUMP',
    helpTxt4: 'M, > - MOVE RIGHT',
    helpTxt5: 'N, < - MOVE LEFT',
    helpTxt6: 'A - MUSIC ON',
    helpTxt7: 'Q - MUSIC OFF',
    helpTxt8: 'Esc - MAIN MENU'
  },
  ru: {
    scoreTxt: 'Результат:',
    coinsTxt: 'Монеты:',
    bestScoreTxt: 'Лучший результат:',
    startGameBtn: 'Начать игру',
    optionsBtn: 'Настройки',
    selectLng: 'Выберите язык:',
    helpBtn: 'Помощь',
    helpTxt1: 'Ваша задача собрать все монеты. Для этого у вас есть определенной количество жизней. Вы можете прыгать, идти влево и вправо в пределах экрана.',
    helpTxt2: 'Клавиши управления:',
    helpTxt3: 'W, Space, ^ - Прыжок',
    helpTxt4: 'M, > - Идти вправо',
    helpTxt5: 'N, < - Идти влево',
    helpTxt6: 'A - Включить музыку',
    helpTxt7: 'Q - Выключить музыку',
    helpTxt8: 'Esc - Главное меню'
  },
  br: {
    scoreTxt: 'Вынік:',
    coinsTxt: 'Манеты:',
    bestScoreTxt: 'Лепшы вынік:',
    startGameBtn: 'Пачать ігру',
    optionsBtn: 'Опцыі',
    selectLng: 'Выберыце мову:',
    helpBtn: 'Дапамога',
    helpTxt1: 'Ваша задача сабраць усе манеты. Для гэтага ў вас ёсць пэўнай колькасць жыццяў. Вы можаце скакаць, ісці налева і направа ў межах экрана.',
    helpTxt2: 'Клавішы кіравання:',
    helpTxt3: 'W, Space, ^ - Прыжок',
    helpTxt4: 'M, > - Iсці налева',
    helpTxt5: 'N, < - Iсці направа',
    helpTxt6: 'A - Уключыць музыку',
    helpTxt7: 'Q - Выключыць музыку',
    helpTxt8: 'Esc - Галоўнае меню'
  }
};


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
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lang */ "./src/lang.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options */ "./src/pages/options.js");
/* eslint-disable linebreak-style */




function help() {
  _index__WEBPACK_IMPORTED_MODULE_0__.canvas.classList.add('hidden');
  var lg = localStorage.getItem('langSelected');
  var pageWrapper = document.querySelector('.page-wrapper');
  var page = document.querySelector('.page') || document.createElement('div');
  page.classList.add('page', 'page-image');
  page.innerHTML = "\n  <div class=\"help-txt-wrapper\">\n  ".concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].helpTxt1, "\n  <p>").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].helpTxt2, "</p>\n  ").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].helpTxt3, "\n  <br>").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].helpTxt4, "\n  <br>").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].helpTxt5, "\n  <br>").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].helpTxt6, "\n  <br>").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].helpTxt7, "\n  <br>").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].helpTxt8, "\n  </div>\n  <a class=\"btnflip start-help start\" href=\"#\">\n          <span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].startGameBtn, "</span>\n          <span class=\"btnflip-item btnflip__center\"></span>\n          <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].startGameBtn, "</span>\n  </a>\n  \n  <a class=\"btnflip options-help options\" href=\"#\">\n          <span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].optionsBtn, "</span>\n          <span class=\"btnflip-item btnflip__center\"></span>\n          <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_2__.lang[lg].optionsBtn, "</span>\n  </a>\n  ");

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
    (0,_options__WEBPACK_IMPORTED_MODULE_3__.default)();
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
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lang */ "./src/lang.js");
/* eslint-disable linebreak-style */





function main() {
  _index__WEBPACK_IMPORTED_MODULE_0__.canvas.classList.add('hidden');
  var lg = localStorage.getItem('langSelected');
  var pageWrapper = document.querySelector('.page-wrapper');
  var page = document.querySelector('.page') || document.createElement('div');
  page.classList.add('page', 'page-image');
  page.innerHTML = "\n<a class=\"btnflip start-main start\" href=\"#\">\n\t\t<span class=\"btnflip-item btnflip__front\">".concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].startGameBtn, "</span>\n\t\t<span class=\"btnflip-item btnflip__center\"></span>\n\t\t<span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].startGameBtn, "</span>\n</a>\n\n<a class=\"btnflip options-main options\" href=\"#\">\n\t\t<span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].optionsBtn, "</span>\n\t\t<span class=\"btnflip-item btnflip__center\"></span>\n\t\t<span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].optionsBtn, "</span>\n</a>\n\n<a class=\"btnflip help-main help\" href=\"#\">\n\t\t<span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].helpBtn, "</span>\n\t\t<span class=\"btnflip-item btnflip__center\"></span>\n\t\t<span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].helpBtn, "</span>\n</a>\n\n  ");

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
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lang */ "./src/lang.js");
/* eslint-disable linebreak-style */




function options() {
  _index__WEBPACK_IMPORTED_MODULE_0__.canvas.classList.add('hidden');
  var lg = localStorage.getItem('langSelected');
  var pageWrapper = document.querySelector('.page-wrapper');
  var page = document.querySelector('.page') || document.createElement('div');
  page.classList.add('page', 'page-image');
  page.innerHTML = "\n  <div class=\"help-txt-wrapper\">\n  <p class=\"menuItem\" id='menuFieldSize'>\n  <label>".concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].selectLng, "</label>\n  <select id=\"selectLang\">\n      <option value=\"en\" selected=\"selected\">english</option>\n      <option value=\"ru\">\u0440\u0443\u0441\u0441\u043A\u0438\u0439</option>\n      <option value=\"br\">\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F</option>\n  </select>\n  </p>\n  </div>\n  <a class=\"btnflip start-help start\" href=\"#\">\n\t\t<span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].startGameBtn, "</span>\n\t\t<span class=\"btnflip-item btnflip__center\"></span>\n\t\t<span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].startGameBtn, "</span>\n</a>\n\n<a class=\"btnflip options-help help\" href=\"#\">\n\t\t<span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].helpBtn, "</span>\n\t\t<span class=\"btnflip-item btnflip__center\"></span>\n\t\t<span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].helpBtn, "</span>\n</a>\n  ");
  document.querySelector('#selectLang > option[selected]').removeAttribute('selected');
  document.querySelector("#selectLang > option[value=".concat(lg, "]")).setAttribute('selected', 'selected');

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
  var selectLang = document.querySelector('#selectLang');
  selectLang.addEventListener('change', function () {
    localStorage.setItem('langSelected', selectLang.value);
    options();
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
    var gradient = ctx.createRadialGradient(particlesArray[i].x, particlesArray[i].y, 0, particlesArray[i].x, particlesArray[i].y, particlesArray[i].radius); // gradient.addColorStop(0, `rgba(30, 144, 255, ${particlesArray[i].opacity})` );
    // gradient.addColorStop(0.8, `rgba(100, 149, 237, ${particlesArray[i].opacity})` );
    // gradient.addColorStop(1, `rgba(65, 105, 225, ${particlesArray[i].opacity})` );

    gradient.addColorStop(0, "rgba(255, 255, 255," + particlesArray[i].opacity + ")"); // white

    gradient.addColorStop(.8, "rgba(210, 236, 242," + particlesArray[i].opacity + ")"); // bluish

    gradient.addColorStop(1, "rgba(237, 247, 249," + particlesArray[i].opacity + ")");
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
/* harmony import */ var _get_clouds__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get_clouds */ "./src/get_clouds.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lang */ "./src/lang.js");
/* harmony import */ var _get_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get_platform */ "./src/get_platform.js");










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
var jumpTrue = false;
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

  player.start(); // };

  scoreText = new _text__WEBPACK_IMPORTED_MODULE_1__.Text("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].scoreTxt, " ").concat(score), 25, 25, 'left', '#212121', '20');
  hightScoreText = new _text__WEBPACK_IMPORTED_MODULE_1__.Text("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].bestScoreTxt, " ").concat(highScore), _index__WEBPACK_IMPORTED_MODULE_3__.canvas.width - 25, 25, 'right', '#212121', '20');
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
  }

  (0,_snow_flakes__WEBPACK_IMPORTED_MODULE_4__.updateSnowFall)(); // spawn enemies

  for (var i = 0; i < obstacles.length; i += 1) {
    var o = obstacles[i];

    if (o.x + o.width < 0) {
      obstacles.splice(i, 1);
    } // перезагрузка игры при столкновении


    if (player.dx < o.x + o.width && player.dx + player.width / 10 - 10 > o.x && player.y < o.y + o.height && player.y + player.height >= o.y) {
      // playSound.playDead();
      obstacles = [];
      gameSpeed = 3;
      score = 0;
      _get_coin__WEBPACK_IMPORTED_MODULE_6__.coinsCounter.counter = 0;
      spawnTimer = initialSpawnTimer;
      window.localStorage.setItem('highscore', highScore);
    }

    o.Update();
  }

  score += 1;
  scoreText.t = "".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].scoreTxt, " ").concat(score);
  scoreText.Draw();

  if (score > highScore) {
    highScore = score;
    hightScoreText.t = "".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].bestScoreTxt, " ").concat(highScore);
  }

  gameSpeed += 0.003;
  hightScoreText.Draw(); // spawn platform

  (0,_get_platform__WEBPACK_IMPORTED_MODULE_9__.default)(); // spawn coin

  (0,_get_coin__WEBPACK_IMPORTED_MODULE_6__.getCoin)(); // spawn clouds

  (0,_get_clouds__WEBPACK_IMPORTED_MODULE_7__.default)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL1BsYXRmb3JtLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvY2xvdWQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9jb2luLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvZ2FtZS1zb3VuZC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dldF9jbG91ZHMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9nZXRfY29pbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dldF9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dldF9yYW5kb21faW50LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvaGVyby5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvbGFuZy5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL29ic3RhY2xlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGFnZXMvaGVscC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3BhZ2VzL21haW4uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9wYWdlcy9vcHRpb25zLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGxheWVyLXNvdW5kLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvc25vd19mbGFrZXMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9zcGF3bl9vYnN0YWNsZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3N0YXJ0X2dhbWUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJQbGF0Zm9ybSIsIm9wdGlvbnMiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZmxpZ2h0QWx0aXR1ZGUiLCJnYW1lU3BlZWQiLCJkeCIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJpbWFnZVNyYyIsInJlbmRlciIsImN0eCIsImNhbnZhcyIsIkNsb3VkIiwic3giLCJzeSIsInNXaWR0aCIsInNIZWlnaHQiLCJkeSIsImRXaWR0aCIsImRIZWlnaHQiLCJDb2luIiwidGlja3NQZXJGcmFtZSIsIm51bWJlck9mRnJhbWVzIiwiZnJhbWVJbmRleCIsInRpY2tDb3VudCIsImF1ZGlvT2JqIiwiQXVkaW8iLCJwbGF5IiwidXBkYXRlIiwiR2FtZVNvdW5kIiwiZm9uU291bmQiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInZvbHVtZSIsImRlYWRTb3VuZCIsImxvb3AiLCJwYXVzZSIsImNsb3VkcyIsImNsb3VkIiwicmFuZG9tIiwiZ2V0Q2xvdWRzIiwic2NvcmUiLCJnZXRSYW5kb21JbnQiLCJjb2luIiwiY29pbnMiLCJjb2luc1RleHQiLCJjb2luc0NvdW50ZXIiLCJjb3VudGVyIiwiZ2V0Q29pbiIsIlRleHQiLCJsYW5nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvaW5zVHh0IiwiRHJhdyIsInB1c2giLCJsZW5ndGgiLCJmb3JFYWNoIiwic3RhcnQiLCJwbGF5ZXIiLCJwbGF5Q29pblNvdW5kIiwicGxhdGZvcm0iLCJwbGF0Zm9ybXMiLCJwbGF0Zm9ybXNPcHRpb25zIiwiZ2V0UGxhdGZvcm0iLCJ0eXBlIiwiZmxhZyIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJIZXJvIiwianVtcEZvcmNlIiwiZ3JvdW5kZWQiLCJqdW1wVGltZXIiLCJncmF2aXR5IiwiaXNMZWZ0IiwidGVzdCIsInNvdW5kIiwiUGxheWVyU291bmQiLCJrZXlzIiwianVtcFVwIiwiSnVtcCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwianVtcERvd24iLCJncmF2aXR5R28iLCJnZXRSZWFkeVRvSnVtcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9ubG9hZCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0Iiwic2V0SXRlbSIsIm1haW4iLCJlbiIsInNjb3JlVHh0IiwiYmVzdFNjb3JlVHh0Iiwic3RhcnRHYW1lQnRuIiwib3B0aW9uc0J0biIsInNlbGVjdExuZyIsImhlbHBCdG4iLCJoZWxwVHh0MSIsImhlbHBUeHQyIiwiaGVscFR4dDMiLCJoZWxwVHh0NCIsImhlbHBUeHQ1IiwiaGVscFR4dDYiLCJoZWxwVHh0NyIsImhlbHBUeHQ4IiwicnUiLCJiciIsIk9ic3RhY2xlIiwiaGVscCIsImxnIiwicGFnZVdyYXBwZXIiLCJwYWdlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsInN0YXJ0R2FtZSIsInJlbW92ZSIsInN0YXJ0QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInNlbGVjdExhbmciLCJ2YWx1ZSIsInNvdW5kVXAiLCJzb3VuZERvd24iLCJpc0dyYXZpdHlEb3duIiwiaXNKdW1wVXAiLCJjdXJyZW50VGltZSIsInBhcnRpY2xlc09uU2NyZWVuIiwidyIsImgiLCJwYXJ0aWNsZXNBcnJheSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNsaWVudFJlc2l6ZSIsImV2IiwiY3JlYXRlU25vd0ZsYWtlcyIsImkiLCJvcGFjaXR5Iiwic3BlZWRYIiwic3BlZWRZIiwicmFkaXVzIiwiZHJhd1Nub3dGbGFrZXMiLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwibW92ZVNub3dGbGFrZXMiLCJ1cGRhdGVTbm93RmFsbCIsImNsZWFyUmVjdCIsIlNwYXduT2JzdGFjbGUiLCJSYW5kb21JbnRSYW5nZSIsIm9ic3RhY2xlIiwib2JzdGFjbGVzIiwicm91bmQiLCJoaWdoU2NvcmUiLCJzY29yZVRleHQiLCJoaWdodFNjb3JlVGV4dCIsImNvaW5JbWFnZSIsImp1bXBUcnVlIiwicGxheVNvdW5kIiwiZSIsImNvZGUiLCJVcGRhdGUiLCJpbml0aWFsU3Bhd25UaW1lciIsInNwYXduVGltZXIiLCJLZXlRIiwic3RvcEZvbiIsIktleUEiLCJwbGF5Rm9uIiwibyIsInNwbGljZSIsInQiLCJhIiwiYyIsInMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUdxQkEsUTtBQUNuQixvQkFBYUMsT0FBYixFQUFzQjtBQUFBOztBQUNwQixTQUFLQyxDQUFMLEdBQVNELE9BQU8sQ0FBQ0MsQ0FBakI7QUFDQSxTQUFLQyxDQUFMLEdBQVNGLE9BQU8sQ0FBQ0UsQ0FBakI7QUFDQSxTQUFLQyxLQUFMLEdBQWFILE9BQU8sQ0FBQ0csS0FBckI7QUFDQSxTQUFLQyxNQUFMLEdBQWNKLE9BQU8sQ0FBQ0ksTUFBdEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCTCxPQUFPLENBQUNLLGNBQTlCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQk4sT0FBTyxDQUFDTSxTQUF6QjtBQUVBLFNBQUtDLEVBQUwsR0FBVSxDQUFDLEtBQUtELFNBQWhCO0FBRUEsU0FBS0UsS0FBTCxHQUFhLElBQUlDLEtBQUosRUFBYjtBQUNBLFNBQUtELEtBQUwsQ0FBV0UsR0FBWCxHQUFpQlYsT0FBTyxDQUFDVyxRQUF6QjtBQUNEOzs7OzZCQUVTO0FBQ1IsV0FBS1YsQ0FBTCxJQUFVLEtBQUtNLEVBQWY7QUFDQSxXQUFLSyxNQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNQQywwREFBQSxDQUNFLEtBQUtMLEtBRFAs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S2lMLENBQW5CO0FBQ0FqTCx1REFBQSxHQUFnQixLQUFLK0ssQ0FBckI7QUFDQS9LLHNEQUFBLENBQWEsS0FBSzhLLENBQWxCLEVBQXFCLEtBQUsxTCxDQUExQixFQUE2QixLQUFLQyxDQUFsQztBQUNBVyx1REFBQTtBQUNEO0FBbEJIOztBQUFBO0FBQUEsSTs7Ozs7O1VDRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Ii4vanMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9pbmRleC5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm0ge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICB0aGlzLmZsaWdodEFsdGl0dWRlID0gb3B0aW9ucy5mbGlnaHRBbHRpdHVkZTtcbiAgICB0aGlzLmdhbWVTcGVlZCA9IG9wdGlvbnMuZ2FtZVNwZWVkO1xuXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IG9wdGlvbnMuaW1hZ2VTcmM7XG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICB0aGlzLngsXG4gICAgICBjYW52YXMuaGVpZ2h0IC0gdGhpcy5mbGlnaHRBbHRpdHVkZSxcbiAgICApXG4gIH1cblxuICAvLyBzdGFydCgpIHtcbiAgLy8gICBsZXQgbG9vcCA9ICgpID0+IHtcbiAgLy8gICAgIHRoaXMudXBkYXRlKCk7XG4gIC8vICAgICB0aGlzLnJlbmRlcigpO1xuXG4gIC8vICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAvLyAgIH1cblxuICAvLyAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gIC8vIH1cbn1cblxuXG5cbiIsImltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IHtnYW1lU3BlZWQgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3VkIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGg7XG4gICAgdGhpcy5zeCA9IG9wdGlvbnMuc3g7XG4gICAgdGhpcy5zeSA9IG9wdGlvbnMuc3k7XG4gICAgdGhpcy5zV2lkdGggPSBvcHRpb25zLnNXaWR0aDtcbiAgICB0aGlzLnNIZWlnaHQgPSBvcHRpb25zLnNIZWlnaHQ7XG4gICAgdGhpcy5keSA9IG9wdGlvbnMuZHk7XG4gICAgdGhpcy5kV2lkdGggPSBvcHRpb25zLnNXaWR0aDtcbiAgICB0aGlzLmRIZWlnaHQgPSBvcHRpb25zLnNIZWlnaHQ7XG5cbiAgICB0aGlzLmR4ID0gLWdhbWVTcGVlZDtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IG9wdGlvbnMuc3JjO1xuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5zeCxcbiAgICAgIHRoaXMuc3ksXG4gICAgICB0aGlzLnNXaWR0aCxcbiAgICAgIHRoaXMuc0hlaWdodCxcbiAgICAgIHRoaXMueCxcbiAgICAgIHRoaXMuZHksXG4gICAgICB0aGlzLmRXaWR0aCxcbiAgICAgIHRoaXMuZEhlaWdodCxcbiAgICApXG4gIH1cblxufSIsImltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luIHtcblxuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICBcbiAgICB0aGlzLnRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMDtcbiAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gb3B0aW9ucy5udW1iZXJPZkZyYW1lcyB8fCAxO1xuXG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgdGhpcy50aWNrQ291bnQgPSAwO1xuXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9ICcuL2ltYWdlcy9jb2luLnBuZyc7XG5cbiAgICB0aGlzLmF1ZGlvT2JqID0gbmV3IEF1ZGlvKCcuL3NvdW5kL2NvaW4yLm1wMycpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuXG4gICAgdGhpcy50aWNrQ291bnQrKztcblxuICAgIGlmICh0aGlzLnRpY2tDb3VudCA+IHRoaXMudGlja3NQZXJGcmFtZSkge1xuICAgICAgdGhpcy50aWNrQ291bnQgPSAwO1xuICAgICAgaWYgKHRoaXMuZnJhbWVJbmRleCA8IHRoaXMubnVtYmVyT2ZGcmFtZXMgLSAxKSB7XG4gICAgICAgICAgdGhpcy5mcmFtZUluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5mcmFtZUluZGV4ICogdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICAwLFxuICAgICAgdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMueCxcbiAgICAgIHRoaXMueSxcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgdGhpcy5oZWlnaHRcbiAgICApXG4gIH1cblxuICBwbGF5Q29pblNvdW5kKCkge1xuICAgIHRoaXMuYXVkaW9PYmoucGxheSgpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG59IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU291bmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGhpcy51cmwgPSB3aW5kb3cuZ2FtZVN0YXRlLnNvdW5kVXJsO1xyXG4gICAgLy8gdGhpcy5udW0gPSAxO1xyXG4gICAgdGhpcy5mb25Tb3VuZCA9IG5ldyBBdWRpbygnc291bmQvZm9uMS5tcDMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5mb25Tb3VuZCk7XHJcbiAgICB0aGlzLmZvblNvdW5kLnZvbHVtZSA9IDAuMTtcclxuICAgIHRoaXMuZGVhZFNvdW5kID0gbmV3IEF1ZGlvKCdzb3VuZC9kZWFkLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRlYWRTb3VuZCk7XHJcbiAgfVxyXG5cclxuICBwbGF5Rm9uKCkge1xyXG4gICAgdGhpcy5mb25Tb3VuZC5sb29wID0gdHJ1ZTtcclxuICAgIHRoaXMuZm9uU291bmQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgc3RvcEZvbigpIHtcclxuICAgIHRoaXMuZm9uU291bmQucGF1c2UoKTtcclxuICB9XHJcblxyXG4gIHBsYXlEZWFkKCkge1xyXG4gICAgdGhpcy5kZWFkU291bmQucGxheSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBzY29yZSB9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XG5pbXBvcnQgIENsb3VkICBmcm9tICcuL2Nsb3VkJztcbmltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSAnLi9nZXRfcmFuZG9tX2ludCc7XG5cbmxldCBjbG91ZHMgPSBbXG4gIHtcbiAgICBzcmM6IGBpbWFnZXMvY2xvdWRzLnBuZ2AsXG4gICAgc3g6IDAsXG4gICAgc3k6IDAsXG4gICAgc1dpZHRoOiAyMjAsXG4gICAgc0hlaWdodDogMTYwLFxuICAgIGR5OiAxNTAsXG4gICAgZFdpZHRoOiAyMjAsXG4gICAgZEhlaWdodDogMTYwLFxuICB9LFxuICB7XG4gICAgc3JjOiBgaW1hZ2VzL2Nsb3Vkcy5wbmdgLFxuICAgIHN4OiAyNTAsXG4gICAgc3k6IDAsXG4gICAgc1dpZHRoOiAyMjAsXG4gICAgc0hlaWdodDogMTYwLFxuICAgIGR5OiAxMDAsXG4gICAgZFdpZHRoOiAyMjAsXG4gICAgZEhlaWdodDogMTYwLFxuICB9LFxuXTtcblxubGV0IGNsb3VkO1xubGV0IHJhbmRvbTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2xvdWRzKCkge1xuICBpZihzY29yZSAlIDI1MCA9PSAwKXsgICBcbiAgICBcbiAgICByYW5kb20gPSBjbG91ZHNbZ2V0UmFuZG9tSW50KDAsIDIpXTtcbiAgICBjbG91ZCA9IG5ldyBDbG91ZChyYW5kb20pO1xuICB9XG5cbiAgaWYoY2xvdWQpIHtcbiAgICBjbG91ZC51cGRhdGUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtzY29yZSwgcGxheWVyIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcbmltcG9ydCB7Y2FudmFzfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBDb2luIGZyb20gJy4vY29pbic7XG5pbXBvcnQge2dhbWVTcGVlZH0gZnJvbSAnLi9zdGFydF9nYW1lJztcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4vbGFuZyc7XG5cbmxldCBjb2luO1xubGV0IGNvaW5zID0gW107XG5cblxubGV0IGNvaW5zVGV4dDtcbi8vINC00L7Qu9C20LXQvSDQsdGL0YLRjCDQuNC80LXQvdC90L4g0L7QsdGM0LXQutGCINCwINC90LUg0L/QtdGA0LXQvNC10L3QvdCw0Y8g0YLQuNC/0LAgbGV0IGNvaW5zQ291bnRlciA9IDA7XG4vLyDRg9C00LDQu9C40YLRjCDRjdGC0Lgg0YHRgtGA0L7QutC4INGH0LXRgNC10Lcg0L3QtdGB0LrQvtC70YzQutC+INC60L7QvNC80LjRgtC+0LIpXG5leHBvcnQgbGV0IGNvaW5zQ291bnRlciA9IHtcbiAgY291bnRlcjogMCxcbn07XG5cblxuXG5mdW5jdGlvbiBnZXRDb2luICgpIHtcblxuICBjb2luc1RleHQgPSBuZXcgVGV4dChcbiAgICBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0uY29pbnNUeHR9ICR7Y29pbnNDb3VudGVyLmNvdW50ZXJ9YCwgMzUwLCAyNSwgXCJyaWdodFwiLCBcIiMyMTIxMjFcIiwgXCIyMFwiXG4gICk7XG5cbiAgY29pbnNUZXh0LkRyYXcoKTtcblxuICBpZihzY29yZSAlIDIwMCA9PSAwKSB7IFxuXG4gICAgY29pbiA9IG5ldyBDb2luKHtcbiAgICAgIHg6IGNhbnZhcy53aWR0aCxcbiAgICAgIHk6IDM1MCxcbiAgICAgIHdpZHRoOiA1MDQsXG4gICAgICBoZWlnaHQ6IDg0LFxuICAgICAgbnVtYmVyT2ZGcmFtZXM6IDYsXG4gICAgICB0aWNrc1BlckZyYW1lOiA0LFxuICAgICAgZ2FtZVNwZWVkOiBnYW1lU3BlZWQsXG4gICAgfSk7XG5cbiAgICBjb2lucy5wdXNoKGNvaW4pO1xuICB9XG5cblxuICBpZihjb2lucy5sZW5ndGggPiAwKSB7XG5cbiAgICBjb2lucy5mb3JFYWNoKGNvaW4gPT4ge1xuICAgICAgY29pbi5zdGFydCgpO1xuICAgICAgXG4gICAgICBpZiAoXG4gICAgICAgIHBsYXllci5keCA8IGNvaW4ueCArIGNvaW4ud2lkdGggJiZcbiAgICAgICAgcGxheWVyLmR4ICsgKHBsYXllci53aWR0aCAvIDEwKSAtIDEwID4gY29pbi54ICYmXG4gICAgICAgIHBsYXllci55IDwgY29pbi55ICsgY29pbi5oZWlnaHQgJiZcbiAgICAgICAgcGxheWVyLnkgKyBwbGF5ZXIuaGVpZ2h0ID49IGNvaW4ueVxuICAgICAgKSB7XG4gICAgICAgIFxuICAgICAgICBjb2luLnkgPSAxMDAwMDtcbiAgICAgICAgY29pbi5wbGF5Q29pblNvdW5kKCk7XG4gICAgICAgIGNvaW5zQ291bnRlci5jb3VudGVyICs9IDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2luLnggPCAtNTApIHsgXG4gICAgICAgIGNvaW4ueSA9IDEwMDAwO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7Z2V0Q29pbn1cbiIsImltcG9ydCB7IHNjb3JlLCBwbGF5ZXIsIGdhbWVTcGVlZCB9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBQbGF0Zm9ybSBmcm9tICcuL1BsYXRmb3JtJztcbmltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSAnLi9nZXRfcmFuZG9tX2ludCc7XG5cbmxldCBwbGF0Zm9ybTtcbmxldCBwbGF0Zm9ybXMgPSBbXTtcbmxldCBwbGF0Zm9ybXNPcHRpb25zID0gW1xuICB7XG4gICAgc3JjOiBgaW1hZ2VzL3BsYXRmb3JtYTEucG5nYCxcbiAgICB3aWR0aDogNDk1LFxuICAgIGhlaWdodDogMTE1LFxuICB9LFxuICB7XG4gICAgc3JjOiBgaW1hZ2VzL3BsYXRmb3JtYTIucG5nYCxcbiAgICB3aWR0aDogMjgwLFxuICAgIGhlaWdodDogMTE1LFxuICB9XG5dO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGxhdGZvcm0oKXtcbiAgXG4gIGlmKHNjb3JlICUgMjAwID09IDApeyAgICBcblxuICAgIGxldCB0eXBlID0gZ2V0UmFuZG9tSW50KDAsIDIpO1xuICAgIHR5cGUgPSBwbGF0Zm9ybXNPcHRpb25zW3R5cGVdO1xuXG4gICAgcGxhdGZvcm0gPSBuZXcgUGxhdGZvcm0oe1xuICAgICAgeDogY2FudmFzLndpZHRoLFxuICAgICAgeTogY2FudmFzLmhlaWdodCxcbiAgICAgIGZsaWdodEFsdGl0dWRlOiAyNTAsXG4gICAgICB3aWR0aDogdHlwZS53aWR0aCxcbiAgICAgIGhlaWdodDogdHlwZS5oZWlnaHQsXG4gICAgICBnYW1lU3BlZWQ6IGdhbWVTcGVlZCxcbiAgICAgIGltYWdlU3JjOiB0eXBlLnNyYyxcbiAgICB9KTtcblxuICAgIHBsYXRmb3Jtcy5wdXNoKHBsYXRmb3JtKTtcbiAgfVxuXG5cbiAgbGV0IGZsYWcgPSBmYWxzZTtcblxuICBmb3IobGV0IHBsYXRmb3JtIG9mIHBsYXRmb3Jtcykge1xuICAgIHBsYXRmb3JtLnVwZGF0ZSgpO1xuXG4gICAgaWYgKFxuICAgICAgKHBsYXllci5keCA+IHBsYXRmb3JtLnggJiYgcGxheWVyLmR4IDwgcGxhdGZvcm0ueCArIHBsYXRmb3JtLndpZHRoIC0gNDApXG4gICAgICAmJiBwbGF5ZXIueSA8IGNhbnZhcy5oZWlnaHQgLSBwbGF0Zm9ybS5mbGlnaHRBbHRpdHVkZVxuICAgICkge1xuICAgICAgcGxheWVyLnRlc3QgPSBjYW52YXMuaGVpZ2h0IC0gcGxhdGZvcm0uZmxpZ2h0QWx0aXR1ZGUgKyAyO1xuICAgICAgZmxhZyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghZmxhZykge1xuICAgICAgICBwbGF5ZXIudGVzdCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluOyAvLyDQnNCw0LrRgdC40LzRg9C8INC90LUg0LLQutC70Y7Rh9Cw0LXRgtGB0Y8sINC80LjQvdC40LzRg9C8INCy0LrQu9GO0YfQsNC10YLRgdGPXG59IiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGtleXMgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuaW1wb3J0IFBsYXllclNvdW5kIGZyb20gJy4vcGxheWVyLXNvdW5kJztcbmltcG9ydCBtYWluIGZyb20gJy4vcGFnZXMvbWFpbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuaW1hZ2UgPSBvcHRpb25zLmltYWdlO1xuXG4gICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcbiAgICB0aGlzLnRpY2tDb3VudCA9IDA7XG4gICAgdGhpcy50aWNrc1BlckZyYW1lID0gb3B0aW9ucy50aWNrc1BlckZyYW1lIHx8IDA7XG4gICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IG9wdGlvbnMubnVtYmVyT2ZGcmFtZXMgfHwgMTtcblxuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cbiAgICB0aGlzLmR5ID0gb3B0aW9ucy5keSB8fCAwO1xuICAgIHRoaXMuZHggPSAwO1xuICAgIHRoaXMuc3ggPSAwO1xuICAgIHRoaXMuanVtcEZvcmNlID0gMTU7XG4gICAgdGhpcy5ncm91bmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuanVtcFRpbWVyID0gMDtcblxuICAgIHRoaXMueSA9IG9wdGlvbnMueTtcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XG4gICAgdGhpcy5ncmF2aXR5ID0gMTtcblxuICAgIHRoaXMuaXNMZWZ0ID0gZmFsc2U7XG5cbiAgICAvLyBwbGF0Zm9ybVxuICAgIHRoaXMudGVzdCA9IG9wdGlvbnMudGVzdDtcblxuICAgIHRoaXMuc291bmQgPSBuZXcgUGxheWVyU291bmQoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnRpY2tDb3VudCArPSAxO1xuXG4gICAgaWYgKHRoaXMudGlja0NvdW50ID4gdGhpcy50aWNrc1BlckZyYW1lKSB7XG4gICAgICB0aGlzLnRpY2tDb3VudCA9IDA7XG4gICAgICBpZiAodGhpcy5mcmFtZUluZGV4IDwgdGhpcy5udW1iZXJPZkZyYW1lcyAtIDEpIHtcbiAgICAgICAgdGhpcy5mcmFtZUluZGV4ICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgICh0aGlzLmZyYW1lSW5kZXggKiB0aGlzLndpZHRoKSAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICB0aGlzLnN4LFxuICAgICAgdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMuZHgsXG4gICAgICB0aGlzLnksXG4gICAgICB0aGlzLndpZHRoIC8gdGhpcy5udW1iZXJPZkZyYW1lcyxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICk7XG4gIH1cblxuICAvLyBncmF2aXR5XG4gIC8vIGdyYXZpdHlHbygpIHtcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnRlc3QpXG4gIC8vICAgdGhpcy55ICs9IHRoaXMuZHk7XG5cbiAgLy8gICBpZiAodGhpcy55ICsgdGhpcy5oZWlnaHQgPCBjYW52YXMuaGVpZ2h0KSB7XG4gIC8vICAgICB0aGlzLmR5ICs9IHRoaXMuZ3Jhdml0eTtcbiAgLy8gICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgdGhpcy5keSA9IDA7XG4gIC8vICAgICB0aGlzLmdyb3VuZGVkID0gdHJ1ZTtcbiAgLy8gICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodDtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBncmF2aXR5R28oKSB7XG4gICAgdGhpcy55ICs9IHRoaXMuZHk7XG5cbiAgICBpZiAodGhpcy55ICsgdGhpcy5oZWlnaHQgPCB0aGlzLnRlc3QpIHtcbiAgICAgIHRoaXMuZHkgKz0gdGhpcy5ncmF2aXR5O1xuICAgICAgdGhpcy5ncm91bmRlZCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuZHkgPiAwKSB7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSAxO1xuICAgICAgICBpZiAodGhpcy5pc0xlZnQpIHtcbiAgICAgICAgICB0aGlzLnN4ID0gMzAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3ggPSA0MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5keSA9IDA7XG4gICAgICB0aGlzLmdyb3VuZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSA2O1xuICAgICAgaWYgKHRoaXMuaXNMZWZ0KSB7XG4gICAgICAgIHRoaXMuc3ggPSAxMDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN4ID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMueSA9IHRoaXMudGVzdCAtIHRoaXMuaGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGp1bXBcbiAgZ2V0UmVhZHlUb0p1bXAoKSB7XG4gICAgaWYgKGtleXMuU3BhY2UgfHwga2V5cy5LZXlXIHx8IGtleXMuQXJyb3dVcCkge1xuICAgICAgdGhpcy5zb3VuZC5qdW1wVXAoKTtcbiAgICAgIHRoaXMuSnVtcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmp1bXBUaW1lciA9IDA7XG4gICAgfVxuICAgIGlmIChrZXlzLktleU0gfHwga2V5cy5BcnJvd1JpZ2h0KSB7XG4gICAgICBpZiAodGhpcy5keCA8IGNhbnZhcy53aWR0aCAtIDEwMCkgdGhpcy5keCArPSA1O1xuICAgICAgdGhpcy5zeCA9IDA7XG4gICAgICB0aGlzLmlzTGVmdCA9IGZhbHNlO1xuICAgICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IDY7XG4gICAgfVxuICAgIGlmIChrZXlzLktleU4gfHwga2V5cy5BcnJvd0xlZnQpIHtcbiAgICAgIGlmICh0aGlzLmR4ID4gMCkgdGhpcy5keCAtPSA1O1xuICAgICAgdGhpcy5zeCA9IDEwMDtcbiAgICAgIHRoaXMuaXNMZWZ0ID0gdHJ1ZTtcbiAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSA2O1xuICAgIH1cbiAgICBpZiAoa2V5cy5Fc2NhcGUpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gIH1cblxuICBKdW1wKCkge1xuICAgIGlmICh0aGlzLmdyb3VuZGVkICYmIHRoaXMuanVtcFRpbWVyID09PSAwKSB7XG4gICAgICB0aGlzLmp1bXBUaW1lciA9IDE7XG4gICAgICB0aGlzLmR5ID0gLXRoaXMuanVtcEZvcmNlO1xuICAgICAgdGhpcy5zb3VuZC5qdW1wRG93bigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5qdW1wVGltZXIgPiAwICYmIHRoaXMuanVtcFRpbWVyIDwgMTUpIHtcbiAgICAgIHRoaXMuanVtcFRpbWVyICs9IDE7XG4gICAgICB0aGlzLmR5ID0gLXRoaXMuanVtcEZvcmNlIC0gKHRoaXMuanVtcFRpbWVyIC8gNTApO1xuICAgICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IDE7XG4gICAgICBpZiAodGhpcy5pc0xlZnQpIHtcbiAgICAgICAgdGhpcy5zeCA9IDIwMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3ggPSA1MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgdGhpcy5ncmF2aXR5R28oKTtcbiAgICAgIHRoaXMuZ2V0UmVhZHlUb0p1bXAoKTtcblxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICB9O1xuICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICB9O1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLy8gaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7IE9ic3RhY2xlIH0gZnJvbSAnLi9vYnN0YWNsZSc7XHJcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuL3RleHQnO1xyXG5pbXBvcnQgeyBzdGFydCB9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XHJcbmltcG9ydCBtYWluIGZyb20gJy4vcGFnZXMvbWFpbic7XHJcblxyXG4vLyBsZXQga2V5cyA9IHt9O1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJykpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5nU2VsZWN0ZWQnLCAnZW4nKTtcclxuXHJcbi8vIHdpbmRvdy5nYW1lU3RhdGUgPSB7XHJcbi8vICAgc291bmRVcmw6ICcuLi8uL2Rpc3Qvc291bmQvJyxcclxuLy8gICBpbWdVcmw6ICcuLi8uL2Rpc3QvaW1nLycsXHJcbi8vICAgaXNGb25Tb3VuZDogdHJ1ZSxcclxuLy8gICBpc1BsYXllclNvdW5kOiB0cnVlLFxyXG4vLyAgIHNldCBpc1N0YXJ0R2FtZSh2YWx1ZSkge1xyXG4vLyAgICAgU3RhcnQoKTtcclxuLy8gICB9LFxyXG4vLyB9O1xyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbi8vICAga2V5c1tlLmNvZGVdID0gdHJ1ZTtcclxuLy8gfSk7XHJcbi8vXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuLy8gICBrZXlzW2UuY29kZV0gPSBmYWxzZTtcclxuLy8gfSk7XHJcblxyXG5tYWluKCk7XHJcbi8vIHN0YXJ0KCk7XHJcblxyXG4vLyBleHBvcnQge2NhbnZhcywgY3R4LCBrZXlzfVxyXG5leHBvcnQgeyBjYW52YXMsIGN0eCB9O1xyXG4iLCJjb25zdCBsYW5nID0ge1xuICBlbjoge1xuICAgIHNjb3JlVHh0OiAnU2NvcmU6JyxcbiAgICBjb2luc1R4dDogJ0NvaW5zOicsXG4gICAgYmVzdFNjb3JlVHh0OiAnQmVzdCBzY29yZTonLFxuICAgIHN0YXJ0R2FtZUJ0bjogJ1N0YXJ0IEdhbWUnLFxuICAgIG9wdGlvbnNCdG46ICdPcHRpb25zJyxcbiAgICBzZWxlY3RMbmc6ICdTZWxlY3QgbGFuZ3VhZ2U6JyxcbiAgICBoZWxwQnRuOiAnSGVscCcsXG4gICAgaGVscFR4dDE6ICdZb3VyIG1pc3Npb24gaXMgdG8gY29sbGVjdCBhbGwgdGhlIGNvaW5zLiBUbyBkbyB0aGlzIHlvdSBvbmx5IGhhdmUgYSBjZXJ0YWluIG51bWJlciAgb2YgbGl2ZXMuIFlvdSBjYW4ganVtcCwgbW92ZSBsZWZ0IGFuZCByaWdodCB3aXRoaW4gc2NyZWVuLicsXG4gICAgaGVscFR4dDI6ICdLZXlib2FyZCBDb250cm9sOicsXG4gICAgaGVscFR4dDM6ICdXLCBTcGFjZSwgXiAtIEpVTVAnLFxuICAgIGhlbHBUeHQ0OiAnTSwgPiAtIE1PVkUgUklHSFQnLFxuICAgIGhlbHBUeHQ1OiAnTiwgPCAtIE1PVkUgTEVGVCcsXG4gICAgaGVscFR4dDY6ICdBIC0gTVVTSUMgT04nLFxuICAgIGhlbHBUeHQ3OiAnUSAtIE1VU0lDIE9GRicsXG4gICAgaGVscFR4dDg6ICdFc2MgLSBNQUlOIE1FTlUnLFxuICB9LFxuICBydToge1xuICAgIHNjb3JlVHh0OiAn0KDQtdC30YPQu9GM0YLQsNGCOicsXG4gICAgY29pbnNUeHQ6ICfQnNC+0L3QtdGC0Ys6JyxcbiAgICBiZXN0U2NvcmVUeHQ6ICfQm9GD0YfRiNC40Lkg0YDQtdC30YPQu9GM0YLQsNGCOicsXG4gICAgc3RhcnRHYW1lQnRuOiAn0J3QsNGH0LDRgtGMINC40LPRgNGDJyxcbiAgICBvcHRpb25zQnRuOiAn0J3QsNGB0YLRgNC+0LnQutC4JyxcbiAgICBzZWxlY3RMbmc6ICfQktGL0LHQtdGA0LjRgtC1INGP0LfRi9C6OicsXG4gICAgaGVscEJ0bjogJ9Cf0L7QvNC+0YnRjCcsXG4gICAgaGVscFR4dDE6ICfQktCw0YjQsCDQt9Cw0LTQsNGH0LAg0YHQvtCx0YDQsNGC0Ywg0LLRgdC1INC80L7QvdC10YLRiy4g0JTQu9GPINGN0YLQvtCz0L4g0YMg0LLQsNGBINC10YHRgtGMINC+0L/RgNC10LTQtdC70LXQvdC90L7QuSDQutC+0LvQuNGH0LXRgdGC0LLQviDQttC40LfQvdC10LkuINCS0Ysg0LzQvtC20LXRgtC1INC/0YDRi9Cz0LDRgtGMLCDQuNC00YLQuCDQstC70LXQstC+INC4INCy0L/RgNCw0LLQviDQsiDQv9GA0LXQtNC10LvQsNGFINGN0LrRgNCw0L3QsC4nLFxuICAgIGhlbHBUeHQyOiAn0JrQu9Cw0LLQuNGI0Lgg0YPQv9GA0LDQstC70LXQvdC40Y86JyxcbiAgICBoZWxwVHh0MzogJ1csIFNwYWNlLCBeIC0g0J/RgNGL0LbQvtC6JyxcbiAgICBoZWxwVHh0NDogJ00sID4gLSDQmNC00YLQuCDQstC/0YDQsNCy0L4nLFxuICAgIGhlbHBUeHQ1OiAnTiwgPCAtINCY0LTRgtC4INCy0LvQtdCy0L4nLFxuICAgIGhlbHBUeHQ2OiAnQSAtINCS0LrQu9GO0YfQuNGC0Ywg0LzRg9C30YvQutGDJyxcbiAgICBoZWxwVHh0NzogJ1EgLSDQktGL0LrQu9GO0YfQuNGC0Ywg0LzRg9C30YvQutGDJyxcbiAgICBoZWxwVHh0ODogJ0VzYyAtINCT0LvQsNCy0L3QvtC1INC80LXQvdGOJyxcbiAgfSxcbiAgYnI6IHtcbiAgICBzY29yZVR4dDogJ9CS0YvQvdGW0Lo6JyxcbiAgICBjb2luc1R4dDogJ9Cc0LDQvdC10YLRizonLFxuICAgIGJlc3RTY29yZVR4dDogJ9Cb0LXQv9GI0Ysg0LLRi9C90ZbQujonLFxuICAgIHN0YXJ0R2FtZUJ0bjogJ9Cf0LDRh9Cw0YLRjCDRltCz0YDRgycsXG4gICAgb3B0aW9uc0J0bjogJ9Ce0L/RhtGL0ZYnLFxuICAgIHNlbGVjdExuZzogJ9CS0YvQsdC10YDRi9GG0LUg0LzQvtCy0YM6JyxcbiAgICBoZWxwQnRuOiAn0JTQsNC/0LDQvNC+0LPQsCcsXG4gICAgaGVscFR4dDE6ICfQktCw0YjQsCDQt9Cw0LTQsNGH0LAg0YHQsNCx0YDQsNGG0Ywg0YPRgdC1INC80LDQvdC10YLRiy4g0JTQu9GPINCz0Y3RgtCw0LPQsCDRniDQstCw0YEg0ZHRgdGG0Ywg0L/RjdGe0L3QsNC5INC60L7Qu9GM0LrQsNGB0YbRjCDQttGL0YbRhtGP0Z4uINCS0Ysg0LzQvtC20LDRhtC1INGB0LrQsNC60LDRhtGMLCDRltGB0YbRliDQvdCw0LvQtdCy0LAg0ZYg0L3QsNC/0YDQsNCy0LAg0Z4g0LzQtdC20LDRhSDRjdC60YDQsNC90LAuJyxcbiAgICBoZWxwVHh0MjogJ9Ca0LvQsNCy0ZbRiNGLINC60ZbRgNCw0LLQsNC90L3RjzonLFxuICAgIGhlbHBUeHQzOiAnVywgU3BhY2UsIF4gLSDQn9GA0YvQttC+0LonLFxuICAgIGhlbHBUeHQ0OiAnTSwgPiAtIEnRgdGG0ZYg0L3QsNC70LXQstCwJyxcbiAgICBoZWxwVHh0NTogJ04sIDwgLSBJ0YHRhtGWINC90LDQv9GA0LDQstCwJyxcbiAgICBoZWxwVHh0NjogJ0EgLSDQo9C60LvRjtGH0YvRhtGMINC80YPQt9GL0LrRgycsXG4gICAgaGVscFR4dDc6ICdRIC0g0JLRi9C60LvRjtGH0YvRhtGMINC80YPQt9GL0LrRgycsXG4gICAgaGVscFR4dDg6ICdFc2MgLSDQk9Cw0LvQvtGe0L3QsNC1INC80LXQvdGOJyxcbiAgfSxcbn07XG5cbmV4cG9ydCB7IGxhbmcgfTtcbiIsImltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vaW5kZXguanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XG5cbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLmltYWdlU3JjO1xuICB9XG5cbiAgVXBkYXRlICgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy54LFxuICAgICAgY2FudmFzLmhlaWdodCAtIDU1LFxuICAgIClcbiAgfVxuXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5pbXBvcnQgeyBzdGFydCB9IGZyb20gJy4uL3N0YXJ0X2dhbWUnO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSAnLi4vbGFuZyc7XHJcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWxwKCkge1xyXG4gIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICBjb25zdCBsZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKTtcclxuICBjb25zdCBwYWdlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXdyYXBwZXInKTtcclxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnLCAncGFnZS1pbWFnZScpO1xyXG4gIHBhZ2UuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJoZWxwLXR4dC13cmFwcGVyXCI+XHJcbiAgJHtsYW5nW2xnXS5oZWxwVHh0MX1cclxuICA8cD4ke2xhbmdbbGddLmhlbHBUeHQyfTwvcD5cclxuICAke2xhbmdbbGddLmhlbHBUeHQzfVxyXG4gIDxicj4ke2xhbmdbbGddLmhlbHBUeHQ0fVxyXG4gIDxicj4ke2xhbmdbbGddLmhlbHBUeHQ1fVxyXG4gIDxicj4ke2xhbmdbbGddLmhlbHBUeHQ2fVxyXG4gIDxicj4ke2xhbmdbbGddLmhlbHBUeHQ3fVxyXG4gIDxicj4ke2xhbmdbbGddLmhlbHBUeHQ4fVxyXG4gIDwvZGl2PlxyXG4gIDxhIGNsYXNzPVwiYnRuZmxpcCBzdGFydC1oZWxwIHN0YXJ0XCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2Zyb250XCI+JHtsYW5nW2xnXS5zdGFydEdhbWVCdG59PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10uc3RhcnRHYW1lQnRufTwvc3Bhbj5cclxuICA8L2E+XHJcbiAgXHJcbiAgPGEgY2xhc3M9XCJidG5mbGlwIG9wdGlvbnMtaGVscCBvcHRpb25zXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2Zyb250XCI+JHtsYW5nW2xnXS5vcHRpb25zQnRufTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj4ke2xhbmdbbGddLm9wdGlvbnNCdG59PC9zcGFuPlxyXG4gIDwvYT5cclxuICBgO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgICBwYWdlV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIHBhZ2VXcmFwcGVyLmFwcGVuZENoaWxkKHBhZ2UpO1xyXG4gIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xyXG5cclxuICBjb25zdCBvcHRpb25zQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMnKTtcclxuICBvcHRpb25zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgb3B0aW9ucygpO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSAnLi4vc3RhcnRfZ2FtZSc7XHJcbmltcG9ydCBoZWxwIGZyb20gJy4vaGVscCc7XHJcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuLi9sYW5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIGNvbnN0IGxnID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpO1xyXG4gIGNvbnN0IHBhZ2VXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2Utd3JhcHBlcicpO1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScsICdwYWdlLWltYWdlJyk7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbjxhIGNsYXNzPVwiYnRuZmxpcCBzdGFydC1tYWluIHN0YXJ0XCIgaHJlZj1cIiNcIj5cclxuXHRcdDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2Zyb250XCI+JHtsYW5nW2xnXS5zdGFydEdhbWVCdG59PC9zcGFuPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10uc3RhcnRHYW1lQnRufTwvc3Bhbj5cclxuPC9hPlxyXG5cclxuPGEgY2xhc3M9XCJidG5mbGlwIG9wdGlvbnMtbWFpbiBvcHRpb25zXCIgaHJlZj1cIiNcIj5cclxuXHRcdDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2Zyb250XCI+JHtsYW5nW2xnXS5vcHRpb25zQnRufTwvc3Bhbj5cclxuXHRcdDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuXHRcdDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj4ke2xhbmdbbGddLm9wdGlvbnNCdG59PC9zcGFuPlxyXG48L2E+XHJcblxyXG48YSBjbGFzcz1cImJ0bmZsaXAgaGVscC1tYWluIGhlbHBcIiBocmVmPVwiI1wiPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLmhlbHBCdG59PC9zcGFuPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10uaGVscEJ0bn08L3NwYW4+XHJcbjwvYT5cclxuXHJcbiAgYDtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gICAgcGFnZVdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBwYWdlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIGNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIHN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwYWdlV3JhcHBlci5hcHBlbmRDaGlsZChwYWdlKTtcclxuICBwYWdlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHJcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XHJcblxyXG4gIGNvbnN0IGhlbHBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVscCcpO1xyXG4gIGhlbHBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBoZWxwKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucycpO1xyXG4gIG9wdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBvcHRpb25zKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IHsgc3RhcnQgfSBmcm9tICcuLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IGhlbHAgZnJvbSAnLi9oZWxwJztcclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4uL2xhbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3B0aW9ucygpIHtcclxuICBjYW52YXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgY29uc3QgbGcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyk7XHJcbiAgY29uc3QgcGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS13cmFwcGVyJyk7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJywgJ3BhZ2UtaW1hZ2UnKTtcclxuICBwYWdlLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiaGVscC10eHQtd3JhcHBlclwiPlxyXG4gIDxwIGNsYXNzPVwibWVudUl0ZW1cIiBpZD0nbWVudUZpZWxkU2l6ZSc+XHJcbiAgPGxhYmVsPiR7bGFuZ1tsZ10uc2VsZWN0TG5nfTwvbGFiZWw+XHJcbiAgPHNlbGVjdCBpZD1cInNlbGVjdExhbmdcIj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImVuXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPmVuZ2xpc2g8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cInJ1XCI+0YDRg9GB0YHQutC40Lk8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImJyXCI+0LHQtdC70LDRgNGD0YHQutCw0Y88L29wdGlvbj5cclxuICA8L3NlbGVjdD5cclxuICA8L3A+XHJcbiAgPC9kaXY+XHJcbiAgPGEgY2xhc3M9XCJidG5mbGlwIHN0YXJ0LWhlbHAgc3RhcnRcIiBocmVmPVwiI1wiPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLnN0YXJ0R2FtZUJ0bn08L3NwYW4+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+JHtsYW5nW2xnXS5zdGFydEdhbWVCdG59PC9zcGFuPlxyXG48L2E+XHJcblxyXG48YSBjbGFzcz1cImJ0bmZsaXAgb3B0aW9ucy1oZWxwIGhlbHBcIiBocmVmPVwiI1wiPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLmhlbHBCdG59PC9zcGFuPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10uaGVscEJ0bn08L3NwYW4+XHJcbjwvYT5cclxuICBgO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RMYW5nID4gb3B0aW9uW3NlbGVjdGVkXScpLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VsZWN0TGFuZyA+IG9wdGlvblt2YWx1ZT0ke2xnfV1gKS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICAgIHBhZ2VXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBjYW52YXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBzdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgcGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbiAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XHJcblxyXG4gIGNvbnN0IGhlbHBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVscCcpO1xyXG4gIGhlbHBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBoZWxwKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdExhbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0TGFuZycpO1xyXG4gIHNlbGVjdExhbmcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmdTZWxlY3RlZCcsIHNlbGVjdExhbmcudmFsdWUpO1xyXG4gICAgb3B0aW9ucygpO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyU291bmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGhpcy51cmwgPSB3aW5kb3cuZ2FtZVN0YXRlLnNvdW5kVXJsO1xyXG4gICAgdGhpcy5zb3VuZFVwID0gbmV3IEF1ZGlvKCdzb3VuZC9qdW1wVXAubXAzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmRVcCk7XHJcbiAgICB0aGlzLnNvdW5kRG93biA9IG5ldyBBdWRpbygnc291bmQvZ3Jhdml0eURvd24ubXAzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmREb3duKTtcclxuICAgIHRoaXMuaXNHcmF2aXR5RG93biA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0p1bXBVcCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAganVtcFVwKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzSnVtcFVwKSB7XHJcbiAgICAgIHRoaXMuc291bmRVcC5wbGF5KCk7XHJcbiAgICAgIHRoaXMuaXNKdW1wVXAgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAganVtcERvd24oKSB7XHJcbiAgICB0aGlzLnNvdW5kVXAucGF1c2UoKTtcclxuICAgIHRoaXMuc291bmRVcC5jdXJyZW50VGltZSA9IDAuMDtcclxuICAgIHRoaXMuaXNKdW1wVXAgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdyYXZpdHlEb3duKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzR3Jhdml0eURvd24pIHtcclxuICAgICAgdGhpcy5zb3VuZERvd24ucGxheSgpO1xyXG4gICAgICB0aGlzLmlzR3Jhdml0eURvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ3Jhdml0eVVwKCkge1xyXG4gICAgdGhpcy5zb3VuZERvd24ucGF1c2UoKTtcclxuICAgIHRoaXMuc291bmREb3duLmN1cnJlbnRUaW1lID0gMC4wO1xyXG4gICAgdGhpcy5pc0dyYXZpdHlEb3duID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsIlxubGV0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmxldCBwYXJ0aWNsZXNPblNjcmVlbiA9IDI0NTtcbmxldCB3LCBoO1xubGV0IHBhcnRpY2xlc0FycmF5ID0gW107XG5cbncgPSBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbmggPSBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG5mdW5jdGlvbiByYW5kb20gKG1pbiwgbWF4KSB7XG4gIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpO1xufVxuXG5mdW5jdGlvbiBjbGllbnRSZXNpemUgKGV2KSB7XG4gIHcgPSBjYW52YXMud2lkdGg7XG4gIGggPSBjYW52YXMuaGVpZ2h0O1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2xpZW50UmVzaXplKTtcblxuLy8gY3JlYXRlU25vd0ZsYWtlcygpO1xuZnVuY3Rpb24gY3JlYXRlU25vd0ZsYWtlcyAoKSB7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXNPblNjcmVlbjsgaSsrKXtcbiAgICBwYXJ0aWNsZXNBcnJheS5wdXNoKHtcbiAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiB3LFxuICAgICAgeTogTWF0aC5yYW5kb20oKSAqIGgsXG4gICAgICBvcGFjaXR5OiBNYXRoLnJhbmRvbSgpLFxuICAgICAgc3BlZWRYOiByYW5kb20oLTEsIDEpLFxuICAgICAgc3BlZWRZOiByYW5kb20oMSwgMiksXG4gICAgICByYWRpdXM6IHJhbmRvbSgwLjUsIDQuMiksXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhd1Nub3dGbGFrZXMgKCkge1xuICBmb3IobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgIGxldCBncmFkaWVudCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLngsXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55LFxuICAgICAgMCxcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLngsXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ucmFkaXVzLFxuICAgICk7XG5cbiAgICAvLyBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMzAsIDE0NCwgMjU1LCAke3BhcnRpY2xlc0FycmF5W2ldLm9wYWNpdHl9KWAgKTtcbiAgICAvLyBncmFkaWVudC5hZGRDb2xvclN0b3AoMC44LCBgcmdiYSgxMDAsIDE0OSwgMjM3LCAke3BhcnRpY2xlc0FycmF5W2ldLm9wYWNpdHl9KWAgKTtcbiAgICAvLyBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoNjUsIDEwNSwgMjI1LCAke3BhcnRpY2xlc0FycmF5W2ldLm9wYWNpdHl9KWAgKTtcblxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBcInJnYmEoMjU1LCAyNTUsIDI1NSxcIiArIHBhcnRpY2xlc0FycmF5W2ldLm9wYWNpdHkgKyBcIilcIik7ICAvLyB3aGl0ZVxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCguOCwgXCJyZ2JhKDIxMCwgMjM2LCAyNDIsXCIgKyBwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5ICsgXCIpXCIpOyAgLy8gYmx1aXNoXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIFwicmdiYSgyMzcsIDI0NywgMjQ5LFwiICsgcGFydGljbGVzQXJyYXlbaV0ub3BhY2l0eSArIFwiKVwiKTtcbiAgICBcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLngsXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ucmFkaXVzLFxuICAgICAgMCxcbiAgICAgIE1hdGguUEkqMixcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICBjdHguZmlsbCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVTbm93Rmxha2VzICgpIHtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBwYXJ0aWNsZXNBcnJheVtpXS54ICs9IHBhcnRpY2xlc0FycmF5W2ldLnNwZWVkWDtcbiAgICBwYXJ0aWNsZXNBcnJheVtpXS55ICs9IHBhcnRpY2xlc0FycmF5W2ldLnNwZWVkWTtcblxuICAgIGlmKHBhcnRpY2xlc0FycmF5W2ldLnkgPiBoKSB7XG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54ID0gTWF0aC5yYW5kb20oKSAqIHcgKiAxLjU7XG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55ID0gLTUwO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVTbm93RmFsbCAoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG4gIGRyYXdTbm93Rmxha2VzKCk7XG4gIG1vdmVTbm93Rmxha2VzKCk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlU25vd0ZsYWtlcywgdXBkYXRlU25vd0ZhbGx9XG4iLCJpbXBvcnQgT2JzdGFjbGUgZnJvbSAnLi9vYnN0YWNsZSc7XG5pbXBvcnQge2NhbnZhc30gZnJvbSAnLi9pbmRleCc7XG4vLyBpbXBvcnQge2dhbWVTcGVlZCwgcGxheWVyLCBvYnN0YWNsZXN9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XG5pbXBvcnQge2dhbWVTcGVlZCwgb2JzdGFjbGVzfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuXG5cbmZ1bmN0aW9uIFNwYXduT2JzdGFjbGUgKCkge1xuICAvLyBsZXQgc2l6ZSA9IFJhbmRvbUludFJhbmdlKDIwLCA3MCk7XG4gIGxldCB0eXBlID0gUmFuZG9tSW50UmFuZ2UoMywgNCk7XG5cblxuICBsZXQgb2JzdGFjbGUgPSBuZXcgT2JzdGFjbGUoe1xuICAgIHg6IGNhbnZhcy53aWR0aCxcbiAgICB5OiBjYW52YXMuaGVpZ2h0LFxuICAgIHdpZHRoOiA1MCxcbiAgICBoZWlnaHQ6IDUwLFxuICAgIGdhbWVTcGVlZDogZ2FtZVNwZWVkLFxuICAgIGltYWdlU3JjOiBgaW1hZ2VzL29ic3RhY2xlJHt0eXBlfS5wbmdgLFxuICB9KTtcblxuICBvYnN0YWNsZXMucHVzaChvYnN0YWNsZSk7XG59XG5cbmZ1bmN0aW9uIFJhbmRvbUludFJhbmdlIChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xufVxuXG5leHBvcnQge1NwYXduT2JzdGFjbGV9O1xuIiwiaW1wb3J0IEhlcm8gZnJvbSAnLi9oZXJvJztcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHsgU3Bhd25PYnN0YWNsZSB9IGZyb20gJy4vc3Bhd25fb2JzdGFjbGUnO1xuaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZVNub3dGbGFrZXMsIHVwZGF0ZVNub3dGYWxsIH0gZnJvbSAnLi9zbm93X2ZsYWtlcyc7XG5pbXBvcnQgR2FtZVNvdW5kIGZyb20gJy4vZ2FtZS1zb3VuZCc7XG5pbXBvcnQgeyBnZXRDb2luLCBjb2luc0NvdW50ZXIgfSBmcm9tICcuL2dldF9jb2luJztcbmltcG9ydCBnZXRDbG91ZHMgZnJvbSAnLi9nZXRfY2xvdWRzJztcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuL2xhbmcnO1xuaW1wb3J0IGdldFBsYXRmb3JtIGZyb20gJy4vZ2V0X3BsYXRmb3JtJztcblxubGV0IGdyYXZpdHk7XG5sZXQgc2NvcmU7XG5sZXQgaGlnaFNjb3JlO1xubGV0IHNjb3JlVGV4dDtcbmxldCBoaWdodFNjb3JlVGV4dDtcblxubGV0IGdhbWVTcGVlZDtcbmxldCBwbGF5ZXI7XG5sZXQgb2JzdGFjbGVzID0gW107XG5jb25zdCBjb2lucyA9IFtdO1xuXG5jb25zdCBrZXlzID0ge307XG5sZXQgY29pbkltYWdlO1xuY29uc3QganVtcFRydWUgPSBmYWxzZTtcbmNvbnN0IHBsYXlTb3VuZCA9IG5ldyBHYW1lU291bmQoKTtcblxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjA1O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGtleXNbZS5jb2RlXSA9IHRydWU7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICBrZXlzW2UuY29kZV0gPSBmYWxzZTtcbiAgfSk7XG5cbiAgY3R4LmZvbnQgPSAnMjBweCBzYW5zLXNlcmlmJztcblxuICBnYW1lU3BlZWQgPSAzO1xuICBncmF2aXR5ID0gMTtcblxuICBzY29yZSA9IDA7XG4gIGhpZ2hTY29yZSA9IDA7XG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoc2NvcmUnKSkge1xuICAgIGhpZ2hTY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoc2NvcmUnKTtcbiAgfVxuXG4gIGNvaW5JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBjb2luSW1hZ2Uuc3JjID0gJ2ltYWdlcy9zcHJpdGUyLnBuZyc7XG5cbiAgcGxheWVyID0gbmV3IEhlcm8oe1xuICAgIGltYWdlOiBjb2luSW1hZ2UsXG4gICAgd2lkdGg6IDYwMCxcbiAgICBoZWlnaHQ6IDEwMCxcbiAgICBudW1iZXJPZkZyYW1lczogNixcbiAgICB0aWNrc1BlckZyYW1lOiA0LFxuICAgIHg6IDUwLFxuICAgIHk6IDUwLFxuICAgIHRlc3Q6IGNhbnZhcy5oZWlnaHQsXG4gIH0pO1xuXG4gIC8vIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIHBsYXllci5zdGFydCgpO1xuICAvLyB9O1xuXG4gIHNjb3JlVGV4dCA9IG5ldyBUZXh0KFxuICAgIGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5zY29yZVR4dH0gJHtzY29yZX1gLCAyNSwgMjUsICdsZWZ0JywgJyMyMTIxMjEnLCAnMjAnLFxuICApO1xuICBoaWdodFNjb3JlVGV4dCA9IG5ldyBUZXh0KFxuICAgIGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5iZXN0U2NvcmVUeHR9ICR7aGlnaFNjb3JlfWAsIGNhbnZhcy53aWR0aCAtIDI1LCAyNSwgJ3JpZ2h0JywgJyMyMTIxMjEnLCAnMjAnLFxuICApO1xuXG4gIGNyZWF0ZVNub3dGbGFrZXMoKTtcbiAgLy8gcGxheVNvdW5kLnBsYXlGb24oKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKFVwZGF0ZSk7XG59XG5cbmNvbnN0IGluaXRpYWxTcGF3blRpbWVyID0gMjAwO1xubGV0IHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcblxuZnVuY3Rpb24gVXBkYXRlKCkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoVXBkYXRlKTtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIC8vINCy0YvQutC70Y7Rh9C40YLRjCDRhNC+0L3QvtCy0YPRjiDQvNGD0LfRi9C60YNcbiAgaWYgKGtleXMuS2V5USkge1xuICAgIC8vIHdpbmRvdy5nYW1lU3RhdGUuaXNGb25Tb3VuZCA9IGZhbHNlO1xuICAgIHBsYXlTb3VuZC5zdG9wRm9uKCk7XG4gIH1cblxuICAvLyDQstC60LvRjtGH0LjRgtGMINGE0L7QvdC+0LLRg9GOINC80YPQt9GL0LrRg1xuICBpZiAoa2V5cy5LZXlBKSB7XG4gICAgLy8gd2luZG93LmdhbWVTdGF0ZS5pc0ZvblNvdW5kID0gdHJ1ZTtcbiAgICBwbGF5U291bmQucGxheUZvbigpO1xuICB9XG5cbiAgLy8gc3Bhd24gb2JzdGFjbGVzXG4gIHNwYXduVGltZXIgLT0gMTtcbiAgaWYgKHNwYXduVGltZXIgPD0gMCkge1xuICAgIFNwYXduT2JzdGFjbGUoKTtcbiAgICBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXIgLSBnYW1lU3BlZWQgKiA4O1xuXG4gICAgaWYgKHNwYXduVGltZXIgPCA2MCkge1xuICAgICAgc3Bhd25UaW1lciA9IDYwO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVNub3dGYWxsKCk7XG5cbiAgLy8gc3Bhd24gZW5lbWllc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9ic3RhY2xlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG8gPSBvYnN0YWNsZXNbaV07XG5cbiAgICBpZiAoby54ICsgby53aWR0aCA8IDApIHtcbiAgICAgIG9ic3RhY2xlcy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuXG4gICAgLy8g0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutCwINC40LPRgNGLINC/0YDQuCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LhcbiAgICBpZiAoXG4gICAgICBwbGF5ZXIuZHggPCBvLnggKyBvLndpZHRoXG4gICAgICAmJiBwbGF5ZXIuZHggKyAocGxheWVyLndpZHRoIC8gMTApIC0gMTAgPiBvLnhcbiAgICAgICYmIHBsYXllci55IDwgby55ICsgby5oZWlnaHRcbiAgICAgICYmIHBsYXllci55ICsgcGxheWVyLmhlaWdodCA+PSBvLnlcbiAgICApIHtcbiAgICAgIC8vIHBsYXlTb3VuZC5wbGF5RGVhZCgpO1xuICAgICAgb2JzdGFjbGVzID0gW107XG4gICAgICBnYW1lU3BlZWQgPSAzO1xuICAgICAgc2NvcmUgPSAwO1xuICAgICAgY29pbnNDb3VudGVyLmNvdW50ZXIgPSAwO1xuICAgICAgc3Bhd25UaW1lciA9IGluaXRpYWxTcGF3blRpbWVyO1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWdoc2NvcmUnLCBoaWdoU2NvcmUpO1xuICAgIH1cbiAgICBvLlVwZGF0ZSgpO1xuICB9XG5cbiAgc2NvcmUgKz0gMTtcbiAgc2NvcmVUZXh0LnQgPSBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0uc2NvcmVUeHR9ICR7c2NvcmV9YDtcblxuICBzY29yZVRleHQuRHJhdygpO1xuXG4gIGlmIChzY29yZSA+IGhpZ2hTY29yZSkge1xuICAgIGhpZ2hTY29yZSA9IHNjb3JlO1xuICAgIGhpZ2h0U2NvcmVUZXh0LnQgPSBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0uYmVzdFNjb3JlVHh0fSAke2hpZ2hTY29yZX1gO1xuICB9XG5cbiAgZ2FtZVNwZWVkICs9IDAuMDAzO1xuICBoaWdodFNjb3JlVGV4dC5EcmF3KCk7XG5cbiAgLy8gc3Bhd24gcGxhdGZvcm1cbiAgZ2V0UGxhdGZvcm0oKTtcblxuICAvLyBzcGF3biBjb2luXG4gIGdldENvaW4oKTtcblxuICAvLyBzcGF3biBjbG91ZHNcbiAgZ2V0Q2xvdWRzKCk7XG59XG5cbmV4cG9ydCB7XG4gIHN0YXJ0LCBnYW1lU3BlZWQsIG9ic3RhY2xlcywga2V5cywgc2NvcmUsIHBsYXllciwgY29pbnMsXG59O1xuIiwiaW1wb3J0IHtjdHh9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHQge1xyXG4gIGNvbnN0cnVjdG9yICh0LCB4LCB5LCBhLCBjLCBzKSB7XHJcbiAgICB0aGlzLnQgPSB0O1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmEgPSBhO1xyXG4gICAgdGhpcy5jID0gYztcclxuICAgIHRoaXMucyA9IHM7XHJcbiAgfVxyXG5cclxuIFxyXG4gIERyYXcgKCkge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuYztcclxuICAgIGN0eC5mb250ID0gYCR7dGhpcy5zfXB4IHNhbnMtc2VyaWZgO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IHRoaXMuYTtcclxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnQsIHRoaXMueCwgdGhpcy55KTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
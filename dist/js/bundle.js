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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
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
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(this.image, this.x, _index__WEBPACK_IMPORTED_MODULE_0__.canvas.height - this.flightAltitude);
    }
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
    this.dx = -_start_game__WEBPACK_IMPORTED_MODULE_1__.gameSpeed / _start_game__WEBPACK_IMPORTED_MODULE_1__.gameSpeed;
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
    console.log(this.width);
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
          this.frameIndex += 1;
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



var cloudsSet = [{
  src: 'images/clouds.png',
  sx: 0,
  sy: 0,
  sWidth: 220,
  sHeight: 160,
  dy: 150,
  dWidth: 220,
  dHeight: 160
}, {
  src: 'images/clouds.png',
  sx: 250,
  sy: 0,
  sWidth: 220,
  sHeight: 160,
  dy: 100,
  dWidth: 220,
  dHeight: 160
}];
var cloud;
var clouds = [];
var random;
function getClouds() {
  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % 500 === 0) {
    random = cloudsSet[(0,_get_random_int__WEBPACK_IMPORTED_MODULE_2__.default)(0, 2)];
    cloud = new _cloud__WEBPACK_IMPORTED_MODULE_1__.default(random);
    clouds.push(cloud);
  }

  clouds.map(function (cloud) {
    cloud.update();
  });
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
/* harmony import */ var _get_random_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get_random_int */ "./src/get_random_int.js");






var coin;
var coins = [];
var coinsText; // должен быть именно обьект а не переменная типа let coinsCounter = 0;
// удалить эти строки через несколько коммитов)

var coinsCounter = {
  counter: 0
};
var coinY;
var randTime;
var randY = [{
  y: 350
}, {
  y: 600
}, {
  y: 300
}];

function getCoin() {
  coinsText = new _text__WEBPACK_IMPORTED_MODULE_3__.default("".concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[localStorage.getItem('langSelected')].coinsTxt, " ").concat(coinsCounter.counter), 350, 25, 'right', '#212121', '20');
  coinsText.Draw();

  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % 200 === 0) {
    randTime = (0,_get_random_int__WEBPACK_IMPORTED_MODULE_5__.default)(20, 100);
    randTime += 200;
    coinY = randY[(0,_get_random_int__WEBPACK_IMPORTED_MODULE_5__.default)(0, 3)];
  }

  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % randTime === 0) {
    coin = new _coin__WEBPACK_IMPORTED_MODULE_2__.default({
      x: _index__WEBPACK_IMPORTED_MODULE_1__.canvas.width,
      y: coinY.y,
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

      if (_start_game__WEBPACK_IMPORTED_MODULE_0__.player.dx < coin.x + coin.width / 6 && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.dx + _start_game__WEBPACK_IMPORTED_MODULE_0__.player.width / 10 - 10 > coin.x && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.y < coin.y + coin.height && _start_game__WEBPACK_IMPORTED_MODULE_0__.player.y + _start_game__WEBPACK_IMPORTED_MODULE_0__.player.height >= coin.y) {
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
var randTime;
var platformRandTime = [200, 220, 250, 300];
var platforms = [];
var platformsOptions = [{
  src: 'images/platforma1.png',
  width: 495,
  height: 115,
  flightAltitude: 250
}, {
  src: 'images/platforma2.png',
  width: 280,
  height: 115,
  flightAltitude: 300
}];
function getPlatform() {
  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % 200 === 0) {
    randTime = platformRandTime[(0,_get_random_int__WEBPACK_IMPORTED_MODULE_3__.default)(0, 4)];
  }

  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % randTime === 0) {
    var type = (0,_get_random_int__WEBPACK_IMPORTED_MODULE_3__.default)(0, 2);
    type = platformsOptions[type];
    platform = new _Platform__WEBPACK_IMPORTED_MODULE_2__.default({
      x: _index__WEBPACK_IMPORTED_MODULE_1__.canvas.width,
      y: _index__WEBPACK_IMPORTED_MODULE_1__.canvas.height,
      flightAltitude: type.flightAltitude,
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
      } else if (!flag) {
        _start_game__WEBPACK_IMPORTED_MODULE_0__.player.test = _index__WEBPACK_IMPORTED_MODULE_1__.canvas.height;
        flag = false;
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
/* harmony import */ var _pages_dead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dead */ "./src/pages/dead.js");
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
        this.grounded = true; // dead.hide();

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

        if (localStorage.getItem('animate') === 'true') window.requestAnimationFrame(loop);
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
/* harmony import */ var _pages_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/main */ "./src/pages/main.js");
/* eslint-disable linebreak-style */

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
localStorage.setItem('animate', 'true');
localStorage.setItem('lives', 3);
if (!localStorage.getItem('langSelected')) localStorage.setItem('langSelected', 'en');
if (!localStorage.getItem('SpriteImage')) localStorage.setItem('SpriteImage', 'images/sprite2.png');
(0,_pages_main__WEBPACK_IMPORTED_MODULE_0__.default)();


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
    livesTxt: 'Lives:',
    bestScoreTxt: 'Best score:',
    startGameBtn: 'Start Game',
    optionsBtn: 'Options',
    selectLng: 'Select language:',
    selectPlayer: 'Select player:',
    gameOver: 'You lost. Click to continue.',
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
    livesTxt: 'Жизни:',
    bestScoreTxt: 'Лучший результат:',
    startGameBtn: 'Начать игру',
    optionsBtn: 'Настройки',
    selectLng: 'Выберите язык:',
    selectPlayer: 'Выберите игрока:',
    gameOver: 'Вы проиграли. Кликни чтобы продолжить.',
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
    livesTxt: 'Жыцця:',
    bestScoreTxt: 'Лепшы вынік:',
    startGameBtn: 'Пачать ігру',
    optionsBtn: 'Опцыі',
    selectLng: 'Выберыце мову:',
    selectPlayer: 'Выберыце персанажа:',
    gameOver: 'Вы прайгралі. Клікні каб працягнуць.',
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

/***/ "./src/pages/dead.js":
/*!***************************!*\
  !*** ./src/pages/dead.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dead": () => /* binding */ dead
/* harmony export */ });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang */ "./src/lang.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../start_game */ "./src/start_game.js");
/* eslint-disable linebreak-style */


var dead = {
  show: function show() {
    localStorage.setItem('animate', 'false');
    var lg = localStorage.getItem('langSelected');
    var page = document.querySelector('.page') || document.createElement('div');
    page.classList.add('zindex');
    page.innerHTML = "\n  <div class=\"help-txt-wrapper\">\n\u0412\u044B \u043F\u043E\u0442\u0435\u0440\u044F\u043B\u0438 \u0436\u0438\u0437\u043D\u044C.\n<br>\u041A\u043B\u0438\u043A\u043D\u0438 \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C.\n  </div>\n  ";
    document.body.appendChild(page);
    document.addEventListener('click', function () {
      document.body.removeChild(page);
      localStorage.setItem('animate', 'true');
      (0,_start_game__WEBPACK_IMPORTED_MODULE_1__.start)();
    });
  },
  hide: function hide() {
    var page1 = document.querySelector('.page');
    page1.classList.add('hidden');
  }
};


/***/ }),

/***/ "./src/pages/game-over.js":
/*!********************************!*\
  !*** ./src/pages/game-over.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ gameOver
/* harmony export */ });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang */ "./src/lang.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* eslint-disable linebreak-style */


function gameOver() {
  document.body.removeChild(_index__WEBPACK_IMPORTED_MODULE_1__.canvas);
  localStorage.setItem('animate', 'false');
  var lg = localStorage.getItem('langSelected');
  var pageWrapper = document.querySelector('.page-wrapper');
  var page = document.querySelector('.page') || document.createElement('div');
  page.classList.add('page', 'game-over-image');
  page.innerHTML = "\n    <div class=\"game-over\">\n    ".concat(_lang__WEBPACK_IMPORTED_MODULE_0__.lang[lg].gameOver, "\n    </div>\n    ");
  pageWrapper.appendChild(page);
  pageWrapper.classList.remove('hidden');
  document.addEventListener('click', function () {
    window.location.reload();
  });
}

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
  page.innerHTML = "\n<a class=\"btnflip start-main start\" href=\"#\">\n  <span class=\"btnflip-item btnflip__front\">".concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].startGameBtn, "</span>\n  <span class=\"btnflip-item btnflip__center\"></span>\n  <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].startGameBtn, "</span>\n</a>\n\n<a class=\"btnflip options-main options\" href=\"#\">\n  <span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].optionsBtn, "</span>\n  <span class=\"btnflip-item btnflip__center\"></span>\n  <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].optionsBtn, "</span>\n</a>\n\n<a class=\"btnflip help-main help\" href=\"#\">  \n  <span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].helpBtn, "</span>\n  <span class=\"btnflip-item btnflip__center\"></span>\n  <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].helpBtn, "</span>\n</a>\n<footer class=\"footer\">\n<strong>\n<a href=\"https://github.com/SergRudovich\" target=\"blank\">Sergey Rudovich</a>\n&nbsp|&nbsp\n<a href=\"https://github.com/conservativ007\" target=\"blank\">Maks conservativ007</a>\n<p style=\"text-align: center\">\n<a href=\"https://rs.school/js/\" target=\"blank\">\n<img src=\"https://rs.school/images/rs_school_js.svg\" alt=\"RS School\" style=\"width: 50px\"></a>\n<span class=\"footer__year\">\xA9 2021</span>\n</p>\n</strong>\n</footer>\n  ");

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
  page.innerHTML = "\n  <div class=\"help-txt-wrapper\">\n  <p class=\"menuItem\" id='menuFieldSize'>\n  <label>".concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].selectLng, "</label>\n  <select id=\"selectLang\">\n      <option value=\"en\" selected=\"selected\">english</option>\n      <option value=\"ru\">\u0440\u0443\u0441\u0441\u043A\u0438\u0439</option>\n      <option value=\"br\">\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F</option>\n  </select>\n  </p>\n  <br><p>").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].selectPlayer, "</p>\n  <br>\n  <img src=\"img/sprite2_icon.png\" class=\"player2\" alt=\"player2\">\n  <img src=\"img/sprite1_icon.png\" class=\"player1\" alt=\"player1\">\n  </div>\n  <a class=\"btnflip start-help start\" href=\"#\">\n  <span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].startGameBtn, "</span>\n  <span class=\"btnflip-item btnflip__center\"></span>\n  <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].startGameBtn, "</span>\n</a>\n\n<a class=\"btnflip options-help help\" href=\"#\">\n  <span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].helpBtn, "</span>\n  <span class=\"btnflip-item btnflip__center\"></span>\n  <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].helpBtn, "</span>\n</a>\n  ");
  document.querySelector('#selectLang > option[selected]').removeAttribute('selected');
  document.querySelector("#selectLang > option[value=".concat(lg, "]")).setAttribute('selected', 'selected');

  function startGame() {
    pageWrapper.innerHTML = '';
    pageWrapper.classList.add('hidden');
    _index__WEBPACK_IMPORTED_MODULE_0__.canvas.classList.remove('hidden');
    (0,_start_game__WEBPACK_IMPORTED_MODULE_1__.start)();
  } // выбор языка


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
  }); // выбор игрока

  var player1 = document.querySelector('.player1');
  var player2 = document.querySelector('.player2');
  var playerSelected = localStorage.getItem('SpriteImage');

  if (playerSelected === 'images/sprite2.png') {
    player2.classList.add('player-icon-selected');
  } else {
    player1.classList.add('player-icon-selected');
  }

  player1.addEventListener('click', function () {
    localStorage.setItem('SpriteImage', 'images/sprite1.png');
    player1.classList.add('player-icon-selected');
    player2.classList.remove('player-icon-selected');
    options();
  });
  player2.addEventListener('click', function () {
    localStorage.setItem('SpriteImage', 'images/sprite2.png');
    player2.classList.add('player-icon-selected');
    player1.classList.remove('player-icon-selected');
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
var w;
var h;
var particlesArray = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
w = window.innerWidth;
h = window.innerHeight;

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

    gradient.addColorStop(0, "rgba(255, 255, 255,".concat(particlesArray[i].opacity, ")")); // white

    gradient.addColorStop(0.8, "rgba(210, 236, 242,".concat(particlesArray[i].opacity, ")")); // bluish

    gradient.addColorStop(1, "rgba(237, 247, 249,".concat(particlesArray[i].opacity, ")"));
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
/* harmony export */   "Update": () => /* binding */ Update,
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
/* harmony import */ var _pages_main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/main */ "./src/pages/main.js");
/* harmony import */ var _pages_dead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/dead */ "./src/pages/dead.js");
/* harmony import */ var _pages_game_over__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/game-over */ "./src/pages/game-over.js");












 // let lives;

var score;
var highScore;
var highCoins;
var scoreText;
var hightScoreText;
var hightCoinsText;
var livesText;
var gameSpeed;
var player;
var obstacles = [];
var coins = [];
var keys = {};
var coinImage;
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
  gameSpeed = 3; // lives = 3;

  score = 0;
  highScore = 0;
  highCoins = 0;

  if (localStorage.getItem('highscore')) {
    highScore = localStorage.getItem('highscore');
  }

  if (localStorage.getItem('highCoins')) {
    highCoins = localStorage.getItem('highCoins');
  }

  coinImage = new Image();
  coinImage.src = localStorage.getItem('SpriteImage');
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
  player.start();
  scoreText = new _text__WEBPACK_IMPORTED_MODULE_1__.default("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].scoreTxt, " ").concat(score), 25, 25, 'left', '#212121', '20');
  livesText = new _text__WEBPACK_IMPORTED_MODULE_1__.default("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].livesTxt, " ").concat(localStorage.getItem('lives')), 500, 25, 'right', '#212121', '20');
  hightScoreText = new _text__WEBPACK_IMPORTED_MODULE_1__.default("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].bestScoreTxt, " ").concat(highScore), _index__WEBPACK_IMPORTED_MODULE_3__.canvas.width - 150, 25, 'right', '#212121', '20');
  hightCoinsText = new _text__WEBPACK_IMPORTED_MODULE_1__.default("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].coinsTxt, " ").concat(highCoins), _index__WEBPACK_IMPORTED_MODULE_3__.canvas.width - 25, 25, 'right', '#212121', '20');
  (0,_snow_flakes__WEBPACK_IMPORTED_MODULE_4__.createSnowFlakes)(); // playSound.playFon();

  requestAnimationFrame(Update);
}

var initialSpawnTimer = 200;
var spawnTimer = initialSpawnTimer;

function Update() {
  if (localStorage.getItem('animate') === 'true') requestAnimationFrame(Update);
  _index__WEBPACK_IMPORTED_MODULE_3__.ctx.clearRect(0, 0, _index__WEBPACK_IMPORTED_MODULE_3__.canvas.width, _index__WEBPACK_IMPORTED_MODULE_3__.canvas.height); // выключить фоновую музыку

  if (keys.KeyQ) {
    playSound.stopFon();
  } // включить фоновую музыку


  if (keys.KeyA) {
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
      playSound.playDead();
      obstacles = [];
      gameSpeed = 3;
      localStorage.setItem('lives', localStorage.getItem('lives') - 1);

      if (localStorage.getItem('lives') == 0) {
        (0,_pages_game_over__WEBPACK_IMPORTED_MODULE_12__.default)();
      } else {// dead.show();
      }

      livesText.t = "".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].livesTxt, " ").concat(localStorage.getItem('lives'));
      score = 0;
      player.dx = 0;
      player.y = 0;
      _get_coin__WEBPACK_IMPORTED_MODULE_6__.coinsCounter.counter = 0;
      spawnTimer = initialSpawnTimer;
      window.localStorage.setItem('highscore', highScore);
      window.localStorage.setItem('highCoins', highCoins);
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

  if (_get_coin__WEBPACK_IMPORTED_MODULE_6__.coinsCounter.counter > highCoins) {
    highCoins = _get_coin__WEBPACK_IMPORTED_MODULE_6__.coinsCounter.counter;
    hightCoinsText.t = "".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].coinsTxt, " ").concat(highCoins);
  }

  gameSpeed += 0.003;
  hightScoreText.Draw();
  hightCoinsText.Draw();
  livesText.Draw(); // spawn platform

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
/* harmony export */   "default": () => /* binding */ Text
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable linebreak-style */


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL1BsYXRmb3JtLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvY2xvdWQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9jb2luLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvZ2FtZS1zb3VuZC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dldF9jbG91ZHMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9nZXRfY29pbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dldF9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dldF9yYW5kb21faW50LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvaGVyby5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvbGFuZy5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL29ic3RhY2xlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGFnZXMvZGVhZC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3BhZ2VzL2dhbWUtb3Zlci5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3BhZ2VzL2hlbHAuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9wYWdlcy9tYWluLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGFnZXMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3BsYXllci1zb3VuZC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3Nub3dfZmxha2VzLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvc3Bhd25fb2JzdGFjbGUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9zdGFydF9nYW1lLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvdGV4dC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiUGxhdGZvcm0iLCJvcHRpb25zIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImZsaWdodEFsdGl0dWRlIiwiZ2FtZVNwZWVkIiwiZHgiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiaW1hZ2VTcmMiLCJyZW5kZXIiLCJjdHgiLCJjYW52YXMiLCJDbG91ZCIsInN4Iiwic3kiLCJzV2lkdGgiLCJzSGVpZ2h0IiwiZHkiLCJkV2lkdGgiLCJkSGVpZ2h0IiwiQ29pbiIsImNvbnNvbGUiLCJsb2ciLCJ0aWNrc1BlckZyYW1lIiwibnVtYmVyT2ZGcmFtZXMiLCJmcmFtZUluZGV4IiwidGlja0NvdW50IiwiYXVkaW9PYmoiLCJBdWRpbyIsInBsYXkiLCJ1cGRhdGUiLCJHYW1lU291bmQiLCJmb25Tb3VuZCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidm9sdW1lIiwiZGVhZFNvdW5kIiwibG9vcCIsInBhdXNlIiwiY2xvdWRzU2V0IiwiY2xvdWQiLCJjbG91ZHMiLCJyYW5kb20iLCJnZXRDbG91ZHMiLCJzY29yZSIsImdldFJhbmRvbUludCIsInB1c2giLCJtYXAiLCJjb2luIiwiY29pbnMiLCJjb2luc1RleHQiLCJjb2luc0NvdW50ZXIiLCJjb3VudGVyIiwiY29pblkiLCJyYW5kVGltZSIsInJhbmRZIiwiZ2V0Q29pbiIsIlRleHQiLCJsYW5nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvaW5zVHh0IiwiRHJhdyIsImxlbmd0aCIsImZvckVhY2giLCJzdGFydCIsInBsYXllciIsInBsYXlDb2luU291bmQiLCJwbGF0Zm9ybSIsInBsYXRmb3JtUmFuZFRpbWUiLCJwbGF0Zm9ybXMiLCJwbGF0Zm9ybXNPcHRpb25zIiwiZ2V0UGxhdGZvcm0iLCJ0eXBlIiwiZmxhZyIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJIZXJvIiwianVtcEZvcmNlIiwiZ3JvdW5kZWQiLCJqdW1wVGltZXIiLCJncmF2aXR5IiwiaXNMZWZ0IiwidGVzdCIsInNvdW5kIiwiUGxheWVyU291bmQiLCJrZXlzIiwianVtcFVwIiwiSnVtcCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwianVtcERvd24iLCJncmF2aXR5R28iLCJnZXRSZWFkeVRvSnVtcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9ubG9hZCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0Iiwic2V0SXRlbSIsIm1haW4iLCJlbiIsInNjb3JlVHh0IiwibGl2ZXNUeHQiLCJiZXN0U2NvcmVUeHQiLCJzdGFydEdhbWVCdG4iLCJvcHRpb25zQnRuIiwic2VsZWN0TG5nIiwic2VsZWN0UGxheWVyIiwiZ2FtZU92ZXIiLCJoZWxwQnRuIiwiaGVscFR4dDEiLCJoZWxwVHh0MiIsImhlbHBUeHQzIiwiaGVscFR4dDQiLCJoZWxwVHh0NSIsImhlbHBUeHQ2IiwiaGVscFR4dDciLCJoZWxwVHh0OCIsInJ1IiwiYnIiLCJPYnN0YWNsZSIsImRlYWQiLCJzaG93IiwibGciLCJwYWdlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsImhpZGUiLCJwYWdlMSIsInBhZ2VXcmFwcGVyIiwicmVtb3ZlIiwiaGVscCIsInN0YXJ0R2FtZSIsInN0YXJ0QnRuIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwic2VsZWN0TGFuZyIsInZhbHVlIiwicGxheWVyMSIsInBsYXllcjIiLCJwbGF5ZXJTZWxlY3RlZCIsInNvdW5kVXAiLCJzb3VuZERvd24iLCJpc0dyYXZpdHlEb3duIiwiaXNKdW1wVXAiLCJjdXJyZW50VGltZSIsInBhcnRpY2xlc09uU2NyZWVuIiwidyIsImgiLCJwYXJ0aWNsZXNBcnJheSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNsaWVudFJlc2l6ZSIsImV2IiwiY3JlYXRlU25vd0ZsYWtlcyIsImkiLCJvcGFjaXR5Iiwic3BlZWRYIiwic3BlZWRZIiwicmFkaXVzIiwiZHJhd1Nub3dGbGFrZXMiLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwibW92ZVNub3dGbGFrZXMiLCJ1cGRhdGVTbm93RmFsbCIsImNsZWFyUmVjdCIsIlNwYXduT2JzdGFjbGUiLCJSYW5kb21JbnRSYW5nZSIsIm9ic3RhY2xlIiwib2JzdGFjbGVzIiwicm91bmQiLCJoaWdoU2NvcmUiLCJoaWdoQ29pbnMiLCJzY29yZVRleHQiLCJoaWdodFNjb3JlVGV4dCIsImhpZ2h0Q29pbnNUZXh0IiwibGl2ZXNUZXh0IiwiY29pbkltYWdlIiwicGxheVNvdW5kIiwiZSIsImNvZGUiLCJVcGRhdGUiLCJpbml0aWFsU3Bhd25UaW1lciIsInNwYXduVGltZXIiLCJLZXlRIiwic3RvcEZvbiIsIktleUEiLCJwbGF5Rm9uIiwibyIsInNwbGljZSIsInBsYXlEZWFkIiwidCIsImEiLCJjIiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQSxRO0FBQ25CLG9CQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtDLENBQUwsR0FBU0QsT0FBTyxDQUFDQyxDQUFqQjtBQUNBLFNBQUtDLENBQUwsR0FBU0YsT0FBTyxDQUFDRSxDQUFqQjtBQUNBLFNBQUtDLEtBQUwsR0FBYUgsT0FBTyxDQUFDRyxLQUFyQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0osT0FB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgdGhpcy5mbGlnaHRBbHRpdHVkZSA9IG9wdGlvbnMuZmxpZ2h0QWx0aXR1ZGU7XG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XG5cbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLmltYWdlU3JjO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICB0aGlzLngsXG4gICAgICBjYW52YXMuaGVpZ2h0IC0gdGhpcy5mbGlnaHRBbHRpdHVkZSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IHsgZ2FtZVNwZWVkIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvdWQge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoO1xuICAgIHRoaXMuc3ggPSBvcHRpb25zLnN4O1xuICAgIHRoaXMuc3kgPSBvcHRpb25zLnN5O1xuICAgIHRoaXMuc1dpZHRoID0gb3B0aW9ucy5zV2lkdGg7XG4gICAgdGhpcy5zSGVpZ2h0ID0gb3B0aW9ucy5zSGVpZ2h0O1xuICAgIHRoaXMuZHkgPSBvcHRpb25zLmR5O1xuICAgIHRoaXMuZFdpZHRoID0gb3B0aW9ucy5zV2lkdGg7XG4gICAgdGhpcy5kSGVpZ2h0ID0gb3B0aW9ucy5zSGVpZ2h0O1xuXG4gICAgdGhpcy5keCA9IC1nYW1lU3BlZWQgLyBnYW1lU3BlZWQ7XG5cbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLnNyYztcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5zeCxcbiAgICAgIHRoaXMuc3ksXG4gICAgICB0aGlzLnNXaWR0aCxcbiAgICAgIHRoaXMuc0hlaWdodCxcbiAgICAgIHRoaXMueCxcbiAgICAgIHRoaXMuZHksXG4gICAgICB0aGlzLmRXaWR0aCxcbiAgICAgIHRoaXMuZEhlaWdodCxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLndpZHRoKTtcblxuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cbiAgICB0aGlzLnRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMDtcbiAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gb3B0aW9ucy5udW1iZXJPZkZyYW1lcyB8fCAxO1xuXG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgdGhpcy50aWNrQ291bnQgPSAwO1xuXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9ICcuL2ltYWdlcy9jb2luLnBuZyc7XG5cbiAgICB0aGlzLmF1ZGlvT2JqID0gbmV3IEF1ZGlvKCcuL3NvdW5kL2NvaW4yLm1wMycpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuXG4gICAgdGhpcy50aWNrQ291bnQrKztcblxuICAgIGlmICh0aGlzLnRpY2tDb3VudCA+IHRoaXMudGlja3NQZXJGcmFtZSkge1xuICAgICAgdGhpcy50aWNrQ291bnQgPSAwO1xuICAgICAgaWYgKHRoaXMuZnJhbWVJbmRleCA8IHRoaXMubnVtYmVyT2ZGcmFtZXMgLSAxKSB7XG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICAodGhpcy5mcmFtZUluZGV4ICogdGhpcy53aWR0aCkgLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgMCxcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICB0aGlzLngsXG4gICAgICB0aGlzLnksXG4gICAgICB0aGlzLndpZHRoIC8gdGhpcy5udW1iZXJPZkZyYW1lcyxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICk7XG4gIH1cblxuICBwbGF5Q29pblNvdW5kKCkge1xuICAgIHRoaXMuYXVkaW9PYmoucGxheSgpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTb3VuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyB0aGlzLnVybCA9IHdpbmRvdy5nYW1lU3RhdGUuc291bmRVcmw7XHJcbiAgICAvLyB0aGlzLm51bSA9IDE7XHJcbiAgICB0aGlzLmZvblNvdW5kID0gbmV3IEF1ZGlvKCdzb3VuZC9mb24xLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmZvblNvdW5kKTtcclxuICAgIHRoaXMuZm9uU291bmQudm9sdW1lID0gMC4xO1xyXG4gICAgdGhpcy5kZWFkU291bmQgPSBuZXcgQXVkaW8oJ3NvdW5kL2RlYWQubXAzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZGVhZFNvdW5kKTtcclxuICB9XHJcblxyXG4gIHBsYXlGb24oKSB7XHJcbiAgICB0aGlzLmZvblNvdW5kLmxvb3AgPSB0cnVlO1xyXG4gICAgdGhpcy5mb25Tb3VuZC5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBzdG9wRm9uKCkge1xyXG4gICAgdGhpcy5mb25Tb3VuZC5wYXVzZSgpO1xyXG4gIH1cclxuXHJcbiAgcGxheURlYWQoKSB7XHJcbiAgICB0aGlzLmRlYWRTb3VuZC5wbGF5KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHNjb3JlIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcbmltcG9ydCBDbG91ZCBmcm9tICcuL2Nsb3VkJztcbmltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSAnLi9nZXRfcmFuZG9tX2ludCc7XG5cbmNvbnN0IGNsb3Vkc1NldCA9IFtcbiAge1xuICAgIHNyYzogJ2ltYWdlcy9jbG91ZHMucG5nJyxcbiAgICBzeDogMCxcbiAgICBzeTogMCxcbiAgICBzV2lkdGg6IDIyMCxcbiAgICBzSGVpZ2h0OiAxNjAsXG4gICAgZHk6IDE1MCxcbiAgICBkV2lkdGg6IDIyMCxcbiAgICBkSGVpZ2h0OiAxNjAsXG4gIH0sXG4gIHtcbiAgICBzcmM6ICdpbWFnZXMvY2xvdWRzLnBuZycsXG4gICAgc3g6IDI1MCxcbiAgICBzeTogMCxcbiAgICBzV2lkdGg6IDIyMCxcbiAgICBzSGVpZ2h0OiAxNjAsXG4gICAgZHk6IDEwMCxcbiAgICBkV2lkdGg6IDIyMCxcbiAgICBkSGVpZ2h0OiAxNjAsXG4gIH0sXG5dO1xuXG5sZXQgY2xvdWQ7XG5jb25zdCBjbG91ZHMgPSBbXTtcbmxldCByYW5kb207XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsb3VkcygpIHtcbiAgaWYgKHNjb3JlICUgNTAwID09PSAwKSB7XG4gICAgcmFuZG9tID0gY2xvdWRzU2V0W2dldFJhbmRvbUludCgwLCAyKV07XG4gICAgY2xvdWQgPSBuZXcgQ2xvdWQocmFuZG9tKTtcblxuICAgIGNsb3Vkcy5wdXNoKGNsb3VkKTtcbiAgfVxuXG4gIGNsb3Vkcy5tYXAoKGNsb3VkKSA9PiB7XG4gICAgY2xvdWQudXBkYXRlKCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgc2NvcmUsIHBsYXllciwgZ2FtZVNwZWVkIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IENvaW4gZnJvbSAnLi9jb2luJztcblxuaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0JztcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuL2xhbmcnO1xuaW1wb3J0IGdldFJhbmRvbUludCBmcm9tICcuL2dldF9yYW5kb21faW50JztcblxubGV0IGNvaW47XG5jb25zdCBjb2lucyA9IFtdO1xuXG5sZXQgY29pbnNUZXh0O1xuLy8g0LTQvtC70LbQtdC9INCx0YvRgtGMINC40LzQtdC90L3QviDQvtCx0YzQtdC60YIg0LAg0L3QtSDQv9C10YDQtdC80LXQvdC90LDRjyDRgtC40L/QsCBsZXQgY29pbnNDb3VudGVyID0gMDtcbi8vINGD0LTQsNC70LjRgtGMINGN0YLQuCDRgdGC0YDQvtC60Lgg0YfQtdGA0LXQtyDQvdC10YHQutC+0LvRjNC60L4g0LrQvtC80LzQuNGC0L7QsilcbmV4cG9ydCBjb25zdCBjb2luc0NvdW50ZXIgPSB7XG4gIGNvdW50ZXI6IDAsXG59O1xuXG5sZXQgY29pblk7XG5sZXQgcmFuZFRpbWU7XG5jb25zdCByYW5kWSA9IFtcbiAge1xuICAgIHk6IDM1MCxcbiAgfSxcbiAge1xuICAgIHk6IDYwMCxcbiAgfSxcbiAge1xuICAgIHk6IDMwMCxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIGdldENvaW4oKSB7XG4gIGNvaW5zVGV4dCA9IG5ldyBUZXh0KFxuICAgIGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5jb2luc1R4dH0gJHtjb2luc0NvdW50ZXIuY291bnRlcn1gLCAzNTAsIDI1LCAncmlnaHQnLCAnIzIxMjEyMScsICcyMCcsXG4gICk7XG5cbiAgY29pbnNUZXh0LkRyYXcoKTtcblxuICBpZiAoc2NvcmUgJSAyMDAgPT09IDApIHtcbiAgICByYW5kVGltZSA9IGdldFJhbmRvbUludCgyMCwgMTAwKTtcbiAgICByYW5kVGltZSArPSAyMDA7XG4gICAgY29pblkgPSByYW5kWVtnZXRSYW5kb21JbnQoMCwgMyldO1xuICB9XG5cbiAgaWYgKHNjb3JlICUgcmFuZFRpbWUgPT09IDApIHtcbiAgICBjb2luID0gbmV3IENvaW4oe1xuICAgICAgeDogY2FudmFzLndpZHRoLFxuICAgICAgeTogY29pblkueSxcbiAgICAgIHdpZHRoOiA1MDQsXG4gICAgICBoZWlnaHQ6IDg0LFxuICAgICAgbnVtYmVyT2ZGcmFtZXM6IDYsXG4gICAgICB0aWNrc1BlckZyYW1lOiA0LFxuICAgICAgZ2FtZVNwZWVkLFxuICAgIH0pO1xuXG4gICAgY29pbnMucHVzaChjb2luKTtcbiAgfVxuXG4gIGlmIChjb2lucy5sZW5ndGggPiAwKSB7XG4gICAgY29pbnMuZm9yRWFjaCgoY29pbikgPT4ge1xuICAgICAgY29pbi5zdGFydCgpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHBsYXllci5keCA8IGNvaW4ueCArIChjb2luLndpZHRoIC8gNilcbiAgICAgICAgJiYgcGxheWVyLmR4ICsgKHBsYXllci53aWR0aCAvIDEwKSAtIDEwID4gY29pbi54XG4gICAgICAgICYmIHBsYXllci55IDwgY29pbi55ICsgY29pbi5oZWlnaHRcbiAgICAgICAgJiYgcGxheWVyLnkgKyBwbGF5ZXIuaGVpZ2h0ID49IGNvaW4ueVxuICAgICAgKSB7XG4gICAgICAgIGNvaW4ueSA9IDEwMDAwO1xuICAgICAgICBjb2luLnBsYXlDb2luU291bmQoKTtcbiAgICAgICAgY29pbnNDb3VudGVyLmNvdW50ZXIgKz0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvaW4ueCA8IC01MCkge1xuICAgICAgICBjb2luLnkgPSAxMDAwMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRDb2luIH07XG4iLCJpbXBvcnQgeyBzY29yZSwgcGxheWVyLCBnYW1lU3BlZWQgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgUGxhdGZvcm0gZnJvbSAnLi9QbGF0Zm9ybSc7XG5pbXBvcnQgZ2V0UmFuZG9tSW50IGZyb20gJy4vZ2V0X3JhbmRvbV9pbnQnO1xuXG5sZXQgcGxhdGZvcm07XG5cbmxldCByYW5kVGltZTtcbmNvbnN0IHBsYXRmb3JtUmFuZFRpbWUgPSBbMjAwLCAyMjAsIDI1MCwgMzAwXTtcblxuY29uc3QgcGxhdGZvcm1zID0gW107XG5jb25zdCBwbGF0Zm9ybXNPcHRpb25zID0gW1xuICB7XG4gICAgc3JjOiAnaW1hZ2VzL3BsYXRmb3JtYTEucG5nJyxcbiAgICB3aWR0aDogNDk1LFxuICAgIGhlaWdodDogMTE1LFxuICAgIGZsaWdodEFsdGl0dWRlOiAyNTAsXG4gIH0sXG4gIHtcbiAgICBzcmM6ICdpbWFnZXMvcGxhdGZvcm1hMi5wbmcnLFxuICAgIHdpZHRoOiAyODAsXG4gICAgaGVpZ2h0OiAxMTUsXG4gICAgZmxpZ2h0QWx0aXR1ZGU6IDMwMCxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBsYXRmb3JtKCkge1xuICBpZiAoc2NvcmUgJSAyMDAgPT09IDApIHtcbiAgICByYW5kVGltZSA9IHBsYXRmb3JtUmFuZFRpbWVbZ2V0UmFuZG9tSW50KDAsIDQpXTtcbiAgfVxuXG4gIGlmIChzY29yZSAlIHJhbmRUaW1lID09PSAwKSB7XG4gICAgbGV0IHR5cGUgPSBnZXRSYW5kb21JbnQoMCwgMik7XG4gICAgdHlwZSA9IHBsYXRmb3Jtc09wdGlvbnNbdHlwZV07XG5cbiAgICBwbGF0Zm9ybSA9IG5ldyBQbGF0Zm9ybSh7XG4gICAgICB4OiBjYW52YXMud2lkdGgsXG4gICAgICB5OiBjYW52YXMuaGVpZ2h0LFxuICAgICAgZmxpZ2h0QWx0aXR1ZGU6IHR5cGUuZmxpZ2h0QWx0aXR1ZGUsXG4gICAgICB3aWR0aDogdHlwZS53aWR0aCxcbiAgICAgIGhlaWdodDogdHlwZS5oZWlnaHQsXG4gICAgICBnYW1lU3BlZWQsXG4gICAgICBpbWFnZVNyYzogdHlwZS5zcmMsXG4gICAgfSk7XG5cbiAgICBwbGF0Zm9ybXMucHVzaChwbGF0Zm9ybSk7XG4gIH1cblxuICBsZXQgZmxhZyA9IGZhbHNlO1xuXG4gIGZvciAoY29uc3QgcGxhdGZvcm0gb2YgcGxhdGZvcm1zKSB7XG4gICAgcGxhdGZvcm0udXBkYXRlKCk7XG5cbiAgICBpZiAoXG4gICAgICAocGxheWVyLmR4ID4gcGxhdGZvcm0ueCAmJiBwbGF5ZXIuZHggPCBwbGF0Zm9ybS54ICsgcGxhdGZvcm0ud2lkdGggLSA0MClcbiAgICAgICYmIHBsYXllci55IDwgY2FudmFzLmhlaWdodCAtIHBsYXRmb3JtLmZsaWdodEFsdGl0dWRlXG4gICAgKSB7XG4gICAgICBwbGF5ZXIudGVzdCA9IGNhbnZhcy5oZWlnaHQgLSBwbGF0Zm9ybS5mbGlnaHRBbHRpdHVkZSArIDI7XG4gICAgICBmbGFnID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFmbGFnKSB7XG4gICAgICBwbGF5ZXIudGVzdCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICBmbGFnID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjsgLy8g0JzQsNC60YHQuNC80YPQvCDQvdC1INCy0LrQu9GO0YfQsNC10YLRgdGPLCDQvNC40L3QuNC80YPQvCDQstC60LvRjtGH0LDQtdGC0YHRj1xufSIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBrZXlzIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcbmltcG9ydCBQbGF5ZXJTb3VuZCBmcm9tICcuL3BsYXllci1zb3VuZCc7XG5pbXBvcnQgeyBkZWFkIH0gZnJvbSAnLi9wYWdlcy9kZWFkJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm8ge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5pbWFnZSA9IG9wdGlvbnMuaW1hZ2U7XG5cbiAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgIHRoaXMudGlja0NvdW50ID0gMDtcbiAgICB0aGlzLnRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMDtcbiAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gb3B0aW9ucy5udW1iZXJPZkZyYW1lcyB8fCAxO1xuXG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcblxuICAgIHRoaXMuZHkgPSBvcHRpb25zLmR5IHx8IDA7XG4gICAgdGhpcy5keCA9IDA7XG4gICAgdGhpcy5zeCA9IDA7XG4gICAgdGhpcy5qdW1wRm9yY2UgPSAxNTtcbiAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5qdW1wVGltZXIgPSAwO1xuXG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLmdyYXZpdHkgPSAxO1xuXG4gICAgdGhpcy5pc0xlZnQgPSBmYWxzZTtcblxuICAgIC8vIHBsYXRmb3JtXG4gICAgdGhpcy50ZXN0ID0gb3B0aW9ucy50ZXN0O1xuXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBQbGF5ZXJTb3VuZCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudGlja0NvdW50ICs9IDE7XG5cbiAgICBpZiAodGhpcy50aWNrQ291bnQgPiB0aGlzLnRpY2tzUGVyRnJhbWUpIHtcbiAgICAgIHRoaXMudGlja0NvdW50ID0gMDtcbiAgICAgIGlmICh0aGlzLmZyYW1lSW5kZXggPCB0aGlzLm51bWJlck9mRnJhbWVzIC0gMSkge1xuICAgICAgICB0aGlzLmZyYW1lSW5kZXggKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgKHRoaXMuZnJhbWVJbmRleCAqIHRoaXMud2lkdGgpIC8gdGhpcy5udW1iZXJPZkZyYW1lcyxcbiAgICAgIHRoaXMuc3gsXG4gICAgICB0aGlzLndpZHRoIC8gdGhpcy5udW1iZXJPZkZyYW1lcyxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgdGhpcy5keCxcbiAgICAgIHRoaXMueSxcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGdyYXZpdHlcbiAgLy8gZ3Jhdml0eUdvKCkge1xuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMudGVzdClcbiAgLy8gICB0aGlzLnkgKz0gdGhpcy5keTtcblxuICAvLyAgIGlmICh0aGlzLnkgKyB0aGlzLmhlaWdodCA8IGNhbnZhcy5oZWlnaHQpIHtcbiAgLy8gICAgIHRoaXMuZHkgKz0gdGhpcy5ncmF2aXR5O1xuICAvLyAgICAgdGhpcy5ncm91bmRlZCA9IGZhbHNlO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICB0aGlzLmR5ID0gMDtcbiAgLy8gICAgIHRoaXMuZ3JvdW5kZWQgPSB0cnVlO1xuICAvLyAgICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0O1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGdyYXZpdHlHbygpIHtcbiAgICB0aGlzLnkgKz0gdGhpcy5keTtcblxuICAgIGlmICh0aGlzLnkgKyB0aGlzLmhlaWdodCA8IHRoaXMudGVzdCkge1xuICAgICAgdGhpcy5keSArPSB0aGlzLmdyYXZpdHk7XG4gICAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5keSA+IDApIHtcbiAgICAgICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IDE7XG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCkge1xuICAgICAgICAgIHRoaXMuc3ggPSAzMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zeCA9IDQwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmR5ID0gMDtcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0cnVlO1xuICAgICAgLy8gZGVhZC5oaWRlKCk7XG4gICAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gNjtcbiAgICAgIGlmICh0aGlzLmlzTGVmdCkge1xuICAgICAgICB0aGlzLnN4ID0gMTAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zeCA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLnkgPSB0aGlzLnRlc3QgLSB0aGlzLmhlaWdodDtcbiAgICB9XG4gIH1cblxuICAvLyBqdW1wXG4gIGdldFJlYWR5VG9KdW1wKCkge1xuICAgIGlmIChrZXlzLlNwYWNlIHx8IGtleXMuS2V5VyB8fCBrZXlzLkFycm93VXApIHtcbiAgICAgIHRoaXMuc291bmQuanVtcFVwKCk7XG4gICAgICB0aGlzLkp1bXAoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5qdW1wVGltZXIgPSAwO1xuICAgIH1cbiAgICBpZiAoa2V5cy5LZXlNIHx8IGtleXMuQXJyb3dSaWdodCkge1xuICAgICAgaWYgKHRoaXMuZHggPCBjYW52YXMud2lkdGggLSAxMDApIHRoaXMuZHggKz0gNTtcbiAgICAgIHRoaXMuc3ggPSAwO1xuICAgICAgdGhpcy5pc0xlZnQgPSBmYWxzZTtcbiAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSA2O1xuICAgIH1cbiAgICBpZiAoa2V5cy5LZXlOIHx8IGtleXMuQXJyb3dMZWZ0KSB7XG4gICAgICBpZiAodGhpcy5keCA+IDApIHRoaXMuZHggLT0gNTtcbiAgICAgIHRoaXMuc3ggPSAxMDA7XG4gICAgICB0aGlzLmlzTGVmdCA9IHRydWU7XG4gICAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gNjtcbiAgICB9XG4gICAgaWYgKGtleXMuRXNjYXBlKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICB9XG5cbiAgSnVtcCgpIHtcbiAgICBpZiAodGhpcy5ncm91bmRlZCAmJiB0aGlzLmp1bXBUaW1lciA9PT0gMCkge1xuICAgICAgdGhpcy5qdW1wVGltZXIgPSAxO1xuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZTtcbiAgICAgIHRoaXMuc291bmQuanVtcERvd24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuanVtcFRpbWVyID4gMCAmJiB0aGlzLmp1bXBUaW1lciA8IDE1KSB7XG4gICAgICB0aGlzLmp1bXBUaW1lciArPSAxO1xuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZSAtICh0aGlzLmp1bXBUaW1lciAvIDUwKTtcbiAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSAxO1xuICAgICAgaWYgKHRoaXMuaXNMZWZ0KSB7XG4gICAgICAgIHRoaXMuc3ggPSAyMDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN4ID0gNTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIHRoaXMuZ3Jhdml0eUdvKCk7XG4gICAgICB0aGlzLmdldFJlYWR5VG9KdW1wKCk7XG5cbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW5pbWF0ZScpID09PSAndHJ1ZScpIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfTtcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5pbXBvcnQgbWFpbiBmcm9tICcuL3BhZ2VzL21haW4nO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FuaW1hdGUnLCAndHJ1ZScpO1xyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGl2ZXMnLCAzKTtcclxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJykpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5nU2VsZWN0ZWQnLCAnZW4nKTtcclxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3ByaXRlSW1hZ2UnKSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Nwcml0ZUltYWdlJywgJ2ltYWdlcy9zcHJpdGUyLnBuZycpO1xyXG5cclxubWFpbigpO1xyXG5cclxuZXhwb3J0IHsgY2FudmFzLCBjdHggfTtcclxuIiwiY29uc3QgbGFuZyA9IHtcbiAgZW46IHtcbiAgICBzY29yZVR4dDogJ1Njb3JlOicsXG4gICAgY29pbnNUeHQ6ICdDb2luczonLFxuICAgIGxpdmVzVHh0OiAnTGl2ZXM6JyxcbiAgICBiZXN0U2NvcmVUeHQ6ICdCZXN0IHNjb3JlOicsXG4gICAgc3RhcnRHYW1lQnRuOiAnU3RhcnQgR2FtZScsXG4gICAgb3B0aW9uc0J0bjogJ09wdGlvbnMnLFxuICAgIHNlbGVjdExuZzogJ1NlbGVjdCBsYW5ndWFnZTonLFxuICAgIHNlbGVjdFBsYXllcjogJ1NlbGVjdCBwbGF5ZXI6JyxcbiAgICBnYW1lT3ZlcjogJ1lvdSBsb3N0LiBDbGljayB0byBjb250aW51ZS4nLFxuICAgIGhlbHBCdG46ICdIZWxwJyxcbiAgICBoZWxwVHh0MTogJ1lvdXIgbWlzc2lvbiBpcyB0byBjb2xsZWN0IGFsbCB0aGUgY29pbnMuIFRvIGRvIHRoaXMgeW91IG9ubHkgaGF2ZSBhIGNlcnRhaW4gbnVtYmVyICBvZiBsaXZlcy4gWW91IGNhbiBqdW1wLCBtb3ZlIGxlZnQgYW5kIHJpZ2h0IHdpdGhpbiBzY3JlZW4uJyxcbiAgICBoZWxwVHh0MjogJ0tleWJvYXJkIENvbnRyb2w6JyxcbiAgICBoZWxwVHh0MzogJ1csIFNwYWNlLCBeIC0gSlVNUCcsXG4gICAgaGVscFR4dDQ6ICdNLCA+IC0gTU9WRSBSSUdIVCcsXG4gICAgaGVscFR4dDU6ICdOLCA8IC0gTU9WRSBMRUZUJyxcbiAgICBoZWxwVHh0NjogJ0EgLSBNVVNJQyBPTicsXG4gICAgaGVscFR4dDc6ICdRIC0gTVVTSUMgT0ZGJyxcbiAgICBoZWxwVHh0ODogJ0VzYyAtIE1BSU4gTUVOVScsXG4gIH0sXG4gIHJ1OiB7XG4gICAgc2NvcmVUeHQ6ICfQoNC10LfRg9C70YzRgtCw0YI6JyxcbiAgICBjb2luc1R4dDogJ9Cc0L7QvdC10YLRizonLFxuICAgIGxpdmVzVHh0OiAn0JbQuNC30L3QuDonLFxuICAgIGJlc3RTY29yZVR4dDogJ9Cb0YPRh9GI0LjQuSDRgNC10LfRg9C70YzRgtCw0YI6JyxcbiAgICBzdGFydEdhbWVCdG46ICfQndCw0YfQsNGC0Ywg0LjQs9GA0YMnLFxuICAgIG9wdGlvbnNCdG46ICfQndCw0YHRgtGA0L7QudC60LgnLFxuICAgIHNlbGVjdExuZzogJ9CS0YvQsdC10YDQuNGC0LUg0Y/Qt9GL0Lo6JyxcbiAgICBzZWxlY3RQbGF5ZXI6ICfQktGL0LHQtdGA0LjRgtC1INC40LPRgNC+0LrQsDonLFxuICAgIGdhbWVPdmVyOiAn0JLRiyDQv9GA0L7QuNCz0YDQsNC70LguINCa0LvQuNC60L3QuCDRh9GC0L7QsdGLINC/0YDQvtC00L7Qu9C20LjRgtGMLicsXG4gICAgaGVscEJ0bjogJ9Cf0L7QvNC+0YnRjCcsXG4gICAgaGVscFR4dDE6ICfQktCw0YjQsCDQt9Cw0LTQsNGH0LAg0YHQvtCx0YDQsNGC0Ywg0LLRgdC1INC80L7QvdC10YLRiy4g0JTQu9GPINGN0YLQvtCz0L4g0YMg0LLQsNGBINC10YHRgtGMINC+0L/RgNC10LTQtdC70LXQvdC90L7QuSDQutC+0LvQuNGH0LXRgdGC0LLQviDQttC40LfQvdC10LkuINCS0Ysg0LzQvtC20LXRgtC1INC/0YDRi9Cz0LDRgtGMLCDQuNC00YLQuCDQstC70LXQstC+INC4INCy0L/RgNCw0LLQviDQsiDQv9GA0LXQtNC10LvQsNGFINGN0LrRgNCw0L3QsC4nLFxuICAgIGhlbHBUeHQyOiAn0JrQu9Cw0LLQuNGI0Lgg0YPQv9GA0LDQstC70LXQvdC40Y86JyxcbiAgICBoZWxwVHh0MzogJ1csIFNwYWNlLCBeIC0g0J/RgNGL0LbQvtC6JyxcbiAgICBoZWxwVHh0NDogJ00sID4gLSDQmNC00YLQuCDQstC/0YDQsNCy0L4nLFxuICAgIGhlbHBUeHQ1OiAnTiwgPCAtINCY0LTRgtC4INCy0LvQtdCy0L4nLFxuICAgIGhlbHBUeHQ2OiAnQSAtINCS0LrQu9GO0YfQuNGC0Ywg0LzRg9C30YvQutGDJyxcbiAgICBoZWxwVHh0NzogJ1EgLSDQktGL0LrQu9GO0YfQuNGC0Ywg0LzRg9C30YvQutGDJyxcbiAgICBoZWxwVHh0ODogJ0VzYyAtINCT0LvQsNCy0L3QvtC1INC80LXQvdGOJyxcbiAgfSxcbiAgYnI6IHtcbiAgICBzY29yZVR4dDogJ9CS0YvQvdGW0Lo6JyxcbiAgICBjb2luc1R4dDogJ9Cc0LDQvdC10YLRizonLFxuICAgIGxpdmVzVHh0OiAn0JbRi9GG0YbRjzonLFxuICAgIGJlc3RTY29yZVR4dDogJ9Cb0LXQv9GI0Ysg0LLRi9C90ZbQujonLFxuICAgIHN0YXJ0R2FtZUJ0bjogJ9Cf0LDRh9Cw0YLRjCDRltCz0YDRgycsXG4gICAgb3B0aW9uc0J0bjogJ9Ce0L/RhtGL0ZYnLFxuICAgIHNlbGVjdExuZzogJ9CS0YvQsdC10YDRi9GG0LUg0LzQvtCy0YM6JyxcbiAgICBzZWxlY3RQbGF5ZXI6ICfQktGL0LHQtdGA0YvRhtC1INC/0LXRgNGB0LDQvdCw0LbQsDonLFxuICAgIGdhbWVPdmVyOiAn0JLRiyDQv9GA0LDQudCz0YDQsNC70ZYuINCa0LvRltC60L3RliDQutCw0LEg0L/RgNCw0YbRj9Cz0L3Rg9GG0YwuJyxcbiAgICBoZWxwQnRuOiAn0JTQsNC/0LDQvNC+0LPQsCcsXG4gICAgaGVscFR4dDE6ICfQktCw0YjQsCDQt9Cw0LTQsNGH0LAg0YHQsNCx0YDQsNGG0Ywg0YPRgdC1INC80LDQvdC10YLRiy4g0JTQu9GPINCz0Y3RgtCw0LPQsCDRniDQstCw0YEg0ZHRgdGG0Ywg0L/RjdGe0L3QsNC5INC60L7Qu9GM0LrQsNGB0YbRjCDQttGL0YbRhtGP0Z4uINCS0Ysg0LzQvtC20LDRhtC1INGB0LrQsNC60LDRhtGMLCDRltGB0YbRliDQvdCw0LvQtdCy0LAg0ZYg0L3QsNC/0YDQsNCy0LAg0Z4g0LzQtdC20LDRhSDRjdC60YDQsNC90LAuJyxcbiAgICBoZWxwVHh0MjogJ9Ca0LvQsNCy0ZbRiNGLINC60ZbRgNCw0LLQsNC90L3RjzonLFxuICAgIGhlbHBUeHQzOiAnVywgU3BhY2UsIF4gLSDQn9GA0YvQttC+0LonLFxuICAgIGhlbHBUeHQ0OiAnTSwgPiAtIEnRgdGG0ZYg0L3QsNC70LXQstCwJyxcbiAgICBoZWxwVHh0NTogJ04sIDwgLSBJ0YHRhtGWINC90LDQv9GA0LDQstCwJyxcbiAgICBoZWxwVHh0NjogJ0EgLSDQo9C60LvRjtGH0YvRhtGMINC80YPQt9GL0LrRgycsXG4gICAgaGVscFR4dDc6ICdRIC0g0JLRi9C60LvRjtGH0YvRhtGMINC80YPQt9GL0LrRgycsXG4gICAgaGVscFR4dDg6ICdFc2MgLSDQk9Cw0LvQvtGe0L3QsNC1INC80LXQvdGOJyxcbiAgfSxcbn07XG5cbmV4cG9ydCB7IGxhbmcgfTtcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICB0aGlzLmdhbWVTcGVlZCA9IG9wdGlvbnMuZ2FtZVNwZWVkO1xuXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IG9wdGlvbnMuaW1hZ2VTcmM7XG4gIH1cblxuICBVcGRhdGUoKSB7XG4gICAgdGhpcy54ICs9IHRoaXMuZHg7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIHRoaXMueCxcbiAgICAgIGNhbnZhcy5oZWlnaHQgLSA1NSxcbiAgICApO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4uL2xhbmcnO1xyXG5pbXBvcnQgeyBzdGFydCB9IGZyb20gJy4uL3N0YXJ0X2dhbWUnO1xyXG5cclxuY29uc3QgZGVhZCA9IHtcclxuICBzaG93KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FuaW1hdGUnLCAnZmFsc2UnKTtcclxuICAgIGNvbnN0IGxnID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpO1xyXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwYWdlLmNsYXNzTGlzdC5hZGQoJ3ppbmRleCcpO1xyXG4gICAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImhlbHAtdHh0LXdyYXBwZXJcIj5cclxu0JLRiyDQv9C+0YLQtdGA0Y/Qu9C4INC20LjQt9C90YwuXHJcbjxicj7QmtC70LjQutC90Lgg0YfRgtC+0LHRiyDQv9GA0L7QtNC+0LvQttC40YLRjC5cclxuICA8L2Rpdj5cclxuICBgO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHBhZ2UpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW5pbWF0ZScsICd0cnVlJyk7XHJcbiAgICAgIHN0YXJ0KCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGhpZGUoKSB7XHJcbiAgICBjb25zdCBwYWdlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJyk7XHJcbiAgICBwYWdlMS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgZGVhZCB9O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4uL2xhbmcnO1xyXG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuLi9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lT3ZlcigpIHtcclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNhbnZhcyk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FuaW1hdGUnLCAnZmFsc2UnKTtcclxuICBjb25zdCBsZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKTtcclxuICBjb25zdCBwYWdlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXdyYXBwZXInKTtcclxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnLCAnZ2FtZS1vdmVyLWltYWdlJyk7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1vdmVyXCI+XHJcbiAgICAke2xhbmdbbGddLmdhbWVPdmVyfVxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIHBhZ2VXcmFwcGVyLmFwcGVuZENoaWxkKHBhZ2UpO1xyXG4gIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSAnLi4vc3RhcnRfZ2FtZSc7XHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuLi9sYW5nJztcclxuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlbHAoKSB7XHJcbiAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIGNvbnN0IGxnID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpO1xyXG4gIGNvbnN0IHBhZ2VXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2Utd3JhcHBlcicpO1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScsICdwYWdlLWltYWdlJyk7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImhlbHAtdHh0LXdyYXBwZXJcIj5cclxuICAke2xhbmdbbGddLmhlbHBUeHQxfVxyXG4gIDxwPiR7bGFuZ1tsZ10uaGVscFR4dDJ9PC9wPlxyXG4gICR7bGFuZ1tsZ10uaGVscFR4dDN9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDR9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDV9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDZ9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDd9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDh9XHJcbiAgPC9kaXY+XHJcbiAgPGEgY2xhc3M9XCJidG5mbGlwIHN0YXJ0LWhlbHAgc3RhcnRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLnN0YXJ0R2FtZUJ0bn08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+JHtsYW5nW2xnXS5zdGFydEdhbWVCdG59PC9zcGFuPlxyXG4gIDwvYT5cclxuICBcclxuICA8YSBjbGFzcz1cImJ0bmZsaXAgb3B0aW9ucy1oZWxwIG9wdGlvbnNcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLm9wdGlvbnNCdG59PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10ub3B0aW9uc0J0bn08L3NwYW4+XHJcbiAgPC9hPlxyXG4gIGA7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICAgIHBhZ2VXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBjYW52YXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBzdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgcGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbiAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucycpO1xyXG4gIG9wdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBvcHRpb25zKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IHsgc3RhcnQgfSBmcm9tICcuLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IGhlbHAgZnJvbSAnLi9oZWxwJztcclxuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4uL2xhbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbigpIHtcclxuICBjYW52YXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgY29uc3QgbGcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyk7XHJcbiAgY29uc3QgcGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS13cmFwcGVyJyk7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJywgJ3BhZ2UtaW1hZ2UnKTtcclxuICBwYWdlLmlubmVySFRNTCA9IGBcclxuPGEgY2xhc3M9XCJidG5mbGlwIHN0YXJ0LW1haW4gc3RhcnRcIiBocmVmPVwiI1wiPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2Zyb250XCI+JHtsYW5nW2xnXS5zdGFydEdhbWVCdG59PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+JHtsYW5nW2xnXS5zdGFydEdhbWVCdG59PC9zcGFuPlxyXG48L2E+XHJcblxyXG48YSBjbGFzcz1cImJ0bmZsaXAgb3B0aW9ucy1tYWluIG9wdGlvbnNcIiBocmVmPVwiI1wiPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2Zyb250XCI+JHtsYW5nW2xnXS5vcHRpb25zQnRufTwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10ub3B0aW9uc0J0bn08L3NwYW4+XHJcbjwvYT5cclxuXHJcbjxhIGNsYXNzPVwiYnRuZmxpcCBoZWxwLW1haW4gaGVscFwiIGhyZWY9XCIjXCI+ICBcclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPiR7bGFuZ1tsZ10uaGVscEJ0bn08L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj4ke2xhbmdbbGddLmhlbHBCdG59PC9zcGFuPlxyXG48L2E+XHJcbjxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cclxuPHN0cm9uZz5cclxuPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TZXJnUnVkb3ZpY2hcIiB0YXJnZXQ9XCJibGFua1wiPlNlcmdleSBSdWRvdmljaDwvYT5cclxuJm5ic3B8Jm5ic3BcclxuPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jb25zZXJ2YXRpdjAwN1wiIHRhcmdldD1cImJsYW5rXCI+TWFrcyBjb25zZXJ2YXRpdjAwNzwvYT5cclxuPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIj5cclxuPGEgaHJlZj1cImh0dHBzOi8vcnMuc2Nob29sL2pzL1wiIHRhcmdldD1cImJsYW5rXCI+XHJcbjxpbWcgc3JjPVwiaHR0cHM6Ly9ycy5zY2hvb2wvaW1hZ2VzL3JzX3NjaG9vbF9qcy5zdmdcIiBhbHQ9XCJSUyBTY2hvb2xcIiBzdHlsZT1cIndpZHRoOiA1MHB4XCI+PC9hPlxyXG48c3BhbiBjbGFzcz1cImZvb3Rlcl9feWVhclwiPsKpIDIwMjE8L3NwYW4+XHJcbjwvcD5cclxuPC9zdHJvbmc+XHJcbjwvZm9vdGVyPlxyXG4gIGA7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICAgIHBhZ2VXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBjYW52YXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBzdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgcGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbiAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblxyXG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xyXG5cclxuICBjb25zdCBoZWxwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbHAnKTtcclxuICBoZWxwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaGVscCgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvcHRpb25zQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMnKTtcclxuICBvcHRpb25zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgb3B0aW9ucygpO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSAnLi4vc3RhcnRfZ2FtZSc7XHJcbmltcG9ydCBoZWxwIGZyb20gJy4vaGVscCc7XHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuLi9sYW5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wdGlvbnMoKSB7XHJcbiAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIGNvbnN0IGxnID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpO1xyXG4gIGNvbnN0IHBhZ2VXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2Utd3JhcHBlcicpO1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScsICdwYWdlLWltYWdlJyk7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImhlbHAtdHh0LXdyYXBwZXJcIj5cclxuICA8cCBjbGFzcz1cIm1lbnVJdGVtXCIgaWQ9J21lbnVGaWVsZFNpemUnPlxyXG4gIDxsYWJlbD4ke2xhbmdbbGddLnNlbGVjdExuZ308L2xhYmVsPlxyXG4gIDxzZWxlY3QgaWQ9XCJzZWxlY3RMYW5nXCI+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJlblwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj5lbmdsaXNoPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJydVwiPtGA0YPRgdGB0LrQuNC5PC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJiclwiPtCx0LXQu9Cw0YDRg9GB0LrQsNGPPC9vcHRpb24+XHJcbiAgPC9zZWxlY3Q+XHJcbiAgPC9wPlxyXG4gIDxicj48cD4ke2xhbmdbbGddLnNlbGVjdFBsYXllcn08L3A+XHJcbiAgPGJyPlxyXG4gIDxpbWcgc3JjPVwiaW1nL3Nwcml0ZTJfaWNvbi5wbmdcIiBjbGFzcz1cInBsYXllcjJcIiBhbHQ9XCJwbGF5ZXIyXCI+XHJcbiAgPGltZyBzcmM9XCJpbWcvc3ByaXRlMV9pY29uLnBuZ1wiIGNsYXNzPVwicGxheWVyMVwiIGFsdD1cInBsYXllcjFcIj5cclxuICA8L2Rpdj5cclxuICA8YSBjbGFzcz1cImJ0bmZsaXAgc3RhcnQtaGVscCBzdGFydFwiIGhyZWY9XCIjXCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLnN0YXJ0R2FtZUJ0bn08L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj4ke2xhbmdbbGddLnN0YXJ0R2FtZUJ0bn08L3NwYW4+XHJcbjwvYT5cclxuXHJcbjxhIGNsYXNzPVwiYnRuZmxpcCBvcHRpb25zLWhlbHAgaGVscFwiIGhyZWY9XCIjXCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLmhlbHBCdG59PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+JHtsYW5nW2xnXS5oZWxwQnRufTwvc3Bhbj5cclxuPC9hPlxyXG4gIGA7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdExhbmcgPiBvcHRpb25bc2VsZWN0ZWRdJykucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzZWxlY3RMYW5nID4gb3B0aW9uW3ZhbHVlPSR7bGd9XWApLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gICAgcGFnZVdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBwYWdlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIGNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIHN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICAvLyDQstGL0LHQvtGAINGP0LfRi9C60LBcclxuICBwYWdlV3JhcHBlci5hcHBlbmRDaGlsZChwYWdlKTtcclxuICBwYWdlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xyXG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcclxuXHJcbiAgY29uc3QgaGVscEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWxwJyk7XHJcbiAgaGVscEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGhlbHAoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0TGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RMYW5nJyk7XHJcbiAgc2VsZWN0TGFuZy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZ1NlbGVjdGVkJywgc2VsZWN0TGFuZy52YWx1ZSk7XHJcbiAgICBvcHRpb25zKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vINCy0YvQsdC+0YAg0LjQs9GA0L7QutCwXHJcbiAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxJyk7XHJcbiAgY29uc3QgcGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIyJyk7XHJcbiAgY29uc3QgcGxheWVyU2VsZWN0ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3ByaXRlSW1hZ2UnKTtcclxuICBpZiAocGxheWVyU2VsZWN0ZWQgPT09ICdpbWFnZXMvc3ByaXRlMi5wbmcnKSB7XHJcbiAgICBwbGF5ZXIyLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1pY29uLXNlbGVjdGVkJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBsYXllcjEuY2xhc3NMaXN0LmFkZCgncGxheWVyLWljb24tc2VsZWN0ZWQnKTtcclxuICB9XHJcbiAgcGxheWVyMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdTcHJpdGVJbWFnZScsICdpbWFnZXMvc3ByaXRlMS5wbmcnKTtcclxuICAgIHBsYXllcjEuY2xhc3NMaXN0LmFkZCgncGxheWVyLWljb24tc2VsZWN0ZWQnKTtcclxuICAgIHBsYXllcjIuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyLWljb24tc2VsZWN0ZWQnKTtcclxuICAgIG9wdGlvbnMoKTtcclxuICB9KTtcclxuICBwbGF5ZXIyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Nwcml0ZUltYWdlJywgJ2ltYWdlcy9zcHJpdGUyLnBuZycpO1xyXG4gICAgcGxheWVyMi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItaWNvbi1zZWxlY3RlZCcpO1xyXG4gICAgcGxheWVyMS5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXItaWNvbi1zZWxlY3RlZCcpO1xyXG4gICAgb3B0aW9ucygpO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyU291bmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGhpcy51cmwgPSB3aW5kb3cuZ2FtZVN0YXRlLnNvdW5kVXJsO1xyXG4gICAgdGhpcy5zb3VuZFVwID0gbmV3IEF1ZGlvKCdzb3VuZC9qdW1wVXAubXAzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmRVcCk7XHJcbiAgICB0aGlzLnNvdW5kRG93biA9IG5ldyBBdWRpbygnc291bmQvZ3Jhdml0eURvd24ubXAzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmREb3duKTtcclxuICAgIHRoaXMuaXNHcmF2aXR5RG93biA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0p1bXBVcCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAganVtcFVwKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzSnVtcFVwKSB7XHJcbiAgICAgIHRoaXMuc291bmRVcC5wbGF5KCk7XHJcbiAgICAgIHRoaXMuaXNKdW1wVXAgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAganVtcERvd24oKSB7XHJcbiAgICB0aGlzLnNvdW5kVXAucGF1c2UoKTtcclxuICAgIHRoaXMuc291bmRVcC5jdXJyZW50VGltZSA9IDAuMDtcclxuICAgIHRoaXMuaXNKdW1wVXAgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdyYXZpdHlEb3duKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzR3Jhdml0eURvd24pIHtcclxuICAgICAgdGhpcy5zb3VuZERvd24ucGxheSgpO1xyXG4gICAgICB0aGlzLmlzR3Jhdml0eURvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ3Jhdml0eVVwKCkge1xyXG4gICAgdGhpcy5zb3VuZERvd24ucGF1c2UoKTtcclxuICAgIHRoaXMuc291bmREb3duLmN1cnJlbnRUaW1lID0gMC4wO1xyXG4gICAgdGhpcy5pc0dyYXZpdHlEb3duID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuY29uc3QgcGFydGljbGVzT25TY3JlZW4gPSAyNDU7XG5sZXQgdztcbmxldCBoO1xuY29uc3QgcGFydGljbGVzQXJyYXkgPSBbXTtcblxuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xudyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG4gIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpO1xufVxuXG5mdW5jdGlvbiBjbGllbnRSZXNpemUoZXYpIHtcbiAgdyA9IGNhbnZhcy53aWR0aDtcbiAgaCA9IGNhbnZhcy5oZWlnaHQ7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjbGllbnRSZXNpemUpO1xuXG4vLyBjcmVhdGVTbm93Rmxha2VzKCk7XG5mdW5jdGlvbiBjcmVhdGVTbm93Rmxha2VzKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc09uU2NyZWVuOyBpKyspIHtcbiAgICBwYXJ0aWNsZXNBcnJheS5wdXNoKHtcbiAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiB3LFxuICAgICAgeTogTWF0aC5yYW5kb20oKSAqIGgsXG4gICAgICBvcGFjaXR5OiBNYXRoLnJhbmRvbSgpLFxuICAgICAgc3BlZWRYOiByYW5kb20oLTEsIDEpLFxuICAgICAgc3BlZWRZOiByYW5kb20oMSwgMiksXG4gICAgICByYWRpdXM6IHJhbmRvbSgwLjUsIDQuMiksXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhd1Nub3dGbGFrZXMoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLngsXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55LFxuICAgICAgMCxcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLngsXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ucmFkaXVzLFxuICAgICk7XG5cbiAgICAvLyBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMzAsIDE0NCwgMjU1LCAke3BhcnRpY2xlc0FycmF5W2ldLm9wYWNpdHl9KWAgKTtcbiAgICAvLyBncmFkaWVudC5hZGRDb2xvclN0b3AoMC44LCBgcmdiYSgxMDAsIDE0OSwgMjM3LCAke3BhcnRpY2xlc0FycmF5W2ldLm9wYWNpdHl9KWAgKTtcbiAgICAvLyBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoNjUsIDEwNSwgMjI1LCAke3BhcnRpY2xlc0FycmF5W2ldLm9wYWNpdHl9KWAgKTtcblxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyNTUsIDI1NSwgMjU1LCR7cGFydGljbGVzQXJyYXlbaV0ub3BhY2l0eX0pYCk7IC8vIHdoaXRlXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuOCwgYHJnYmEoMjEwLCAyMzYsIDI0Miwke3BhcnRpY2xlc0FycmF5W2ldLm9wYWNpdHl9KWApOyAvLyBibHVpc2hcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoMjM3LCAyNDcsIDI0OSwke3BhcnRpY2xlc0FycmF5W2ldLm9wYWNpdHl9KWApO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSxcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnJhZGl1cyxcbiAgICAgIDAsXG4gICAgICBNYXRoLlBJICogMixcbiAgICAgIGZhbHNlLFxuICAgICk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlU25vd0ZsYWtlcygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHBhcnRpY2xlc0FycmF5W2ldLnggKz0gcGFydGljbGVzQXJyYXlbaV0uc3BlZWRYO1xuICAgIHBhcnRpY2xlc0FycmF5W2ldLnkgKz0gcGFydGljbGVzQXJyYXlbaV0uc3BlZWRZO1xuXG4gICAgaWYgKHBhcnRpY2xlc0FycmF5W2ldLnkgPiBoKSB7XG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54ID0gTWF0aC5yYW5kb20oKSAqIHcgKiAxLjU7XG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55ID0gLTUwO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVTbm93RmFsbCgpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcbiAgZHJhd1Nub3dGbGFrZXMoKTtcbiAgbW92ZVNub3dGbGFrZXMoKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU25vd0ZsYWtlcywgdXBkYXRlU25vd0ZhbGwgfTtcbiIsImltcG9ydCBPYnN0YWNsZSBmcm9tICcuL29ic3RhY2xlJztcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgZ2FtZVNwZWVkLCBvYnN0YWNsZXMgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuXG5mdW5jdGlvbiBTcGF3bk9ic3RhY2xlKCkge1xuICAvLyBsZXQgc2l6ZSA9IFJhbmRvbUludFJhbmdlKDIwLCA3MCk7XG4gIGNvbnN0IHR5cGUgPSBSYW5kb21JbnRSYW5nZSgzLCA0KTtcblxuICBjb25zdCBvYnN0YWNsZSA9IG5ldyBPYnN0YWNsZSh7XG4gICAgeDogY2FudmFzLndpZHRoLFxuICAgIHk6IGNhbnZhcy5oZWlnaHQsXG4gICAgd2lkdGg6IDUwLFxuICAgIGhlaWdodDogNTAsXG4gICAgZ2FtZVNwZWVkLFxuICAgIGltYWdlU3JjOiBgaW1hZ2VzL29ic3RhY2xlJHt0eXBlfS5wbmdgLFxuICB9KTtcblxuICBvYnN0YWNsZXMucHVzaChvYnN0YWNsZSk7XG59XG5cbmZ1bmN0aW9uIFJhbmRvbUludFJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG59XG5cbmV4cG9ydCB7IFNwYXduT2JzdGFjbGUgfTtcbiIsImltcG9ydCBIZXJvIGZyb20gJy4vaGVybyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHsgU3Bhd25PYnN0YWNsZSB9IGZyb20gJy4vc3Bhd25fb2JzdGFjbGUnO1xuaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZVNub3dGbGFrZXMsIHVwZGF0ZVNub3dGYWxsIH0gZnJvbSAnLi9zbm93X2ZsYWtlcyc7XG5pbXBvcnQgR2FtZVNvdW5kIGZyb20gJy4vZ2FtZS1zb3VuZCc7XG5pbXBvcnQgeyBnZXRDb2luLCBjb2luc0NvdW50ZXIgfSBmcm9tICcuL2dldF9jb2luJztcbmltcG9ydCBnZXRDbG91ZHMgZnJvbSAnLi9nZXRfY2xvdWRzJztcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuL2xhbmcnO1xuaW1wb3J0IGdldFBsYXRmb3JtIGZyb20gJy4vZ2V0X3BsYXRmb3JtJztcbmltcG9ydCBtYWluIGZyb20gJy4vcGFnZXMvbWFpbic7XG5pbXBvcnQgeyBkZWFkIH0gZnJvbSAnLi9wYWdlcy9kZWFkJztcbmltcG9ydCBnYW1lT3ZlciBmcm9tICcuL3BhZ2VzL2dhbWUtb3Zlcic7XG5cbi8vIGxldCBsaXZlcztcbmxldCBzY29yZTtcbmxldCBoaWdoU2NvcmU7XG5sZXQgaGlnaENvaW5zO1xubGV0IHNjb3JlVGV4dDtcbmxldCBoaWdodFNjb3JlVGV4dDtcbmxldCBoaWdodENvaW5zVGV4dDtcbmxldCBsaXZlc1RleHQ7XG5sZXQgZ2FtZVNwZWVkO1xubGV0IHBsYXllcjtcbmxldCBvYnN0YWNsZXMgPSBbXTtcbmNvbnN0IGNvaW5zID0gW107XG5cbmNvbnN0IGtleXMgPSB7fTtcbmxldCBjb2luSW1hZ2U7XG5jb25zdCBwbGF5U291bmQgPSBuZXcgR2FtZVNvdW5kKCk7XG5cbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDIwNTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBrZXlzW2UuY29kZV0gPSB0cnVlO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAga2V5c1tlLmNvZGVdID0gZmFsc2U7XG4gIH0pO1xuXG4gIGN0eC5mb250ID0gJzIwcHggc2Fucy1zZXJpZic7XG5cbiAgZ2FtZVNwZWVkID0gMztcbiAgLy8gbGl2ZXMgPSAzO1xuICBzY29yZSA9IDA7XG4gIGhpZ2hTY29yZSA9IDA7XG4gIGhpZ2hDb2lucyA9IDA7XG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoc2NvcmUnKSkge1xuICAgIGhpZ2hTY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoc2NvcmUnKTtcbiAgfVxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hDb2lucycpKSB7XG4gICAgaGlnaENvaW5zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hDb2lucycpO1xuICB9XG5cbiAgY29pbkltYWdlID0gbmV3IEltYWdlKCk7XG4gIGNvaW5JbWFnZS5zcmMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3ByaXRlSW1hZ2UnKTtcblxuICBwbGF5ZXIgPSBuZXcgSGVybyh7XG4gICAgaW1hZ2U6IGNvaW5JbWFnZSxcbiAgICB3aWR0aDogNjAwLFxuICAgIGhlaWdodDogMTAwLFxuICAgIG51bWJlck9mRnJhbWVzOiA2LFxuICAgIHRpY2tzUGVyRnJhbWU6IDQsXG4gICAgeDogNTAsXG4gICAgeTogNTAsXG4gICAgdGVzdDogY2FudmFzLmhlaWdodCxcbiAgfSk7XG5cbiAgcGxheWVyLnN0YXJ0KCk7XG5cbiAgc2NvcmVUZXh0ID0gbmV3IFRleHQoXG4gICAgYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLnNjb3JlVHh0fSAke3Njb3JlfWAsIDI1LCAyNSwgJ2xlZnQnLCAnIzIxMjEyMScsICcyMCcsXG4gICk7XG4gIGxpdmVzVGV4dCA9IG5ldyBUZXh0KFxuICAgIGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5saXZlc1R4dH0gJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGl2ZXMnKX1gLCA1MDAsIDI1LCAncmlnaHQnLCAnIzIxMjEyMScsICcyMCcsXG4gICk7XG4gIGhpZ2h0U2NvcmVUZXh0ID0gbmV3IFRleHQoXG4gICAgYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLmJlc3RTY29yZVR4dH0gJHtoaWdoU2NvcmV9YCwgY2FudmFzLndpZHRoIC0gMTUwLCAyNSwgJ3JpZ2h0JywgJyMyMTIxMjEnLCAnMjAnLFxuICApO1xuICBoaWdodENvaW5zVGV4dCA9IG5ldyBUZXh0KFxuICAgIGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5jb2luc1R4dH0gJHtoaWdoQ29pbnN9YCwgY2FudmFzLndpZHRoIC0gMjUsIDI1LCAncmlnaHQnLCAnIzIxMjEyMScsICcyMCcsXG4gICk7XG4gIGNyZWF0ZVNub3dGbGFrZXMoKTtcbiAgLy8gcGxheVNvdW5kLnBsYXlGb24oKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKFVwZGF0ZSk7XG59XG5cbmNvbnN0IGluaXRpYWxTcGF3blRpbWVyID0gMjAwO1xubGV0IHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcblxuZnVuY3Rpb24gVXBkYXRlKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FuaW1hdGUnKSA9PT0gJ3RydWUnKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoVXBkYXRlKTtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIC8vINCy0YvQutC70Y7Rh9C40YLRjCDRhNC+0L3QvtCy0YPRjiDQvNGD0LfRi9C60YNcbiAgaWYgKGtleXMuS2V5USkge1xuICAgIHBsYXlTb3VuZC5zdG9wRm9uKCk7XG4gIH1cblxuICAvLyDQstC60LvRjtGH0LjRgtGMINGE0L7QvdC+0LLRg9GOINC80YPQt9GL0LrRg1xuICBpZiAoa2V5cy5LZXlBKSB7XG4gICAgcGxheVNvdW5kLnBsYXlGb24oKTtcbiAgfVxuXG4gIC8vIHNwYXduIG9ic3RhY2xlc1xuICBzcGF3blRpbWVyIC09IDE7XG4gIGlmIChzcGF3blRpbWVyIDw9IDApIHtcbiAgICBTcGF3bk9ic3RhY2xlKCk7XG4gICAgc3Bhd25UaW1lciA9IGluaXRpYWxTcGF3blRpbWVyIC0gZ2FtZVNwZWVkICogODtcblxuICAgIGlmIChzcGF3blRpbWVyIDwgNjApIHtcbiAgICAgIHNwYXduVGltZXIgPSA2MDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVTbm93RmFsbCgpO1xuXG4gIC8vIHNwYXduIGVuZW1pZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnN0YWNsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBvID0gb2JzdGFjbGVzW2ldO1xuXG4gICAgaWYgKG8ueCArIG8ud2lkdGggPCAwKSB7XG4gICAgICBvYnN0YWNsZXMuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIC8vINC/0LXRgNC10LfQsNCz0YDRg9C30LrQsCDQuNCz0YDRiyDQv9GA0Lgg0YHRgtC+0LvQutC90L7QstC10L3QuNC4XG4gICAgaWYgKFxuICAgICAgcGxheWVyLmR4IDwgby54ICsgby53aWR0aFxuICAgICAgJiYgcGxheWVyLmR4ICsgKHBsYXllci53aWR0aCAvIDEwKSAtIDEwID4gby54XG4gICAgICAmJiBwbGF5ZXIueSA8IG8ueSArIG8uaGVpZ2h0XG4gICAgICAmJiBwbGF5ZXIueSArIHBsYXllci5oZWlnaHQgPj0gby55XG4gICAgKSB7XG4gICAgICBwbGF5U291bmQucGxheURlYWQoKTtcbiAgICAgIG9ic3RhY2xlcyA9IFtdO1xuICAgICAgZ2FtZVNwZWVkID0gMztcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXZlcycsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXZlcycpIC0gMSk7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpdmVzJykgPT0gMCkge1xuICAgICAgICBnYW1lT3ZlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZGVhZC5zaG93KCk7XG4gICAgICB9XG4gICAgICBsaXZlc1RleHQudCA9IGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5saXZlc1R4dH0gJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGl2ZXMnKX1gO1xuICAgICAgc2NvcmUgPSAwO1xuICAgICAgcGxheWVyLmR4ID0gMDtcbiAgICAgIHBsYXllci55ID0gMDtcbiAgICAgIGNvaW5zQ291bnRlci5jb3VudGVyID0gMDtcbiAgICAgIHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaHNjb3JlJywgaGlnaFNjb3JlKTtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaENvaW5zJywgaGlnaENvaW5zKTtcbiAgICB9XG4gICAgby5VcGRhdGUoKTtcbiAgfVxuXG4gIHNjb3JlICs9IDE7XG4gIHNjb3JlVGV4dC50ID0gYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLnNjb3JlVHh0fSAke3Njb3JlfWA7XG5cbiAgc2NvcmVUZXh0LkRyYXcoKTtcblxuICBpZiAoc2NvcmUgPiBoaWdoU2NvcmUpIHtcbiAgICBoaWdoU2NvcmUgPSBzY29yZTtcbiAgICBoaWdodFNjb3JlVGV4dC50ID0gYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLmJlc3RTY29yZVR4dH0gJHtoaWdoU2NvcmV9YDtcbiAgfVxuXG4gIGlmIChjb2luc0NvdW50ZXIuY291bnRlciA+IGhpZ2hDb2lucykge1xuICAgIGhpZ2hDb2lucyA9IGNvaW5zQ291bnRlci5jb3VudGVyO1xuICAgIGhpZ2h0Q29pbnNUZXh0LnQgPSBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0uY29pbnNUeHR9ICR7aGlnaENvaW5zfWA7XG4gIH1cblxuICBnYW1lU3BlZWQgKz0gMC4wMDM7XG4gIGhpZ2h0U2NvcmVUZXh0LkRyYXcoKTtcbiAgaGlnaHRDb2luc1RleHQuRHJhdygpO1xuICBsaXZlc1RleHQuRHJhdygpO1xuXG4gIC8vIHNwYXduIHBsYXRmb3JtXG4gIGdldFBsYXRmb3JtKCk7XG5cbiAgLy8gc3Bhd24gY29pblxuICBnZXRDb2luKCk7XG5cbiAgLy8gc3Bhd24gY2xvdWRzXG4gIGdldENsb3VkcygpO1xufVxuXG5leHBvcnQge1xuICBzdGFydCwgVXBkYXRlLCBnYW1lU3BlZWQsIG9ic3RhY2xlcywga2V5cywgc2NvcmUsIHBsYXllciwgY29pbnMsXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGN0eCB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCB7XHJcbiAgY29uc3RydWN0b3IodCwgeCwgeSwgYSwgYywgcykge1xyXG4gICAgdGhpcy50ID0gdDtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5hID0gYTtcclxuICAgIHRoaXMuYyA9IGM7XHJcbiAgICB0aGlzLnMgPSBzO1xyXG4gIH1cclxuXHJcbiAgRHJhdygpIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmM7XHJcbiAgICBjdHguZm9udCA9IGAke3RoaXMuc31weCBzYW5zLXNlcmlmYDtcclxuICAgIGN0eC50ZXh0QWxpZ24gPSB0aGlzLmE7XHJcbiAgICBjdHguZmlsbFRleHQodGhpcy50LCB0aGlzLngsIHRoaXMueSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
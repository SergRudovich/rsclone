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
localStorage.setItem('lives', 2);
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
  page.innerHTML = "\n    <div class=\"help-txt-wrapper\">\n    \u0412\u044B \u043F\u0440\u043E\u0438\u0433\u0440\u0430\u043B\u0438. \u041A\u043B\u0438\u043A\u043D\u0438 \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C.\n    </div>\n    ";
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
  page.innerHTML = "\n<a class=\"btnflip start-main start\" href=\"#\">\n  <span class=\"btnflip-item btnflip__front\">".concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].startGameBtn, "</span>\n  <span class=\"btnflip-item btnflip__center\"></span>\n  <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].startGameBtn, "</span>\n</a>\n\n<a class=\"btnflip options-main options\" href=\"#\">\n  <span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].optionsBtn, "</span>\n  <span class=\"btnflip-item btnflip__center\"></span>\n  <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].optionsBtn, "</span>\n</a>\n\n<a class=\"btnflip help-main help\" href=\"#\">  \n  <span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].helpBtn, "</span>\n  <span class=\"btnflip-item btnflip__center\"></span>\n  <span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[lg].helpBtn, "</span>\n</a>\n\n  ");

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
var scoreText;
var hightScoreText;
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

  if (localStorage.getItem('highscore')) {
    highScore = localStorage.getItem('highscore');
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
  hightScoreText = new _text__WEBPACK_IMPORTED_MODULE_1__.default("".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].bestScoreTxt, " ").concat(highScore), _index__WEBPACK_IMPORTED_MODULE_3__.canvas.width - 25, 25, 'right', '#212121', '20');
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
      } else {
        _pages_dead__WEBPACK_IMPORTED_MODULE_11__.dead.show();
      }

      livesText.t = "".concat(_lang__WEBPACK_IMPORTED_MODULE_8__.lang[localStorage.getItem('langSelected')].livesTxt, " ").concat(localStorage.getItem('lives'));
      score = 0;
      player.dx = 0;
      player.y = 0;
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
  hightScoreText.Draw();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL1BsYXRmb3JtLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvY2xvdWQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9jb2luLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvZ2FtZS1zb3VuZC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dldF9jbG91ZHMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9nZXRfY29pbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dldF9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dldF9yYW5kb21faW50LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvaGVyby5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvbGFuZy5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL29ic3RhY2xlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGFnZXMvZGVhZC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3BhZ2VzL2dhbWUtb3Zlci5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3BhZ2VzL2hlbHAuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9wYWdlcy9tYWluLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGFnZXMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3BsYXllci1zb3VuZC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3Nub3dfZmxha2VzLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvc3Bhd25fb2JzdGFjbGUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9zdGFydF9nYW1lLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvdGV4dC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiUGxhdGZvcm0iLCJvcHRpb25zIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImZsaWdodEFsdGl0dWRlIiwiZ2FtZVNwZWVkIiwiZHgiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiaW1hZ2VTcmMiLCJyZW5kZXIiLCJjdHgiLCJjYW52YXMiLCJDbG91ZCIsInN4Iiwic3kiLCJzV2lkdGgiLCJzSGVpZ2h0IiwiZHkiLCJkV2lkdGgiLCJkSGVpZ2h0IiwiQ29pbiIsImNvbnNvbGUiLCJsb2ciLCJ0aWNrc1BlckZyYW1lIiwibnVtYmVyT2ZGcmFtZXMiLCJmcmFtZUluZGV4IiwidGlja0NvdW50IiwiYXVkaW9PYmoiLCJBdWRpbyIsInBsYXkiLCJ1cGRhdGUiLCJHYW1lU291bmQiLCJmb25Tb3VuZCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidm9sdW1lIiwiZGVhZFNvdW5kIiwibG9vcCIsInBhdXNlIiwiY2xvdWRzU2V0IiwiY2xvdWQiLCJjbG91ZHMiLCJyYW5kb20iLCJnZXRDbG91ZHMiLCJzY29yZSIsImdldFJhbmRvbUludCIsInB1c2giLCJtYXAiLCJjb2luIiwiY29pbnMiLCJjb2luc1RleHQiLCJjb2luc0NvdW50ZXIiLCJjb3VudGVyIiwiY29pblkiLCJyYW5kVGltZSIsInJhbmRZIiwiZ2V0Q29pbiIsIlRleHQiLCJsYW5nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvaW5zVHh0IiwiRHJhdyIsImxlbmd0aCIsImZvckVhY2giLCJzdGFydCIsInBsYXllciIsInBsYXlDb2luU291bmQiLCJwbGF0Zm9ybSIsInBsYXRmb3JtUmFuZFRpbWUiLCJwbGF0Zm9ybXMiLCJwbGF0Zm9ybXNPcHRpb25zIiwiZ2V0UGxhdGZvcm0iLCJ0eXBlIiwiZmxhZyIsIm1pbiIsIm1heCIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJIZXJvIiwianVtcEZvcmNlIiwiZ3JvdW5kZWQiLCJqdW1wVGltZXIiLCJncmF2aXR5IiwiaXNMZWZ0IiwidGVzdCIsInNvdW5kIiwiUGxheWVyU291bmQiLCJrZXlzIiwianVtcFVwIiwiSnVtcCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwianVtcERvd24iLCJncmF2aXR5R28iLCJnZXRSZWFkeVRvSnVtcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9ubG9hZCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0Iiwic2V0SXRlbSIsIm1haW4iLCJlbiIsInNjb3JlVHh0IiwibGl2ZXNUeHQiLCJiZXN0U2NvcmVUeHQiLCJzdGFydEdhbWVCdG4iLCJvcHRpb25zQnRuIiwic2VsZWN0TG5nIiwic2VsZWN0UGxheWVyIiwiaGVscEJ0biIsImhlbHBUeHQxIiwiaGVscFR4dDIiLCJoZWxwVHh0MyIsImhlbHBUeHQ0IiwiaGVscFR4dDUiLCJoZWxwVHh0NiIsImhlbHBUeHQ3IiwiaGVscFR4dDgiLCJydSIsImJyIiwiT2JzdGFjbGUiLCJkZWFkIiwic2hvdyIsImxnIiwicGFnZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2hpbGQiLCJoaWRlIiwicGFnZTEiLCJnYW1lT3ZlciIsInBhZ2VXcmFwcGVyIiwicmVtb3ZlIiwiaGVscCIsInN0YXJ0R2FtZSIsInN0YXJ0QnRuIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwic2VsZWN0TGFuZyIsInZhbHVlIiwicGxheWVyMSIsInBsYXllcjIiLCJwbGF5ZXJTZWxlY3RlZCIsInNvdW5kVXAiLCJzb3VuZERvd24iLCJpc0dyYXZpdHlEb3duIiwiaXNKdW1wVXAiLCJjdXJyZW50VGltZSIsInBhcnRpY2xlc09uU2NyZWVuIiwidyIsImgiLCJwYXJ0aWNsZXNBcnJheSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNsaWVudFJlc2l6ZSIsImV2IiwiY3JlYXRlU25vd0ZsYWtlcyIsImkiLCJvcGFjaXR5Iiwic3BlZWRYIiwic3BlZWRZIiwicmFkaXVzIiwiZHJhd1Nub3dGbGFrZXMiLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwibW92ZVNub3dGbGFrZXMiLCJ1cGRhdGVTbm93RmFsbCIsImNsZWFyUmVjdCIsIlNwYXduT2JzdGFjbGUiLCJSYW5kb21JbnRSYW5nZSIsIm9ic3RhY2xlIiwib2JzdGFjbGVzIiwicm91bmQiLCJoaWdoU2NvcmUiLCJzY29yZVRleHQiLCJoaWdodFNjb3JlVGV4dCIsImxpdmVzVGV4dCIsImNvaW5JbWFnZSIsInBsYXlTb3VuZCIsImUiLCJjb2RlIiwiVXBkYXRlIiwiaW5pdGlhbFNwYXduVGltZXIiLCJzcGF3blRpbWVyIiwiS2V5USIsInN0b3BGb24iLCJLZXlBIiwicGxheUZvbiIsIm8iLCJzcGxpY2UiLCJwbGF5RGVhZCIsInQiLCJhIiwiYyIsInMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVxQkEsUTtBQUNuQixvQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQyxDQUFMLEdBQVNELE9BQU8sQ0FBQ0MsQ0FBakI7QUFDQSxTQUFLQyxDQUFMLEdBQVNGLE9BQU8sQ0FBQ0UsQ0FBakI7QUFDQSxTQUFLQyxLQUFMLEdBQWFILE9BQU8sQ0FBQ0csS0FBckI7QUFDQSxTQUFLQyxNQUFMLEdBQWNKLE9BQU8sQ0FBQ0ksTUFBdEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCTCxPQUFPLENBQUNLLGNBQTlCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQk4sT0FBTyxDQUFDTSxTQUF6QjtBQUVBLFNBQUtDLEVBQUwsR0FBVSxDQUFDLEtBQUtELFNBQWhCO0FBRUEsU0FBS0UsS0FBTCxHQUFhLElBQUlDLEtBQUosRUFBYjtBQUNBLFNBQUtELEtBQUwsQ0FBV0UsR0FBWCxHQUFpQlYsT0FBTyxDQUFDVyxRQUF6QjtBQUNEOzs7OzZCQUVRO0FBQ1AsV0FBS1YsQ0FBTCxJQUFVLEtBQUtNLEVBQWY7QUFDQSxXQUFLSyxNQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNQQyx1REFBQSxDQUNFLEtBQUtMLEtBRFAsRUFFRSxLQUFLUCxDQUZQLEVBR0VhLGlEQUFBLEdBQWdCLEtBQUtULGNBSHZCO0FBS0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Qkg7QUFDQTs7SUFFcUJVLEs7QUFDbkIsaUJBQVlmLE9BQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBS0MsQ0FBTCxHQUFTYSxtREFBVDtBQUNBLFNBQUtFLEVBQUwsR0FBVWhCLE9BQU8sQ0FBQ2dCLEVBQWxCO0FBQ0EsU0FBS0MsRUFBTCxHQUFVakIsT0FBTyxDQUFDaUIsRUFBbEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNsQixPQUFPLENBQUNrQixNQUF0QjtBQUNBLFNBQUtDLE9BQUwsR0FBZW5CLE9BQU8sQ0FBQ21CLE9BQXZCO0FBQ0EsU0FBS0MsRUFBTCxHQUFVcEIsT0FBTyxDQUFDb0IsRUFBbEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNyQixPQUFPLENBQUNrQixNQUF0QjtBQUNBLFNBQUtJLE9BQUwsR0FBZXRCLE9BQU8sQ0FBQ21CLE9BQXZCO0FBRUEsU0FBS1osRUFBTCxHQUFVLENBQUNELGtEQUFELEdBQWFBLGtEQUF2QjtBQUVBLFNBQUtFLEtBQUwsR0FBYSxJQUFJQyxLQUFKLEVBQWI7QUFDQSxTQUFLRCxLQUFMLENBQVdFLEdBQVgsR0FBaUJWLE9BQU8sQ0FBQ1UsR0FBekI7QUFDRDs7Ozs2QkFFUTtBQUNQLFdBQUtULENBQUwsSUFBVSxLQUFLTSxFQUFmO0FBQ0EsV0FBS0ssTUFBTDtBQUNEOzs7NkJBRVE7QUFDUEMsMERBQUEsQ0FDRSxLQUFLTCxLQURQLEVBRUUsS0FBS1EsRUFGUCxFQUdFLEtBQUtDLEVBSFAsRUFJRSxLQUFLQyxNQUpQLEVBS0UsS0FBS0MsT0FMUCxFQU1FLEtBQUtsQixDQU5QLEVBT0UsS0FBS21CLEVBUFAsRUFRRSxLQUFLQyxNQVJQLEVBU0UsS0FBS0MsT0FUUDtBQVdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0g7O0lBRXFCQyxJO0FBQ25CLGdCQUFZdkIsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQyxDQUFMLEdBQVNELE9BQU8sQ0FBQ0MsQ0FBakI7QUFDQSxTQUFLQyxDQUFMLEdBQVNGLE9BQU8sQ0FBQ0UsQ0FBakI7QUFDQSxTQUFLQyxLQUFMLEdBQWFILE9BQU8sQ0FBQ0csS0FBckI7QUFFQXFCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUt0QixLQUFqQjtBQUVBLFNBQUtDLE1BQUwsR0FBY0osT0FBTyxDQUFDSSxNQUF0QjtBQUVBLFNBQUtzQixhQUFMLEdBQXFCMUIsT0FBTyxDQUFDMEIsYUFBUixJQUF5QixDQUE5QztBQUNBLFNBQUtDLGNBQUwsR0FBc0IzQixPQUFPLENBQUMyQixjQUFSLElBQTBCLENBQWhEO0FBRUEsU0FBS3JCLFNBQUwsR0FBaUJOLE9BQU8sQ0FBQ00sU0FBekI7QUFFQSxTQUFLc0IsVUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFFQSxTQUFLdEIsRUFBTCxHQUFVLENBQUMsS0FBS0QsU0FBaEI7QUFFQSxTQUFLRSxLQUFMLEdBQWEsSUFBSUMsS0FBSixFQUFiO0FBQ0EsU0FBS0QsS0FBTCxDQUFXRSxHQUFYLEdBQWlCLG1CQUFqQjtBQUVBLFNBQUtvQixRQUFMLEdBQWdCLElBQUlDLEtBQUosQ0FBVSxtQkFBVixDQUFoQjtBQUNEOzs7OzZCQUVRO0FBQ1AsV0FBSzlCLENBQUwsSUFBVSxLQUFLTSxFQUFmO0FBRUEsV0FBS3NCLFNBQUw7O0FBRUEsVUFBSSxLQUFLQSxTQUFMLEdBQWlCLEtBQUtILGFBQTFCLEVBQXlDO0FBQ3ZDLGFBQUtHLFNBQUwsR0FBaUIsQ0FBakI7O0FBQ0EsWUFBSSxLQUFLRCxVQUFMLEdBQWtCLEtBQUtELGNBQUwsR0FBc0IsQ0FBNUMsRUFBK0M7QUFDN0MsZUFBS0MsVUFBTCxJQUFtQixDQUFuQjtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtBLFVBQUwsR0FBa0IsQ0FBbEI7QUFDRDtBQUNGO0FBQ0Y7Ozs2QkFFUTtBQUNQZix1REFBQSxDQUNFLEtBQUtMLEtBRFAsRUFFRyxLQUFLb0IsVUFBTCxHQUFrQixLQUFLekIsS0FBeEIsR0FBaUMsS0FBS3dCLGNBRnhDLEVBR0UsQ0FIRixFQUlFLEtBQUt4QixLQUFMLEdBQWEsS0FBS3dCLGNBSnBCLEVBS0UsS0FBS3ZCLE1BTFAsRUFNRSxLQUFLSCxDQU5QLEVBT0UsS0FBS0MsQ0FQUCxFQVFFLEtBQUtDLEtBQUwsR0FBYSxLQUFLd0IsY0FScEIsRUFTRSxLQUFLdkIsTUFUUDtBQVdEOzs7b0NBRWU7QUFDZCxXQUFLMEIsUUFBTCxDQUFjRSxJQUFkO0FBQ0Q7Ozs0QkFFTztBQUNOLFdBQUtDLE1BQUw7QUFDQSxXQUFLckIsTUFBTDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFSDtJQUVxQnNCLFM7QUFDbkIsdUJBQWM7QUFBQTs7QUFDWjtBQUNBO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixJQUFJSixLQUFKLENBQVUsZ0JBQVYsQ0FBaEI7QUFDQUssWUFBUSxDQUFDQyxJQUFULENBQWNDLFdBQWQsQ0FBMEIsS0FBS0gsUUFBL0I7QUFDQSxTQUFLQSxRQUFMLENBQWNJLE1BQWQsR0FBdUIsR0FBdkI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlULEtBQUosQ0FBVSxnQkFBVixDQUFqQjtBQUNBSyxZQUFRLENBQUNDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQixLQUFLRSxTQUEvQjtBQUNEOzs7OzhCQUVTO0FBQ1IsV0FBS0wsUUFBTCxDQUFjTSxJQUFkLEdBQXFCLElBQXJCO0FBQ0EsV0FBS04sUUFBTCxDQUFjSCxJQUFkO0FBQ0Q7Ozs4QkFFUztBQUNSLFdBQUtHLFFBQUwsQ0FBY08sS0FBZDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLRixTQUFMLENBQWVSLElBQWY7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Qkg7QUFDQTtBQUNBO0FBRUEsSUFBTVcsU0FBUyxHQUFHLENBQ2hCO0FBQ0VqQyxLQUFHLEVBQUUsbUJBRFA7QUFFRU0sSUFBRSxFQUFFLENBRk47QUFHRUMsSUFBRSxFQUFFLENBSE47QUFJRUMsUUFBTSxFQUFFLEdBSlY7QUFLRUMsU0FBTyxFQUFFLEdBTFg7QUFNRUMsSUFBRSxFQUFFLEdBTk47QUFPRUMsUUFBTSxFQUFFLEdBUFY7QUFRRUMsU0FBTyxFQUFFO0FBUlgsQ0FEZ0IsRUFXaEI7QUFDRVosS0FBRyxFQUFFLG1CQURQO0FBRUVNLElBQUUsRUFBRSxHQUZOO0FBR0VDLElBQUUsRUFBRSxDQUhOO0FBSUVDLFFBQU0sRUFBRSxHQUpWO0FBS0VDLFNBQU8sRUFBRSxHQUxYO0FBTUVDLElBQUUsRUFBRSxHQU5OO0FBT0VDLFFBQU0sRUFBRSxHQVBWO0FBUUVDLFNBQU8sRUFBRTtBQVJYLENBWGdCLENBQWxCO0FBdUJBLElBQUlzQixLQUFKO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFDQSxJQUFJQyxNQUFKO0FBRWUsU0FBU0MsU0FBVCxHQUFxQjtBQUNsQyxNQUFJQyw4Q0FBSyxHQUFHLEdBQVIsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckJGLFVBQU0sR0FBR0gsU0FBUyxDQUFDTSx3REFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWIsQ0FBbEI7QUFDQUwsU0FBSyxHQUFHLElBQUk3QiwyQ0FBSixDQUFVK0IsTUFBVixDQUFSO0FBRUFELFVBQU0sQ0FBQ0ssSUFBUCxDQUFZTixLQUFaO0FBQ0Q7O0FBRURDLFFBQU0sQ0FBQ00sR0FBUCxDQUFXLFVBQUNQLEtBQUQsRUFBVztBQUNwQkEsU0FBSyxDQUFDWCxNQUFOO0FBQ0QsR0FGRDtBQUdELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFJbUIsSUFBSjtBQUNBLElBQU1DLEtBQUssR0FBRyxFQUFkO0FBRUEsSUFBSUMsU0FBSixDLENBQ0E7QUFDQTs7QUFDTyxJQUFNQyxZQUFZLEdBQUc7QUFDMUJDLFNBQU8sRUFBRTtBQURpQixDQUFyQjtBQUlQLElBQUlDLEtBQUo7QUFDQSxJQUFJQyxRQUFKO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRXpELEdBQUMsRUFBRTtBQURMLENBRFksRUFJWjtBQUNFQSxHQUFDLEVBQUU7QUFETCxDQUpZLEVBT1o7QUFDRUEsR0FBQyxFQUFFO0FBREwsQ0FQWSxDQUFkOztBQVlBLFNBQVMwRCxPQUFULEdBQW1CO0FBQ2pCTixXQUFTLEdBQUcsSUFBSU8sMENBQUosV0FDUEMsdUNBQUksQ0FBQ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGNBQXJCLENBQUQsQ0FBSixDQUEyQ0MsUUFEcEMsY0FDZ0RWLFlBQVksQ0FBQ0MsT0FEN0QsR0FDd0UsR0FEeEUsRUFDNkUsRUFEN0UsRUFDaUYsT0FEakYsRUFDMEYsU0FEMUYsRUFDcUcsSUFEckcsQ0FBWjtBQUlBRixXQUFTLENBQUNZLElBQVY7O0FBRUEsTUFBSWxCLDhDQUFLLEdBQUcsR0FBUixLQUFnQixDQUFwQixFQUF1QjtBQUNyQlUsWUFBUSxHQUFHVCx3REFBWSxDQUFDLEVBQUQsRUFBSyxHQUFMLENBQXZCO0FBQ0FTLFlBQVEsSUFBSSxHQUFaO0FBQ0FELFNBQUssR0FBR0UsS0FBSyxDQUFDVix3REFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWIsQ0FBYjtBQUNEOztBQUVELE1BQUlELDhDQUFLLEdBQUdVLFFBQVIsS0FBcUIsQ0FBekIsRUFBNEI7QUFDMUJOLFFBQUksR0FBRyxJQUFJN0IsMENBQUosQ0FBUztBQUNkdEIsT0FBQyxFQUFFYSxnREFEVztBQUVkWixPQUFDLEVBQUV1RCxLQUFLLENBQUN2RCxDQUZLO0FBR2RDLFdBQUssRUFBRSxHQUhPO0FBSWRDLFlBQU0sRUFBRSxFQUpNO0FBS2R1QixvQkFBYyxFQUFFLENBTEY7QUFNZEQsbUJBQWEsRUFBRSxDQU5EO0FBT2RwQixlQUFTLEVBQVRBLGtEQUFTQTtBQVBLLEtBQVQsQ0FBUDtBQVVBK0MsU0FBSyxDQUFDSCxJQUFOLENBQVdFLElBQVg7QUFDRDs7QUFFRCxNQUFJQyxLQUFLLENBQUNjLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUNwQmQsU0FBSyxDQUFDZSxPQUFOLENBQWMsVUFBQ2hCLElBQUQsRUFBVTtBQUN0QkEsVUFBSSxDQUFDaUIsS0FBTDs7QUFFQSxVQUNFQyxrREFBQSxHQUFZbEIsSUFBSSxDQUFDbkQsQ0FBTCxHQUFVbUQsSUFBSSxDQUFDakQsS0FBTCxHQUFhLENBQW5DLElBQ0dtRSxrREFBQSxHQUFhQSxxREFBQSxHQUFlLEVBQTVCLEdBQWtDLEVBQWxDLEdBQXVDbEIsSUFBSSxDQUFDbkQsQ0FEL0MsSUFFR3FFLGlEQUFBLEdBQVdsQixJQUFJLENBQUNsRCxDQUFMLEdBQVNrRCxJQUFJLENBQUNoRCxNQUY1QixJQUdHa0UsaURBQUEsR0FBV0Esc0RBQVgsSUFBNEJsQixJQUFJLENBQUNsRCxDQUp0QyxFQUtFO0FBQ0FrRCxZQUFJLENBQUNsRCxDQUFMLEdBQVMsS0FBVDtBQUNBa0QsWUFBSSxDQUFDbUIsYUFBTDtBQUNBaEIsb0JBQVksQ0FBQ0MsT0FBYixJQUF3QixDQUF4QjtBQUNEOztBQUVELFVBQUlKLElBQUksQ0FBQ25ELENBQUwsR0FBUyxDQUFDLEVBQWQsRUFBa0I7QUFDaEJtRCxZQUFJLENBQUNsRCxDQUFMLEdBQVMsS0FBVDtBQUNEO0FBQ0YsS0FqQkQ7QUFrQkQ7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUQ7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJc0UsUUFBSjtBQUVBLElBQUlkLFFBQUo7QUFDQSxJQUFNZSxnQkFBZ0IsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixDQUF6QjtBQUVBLElBQU1DLFNBQVMsR0FBRyxFQUFsQjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLENBQ3ZCO0FBQ0VqRSxLQUFHLEVBQUUsdUJBRFA7QUFFRVAsT0FBSyxFQUFFLEdBRlQ7QUFHRUMsUUFBTSxFQUFFLEdBSFY7QUFJRUMsZ0JBQWMsRUFBRTtBQUpsQixDQUR1QixFQU92QjtBQUNFSyxLQUFHLEVBQUUsdUJBRFA7QUFFRVAsT0FBSyxFQUFFLEdBRlQ7QUFHRUMsUUFBTSxFQUFFLEdBSFY7QUFJRUMsZ0JBQWMsRUFBRTtBQUpsQixDQVB1QixDQUF6QjtBQWVlLFNBQVN1RSxXQUFULEdBQXVCO0FBQ3BDLE1BQUk1Qiw4Q0FBSyxHQUFHLEdBQVIsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckJVLFlBQVEsR0FBR2UsZ0JBQWdCLENBQUN4Qix3REFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWIsQ0FBM0I7QUFDRDs7QUFFRCxNQUFJRCw4Q0FBSyxHQUFHVSxRQUFSLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCLFFBQUltQixJQUFJLEdBQUc1Qix3REFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQXZCO0FBQ0E0QixRQUFJLEdBQUdGLGdCQUFnQixDQUFDRSxJQUFELENBQXZCO0FBRUFMLFlBQVEsR0FBRyxJQUFJekUsOENBQUosQ0FBYTtBQUN0QkUsT0FBQyxFQUFFYSxnREFEbUI7QUFFdEJaLE9BQUMsRUFBRVksaURBRm1CO0FBR3RCVCxvQkFBYyxFQUFFd0UsSUFBSSxDQUFDeEUsY0FIQztBQUl0QkYsV0FBSyxFQUFFMEUsSUFBSSxDQUFDMUUsS0FKVTtBQUt0QkMsWUFBTSxFQUFFeUUsSUFBSSxDQUFDekUsTUFMUztBQU10QkUsZUFBUyxFQUFUQSxrREFOc0I7QUFPdEJLLGNBQVEsRUFBRWtFLElBQUksQ0FBQ25FO0FBUE8sS0FBYixDQUFYO0FBVUFnRSxhQUFTLENBQUN4QixJQUFWLENBQWVzQixRQUFmO0FBQ0Q7O0FBRUQsTUFBSU0sSUFBSSxHQUFHLEtBQVg7O0FBdEJvQyw2Q0F3QmJKLFNBeEJhO0FBQUE7O0FBQUE7QUF3QnBDLHdEQUFrQztBQUFBLFVBQXZCRixTQUF1Qjs7QUFDaENBLGVBQVEsQ0FBQ3ZDLE1BQVQ7O0FBRUEsVUFDR3FDLGtEQUFBLEdBQVlFLFNBQVEsQ0FBQ3ZFLENBQXJCLElBQTBCcUUsa0RBQUEsR0FBWUUsU0FBUSxDQUFDdkUsQ0FBVCxHQUFhdUUsU0FBUSxDQUFDckUsS0FBdEIsR0FBOEIsRUFBckUsSUFDR21FLGlEQUFBLEdBQVd4RCxpREFBQSxHQUFnQjBELFNBQVEsQ0FBQ25FLGNBRnpDLEVBR0U7QUFDQWlFLDREQUFBLEdBQWN4RCxpREFBQSxHQUFnQjBELFNBQVEsQ0FBQ25FLGNBQXpCLEdBQTBDLENBQXhEO0FBQ0F5RSxZQUFJLEdBQUcsSUFBUDtBQUNELE9BTkQsTUFNTyxJQUFJLENBQUNBLElBQUwsRUFBVztBQUNoQlIsNERBQUEsR0FBY3hELGlEQUFkO0FBQ0FnRSxZQUFJLEdBQUcsS0FBUDtBQUNEO0FBQ0Y7QUFyQ21DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFzQ3JDLEM7Ozs7Ozs7Ozs7Ozs7O0FDaEVjLFNBQVM3QixZQUFULENBQXNCOEIsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzdDRCxLQUFHLEdBQUdFLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxHQUFWLENBQU47QUFDQUMsS0FBRyxHQUFHQyxJQUFJLENBQUNFLEtBQUwsQ0FBV0gsR0FBWCxDQUFOO0FBQ0EsU0FBT0MsSUFBSSxDQUFDRSxLQUFMLENBQVdGLElBQUksQ0FBQ25DLE1BQUwsTUFBaUJrQyxHQUFHLEdBQUdELEdBQXZCLENBQVgsSUFBMENBLEdBQWpELENBSDZDLENBR1M7QUFDdkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkQ7QUFDQTtBQUNBO0FBQ0E7O0lBQ3FCSyxJO0FBQ25CLGdCQUFZcEYsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLUSxLQUFMLEdBQWFSLE9BQU8sQ0FBQ1EsS0FBckI7QUFFQSxTQUFLb0IsVUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxTQUFLSCxhQUFMLEdBQXFCMUIsT0FBTyxDQUFDMEIsYUFBUixJQUF5QixDQUE5QztBQUNBLFNBQUtDLGNBQUwsR0FBc0IzQixPQUFPLENBQUMyQixjQUFSLElBQTBCLENBQWhEO0FBRUEsU0FBS3hCLEtBQUwsR0FBYUgsT0FBTyxDQUFDRyxLQUFyQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0osT0FBTyxDQUFDSSxNQUF0QjtBQUVBLFNBQUtnQixFQUFMLEdBQVVwQixPQUFPLENBQUNvQixFQUFSLElBQWMsQ0FBeEI7QUFDQSxTQUFLYixFQUFMLEdBQVUsQ0FBVjtBQUNBLFNBQUtTLEVBQUwsR0FBVSxDQUFWO0FBQ0EsU0FBS3FFLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUVBLFNBQUtyRixDQUFMLEdBQVNGLE9BQU8sQ0FBQ0UsQ0FBakI7QUFDQSxTQUFLRCxDQUFMLEdBQVNELE9BQU8sQ0FBQ0MsQ0FBakI7QUFDQSxTQUFLdUYsT0FBTCxHQUFlLENBQWY7QUFFQSxTQUFLQyxNQUFMLEdBQWMsS0FBZCxDQXRCbUIsQ0F3Qm5COztBQUNBLFNBQUtDLElBQUwsR0FBWTFGLE9BQU8sQ0FBQzBGLElBQXBCO0FBRUEsU0FBS0MsS0FBTCxHQUFhLElBQUlDLGtEQUFKLEVBQWI7QUFDRDs7Ozs2QkFFUTtBQUNQLFdBQUsvRCxTQUFMLElBQWtCLENBQWxCOztBQUVBLFVBQUksS0FBS0EsU0FBTCxHQUFpQixLQUFLSCxhQUExQixFQUF5QztBQUN2QyxhQUFLRyxTQUFMLEdBQWlCLENBQWpCOztBQUNBLFlBQUksS0FBS0QsVUFBTCxHQUFrQixLQUFLRCxjQUFMLEdBQXNCLENBQTVDLEVBQStDO0FBQzdDLGVBQUtDLFVBQUwsSUFBbUIsQ0FBbkI7QUFDRCxTQUZELE1BRU87QUFDTCxlQUFLQSxVQUFMLEdBQWtCLENBQWxCO0FBQ0Q7QUFDRjtBQUNGOzs7NkJBRVE7QUFDUGYsdURBQUEsQ0FDRSxLQUFLTCxLQURQLEVBRUcsS0FBS29CLFVBQUwsR0FBa0IsS0FBS3pCLEtBQXhCLEdBQWlDLEtBQUt3QixjQUZ4QyxFQUdFLEtBQUtYLEVBSFAsRUFJRSxLQUFLYixLQUFMLEdBQWEsS0FBS3dCLGNBSnBCLEVBS0UsS0FBS3ZCLE1BTFAsRUFNRSxLQUFLRyxFQU5QLEVBT0UsS0FBS0wsQ0FQUCxFQVFFLEtBQUtDLEtBQUwsR0FBYSxLQUFLd0IsY0FScEIsRUFTRSxLQUFLdkIsTUFUUDtBQVdELEssQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztnQ0FFWTtBQUNWLFdBQUtGLENBQUwsSUFBVSxLQUFLa0IsRUFBZjs7QUFFQSxVQUFJLEtBQUtsQixDQUFMLEdBQVMsS0FBS0UsTUFBZCxHQUF1QixLQUFLc0YsSUFBaEMsRUFBc0M7QUFDcEMsYUFBS3RFLEVBQUwsSUFBVyxLQUFLb0UsT0FBaEI7QUFDQSxhQUFLRixRQUFMLEdBQWdCLEtBQWhCOztBQUNBLFlBQUksS0FBS2xFLEVBQUwsR0FBVSxDQUFkLEVBQWlCO0FBQ2YsZUFBS08sY0FBTCxHQUFzQixDQUF0Qjs7QUFDQSxjQUFJLEtBQUs4RCxNQUFULEVBQWlCO0FBQ2YsaUJBQUt6RSxFQUFMLEdBQVUsR0FBVjtBQUNELFdBRkQsTUFFTztBQUNMLGlCQUFLQSxFQUFMLEdBQVUsR0FBVjtBQUNEO0FBQ0Y7QUFDRixPQVhELE1BV087QUFDTCxhQUFLSSxFQUFMLEdBQVUsQ0FBVjtBQUNBLGFBQUtrRSxRQUFMLEdBQWdCLElBQWhCLENBRkssQ0FHTDs7QUFDQSxhQUFLM0QsY0FBTCxHQUFzQixDQUF0Qjs7QUFDQSxZQUFJLEtBQUs4RCxNQUFULEVBQWlCO0FBQ2YsZUFBS3pFLEVBQUwsR0FBVSxHQUFWO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZUFBS0EsRUFBTCxHQUFVLENBQVY7QUFDRDs7QUFDRCxhQUFLZCxDQUFMLEdBQVMsS0FBS3dGLElBQUwsR0FBWSxLQUFLdEYsTUFBMUI7QUFDRDtBQUNGLEssQ0FFRDs7OztxQ0FDaUI7QUFDZixVQUFJeUYsbURBQUEsSUFBY0Esa0RBQWQsSUFBMkJBLHFEQUEvQixFQUE2QztBQUMzQyxhQUFLRixLQUFMLENBQVdHLE1BQVg7QUFDQSxhQUFLQyxJQUFMO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBS1IsU0FBTCxHQUFpQixDQUFqQjtBQUNEOztBQUNELFVBQUlNLGtEQUFBLElBQWFBLHdEQUFqQixFQUFrQztBQUNoQyxZQUFJLEtBQUt0RixFQUFMLEdBQVVPLGdEQUFBLEdBQWUsR0FBN0IsRUFBa0MsS0FBS1AsRUFBTCxJQUFXLENBQVg7QUFDbEMsYUFBS1MsRUFBTCxHQUFVLENBQVY7QUFDQSxhQUFLeUUsTUFBTCxHQUFjLEtBQWQ7QUFDQSxhQUFLOUQsY0FBTCxHQUFzQixDQUF0QjtBQUNEOztBQUNELFVBQUlrRSxrREFBQSxJQUFhQSx1REFBakIsRUFBaUM7QUFDL0IsWUFBSSxLQUFLdEYsRUFBTCxHQUFVLENBQWQsRUFBaUIsS0FBS0EsRUFBTCxJQUFXLENBQVg7QUFDakIsYUFBS1MsRUFBTCxHQUFVLEdBQVY7QUFDQSxhQUFLeUUsTUFBTCxHQUFjLElBQWQ7QUFDQSxhQUFLOUQsY0FBTCxHQUFzQixDQUF0QjtBQUNEOztBQUNELFVBQUlrRSxvREFBSixFQUFpQjtBQUNmRyxjQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0Q7QUFDRjs7OzJCQUVNO0FBQ0wsVUFBSSxLQUFLWixRQUFMLElBQWlCLEtBQUtDLFNBQUwsS0FBbUIsQ0FBeEMsRUFBMkM7QUFDekMsYUFBS0EsU0FBTCxHQUFpQixDQUFqQjtBQUNBLGFBQUtuRSxFQUFMLEdBQVUsQ0FBQyxLQUFLaUUsU0FBaEI7QUFDQSxhQUFLTSxLQUFMLENBQVdRLFFBQVg7QUFDRCxPQUpELE1BSU8sSUFBSSxLQUFLWixTQUFMLEdBQWlCLENBQWpCLElBQXNCLEtBQUtBLFNBQUwsR0FBaUIsRUFBM0MsRUFBK0M7QUFDcEQsYUFBS0EsU0FBTCxJQUFrQixDQUFsQjtBQUNBLGFBQUtuRSxFQUFMLEdBQVUsQ0FBQyxLQUFLaUUsU0FBTixHQUFtQixLQUFLRSxTQUFMLEdBQWlCLEVBQTlDO0FBQ0EsYUFBSzVELGNBQUwsR0FBc0IsQ0FBdEI7O0FBQ0EsWUFBSSxLQUFLOEQsTUFBVCxFQUFpQjtBQUNmLGVBQUt6RSxFQUFMLEdBQVUsR0FBVjtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtBLEVBQUwsR0FBVSxHQUFWO0FBQ0Q7QUFDRjtBQUNGOzs7NEJBRU87QUFBQTs7QUFDTixVQUFNeUIsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixhQUFJLENBQUNSLE1BQUw7O0FBQ0EsYUFBSSxDQUFDckIsTUFBTDs7QUFDQSxhQUFJLENBQUN3RixTQUFMOztBQUNBLGFBQUksQ0FBQ0MsY0FBTDs7QUFFQSxZQUFJdEMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLE1BQW9DLE1BQXhDLEVBQWdEZ0MsTUFBTSxDQUFDTSxxQkFBUCxDQUE2QjdELElBQTdCO0FBQ2pELE9BUEQ7O0FBUUEsV0FBS2pDLEtBQUwsQ0FBVytGLE1BQVgsR0FBb0IsWUFBTTtBQUN4QlAsY0FBTSxDQUFDTSxxQkFBUCxDQUE2QjdELElBQTdCO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0pIO0FBRUE7QUFFQSxJQUFNM0IsTUFBTSxHQUFHc0IsUUFBUSxDQUFDb0UsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0EsSUFBTTNGLEdBQUcsR0FBR0MsTUFBTSxDQUFDMkYsVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBRUExQyxZQUFZLENBQUMyQyxPQUFiLENBQXFCLFNBQXJCLEVBQWdDLE1BQWhDO0FBQ0EzQyxZQUFZLENBQUMyQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCLENBQTlCO0FBQ0EsSUFBSSxDQUFDM0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGNBQXJCLENBQUwsRUFBMkNELFlBQVksQ0FBQzJDLE9BQWIsQ0FBcUIsY0FBckIsRUFBcUMsSUFBckM7QUFDM0MsSUFBSSxDQUFDM0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLENBQUwsRUFBMENELFlBQVksQ0FBQzJDLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0Msb0JBQXBDO0FBRTFDQyxvREFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDWkosSUFBTTdDLElBQUksR0FBRztBQUNYOEMsSUFBRSxFQUFFO0FBQ0ZDLFlBQVEsRUFBRSxRQURSO0FBRUY1QyxZQUFRLEVBQUUsUUFGUjtBQUdGNkMsWUFBUSxFQUFFLFFBSFI7QUFJRkMsZ0JBQVksRUFBRSxhQUpaO0FBS0ZDLGdCQUFZLEVBQUUsWUFMWjtBQU1GQyxjQUFVLEVBQUUsU0FOVjtBQU9GQyxhQUFTLEVBQUUsa0JBUFQ7QUFRRkMsZ0JBQVksRUFBRSxnQkFSWjtBQVNGQyxXQUFPLEVBQUUsTUFUUDtBQVVGQyxZQUFRLEVBQUUsaUpBVlI7QUFXRkMsWUFBUSxFQUFFLG1CQVhSO0FBWUZDLFlBQVEsRUFBRSxvQkFaUjtBQWFGQyxZQUFRLEVBQUUsbUJBYlI7QUFjRkMsWUFBUSxFQUFFLGtCQWRSO0FBZUZDLFlBQVEsRUFBRSxjQWZSO0FBZ0JGQyxZQUFRLEVBQUUsZUFoQlI7QUFpQkZDLFlBQVEsRUFBRTtBQWpCUixHQURPO0FBb0JYQyxJQUFFLEVBQUU7QUFDRmhCLFlBQVEsRUFBRSxZQURSO0FBRUY1QyxZQUFRLEVBQUUsU0FGUjtBQUdGNkMsWUFBUSxFQUFFLFFBSFI7QUFJRkMsZ0JBQVksRUFBRSxtQkFKWjtBQUtGQyxnQkFBWSxFQUFFLGFBTFo7QUFNRkMsY0FBVSxFQUFFLFdBTlY7QUFPRkMsYUFBUyxFQUFFLGdCQVBUO0FBUUZDLGdCQUFZLEVBQUUsa0JBUlo7QUFTRkMsV0FBTyxFQUFFLFFBVFA7QUFVRkMsWUFBUSxFQUFFLGdKQVZSO0FBV0ZDLFlBQVEsRUFBRSxxQkFYUjtBQVlGQyxZQUFRLEVBQUUsc0JBWlI7QUFhRkMsWUFBUSxFQUFFLG9CQWJSO0FBY0ZDLFlBQVEsRUFBRSxtQkFkUjtBQWVGQyxZQUFRLEVBQUUscUJBZlI7QUFnQkZDLFlBQVEsRUFBRSxzQkFoQlI7QUFpQkZDLFlBQVEsRUFBRTtBQWpCUixHQXBCTztBQXVDWEUsSUFBRSxFQUFFO0FBQ0ZqQixZQUFRLEVBQUUsUUFEUjtBQUVGNUMsWUFBUSxFQUFFLFNBRlI7QUFHRjZDLFlBQVEsRUFBRSxRQUhSO0FBSUZDLGdCQUFZLEVBQUUsY0FKWjtBQUtGQyxnQkFBWSxFQUFFLGFBTFo7QUFNRkMsY0FBVSxFQUFFLE9BTlY7QUFPRkMsYUFBUyxFQUFFLGdCQVBUO0FBUUZDLGdCQUFZLEVBQUUscUJBUlo7QUFTRkMsV0FBTyxFQUFFLFVBVFA7QUFVRkMsWUFBUSxFQUFFLHlJQVZSO0FBV0ZDLFlBQVEsRUFBRSxvQkFYUjtBQVlGQyxZQUFRLEVBQUUsc0JBWlI7QUFhRkMsWUFBUSxFQUFFLG9CQWJSO0FBY0ZDLFlBQVEsRUFBRSxxQkFkUjtBQWVGQyxZQUFRLEVBQUUscUJBZlI7QUFnQkZDLFlBQVEsRUFBRSxzQkFoQlI7QUFpQkZDLFlBQVEsRUFBRTtBQWpCUjtBQXZDTyxDQUFiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0lBRXFCRyxRO0FBQ25CLG9CQUFZL0gsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQyxDQUFMLEdBQVNELE9BQU8sQ0FBQ0MsQ0FBakI7QUFDQSxTQUFLQyxDQUFMLEdBQVNGLE9BQU8sQ0FBQ0UsQ0FBakI7QUFDQSxTQUFLQyxLQUFMLEdBQWFILE9BQU8sQ0FBQ0csS0FBckI7QUFDQSxTQUFLQyxNQUFMLEdBQWNKLE9BQU8sQ0FBQ0ksTUFBdEI7QUFDQSxTQUFLRSxTQUFMLEdBQWlCTixPQUFPLENBQUNNLFNBQXpCO0FBRUEsU0FBS0MsRUFBTCxHQUFVLENBQUMsS0FBS0QsU0FBaEI7QUFFQSxTQUFLRSxLQUFMLEdBQWEsSUFBSUMsS0FBSixFQUFiO0FBQ0EsU0FBS0QsS0FBTCxDQUFXRSxHQUFYLEdBQWlCVixPQUFPLENBQUNXLFFBQXpCO0FBQ0Q7Ozs7NkJBRVE7QUFDUCxXQUFLVixDQUFMLElBQVUsS0FBS00sRUFBZjtBQUNBLFdBQUtLLE1BQUw7QUFDRDs7OzZCQUVRO0FBQ1BDLDBEQUFBLENBQ0UsS0FBS0wsS0FEUCxFQUVFLEtBQUtQLENBRlAsRUFHRWEsb0RBQUEsR0FBZ0IsRUFIbEI7QUFLRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCSDtBQUNBO0FBQ0E7QUFFQSxJQUFNa0gsSUFBSSxHQUFHO0FBQ1hDLE1BRFcsa0JBQ0o7QUFDTGxFLGdCQUFZLENBQUMyQyxPQUFiLENBQXFCLFNBQXJCLEVBQWdDLE9BQWhDO0FBQ0EsUUFBTXdCLEVBQUUsR0FBR25FLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixjQUFyQixDQUFYO0FBQ0EsUUFBTW1FLElBQUksR0FBRy9GLFFBQVEsQ0FBQ29FLGFBQVQsQ0FBdUIsT0FBdkIsS0FBbUNwRSxRQUFRLENBQUNnRyxhQUFULENBQXVCLEtBQXZCLENBQWhEO0FBQ0FELFFBQUksQ0FBQ0UsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFFBQW5CO0FBQ0FILFFBQUksQ0FBQ0ksU0FBTDtBQU1BbkcsWUFBUSxDQUFDQyxJQUFULENBQWNDLFdBQWQsQ0FBMEI2RixJQUExQjtBQUNBL0YsWUFBUSxDQUFDb0csZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBTTtBQUN2Q3BHLGNBQVEsQ0FBQ0MsSUFBVCxDQUFjb0csV0FBZCxDQUEwQk4sSUFBMUI7QUFDQXBFLGtCQUFZLENBQUMyQyxPQUFiLENBQXFCLFNBQXJCLEVBQWdDLE1BQWhDO0FBQ0FyQyx3REFBSztBQUNOLEtBSkQ7QUFLRCxHQWxCVTtBQW1CWHFFLE1BbkJXLGtCQW1CSjtBQUNMLFFBQU1DLEtBQUssR0FBR3ZHLFFBQVEsQ0FBQ29FLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtBQUNBbUMsU0FBSyxDQUFDTixTQUFOLENBQWdCQyxHQUFoQixDQUFvQixRQUFwQjtBQUNEO0FBdEJVLENBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBRWUsU0FBU00sUUFBVCxHQUFvQjtBQUNqQ3hHLFVBQVEsQ0FBQ0MsSUFBVCxDQUFjb0csV0FBZCxDQUEwQjNILDBDQUExQjtBQUNBaUQsY0FBWSxDQUFDMkMsT0FBYixDQUFxQixTQUFyQixFQUFnQyxPQUFoQztBQUNBLE1BQU13QixFQUFFLEdBQUduRSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsY0FBckIsQ0FBWDtBQUNBLE1BQU02RSxXQUFXLEdBQUd6RyxRQUFRLENBQUNvRSxhQUFULENBQXVCLGVBQXZCLENBQXBCO0FBQ0EsTUFBTTJCLElBQUksR0FBRy9GLFFBQVEsQ0FBQ29FLGFBQVQsQ0FBdUIsT0FBdkIsS0FBbUNwRSxRQUFRLENBQUNnRyxhQUFULENBQXVCLEtBQXZCLENBQWhEO0FBQ0FELE1BQUksQ0FBQ0UsU0FBTCxDQUFlQyxHQUFmLENBQW1CLE1BQW5CLEVBQTJCLGlCQUEzQjtBQUNBSCxNQUFJLENBQUNJLFNBQUw7QUFLQU0sYUFBVyxDQUFDdkcsV0FBWixDQUF3QjZGLElBQXhCO0FBQ0FVLGFBQVcsQ0FBQ1IsU0FBWixDQUFzQlMsTUFBdEIsQ0FBNkIsUUFBN0I7QUFDQTFHLFVBQVEsQ0FBQ29HLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQU07QUFDdkN4QyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0QsR0FGRDtBQUdELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBUzZDLElBQVQsR0FBZ0I7QUFDN0JqSSwwREFBQSxDQUFxQixRQUFyQjtBQUNBLE1BQU1vSCxFQUFFLEdBQUduRSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsY0FBckIsQ0FBWDtBQUNBLE1BQU02RSxXQUFXLEdBQUd6RyxRQUFRLENBQUNvRSxhQUFULENBQXVCLGVBQXZCLENBQXBCO0FBQ0EsTUFBTTJCLElBQUksR0FBRy9GLFFBQVEsQ0FBQ29FLGFBQVQsQ0FBdUIsT0FBdkIsS0FBbUNwRSxRQUFRLENBQUNnRyxhQUFULENBQXVCLEtBQXZCLENBQWhEO0FBQ0FELE1BQUksQ0FBQ0UsU0FBTCxDQUFlQyxHQUFmLENBQW1CLE1BQW5CLEVBQTJCLFlBQTNCO0FBQ0FILE1BQUksQ0FBQ0ksU0FBTCxxREFFRXpFLHVDQUFJLENBQUNvRSxFQUFELENBQUosQ0FBU2IsUUFGWCxvQkFHS3ZELHVDQUFJLENBQUNvRSxFQUFELENBQUosQ0FBU1osUUFIZCxxQkFJRXhELHVDQUFJLENBQUNvRSxFQUFELENBQUosQ0FBU1gsUUFKWCxxQkFLTXpELHVDQUFJLENBQUNvRSxFQUFELENBQUosQ0FBU1YsUUFMZixxQkFNTTFELHVDQUFJLENBQUNvRSxFQUFELENBQUosQ0FBU1QsUUFOZixxQkFPTTNELHVDQUFJLENBQUNvRSxFQUFELENBQUosQ0FBU1IsUUFQZixxQkFRTTVELHVDQUFJLENBQUNvRSxFQUFELENBQUosQ0FBU1AsUUFSZixxQkFTTTdELHVDQUFJLENBQUNvRSxFQUFELENBQUosQ0FBU04sUUFUZixvSUFZb0Q5RCx1Q0FBSSxDQUFDb0UsRUFBRCxDQUFKLENBQVNsQixZQVo3RCwySUFjbURsRCx1Q0FBSSxDQUFDb0UsRUFBRCxDQUFKLENBQVNsQixZQWQ1RCxpSkFrQm9EbEQsdUNBQUksQ0FBQ29FLEVBQUQsQ0FBSixDQUFTakIsVUFsQjdELDJJQW9CbURuRCx1Q0FBSSxDQUFDb0UsRUFBRCxDQUFKLENBQVNqQixVQXBCNUQ7O0FBd0JBLFdBQVMrQixTQUFULEdBQXFCO0FBQ25CSCxlQUFXLENBQUNOLFNBQVosR0FBd0IsRUFBeEI7QUFDQU0sZUFBVyxDQUFDUixTQUFaLENBQXNCQyxHQUF0QixDQUEwQixRQUExQjtBQUNBeEgsK0RBQUEsQ0FBd0IsUUFBeEI7QUFDQXVELHNEQUFLO0FBQ047O0FBRUR3RSxhQUFXLENBQUN2RyxXQUFaLENBQXdCNkYsSUFBeEI7QUFDQVUsYUFBVyxDQUFDUixTQUFaLENBQXNCUyxNQUF0QixDQUE2QixRQUE3QjtBQUNBLE1BQU1HLFFBQVEsR0FBRzdHLFFBQVEsQ0FBQ29FLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBakI7QUFDQXlDLFVBQVEsQ0FBQ1QsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNRLFNBQW5DO0FBRUEsTUFBTS9CLFVBQVUsR0FBRzdFLFFBQVEsQ0FBQ29FLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBbkI7QUFDQVMsWUFBVSxDQUFDdUIsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtBQUN6Q3hJLHFEQUFPO0FBQ1IsR0FGRDtBQUdELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBUzJHLElBQVQsR0FBZ0I7QUFDN0I3RiwwREFBQSxDQUFxQixRQUFyQjtBQUNBLE1BQU1vSCxFQUFFLEdBQUduRSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsY0FBckIsQ0FBWDtBQUNBLE1BQU02RSxXQUFXLEdBQUd6RyxRQUFRLENBQUNvRSxhQUFULENBQXVCLGVBQXZCLENBQXBCO0FBQ0EsTUFBTTJCLElBQUksR0FBRy9GLFFBQVEsQ0FBQ29FLGFBQVQsQ0FBdUIsT0FBdkIsS0FBbUNwRSxRQUFRLENBQUNnRyxhQUFULENBQXVCLEtBQXZCLENBQWhEO0FBQ0FELE1BQUksQ0FBQ0UsU0FBTCxDQUFlQyxHQUFmLENBQW1CLE1BQW5CLEVBQTJCLFlBQTNCO0FBQ0FILE1BQUksQ0FBQ0ksU0FBTCxnSEFFNEN6RSx1Q0FBSSxDQUFDb0UsRUFBRCxDQUFKLENBQVNsQixZQUZyRCwySEFJMkNsRCx1Q0FBSSxDQUFDb0UsRUFBRCxDQUFKLENBQVNsQixZQUpwRCxtSUFRNENsRCx1Q0FBSSxDQUFDb0UsRUFBRCxDQUFKLENBQVNqQixVQVJyRCwySEFVMkNuRCx1Q0FBSSxDQUFDb0UsRUFBRCxDQUFKLENBQVNqQixVQVZwRCwrSEFjNENuRCx1Q0FBSSxDQUFDb0UsRUFBRCxDQUFKLENBQVNkLE9BZHJELDJIQWdCMkN0RCx1Q0FBSSxDQUFDb0UsRUFBRCxDQUFKLENBQVNkLE9BaEJwRDs7QUFxQkEsV0FBUzRCLFNBQVQsR0FBcUI7QUFDbkJILGVBQVcsQ0FBQ04sU0FBWixHQUF3QixFQUF4QjtBQUNBTSxlQUFXLENBQUNSLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLFFBQTFCO0FBQ0F4SCwrREFBQSxDQUF3QixRQUF4QjtBQUNBdUQsc0RBQUs7QUFDTjs7QUFFRHdFLGFBQVcsQ0FBQ3ZHLFdBQVosQ0FBd0I2RixJQUF4QjtBQUNBVSxhQUFXLENBQUNSLFNBQVosQ0FBc0JTLE1BQXRCLENBQTZCLFFBQTdCO0FBRUEsTUFBTUcsUUFBUSxHQUFHN0csUUFBUSxDQUFDb0UsYUFBVCxDQUF1QixRQUF2QixDQUFqQjtBQUNBeUMsVUFBUSxDQUFDVCxnQkFBVCxDQUEwQixPQUExQixFQUFtQ1EsU0FBbkM7QUFFQSxNQUFNNUIsT0FBTyxHQUFHaEYsUUFBUSxDQUFDb0UsYUFBVCxDQUF1QixPQUF2QixDQUFoQjtBQUNBWSxTQUFPLENBQUNvQixnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFNO0FBQ3RDTyxrREFBSTtBQUNMLEdBRkQ7QUFJQSxNQUFNOUIsVUFBVSxHQUFHN0UsUUFBUSxDQUFDb0UsYUFBVCxDQUF1QixVQUF2QixDQUFuQjtBQUNBUyxZQUFVLENBQUN1QixnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0FBQ3pDeEkscURBQU87QUFDUixHQUZEO0FBR0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQ2hDYywwREFBQSxDQUFxQixRQUFyQjtBQUNBLE1BQU1vSCxFQUFFLEdBQUduRSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsY0FBckIsQ0FBWDtBQUNBLE1BQU02RSxXQUFXLEdBQUd6RyxRQUFRLENBQUNvRSxhQUFULENBQXVCLGVBQXZCLENBQXBCO0FBQ0EsTUFBTTJCLElBQUksR0FBRy9GLFFBQVEsQ0FBQ29FLGFBQVQsQ0FBdUIsT0FBdkIsS0FBbUNwRSxRQUFRLENBQUNnRyxhQUFULENBQXVCLEtBQXZCLENBQWhEO0FBQ0FELE1BQUksQ0FBQ0UsU0FBTCxDQUFlQyxHQUFmLENBQW1CLE1BQW5CLEVBQTJCLFlBQTNCO0FBQ0FILE1BQUksQ0FBQ0ksU0FBTCx5R0FHU3pFLHVDQUFJLENBQUNvRSxFQUFELENBQUosQ0FBU2hCLFNBSGxCLHdVQVVTcEQsdUNBQUksQ0FBQ29FLEVBQUQsQ0FBSixDQUFTZixZQVZsQix3UkFnQjRDckQsdUNBQUksQ0FBQ29FLEVBQUQsQ0FBSixDQUFTbEIsWUFoQnJELDJIQWtCMkNsRCx1Q0FBSSxDQUFDb0UsRUFBRCxDQUFKLENBQVNsQixZQWxCcEQsZ0lBc0I0Q2xELHVDQUFJLENBQUNvRSxFQUFELENBQUosQ0FBU2QsT0F0QnJELDJIQXdCMkN0RCx1Q0FBSSxDQUFDb0UsRUFBRCxDQUFKLENBQVNkLE9BeEJwRDtBQTJCQWhGLFVBQVEsQ0FBQ29FLGFBQVQsQ0FBdUIsZ0NBQXZCLEVBQXlEMEMsZUFBekQsQ0FBeUUsVUFBekU7QUFDQTlHLFVBQVEsQ0FBQ29FLGFBQVQsc0NBQXFEMEIsRUFBckQsUUFBNERpQixZQUE1RCxDQUF5RSxVQUF6RSxFQUFxRixVQUFyRjs7QUFFQSxXQUFTSCxTQUFULEdBQXFCO0FBQ25CSCxlQUFXLENBQUNOLFNBQVosR0FBd0IsRUFBeEI7QUFDQU0sZUFBVyxDQUFDUixTQUFaLENBQXNCQyxHQUF0QixDQUEwQixRQUExQjtBQUNBeEgsK0RBQUEsQ0FBd0IsUUFBeEI7QUFDQXVELHNEQUFLO0FBQ04sR0F6QytCLENBMkNoQzs7O0FBQ0F3RSxhQUFXLENBQUN2RyxXQUFaLENBQXdCNkYsSUFBeEI7QUFDQVUsYUFBVyxDQUFDUixTQUFaLENBQXNCUyxNQUF0QixDQUE2QixRQUE3QjtBQUNBLE1BQU1HLFFBQVEsR0FBRzdHLFFBQVEsQ0FBQ29FLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBakI7QUFDQXlDLFVBQVEsQ0FBQ1QsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNRLFNBQW5DO0FBRUEsTUFBTTVCLE9BQU8sR0FBR2hGLFFBQVEsQ0FBQ29FLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBaEI7QUFDQVksU0FBTyxDQUFDb0IsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBTTtBQUN0Q08sa0RBQUk7QUFDTCxHQUZEO0FBSUEsTUFBTUssVUFBVSxHQUFHaEgsUUFBUSxDQUFDb0UsYUFBVCxDQUF1QixhQUF2QixDQUFuQjtBQUNBNEMsWUFBVSxDQUFDWixnQkFBWCxDQUE0QixRQUE1QixFQUFzQyxZQUFNO0FBQzFDekUsZ0JBQVksQ0FBQzJDLE9BQWIsQ0FBcUIsY0FBckIsRUFBcUMwQyxVQUFVLENBQUNDLEtBQWhEO0FBQ0FySixXQUFPO0FBQ1IsR0FIRCxFQXZEZ0MsQ0E0RGhDOztBQUNBLE1BQU1zSixPQUFPLEdBQUdsSCxRQUFRLENBQUNvRSxhQUFULENBQXVCLFVBQXZCLENBQWhCO0FBQ0EsTUFBTStDLE9BQU8sR0FBR25ILFFBQVEsQ0FBQ29FLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFDQSxNQUFNZ0QsY0FBYyxHQUFHekYsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLENBQXZCOztBQUNBLE1BQUl3RixjQUFjLEtBQUssb0JBQXZCLEVBQTZDO0FBQzNDRCxXQUFPLENBQUNsQixTQUFSLENBQWtCQyxHQUFsQixDQUFzQixzQkFBdEI7QUFDRCxHQUZELE1BRU87QUFDTGdCLFdBQU8sQ0FBQ2pCLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLHNCQUF0QjtBQUNEOztBQUNEZ0IsU0FBTyxDQUFDZCxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFNO0FBQ3RDekUsZ0JBQVksQ0FBQzJDLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0Msb0JBQXBDO0FBQ0E0QyxXQUFPLENBQUNqQixTQUFSLENBQWtCQyxHQUFsQixDQUFzQixzQkFBdEI7QUFDQWlCLFdBQU8sQ0FBQ2xCLFNBQVIsQ0FBa0JTLE1BQWxCLENBQXlCLHNCQUF6QjtBQUNBOUksV0FBTztBQUNSLEdBTEQ7QUFNQXVKLFNBQU8sQ0FBQ2YsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBTTtBQUN0Q3pFLGdCQUFZLENBQUMyQyxPQUFiLENBQXFCLGFBQXJCLEVBQW9DLG9CQUFwQztBQUNBNkMsV0FBTyxDQUFDbEIsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0Isc0JBQXRCO0FBQ0FnQixXQUFPLENBQUNqQixTQUFSLENBQWtCUyxNQUFsQixDQUF5QixzQkFBekI7QUFDQTlJLFdBQU87QUFDUixHQUxEO0FBTUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkQ7SUFFcUI0RixXO0FBQ25CLHlCQUFjO0FBQUE7O0FBQ1o7QUFDQSxTQUFLNkQsT0FBTCxHQUFlLElBQUkxSCxLQUFKLENBQVUsa0JBQVYsQ0FBZjtBQUNBSyxZQUFRLENBQUNDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQixLQUFLbUgsT0FBL0I7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUkzSCxLQUFKLENBQVUsdUJBQVYsQ0FBakI7QUFDQUssWUFBUSxDQUFDQyxJQUFULENBQWNDLFdBQWQsQ0FBMEIsS0FBS29ILFNBQS9CO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixLQUFyQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDRDs7Ozs2QkFFUTtBQUNQLFVBQUksQ0FBQyxLQUFLQSxRQUFWLEVBQW9CO0FBQ2xCLGFBQUtILE9BQUwsQ0FBYXpILElBQWI7QUFDQSxhQUFLNEgsUUFBTCxHQUFnQixJQUFoQjtBQUNEO0FBQ0Y7OzsrQkFFVTtBQUNULFdBQUtILE9BQUwsQ0FBYS9HLEtBQWI7QUFDQSxXQUFLK0csT0FBTCxDQUFhSSxXQUFiLEdBQTJCLEdBQTNCO0FBQ0EsV0FBS0QsUUFBTCxHQUFnQixLQUFoQjtBQUNEOzs7a0NBRWE7QUFDWixVQUFJLENBQUMsS0FBS0QsYUFBVixFQUF5QjtBQUN2QixhQUFLRCxTQUFMLENBQWUxSCxJQUFmO0FBQ0EsYUFBSzJILGFBQUwsR0FBcUIsSUFBckI7QUFDRDtBQUNGOzs7Z0NBRVc7QUFDVixXQUFLRCxTQUFMLENBQWVoSCxLQUFmO0FBQ0EsV0FBS2dILFNBQUwsQ0FBZUcsV0FBZixHQUE2QixHQUE3QjtBQUNBLFdBQUtGLGFBQUwsR0FBcUIsS0FBckI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNILElBQU03SSxNQUFNLEdBQUdzQixRQUFRLENBQUNvRSxhQUFULENBQXVCLE9BQXZCLENBQWY7QUFDQSxJQUFNM0YsR0FBRyxHQUFHQyxNQUFNLENBQUMyRixVQUFQLENBQWtCLElBQWxCLENBQVo7QUFFQSxJQUFNcUQsaUJBQWlCLEdBQUcsR0FBMUI7QUFDQSxJQUFJQyxDQUFKO0FBQ0EsSUFBSUMsQ0FBSjtBQUNBLElBQU1DLGNBQWMsR0FBRyxFQUF2QjtBQUVBbkosTUFBTSxDQUFDWCxLQUFQLEdBQWU2RixNQUFNLENBQUNrRSxVQUF0QjtBQUNBcEosTUFBTSxDQUFDVixNQUFQLEdBQWdCNEYsTUFBTSxDQUFDbUUsV0FBdkI7QUFDQUosQ0FBQyxHQUFHL0QsTUFBTSxDQUFDa0UsVUFBWDtBQUNBRixDQUFDLEdBQUdoRSxNQUFNLENBQUNtRSxXQUFYOztBQUVBLFNBQVNySCxNQUFULENBQWdCaUMsR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ3hCLFNBQU9ELEdBQUcsR0FBR0UsSUFBSSxDQUFDbkMsTUFBTCxNQUFpQmtDLEdBQUcsR0FBR0QsR0FBTixHQUFZLENBQTdCLENBQWI7QUFDRDs7QUFFRCxTQUFTcUYsWUFBVCxDQUFzQkMsRUFBdEIsRUFBMEI7QUFDeEJOLEdBQUMsR0FBR2pKLE1BQU0sQ0FBQ1gsS0FBWDtBQUNBNkosR0FBQyxHQUFHbEosTUFBTSxDQUFDVixNQUFYO0FBQ0Q7O0FBRUQ0RixNQUFNLENBQUN3QyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQzRCLFlBQWxDLEUsQ0FFQTs7QUFDQSxTQUFTRSxnQkFBVCxHQUE0QjtBQUMxQixPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdULGlCQUFwQixFQUF1Q1MsQ0FBQyxFQUF4QyxFQUE0QztBQUMxQ04sa0JBQWMsQ0FBQy9HLElBQWYsQ0FBb0I7QUFDbEJqRCxPQUFDLEVBQUVnRixJQUFJLENBQUNuQyxNQUFMLEtBQWdCaUgsQ0FERDtBQUVsQjdKLE9BQUMsRUFBRStFLElBQUksQ0FBQ25DLE1BQUwsS0FBZ0JrSCxDQUZEO0FBR2xCUSxhQUFPLEVBQUV2RixJQUFJLENBQUNuQyxNQUFMLEVBSFM7QUFJbEIySCxZQUFNLEVBQUUzSCxNQUFNLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxDQUpJO0FBS2xCNEgsWUFBTSxFQUFFNUgsTUFBTSxDQUFDLENBQUQsRUFBSSxDQUFKLENBTEk7QUFNbEI2SCxZQUFNLEVBQUU3SCxNQUFNLENBQUMsR0FBRCxFQUFNLEdBQU47QUFOSSxLQUFwQjtBQVFEO0FBQ0Y7O0FBRUQsU0FBUzhILGNBQVQsR0FBMEI7QUFDeEIsT0FBSyxJQUFJTCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixjQUFjLENBQUM5RixNQUFuQyxFQUEyQ29HLENBQUMsRUFBNUMsRUFBZ0Q7QUFDOUMsUUFBTU0sUUFBUSxHQUFHaEssR0FBRyxDQUFDaUssb0JBQUosQ0FDZmIsY0FBYyxDQUFDTSxDQUFELENBQWQsQ0FBa0J0SyxDQURILEVBRWZnSyxjQUFjLENBQUNNLENBQUQsQ0FBZCxDQUFrQnJLLENBRkgsRUFHZixDQUhlLEVBSWYrSixjQUFjLENBQUNNLENBQUQsQ0FBZCxDQUFrQnRLLENBSkgsRUFLZmdLLGNBQWMsQ0FBQ00sQ0FBRCxDQUFkLENBQWtCckssQ0FMSCxFQU1mK0osY0FBYyxDQUFDTSxDQUFELENBQWQsQ0FBa0JJLE1BTkgsQ0FBakIsQ0FEOEMsQ0FVOUM7QUFDQTtBQUNBOztBQUVBRSxZQUFRLENBQUNFLFlBQVQsQ0FBc0IsQ0FBdEIsK0JBQStDZCxjQUFjLENBQUNNLENBQUQsQ0FBZCxDQUFrQkMsT0FBakUsUUFkOEMsQ0FjZ0M7O0FBQzlFSyxZQUFRLENBQUNFLFlBQVQsQ0FBc0IsR0FBdEIsK0JBQWlEZCxjQUFjLENBQUNNLENBQUQsQ0FBZCxDQUFrQkMsT0FBbkUsUUFmOEMsQ0Fla0M7O0FBQ2hGSyxZQUFRLENBQUNFLFlBQVQsQ0FBc0IsQ0FBdEIsK0JBQStDZCxjQUFjLENBQUNNLENBQUQsQ0FBZCxDQUFrQkMsT0FBakU7QUFFQTNKLE9BQUcsQ0FBQ21LLFNBQUo7QUFDQW5LLE9BQUcsQ0FBQ29LLEdBQUosQ0FDRWhCLGNBQWMsQ0FBQ00sQ0FBRCxDQUFkLENBQWtCdEssQ0FEcEIsRUFFRWdLLGNBQWMsQ0FBQ00sQ0FBRCxDQUFkLENBQWtCckssQ0FGcEIsRUFHRStKLGNBQWMsQ0FBQ00sQ0FBRCxDQUFkLENBQWtCSSxNQUhwQixFQUlFLENBSkYsRUFLRTFGLElBQUksQ0FBQ2lHLEVBQUwsR0FBVSxDQUxaLEVBTUUsS0FORjtBQVNBckssT0FBRyxDQUFDc0ssU0FBSixHQUFnQk4sUUFBaEI7QUFDQWhLLE9BQUcsQ0FBQ3VLLElBQUo7QUFDRDtBQUNGOztBQUVELFNBQVNDLGNBQVQsR0FBMEI7QUFDeEIsT0FBSyxJQUFJZCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixjQUFjLENBQUM5RixNQUFuQyxFQUEyQ29HLENBQUMsRUFBNUMsRUFBZ0Q7QUFDOUNOLGtCQUFjLENBQUNNLENBQUQsQ0FBZCxDQUFrQnRLLENBQWxCLElBQXVCZ0ssY0FBYyxDQUFDTSxDQUFELENBQWQsQ0FBa0JFLE1BQXpDO0FBQ0FSLGtCQUFjLENBQUNNLENBQUQsQ0FBZCxDQUFrQnJLLENBQWxCLElBQXVCK0osY0FBYyxDQUFDTSxDQUFELENBQWQsQ0FBa0JHLE1BQXpDOztBQUVBLFFBQUlULGNBQWMsQ0FBQ00sQ0FBRCxDQUFkLENBQWtCckssQ0FBbEIsR0FBc0I4SixDQUExQixFQUE2QjtBQUMzQkMsb0JBQWMsQ0FBQ00sQ0FBRCxDQUFkLENBQWtCdEssQ0FBbEIsR0FBc0JnRixJQUFJLENBQUNuQyxNQUFMLEtBQWdCaUgsQ0FBaEIsR0FBb0IsR0FBMUM7QUFDQUUsb0JBQWMsQ0FBQ00sQ0FBRCxDQUFkLENBQWtCckssQ0FBbEIsR0FBc0IsQ0FBQyxFQUF2QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFTb0wsY0FBVCxHQUEwQjtBQUN4QnpLLEtBQUcsQ0FBQzBLLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CeEIsQ0FBcEIsRUFBdUJDLENBQXZCO0FBQ0FZLGdCQUFjO0FBQ2RTLGdCQUFjO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkQ7QUFDQTtBQUNBOztBQUVBLFNBQVNHLGFBQVQsR0FBeUI7QUFDdkI7QUFDQSxNQUFNM0csSUFBSSxHQUFHNEcsY0FBYyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQTNCO0FBRUEsTUFBTUMsUUFBUSxHQUFHLElBQUkzRCw4Q0FBSixDQUFhO0FBQzVCOUgsS0FBQyxFQUFFYSxnREFEeUI7QUFFNUJaLEtBQUMsRUFBRVksaURBRnlCO0FBRzVCWCxTQUFLLEVBQUUsRUFIcUI7QUFJNUJDLFVBQU0sRUFBRSxFQUpvQjtBQUs1QkUsYUFBUyxFQUFUQSxrREFMNEI7QUFNNUJLLFlBQVEsMkJBQW9Ca0UsSUFBcEI7QUFOb0IsR0FBYixDQUFqQjtBQVNBOEcseURBQUEsQ0FBZUQsUUFBZjtBQUNEOztBQUVELFNBQVNELGNBQVQsQ0FBd0IxRyxHQUF4QixFQUE2QkMsR0FBN0IsRUFBa0M7QUFDaEMsU0FBT0MsSUFBSSxDQUFDMkcsS0FBTCxDQUFXM0csSUFBSSxDQUFDbkMsTUFBTCxNQUFpQmtDLEdBQUcsR0FBR0QsR0FBdkIsSUFBOEJBLEdBQXpDLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQUkvQixLQUFKO0FBQ0EsSUFBSTZJLFNBQUo7QUFDQSxJQUFJQyxTQUFKO0FBQ0EsSUFBSUMsY0FBSjtBQUNBLElBQUlDLFNBQUo7QUFDQSxJQUFJMUwsU0FBSjtBQUNBLElBQUlnRSxNQUFKO0FBQ0EsSUFBSXFILFNBQVMsR0FBRyxFQUFoQjtBQUNBLElBQU10SSxLQUFLLEdBQUcsRUFBZDtBQUVBLElBQU13QyxJQUFJLEdBQUcsRUFBYjtBQUNBLElBQUlvRyxTQUFKO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLElBQUloSyxnREFBSixFQUFsQjs7QUFFQSxTQUFTbUMsS0FBVCxHQUFpQjtBQUNmdkQsa0RBQUEsR0FBZWtGLE1BQU0sQ0FBQ2tFLFVBQXRCO0FBQ0FwSixtREFBQSxHQUFnQmtGLE1BQU0sQ0FBQ21FLFdBQVAsR0FBcUIsR0FBckM7QUFFQS9ILFVBQVEsQ0FBQ29HLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQUMyRCxDQUFELEVBQU87QUFDMUN0RyxRQUFJLENBQUNzRyxDQUFDLENBQUNDLElBQUgsQ0FBSixHQUFlLElBQWY7QUFDRCxHQUZEO0FBSUFoSyxVQUFRLENBQUNvRyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDMkQsQ0FBRCxFQUFPO0FBQ3hDdEcsUUFBSSxDQUFDc0csQ0FBQyxDQUFDQyxJQUFILENBQUosR0FBZSxLQUFmO0FBQ0QsR0FGRDtBQUlBdkwsOENBQUEsR0FBVyxpQkFBWDtBQUVBUCxXQUFTLEdBQUcsQ0FBWixDQWRlLENBZWY7O0FBQ0EwQyxPQUFLLEdBQUcsQ0FBUjtBQUNBNkksV0FBUyxHQUFHLENBQVo7O0FBRUEsTUFBSTlILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixDQUFKLEVBQXVDO0FBQ3JDNkgsYUFBUyxHQUFHOUgsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLENBQVo7QUFDRDs7QUFFRGlJLFdBQVMsR0FBRyxJQUFJeEwsS0FBSixFQUFaO0FBQ0F3TCxXQUFTLENBQUN2TCxHQUFWLEdBQWdCcUQsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLENBQWhCO0FBRUFNLFFBQU0sR0FBRyxJQUFJYywwQ0FBSixDQUFTO0FBQ2hCNUUsU0FBSyxFQUFFeUwsU0FEUztBQUVoQjlMLFNBQUssRUFBRSxHQUZTO0FBR2hCQyxVQUFNLEVBQUUsR0FIUTtBQUloQnVCLGtCQUFjLEVBQUUsQ0FKQTtBQUtoQkQsaUJBQWEsRUFBRSxDQUxDO0FBTWhCekIsS0FBQyxFQUFFLEVBTmE7QUFPaEJDLEtBQUMsRUFBRSxFQVBhO0FBUWhCd0YsUUFBSSxFQUFFNUUsaURBQWFWO0FBUkgsR0FBVCxDQUFUO0FBV0FrRSxRQUFNLENBQUNELEtBQVA7QUFFQXlILFdBQVMsR0FBRyxJQUFJakksMENBQUosV0FDUEMsdUNBQUksQ0FBQ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGNBQXJCLENBQUQsQ0FBSixDQUEyQzZDLFFBRHBDLGNBQ2dEN0QsS0FEaEQsR0FDeUQsRUFEekQsRUFDNkQsRUFEN0QsRUFDaUUsTUFEakUsRUFDeUUsU0FEekUsRUFDb0YsSUFEcEYsQ0FBWjtBQUdBZ0osV0FBUyxHQUFHLElBQUluSSwwQ0FBSixXQUNQQyx1Q0FBSSxDQUFDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsY0FBckIsQ0FBRCxDQUFKLENBQTJDOEMsUUFEcEMsY0FDZ0QvQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FEaEQsR0FDaUYsR0FEakYsRUFDc0YsRUFEdEYsRUFDMEYsT0FEMUYsRUFDbUcsU0FEbkcsRUFDOEcsSUFEOUcsQ0FBWjtBQUdBK0gsZ0JBQWMsR0FBRyxJQUFJbEksMENBQUosV0FDWkMsdUNBQUksQ0FBQ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGNBQXJCLENBQUQsQ0FBSixDQUEyQytDLFlBRC9CLGNBQytDOEUsU0FEL0MsR0FDNEQvSyxnREFBQSxHQUFlLEVBRDNFLEVBQytFLEVBRC9FLEVBQ21GLE9BRG5GLEVBQzRGLFNBRDVGLEVBQ3VHLElBRHZHLENBQWpCO0FBSUF3SixnRUFBZ0IsR0FqREQsQ0FrRGY7O0FBQ0FoRSx1QkFBcUIsQ0FBQytGLE1BQUQsQ0FBckI7QUFDRDs7QUFFRCxJQUFNQyxpQkFBaUIsR0FBRyxHQUExQjtBQUNBLElBQUlDLFVBQVUsR0FBR0QsaUJBQWpCOztBQUVBLFNBQVNELE1BQVQsR0FBa0I7QUFDaEIsTUFBSXRJLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixNQUFvQyxNQUF4QyxFQUFnRHNDLHFCQUFxQixDQUFDK0YsTUFBRCxDQUFyQjtBQUNoRHhMLG1EQUFBLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQkMsZ0RBQXBCLEVBQWtDQSxpREFBbEMsRUFGZ0IsQ0FJaEI7O0FBQ0EsTUFBSStFLElBQUksQ0FBQzJHLElBQVQsRUFBZTtBQUNiTixhQUFTLENBQUNPLE9BQVY7QUFDRCxHQVBlLENBU2hCOzs7QUFDQSxNQUFJNUcsSUFBSSxDQUFDNkcsSUFBVCxFQUFlO0FBQ2JSLGFBQVMsQ0FBQ1MsT0FBVjtBQUNELEdBWmUsQ0FjaEI7OztBQUNBSixZQUFVLElBQUksQ0FBZDs7QUFDQSxNQUFJQSxVQUFVLElBQUksQ0FBbEIsRUFBcUI7QUFDbkJmLGtFQUFhO0FBQ2JlLGNBQVUsR0FBR0QsaUJBQWlCLEdBQUdoTSxTQUFTLEdBQUcsQ0FBN0M7O0FBRUEsUUFBSWlNLFVBQVUsR0FBRyxFQUFqQixFQUFxQjtBQUNuQkEsZ0JBQVUsR0FBRyxFQUFiO0FBQ0Q7QUFDRjs7QUFFRGpCLDhEQUFjLEdBekJFLENBMkJoQjs7QUFDQSxPQUFLLElBQUlmLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdvQixTQUFTLENBQUN4SCxNQUE5QixFQUFzQ29HLENBQUMsSUFBSSxDQUEzQyxFQUE4QztBQUM1QyxRQUFNcUMsQ0FBQyxHQUFHakIsU0FBUyxDQUFDcEIsQ0FBRCxDQUFuQjs7QUFFQSxRQUFJcUMsQ0FBQyxDQUFDM00sQ0FBRixHQUFNMk0sQ0FBQyxDQUFDek0sS0FBUixHQUFnQixDQUFwQixFQUF1QjtBQUNyQndMLGVBQVMsQ0FBQ2tCLE1BQVYsQ0FBaUJ0QyxDQUFqQixFQUFvQixDQUFwQjtBQUNELEtBTDJDLENBTzVDOzs7QUFDQSxRQUNFakcsTUFBTSxDQUFDL0QsRUFBUCxHQUFZcU0sQ0FBQyxDQUFDM00sQ0FBRixHQUFNMk0sQ0FBQyxDQUFDek0sS0FBcEIsSUFDR21FLE1BQU0sQ0FBQy9ELEVBQVAsR0FBYStELE1BQU0sQ0FBQ25FLEtBQVAsR0FBZSxFQUE1QixHQUFrQyxFQUFsQyxHQUF1Q3lNLENBQUMsQ0FBQzNNLENBRDVDLElBRUdxRSxNQUFNLENBQUNwRSxDQUFQLEdBQVcwTSxDQUFDLENBQUMxTSxDQUFGLEdBQU0wTSxDQUFDLENBQUN4TSxNQUZ0QixJQUdHa0UsTUFBTSxDQUFDcEUsQ0FBUCxHQUFXb0UsTUFBTSxDQUFDbEUsTUFBbEIsSUFBNEJ3TSxDQUFDLENBQUMxTSxDQUpuQyxFQUtFO0FBQ0FnTSxlQUFTLENBQUNZLFFBQVY7QUFDQW5CLGVBQVMsR0FBRyxFQUFaO0FBQ0FyTCxlQUFTLEdBQUcsQ0FBWjtBQUNBeUQsa0JBQVksQ0FBQzJDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEIzQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsSUFBZ0MsQ0FBOUQ7O0FBQ0EsVUFBSUQsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEtBQWlDLENBQXJDLEVBQXdDO0FBQ3RDNEUsa0VBQVE7QUFDVCxPQUZELE1BRU87QUFDTFosMkRBQUE7QUFDRDs7QUFDRGdFLGVBQVMsQ0FBQ2UsQ0FBVixhQUFpQmpKLHVDQUFJLENBQUNDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixjQUFyQixDQUFELENBQUosQ0FBMkM4QyxRQUE1RCxjQUF3RS9DLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUF4RTtBQUNBaEIsV0FBSyxHQUFHLENBQVI7QUFDQXNCLFlBQU0sQ0FBQy9ELEVBQVAsR0FBWSxDQUFaO0FBQ0ErRCxZQUFNLENBQUNwRSxDQUFQLEdBQVcsQ0FBWDtBQUNBcUQsaUVBQUEsR0FBdUIsQ0FBdkI7QUFDQWdKLGdCQUFVLEdBQUdELGlCQUFiO0FBQ0F0RyxZQUFNLENBQUNqQyxZQUFQLENBQW9CMkMsT0FBcEIsQ0FBNEIsV0FBNUIsRUFBeUNtRixTQUF6QztBQUNEOztBQUNEZSxLQUFDLENBQUNQLE1BQUY7QUFDRDs7QUFFRHJKLE9BQUssSUFBSSxDQUFUO0FBQ0E4SSxXQUFTLENBQUNpQixDQUFWLGFBQWlCakosdUNBQUksQ0FBQ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGNBQXJCLENBQUQsQ0FBSixDQUEyQzZDLFFBQTVELGNBQXdFN0QsS0FBeEU7QUFFQThJLFdBQVMsQ0FBQzVILElBQVY7O0FBRUEsTUFBSWxCLEtBQUssR0FBRzZJLFNBQVosRUFBdUI7QUFDckJBLGFBQVMsR0FBRzdJLEtBQVo7QUFDQStJLGtCQUFjLENBQUNnQixDQUFmLGFBQXNCakosdUNBQUksQ0FBQ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGNBQXJCLENBQUQsQ0FBSixDQUEyQytDLFlBQWpFLGNBQWlGOEUsU0FBakY7QUFDRDs7QUFFRHZMLFdBQVMsSUFBSSxLQUFiO0FBQ0F5TCxnQkFBYyxDQUFDN0gsSUFBZjtBQUNBOEgsV0FBUyxDQUFDOUgsSUFBVixHQTFFZ0IsQ0E0RWhCOztBQUNBVSx3REFBVyxHQTdFSyxDQStFaEI7O0FBQ0FoQixvREFBTyxHQWhGUyxDQWtGaEI7O0FBQ0FiLHNEQUFTO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUtEO0FBQ0E7O0lBRXFCYyxJO0FBQ25CLGdCQUFZa0osQ0FBWixFQUFlOU0sQ0FBZixFQUFrQkMsQ0FBbEIsRUFBcUI4TSxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkJDLENBQTNCLEVBQThCO0FBQUE7O0FBQzVCLFNBQUtILENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUs5TSxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLOE0sQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0Q7Ozs7MkJBRU07QUFDTHJNLHVEQUFBO0FBQ0FBLHVEQUFBLEdBQWdCLEtBQUtvTSxDQUFyQjtBQUNBcE0sa0RBQUEsYUFBYyxLQUFLcU0sQ0FBbkI7QUFDQXJNLHVEQUFBLEdBQWdCLEtBQUttTSxDQUFyQjtBQUNBbk0sc0RBQUEsQ0FBYSxLQUFLa00sQ0FBbEIsRUFBcUIsS0FBSzlNLENBQTFCLEVBQTZCLEtBQUtDLENBQWxDO0FBQ0FXLHVEQUFBO0FBQ0Q7Ozs7Ozs7Ozs7OztVQ3BCSDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiLi9qcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgdGhpcy5mbGlnaHRBbHRpdHVkZSA9IG9wdGlvbnMuZmxpZ2h0QWx0aXR1ZGU7XG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XG5cbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLmltYWdlU3JjO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICB0aGlzLngsXG4gICAgICBjYW52YXMuaGVpZ2h0IC0gdGhpcy5mbGlnaHRBbHRpdHVkZSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IHsgZ2FtZVNwZWVkIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvdWQge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoO1xuICAgIHRoaXMuc3ggPSBvcHRpb25zLnN4O1xuICAgIHRoaXMuc3kgPSBvcHRpb25zLnN5O1xuICAgIHRoaXMuc1dpZHRoID0gb3B0aW9ucy5zV2lkdGg7XG4gICAgdGhpcy5zSGVpZ2h0ID0gb3B0aW9ucy5zSGVpZ2h0O1xuICAgIHRoaXMuZHkgPSBvcHRpb25zLmR5O1xuICAgIHRoaXMuZFdpZHRoID0gb3B0aW9ucy5zV2lkdGg7XG4gICAgdGhpcy5kSGVpZ2h0ID0gb3B0aW9ucy5zSGVpZ2h0O1xuXG4gICAgdGhpcy5keCA9IC1nYW1lU3BlZWQgLyBnYW1lU3BlZWQ7XG5cbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLnNyYztcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5zeCxcbiAgICAgIHRoaXMuc3ksXG4gICAgICB0aGlzLnNXaWR0aCxcbiAgICAgIHRoaXMuc0hlaWdodCxcbiAgICAgIHRoaXMueCxcbiAgICAgIHRoaXMuZHksXG4gICAgICB0aGlzLmRXaWR0aCxcbiAgICAgIHRoaXMuZEhlaWdodCxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2luIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLndpZHRoKTtcblxuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cbiAgICB0aGlzLnRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMDtcbiAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gb3B0aW9ucy5udW1iZXJPZkZyYW1lcyB8fCAxO1xuXG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgdGhpcy50aWNrQ291bnQgPSAwO1xuXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9ICcuL2ltYWdlcy9jb2luLnBuZyc7XG5cbiAgICB0aGlzLmF1ZGlvT2JqID0gbmV3IEF1ZGlvKCcuL3NvdW5kL2NvaW4yLm1wMycpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuXG4gICAgdGhpcy50aWNrQ291bnQrKztcblxuICAgIGlmICh0aGlzLnRpY2tDb3VudCA+IHRoaXMudGlja3NQZXJGcmFtZSkge1xuICAgICAgdGhpcy50aWNrQ291bnQgPSAwO1xuICAgICAgaWYgKHRoaXMuZnJhbWVJbmRleCA8IHRoaXMubnVtYmVyT2ZGcmFtZXMgLSAxKSB7XG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICAodGhpcy5mcmFtZUluZGV4ICogdGhpcy53aWR0aCkgLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgMCxcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICB0aGlzLngsXG4gICAgICB0aGlzLnksXG4gICAgICB0aGlzLndpZHRoIC8gdGhpcy5udW1iZXJPZkZyYW1lcyxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICk7XG4gIH1cblxuICBwbGF5Q29pblNvdW5kKCkge1xuICAgIHRoaXMuYXVkaW9PYmoucGxheSgpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTb3VuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyB0aGlzLnVybCA9IHdpbmRvdy5nYW1lU3RhdGUuc291bmRVcmw7XHJcbiAgICAvLyB0aGlzLm51bSA9IDE7XHJcbiAgICB0aGlzLmZvblNvdW5kID0gbmV3IEF1ZGlvKCdzb3VuZC9mb24xLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmZvblNvdW5kKTtcclxuICAgIHRoaXMuZm9uU291bmQudm9sdW1lID0gMC4xO1xyXG4gICAgdGhpcy5kZWFkU291bmQgPSBuZXcgQXVkaW8oJ3NvdW5kL2RlYWQubXAzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZGVhZFNvdW5kKTtcclxuICB9XHJcblxyXG4gIHBsYXlGb24oKSB7XHJcbiAgICB0aGlzLmZvblNvdW5kLmxvb3AgPSB0cnVlO1xyXG4gICAgdGhpcy5mb25Tb3VuZC5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBzdG9wRm9uKCkge1xyXG4gICAgdGhpcy5mb25Tb3VuZC5wYXVzZSgpO1xyXG4gIH1cclxuXHJcbiAgcGxheURlYWQoKSB7XHJcbiAgICB0aGlzLmRlYWRTb3VuZC5wbGF5KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHNjb3JlIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcbmltcG9ydCBDbG91ZCBmcm9tICcuL2Nsb3VkJztcbmltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSAnLi9nZXRfcmFuZG9tX2ludCc7XG5cbmNvbnN0IGNsb3Vkc1NldCA9IFtcbiAge1xuICAgIHNyYzogJ2ltYWdlcy9jbG91ZHMucG5nJyxcbiAgICBzeDogMCxcbiAgICBzeTogMCxcbiAgICBzV2lkdGg6IDIyMCxcbiAgICBzSGVpZ2h0OiAxNjAsXG4gICAgZHk6IDE1MCxcbiAgICBkV2lkdGg6IDIyMCxcbiAgICBkSGVpZ2h0OiAxNjAsXG4gIH0sXG4gIHtcbiAgICBzcmM6ICdpbWFnZXMvY2xvdWRzLnBuZycsXG4gICAgc3g6IDI1MCxcbiAgICBzeTogMCxcbiAgICBzV2lkdGg6IDIyMCxcbiAgICBzSGVpZ2h0OiAxNjAsXG4gICAgZHk6IDEwMCxcbiAgICBkV2lkdGg6IDIyMCxcbiAgICBkSGVpZ2h0OiAxNjAsXG4gIH0sXG5dO1xuXG5sZXQgY2xvdWQ7XG5jb25zdCBjbG91ZHMgPSBbXTtcbmxldCByYW5kb207XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsb3VkcygpIHtcbiAgaWYgKHNjb3JlICUgNTAwID09PSAwKSB7XG4gICAgcmFuZG9tID0gY2xvdWRzU2V0W2dldFJhbmRvbUludCgwLCAyKV07XG4gICAgY2xvdWQgPSBuZXcgQ2xvdWQocmFuZG9tKTtcblxuICAgIGNsb3Vkcy5wdXNoKGNsb3VkKTtcbiAgfVxuXG4gIGNsb3Vkcy5tYXAoKGNsb3VkKSA9PiB7XG4gICAgY2xvdWQudXBkYXRlKCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgc2NvcmUsIHBsYXllciwgZ2FtZVNwZWVkIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IENvaW4gZnJvbSAnLi9jb2luJztcblxuaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0JztcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuL2xhbmcnO1xuaW1wb3J0IGdldFJhbmRvbUludCBmcm9tICcuL2dldF9yYW5kb21faW50JztcblxubGV0IGNvaW47XG5jb25zdCBjb2lucyA9IFtdO1xuXG5sZXQgY29pbnNUZXh0O1xuLy8g0LTQvtC70LbQtdC9INCx0YvRgtGMINC40LzQtdC90L3QviDQvtCx0YzQtdC60YIg0LAg0L3QtSDQv9C10YDQtdC80LXQvdC90LDRjyDRgtC40L/QsCBsZXQgY29pbnNDb3VudGVyID0gMDtcbi8vINGD0LTQsNC70LjRgtGMINGN0YLQuCDRgdGC0YDQvtC60Lgg0YfQtdGA0LXQtyDQvdC10YHQutC+0LvRjNC60L4g0LrQvtC80LzQuNGC0L7QsilcbmV4cG9ydCBjb25zdCBjb2luc0NvdW50ZXIgPSB7XG4gIGNvdW50ZXI6IDAsXG59O1xuXG5sZXQgY29pblk7XG5sZXQgcmFuZFRpbWU7XG5jb25zdCByYW5kWSA9IFtcbiAge1xuICAgIHk6IDM1MCxcbiAgfSxcbiAge1xuICAgIHk6IDYwMCxcbiAgfSxcbiAge1xuICAgIHk6IDMwMCxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIGdldENvaW4oKSB7XG4gIGNvaW5zVGV4dCA9IG5ldyBUZXh0KFxuICAgIGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5jb2luc1R4dH0gJHtjb2luc0NvdW50ZXIuY291bnRlcn1gLCAzNTAsIDI1LCAncmlnaHQnLCAnIzIxMjEyMScsICcyMCcsXG4gICk7XG5cbiAgY29pbnNUZXh0LkRyYXcoKTtcblxuICBpZiAoc2NvcmUgJSAyMDAgPT09IDApIHtcbiAgICByYW5kVGltZSA9IGdldFJhbmRvbUludCgyMCwgMTAwKTtcbiAgICByYW5kVGltZSArPSAyMDA7XG4gICAgY29pblkgPSByYW5kWVtnZXRSYW5kb21JbnQoMCwgMyldO1xuICB9XG5cbiAgaWYgKHNjb3JlICUgcmFuZFRpbWUgPT09IDApIHtcbiAgICBjb2luID0gbmV3IENvaW4oe1xuICAgICAgeDogY2FudmFzLndpZHRoLFxuICAgICAgeTogY29pblkueSxcbiAgICAgIHdpZHRoOiA1MDQsXG4gICAgICBoZWlnaHQ6IDg0LFxuICAgICAgbnVtYmVyT2ZGcmFtZXM6IDYsXG4gICAgICB0aWNrc1BlckZyYW1lOiA0LFxuICAgICAgZ2FtZVNwZWVkLFxuICAgIH0pO1xuXG4gICAgY29pbnMucHVzaChjb2luKTtcbiAgfVxuXG4gIGlmIChjb2lucy5sZW5ndGggPiAwKSB7XG4gICAgY29pbnMuZm9yRWFjaCgoY29pbikgPT4ge1xuICAgICAgY29pbi5zdGFydCgpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHBsYXllci5keCA8IGNvaW4ueCArIChjb2luLndpZHRoIC8gNilcbiAgICAgICAgJiYgcGxheWVyLmR4ICsgKHBsYXllci53aWR0aCAvIDEwKSAtIDEwID4gY29pbi54XG4gICAgICAgICYmIHBsYXllci55IDwgY29pbi55ICsgY29pbi5oZWlnaHRcbiAgICAgICAgJiYgcGxheWVyLnkgKyBwbGF5ZXIuaGVpZ2h0ID49IGNvaW4ueVxuICAgICAgKSB7XG4gICAgICAgIGNvaW4ueSA9IDEwMDAwO1xuICAgICAgICBjb2luLnBsYXlDb2luU291bmQoKTtcbiAgICAgICAgY29pbnNDb3VudGVyLmNvdW50ZXIgKz0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvaW4ueCA8IC01MCkge1xuICAgICAgICBjb2luLnkgPSAxMDAwMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRDb2luIH07XG4iLCJpbXBvcnQgeyBzY29yZSwgcGxheWVyLCBnYW1lU3BlZWQgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgUGxhdGZvcm0gZnJvbSAnLi9QbGF0Zm9ybSc7XG5pbXBvcnQgZ2V0UmFuZG9tSW50IGZyb20gJy4vZ2V0X3JhbmRvbV9pbnQnO1xuXG5sZXQgcGxhdGZvcm07XG5cbmxldCByYW5kVGltZTtcbmNvbnN0IHBsYXRmb3JtUmFuZFRpbWUgPSBbMjAwLCAyMjAsIDI1MCwgMzAwXTtcblxuY29uc3QgcGxhdGZvcm1zID0gW107XG5jb25zdCBwbGF0Zm9ybXNPcHRpb25zID0gW1xuICB7XG4gICAgc3JjOiAnaW1hZ2VzL3BsYXRmb3JtYTEucG5nJyxcbiAgICB3aWR0aDogNDk1LFxuICAgIGhlaWdodDogMTE1LFxuICAgIGZsaWdodEFsdGl0dWRlOiAyNTAsXG4gIH0sXG4gIHtcbiAgICBzcmM6ICdpbWFnZXMvcGxhdGZvcm1hMi5wbmcnLFxuICAgIHdpZHRoOiAyODAsXG4gICAgaGVpZ2h0OiAxMTUsXG4gICAgZmxpZ2h0QWx0aXR1ZGU6IDMwMCxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBsYXRmb3JtKCkge1xuICBpZiAoc2NvcmUgJSAyMDAgPT09IDApIHtcbiAgICByYW5kVGltZSA9IHBsYXRmb3JtUmFuZFRpbWVbZ2V0UmFuZG9tSW50KDAsIDQpXTtcbiAgfVxuXG4gIGlmIChzY29yZSAlIHJhbmRUaW1lID09PSAwKSB7XG4gICAgbGV0IHR5cGUgPSBnZXRSYW5kb21JbnQoMCwgMik7XG4gICAgdHlwZSA9IHBsYXRmb3Jtc09wdGlvbnNbdHlwZV07XG5cbiAgICBwbGF0Zm9ybSA9IG5ldyBQbGF0Zm9ybSh7XG4gICAgICB4OiBjYW52YXMud2lkdGgsXG4gICAgICB5OiBjYW52YXMuaGVpZ2h0LFxuICAgICAgZmxpZ2h0QWx0aXR1ZGU6IHR5cGUuZmxpZ2h0QWx0aXR1ZGUsXG4gICAgICB3aWR0aDogdHlwZS53aWR0aCxcbiAgICAgIGhlaWdodDogdHlwZS5oZWlnaHQsXG4gICAgICBnYW1lU3BlZWQsXG4gICAgICBpbWFnZVNyYzogdHlwZS5zcmMsXG4gICAgfSk7XG5cbiAgICBwbGF0Zm9ybXMucHVzaChwbGF0Zm9ybSk7XG4gIH1cblxuICBsZXQgZmxhZyA9IGZhbHNlO1xuXG4gIGZvciAoY29uc3QgcGxhdGZvcm0gb2YgcGxhdGZvcm1zKSB7XG4gICAgcGxhdGZvcm0udXBkYXRlKCk7XG5cbiAgICBpZiAoXG4gICAgICAocGxheWVyLmR4ID4gcGxhdGZvcm0ueCAmJiBwbGF5ZXIuZHggPCBwbGF0Zm9ybS54ICsgcGxhdGZvcm0ud2lkdGggLSA0MClcbiAgICAgICYmIHBsYXllci55IDwgY2FudmFzLmhlaWdodCAtIHBsYXRmb3JtLmZsaWdodEFsdGl0dWRlXG4gICAgKSB7XG4gICAgICBwbGF5ZXIudGVzdCA9IGNhbnZhcy5oZWlnaHQgLSBwbGF0Zm9ybS5mbGlnaHRBbHRpdHVkZSArIDI7XG4gICAgICBmbGFnID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFmbGFnKSB7XG4gICAgICBwbGF5ZXIudGVzdCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICBmbGFnID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjsgLy8g0JzQsNC60YHQuNC80YPQvCDQvdC1INCy0LrQu9GO0YfQsNC10YLRgdGPLCDQvNC40L3QuNC80YPQvCDQstC60LvRjtGH0LDQtdGC0YHRj1xufSIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBrZXlzIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcbmltcG9ydCBQbGF5ZXJTb3VuZCBmcm9tICcuL3BsYXllci1zb3VuZCc7XG5pbXBvcnQgeyBkZWFkIH0gZnJvbSAnLi9wYWdlcy9kZWFkJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm8ge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5pbWFnZSA9IG9wdGlvbnMuaW1hZ2U7XG5cbiAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgIHRoaXMudGlja0NvdW50ID0gMDtcbiAgICB0aGlzLnRpY2tzUGVyRnJhbWUgPSBvcHRpb25zLnRpY2tzUGVyRnJhbWUgfHwgMDtcbiAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gb3B0aW9ucy5udW1iZXJPZkZyYW1lcyB8fCAxO1xuXG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcblxuICAgIHRoaXMuZHkgPSBvcHRpb25zLmR5IHx8IDA7XG4gICAgdGhpcy5keCA9IDA7XG4gICAgdGhpcy5zeCA9IDA7XG4gICAgdGhpcy5qdW1wRm9yY2UgPSAxNTtcbiAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5qdW1wVGltZXIgPSAwO1xuXG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLmdyYXZpdHkgPSAxO1xuXG4gICAgdGhpcy5pc0xlZnQgPSBmYWxzZTtcblxuICAgIC8vIHBsYXRmb3JtXG4gICAgdGhpcy50ZXN0ID0gb3B0aW9ucy50ZXN0O1xuXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBQbGF5ZXJTb3VuZCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudGlja0NvdW50ICs9IDE7XG5cbiAgICBpZiAodGhpcy50aWNrQ291bnQgPiB0aGlzLnRpY2tzUGVyRnJhbWUpIHtcbiAgICAgIHRoaXMudGlja0NvdW50ID0gMDtcbiAgICAgIGlmICh0aGlzLmZyYW1lSW5kZXggPCB0aGlzLm51bWJlck9mRnJhbWVzIC0gMSkge1xuICAgICAgICB0aGlzLmZyYW1lSW5kZXggKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgKHRoaXMuZnJhbWVJbmRleCAqIHRoaXMud2lkdGgpIC8gdGhpcy5udW1iZXJPZkZyYW1lcyxcbiAgICAgIHRoaXMuc3gsXG4gICAgICB0aGlzLndpZHRoIC8gdGhpcy5udW1iZXJPZkZyYW1lcyxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgdGhpcy5keCxcbiAgICAgIHRoaXMueSxcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgKTtcbiAgfVxuXG4gIC8vIGdyYXZpdHlcbiAgLy8gZ3Jhdml0eUdvKCkge1xuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMudGVzdClcbiAgLy8gICB0aGlzLnkgKz0gdGhpcy5keTtcblxuICAvLyAgIGlmICh0aGlzLnkgKyB0aGlzLmhlaWdodCA8IGNhbnZhcy5oZWlnaHQpIHtcbiAgLy8gICAgIHRoaXMuZHkgKz0gdGhpcy5ncmF2aXR5O1xuICAvLyAgICAgdGhpcy5ncm91bmRlZCA9IGZhbHNlO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICB0aGlzLmR5ID0gMDtcbiAgLy8gICAgIHRoaXMuZ3JvdW5kZWQgPSB0cnVlO1xuICAvLyAgICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0O1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGdyYXZpdHlHbygpIHtcbiAgICB0aGlzLnkgKz0gdGhpcy5keTtcblxuICAgIGlmICh0aGlzLnkgKyB0aGlzLmhlaWdodCA8IHRoaXMudGVzdCkge1xuICAgICAgdGhpcy5keSArPSB0aGlzLmdyYXZpdHk7XG4gICAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5keSA+IDApIHtcbiAgICAgICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IDE7XG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCkge1xuICAgICAgICAgIHRoaXMuc3ggPSAzMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zeCA9IDQwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmR5ID0gMDtcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0cnVlO1xuICAgICAgLy8gZGVhZC5oaWRlKCk7XG4gICAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gNjtcbiAgICAgIGlmICh0aGlzLmlzTGVmdCkge1xuICAgICAgICB0aGlzLnN4ID0gMTAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zeCA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLnkgPSB0aGlzLnRlc3QgLSB0aGlzLmhlaWdodDtcbiAgICB9XG4gIH1cblxuICAvLyBqdW1wXG4gIGdldFJlYWR5VG9KdW1wKCkge1xuICAgIGlmIChrZXlzLlNwYWNlIHx8IGtleXMuS2V5VyB8fCBrZXlzLkFycm93VXApIHtcbiAgICAgIHRoaXMuc291bmQuanVtcFVwKCk7XG4gICAgICB0aGlzLkp1bXAoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5qdW1wVGltZXIgPSAwO1xuICAgIH1cbiAgICBpZiAoa2V5cy5LZXlNIHx8IGtleXMuQXJyb3dSaWdodCkge1xuICAgICAgaWYgKHRoaXMuZHggPCBjYW52YXMud2lkdGggLSAxMDApIHRoaXMuZHggKz0gNTtcbiAgICAgIHRoaXMuc3ggPSAwO1xuICAgICAgdGhpcy5pc0xlZnQgPSBmYWxzZTtcbiAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSA2O1xuICAgIH1cbiAgICBpZiAoa2V5cy5LZXlOIHx8IGtleXMuQXJyb3dMZWZ0KSB7XG4gICAgICBpZiAodGhpcy5keCA+IDApIHRoaXMuZHggLT0gNTtcbiAgICAgIHRoaXMuc3ggPSAxMDA7XG4gICAgICB0aGlzLmlzTGVmdCA9IHRydWU7XG4gICAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gNjtcbiAgICB9XG4gICAgaWYgKGtleXMuRXNjYXBlKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICB9XG5cbiAgSnVtcCgpIHtcbiAgICBpZiAodGhpcy5ncm91bmRlZCAmJiB0aGlzLmp1bXBUaW1lciA9PT0gMCkge1xuICAgICAgdGhpcy5qdW1wVGltZXIgPSAxO1xuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZTtcbiAgICAgIHRoaXMuc291bmQuanVtcERvd24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuanVtcFRpbWVyID4gMCAmJiB0aGlzLmp1bXBUaW1lciA8IDE1KSB7XG4gICAgICB0aGlzLmp1bXBUaW1lciArPSAxO1xuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZSAtICh0aGlzLmp1bXBUaW1lciAvIDUwKTtcbiAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSAxO1xuICAgICAgaWYgKHRoaXMuaXNMZWZ0KSB7XG4gICAgICAgIHRoaXMuc3ggPSAyMDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN4ID0gNTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIHRoaXMuZ3Jhdml0eUdvKCk7XG4gICAgICB0aGlzLmdldFJlYWR5VG9KdW1wKCk7XG5cbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW5pbWF0ZScpID09PSAndHJ1ZScpIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfTtcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5pbXBvcnQgbWFpbiBmcm9tICcuL3BhZ2VzL21haW4nO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FuaW1hdGUnLCAndHJ1ZScpO1xyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGl2ZXMnLCAyKTtcclxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJykpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5nU2VsZWN0ZWQnLCAnZW4nKTtcclxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3ByaXRlSW1hZ2UnKSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Nwcml0ZUltYWdlJywgJ2ltYWdlcy9zcHJpdGUyLnBuZycpO1xyXG5cclxubWFpbigpO1xyXG5cclxuZXhwb3J0IHsgY2FudmFzLCBjdHggfTtcclxuIiwiY29uc3QgbGFuZyA9IHtcbiAgZW46IHtcbiAgICBzY29yZVR4dDogJ1Njb3JlOicsXG4gICAgY29pbnNUeHQ6ICdDb2luczonLFxuICAgIGxpdmVzVHh0OiAnTGl2ZXM6JyxcbiAgICBiZXN0U2NvcmVUeHQ6ICdCZXN0IHNjb3JlOicsXG4gICAgc3RhcnRHYW1lQnRuOiAnU3RhcnQgR2FtZScsXG4gICAgb3B0aW9uc0J0bjogJ09wdGlvbnMnLFxuICAgIHNlbGVjdExuZzogJ1NlbGVjdCBsYW5ndWFnZTonLFxuICAgIHNlbGVjdFBsYXllcjogJ1NlbGVjdCBwbGF5ZXI6JyxcbiAgICBoZWxwQnRuOiAnSGVscCcsXG4gICAgaGVscFR4dDE6ICdZb3VyIG1pc3Npb24gaXMgdG8gY29sbGVjdCBhbGwgdGhlIGNvaW5zLiBUbyBkbyB0aGlzIHlvdSBvbmx5IGhhdmUgYSBjZXJ0YWluIG51bWJlciAgb2YgbGl2ZXMuIFlvdSBjYW4ganVtcCwgbW92ZSBsZWZ0IGFuZCByaWdodCB3aXRoaW4gc2NyZWVuLicsXG4gICAgaGVscFR4dDI6ICdLZXlib2FyZCBDb250cm9sOicsXG4gICAgaGVscFR4dDM6ICdXLCBTcGFjZSwgXiAtIEpVTVAnLFxuICAgIGhlbHBUeHQ0OiAnTSwgPiAtIE1PVkUgUklHSFQnLFxuICAgIGhlbHBUeHQ1OiAnTiwgPCAtIE1PVkUgTEVGVCcsXG4gICAgaGVscFR4dDY6ICdBIC0gTVVTSUMgT04nLFxuICAgIGhlbHBUeHQ3OiAnUSAtIE1VU0lDIE9GRicsXG4gICAgaGVscFR4dDg6ICdFc2MgLSBNQUlOIE1FTlUnLFxuICB9LFxuICBydToge1xuICAgIHNjb3JlVHh0OiAn0KDQtdC30YPQu9GM0YLQsNGCOicsXG4gICAgY29pbnNUeHQ6ICfQnNC+0L3QtdGC0Ys6JyxcbiAgICBsaXZlc1R4dDogJ9CW0LjQt9C90Lg6JyxcbiAgICBiZXN0U2NvcmVUeHQ6ICfQm9GD0YfRiNC40Lkg0YDQtdC30YPQu9GM0YLQsNGCOicsXG4gICAgc3RhcnRHYW1lQnRuOiAn0J3QsNGH0LDRgtGMINC40LPRgNGDJyxcbiAgICBvcHRpb25zQnRuOiAn0J3QsNGB0YLRgNC+0LnQutC4JyxcbiAgICBzZWxlY3RMbmc6ICfQktGL0LHQtdGA0LjRgtC1INGP0LfRi9C6OicsXG4gICAgc2VsZWN0UGxheWVyOiAn0JLRi9Cx0LXRgNC40YLQtSDQuNCz0YDQvtC60LA6JyxcbiAgICBoZWxwQnRuOiAn0J/QvtC80L7RidGMJyxcbiAgICBoZWxwVHh0MTogJ9CS0LDRiNCwINC30LDQtNCw0YfQsCDRgdC+0LHRgNCw0YLRjCDQstGB0LUg0LzQvtC90LXRgtGLLiDQlNC70Y8g0Y3RgtC+0LPQviDRgyDQstCw0YEg0LXRgdGC0Ywg0L7Qv9GA0LXQtNC10LvQtdC90L3QvtC5INC60L7Qu9C40YfQtdGB0YLQstC+INC20LjQt9C90LXQuS4g0JLRiyDQvNC+0LbQtdGC0LUg0L/RgNGL0LPQsNGC0YwsINC40LTRgtC4INCy0LvQtdCy0L4g0Lgg0LLQv9GA0LDQstC+INCyINC/0YDQtdC00LXQu9Cw0YUg0Y3QutGA0LDQvdCwLicsXG4gICAgaGVscFR4dDI6ICfQmtC70LDQstC40YjQuCDRg9C/0YDQsNCy0LvQtdC90LjRjzonLFxuICAgIGhlbHBUeHQzOiAnVywgU3BhY2UsIF4gLSDQn9GA0YvQttC+0LonLFxuICAgIGhlbHBUeHQ0OiAnTSwgPiAtINCY0LTRgtC4INCy0L/RgNCw0LLQvicsXG4gICAgaGVscFR4dDU6ICdOLCA8IC0g0JjQtNGC0Lgg0LLQu9C10LLQvicsXG4gICAgaGVscFR4dDY6ICdBIC0g0JLQutC70Y7Rh9C40YLRjCDQvNGD0LfRi9C60YMnLFxuICAgIGhlbHBUeHQ3OiAnUSAtINCS0YvQutC70Y7Rh9C40YLRjCDQvNGD0LfRi9C60YMnLFxuICAgIGhlbHBUeHQ4OiAnRXNjIC0g0JPQu9Cw0LLQvdC+0LUg0LzQtdC90Y4nLFxuICB9LFxuICBicjoge1xuICAgIHNjb3JlVHh0OiAn0JLRi9C90ZbQujonLFxuICAgIGNvaW5zVHh0OiAn0JzQsNC90LXRgtGLOicsXG4gICAgbGl2ZXNUeHQ6ICfQltGL0YbRhtGPOicsXG4gICAgYmVzdFNjb3JlVHh0OiAn0JvQtdC/0YjRiyDQstGL0L3RltC6OicsXG4gICAgc3RhcnRHYW1lQnRuOiAn0J/QsNGH0LDRgtGMINGW0LPRgNGDJyxcbiAgICBvcHRpb25zQnRuOiAn0J7Qv9GG0YvRlicsXG4gICAgc2VsZWN0TG5nOiAn0JLRi9Cx0LXRgNGL0YbQtSDQvNC+0LLRgzonLFxuICAgIHNlbGVjdFBsYXllcjogJ9CS0YvQsdC10YDRi9GG0LUg0L/QtdGA0YHQsNC90LDQttCwOicsXG4gICAgaGVscEJ0bjogJ9CU0LDQv9Cw0LzQvtCz0LAnLFxuICAgIGhlbHBUeHQxOiAn0JLQsNGI0LAg0LfQsNC00LDRh9CwINGB0LDQsdGA0LDRhtGMINGD0YHQtSDQvNCw0L3QtdGC0YsuINCU0LvRjyDQs9GN0YLQsNCz0LAg0Z4g0LLQsNGBINGR0YHRhtGMINC/0Y3RntC90LDQuSDQutC+0LvRjNC60LDRgdGG0Ywg0LbRi9GG0YbRj9GeLiDQktGLINC80L7QttCw0YbQtSDRgdC60LDQutCw0YbRjCwg0ZbRgdGG0ZYg0L3QsNC70LXQstCwINGWINC90LDQv9GA0LDQstCwINGeINC80LXQttCw0YUg0Y3QutGA0LDQvdCwLicsXG4gICAgaGVscFR4dDI6ICfQmtC70LDQstGW0YjRiyDQutGW0YDQsNCy0LDQvdC90Y86JyxcbiAgICBoZWxwVHh0MzogJ1csIFNwYWNlLCBeIC0g0J/RgNGL0LbQvtC6JyxcbiAgICBoZWxwVHh0NDogJ00sID4gLSBJ0YHRhtGWINC90LDQu9C10LLQsCcsXG4gICAgaGVscFR4dDU6ICdOLCA8IC0gSdGB0YbRliDQvdCw0L/RgNCw0LLQsCcsXG4gICAgaGVscFR4dDY6ICdBIC0g0KPQutC70Y7Rh9GL0YbRjCDQvNGD0LfRi9C60YMnLFxuICAgIGhlbHBUeHQ3OiAnUSAtINCS0YvQutC70Y7Rh9GL0YbRjCDQvNGD0LfRi9C60YMnLFxuICAgIGhlbHBUeHQ4OiAnRXNjIC0g0JPQsNC70L7RntC90LDQtSDQvNC10L3RjicsXG4gIH0sXG59O1xuXG5leHBvcnQgeyBsYW5nIH07XG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnN0YWNsZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XG5cbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLmltYWdlU3JjO1xuICB9XG5cbiAgVXBkYXRlKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICB0aGlzLngsXG4gICAgICBjYW52YXMuaGVpZ2h0IC0gNTUsXG4gICAgKTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuLi9sYW5nJztcclxuaW1wb3J0IHsgc3RhcnQgfSBmcm9tICcuLi9zdGFydF9nYW1lJztcclxuXHJcbmNvbnN0IGRlYWQgPSB7XHJcbiAgc2hvdygpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbmltYXRlJywgJ2ZhbHNlJyk7XHJcbiAgICBjb25zdCBsZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKTtcclxuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGFnZS5jbGFzc0xpc3QuYWRkKCd6aW5kZXgnKTtcclxuICAgIHBhZ2UuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJoZWxwLXR4dC13cmFwcGVyXCI+XHJcbtCS0Ysg0L/QvtGC0LXRgNGP0LvQuCDQttC40LfQvdGMLlxyXG48YnI+0JrQu9C40LrQvdC4INGH0YLQvtCx0Ysg0L/RgNC+0LTQvtC70LbQuNGC0YwuXHJcbiAgPC9kaXY+XHJcbiAgYDtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwYWdlKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FuaW1hdGUnLCAndHJ1ZScpO1xyXG4gICAgICBzdGFydCgpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBoaWRlKCkge1xyXG4gICAgY29uc3QgcGFnZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpO1xyXG4gICAgcGFnZTEuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IGRlYWQgfTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuLi9sYW5nJztcclxuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjYW52YXMpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbmltYXRlJywgJ2ZhbHNlJyk7XHJcbiAgY29uc3QgbGcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyk7XHJcbiAgY29uc3QgcGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS13cmFwcGVyJyk7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJywgJ2dhbWUtb3Zlci1pbWFnZScpO1xyXG4gIHBhZ2UuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImhlbHAtdHh0LXdyYXBwZXJcIj5cclxuICAgINCS0Ysg0L/RgNC+0LjQs9GA0LDQu9C4LiDQmtC70LjQutC90Lgg0YfRgtC+0LHRiyDQv9GA0L7QtNC+0LvQttC40YLRjC5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICBwYWdlV3JhcHBlci5hcHBlbmRDaGlsZChwYWdlKTtcclxuICBwYWdlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9KTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5pbXBvcnQgeyBzdGFydCB9IGZyb20gJy4uL3N0YXJ0X2dhbWUnO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSAnLi4vbGFuZyc7XHJcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWxwKCkge1xyXG4gIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICBjb25zdCBsZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKTtcclxuICBjb25zdCBwYWdlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXdyYXBwZXInKTtcclxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnLCAncGFnZS1pbWFnZScpO1xyXG4gIHBhZ2UuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJoZWxwLXR4dC13cmFwcGVyXCI+XHJcbiAgJHtsYW5nW2xnXS5oZWxwVHh0MX1cclxuICA8cD4ke2xhbmdbbGddLmhlbHBUeHQyfTwvcD5cclxuICAke2xhbmdbbGddLmhlbHBUeHQzfVxyXG4gIDxicj4ke2xhbmdbbGddLmhlbHBUeHQ0fVxyXG4gIDxicj4ke2xhbmdbbGddLmhlbHBUeHQ1fVxyXG4gIDxicj4ke2xhbmdbbGddLmhlbHBUeHQ2fVxyXG4gIDxicj4ke2xhbmdbbGddLmhlbHBUeHQ3fVxyXG4gIDxicj4ke2xhbmdbbGddLmhlbHBUeHQ4fVxyXG4gIDwvZGl2PlxyXG4gIDxhIGNsYXNzPVwiYnRuZmxpcCBzdGFydC1oZWxwIHN0YXJ0XCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2Zyb250XCI+JHtsYW5nW2xnXS5zdGFydEdhbWVCdG59PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10uc3RhcnRHYW1lQnRufTwvc3Bhbj5cclxuICA8L2E+XHJcbiAgXHJcbiAgPGEgY2xhc3M9XCJidG5mbGlwIG9wdGlvbnMtaGVscCBvcHRpb25zXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2Zyb250XCI+JHtsYW5nW2xnXS5vcHRpb25zQnRufTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj4ke2xhbmdbbGddLm9wdGlvbnNCdG59PC9zcGFuPlxyXG4gIDwvYT5cclxuICBgO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgICBwYWdlV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIHBhZ2VXcmFwcGVyLmFwcGVuZENoaWxkKHBhZ2UpO1xyXG4gIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xyXG5cclxuICBjb25zdCBvcHRpb25zQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wdGlvbnMnKTtcclxuICBvcHRpb25zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgb3B0aW9ucygpO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSAnLi4vc3RhcnRfZ2FtZSc7XHJcbmltcG9ydCBoZWxwIGZyb20gJy4vaGVscCc7XHJcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuLi9sYW5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIGNvbnN0IGxnID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpO1xyXG4gIGNvbnN0IHBhZ2VXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2Utd3JhcHBlcicpO1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScsICdwYWdlLWltYWdlJyk7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbjxhIGNsYXNzPVwiYnRuZmxpcCBzdGFydC1tYWluIHN0YXJ0XCIgaHJlZj1cIiNcIj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPiR7bGFuZ1tsZ10uc3RhcnRHYW1lQnRufTwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10uc3RhcnRHYW1lQnRufTwvc3Bhbj5cclxuPC9hPlxyXG5cclxuPGEgY2xhc3M9XCJidG5mbGlwIG9wdGlvbnMtbWFpbiBvcHRpb25zXCIgaHJlZj1cIiNcIj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPiR7bGFuZ1tsZ10ub3B0aW9uc0J0bn08L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2JhY2tcIj4ke2xhbmdbbGddLm9wdGlvbnNCdG59PC9zcGFuPlxyXG48L2E+XHJcblxyXG48YSBjbGFzcz1cImJ0bmZsaXAgaGVscC1tYWluIGhlbHBcIiBocmVmPVwiI1wiPiAgXHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLmhlbHBCdG59PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+JHtsYW5nW2xnXS5oZWxwQnRufTwvc3Bhbj5cclxuPC9hPlxyXG5cclxuICBgO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgICBwYWdlV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIHBhZ2VXcmFwcGVyLmFwcGVuZENoaWxkKHBhZ2UpO1xyXG4gIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cclxuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xyXG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcclxuXHJcbiAgY29uc3QgaGVscEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWxwJyk7XHJcbiAgaGVscEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGhlbHAoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb3B0aW9uc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zJyk7XHJcbiAgb3B0aW9uc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG9wdGlvbnMoKTtcclxuICB9KTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5pbXBvcnQgeyBzdGFydCB9IGZyb20gJy4uL3N0YXJ0X2dhbWUnO1xyXG5pbXBvcnQgaGVscCBmcm9tICcuL2hlbHAnO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSAnLi4vbGFuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcHRpb25zKCkge1xyXG4gIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICBjb25zdCBsZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKTtcclxuICBjb25zdCBwYWdlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXdyYXBwZXInKTtcclxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnLCAncGFnZS1pbWFnZScpO1xyXG4gIHBhZ2UuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJoZWxwLXR4dC13cmFwcGVyXCI+XHJcbiAgPHAgY2xhc3M9XCJtZW51SXRlbVwiIGlkPSdtZW51RmllbGRTaXplJz5cclxuICA8bGFiZWw+JHtsYW5nW2xnXS5zZWxlY3RMbmd9PC9sYWJlbD5cclxuICA8c2VsZWN0IGlkPVwic2VsZWN0TGFuZ1wiPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiZW5cIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+ZW5nbGlzaDwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwicnVcIj7RgNGD0YHRgdC60LjQuTwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiYnJcIj7QsdC10LvQsNGA0YPRgdC60LDRjzwvb3B0aW9uPlxyXG4gIDwvc2VsZWN0PlxyXG4gIDwvcD5cclxuICA8YnI+PHA+JHtsYW5nW2xnXS5zZWxlY3RQbGF5ZXJ9PC9wPlxyXG4gIDxicj5cclxuICA8aW1nIHNyYz1cImltZy9zcHJpdGUyX2ljb24ucG5nXCIgY2xhc3M9XCJwbGF5ZXIyXCIgYWx0PVwicGxheWVyMlwiPlxyXG4gIDxpbWcgc3JjPVwiaW1nL3Nwcml0ZTFfaWNvbi5wbmdcIiBjbGFzcz1cInBsYXllcjFcIiBhbHQ9XCJwbGF5ZXIxXCI+XHJcbiAgPC9kaXY+XHJcbiAgPGEgY2xhc3M9XCJidG5mbGlwIHN0YXJ0LWhlbHAgc3RhcnRcIiBocmVmPVwiI1wiPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2Zyb250XCI+JHtsYW5nW2xnXS5zdGFydEdhbWVCdG59PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2NlbnRlclwiPjwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+JHtsYW5nW2xnXS5zdGFydEdhbWVCdG59PC9zcGFuPlxyXG48L2E+XHJcblxyXG48YSBjbGFzcz1cImJ0bmZsaXAgb3B0aW9ucy1oZWxwIGhlbHBcIiBocmVmPVwiI1wiPlxyXG4gIDxzcGFuIGNsYXNzPVwiYnRuZmxpcC1pdGVtIGJ0bmZsaXBfX2Zyb250XCI+JHtsYW5nW2xnXS5oZWxwQnRufTwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10uaGVscEJ0bn08L3NwYW4+XHJcbjwvYT5cclxuICBgO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RMYW5nID4gb3B0aW9uW3NlbGVjdGVkXScpLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VsZWN0TGFuZyA+IG9wdGlvblt2YWx1ZT0ke2xnfV1gKS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICAgIHBhZ2VXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBjYW52YXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBzdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgLy8g0LLRi9Cx0L7RgCDRj9C30YvQutCwXHJcbiAgcGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbiAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XHJcblxyXG4gIGNvbnN0IGhlbHBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVscCcpO1xyXG4gIGhlbHBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBoZWxwKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdExhbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0TGFuZycpO1xyXG4gIHNlbGVjdExhbmcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmdTZWxlY3RlZCcsIHNlbGVjdExhbmcudmFsdWUpO1xyXG4gICAgb3B0aW9ucygpO1xyXG4gIH0pO1xyXG5cclxuICAvLyDQstGL0LHQvtGAINC40LPRgNC+0LrQsFxyXG4gIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMScpO1xyXG4gIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMicpO1xyXG4gIGNvbnN0IHBsYXllclNlbGVjdGVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Nwcml0ZUltYWdlJyk7XHJcbiAgaWYgKHBsYXllclNlbGVjdGVkID09PSAnaW1hZ2VzL3Nwcml0ZTIucG5nJykge1xyXG4gICAgcGxheWVyMi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItaWNvbi1zZWxlY3RlZCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwbGF5ZXIxLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1pY29uLXNlbGVjdGVkJyk7XHJcbiAgfVxyXG4gIHBsYXllcjEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnU3ByaXRlSW1hZ2UnLCAnaW1hZ2VzL3Nwcml0ZTEucG5nJyk7XHJcbiAgICBwbGF5ZXIxLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1pY29uLXNlbGVjdGVkJyk7XHJcbiAgICBwbGF5ZXIyLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllci1pY29uLXNlbGVjdGVkJyk7XHJcbiAgICBvcHRpb25zKCk7XHJcbiAgfSk7XHJcbiAgcGxheWVyMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdTcHJpdGVJbWFnZScsICdpbWFnZXMvc3ByaXRlMi5wbmcnKTtcclxuICAgIHBsYXllcjIuY2xhc3NMaXN0LmFkZCgncGxheWVyLWljb24tc2VsZWN0ZWQnKTtcclxuICAgIHBsYXllcjEuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyLWljb24tc2VsZWN0ZWQnKTtcclxuICAgIG9wdGlvbnMoKTtcclxuICB9KTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllclNvdW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIHRoaXMudXJsID0gd2luZG93LmdhbWVTdGF0ZS5zb3VuZFVybDtcclxuICAgIHRoaXMuc291bmRVcCA9IG5ldyBBdWRpbygnc291bmQvanVtcFVwLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kVXApO1xyXG4gICAgdGhpcy5zb3VuZERvd24gPSBuZXcgQXVkaW8oJ3NvdW5kL2dyYXZpdHlEb3duLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kRG93bik7XHJcbiAgICB0aGlzLmlzR3Jhdml0eURvd24gPSBmYWxzZTtcclxuICAgIHRoaXMuaXNKdW1wVXAgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGp1bXBVcCgpIHtcclxuICAgIGlmICghdGhpcy5pc0p1bXBVcCkge1xyXG4gICAgICB0aGlzLnNvdW5kVXAucGxheSgpO1xyXG4gICAgICB0aGlzLmlzSnVtcFVwID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGp1bXBEb3duKCkge1xyXG4gICAgdGhpcy5zb3VuZFVwLnBhdXNlKCk7XHJcbiAgICB0aGlzLnNvdW5kVXAuY3VycmVudFRpbWUgPSAwLjA7XHJcbiAgICB0aGlzLmlzSnVtcFVwID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBncmF2aXR5RG93bigpIHtcclxuICAgIGlmICghdGhpcy5pc0dyYXZpdHlEb3duKSB7XHJcbiAgICAgIHRoaXMuc291bmREb3duLnBsYXkoKTtcclxuICAgICAgdGhpcy5pc0dyYXZpdHlEb3duID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdyYXZpdHlVcCgpIHtcclxuICAgIHRoaXMuc291bmREb3duLnBhdXNlKCk7XHJcbiAgICB0aGlzLnNvdW5kRG93bi5jdXJyZW50VGltZSA9IDAuMDtcclxuICAgIHRoaXMuaXNHcmF2aXR5RG93biA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmNvbnN0IHBhcnRpY2xlc09uU2NyZWVuID0gMjQ1O1xubGV0IHc7XG5sZXQgaDtcbmNvbnN0IHBhcnRpY2xlc0FycmF5ID0gW107XG5cbmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbncgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbmggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbmZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKTtcbn1cblxuZnVuY3Rpb24gY2xpZW50UmVzaXplKGV2KSB7XG4gIHcgPSBjYW52YXMud2lkdGg7XG4gIGggPSBjYW52YXMuaGVpZ2h0O1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2xpZW50UmVzaXplKTtcblxuLy8gY3JlYXRlU25vd0ZsYWtlcygpO1xuZnVuY3Rpb24gY3JlYXRlU25vd0ZsYWtlcygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXNPblNjcmVlbjsgaSsrKSB7XG4gICAgcGFydGljbGVzQXJyYXkucHVzaCh7XG4gICAgICB4OiBNYXRoLnJhbmRvbSgpICogdyxcbiAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiBoLFxuICAgICAgb3BhY2l0eTogTWF0aC5yYW5kb20oKSxcbiAgICAgIHNwZWVkWDogcmFuZG9tKC0xLCAxKSxcbiAgICAgIHNwZWVkWTogcmFuZG9tKDEsIDIpLFxuICAgICAgcmFkaXVzOiByYW5kb20oMC41LCA0LjIpLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXdTbm93Rmxha2VzKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSxcbiAgICAgIDAsXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSxcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnJhZGl1cyxcbiAgICApO1xuXG4gICAgLy8gZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDMwLCAxNDQsIDI1NSwgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XG4gICAgLy8gZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuOCwgYHJnYmEoMTAwLCAxNDksIDIzNywgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XG4gICAgLy8gZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKDY1LCAxMDUsIDIyNSwgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XG5cbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMjU1LCAyNTUsIDI1NSwke3BhcnRpY2xlc0FycmF5W2ldLm9wYWNpdHl9KWApOyAvLyB3aGl0ZVxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjgsIGByZ2JhKDIxMCwgMjM2LCAyNDIsJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgKTsgLy8gYmx1aXNoXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKDIzNywgMjQ3LCAyNDksJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueCxcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnksXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS5yYWRpdXMsXG4gICAgICAwLFxuICAgICAgTWF0aC5QSSAqIDIsXG4gICAgICBmYWxzZSxcbiAgICApO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgIGN0eC5maWxsKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZVNub3dGbGFrZXMoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBwYXJ0aWNsZXNBcnJheVtpXS54ICs9IHBhcnRpY2xlc0FycmF5W2ldLnNwZWVkWDtcbiAgICBwYXJ0aWNsZXNBcnJheVtpXS55ICs9IHBhcnRpY2xlc0FycmF5W2ldLnNwZWVkWTtcblxuICAgIGlmIChwYXJ0aWNsZXNBcnJheVtpXS55ID4gaCkge1xuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueCA9IE1hdGgucmFuZG9tKCkgKiB3ICogMS41O1xuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSA9IC01MDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlU25vd0ZhbGwoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG4gIGRyYXdTbm93Rmxha2VzKCk7XG4gIG1vdmVTbm93Rmxha2VzKCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVNub3dGbGFrZXMsIHVwZGF0ZVNub3dGYWxsIH07XG4iLCJpbXBvcnQgT2JzdGFjbGUgZnJvbSAnLi9vYnN0YWNsZSc7XG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGdhbWVTcGVlZCwgb2JzdGFjbGVzIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcblxuZnVuY3Rpb24gU3Bhd25PYnN0YWNsZSgpIHtcbiAgLy8gbGV0IHNpemUgPSBSYW5kb21JbnRSYW5nZSgyMCwgNzApO1xuICBjb25zdCB0eXBlID0gUmFuZG9tSW50UmFuZ2UoMywgNCk7XG5cbiAgY29uc3Qgb2JzdGFjbGUgPSBuZXcgT2JzdGFjbGUoe1xuICAgIHg6IGNhbnZhcy53aWR0aCxcbiAgICB5OiBjYW52YXMuaGVpZ2h0LFxuICAgIHdpZHRoOiA1MCxcbiAgICBoZWlnaHQ6IDUwLFxuICAgIGdhbWVTcGVlZCxcbiAgICBpbWFnZVNyYzogYGltYWdlcy9vYnN0YWNsZSR7dHlwZX0ucG5nYCxcbiAgfSk7XG5cbiAgb2JzdGFjbGVzLnB1c2gob2JzdGFjbGUpO1xufVxuXG5mdW5jdGlvbiBSYW5kb21JbnRSYW5nZShtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xufVxuXG5leHBvcnQgeyBTcGF3bk9ic3RhY2xlIH07XG4iLCJpbXBvcnQgSGVybyBmcm9tICcuL2hlcm8nO1xuaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0JztcbmltcG9ydCB7IFNwYXduT2JzdGFjbGUgfSBmcm9tICcuL3NwYXduX29ic3RhY2xlJztcbmltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVTbm93Rmxha2VzLCB1cGRhdGVTbm93RmFsbCB9IGZyb20gJy4vc25vd19mbGFrZXMnO1xuaW1wb3J0IEdhbWVTb3VuZCBmcm9tICcuL2dhbWUtc291bmQnO1xuaW1wb3J0IHsgZ2V0Q29pbiwgY29pbnNDb3VudGVyIH0gZnJvbSAnLi9nZXRfY29pbic7XG5pbXBvcnQgZ2V0Q2xvdWRzIGZyb20gJy4vZ2V0X2Nsb3Vkcyc7XG5pbXBvcnQgeyBsYW5nIH0gZnJvbSAnLi9sYW5nJztcbmltcG9ydCBnZXRQbGF0Zm9ybSBmcm9tICcuL2dldF9wbGF0Zm9ybSc7XG5pbXBvcnQgbWFpbiBmcm9tICcuL3BhZ2VzL21haW4nO1xuaW1wb3J0IHsgZGVhZCB9IGZyb20gJy4vcGFnZXMvZGVhZCc7XG5pbXBvcnQgZ2FtZU92ZXIgZnJvbSAnLi9wYWdlcy9nYW1lLW92ZXInO1xuXG4vLyBsZXQgbGl2ZXM7XG5sZXQgc2NvcmU7XG5sZXQgaGlnaFNjb3JlO1xubGV0IHNjb3JlVGV4dDtcbmxldCBoaWdodFNjb3JlVGV4dDtcbmxldCBsaXZlc1RleHQ7XG5sZXQgZ2FtZVNwZWVkO1xubGV0IHBsYXllcjtcbmxldCBvYnN0YWNsZXMgPSBbXTtcbmNvbnN0IGNvaW5zID0gW107XG5cbmNvbnN0IGtleXMgPSB7fTtcbmxldCBjb2luSW1hZ2U7XG5jb25zdCBwbGF5U291bmQgPSBuZXcgR2FtZVNvdW5kKCk7XG5cbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDIwNTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBrZXlzW2UuY29kZV0gPSB0cnVlO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAga2V5c1tlLmNvZGVdID0gZmFsc2U7XG4gIH0pO1xuXG4gIGN0eC5mb250ID0gJzIwcHggc2Fucy1zZXJpZic7XG5cbiAgZ2FtZVNwZWVkID0gMztcbiAgLy8gbGl2ZXMgPSAzO1xuICBzY29yZSA9IDA7XG4gIGhpZ2hTY29yZSA9IDA7XG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoc2NvcmUnKSkge1xuICAgIGhpZ2hTY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoc2NvcmUnKTtcbiAgfVxuXG4gIGNvaW5JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBjb2luSW1hZ2Uuc3JjID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Nwcml0ZUltYWdlJyk7XG5cbiAgcGxheWVyID0gbmV3IEhlcm8oe1xuICAgIGltYWdlOiBjb2luSW1hZ2UsXG4gICAgd2lkdGg6IDYwMCxcbiAgICBoZWlnaHQ6IDEwMCxcbiAgICBudW1iZXJPZkZyYW1lczogNixcbiAgICB0aWNrc1BlckZyYW1lOiA0LFxuICAgIHg6IDUwLFxuICAgIHk6IDUwLFxuICAgIHRlc3Q6IGNhbnZhcy5oZWlnaHQsXG4gIH0pO1xuXG4gIHBsYXllci5zdGFydCgpO1xuXG4gIHNjb3JlVGV4dCA9IG5ldyBUZXh0KFxuICAgIGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5zY29yZVR4dH0gJHtzY29yZX1gLCAyNSwgMjUsICdsZWZ0JywgJyMyMTIxMjEnLCAnMjAnLFxuICApO1xuICBsaXZlc1RleHQgPSBuZXcgVGV4dChcbiAgICBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0ubGl2ZXNUeHR9ICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpdmVzJyl9YCwgNTAwLCAyNSwgJ3JpZ2h0JywgJyMyMTIxMjEnLCAnMjAnLFxuICApO1xuICBoaWdodFNjb3JlVGV4dCA9IG5ldyBUZXh0KFxuICAgIGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5iZXN0U2NvcmVUeHR9ICR7aGlnaFNjb3JlfWAsIGNhbnZhcy53aWR0aCAtIDI1LCAyNSwgJ3JpZ2h0JywgJyMyMTIxMjEnLCAnMjAnLFxuICApO1xuXG4gIGNyZWF0ZVNub3dGbGFrZXMoKTtcbiAgLy8gcGxheVNvdW5kLnBsYXlGb24oKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKFVwZGF0ZSk7XG59XG5cbmNvbnN0IGluaXRpYWxTcGF3blRpbWVyID0gMjAwO1xubGV0IHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcblxuZnVuY3Rpb24gVXBkYXRlKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FuaW1hdGUnKSA9PT0gJ3RydWUnKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoVXBkYXRlKTtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIC8vINCy0YvQutC70Y7Rh9C40YLRjCDRhNC+0L3QvtCy0YPRjiDQvNGD0LfRi9C60YNcbiAgaWYgKGtleXMuS2V5USkge1xuICAgIHBsYXlTb3VuZC5zdG9wRm9uKCk7XG4gIH1cblxuICAvLyDQstC60LvRjtGH0LjRgtGMINGE0L7QvdC+0LLRg9GOINC80YPQt9GL0LrRg1xuICBpZiAoa2V5cy5LZXlBKSB7XG4gICAgcGxheVNvdW5kLnBsYXlGb24oKTtcbiAgfVxuXG4gIC8vIHNwYXduIG9ic3RhY2xlc1xuICBzcGF3blRpbWVyIC09IDE7XG4gIGlmIChzcGF3blRpbWVyIDw9IDApIHtcbiAgICBTcGF3bk9ic3RhY2xlKCk7XG4gICAgc3Bhd25UaW1lciA9IGluaXRpYWxTcGF3blRpbWVyIC0gZ2FtZVNwZWVkICogODtcblxuICAgIGlmIChzcGF3blRpbWVyIDwgNjApIHtcbiAgICAgIHNwYXduVGltZXIgPSA2MDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVTbm93RmFsbCgpO1xuXG4gIC8vIHNwYXduIGVuZW1pZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnN0YWNsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBvID0gb2JzdGFjbGVzW2ldO1xuXG4gICAgaWYgKG8ueCArIG8ud2lkdGggPCAwKSB7XG4gICAgICBvYnN0YWNsZXMuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIC8vINC/0LXRgNC10LfQsNCz0YDRg9C30LrQsCDQuNCz0YDRiyDQv9GA0Lgg0YHRgtC+0LvQutC90L7QstC10L3QuNC4XG4gICAgaWYgKFxuICAgICAgcGxheWVyLmR4IDwgby54ICsgby53aWR0aFxuICAgICAgJiYgcGxheWVyLmR4ICsgKHBsYXllci53aWR0aCAvIDEwKSAtIDEwID4gby54XG4gICAgICAmJiBwbGF5ZXIueSA8IG8ueSArIG8uaGVpZ2h0XG4gICAgICAmJiBwbGF5ZXIueSArIHBsYXllci5oZWlnaHQgPj0gby55XG4gICAgKSB7XG4gICAgICBwbGF5U291bmQucGxheURlYWQoKTtcbiAgICAgIG9ic3RhY2xlcyA9IFtdO1xuICAgICAgZ2FtZVNwZWVkID0gMztcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXZlcycsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXZlcycpIC0gMSk7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpdmVzJykgPT0gMCkge1xuICAgICAgICBnYW1lT3ZlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVhZC5zaG93KCk7XG4gICAgICB9XG4gICAgICBsaXZlc1RleHQudCA9IGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5saXZlc1R4dH0gJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGl2ZXMnKX1gO1xuICAgICAgc2NvcmUgPSAwO1xuICAgICAgcGxheWVyLmR4ID0gMDtcbiAgICAgIHBsYXllci55ID0gMDtcbiAgICAgIGNvaW5zQ291bnRlci5jb3VudGVyID0gMDtcbiAgICAgIHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaHNjb3JlJywgaGlnaFNjb3JlKTtcbiAgICB9XG4gICAgby5VcGRhdGUoKTtcbiAgfVxuXG4gIHNjb3JlICs9IDE7XG4gIHNjb3JlVGV4dC50ID0gYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLnNjb3JlVHh0fSAke3Njb3JlfWA7XG5cbiAgc2NvcmVUZXh0LkRyYXcoKTtcblxuICBpZiAoc2NvcmUgPiBoaWdoU2NvcmUpIHtcbiAgICBoaWdoU2NvcmUgPSBzY29yZTtcbiAgICBoaWdodFNjb3JlVGV4dC50ID0gYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLmJlc3RTY29yZVR4dH0gJHtoaWdoU2NvcmV9YDtcbiAgfVxuXG4gIGdhbWVTcGVlZCArPSAwLjAwMztcbiAgaGlnaHRTY29yZVRleHQuRHJhdygpO1xuICBsaXZlc1RleHQuRHJhdygpO1xuXG4gIC8vIHNwYXduIHBsYXRmb3JtXG4gIGdldFBsYXRmb3JtKCk7XG5cbiAgLy8gc3Bhd24gY29pblxuICBnZXRDb2luKCk7XG5cbiAgLy8gc3Bhd24gY2xvdWRzXG4gIGdldENsb3VkcygpO1xufVxuXG5leHBvcnQge1xuICBzdGFydCwgVXBkYXRlLCBnYW1lU3BlZWQsIG9ic3RhY2xlcywga2V5cywgc2NvcmUsIHBsYXllciwgY29pbnMsXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGN0eCB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCB7XHJcbiAgY29uc3RydWN0b3IodCwgeCwgeSwgYSwgYywgcykge1xyXG4gICAgdGhpcy50ID0gdDtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5hID0gYTtcclxuICAgIHRoaXMuYyA9IGM7XHJcbiAgICB0aGlzLnMgPSBzO1xyXG4gIH1cclxuXHJcbiAgRHJhdygpIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmM7XHJcbiAgICBjdHguZm9udCA9IGAke3RoaXMuc31weCBzYW5zLXNlcmlmYDtcclxuICAgIGN0eC50ZXh0QWxpZ24gPSB0aGlzLmE7XHJcbiAgICBjdHguZmlsbFRleHQodGhpcy50LCB0aGlzLngsIHRoaXMueSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
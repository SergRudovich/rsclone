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



var cloudsSet = [{
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
var clouds = [];
var random;
function getClouds() {
  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % 500 == 0) {
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
  coinsText = new _text__WEBPACK_IMPORTED_MODULE_3__.Text("".concat(_lang__WEBPACK_IMPORTED_MODULE_4__.lang[localStorage.getItem('langSelected')].coinsTxt, " ").concat(coinsCounter.counter), 350, 25, "right", "#212121", "20");
  coinsText.Draw();

  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % 200 == 0) {
    randTime = (0,_get_random_int__WEBPACK_IMPORTED_MODULE_5__.default)(20, 100);
    randTime += 200;
    coinY = randY[(0,_get_random_int__WEBPACK_IMPORTED_MODULE_5__.default)(0, 3)];
  }

  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % randTime == 0) {
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
  src: "images/platforma1.png",
  width: 495,
  height: 115,
  flightAltitude: 250
}, {
  src: "images/platforma2.png",
  width: 280,
  height: 115,
  flightAltitude: 300
}];
function getPlatform() {
  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % 200 == 0) {
    randTime = platformRandTime[(0,_get_random_int__WEBPACK_IMPORTED_MODULE_3__.default)(0, 4)];
  }

  if (_start_game__WEBPACK_IMPORTED_MODULE_0__.score % randTime == 0) {
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
if (!localStorage.getItem('langSelected')) localStorage.setItem('langSelected', 'en');
if (!localStorage.getItem('SpriteImage')) localStorage.setItem('SpriteImage', 'images/sprite2.png'); // window.gameState = {
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
  page.innerHTML = "\n  <div class=\"help-txt-wrapper\">\n  <p class=\"menuItem\" id='menuFieldSize'>\n  <label>".concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].selectLng, "</label>\n  <select id=\"selectLang\">\n      <option value=\"en\" selected=\"selected\">english</option>\n      <option value=\"ru\">\u0440\u0443\u0441\u0441\u043A\u0438\u0439</option>\n      <option value=\"br\">\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F</option>\n  </select>\n  </p>\n  <br><p>").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].selectPlayer, "</p>\n  <br>\n  <img src=\"img/sprite2_icon.png\" class=\"player2\" alt=\"player2\">\n  <img src=\"img/sprite1_icon.png\" class=\"player1\" alt=\"player1\">\n  </div>\n  <a class=\"btnflip start-help start\" href=\"#\">\n\t  <span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].startGameBtn, "</span>\n\t\t<span class=\"btnflip-item btnflip__center\"></span>\n\t\t<span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].startGameBtn, "</span>\n</a>\n\n<a class=\"btnflip options-help help\" href=\"#\">\n\t\t<span class=\"btnflip-item btnflip__front\">").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].helpBtn, "</span>\n\t\t<span class=\"btnflip-item btnflip__center\"></span>\n\t\t<span class=\"btnflip-item btnflip__back\">").concat(_lang__WEBPACK_IMPORTED_MODULE_3__.lang[lg].helpBtn, "</span>\n</a>\n  ");
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
var coinImage; // const jumpTrue = false;

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
  gameSpeed = 3; // gravity = 1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL1BsYXRmb3JtLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvY2xvdWQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9jb2luLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvZ2FtZS1zb3VuZC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dldF9jbG91ZHMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9nZXRfY29pbi5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dldF9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dldF9yYW5kb21faW50LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvaGVyby5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvbGFuZy5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL29ic3RhY2xlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGFnZXMvaGVscC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3BhZ2VzL21haW4uanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9wYWdlcy9vcHRpb25zLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGxheWVyLXNvdW5kLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvc25vd19mbGFrZXMuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9zcGF3bl9vYnN0YWNsZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3N0YXJ0X2dhbWUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJQbGF0Zm9ybSIsIm9wdGlvbnMiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZmxpZ2h0QWx0aXR1ZGUiLCJnYW1lU3BlZWQiLCJkeCIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJpbWFnZVNyYyIsInJlbmRlciIsImN0eCIsImNhbnZhcyIsIkNsb3VkIiwic3giLCJzeSIsInNXaWR0aCIsInNIZWlnaHQiLCJkeSIsImRXaWR0aCIsImRIZWlnaHQiLCJDb2luIiwiY29uc29sZSIsImxvZyIsInRpY2tzUGVyRnJhbWUiLCJudW1iZXJPZkZyYW1lcyIsImZyYW1lSW5kZXgiLCJ0aWNrQ291bnQiLCJhdWRpb09iaiIsIkF1ZGlvIiwicGxheSIsInVwZGF0ZSIsIkdhbWVTb3VuZCIsImZvblNvdW5kIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2b2x1bWUiLCJkZWFkU291bmQiLCJsb29wIiwicGF1c2UiLCJjbG91ZHNTZXQiLCJjbG91ZCIsImNsb3VkcyIsInJhbmRvbSIsImdldENsb3VkcyIsInNjb3JlIiwiZ2V0UmFuZG9tSW50IiwicHVzaCIsIm1hcCIsImNvaW4iLCJjb2lucyIsImNvaW5zVGV4dCIsImNvaW5zQ291bnRlciIsImNvdW50ZXIiLCJjb2luWSIsInJhbmRUaW1lIiwicmFuZFkiLCJnZXRDb2luIiwiVGV4dCIsImxhbmciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29pbnNUeHQiLCJEcmF3IiwibGVuZ3RoIiwiZm9yRWFjaCIsInN0YXJ0IiwicGxheWVyIiwicGxheUNvaW5Tb3VuZCIsInBsYXRmb3JtIiwicGxhdGZvcm1SYW5kVGltZSIsInBsYXRmb3JtcyIsInBsYXRmb3Jtc09wdGlvbnMiLCJnZXRQbGF0Zm9ybSIsInR5cGUiLCJmbGFnIiwibWluIiwibWF4IiwiTWF0aCIsImNlaWwiLCJmbG9vciIsIkhlcm8iLCJqdW1wRm9yY2UiLCJncm91bmRlZCIsImp1bXBUaW1lciIsImdyYXZpdHkiLCJpc0xlZnQiLCJ0ZXN0Iiwic291bmQiLCJQbGF5ZXJTb3VuZCIsImtleXMiLCJqdW1wVXAiLCJKdW1wIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJqdW1wRG93biIsImdyYXZpdHlHbyIsImdldFJlYWR5VG9KdW1wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib25sb2FkIiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJzZXRJdGVtIiwibWFpbiIsImVuIiwic2NvcmVUeHQiLCJiZXN0U2NvcmVUeHQiLCJzdGFydEdhbWVCdG4iLCJvcHRpb25zQnRuIiwic2VsZWN0TG5nIiwic2VsZWN0UGxheWVyIiwiaGVscEJ0biIsImhlbHBUeHQxIiwiaGVscFR4dDIiLCJoZWxwVHh0MyIsImhlbHBUeHQ0IiwiaGVscFR4dDUiLCJoZWxwVHh0NiIsImhlbHBUeHQ3IiwiaGVscFR4dDgiLCJydSIsImJyIiwiT2JzdGFjbGUiLCJoZWxwIiwibGciLCJwYWdlV3JhcHBlciIsInBhZ2UiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwic3RhcnRHYW1lIiwicmVtb3ZlIiwic3RhcnRCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwic2VsZWN0TGFuZyIsInZhbHVlIiwicGxheWVyMSIsInBsYXllcjIiLCJwbGF5ZXJTZWxlY3RlZCIsInNvdW5kVXAiLCJzb3VuZERvd24iLCJpc0dyYXZpdHlEb3duIiwiaXNKdW1wVXAiLCJjdXJyZW50VGltZSIsInBhcnRpY2xlc09uU2NyZWVuIiwidyIsImgiLCJwYXJ0aWNsZXNBcnJheSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNsaWVudFJlc2l6ZSIsImV2IiwiY3JlYXRlU25vd0ZsYWtlcyIsImkiLCJvcGFjaXR5Iiwic3BlZWRYIiwic3BlZWRZIiwicmFkaXVzIiwiZHJhd1Nub3dGbGFrZXMiLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwibW92ZVNub3dGbGFrZXMiLCJ1cGRhdGVTbm93RmFsbCIsImNsZWFyUmVjdCIsIlNwYXduT2JzdGFjbGUiLCJSYW5kb21JbnRSYW5nZSIsIm9ic3RhY2xlIiwib2JzdGFjbGVzIiwicm91bmQiLCJoaWdoU2NvcmUiLCJzY29yZVRleHQiLCJoaWdodFNjb3JlVGV4dCIsImNvaW5JbWFnZSIsInBsYXlTb3VuZCIsImUiLCJjb2RlIiwiVXBkYXRlIiwiaW5pdGlhbFNwYXduVGltZXIiLCJzcGF3blRpbWVyIiwiS2V5USIsInN0b3BGb24iLCJLZXlBIiwicGxheUZvbiIsIm8iLCJzcGxpY2UiLCJ0IiwiYSIsImMiLCJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFHcUJBLFE7QUFDbkIsb0JBQWFDLE9BQWIsRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0MsQ0FBTCxHQUFTRCxPQUFPLENBQUNDLENBQWpCO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTRixPQUFPLENBQUNFLENBQWpCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhSCxPQUFPLENBQUNHLEtBQXJCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjSixPQUFPLENBQUNJLE1BQXRCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkwsT0FBTyxDQUFDSyxjQUE5QjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJOLE9BQU8sQ0FBQ00sU0FBekI7QUFFQSxTQUFLQyxFQUFMLEdBQVUsQ0FBQyxLQUFLRCxTQUFoQjtBQUVBLFNBQUtFLEtBQUwsR0FBYSxJQUFJQyxLQUFKLEVBQWI7QUFDQSxTQUFLRCxLQUFMLENBQVdFLEdBQVgsR0FBaUJW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U0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNEOztBQVJIO0FBQUE7QUFBQSwyQkFXVTtBQUNONUwsdURBQUE7QUFDQUEsdURBQUEsR0FBZ0IsS0FBSzJMLENBQXJCO0FBQ0EzTCxrREFBQSxhQUFjLEtBQUs0TCxDQUFuQjtBQUNBNUwsdURBQUEsR0FBZ0IsS0FBSzBMLENBQXJCO0FBQ0ExTCxzREFBQSxDQUFhLEtBQUt5TCxDQUFsQixFQUFxQixLQUFLck0sQ0FBMUIsRUFBNkIsS0FBS0MsQ0FBbEM7QUFDQVcsdURBQUE7QUFDRDtBQWxCSDs7QUFBQTtBQUFBLEk7Ozs7OztVQ0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiIuL2pzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vaW5kZXguanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXRmb3JtIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgdGhpcy5mbGlnaHRBbHRpdHVkZSA9IG9wdGlvbnMuZmxpZ2h0QWx0aXR1ZGU7XG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XG5cbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLmltYWdlU3JjO1xuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy54LFxuICAgICAgY2FudmFzLmhlaWdodCAtIHRoaXMuZmxpZ2h0QWx0aXR1ZGUsXG4gICAgKVxuICB9XG5cbiAgLy8gc3RhcnQoKSB7XG4gIC8vICAgbGV0IGxvb3AgPSAoKSA9PiB7XG4gIC8vICAgICB0aGlzLnVwZGF0ZSgpO1xuICAvLyAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAvLyAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgLy8gICB9XG5cbiAgLy8gICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAvLyB9XG59XG5cblxuXG4iLCJpbXBvcnQge2NhbnZhcywgY3R4fSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7Z2FtZVNwZWVkIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG91ZCB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoO1xuICAgIHRoaXMuc3ggPSBvcHRpb25zLnN4O1xuICAgIHRoaXMuc3kgPSBvcHRpb25zLnN5O1xuICAgIHRoaXMuc1dpZHRoID0gb3B0aW9ucy5zV2lkdGg7XG4gICAgdGhpcy5zSGVpZ2h0ID0gb3B0aW9ucy5zSGVpZ2h0O1xuICAgIHRoaXMuZHkgPSBvcHRpb25zLmR5O1xuICAgIHRoaXMuZFdpZHRoID0gb3B0aW9ucy5zV2lkdGg7XG4gICAgdGhpcy5kSGVpZ2h0ID0gb3B0aW9ucy5zSGVpZ2h0O1xuXG4gICAgdGhpcy5keCA9IC1nYW1lU3BlZWQgLyBnYW1lU3BlZWQ7XG5cbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLnNyYztcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy54ICs9IHRoaXMuZHg7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIHRoaXMuc3gsXG4gICAgICB0aGlzLnN5LFxuICAgICAgdGhpcy5zV2lkdGgsXG4gICAgICB0aGlzLnNIZWlnaHQsXG4gICAgICB0aGlzLngsXG4gICAgICB0aGlzLmR5LFxuICAgICAgdGhpcy5kV2lkdGgsXG4gICAgICB0aGlzLmRIZWlnaHQsXG4gICAgKVxuICB9XG5cbn0iLCJpbXBvcnQge2NhbnZhcywgY3R4fSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29pbiB7XG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuXG4gICAgY29uc29sZS5sb2codGhpcy53aWR0aClcblxuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgXG4gICAgdGhpcy50aWNrc1BlckZyYW1lID0gb3B0aW9ucy50aWNrc1BlckZyYW1lIHx8IDA7XG4gICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IG9wdGlvbnMubnVtYmVyT2ZGcmFtZXMgfHwgMTtcblxuICAgIHRoaXMuZ2FtZVNwZWVkID0gb3B0aW9ucy5nYW1lU3BlZWQ7XG5cbiAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgIHRoaXMudGlja0NvdW50ID0gMDtcblxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XG5cbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSAnLi9pbWFnZXMvY29pbi5wbmcnO1xuXG4gICAgdGhpcy5hdWRpb09iaiA9IG5ldyBBdWRpbygnLi9zb3VuZC9jb2luMi5tcDMnKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcblxuICAgIHRoaXMudGlja0NvdW50Kys7XG5cbiAgICBpZiAodGhpcy50aWNrQ291bnQgPiB0aGlzLnRpY2tzUGVyRnJhbWUpIHtcbiAgICAgIHRoaXMudGlja0NvdW50ID0gMDtcbiAgICAgIGlmICh0aGlzLmZyYW1lSW5kZXggPCB0aGlzLm51bWJlck9mRnJhbWVzIC0gMSkge1xuICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIHRoaXMuZnJhbWVJbmRleCAqIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgMCxcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICB0aGlzLngsXG4gICAgICB0aGlzLnksXG4gICAgICB0aGlzLndpZHRoIC8gdGhpcy5udW1iZXJPZkZyYW1lcyxcbiAgICAgIHRoaXMuaGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgcGxheUNvaW5Tb3VuZCgpIHtcbiAgICB0aGlzLmF1ZGlvT2JqLnBsYXkoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNvdW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIHRoaXMudXJsID0gd2luZG93LmdhbWVTdGF0ZS5zb3VuZFVybDtcclxuICAgIC8vIHRoaXMubnVtID0gMTtcclxuICAgIHRoaXMuZm9uU291bmQgPSBuZXcgQXVkaW8oJ3NvdW5kL2ZvbjEubXAzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZm9uU291bmQpO1xyXG4gICAgdGhpcy5mb25Tb3VuZC52b2x1bWUgPSAwLjE7XHJcbiAgICB0aGlzLmRlYWRTb3VuZCA9IG5ldyBBdWRpbygnc291bmQvZGVhZC5tcDMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kZWFkU291bmQpO1xyXG4gIH1cclxuXHJcbiAgcGxheUZvbigpIHtcclxuICAgIHRoaXMuZm9uU291bmQubG9vcCA9IHRydWU7XHJcbiAgICB0aGlzLmZvblNvdW5kLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIHN0b3BGb24oKSB7XHJcbiAgICB0aGlzLmZvblNvdW5kLnBhdXNlKCk7XHJcbiAgfVxyXG5cclxuICBwbGF5RGVhZCgpIHtcclxuICAgIHRoaXMuZGVhZFNvdW5kLnBsYXkoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgc2NvcmUgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuaW1wb3J0ICBDbG91ZCAgZnJvbSAnLi9jbG91ZCc7XG5pbXBvcnQgZ2V0UmFuZG9tSW50IGZyb20gJy4vZ2V0X3JhbmRvbV9pbnQnO1xuXG5sZXQgY2xvdWRzU2V0ID0gW1xuICB7XG4gICAgc3JjOiBgaW1hZ2VzL2Nsb3Vkcy5wbmdgLFxuICAgIHN4OiAwLFxuICAgIHN5OiAwLFxuICAgIHNXaWR0aDogMjIwLFxuICAgIHNIZWlnaHQ6IDE2MCxcbiAgICBkeTogMTUwLFxuICAgIGRXaWR0aDogMjIwLFxuICAgIGRIZWlnaHQ6IDE2MCxcbiAgfSxcbiAge1xuICAgIHNyYzogYGltYWdlcy9jbG91ZHMucG5nYCxcbiAgICBzeDogMjUwLFxuICAgIHN5OiAwLFxuICAgIHNXaWR0aDogMjIwLFxuICAgIHNIZWlnaHQ6IDE2MCxcbiAgICBkeTogMTAwLFxuICAgIGRXaWR0aDogMjIwLFxuICAgIGRIZWlnaHQ6IDE2MCxcbiAgfSxcbl07XG5cbmxldCBjbG91ZDtcbmxldCBjbG91ZHMgPSBbXTtcbmxldCByYW5kb207XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsb3VkcygpIHtcbiAgaWYoc2NvcmUgJSA1MDAgPT0gMCl7ICAgXG4gICAgXG4gICAgcmFuZG9tID0gY2xvdWRzU2V0W2dldFJhbmRvbUludCgwLCAyKV07XG4gICAgY2xvdWQgPSBuZXcgQ2xvdWQocmFuZG9tKTtcblxuICAgIGNsb3Vkcy5wdXNoKGNsb3VkKTtcbiAgfVxuXG4gXG4gICAgY2xvdWRzLm1hcChjbG91ZCA9PiB7XG4gICAgICBjbG91ZC51cGRhdGUoKTtcbiAgICB9KTtcbiAgXG59XG4iLCJpbXBvcnQge3Njb3JlLCBwbGF5ZXIgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuaW1wb3J0IHtjYW52YXN9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IENvaW4gZnJvbSAnLi9jb2luJztcbmltcG9ydCB7Z2FtZVNwZWVkfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgeyBsYW5nIH0gZnJvbSAnLi9sYW5nJztcbmltcG9ydCAgZ2V0UmFuZG9tSW50ICBmcm9tICcuL2dldF9yYW5kb21faW50JztcblxubGV0IGNvaW47XG5sZXQgY29pbnMgPSBbXTtcblxuXG5sZXQgY29pbnNUZXh0O1xuLy8g0LTQvtC70LbQtdC9INCx0YvRgtGMINC40LzQtdC90L3QviDQvtCx0YzQtdC60YIg0LAg0L3QtSDQv9C10YDQtdC80LXQvdC90LDRjyDRgtC40L/QsCBsZXQgY29pbnNDb3VudGVyID0gMDtcbi8vINGD0LTQsNC70LjRgtGMINGN0YLQuCDRgdGC0YDQvtC60Lgg0YfQtdGA0LXQtyDQvdC10YHQutC+0LvRjNC60L4g0LrQvtC80LzQuNGC0L7QsilcbmV4cG9ydCBsZXQgY29pbnNDb3VudGVyID0ge1xuICBjb3VudGVyOiAwLFxufTtcblxubGV0IGNvaW5ZO1xubGV0IHJhbmRUaW1lO1xubGV0IHJhbmRZID0gW1xuICB7XG4gICAgeTogMzUwLFxuICB9LFxuICB7XG4gICAgeTogNjAwLFxuICB9LFxuICB7XG4gICAgeTogMzAwLFxuICB9LFxuXTtcblxuXG5cbmZ1bmN0aW9uIGdldENvaW4gKCkge1xuXG4gIGNvaW5zVGV4dCA9IG5ldyBUZXh0KFxuICAgIGAke2xhbmdbbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpXS5jb2luc1R4dH0gJHtjb2luc0NvdW50ZXIuY291bnRlcn1gLCAzNTAsIDI1LCBcInJpZ2h0XCIsIFwiIzIxMjEyMVwiLCBcIjIwXCJcbiAgKTtcblxuICBjb2luc1RleHQuRHJhdygpO1xuXG5cblxuICBpZihzY29yZSAlIDIwMCA9PSAwKSB7XG4gICAgcmFuZFRpbWUgPSBnZXRSYW5kb21JbnQoMjAsIDEwMCk7XG4gICAgcmFuZFRpbWUgKz0gMjAwO1xuICAgIGNvaW5ZID0gcmFuZFlbZ2V0UmFuZG9tSW50KDAsIDMpXTtcbiAgfVxuXG5cbiAgaWYoc2NvcmUgJSByYW5kVGltZSA9PSAwKSB7IFxuXG4gICAgY29pbiA9IG5ldyBDb2luKHtcbiAgICAgIHg6IGNhbnZhcy53aWR0aCxcbiAgICAgIHk6IGNvaW5ZLnksXG4gICAgICB3aWR0aDogNTA0LFxuICAgICAgaGVpZ2h0OiA4NCxcbiAgICAgIG51bWJlck9mRnJhbWVzOiA2LFxuICAgICAgdGlja3NQZXJGcmFtZTogNCxcbiAgICAgIGdhbWVTcGVlZDogZ2FtZVNwZWVkLFxuICAgIH0pO1xuXG4gICAgY29pbnMucHVzaChjb2luKTtcbiAgfVxuXG5cbiAgaWYoY29pbnMubGVuZ3RoID4gMCkge1xuXG4gICAgY29pbnMuZm9yRWFjaChjb2luID0+IHtcbiAgICAgIGNvaW4uc3RhcnQoKTtcbiAgICAgIFxuICAgICAgaWYgKFxuICAgICAgICBwbGF5ZXIuZHggPCBjb2luLnggKyAoY29pbi53aWR0aCAvIDYpICYmXG4gICAgICAgIHBsYXllci5keCArIChwbGF5ZXIud2lkdGggLyAxMCkgLSAxMCA+IGNvaW4ueCAmJlxuICAgICAgICBwbGF5ZXIueSA8IGNvaW4ueSArIGNvaW4uaGVpZ2h0ICYmXG4gICAgICAgIHBsYXllci55ICsgcGxheWVyLmhlaWdodCA+PSBjb2luLnlcbiAgICAgICkge1xuICAgICAgICBcbiAgICAgICAgY29pbi55ID0gMTAwMDA7XG4gICAgICAgIGNvaW4ucGxheUNvaW5Tb3VuZCgpO1xuICAgICAgICBjb2luc0NvdW50ZXIuY291bnRlciArPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29pbi54IDwgLTUwKSB7IFxuICAgICAgICBjb2luLnkgPSAxMDAwMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQge2dldENvaW59XG4iLCJpbXBvcnQgeyBzY29yZSwgcGxheWVyLCBnYW1lU3BlZWQgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgUGxhdGZvcm0gZnJvbSAnLi9QbGF0Zm9ybSc7XG5pbXBvcnQgZ2V0UmFuZG9tSW50IGZyb20gJy4vZ2V0X3JhbmRvbV9pbnQnO1xuXG5sZXQgcGxhdGZvcm07XG5cbmxldCByYW5kVGltZTtcbmxldCBwbGF0Zm9ybVJhbmRUaW1lID0gWzIwMCwgMjIwLCAyNTAsIDMwMF07XG5cbmxldCBwbGF0Zm9ybXMgPSBbXTtcbmxldCBwbGF0Zm9ybXNPcHRpb25zID0gW1xuICB7XG4gICAgc3JjOiBgaW1hZ2VzL3BsYXRmb3JtYTEucG5nYCxcbiAgICB3aWR0aDogNDk1LFxuICAgIGhlaWdodDogMTE1LFxuICAgIGZsaWdodEFsdGl0dWRlOiAyNTAsXG4gIH0sXG4gIHtcbiAgICBzcmM6IGBpbWFnZXMvcGxhdGZvcm1hMi5wbmdgLFxuICAgIHdpZHRoOiAyODAsXG4gICAgaGVpZ2h0OiAxMTUsXG4gICAgZmxpZ2h0QWx0aXR1ZGU6IDMwMCxcbiAgfVxuXTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQbGF0Zm9ybSgpe1xuXG4gIGlmKHNjb3JlICUgMjAwID09IDApe1xuICAgIHJhbmRUaW1lID0gcGxhdGZvcm1SYW5kVGltZVtnZXRSYW5kb21JbnQoMCwgNCldO1xuICB9XG4gIFxuICBpZihzY29yZSAlIHJhbmRUaW1lID09IDApeyAgICBcblxuICAgIGxldCB0eXBlID0gZ2V0UmFuZG9tSW50KDAsIDIpO1xuICAgIHR5cGUgPSBwbGF0Zm9ybXNPcHRpb25zW3R5cGVdO1xuXG4gICAgcGxhdGZvcm0gPSBuZXcgUGxhdGZvcm0oe1xuICAgICAgeDogY2FudmFzLndpZHRoLFxuICAgICAgeTogY2FudmFzLmhlaWdodCxcbiAgICAgIGZsaWdodEFsdGl0dWRlOiB0eXBlLmZsaWdodEFsdGl0dWRlLFxuICAgICAgd2lkdGg6IHR5cGUud2lkdGgsXG4gICAgICBoZWlnaHQ6IHR5cGUuaGVpZ2h0LFxuICAgICAgZ2FtZVNwZWVkOiBnYW1lU3BlZWQsXG4gICAgICBpbWFnZVNyYzogdHlwZS5zcmMsXG4gICAgfSk7XG5cbiAgICBwbGF0Zm9ybXMucHVzaChwbGF0Zm9ybSk7XG4gIH1cblxuXG4gIGxldCBmbGFnID0gZmFsc2U7XG5cbiAgZm9yKGxldCBwbGF0Zm9ybSBvZiBwbGF0Zm9ybXMpIHtcbiAgICBwbGF0Zm9ybS51cGRhdGUoKTtcblxuICAgIGlmIChcbiAgICAgIChwbGF5ZXIuZHggPiBwbGF0Zm9ybS54ICYmIHBsYXllci5keCA8IHBsYXRmb3JtLnggKyBwbGF0Zm9ybS53aWR0aCAtIDQwKVxuICAgICAgJiYgcGxheWVyLnkgPCBjYW52YXMuaGVpZ2h0IC0gcGxhdGZvcm0uZmxpZ2h0QWx0aXR1ZGVcbiAgICApIHtcbiAgICAgIHBsYXllci50ZXN0ID0gY2FudmFzLmhlaWdodCAtIHBsYXRmb3JtLmZsaWdodEFsdGl0dWRlICsgMjtcbiAgICAgIGZsYWcgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWZsYWcpIHtcbiAgICAgICAgcGxheWVyLnRlc3QgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICBmbGFnID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjsgLy8g0JzQsNC60YHQuNC80YPQvCDQvdC1INCy0LrQu9GO0YfQsNC10YLRgdGPLCDQvNC40L3QuNC80YPQvCDQstC60LvRjtGH0LDQtdGC0YHRj1xufSIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBrZXlzIH0gZnJvbSAnLi9zdGFydF9nYW1lJztcbmltcG9ydCBQbGF5ZXJTb3VuZCBmcm9tICcuL3BsYXllci1zb3VuZCc7XG5pbXBvcnQgbWFpbiBmcm9tICcuL3BhZ2VzL21haW4nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVybyB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmltYWdlID0gb3B0aW9ucy5pbWFnZTtcblxuICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgdGhpcy50aWNrQ291bnQgPSAwO1xuICAgIHRoaXMudGlja3NQZXJGcmFtZSA9IG9wdGlvbnMudGlja3NQZXJGcmFtZSB8fCAwO1xuICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSBvcHRpb25zLm51bWJlck9mRnJhbWVzIHx8IDE7XG5cbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuXG4gICAgdGhpcy5keSA9IG9wdGlvbnMuZHkgfHwgMDtcbiAgICB0aGlzLmR4ID0gMDtcbiAgICB0aGlzLnN4ID0gMDtcbiAgICB0aGlzLmp1bXBGb3JjZSA9IDE1O1xuICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBUaW1lciA9IDA7XG5cbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgdGhpcy54ID0gb3B0aW9ucy54O1xuICAgIHRoaXMuZ3Jhdml0eSA9IDE7XG5cbiAgICB0aGlzLmlzTGVmdCA9IGZhbHNlO1xuXG4gICAgLy8gcGxhdGZvcm1cbiAgICB0aGlzLnRlc3QgPSBvcHRpb25zLnRlc3Q7XG5cbiAgICB0aGlzLnNvdW5kID0gbmV3IFBsYXllclNvdW5kKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy50aWNrQ291bnQgKz0gMTtcblxuICAgIGlmICh0aGlzLnRpY2tDb3VudCA+IHRoaXMudGlja3NQZXJGcmFtZSkge1xuICAgICAgdGhpcy50aWNrQ291bnQgPSAwO1xuICAgICAgaWYgKHRoaXMuZnJhbWVJbmRleCA8IHRoaXMubnVtYmVyT2ZGcmFtZXMgLSAxKSB7XG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICAodGhpcy5mcmFtZUluZGV4ICogdGhpcy53aWR0aCkgLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgdGhpcy5zeCxcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICB0aGlzLmR4LFxuICAgICAgdGhpcy55LFxuICAgICAgdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICApO1xuICB9XG5cbiAgLy8gZ3Jhdml0eVxuICAvLyBncmF2aXR5R28oKSB7XG4gIC8vICAgY29uc29sZS5sb2codGhpcy50ZXN0KVxuICAvLyAgIHRoaXMueSArPSB0aGlzLmR5O1xuXG4gIC8vICAgaWYgKHRoaXMueSArIHRoaXMuaGVpZ2h0IDwgY2FudmFzLmhlaWdodCkge1xuICAvLyAgICAgdGhpcy5keSArPSB0aGlzLmdyYXZpdHk7XG4gIC8vICAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHRoaXMuZHkgPSAwO1xuICAvLyAgICAgdGhpcy5ncm91bmRlZCA9IHRydWU7XG4gIC8vICAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQ7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgZ3Jhdml0eUdvKCkge1xuICAgIHRoaXMueSArPSB0aGlzLmR5O1xuXG4gICAgaWYgKHRoaXMueSArIHRoaXMuaGVpZ2h0IDwgdGhpcy50ZXN0KSB7XG4gICAgICB0aGlzLmR5ICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLmR5ID4gMCkge1xuICAgICAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gMTtcbiAgICAgICAgaWYgKHRoaXMuaXNMZWZ0KSB7XG4gICAgICAgICAgdGhpcy5zeCA9IDMwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN4ID0gNDAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHkgPSAwO1xuICAgICAgdGhpcy5ncm91bmRlZCA9IHRydWU7XG4gICAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gNjtcbiAgICAgIGlmICh0aGlzLmlzTGVmdCkge1xuICAgICAgICB0aGlzLnN4ID0gMTAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zeCA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLnkgPSB0aGlzLnRlc3QgLSB0aGlzLmhlaWdodDtcbiAgICB9XG4gIH1cblxuICAvLyBqdW1wXG4gIGdldFJlYWR5VG9KdW1wKCkge1xuICAgIGlmIChrZXlzLlNwYWNlIHx8IGtleXMuS2V5VyB8fCBrZXlzLkFycm93VXApIHtcbiAgICAgIHRoaXMuc291bmQuanVtcFVwKCk7XG4gICAgICB0aGlzLkp1bXAoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5qdW1wVGltZXIgPSAwO1xuICAgIH1cbiAgICBpZiAoa2V5cy5LZXlNIHx8IGtleXMuQXJyb3dSaWdodCkge1xuICAgICAgaWYgKHRoaXMuZHggPCBjYW52YXMud2lkdGggLSAxMDApIHRoaXMuZHggKz0gNTtcbiAgICAgIHRoaXMuc3ggPSAwO1xuICAgICAgdGhpcy5pc0xlZnQgPSBmYWxzZTtcbiAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSA2O1xuICAgIH1cbiAgICBpZiAoa2V5cy5LZXlOIHx8IGtleXMuQXJyb3dMZWZ0KSB7XG4gICAgICBpZiAodGhpcy5keCA+IDApIHRoaXMuZHggLT0gNTtcbiAgICAgIHRoaXMuc3ggPSAxMDA7XG4gICAgICB0aGlzLmlzTGVmdCA9IHRydWU7XG4gICAgICB0aGlzLm51bWJlck9mRnJhbWVzID0gNjtcbiAgICB9XG4gICAgaWYgKGtleXMuRXNjYXBlKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICB9XG5cbiAgSnVtcCgpIHtcbiAgICBpZiAodGhpcy5ncm91bmRlZCAmJiB0aGlzLmp1bXBUaW1lciA9PT0gMCkge1xuICAgICAgdGhpcy5qdW1wVGltZXIgPSAxO1xuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZTtcbiAgICAgIHRoaXMuc291bmQuanVtcERvd24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuanVtcFRpbWVyID4gMCAmJiB0aGlzLmp1bXBUaW1lciA8IDE1KSB7XG4gICAgICB0aGlzLmp1bXBUaW1lciArPSAxO1xuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZSAtICh0aGlzLmp1bXBUaW1lciAvIDUwKTtcbiAgICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSAxO1xuICAgICAgaWYgKHRoaXMuaXNMZWZ0KSB7XG4gICAgICAgIHRoaXMuc3ggPSAyMDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN4ID0gNTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIHRoaXMuZ3Jhdml0eUdvKCk7XG4gICAgICB0aGlzLmdldFJlYWR5VG9KdW1wKCk7XG5cbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfTtcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfTtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8vIGltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5pbXBvcnQgeyBPYnN0YWNsZSB9IGZyb20gJy4vb2JzdGFjbGUnO1xyXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi90ZXh0JztcclxuaW1wb3J0IHsgc3RhcnQgfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xyXG5pbXBvcnQgbWFpbiBmcm9tICcuL3BhZ2VzL21haW4nO1xyXG5cclxuLy8gbGV0IGtleXMgPSB7fTtcclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xyXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZ1NlbGVjdGVkJywgJ2VuJyk7XHJcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Nwcml0ZUltYWdlJykpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdTcHJpdGVJbWFnZScsICdpbWFnZXMvc3ByaXRlMi5wbmcnKTtcclxuXHJcbi8vIHdpbmRvdy5nYW1lU3RhdGUgPSB7XHJcbi8vICAgc291bmRVcmw6ICcuLi8uL2Rpc3Qvc291bmQvJyxcclxuLy8gICBpbWdVcmw6ICcuLi8uL2Rpc3QvaW1nLycsXHJcbi8vICAgaXNGb25Tb3VuZDogdHJ1ZSxcclxuLy8gICBpc1BsYXllclNvdW5kOiB0cnVlLFxyXG4vLyAgIHNldCBpc1N0YXJ0R2FtZSh2YWx1ZSkge1xyXG4vLyAgICAgU3RhcnQoKTtcclxuLy8gICB9LFxyXG4vLyB9O1xyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbi8vICAga2V5c1tlLmNvZGVdID0gdHJ1ZTtcclxuLy8gfSk7XHJcbi8vXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuLy8gICBrZXlzW2UuY29kZV0gPSBmYWxzZTtcclxuLy8gfSk7XHJcblxyXG5tYWluKCk7XHJcbi8vIHN0YXJ0KCk7XHJcblxyXG4vLyBleHBvcnQge2NhbnZhcywgY3R4LCBrZXlzfVxyXG5leHBvcnQgeyBjYW52YXMsIGN0eCB9O1xyXG4iLCJjb25zdCBsYW5nID0ge1xuICBlbjoge1xuICAgIHNjb3JlVHh0OiAnU2NvcmU6JyxcbiAgICBjb2luc1R4dDogJ0NvaW5zOicsXG4gICAgYmVzdFNjb3JlVHh0OiAnQmVzdCBzY29yZTonLFxuICAgIHN0YXJ0R2FtZUJ0bjogJ1N0YXJ0IEdhbWUnLFxuICAgIG9wdGlvbnNCdG46ICdPcHRpb25zJyxcbiAgICBzZWxlY3RMbmc6ICdTZWxlY3QgbGFuZ3VhZ2U6JyxcbiAgICBzZWxlY3RQbGF5ZXI6ICdTZWxlY3QgcGxheWVyOicsXG4gICAgaGVscEJ0bjogJ0hlbHAnLFxuICAgIGhlbHBUeHQxOiAnWW91ciBtaXNzaW9uIGlzIHRvIGNvbGxlY3QgYWxsIHRoZSBjb2lucy4gVG8gZG8gdGhpcyB5b3Ugb25seSBoYXZlIGEgY2VydGFpbiBudW1iZXIgIG9mIGxpdmVzLiBZb3UgY2FuIGp1bXAsIG1vdmUgbGVmdCBhbmQgcmlnaHQgd2l0aGluIHNjcmVlbi4nLFxuICAgIGhlbHBUeHQyOiAnS2V5Ym9hcmQgQ29udHJvbDonLFxuICAgIGhlbHBUeHQzOiAnVywgU3BhY2UsIF4gLSBKVU1QJyxcbiAgICBoZWxwVHh0NDogJ00sID4gLSBNT1ZFIFJJR0hUJyxcbiAgICBoZWxwVHh0NTogJ04sIDwgLSBNT1ZFIExFRlQnLFxuICAgIGhlbHBUeHQ2OiAnQSAtIE1VU0lDIE9OJyxcbiAgICBoZWxwVHh0NzogJ1EgLSBNVVNJQyBPRkYnLFxuICAgIGhlbHBUeHQ4OiAnRXNjIC0gTUFJTiBNRU5VJyxcbiAgfSxcbiAgcnU6IHtcbiAgICBzY29yZVR4dDogJ9Cg0LXQt9GD0LvRjNGC0LDRgjonLFxuICAgIGNvaW5zVHh0OiAn0JzQvtC90LXRgtGLOicsXG4gICAgYmVzdFNjb3JlVHh0OiAn0JvRg9GH0YjQuNC5INGA0LXQt9GD0LvRjNGC0LDRgjonLFxuICAgIHN0YXJ0R2FtZUJ0bjogJ9Cd0LDRh9Cw0YLRjCDQuNCz0YDRgycsXG4gICAgb3B0aW9uc0J0bjogJ9Cd0LDRgdGC0YDQvtC50LrQuCcsXG4gICAgc2VsZWN0TG5nOiAn0JLRi9Cx0LXRgNC40YLQtSDRj9C30YvQujonLFxuICAgIHNlbGVjdFBsYXllcjogJ9CS0YvQsdC10YDQuNGC0LUg0LjQs9GA0L7QutCwOicsXG4gICAgaGVscEJ0bjogJ9Cf0L7QvNC+0YnRjCcsXG4gICAgaGVscFR4dDE6ICfQktCw0YjQsCDQt9Cw0LTQsNGH0LAg0YHQvtCx0YDQsNGC0Ywg0LLRgdC1INC80L7QvdC10YLRiy4g0JTQu9GPINGN0YLQvtCz0L4g0YMg0LLQsNGBINC10YHRgtGMINC+0L/RgNC10LTQtdC70LXQvdC90L7QuSDQutC+0LvQuNGH0LXRgdGC0LLQviDQttC40LfQvdC10LkuINCS0Ysg0LzQvtC20LXRgtC1INC/0YDRi9Cz0LDRgtGMLCDQuNC00YLQuCDQstC70LXQstC+INC4INCy0L/RgNCw0LLQviDQsiDQv9GA0LXQtNC10LvQsNGFINGN0LrRgNCw0L3QsC4nLFxuICAgIGhlbHBUeHQyOiAn0JrQu9Cw0LLQuNGI0Lgg0YPQv9GA0LDQstC70LXQvdC40Y86JyxcbiAgICBoZWxwVHh0MzogJ1csIFNwYWNlLCBeIC0g0J/RgNGL0LbQvtC6JyxcbiAgICBoZWxwVHh0NDogJ00sID4gLSDQmNC00YLQuCDQstC/0YDQsNCy0L4nLFxuICAgIGhlbHBUeHQ1OiAnTiwgPCAtINCY0LTRgtC4INCy0LvQtdCy0L4nLFxuICAgIGhlbHBUeHQ2OiAnQSAtINCS0LrQu9GO0YfQuNGC0Ywg0LzRg9C30YvQutGDJyxcbiAgICBoZWxwVHh0NzogJ1EgLSDQktGL0LrQu9GO0YfQuNGC0Ywg0LzRg9C30YvQutGDJyxcbiAgICBoZWxwVHh0ODogJ0VzYyAtINCT0LvQsNCy0L3QvtC1INC80LXQvdGOJyxcbiAgfSxcbiAgYnI6IHtcbiAgICBzY29yZVR4dDogJ9CS0YvQvdGW0Lo6JyxcbiAgICBjb2luc1R4dDogJ9Cc0LDQvdC10YLRizonLFxuICAgIGJlc3RTY29yZVR4dDogJ9Cb0LXQv9GI0Ysg0LLRi9C90ZbQujonLFxuICAgIHN0YXJ0R2FtZUJ0bjogJ9Cf0LDRh9Cw0YLRjCDRltCz0YDRgycsXG4gICAgb3B0aW9uc0J0bjogJ9Ce0L/RhtGL0ZYnLFxuICAgIHNlbGVjdExuZzogJ9CS0YvQsdC10YDRi9GG0LUg0LzQvtCy0YM6JyxcbiAgICBzZWxlY3RQbGF5ZXI6ICfQktGL0LHQtdGA0YvRhtC1INC/0LXRgNGB0LDQvdCw0LbQsDonLFxuICAgIGhlbHBCdG46ICfQlNCw0L/QsNC80L7Qs9CwJyxcbiAgICBoZWxwVHh0MTogJ9CS0LDRiNCwINC30LDQtNCw0YfQsCDRgdCw0LHRgNCw0YbRjCDRg9GB0LUg0LzQsNC90LXRgtGLLiDQlNC70Y8g0LPRjdGC0LDQs9CwINGeINCy0LDRgSDRkdGB0YbRjCDQv9GN0Z7QvdCw0Lkg0LrQvtC70YzQutCw0YHRhtGMINC20YvRhtGG0Y/Rni4g0JLRiyDQvNC+0LbQsNGG0LUg0YHQutCw0LrQsNGG0YwsINGW0YHRhtGWINC90LDQu9C10LLQsCDRliDQvdCw0L/RgNCw0LLQsCDRniDQvNC10LbQsNGFINGN0LrRgNCw0L3QsC4nLFxuICAgIGhlbHBUeHQyOiAn0JrQu9Cw0LLRltGI0Ysg0LrRltGA0LDQstCw0L3QvdGPOicsXG4gICAgaGVscFR4dDM6ICdXLCBTcGFjZSwgXiAtINCf0YDRi9C20L7QuicsXG4gICAgaGVscFR4dDQ6ICdNLCA+IC0gSdGB0YbRliDQvdCw0LvQtdCy0LAnLFxuICAgIGhlbHBUeHQ1OiAnTiwgPCAtIEnRgdGG0ZYg0L3QsNC/0YDQsNCy0LAnLFxuICAgIGhlbHBUeHQ2OiAnQSAtINCj0LrQu9GO0YfRi9GG0Ywg0LzRg9C30YvQutGDJyxcbiAgICBoZWxwVHh0NzogJ1EgLSDQktGL0LrQu9GO0YfRi9GG0Ywg0LzRg9C30YvQutGDJyxcbiAgICBoZWxwVHh0ODogJ0VzYyAtINCT0LDQu9C+0Z7QvdCw0LUg0LzQtdC90Y4nLFxuICB9LFxufTtcblxuZXhwb3J0IHsgbGFuZyB9O1xuIiwiaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9pbmRleC5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzdGFjbGUge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICB0aGlzLmdhbWVTcGVlZCA9IG9wdGlvbnMuZ2FtZVNwZWVkO1xuXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IG9wdGlvbnMuaW1hZ2VTcmM7XG4gIH1cblxuICBVcGRhdGUgKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICB0aGlzLngsXG4gICAgICBjYW52YXMuaGVpZ2h0IC0gNTUsXG4gICAgKVxuICB9XG5cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSAnLi4vc3RhcnRfZ2FtZSc7XHJcbmltcG9ydCB7IGxhbmcgfSBmcm9tICcuLi9sYW5nJztcclxuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlbHAoKSB7XHJcbiAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIGNvbnN0IGxnID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdTZWxlY3RlZCcpO1xyXG4gIGNvbnN0IHBhZ2VXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2Utd3JhcHBlcicpO1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScsICdwYWdlLWltYWdlJyk7XHJcbiAgcGFnZS5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImhlbHAtdHh0LXdyYXBwZXJcIj5cclxuICAke2xhbmdbbGddLmhlbHBUeHQxfVxyXG4gIDxwPiR7bGFuZ1tsZ10uaGVscFR4dDJ9PC9wPlxyXG4gICR7bGFuZ1tsZ10uaGVscFR4dDN9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDR9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDV9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDZ9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDd9XHJcbiAgPGJyPiR7bGFuZ1tsZ10uaGVscFR4dDh9XHJcbiAgPC9kaXY+XHJcbiAgPGEgY2xhc3M9XCJidG5mbGlwIHN0YXJ0LWhlbHAgc3RhcnRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLnN0YXJ0R2FtZUJ0bn08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+JHtsYW5nW2xnXS5zdGFydEdhbWVCdG59PC9zcGFuPlxyXG4gIDwvYT5cclxuICBcclxuICA8YSBjbGFzcz1cImJ0bmZsaXAgb3B0aW9ucy1oZWxwIG9wdGlvbnNcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLm9wdGlvbnNCdG59PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10ub3B0aW9uc0J0bn08L3NwYW4+XHJcbiAgPC9hPlxyXG4gIGA7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICAgIHBhZ2VXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBjYW52YXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBzdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgcGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbiAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucycpO1xyXG4gIG9wdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBvcHRpb25zKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IHsgc3RhcnQgfSBmcm9tICcuLi9zdGFydF9nYW1lJztcclxuaW1wb3J0IGhlbHAgZnJvbSAnLi9oZWxwJztcclxuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcclxuaW1wb3J0IHsgbGFuZyB9IGZyb20gJy4uL2xhbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbigpIHtcclxuICBjYW52YXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgY29uc3QgbGcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyk7XHJcbiAgY29uc3QgcGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS13cmFwcGVyJyk7XHJcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJywgJ3BhZ2UtaW1hZ2UnKTtcclxuICBwYWdlLmlubmVySFRNTCA9IGBcclxuPGEgY2xhc3M9XCJidG5mbGlwIHN0YXJ0LW1haW4gc3RhcnRcIiBocmVmPVwiI1wiPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLnN0YXJ0R2FtZUJ0bn08L3NwYW4+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+JHtsYW5nW2xnXS5zdGFydEdhbWVCdG59PC9zcGFuPlxyXG48L2E+XHJcblxyXG48YSBjbGFzcz1cImJ0bmZsaXAgb3B0aW9ucy1tYWluIG9wdGlvbnNcIiBocmVmPVwiI1wiPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLm9wdGlvbnNCdG59PC9zcGFuPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10ub3B0aW9uc0J0bn08L3NwYW4+XHJcbjwvYT5cclxuXHJcbjxhIGNsYXNzPVwiYnRuZmxpcCBoZWxwLW1haW4gaGVscFwiIGhyZWY9XCIjXCI+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19mcm9udFwiPiR7bGFuZ1tsZ10uaGVscEJ0bn08L3NwYW4+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+JHtsYW5nW2xnXS5oZWxwQnRufTwvc3Bhbj5cclxuPC9hPlxyXG5cclxuICBgO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgICBwYWdlV3JhcHBlci5pbm5lckhUTUwgPSAnJztcclxuICAgIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIHBhZ2VXcmFwcGVyLmFwcGVuZENoaWxkKHBhZ2UpO1xyXG4gIHBhZ2VXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cclxuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xyXG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcclxuXHJcbiAgY29uc3QgaGVscEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWxwJyk7XHJcbiAgaGVscEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGhlbHAoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb3B0aW9uc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zJyk7XHJcbiAgb3B0aW9uc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG9wdGlvbnMoKTtcclxuICB9KTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IHsgY2FudmFzIH0gZnJvbSAnLi4vaW5kZXgnO1xyXG5pbXBvcnQgeyBzdGFydCB9IGZyb20gJy4uL3N0YXJ0X2dhbWUnO1xyXG5pbXBvcnQgaGVscCBmcm9tICcuL2hlbHAnO1xyXG5pbXBvcnQgeyBsYW5nIH0gZnJvbSAnLi4vbGFuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcHRpb25zKCkge1xyXG4gIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICBjb25zdCBsZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKTtcclxuICBjb25zdCBwYWdlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXdyYXBwZXInKTtcclxuICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnLCAncGFnZS1pbWFnZScpO1xyXG4gIHBhZ2UuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJoZWxwLXR4dC13cmFwcGVyXCI+XHJcbiAgPHAgY2xhc3M9XCJtZW51SXRlbVwiIGlkPSdtZW51RmllbGRTaXplJz5cclxuICA8bGFiZWw+JHtsYW5nW2xnXS5zZWxlY3RMbmd9PC9sYWJlbD5cclxuICA8c2VsZWN0IGlkPVwic2VsZWN0TGFuZ1wiPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiZW5cIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+ZW5nbGlzaDwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwicnVcIj7RgNGD0YHRgdC60LjQuTwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiYnJcIj7QsdC10LvQsNGA0YPRgdC60LDRjzwvb3B0aW9uPlxyXG4gIDwvc2VsZWN0PlxyXG4gIDwvcD5cclxuICA8YnI+PHA+JHtsYW5nW2xnXS5zZWxlY3RQbGF5ZXJ9PC9wPlxyXG4gIDxicj5cclxuICA8aW1nIHNyYz1cImltZy9zcHJpdGUyX2ljb24ucG5nXCIgY2xhc3M9XCJwbGF5ZXIyXCIgYWx0PVwicGxheWVyMlwiPlxyXG4gIDxpbWcgc3JjPVwiaW1nL3Nwcml0ZTFfaWNvbi5wbmdcIiBjbGFzcz1cInBsYXllcjFcIiBhbHQ9XCJwbGF5ZXIxXCI+XHJcbiAgPC9kaXY+XHJcbiAgPGEgY2xhc3M9XCJidG5mbGlwIHN0YXJ0LWhlbHAgc3RhcnRcIiBocmVmPVwiI1wiPlxyXG5cdCAgPHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLnN0YXJ0R2FtZUJ0bn08L3NwYW4+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19jZW50ZXJcIj48L3NwYW4+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImJ0bmZsaXAtaXRlbSBidG5mbGlwX19iYWNrXCI+JHtsYW5nW2xnXS5zdGFydEdhbWVCdG59PC9zcGFuPlxyXG48L2E+XHJcblxyXG48YSBjbGFzcz1cImJ0bmZsaXAgb3B0aW9ucy1oZWxwIGhlbHBcIiBocmVmPVwiI1wiPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fZnJvbnRcIj4ke2xhbmdbbGddLmhlbHBCdG59PC9zcGFuPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fY2VudGVyXCI+PC9zcGFuPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJidG5mbGlwLWl0ZW0gYnRuZmxpcF9fYmFja1wiPiR7bGFuZ1tsZ10uaGVscEJ0bn08L3NwYW4+XHJcbjwvYT5cclxuICBgO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RMYW5nID4gb3B0aW9uW3NlbGVjdGVkXScpLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc2VsZWN0TGFuZyA+IG9wdGlvblt2YWx1ZT0ke2xnfV1gKS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICAgIHBhZ2VXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBjYW52YXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBzdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgLy8g0LLRi9Cx0L7RgCDRj9C30YvQutCwXHJcbiAgcGFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQocGFnZSk7XHJcbiAgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XHJcblxyXG4gIGNvbnN0IGhlbHBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVscCcpO1xyXG4gIGhlbHBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBoZWxwKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdExhbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0TGFuZycpO1xyXG4gIHNlbGVjdExhbmcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmdTZWxlY3RlZCcsIHNlbGVjdExhbmcudmFsdWUpO1xyXG4gICAgb3B0aW9ucygpO1xyXG4gIH0pO1xyXG5cclxuICAvLyDQstGL0LHQvtGAINC40LPRgNC+0LrQsFxyXG4gIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMScpO1xyXG4gIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMicpO1xyXG4gIGNvbnN0IHBsYXllclNlbGVjdGVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Nwcml0ZUltYWdlJyk7XHJcbiAgaWYgKHBsYXllclNlbGVjdGVkID09PSAnaW1hZ2VzL3Nwcml0ZTIucG5nJykge1xyXG4gICAgcGxheWVyMi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItaWNvbi1zZWxlY3RlZCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwbGF5ZXIxLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1pY29uLXNlbGVjdGVkJyk7XHJcbiAgfVxyXG4gIHBsYXllcjEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnU3ByaXRlSW1hZ2UnLCAnaW1hZ2VzL3Nwcml0ZTEucG5nJyk7XHJcbiAgICBwbGF5ZXIxLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1pY29uLXNlbGVjdGVkJyk7XHJcbiAgICBwbGF5ZXIyLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllci1pY29uLXNlbGVjdGVkJyk7XHJcbiAgICBvcHRpb25zKCk7XHJcbiAgfSk7XHJcbiAgcGxheWVyMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdTcHJpdGVJbWFnZScsICdpbWFnZXMvc3ByaXRlMi5wbmcnKTtcclxuICAgIHBsYXllcjIuY2xhc3NMaXN0LmFkZCgncGxheWVyLWljb24tc2VsZWN0ZWQnKTtcclxuICAgIHBsYXllcjEuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyLWljb24tc2VsZWN0ZWQnKTtcclxuICAgIG9wdGlvbnMoKTtcclxuICB9KTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllclNvdW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIHRoaXMudXJsID0gd2luZG93LmdhbWVTdGF0ZS5zb3VuZFVybDtcclxuICAgIHRoaXMuc291bmRVcCA9IG5ldyBBdWRpbygnc291bmQvanVtcFVwLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kVXApO1xyXG4gICAgdGhpcy5zb3VuZERvd24gPSBuZXcgQXVkaW8oJ3NvdW5kL2dyYXZpdHlEb3duLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kRG93bik7XHJcbiAgICB0aGlzLmlzR3Jhdml0eURvd24gPSBmYWxzZTtcclxuICAgIHRoaXMuaXNKdW1wVXAgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGp1bXBVcCgpIHtcclxuICAgIGlmICghdGhpcy5pc0p1bXBVcCkge1xyXG4gICAgICB0aGlzLnNvdW5kVXAucGxheSgpO1xyXG4gICAgICB0aGlzLmlzSnVtcFVwID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGp1bXBEb3duKCkge1xyXG4gICAgdGhpcy5zb3VuZFVwLnBhdXNlKCk7XHJcbiAgICB0aGlzLnNvdW5kVXAuY3VycmVudFRpbWUgPSAwLjA7XHJcbiAgICB0aGlzLmlzSnVtcFVwID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBncmF2aXR5RG93bigpIHtcclxuICAgIGlmICghdGhpcy5pc0dyYXZpdHlEb3duKSB7XHJcbiAgICAgIHRoaXMuc291bmREb3duLnBsYXkoKTtcclxuICAgICAgdGhpcy5pc0dyYXZpdHlEb3duID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdyYXZpdHlVcCgpIHtcclxuICAgIHRoaXMuc291bmREb3duLnBhdXNlKCk7XHJcbiAgICB0aGlzLnNvdW5kRG93bi5jdXJyZW50VGltZSA9IDAuMDtcclxuICAgIHRoaXMuaXNHcmF2aXR5RG93biA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCJcbmxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5sZXQgcGFydGljbGVzT25TY3JlZW4gPSAyNDU7XG5sZXQgdywgaDtcbmxldCBwYXJ0aWNsZXNBcnJheSA9IFtdO1xuXG53ID0gY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5oID0gY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuZnVuY3Rpb24gcmFuZG9tIChtaW4sIG1heCkge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKTtcbn1cblxuZnVuY3Rpb24gY2xpZW50UmVzaXplIChldikge1xuICB3ID0gY2FudmFzLndpZHRoO1xuICBoID0gY2FudmFzLmhlaWdodDtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNsaWVudFJlc2l6ZSk7XG5cbi8vIGNyZWF0ZVNub3dGbGFrZXMoKTtcbmZ1bmN0aW9uIGNyZWF0ZVNub3dGbGFrZXMgKCkge1xuICBmb3IobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzT25TY3JlZW47IGkrKyl7XG4gICAgcGFydGljbGVzQXJyYXkucHVzaCh7XG4gICAgICB4OiBNYXRoLnJhbmRvbSgpICogdyxcbiAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiBoLFxuICAgICAgb3BhY2l0eTogTWF0aC5yYW5kb20oKSxcbiAgICAgIHNwZWVkWDogcmFuZG9tKC0xLCAxKSxcbiAgICAgIHNwZWVkWTogcmFuZG9tKDEsIDIpLFxuICAgICAgcmFkaXVzOiByYW5kb20oMC41LCA0LjIpLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXdTbm93Rmxha2VzICgpIHtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSxcbiAgICAgIDAsXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSxcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnJhZGl1cyxcbiAgICApO1xuXG4gICAgLy8gZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDMwLCAxNDQsIDI1NSwgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XG4gICAgLy8gZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuOCwgYHJnYmEoMTAwLCAxNDksIDIzNywgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XG4gICAgLy8gZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKDY1LCAxMDUsIDIyNSwgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XG5cbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsXCIgKyBwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5ICsgXCIpXCIpOyAgLy8gd2hpdGVcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoLjgsIFwicmdiYSgyMTAsIDIzNiwgMjQyLFwiICsgcGFydGljbGVzQXJyYXlbaV0ub3BhY2l0eSArIFwiKVwiKTsgIC8vIGJsdWlzaFxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBcInJnYmEoMjM3LCAyNDcsIDI0OSxcIiArIHBhcnRpY2xlc0FycmF5W2ldLm9wYWNpdHkgKyBcIilcIik7XG4gICAgXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSxcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnJhZGl1cyxcbiAgICAgIDAsXG4gICAgICBNYXRoLlBJKjIsXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlU25vd0ZsYWtlcyAoKSB7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZXNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgcGFydGljbGVzQXJyYXlbaV0ueCArPSBwYXJ0aWNsZXNBcnJheVtpXS5zcGVlZFg7XG4gICAgcGFydGljbGVzQXJyYXlbaV0ueSArPSBwYXJ0aWNsZXNBcnJheVtpXS5zcGVlZFk7XG5cbiAgICBpZihwYXJ0aWNsZXNBcnJheVtpXS55ID4gaCkge1xuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueCA9IE1hdGgucmFuZG9tKCkgKiB3ICogMS41O1xuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSA9IC01MDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlU25vd0ZhbGwgKCkge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuICBkcmF3U25vd0ZsYWtlcygpO1xuICBtb3ZlU25vd0ZsYWtlcygpO1xufVxuXG5leHBvcnQge2NyZWF0ZVNub3dGbGFrZXMsIHVwZGF0ZVNub3dGYWxsfVxuIiwiaW1wb3J0IE9ic3RhY2xlIGZyb20gJy4vb2JzdGFjbGUnO1xuaW1wb3J0IHtjYW52YXN9IGZyb20gJy4vaW5kZXgnO1xuLy8gaW1wb3J0IHtnYW1lU3BlZWQsIHBsYXllciwgb2JzdGFjbGVzfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuaW1wb3J0IHtnYW1lU3BlZWQsIG9ic3RhY2xlc30gZnJvbSAnLi9zdGFydF9nYW1lJztcblxuXG5mdW5jdGlvbiBTcGF3bk9ic3RhY2xlICgpIHtcbiAgLy8gbGV0IHNpemUgPSBSYW5kb21JbnRSYW5nZSgyMCwgNzApO1xuICBsZXQgdHlwZSA9IFJhbmRvbUludFJhbmdlKDMsIDQpO1xuXG5cbiAgbGV0IG9ic3RhY2xlID0gbmV3IE9ic3RhY2xlKHtcbiAgICB4OiBjYW52YXMud2lkdGgsXG4gICAgeTogY2FudmFzLmhlaWdodCxcbiAgICB3aWR0aDogNTAsXG4gICAgaGVpZ2h0OiA1MCxcbiAgICBnYW1lU3BlZWQ6IGdhbWVTcGVlZCxcbiAgICBpbWFnZVNyYzogYGltYWdlcy9vYnN0YWNsZSR7dHlwZX0ucG5nYCxcbiAgfSk7XG5cbiAgb2JzdGFjbGVzLnB1c2gob2JzdGFjbGUpO1xufVxuXG5mdW5jdGlvbiBSYW5kb21JbnRSYW5nZSAobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbn1cblxuZXhwb3J0IHtTcGF3bk9ic3RhY2xlfTtcbiIsImltcG9ydCBIZXJvIGZyb20gJy4vaGVybyc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi90ZXh0JztcbmltcG9ydCB7IFNwYXduT2JzdGFjbGUgfSBmcm9tICcuL3NwYXduX29ic3RhY2xlJztcbmltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVTbm93Rmxha2VzLCB1cGRhdGVTbm93RmFsbCB9IGZyb20gJy4vc25vd19mbGFrZXMnO1xuaW1wb3J0IEdhbWVTb3VuZCBmcm9tICcuL2dhbWUtc291bmQnO1xuaW1wb3J0IHsgZ2V0Q29pbiwgY29pbnNDb3VudGVyIH0gZnJvbSAnLi9nZXRfY29pbic7XG5pbXBvcnQgZ2V0Q2xvdWRzIGZyb20gJy4vZ2V0X2Nsb3Vkcyc7XG5pbXBvcnQgeyBsYW5nIH0gZnJvbSAnLi9sYW5nJztcbmltcG9ydCBnZXRQbGF0Zm9ybSBmcm9tICcuL2dldF9wbGF0Zm9ybSc7XG5cbmxldCBncmF2aXR5O1xubGV0IHNjb3JlO1xubGV0IGhpZ2hTY29yZTtcbmxldCBzY29yZVRleHQ7XG5sZXQgaGlnaHRTY29yZVRleHQ7XG5cbmxldCBnYW1lU3BlZWQ7XG5sZXQgcGxheWVyO1xubGV0IG9ic3RhY2xlcyA9IFtdO1xuY29uc3QgY29pbnMgPSBbXTtcblxuY29uc3Qga2V5cyA9IHt9O1xubGV0IGNvaW5JbWFnZTtcbi8vIGNvbnN0IGp1bXBUcnVlID0gZmFsc2U7XG5jb25zdCBwbGF5U291bmQgPSBuZXcgR2FtZVNvdW5kKCk7XG5cbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDIwNTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBrZXlzW2UuY29kZV0gPSB0cnVlO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAga2V5c1tlLmNvZGVdID0gZmFsc2U7XG4gIH0pO1xuXG4gIGN0eC5mb250ID0gJzIwcHggc2Fucy1zZXJpZic7XG5cbiAgZ2FtZVNwZWVkID0gMztcbiAgLy8gZ3Jhdml0eSA9IDE7XG5cbiAgc2NvcmUgPSAwO1xuICBoaWdoU2NvcmUgPSAwO1xuXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJykpIHtcbiAgICBoaWdoU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJyk7XG4gIH1cblxuICBjb2luSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgY29pbkltYWdlLnNyYyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTcHJpdGVJbWFnZScpO1xuXG4gIHBsYXllciA9IG5ldyBIZXJvKHtcbiAgICBpbWFnZTogY29pbkltYWdlLFxuICAgIHdpZHRoOiA2MDAsXG4gICAgaGVpZ2h0OiAxMDAsXG4gICAgbnVtYmVyT2ZGcmFtZXM6IDYsXG4gICAgdGlja3NQZXJGcmFtZTogNCxcbiAgICB4OiA1MCxcbiAgICB5OiA1MCxcbiAgICB0ZXN0OiBjYW52YXMuaGVpZ2h0LFxuICB9KTtcblxuICAvLyB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBwbGF5ZXIuc3RhcnQoKTtcbiAgLy8gfTtcblxuICBzY29yZVRleHQgPSBuZXcgVGV4dChcbiAgICBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0uc2NvcmVUeHR9ICR7c2NvcmV9YCwgMjUsIDI1LCAnbGVmdCcsICcjMjEyMTIxJywgJzIwJyxcbiAgKTtcbiAgaGlnaHRTY29yZVRleHQgPSBuZXcgVGV4dChcbiAgICBgJHtsYW5nW2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nU2VsZWN0ZWQnKV0uYmVzdFNjb3JlVHh0fSAke2hpZ2hTY29yZX1gLCBjYW52YXMud2lkdGggLSAyNSwgMjUsICdyaWdodCcsICcjMjEyMTIxJywgJzIwJyxcbiAgKTtcblxuICBjcmVhdGVTbm93Rmxha2VzKCk7XG4gIC8vIHBsYXlTb3VuZC5wbGF5Rm9uKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShVcGRhdGUpO1xufVxuXG5jb25zdCBpbml0aWFsU3Bhd25UaW1lciA9IDIwMDtcbmxldCBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXI7XG5cbmZ1bmN0aW9uIFVwZGF0ZSgpIHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKFVwZGF0ZSk7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAvLyDQstGL0LrQu9GO0YfQuNGC0Ywg0YTQvtC90L7QstGD0Y4g0LzRg9C30YvQutGDXG4gIGlmIChrZXlzLktleVEpIHtcbiAgICAvLyB3aW5kb3cuZ2FtZVN0YXRlLmlzRm9uU291bmQgPSBmYWxzZTtcbiAgICBwbGF5U291bmQuc3RvcEZvbigpO1xuICB9XG5cbiAgLy8g0LLQutC70Y7Rh9C40YLRjCDRhNC+0L3QvtCy0YPRjiDQvNGD0LfRi9C60YNcbiAgaWYgKGtleXMuS2V5QSkge1xuICAgIC8vIHdpbmRvdy5nYW1lU3RhdGUuaXNGb25Tb3VuZCA9IHRydWU7XG4gICAgcGxheVNvdW5kLnBsYXlGb24oKTtcbiAgfVxuXG4gIC8vIHNwYXduIG9ic3RhY2xlc1xuICBzcGF3blRpbWVyIC09IDE7XG4gIGlmIChzcGF3blRpbWVyIDw9IDApIHtcbiAgICBTcGF3bk9ic3RhY2xlKCk7XG4gICAgc3Bhd25UaW1lciA9IGluaXRpYWxTcGF3blRpbWVyIC0gZ2FtZVNwZWVkICogODtcblxuICAgIGlmIChzcGF3blRpbWVyIDwgNjApIHtcbiAgICAgIHNwYXduVGltZXIgPSA2MDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVTbm93RmFsbCgpO1xuXG4gIC8vIHNwYXduIGVuZW1pZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnN0YWNsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBvID0gb2JzdGFjbGVzW2ldO1xuXG4gICAgaWYgKG8ueCArIG8ud2lkdGggPCAwKSB7XG4gICAgICBvYnN0YWNsZXMuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIC8vINC/0LXRgNC10LfQsNCz0YDRg9C30LrQsCDQuNCz0YDRiyDQv9GA0Lgg0YHRgtC+0LvQutC90L7QstC10L3QuNC4XG4gICAgaWYgKFxuICAgICAgcGxheWVyLmR4IDwgby54ICsgby53aWR0aFxuICAgICAgJiYgcGxheWVyLmR4ICsgKHBsYXllci53aWR0aCAvIDEwKSAtIDEwID4gby54XG4gICAgICAmJiBwbGF5ZXIueSA8IG8ueSArIG8uaGVpZ2h0XG4gICAgICAmJiBwbGF5ZXIueSArIHBsYXllci5oZWlnaHQgPj0gby55XG4gICAgKSB7XG4gICAgICAvLyBwbGF5U291bmQucGxheURlYWQoKTtcbiAgICAgIG9ic3RhY2xlcyA9IFtdO1xuICAgICAgZ2FtZVNwZWVkID0gMztcbiAgICAgIHNjb3JlID0gMDtcbiAgICAgIGNvaW5zQ291bnRlci5jb3VudGVyID0gMDtcbiAgICAgIHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaHNjb3JlJywgaGlnaFNjb3JlKTtcbiAgICB9XG4gICAgby5VcGRhdGUoKTtcbiAgfVxuXG4gIHNjb3JlICs9IDE7XG4gIHNjb3JlVGV4dC50ID0gYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLnNjb3JlVHh0fSAke3Njb3JlfWA7XG5cbiAgc2NvcmVUZXh0LkRyYXcoKTtcblxuICBpZiAoc2NvcmUgPiBoaWdoU2NvcmUpIHtcbiAgICBoaWdoU2NvcmUgPSBzY29yZTtcbiAgICBoaWdodFNjb3JlVGV4dC50ID0gYCR7bGFuZ1tsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ1NlbGVjdGVkJyldLmJlc3RTY29yZVR4dH0gJHtoaWdoU2NvcmV9YDtcbiAgfVxuXG4gIGdhbWVTcGVlZCArPSAwLjAwMztcbiAgaGlnaHRTY29yZVRleHQuRHJhdygpO1xuXG4gIC8vIHNwYXduIHBsYXRmb3JtXG4gIGdldFBsYXRmb3JtKCk7XG5cbiAgLy8gc3Bhd24gY29pblxuICBnZXRDb2luKCk7XG5cbiAgLy8gc3Bhd24gY2xvdWRzXG4gIGdldENsb3VkcygpO1xufVxuXG5leHBvcnQge1xuICBzdGFydCwgZ2FtZVNwZWVkLCBvYnN0YWNsZXMsIGtleXMsIHNjb3JlLCBwbGF5ZXIsIGNvaW5zLFxufTtcbiIsImltcG9ydCB7Y3R4fSBmcm9tICcuL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0IHtcclxuICBjb25zdHJ1Y3RvciAodCwgeCwgeSwgYSwgYywgcykge1xyXG4gICAgdGhpcy50ID0gdDtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5hID0gYTtcclxuICAgIHRoaXMuYyA9IGM7XHJcbiAgICB0aGlzLnMgPSBzO1xyXG4gIH1cclxuXHJcbiBcclxuICBEcmF3ICgpIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmM7XHJcbiAgICBjdHguZm9udCA9IGAke3RoaXMuc31weCBzYW5zLXNlcmlmYDtcclxuICAgIGN0eC50ZXh0QWxpZ24gPSB0aGlzLmE7XHJcbiAgICBjdHguZmlsbFRleHQodGhpcy50LCB0aGlzLngsIHRoaXMueSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
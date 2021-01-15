/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

    this.ctx = options.ctx;
    this.image = options.image;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = options.ticksPerFrame || 0;
    this.numberOfFrames = options.numberOfFrames || 1;
    this.width = options.width;
    this.height = options.height;
    this.dy = options.dy || 0;
    this.dx = 0;
    this.jumpForce = 15;
    this.grounded = false;
    this.jumpTimer = 0;
    this.y = options.y;
    this.x = options.x;
    this.gravity = 1;
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
      this.ctx.drawImage(this.image, this.frameIndex * this.width / this.numberOfFrames, 0, this.width / this.numberOfFrames, this.height, this.dx, this.y, this.width / this.numberOfFrames, this.height);
    } // gravity

  }, {
    key: "gravityGo",
    value: function gravityGo() {
      this.y += this.dy;

      if (this.y + this.height < _index__WEBPACK_IMPORTED_MODULE_0__.canvas.height) {
        this.dy += this.gravity;
        this.grounded = false;
      } else {
        this.dy = 0;
        this.grounded = true;
        this.y = _index__WEBPACK_IMPORTED_MODULE_0__.canvas.height - this.height;
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
      }

      if (_start_game__WEBPACK_IMPORTED_MODULE_1__.keys.KeyN) {
        if (this.dx > 0) this.dx -= 5;
      }
    }
  }, {
    key: "Jump",
    value: function Jump() {
      if (this.grounded && this.jumpTimer == 0) {
        this.jumpTimer = 1;
        this.dy = -this.jumpForce;
        this.sound.jumpDown();
      } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
        this.jumpTimer++;
        this.dy = -this.jumpForce - this.jumpTimer / 50;
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
    this.counter = 0;
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
console.log(canvas);
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
  }); // if (type == 1) {
  //   obstacle.y -= player.originalHeight - 10;
  // }

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
/* harmony export */   "keys": () => /* binding */ keys
/* harmony export */ });
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ "./src/hero.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./src/text.js");
/* harmony import */ var _spawn_obstacle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spawn_obstacle */ "./src/spawn_obstacle.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _snow_flakes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snow_flakes */ "./src/snow_flakes.js");
/* harmony import */ var _game_sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-sound */ "./src/game-sound.js");






var gravity;
var score;
var highScore;
var scoreText;
var hightScoreText;
var gameSpeed;
var player;
var obstacles = [];
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
    ctx: _index__WEBPACK_IMPORTED_MODULE_3__.canvas.getContext('2d'),
    image: coinImage,
    width: 600,
    height: 100,
    numberOfFrames: 6,
    ticksPerFrame: 4,
    x: 50,
    y: 50
  });

  window.onload = function () {
    player.start();
  };

  scoreText = new _text__WEBPACK_IMPORTED_MODULE_1__.Text("Score: ".concat(score), 25, 25, "left", "#212121", "20");
  hightScoreText = new _text__WEBPACK_IMPORTED_MODULE_1__.Text("Highscore: ".concat(highScore), _index__WEBPACK_IMPORTED_MODULE_3__.canvas.width - 25, 25, "right", "#212121", "20");
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
  }

  spawnTimer--;

  if (spawnTimer <= 0) {
    (0,_spawn_obstacle__WEBPACK_IMPORTED_MODULE_2__.SpawnObstacle)();
    spawnTimer = initialSpawnTimer - gameSpeed * 8;

    if (spawnTimer < 60) {
      spawnTimer = 60;
    }
  }

  (0,_snow_flakes__WEBPACK_IMPORTED_MODULE_4__.updateSnowFall)(); // spawn enemies

  for (var i = 0; i < obstacles.length; i++) {
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

  score++;
  scoreText.t = "Score: " + score;
  scoreText.Draw();

  if (score > highScore) {
    highScore = score;
    hightScoreText.t = "Highscore: ".concat(highScore);
  }

  gameSpeed += 0.003;
  hightScoreText.Draw();
} // export {start, gameSpeed, obstacles, player};




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dhbWUtc291bmQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9oZXJvLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9vYnN0YWNsZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3BsYXllci1zb3VuZC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3Nub3dfZmxha2VzLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvc3Bhd25fb2JzdGFjbGUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9zdGFydF9nYW1lLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvdGV4dC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiR2FtZVNvdW5kIiwiZm9uU291bmQiLCJBdWRpbyIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidm9sdW1lIiwiZGVhZFNvdW5kIiwibG9vcCIsInBsYXkiLCJwYXVzZSIsIkhlcm8iLCJvcHRpb25zIiwiY3R4IiwiaW1hZ2UiLCJmcmFtZUluZGV4IiwidGlja0NvdW50IiwidGlja3NQZXJGcmFtZSIsIm51bWJlck9mRnJhbWVzIiwid2lkdGgiLCJoZWlnaHQiLCJkeSIsImR4IiwianVtcEZvcmNlIiwiZ3JvdW5kZWQiLCJqdW1wVGltZXIiLCJ5IiwieCIsImdyYXZpdHkiLCJzb3VuZCIsIlBsYXllclNvdW5kIiwiZHJhd0ltYWdlIiwiY2FudmFzIiwia2V5cyIsImp1bXBVcCIsIkp1bXAiLCJqdW1wRG93biIsInVwZGF0ZSIsInJlbmRlciIsImdyYXZpdHlHbyIsImdldFJlYWR5VG9KdW1wIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJzdGFydCIsIk9ic3RhY2xlIiwiZ2FtZVNwZWVkIiwiY291bnRlciIsIkltYWdlIiwic3JjIiwiaW1hZ2VTcmMiLCJzb3VuZFVwIiwic291bmREb3duIiwiaXNHcmF2aXR5RG93biIsImlzSnVtcFVwIiwiY3VycmVudFRpbWUiLCJjb25zb2xlIiwibG9nIiwicGFydGljbGVzT25TY3JlZW4iLCJ3IiwiaCIsInBhcnRpY2xlc0FycmF5IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmFuZG9tIiwibWluIiwibWF4IiwiTWF0aCIsImNsaWVudFJlc2l6ZSIsImV2IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZVNub3dGbGFrZXMiLCJpIiwicHVzaCIsIm9wYWNpdHkiLCJzcGVlZFgiLCJzcGVlZFkiLCJyYWRpdXMiLCJkcmF3U25vd0ZsYWtlcyIsImxlbmd0aCIsImdyYWRpZW50IiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJtb3ZlU25vd0ZsYWtlcyIsInVwZGF0ZVNub3dGYWxsIiwiY2xlYXJSZWN0IiwiU3Bhd25PYnN0YWNsZSIsInR5cGUiLCJSYW5kb21JbnRSYW5nZSIsIm9ic3RhY2xlIiwib2JzdGFjbGVzIiwicm91bmQiLCJzY29yZSIsImhpZ2hTY29yZSIsInNjb3JlVGV4dCIsImhpZ2h0U2NvcmVUZXh0IiwicGxheWVyIiwiY29pbkltYWdlIiwianVtcFRydWUiLCJwbGF5U291bmQiLCJlIiwiY29kZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvbmxvYWQiLCJUZXh0IiwicGxheUZvbiIsIlVwZGF0ZSIsImluaXRpYWxTcGF3blRpbWVyIiwic3Bhd25UaW1lciIsIktleVEiLCJzdG9wRm9uIiwiS2V5QSIsIm8iLCJzcGxpY2UiLCJwbGF5RGVhZCIsInNldEl0ZW0iLCJ0IiwiRHJhdyIsImEiLCJjIiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUVxQkEsUztBQUNuQix1QkFBYztBQUFBOztBQUNaO0FBQ0E7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLElBQUlDLEtBQUosQ0FBVSxnQkFBVixDQUFoQjtBQUNBQyxZQUFRLENBQUNDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQixLQUFLSixRQUEvQjtBQUNBLFNBQUtBLFFBQUwsQ0FBY0ssTUFBZCxHQUF1QixHQUF2QjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsSUFBSUwsS0FBSixDQUFVLGdCQUFWLENBQWpCO0FBQ0FDLFlBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxXQUFkLENBQTBCLEtBQUtFLFNBQS9CO0FBQ0Q7Ozs7OEJBRVM7QUFDUixXQUFLTixRQUFMLENBQWNPLElBQWQsR0FBcUIsSUFBckI7QUFDQSxXQUFLUCxRQUFMLENBQWNRLElBQWQ7QUFDRDs7OzhCQUVTO0FBQ1IsV0FBS1IsUUFBTCxDQUFjUyxLQUFkO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUtILFNBQUwsQ0FBZUUsSUFBZjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCSDtBQUNBO0FBQ0E7O0lBRXFCRSxJO0FBQ25CLGdCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtDLEdBQUwsR0FBV0QsT0FBTyxDQUFDQyxHQUFuQjtBQUVBLFNBQUtDLEtBQUwsR0FBYUYsT0FBTyxDQUFDRSxLQUFyQjtBQUVBLFNBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkwsT0FBTyxDQUFDSyxhQUFSLElB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O1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Ii4vanMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU291bmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGhpcy51cmwgPSB3aW5kb3cuZ2FtZVN0YXRlLnNvdW5kVXJsO1xyXG4gICAgLy8gdGhpcy5udW0gPSAxO1xyXG4gICAgdGhpcy5mb25Tb3VuZCA9IG5ldyBBdWRpbygnc291bmQvZm9uMS5tcDMnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5mb25Tb3VuZCk7XHJcbiAgICB0aGlzLmZvblNvdW5kLnZvbHVtZSA9IDAuMTtcclxuICAgIHRoaXMuZGVhZFNvdW5kID0gbmV3IEF1ZGlvKCdzb3VuZC9kZWFkLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRlYWRTb3VuZCk7XHJcbiAgfVxyXG5cclxuICBwbGF5Rm9uKCkge1xyXG4gICAgdGhpcy5mb25Tb3VuZC5sb29wID0gdHJ1ZTtcclxuICAgIHRoaXMuZm9uU291bmQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgc3RvcEZvbigpIHtcclxuICAgIHRoaXMuZm9uU291bmQucGF1c2UoKTtcclxuICB9XHJcblxyXG4gIHBsYXlEZWFkKCkge1xyXG4gICAgdGhpcy5kZWFkU291bmQucGxheSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsga2V5cyB9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XG5pbXBvcnQgUGxheWVyU291bmQgZnJvbSAnLi9wbGF5ZXItc291bmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuY3R4ID0gb3B0aW9ucy5jdHg7XG5cbiAgICB0aGlzLmltYWdlID0gb3B0aW9ucy5pbWFnZTtcblxuICAgIHRoaXMuZnJhbWVJbmRleCA9IDA7XG4gICAgdGhpcy50aWNrQ291bnQgPSAwO1xuICAgIHRoaXMudGlja3NQZXJGcmFtZSA9IG9wdGlvbnMudGlja3NQZXJGcmFtZSB8fCAwO1xuICAgIHRoaXMubnVtYmVyT2ZGcmFtZXMgPSBvcHRpb25zLm51bWJlck9mRnJhbWVzIHx8IDE7XG5cbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuXG4gICAgdGhpcy5keSA9IG9wdGlvbnMuZHkgfHwgMDtcbiAgICB0aGlzLmR4ID0gMDtcbiAgICB0aGlzLmp1bXBGb3JjZSA9IDE1O1xuICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLmp1bXBUaW1lciA9IDA7XG5cbiAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgdGhpcy54ID0gb3B0aW9ucy54O1xuICAgIHRoaXMuZ3Jhdml0eSA9IDE7XG5cbiAgICB0aGlzLnNvdW5kID0gbmV3IFBsYXllclNvdW5kKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy50aWNrQ291bnQrKztcblxuICAgIGlmICh0aGlzLnRpY2tDb3VudCA+IHRoaXMudGlja3NQZXJGcmFtZSkge1xuICAgICAgdGhpcy50aWNrQ291bnQgPSAwO1xuICAgICAgaWYgKHRoaXMuZnJhbWVJbmRleCA8IHRoaXMubnVtYmVyT2ZGcmFtZXMgLSAxKSB7XG4gICAgICAgIHRoaXMuZnJhbWVJbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIHRoaXMuZnJhbWVJbmRleCAqIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgMCxcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICB0aGlzLmR4LFxuICAgICAgdGhpcy55LFxuICAgICAgdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICApO1xuICB9XG5cbiAgLy8gZ3Jhdml0eVxuICBncmF2aXR5R28oKSB7XG4gICAgdGhpcy55ICs9IHRoaXMuZHk7XG5cbiAgICBpZiAodGhpcy55ICsgdGhpcy5oZWlnaHQgPCBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICB0aGlzLmR5ICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5keSA9IDA7XG4gICAgICB0aGlzLmdyb3VuZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodDtcbiAgICB9XG4gIH1cblxuICAvLyBqdW1wXG4gIGdldFJlYWR5VG9KdW1wKCkge1xuICAgIGlmIChrZXlzLlNwYWNlIHx8IGtleXMuS2V5Vykge1xuICAgICAgdGhpcy5zb3VuZC5qdW1wVXAoKTtcbiAgICAgIHRoaXMuSnVtcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmp1bXBUaW1lciA9IDA7XG4gICAgfVxuICAgIGlmIChrZXlzLktleU0pIHtcbiAgICAgIGlmICh0aGlzLmR4IDwgY2FudmFzLndpZHRoIC0gMTAwKSB0aGlzLmR4ICs9IDU7XG4gICAgfVxuICAgIGlmIChrZXlzLktleU4pIHtcbiAgICAgIGlmICh0aGlzLmR4ID4gMCkgdGhpcy5keCAtPSA1O1xuICAgIH1cbiAgfVxuXG4gIEp1bXAoKSB7XG4gICAgaWYgKHRoaXMuZ3JvdW5kZWQgJiYgdGhpcy5qdW1wVGltZXIgPT0gMCkge1xuICAgICAgdGhpcy5qdW1wVGltZXIgPSAxO1xuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZTtcbiAgICAgIHRoaXMuc291bmQuanVtcERvd24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuanVtcFRpbWVyID4gMCAmJiB0aGlzLmp1bXBUaW1lciA8IDE1KSB7XG4gICAgICB0aGlzLmp1bXBUaW1lcisrO1xuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZSAtICh0aGlzLmp1bXBUaW1lciAvIDUwKTtcbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBjb25zdCBsb29wID0gKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB0aGlzLmdyYXZpdHlHbygpO1xuICAgICAgdGhpcy5nZXRSZWFkeVRvSnVtcCgpO1xuXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgIH07XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICB9XG59XG4iLCIvLyBpbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHsgT2JzdGFjbGUgfSBmcm9tICcuL29ic3RhY2xlJztcclxuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4vdGV4dCc7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSAnLi9zdGFydF9nYW1lJztcclxuXHJcbi8vIGxldCBrZXlzID0ge307XHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4vLyB3aW5kb3cuZ2FtZVN0YXRlID0ge1xyXG4vLyAgIHNvdW5kVXJsOiAnLi4vLi9kaXN0L3NvdW5kLycsXHJcbi8vICAgaW1nVXJsOiAnLi4vLi9kaXN0L2ltZy8nLFxyXG4vLyAgIGlzRm9uU291bmQ6IHRydWUsXHJcbi8vICAgaXNQbGF5ZXJTb3VuZDogdHJ1ZSxcclxuLy8gICBzZXQgaXNTdGFydEdhbWUodmFsdWUpIHtcclxuLy8gICAgIFN0YXJ0KCk7XHJcbi8vICAgfSxcclxuLy8gfTtcclxuXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4vLyAgIGtleXNbZS5jb2RlXSA9IHRydWU7XHJcbi8vIH0pO1xyXG4vL1xyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbi8vICAga2V5c1tlLmNvZGVdID0gZmFsc2U7XHJcbi8vIH0pO1xyXG5cclxuc3RhcnQoKTtcclxuXHJcbi8vIGV4cG9ydCB7Y2FudmFzLCBjdHgsIGtleXN9XHJcbmV4cG9ydCB7IGNhbnZhcywgY3R4IH07XHJcbiIsImltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vaW5kZXguanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XG4gICAgdGhpcy5jb3VudGVyID0gMDtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IG9wdGlvbnMuaW1hZ2VTcmM7XG4gIH1cblxuICBVcGRhdGUgKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICB0aGlzLngsXG4gICAgICBjYW52YXMuaGVpZ2h0IC0gNTUsXG4gICAgKVxuICB9XG5cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyU291bmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGhpcy51cmwgPSB3aW5kb3cuZ2FtZVN0YXRlLnNvdW5kVXJsO1xyXG4gICAgdGhpcy5zb3VuZFVwID0gbmV3IEF1ZGlvKCdzb3VuZC9qdW1wVXAubXAzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmRVcCk7XHJcbiAgICB0aGlzLnNvdW5kRG93biA9IG5ldyBBdWRpbygnc291bmQvZ3Jhdml0eURvd24ubXAzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmREb3duKTtcclxuICAgIHRoaXMuaXNHcmF2aXR5RG93biA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0p1bXBVcCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAganVtcFVwKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzSnVtcFVwKSB7XHJcbiAgICAgIHRoaXMuc291bmRVcC5wbGF5KCk7XHJcbiAgICAgIHRoaXMuaXNKdW1wVXAgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAganVtcERvd24oKSB7XHJcbiAgICB0aGlzLnNvdW5kVXAucGF1c2UoKTtcclxuICAgIHRoaXMuc291bmRVcC5jdXJyZW50VGltZSA9IDAuMDtcclxuICAgIHRoaXMuaXNKdW1wVXAgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdyYXZpdHlEb3duKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzR3Jhdml0eURvd24pIHtcclxuICAgICAgdGhpcy5zb3VuZERvd24ucGxheSgpO1xyXG4gICAgICB0aGlzLmlzR3Jhdml0eURvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ3Jhdml0eVVwKCkge1xyXG4gICAgdGhpcy5zb3VuZERvd24ucGF1c2UoKTtcclxuICAgIHRoaXMuc291bmREb3duLmN1cnJlbnRUaW1lID0gMC4wO1xyXG4gICAgdGhpcy5pc0dyYXZpdHlEb3duID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsIlxubGV0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmNvbnNvbGUubG9nKGNhbnZhcylcblxuXG5sZXQgcGFydGljbGVzT25TY3JlZW4gPSAyNDU7XG5sZXQgdywgaDtcbmxldCBwYXJ0aWNsZXNBcnJheSA9IFtdO1xuXG53ID0gY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5oID0gY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuZnVuY3Rpb24gcmFuZG9tIChtaW4sIG1heCkge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKTtcbn1cblxuZnVuY3Rpb24gY2xpZW50UmVzaXplIChldikge1xuICB3ID0gY2FudmFzLndpZHRoO1xuICBoID0gY2FudmFzLmhlaWdodDtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNsaWVudFJlc2l6ZSk7XG5cbi8vIGNyZWF0ZVNub3dGbGFrZXMoKTtcbmZ1bmN0aW9uIGNyZWF0ZVNub3dGbGFrZXMgKCkge1xuICBmb3IobGV0IGkgPSAwOyBpIDwgcGFydGljbGVzT25TY3JlZW47IGkrKyl7XG4gICAgcGFydGljbGVzQXJyYXkucHVzaCh7XG4gICAgICB4OiBNYXRoLnJhbmRvbSgpICogdyxcbiAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiBoLFxuICAgICAgb3BhY2l0eTogTWF0aC5yYW5kb20oKSxcbiAgICAgIHNwZWVkWDogcmFuZG9tKC0xLCAxKSxcbiAgICAgIHNwZWVkWTogcmFuZG9tKDEsIDIpLFxuICAgICAgcmFkaXVzOiByYW5kb20oMC41LCA0LjIpLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXdTbm93Rmxha2VzICgpIHtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSxcbiAgICAgIDAsXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ueSxcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLnJhZGl1cyxcbiAgICApO1xuXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDMwLCAxNDQsIDI1NSwgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuOCwgYHJnYmEoMTAwLCAxNDksIDIzNywgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKDY1LCAxMDUsIDIyNSwgJHtwYXJ0aWNsZXNBcnJheVtpXS5vcGFjaXR5fSlgICk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhcbiAgICAgIHBhcnRpY2xlc0FycmF5W2ldLngsXG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55LFxuICAgICAgcGFydGljbGVzQXJyYXlbaV0ucmFkaXVzLFxuICAgICAgMCxcbiAgICAgIE1hdGguUEkqMixcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICBjdHguZmlsbCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVTbm93Rmxha2VzICgpIHtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlc0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBwYXJ0aWNsZXNBcnJheVtpXS54ICs9IHBhcnRpY2xlc0FycmF5W2ldLnNwZWVkWDtcbiAgICBwYXJ0aWNsZXNBcnJheVtpXS55ICs9IHBhcnRpY2xlc0FycmF5W2ldLnNwZWVkWTtcblxuICAgIGlmKHBhcnRpY2xlc0FycmF5W2ldLnkgPiBoKSB7XG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS54ID0gTWF0aC5yYW5kb20oKSAqIHcgKiAxLjU7XG4gICAgICBwYXJ0aWNsZXNBcnJheVtpXS55ID0gLTUwO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVTbm93RmFsbCAoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG4gIGRyYXdTbm93Rmxha2VzKCk7XG4gIG1vdmVTbm93Rmxha2VzKCk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlU25vd0ZsYWtlcywgdXBkYXRlU25vd0ZhbGx9XG4iLCJpbXBvcnQgT2JzdGFjbGUgZnJvbSAnLi9vYnN0YWNsZSc7XG5pbXBvcnQge2NhbnZhc30gZnJvbSAnLi9pbmRleCc7XG4vLyBpbXBvcnQge2dhbWVTcGVlZCwgcGxheWVyLCBvYnN0YWNsZXN9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XG5pbXBvcnQge2dhbWVTcGVlZCwgb2JzdGFjbGVzfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuXG5cbmZ1bmN0aW9uIFNwYXduT2JzdGFjbGUgKCkge1xuICAvLyBsZXQgc2l6ZSA9IFJhbmRvbUludFJhbmdlKDIwLCA3MCk7XG4gIGxldCB0eXBlID0gUmFuZG9tSW50UmFuZ2UoMywgNCk7XG5cblxuICBsZXQgb2JzdGFjbGUgPSBuZXcgT2JzdGFjbGUoe1xuICAgIHg6IGNhbnZhcy53aWR0aCxcbiAgICB5OiBjYW52YXMuaGVpZ2h0LFxuICAgIHdpZHRoOiA1MCxcbiAgICBoZWlnaHQ6IDUwLFxuICAgIGdhbWVTcGVlZDogZ2FtZVNwZWVkLFxuICAgIGltYWdlU3JjOiBgaW1hZ2VzL29ic3RhY2xlJHt0eXBlfS5wbmdgLFxuICB9KTtcblxuXG4gIC8vIGlmICh0eXBlID09IDEpIHtcbiAgLy8gICBvYnN0YWNsZS55IC09IHBsYXllci5vcmlnaW5hbEhlaWdodCAtIDEwO1xuICAvLyB9XG5cbiAgb2JzdGFjbGVzLnB1c2gob2JzdGFjbGUpO1xufVxuXG5mdW5jdGlvbiBSYW5kb21JbnRSYW5nZSAobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbn1cblxuZXhwb3J0IHtTcGF3bk9ic3RhY2xlfTtcbiIsImltcG9ydCBIZXJvIGZyb20gJy4vaGVybyc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi90ZXh0JztcbmltcG9ydCB7IFNwYXduT2JzdGFjbGUgfSBmcm9tICcuL3NwYXduX29ic3RhY2xlJztcbmltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgY3JlYXRlU25vd0ZsYWtlcywgdXBkYXRlU25vd0ZhbGwgfSBmcm9tICcuL3Nub3dfZmxha2VzJztcbmltcG9ydCBHYW1lU291bmQgZnJvbSAnLi9nYW1lLXNvdW5kJztcblxubGV0IGdyYXZpdHk7XG5sZXQgc2NvcmU7XG5sZXQgaGlnaFNjb3JlO1xubGV0IHNjb3JlVGV4dDtcbmxldCBoaWdodFNjb3JlVGV4dDtcblxubGV0IGdhbWVTcGVlZDtcbmxldCBwbGF5ZXI7XG5sZXQgb2JzdGFjbGVzID0gW107XG5cbmxldCBrZXlzID0ge307XG5sZXQgY29pbkltYWdlO1xubGV0IGp1bXBUcnVlID0gZmFsc2U7XG5cbmNvbnN0IHBsYXlTb3VuZCA9IG5ldyBHYW1lU291bmQoKTtcblxuZnVuY3Rpb24gc3RhcnQgKCkge1xuXG4gIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjA1O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGtleXNbZS5jb2RlXSA9IHRydWU7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICBrZXlzW2UuY29kZV0gPSBmYWxzZTtcbiAgfSk7XG5cblxuICBjdHguZm9udCA9IFwiMjBweCBzYW5zLXNlcmlmXCI7XG5cbiAgZ2FtZVNwZWVkID0gMztcbiAgZ3Jhdml0eSA9IDE7XG5cbiAgc2NvcmUgPSAwO1xuICBoaWdoU2NvcmUgPSAwO1xuXG4gIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoc2NvcmUnKSl7XG4gICAgaGlnaFNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hzY29yZScpO1xuICB9XG5cbiAgY29pbkltYWdlID0gbmV3IEltYWdlKCk7XG4gIGNvaW5JbWFnZS5zcmMgPSAnaW1hZ2VzL3Nwcml0ZTIucG5nJztcblxuICBwbGF5ZXIgPSBuZXcgSGVybyh7XG4gICAgY3R4OiBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICBpbWFnZTogY29pbkltYWdlLFxuICAgIHdpZHRoOiA2MDAsXG4gICAgaGVpZ2h0OiAxMDAsXG4gICAgbnVtYmVyT2ZGcmFtZXM6IDYsXG4gICAgdGlja3NQZXJGcmFtZTogNCxcbiAgICB4OiA1MCxcbiAgICB5OiA1MCxcbiAgfSk7XG5cbiAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIuc3RhcnQoKTtcbiAgfVxuXG4gIHNjb3JlVGV4dCA9IG5ldyBUZXh0KFxuICAgIGBTY29yZTogJHtzY29yZX1gLCAyNSwgMjUsIFwibGVmdFwiLCBcIiMyMTIxMjFcIiwgXCIyMFwiXG4gICk7XG4gIGhpZ2h0U2NvcmVUZXh0ID0gbmV3IFRleHQoXG4gICAgYEhpZ2hzY29yZTogJHtoaWdoU2NvcmV9YCwgY2FudmFzLndpZHRoIC0gMjUsIDI1LCBcInJpZ2h0XCIsIFwiIzIxMjEyMVwiLCBcIjIwXCJcbiAgKTtcblxuICBjcmVhdGVTbm93Rmxha2VzKCk7XG4gIHBsYXlTb3VuZC5wbGF5Rm9uKCk7XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKFVwZGF0ZSk7XG59XG5cbmxldCBpbml0aWFsU3Bhd25UaW1lciA9IDIwMDtcbmxldCBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXI7XG5cbmZ1bmN0aW9uIFVwZGF0ZSAoKSB7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShVcGRhdGUpO1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgLy8g0LLRi9C60LvRjtGH0LjRgtGMINGE0L7QvdC+0LLRg9GOINC80YPQt9GL0LrRg1xuICBpZiAoa2V5cy5LZXlRKSB7XG4gICAgLy8gd2luZG93LmdhbWVTdGF0ZS5pc0ZvblNvdW5kID0gZmFsc2U7XG4gICAgcGxheVNvdW5kLnN0b3BGb24oKTtcbiAgfVxuXG4gIC8vINCy0LrQu9GO0YfQuNGC0Ywg0YTQvtC90L7QstGD0Y4g0LzRg9C30YvQutGDXG4gIGlmIChrZXlzLktleUEpIHtcbiAgICAvLyB3aW5kb3cuZ2FtZVN0YXRlLmlzRm9uU291bmQgPSB0cnVlO1xuICAgIHBsYXlTb3VuZC5wbGF5Rm9uKCk7XG4gIH1cblxuICBzcGF3blRpbWVyLS07XG4gIGlmIChzcGF3blRpbWVyIDw9IDApIHtcbiAgICBTcGF3bk9ic3RhY2xlKCk7XG4gICAgc3Bhd25UaW1lciA9IGluaXRpYWxTcGF3blRpbWVyIC0gZ2FtZVNwZWVkICogODtcblxuICAgIGlmIChzcGF3blRpbWVyIDwgNjApIHtcbiAgICAgIHNwYXduVGltZXIgPSA2MDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVTbm93RmFsbCgpO1xuXG4gIC8vIHNwYXduIGVuZW1pZXNcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9ic3RhY2xlcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IG8gPSBvYnN0YWNsZXNbaV07XG5cbiAgICBpZiAoby54ICsgby53aWR0aCA8IDApe1xuICAgICAgb2JzdGFjbGVzLnNwbGljZShpLCAxKTtcbiAgICB9XG5cblxuICAgIC8vINC/0LXRgNC10LfQsNCz0YDRg9C30LrQsCDQuNCz0YDRiyDQv9GA0Lgg0YHRgtC+0LvQutC90L7QstC10L3QuNC4XG4gICAgaWYgKFxuICAgICAgcGxheWVyLmR4IDwgby54ICsgby53aWR0aCAmJlxuICAgICAgcGxheWVyLmR4ICsgKHBsYXllci53aWR0aCAvIDEwKSAtIDEwID4gby54ICYmXG4gICAgICBwbGF5ZXIueSA8IG8ueSArIG8uaGVpZ2h0ICYmXG4gICAgICBwbGF5ZXIueSArIHBsYXllci5oZWlnaHQgPj0gby55XG4gICAgKSB7XG4gICAgICBwbGF5U291bmQucGxheURlYWQoKTtcbiAgICAgIG9ic3RhY2xlcyA9IFtdO1xuICAgICAgZ2FtZVNwZWVkID0gMztcbiAgICAgIHNjb3JlID0gMDtcbiAgICAgIHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaHNjb3JlJywgaGlnaFNjb3JlKTtcbiAgICB9XG4gICAgby5VcGRhdGUoKTtcbiAgfVxuXG4gIHNjb3JlKys7XG4gIHNjb3JlVGV4dC50ID0gXCJTY29yZTogXCIgKyBzY29yZTtcblxuICBzY29yZVRleHQuRHJhdygpO1xuXG4gIGlmIChzY29yZSA+IGhpZ2hTY29yZSkge1xuICAgIGhpZ2hTY29yZSA9IHNjb3JlO1xuICAgIGhpZ2h0U2NvcmVUZXh0LnQgPSBgSGlnaHNjb3JlOiAke2hpZ2hTY29yZX1gO1xuXG4gIH1cblxuICBnYW1lU3BlZWQgKz0gMC4wMDM7XG4gIGhpZ2h0U2NvcmVUZXh0LkRyYXcoKTtcbn1cblxuLy8gZXhwb3J0IHtzdGFydCwgZ2FtZVNwZWVkLCBvYnN0YWNsZXMsIHBsYXllcn07XG5leHBvcnQge3N0YXJ0LCBnYW1lU3BlZWQsIG9ic3RhY2xlcywga2V5c307XG4iLCJpbXBvcnQge2N0eH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dCB7XHJcbiAgY29uc3RydWN0b3IgKHQsIHgsIHksIGEsIGMsIHMpIHtcclxuICAgIHRoaXMudCA9IHQ7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMuYSA9IGE7XHJcbiAgICB0aGlzLmMgPSBjO1xyXG4gICAgdGhpcy5zID0gcztcclxuICB9XHJcblxyXG4gIERyYXcgKCkge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuYztcclxuICAgIGN0eC5mb250ID0gYCR7dGhpcy5zfXB4IHNhbnMtc2VyaWZgO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IHRoaXMuYTtcclxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnQsIHRoaXMueCwgdGhpcy55KTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
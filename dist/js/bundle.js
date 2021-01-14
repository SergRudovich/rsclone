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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle */ "./src/obstacle.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ "./src/text.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");



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

(0,_start_game__WEBPACK_IMPORTED_MODULE_3__.start)(); // export {canvas, ctx, keys}



/***/ }),

/***/ "./src/obstacle-two.js":
/*!*****************************!*\
  !*** ./src/obstacle-two.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ObstacleTwo
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ObstacleTwo = /*#__PURE__*/function () {
  function ObstacleTwo(options) {
    _classCallCheck(this, ObstacleTwo);

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

  _createClass(ObstacleTwo, [{
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

  return ObstacleTwo;
}();



/***/ }),

/***/ "./src/obstacle.js":
/*!*************************!*\
  !*** ./src/obstacle.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Obstacle": () => /* binding */ Obstacle
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Obstacle = /*#__PURE__*/function () {
  function Obstacle(x, y, width, height, color, gameSpeed) {
    _classCallCheck(this, Obstacle);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.gameSpeed = gameSpeed;
    this.dx = -this.gameSpeed;
  }

  _createClass(Obstacle, [{
    key: "Update",
    value: function Update() {
      this.x += this.dx;
      this.Draw();
      this.dx = -this.gameSpeed;
    }
  }, {
    key: "Draw",
    value: function Draw() {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = this.color;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.ctx.fillRect(this.x, this.y, this.width, this.height);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.ctx.closePath();
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

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => /* binding */ Player
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import {keys, canvas, ctx} from './index';

var Player = /*#__PURE__*/function () {
  function Player(x, y, width, height, color) {
    _classCallCheck(this, Player);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.dy = 0;
    this.jumpForce = 15;
    this.originalHeight = height;
    this.grounded = false;
    this.jumpTimer = 0;
    this.gravity = 1;
  }

  _createClass(Player, [{
    key: "Animate",
    value: function Animate() {
      // jump
      if (keys['Space'] || keys['KeyW']) {
        this.Jump();
      } else {
        this.jumpTimer = 0;
      }

      if (keys['ShiftLeft'] || keys['KeyS']) {
        this.height = this.originalHeight / 2;
      } else {
        this.height = this.originalHeight;
      }

      this.y += this.dy; // gravity

      if (this.y + this.height < _index__WEBPACK_IMPORTED_MODULE_0__.canvas.height) {
        this.dy += this.gravity;
        this.grounded = false;
      } else {
        this.dy = 0;
        this.grounded = true;
        this.y = _index__WEBPACK_IMPORTED_MODULE_0__.canvas.height - this.height;
      }

      this.Draw();
    }
  }, {
    key: "Jump",
    value: function Jump() {
      if (this.grounded && this.jumpTimer == 0) {
        this.jumpTimer = 1;
        this.dy = -this.jumpForce;
      } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
        this.jumpTimer++;
        this.dy = -this.jumpForce - this.jumpTimer / 50;
      }
    }
  }, {
    key: "Draw",
    value: function Draw() {
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = this.color;
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.fillRect(this.x, this.y, this.width, this.height);
      _index__WEBPACK_IMPORTED_MODULE_0__.ctx.closePath();
    }
  }]);

  return Player;
}();

/***/ }),

/***/ "./src/playerTwo.js":
/*!**************************!*\
  !*** ./src/playerTwo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PlayerTwo
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");
/* harmony import */ var _player_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player-sound */ "./src/player-sound.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var PlayerTwo = /*#__PURE__*/function () {
  function PlayerTwo(options) {
    _classCallCheck(this, PlayerTwo);

    this.ctx = options.ctx;
    this.image = options.image;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = options.ticksPerFrame || 0;
    this.numberOfFrames = options.numberOfFrames || 1;
    this.width = options.width;
    this.height = options.height;
    this.dy = options.dy || 0;
    this.jumpForce = 15;
    this.grounded = false;
    this.jumpTimer = 0;
    this.y = options.y;
    this.x = options.x;
    this.gravity = 1;
    this.sound = new _player_sound__WEBPACK_IMPORTED_MODULE_2__.default();
  }

  _createClass(PlayerTwo, [{
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

      console.log();
    }
  }, {
    key: "render",
    value: function render() {
      this.ctx.clearRect(0, 0, this.width / this.numberOfFrames, this.height);
      this.ctx.drawImage(this.image, this.frameIndex * this.width / this.numberOfFrames, 0, this.width / this.numberOfFrames, this.height, 0, this.y, this.width / this.numberOfFrames, this.height);
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

  return PlayerTwo;
}();



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
/* harmony import */ var _obstacle_two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle-two */ "./src/obstacle-two.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start_game */ "./src/start_game.js");


 // import {gameSpeed, player, obstacles} from './start_game';



function SpawnObstacle() {
  // let size = RandomIntRange(20, 70);
  var type = RandomIntRange(3, 4);
  var obstacle = new _obstacle_two__WEBPACK_IMPORTED_MODULE_1__.default({
    x: _index__WEBPACK_IMPORTED_MODULE_2__.canvas.width,
    y: _index__WEBPACK_IMPORTED_MODULE_2__.canvas.height,
    width: 50,
    height: 50,
    gameSpeed: _start_game__WEBPACK_IMPORTED_MODULE_3__.gameSpeed,
    imageSrc: "images/obstacle".concat(type, ".png")
  }); // if (type == 1) {
  //   obstacle.y -= player.originalHeight - 10;
  // }

  _start_game__WEBPACK_IMPORTED_MODULE_3__.obstacles.push(obstacle);
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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _playerTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerTwo */ "./src/playerTwo.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ "./src/text.js");
/* harmony import */ var _spawn_obstacle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spawn_obstacle */ "./src/spawn_obstacle.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./src/index.js");
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
  _index__WEBPACK_IMPORTED_MODULE_4__.canvas.width = window.innerWidth;
  _index__WEBPACK_IMPORTED_MODULE_4__.canvas.height = window.innerHeight - 205;
  document.addEventListener('keydown', function (e) {
    keys[e.code] = true;
  });
  document.addEventListener('keyup', function (e) {
    keys[e.code] = false;
  });
  _index__WEBPACK_IMPORTED_MODULE_4__.ctx.font = "20px sans-serif";
  gameSpeed = 3;
  gravity = 1;
  score = 0;
  highScore = 0;

  if (localStorage.getItem('highscore')) {
    highScore = localStorage.getItem('highscore');
  }

  coinImage = new Image();
  coinImage.src = 'images/sprite2.png';
  player = new _playerTwo__WEBPACK_IMPORTED_MODULE_1__.default({
    ctx: _index__WEBPACK_IMPORTED_MODULE_4__.canvas.getContext('2d'),
    image: coinImage,
    width: 600,
    height: 100,
    numberOfFrames: 6,
    ticksPerFrame: 4,
    x: 50,
    y: 50
  });

  coinImage.onload = function () {
    player.start();
  };

  scoreText = new _text__WEBPACK_IMPORTED_MODULE_2__.Text("Score: ".concat(score), 25, 25, "left", "#212121", "20");
  hightScoreText = new _text__WEBPACK_IMPORTED_MODULE_2__.Text("Highscore: ".concat(highScore), _index__WEBPACK_IMPORTED_MODULE_4__.canvas.width - 25, 25, "right", "#212121", "20");
  playSound.playFon();
  requestAnimationFrame(Update);
}

var initialSpawnTimer = 200;
var spawnTimer = initialSpawnTimer;

function Update() {
  requestAnimationFrame(Update);
  _index__WEBPACK_IMPORTED_MODULE_4__.ctx.clearRect(0, 0, _index__WEBPACK_IMPORTED_MODULE_4__.canvas.width, _index__WEBPACK_IMPORTED_MODULE_4__.canvas.height); // выключить фоновую музыку

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
    (0,_spawn_obstacle__WEBPACK_IMPORTED_MODULE_3__.SpawnObstacle)();
    spawnTimer = initialSpawnTimer - gameSpeed * 8;

    if (spawnTimer < 60) {
      spawnTimer = 60;
    }
  } // spawn enemies


  for (var i = 0; i < obstacles.length; i++) {
    var o = obstacles[i];

    if (o.x + o.width < 0) {
      obstacles.splice(i, 1);
    } // перезагрузка игры при столкновении


    if (player.x < o.x + o.width && player.x + player.width / 10 - 10 > o.x && player.y < o.y + o.height && player.y + player.height >= o.y) {
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
  } // gameSpeed += 0.003;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dhbWUtc291bmQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL29ic3RhY2xlLXR3by5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL29ic3RhY2xlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGxheWVyLXNvdW5kLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGxheWVyVHdvLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvc3Bhd25fb2JzdGFjbGUuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9zdGFydF9nYW1lLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvdGV4dC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiR2FtZVNvdW5kIiwiZm9uU291bmQiLCJBdWRpbyIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidm9sdW1lIiwiZGVhZFNvdW5kIiwibG9vcCIsInBsYXkiLCJwYXVzZSIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0Iiwic3RhcnQiLCJPYnN0YWNsZVR3byIsIm9wdGlvbnMiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZVNwZWVkIiwiZHgiLCJjb3VudGVyIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsImltYWdlU3JjIiwicmVuZGVyIiwiT2JzdGFjbGUiLCJjb2xvciIsIkRyYXciLCJQbGF5ZXJTb3VuZCIsInNvdW5kVXAiLCJzb3VuZERvd24iLCJpc0dyYXZpdHlEb3duIiwiaXNKdW1wVXAiLCJjdXJyZW50VGltZSIsIlBsYXllciIsImR5IiwianVtcEZvcmNlIiwib3JpZ2luYWxIZWlnaHQiLCJncm91bmRlZCIsImp1bXBUaW1lciIsImdyYXZpdHkiLCJrZXlzIiwiSnVtcCIsIlBsYXllclR3byIsImZyYW1lSW5kZXgiLCJ0aWNrQ291bnQiLCJ0aWNrc1BlckZyYW1lIiwibnVtYmVyT2ZGcmFtZXMiLCJzb3VuZCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclJlY3QiLCJkcmF3SW1hZ2UiLCJqdW1wVXAiLCJqdW1wRG93biIsInVwZGF0ZSIsImdyYXZpdHlHbyIsImdldFJlYWR5VG9KdW1wIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiU3Bhd25PYnN0YWNsZSIsInR5cGUiLCJSYW5kb21JbnRSYW5nZSIsIm9ic3RhY2xlIiwib2JzdGFjbGVzIiwibWluIiwibWF4IiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwic2NvcmUiLCJoaWdoU2NvcmUiLCJzY29yZVRleHQiLCJoaWdodFNjb3JlVGV4dCIsInBsYXllciIsImNvaW5JbWFnZSIsImp1bXBUcnVlIiwicGxheVNvdW5kIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm9ubG9hZCIsIlRleHQiLCJwbGF5Rm9uIiwiVXBkYXRlIiwiaW5pdGlhbFNwYXduVGltZXIiLCJzcGF3blRpbWVyIiwiS2V5USIsInN0b3BGb24iLCJLZXlBIiwiaSIsImxlbmd0aCIsIm8iLCJzcGxpY2UiLCJwbGF5RGVhZCIsInNldEl0ZW0iLCJ0IiwiYSIsImMiLCJzIl0sIm1hcHBpbmdzIjoiOzs7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Ozs7Ozs7VUNGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiLi9qcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTb3VuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyB0aGlzLnVybCA9IHdpbmRvdy5nYW1lU3RhdGUuc291bmRVcmw7XHJcbiAgICAvLyB0aGlzLm51bSA9IDE7XHJcbiAgICB0aGlzLmZvblNvdW5kID0gbmV3IEF1ZGlvKCdzb3VuZC9mb24xLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmZvblNvdW5kKTtcclxuICAgIHRoaXMuZm9uU291bmQudm9sdW1lID0gMC4xO1xyXG4gICAgdGhpcy5kZWFkU291bmQgPSBuZXcgQXVkaW8oJ3NvdW5kL2RlYWQubXAzJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZGVhZFNvdW5kKTtcclxuICB9XHJcblxyXG4gIHBsYXlGb24oKSB7XHJcbiAgICB0aGlzLmZvblNvdW5kLmxvb3AgPSB0cnVlO1xyXG4gICAgdGhpcy5mb25Tb3VuZC5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBzdG9wRm9uKCkge1xyXG4gICAgdGhpcy5mb25Tb3VuZC5wYXVzZSgpO1xyXG4gIH1cclxuXHJcbiAgcGxheURlYWQoKSB7XHJcbiAgICB0aGlzLmRlYWRTb3VuZC5wbGF5KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgT2JzdGFjbGUgfSBmcm9tICcuL29ic3RhY2xlJztcclxuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4vdGV4dCc7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSAnLi9zdGFydF9nYW1lJztcclxuXHJcbi8vIGxldCBrZXlzID0ge307XHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4vLyB3aW5kb3cuZ2FtZVN0YXRlID0ge1xyXG4vLyAgIHNvdW5kVXJsOiAnLi4vLi9kaXN0L3NvdW5kLycsXHJcbi8vICAgaW1nVXJsOiAnLi4vLi9kaXN0L2ltZy8nLFxyXG4vLyAgIGlzRm9uU291bmQ6IHRydWUsXHJcbi8vICAgaXNQbGF5ZXJTb3VuZDogdHJ1ZSxcclxuLy8gICBzZXQgaXNTdGFydEdhbWUodmFsdWUpIHtcclxuLy8gICAgIFN0YXJ0KCk7XHJcbi8vICAgfSxcclxuLy8gfTtcclxuXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4vLyAgIGtleXNbZS5jb2RlXSA9IHRydWU7XHJcbi8vIH0pO1xyXG4vL1xyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbi8vICAga2V5c1tlLmNvZGVdID0gZmFsc2U7XHJcbi8vIH0pO1xyXG5cclxuc3RhcnQoKTtcclxuXHJcbi8vIGV4cG9ydCB7Y2FudmFzLCBjdHgsIGtleXN9XHJcbmV4cG9ydCB7IGNhbnZhcywgY3R4IH07XHJcbiIsImltcG9ydCB7Y2FudmFzLCBjdHh9IGZyb20gJy4vaW5kZXguanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlVHdvIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLnggPSBvcHRpb25zLng7XG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgdGhpcy5nYW1lU3BlZWQgPSBvcHRpb25zLmdhbWVTcGVlZDtcblxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XG4gICAgdGhpcy5jb3VudGVyID0gMDtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IG9wdGlvbnMuaW1hZ2VTcmM7XG4gIH1cblxuICBVcGRhdGUgKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIHRoaXMueCxcbiAgICAgIGNhbnZhcy5oZWlnaHQgLSA1NSxcbiAgICApXG4gIH1cblxufVxuIiwiaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9pbmRleC5qcyc7XG5cblxuZXhwb3J0IGNsYXNzIE9ic3RhY2xlIHtcbiAgY29uc3RydWN0b3IgKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBnYW1lU3BlZWQpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmdhbWVTcGVlZCA9IGdhbWVTcGVlZDtcblxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XG4gIH1cblxuICBVcGRhdGUgKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgIHRoaXMuRHJhdygpO1xuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XG4gIH1cblxuICBEcmF3ICgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllclNvdW5kIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIHRoaXMudXJsID0gd2luZG93LmdhbWVTdGF0ZS5zb3VuZFVybDtcclxuICAgIHRoaXMuc291bmRVcCA9IG5ldyBBdWRpbygnc291bmQvanVtcFVwLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kVXApO1xyXG4gICAgdGhpcy5zb3VuZERvd24gPSBuZXcgQXVkaW8oJ3NvdW5kL2dyYXZpdHlEb3duLm1wMycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kRG93bik7XHJcbiAgICB0aGlzLmlzR3Jhdml0eURvd24gPSBmYWxzZTtcclxuICAgIHRoaXMuaXNKdW1wVXAgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGp1bXBVcCgpIHtcclxuICAgIGlmICghdGhpcy5pc0p1bXBVcCkge1xyXG4gICAgICB0aGlzLnNvdW5kVXAucGxheSgpO1xyXG4gICAgICB0aGlzLmlzSnVtcFVwID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGp1bXBEb3duKCkge1xyXG4gICAgdGhpcy5zb3VuZFVwLnBhdXNlKCk7XHJcbiAgICB0aGlzLnNvdW5kVXAuY3VycmVudFRpbWUgPSAwLjA7XHJcbiAgICB0aGlzLmlzSnVtcFVwID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBncmF2aXR5RG93bigpIHtcclxuICAgIGlmICghdGhpcy5pc0dyYXZpdHlEb3duKSB7XHJcbiAgICAgIHRoaXMuc291bmREb3duLnBsYXkoKTtcclxuICAgICAgdGhpcy5pc0dyYXZpdHlEb3duID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdyYXZpdHlVcCgpIHtcclxuICAgIHRoaXMuc291bmREb3duLnBhdXNlKCk7XHJcbiAgICB0aGlzLnNvdW5kRG93bi5jdXJyZW50VGltZSA9IDAuMDtcclxuICAgIHRoaXMuaXNHcmF2aXR5RG93biA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCIvLyBpbXBvcnQge2tleXMsIGNhbnZhcywgY3R4fSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcclxuICBjb25zdHJ1Y3RvciAoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcblxyXG4gICAgdGhpcy5keSA9IDA7XHJcbiAgICB0aGlzLmp1bXBGb3JjZSA9IDE1O1xyXG4gICAgdGhpcy5vcmlnaW5hbEhlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuanVtcFRpbWVyID0gMDtcclxuXHJcbiAgICB0aGlzLmdyYXZpdHkgPSAxO1xyXG4gIH1cclxuXHJcbiAgQW5pbWF0ZSAoKSB7XHJcbiAgICAvLyBqdW1wXHJcblxyXG4gICAgaWYoa2V5c1snU3BhY2UnXSB8fCBrZXlzWydLZXlXJ10pe1xyXG5cclxuICAgICAgdGhpcy5KdW1wKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmp1bXBUaW1lciA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGtleXNbJ1NoaWZ0TGVmdCddIHx8IGtleXNbJ0tleVMnXSkge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMub3JpZ2luYWxIZWlnaHQgLyAyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLm9yaWdpbmFsSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueSArPSB0aGlzLmR5O1xyXG5cclxuICAgIC8vIGdyYXZpdHlcclxuICAgIGlmICh0aGlzLnkgKyB0aGlzLmhlaWdodCA8IGNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgdGhpcy5keSArPSB0aGlzLmdyYXZpdHk7XHJcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmR5ID0gMDtcclxuICAgICAgdGhpcy5ncm91bmRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodDtcclxuICAgIH1cclxuICAgIHRoaXMuRHJhdygpO1xyXG4gIH1cclxuXHJcbiAgSnVtcCAoKSB7XHJcbiAgICBpZiAodGhpcy5ncm91bmRlZCAmJiB0aGlzLmp1bXBUaW1lciA9PSAwKSB7XHJcbiAgICAgIHRoaXMuanVtcFRpbWVyID0gMTtcclxuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5qdW1wVGltZXIgPiAwICYmIHRoaXMuanVtcFRpbWVyIDwgMTUpIHtcclxuICAgICAgdGhpcy5qdW1wVGltZXIrKztcclxuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZSAtICh0aGlzLmp1bXBUaW1lciAvIDUwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIERyYXcgKCkge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjYW52YXMsIGN0eH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQge2tleXN9IGZyb20gJy4vc3RhcnRfZ2FtZSc7XG5pbXBvcnQgUGxheWVyU291bmQgZnJvbSAnLi9wbGF5ZXItc291bmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJUd28ge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5jdHggPSBvcHRpb25zLmN0eDtcblxuICAgIHRoaXMuaW1hZ2UgPSBvcHRpb25zLmltYWdlO1xuXG4gICAgdGhpcy5mcmFtZUluZGV4ID0gMDtcbiAgICB0aGlzLnRpY2tDb3VudCA9IDA7XG4gICAgdGhpcy50aWNrc1BlckZyYW1lID0gb3B0aW9ucy50aWNrc1BlckZyYW1lIHx8IDA7XG4gICAgdGhpcy5udW1iZXJPZkZyYW1lcyA9IG9wdGlvbnMubnVtYmVyT2ZGcmFtZXMgfHwgMTtcblxuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cblxuICAgIHRoaXMuZHkgPSBvcHRpb25zLmR5IHx8IDA7XG4gICAgdGhpcy5qdW1wRm9yY2UgPSAxNTtcbiAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5qdW1wVGltZXIgPSAwO1xuXG4gICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICB0aGlzLmdyYXZpdHkgPSAxO1xuXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBQbGF5ZXJTb3VuZCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudGlja0NvdW50Kys7XG5cbiAgICBpZiAodGhpcy50aWNrQ291bnQgPiB0aGlzLnRpY2tzUGVyRnJhbWUpIHtcbiAgICAgIHRoaXMudGlja0NvdW50ID0gMDtcbiAgICAgIGlmICh0aGlzLmZyYW1lSW5kZXggPCB0aGlzLm51bWJlck9mRnJhbWVzIC0gMSkge1xuICAgICAgICAgIHRoaXMuZnJhbWVJbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZyYW1lSW5kZXggPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKClcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoIC8gdGhpcy5udW1iZXJPZkZyYW1lcywgdGhpcy5oZWlnaHQpO1xuXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIHRoaXMuZnJhbWVJbmRleCAqIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgMCxcbiAgICAgIHRoaXMud2lkdGggLyB0aGlzLm51bWJlck9mRnJhbWVzLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICAwLFxuICAgICAgdGhpcy55LFxuICAgICAgdGhpcy53aWR0aCAvIHRoaXMubnVtYmVyT2ZGcmFtZXMsXG4gICAgICB0aGlzLmhlaWdodFxuICAgIClcbiAgfVxuXG4gIC8vIGdyYXZpdHlcbiAgZ3Jhdml0eUdvKCkge1xuICAgIHRoaXMueSArPSB0aGlzLmR5O1xuXG4gICAgaWYgKHRoaXMueSArIHRoaXMuaGVpZ2h0IDwgY2FudmFzLmhlaWdodCkge1xuICAgICAgdGhpcy5keSArPSB0aGlzLmdyYXZpdHk7XG4gICAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHkgPSAwO1xuICAgICAgdGhpcy5ncm91bmRlZCA9IHRydWU7XG4gICAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8ganVtcFxuICBnZXRSZWFkeVRvSnVtcCgpIHtcbiAgICBpZihrZXlzWydTcGFjZSddIHx8IGtleXNbJ0tleVcnXSl7XG4gICAgICB0aGlzLnNvdW5kLmp1bXBVcCgpO1xuICAgICAgdGhpcy5KdW1wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuanVtcFRpbWVyID0gMDtcbiAgICB9XG4gIH1cblxuICBKdW1wICgpIHtcbiAgICBpZiAodGhpcy5ncm91bmRlZCAmJiB0aGlzLmp1bXBUaW1lciA9PSAwKSB7XG4gICAgICB0aGlzLmp1bXBUaW1lciA9IDE7XG4gICAgICB0aGlzLmR5ID0gLXRoaXMuanVtcEZvcmNlO1xuICAgICAgdGhpcy5zb3VuZC5qdW1wRG93bigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5qdW1wVGltZXIgPiAwICYmIHRoaXMuanVtcFRpbWVyIDwgMTUpIHtcbiAgICAgIHRoaXMuanVtcFRpbWVyKys7XG4gICAgICB0aGlzLmR5ID0gLXRoaXMuanVtcEZvcmNlIC0gKHRoaXMuanVtcFRpbWVyIC8gNTApO1xuICAgIH1cbiAgfVxuXG5cbiAgc3RhcnQoKSB7XG4gICAgbGV0IGxvb3AgPSAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIHRoaXMuZ3Jhdml0eUdvKCk7XG4gICAgICB0aGlzLmdldFJlYWR5VG9KdW1wKCk7XG5cbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtPYnN0YWNsZX0gZnJvbSAnLi9vYnN0YWNsZSc7XG5pbXBvcnQgT2JzdGFjbGVUd28gZnJvbSAnLi9vYnN0YWNsZS10d28nO1xuaW1wb3J0IHtjYW52YXN9IGZyb20gJy4vaW5kZXgnO1xuLy8gaW1wb3J0IHtnYW1lU3BlZWQsIHBsYXllciwgb2JzdGFjbGVzfSBmcm9tICcuL3N0YXJ0X2dhbWUnO1xuaW1wb3J0IHtnYW1lU3BlZWQsIG9ic3RhY2xlc30gZnJvbSAnLi9zdGFydF9nYW1lJztcblxuXG5mdW5jdGlvbiBTcGF3bk9ic3RhY2xlICgpIHtcbiAgLy8gbGV0IHNpemUgPSBSYW5kb21JbnRSYW5nZSgyMCwgNzApO1xuICBsZXQgdHlwZSA9IFJhbmRvbUludFJhbmdlKDMsIDQpO1xuXG5cbiAgbGV0IG9ic3RhY2xlID0gbmV3IE9ic3RhY2xlVHdvKHtcbiAgICB4OiBjYW52YXMud2lkdGgsXG4gICAgeTogY2FudmFzLmhlaWdodCxcbiAgICB3aWR0aDogNTAsXG4gICAgaGVpZ2h0OiA1MCxcbiAgICBnYW1lU3BlZWQ6IGdhbWVTcGVlZCxcbiAgICBpbWFnZVNyYzogYGltYWdlcy9vYnN0YWNsZSR7dHlwZX0ucG5nYCxcbiAgfSk7XG5cblxuICAvLyBpZiAodHlwZSA9PSAxKSB7XG4gIC8vICAgb2JzdGFjbGUueSAtPSBwbGF5ZXIub3JpZ2luYWxIZWlnaHQgLSAxMDtcbiAgLy8gfVxuXG4gIG9ic3RhY2xlcy5wdXNoKG9ic3RhY2xlKTtcbn1cblxuZnVuY3Rpb24gUmFuZG9tSW50UmFuZ2UgKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG59XG5cbmV4cG9ydCB7U3Bhd25PYnN0YWNsZX07XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgIFBsYXllclR3byAgZnJvbSAnLi9wbGF5ZXJUd28nO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgeyBTcGF3bk9ic3RhY2xlIH0gZnJvbSAnLi9zcGF3bl9vYnN0YWNsZSc7XG5pbXBvcnQge2NhbnZhcywgY3R4fSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBHYW1lU291bmQgZnJvbSAnLi9nYW1lLXNvdW5kJztcblxubGV0IGdyYXZpdHk7XG5sZXQgc2NvcmU7XG5sZXQgaGlnaFNjb3JlO1xubGV0IHNjb3JlVGV4dDtcbmxldCBoaWdodFNjb3JlVGV4dDtcblxubGV0IGdhbWVTcGVlZDtcbmxldCBwbGF5ZXI7XG5sZXQgb2JzdGFjbGVzID0gW107XG5cbmxldCBrZXlzID0ge307XG5sZXQgY29pbkltYWdlO1xubGV0IGp1bXBUcnVlID0gZmFsc2U7XG5cbmNvbnN0IHBsYXlTb3VuZCA9IG5ldyBHYW1lU291bmQoKTtcblxuZnVuY3Rpb24gc3RhcnQgKCkge1xuXG4gIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjA1O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGtleXNbZS5jb2RlXSA9IHRydWU7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICBrZXlzW2UuY29kZV0gPSBmYWxzZTtcbiAgfSk7XG5cblxuICBjdHguZm9udCA9IFwiMjBweCBzYW5zLXNlcmlmXCI7XG5cbiAgZ2FtZVNwZWVkID0gMztcbiAgZ3Jhdml0eSA9IDE7XG5cbiAgc2NvcmUgPSAwO1xuICBoaWdoU2NvcmUgPSAwO1xuXG4gIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoc2NvcmUnKSl7XG4gICAgaGlnaFNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hzY29yZScpO1xuICB9XG5cbiAgY29pbkltYWdlID0gbmV3IEltYWdlKCk7XG4gIGNvaW5JbWFnZS5zcmMgPSAnaW1hZ2VzL3Nwcml0ZTIucG5nJztcblxuICBwbGF5ZXIgPSBuZXcgUGxheWVyVHdvKHtcbiAgICBjdHg6IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLFxuICAgIGltYWdlOiBjb2luSW1hZ2UsXG4gICAgd2lkdGg6IDYwMCxcbiAgICBoZWlnaHQ6IDEwMCxcbiAgICBudW1iZXJPZkZyYW1lczogNixcbiAgICB0aWNrc1BlckZyYW1lOiA0LFxuICAgIHg6IDUwLFxuICAgIHk6IDUwLFxuICB9KTtcblxuICBjb2luSW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci5zdGFydCgpO1xuICB9XG5cblxuICBzY29yZVRleHQgPSBuZXcgVGV4dChcbiAgICBgU2NvcmU6ICR7c2NvcmV9YCwgMjUsIDI1LCBcImxlZnRcIiwgXCIjMjEyMTIxXCIsIFwiMjBcIlxuICApO1xuICBoaWdodFNjb3JlVGV4dCA9IG5ldyBUZXh0KFxuICAgIGBIaWdoc2NvcmU6ICR7aGlnaFNjb3JlfWAsIGNhbnZhcy53aWR0aCAtIDI1LCAyNSwgXCJyaWdodFwiLCBcIiMyMTIxMjFcIiwgXCIyMFwiXG4gICk7XG5cbiAgcGxheVNvdW5kLnBsYXlGb24oKTtcblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoVXBkYXRlKTtcbn1cblxubGV0IGluaXRpYWxTcGF3blRpbWVyID0gMjAwO1xubGV0IHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcblxuZnVuY3Rpb24gVXBkYXRlICgpIHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKFVwZGF0ZSk7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAvLyDQstGL0LrQu9GO0YfQuNGC0Ywg0YTQvtC90L7QstGD0Y4g0LzRg9C30YvQutGDXG4gIGlmIChrZXlzLktleVEpIHtcbiAgICAvLyB3aW5kb3cuZ2FtZVN0YXRlLmlzRm9uU291bmQgPSBmYWxzZTtcbiAgICBwbGF5U291bmQuc3RvcEZvbigpO1xuICB9XG5cbiAgLy8g0LLQutC70Y7Rh9C40YLRjCDRhNC+0L3QvtCy0YPRjiDQvNGD0LfRi9C60YNcbiAgaWYgKGtleXMuS2V5QSkge1xuICAgIC8vIHdpbmRvdy5nYW1lU3RhdGUuaXNGb25Tb3VuZCA9IHRydWU7XG4gICAgcGxheVNvdW5kLnBsYXlGb24oKTtcbiAgfVxuXG4gIHNwYXduVGltZXItLTtcbiAgaWYgKHNwYXduVGltZXIgPD0gMCkge1xuICAgIFNwYXduT2JzdGFjbGUoKTtcbiAgICBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXIgLSBnYW1lU3BlZWQgKiA4O1xuXG4gICAgaWYgKHNwYXduVGltZXIgPCA2MCkge1xuICAgICAgc3Bhd25UaW1lciA9IDYwO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNwYXduIGVuZW1pZXNcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9ic3RhY2xlcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IG8gPSBvYnN0YWNsZXNbaV07XG5cbiAgICBpZiAoby54ICsgby53aWR0aCA8IDApe1xuICAgICAgb2JzdGFjbGVzLnNwbGljZShpLCAxKTtcbiAgICB9XG5cblxuICAgIC8vINC/0LXRgNC10LfQsNCz0YDRg9C30LrQsCDQuNCz0YDRiyDQv9GA0Lgg0YHRgtC+0LvQutC90L7QstC10L3QuNC4XG4gICAgaWYgKFxuICAgICAgcGxheWVyLnggPCBvLnggKyBvLndpZHRoICYmXG4gICAgICBwbGF5ZXIueCArIChwbGF5ZXIud2lkdGggLyAxMCkgLSAxMCA+IG8ueCAmJlxuICAgICAgcGxheWVyLnkgPCBvLnkgKyBvLmhlaWdodCAmJlxuICAgICAgcGxheWVyLnkgKyBwbGF5ZXIuaGVpZ2h0ID49IG8ueVxuICAgICkge1xuICAgICAgcGxheVNvdW5kLnBsYXlEZWFkKCk7XG4gICAgICBvYnN0YWNsZXMgPSBbXTtcbiAgICAgIGdhbWVTcGVlZCA9IDM7XG4gICAgICBzY29yZSA9IDA7XG4gICAgICBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXI7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hzY29yZScsIGhpZ2hTY29yZSk7XG4gICAgfVxuICAgIG8uVXBkYXRlKCk7XG4gIH1cblxuICBzY29yZSsrO1xuICBzY29yZVRleHQudCA9IFwiU2NvcmU6IFwiICsgc2NvcmU7XG5cbiAgc2NvcmVUZXh0LkRyYXcoKTtcblxuICBpZiAoc2NvcmUgPiBoaWdoU2NvcmUpIHtcbiAgICBoaWdoU2NvcmUgPSBzY29yZTtcbiAgICBoaWdodFNjb3JlVGV4dC50ID0gYEhpZ2hzY29yZTogJHtoaWdoU2NvcmV9YDtcblxuICB9XG5cbiAgLy8gZ2FtZVNwZWVkICs9IDAuMDAzO1xuICBoaWdodFNjb3JlVGV4dC5EcmF3KCk7XG59XG5cbi8vIGV4cG9ydCB7c3RhcnQsIGdhbWVTcGVlZCwgb2JzdGFjbGVzLCBwbGF5ZXJ9O1xuZXhwb3J0IHtzdGFydCwgZ2FtZVNwZWVkLCBvYnN0YWNsZXMsIGtleXN9O1xuIiwiaW1wb3J0IHtjdHh9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHQge1xyXG4gIGNvbnN0cnVjdG9yICh0LCB4LCB5LCBhLCBjLCBzKSB7XHJcbiAgICB0aGlzLnQgPSB0O1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmEgPSBhO1xyXG4gICAgdGhpcy5jID0gYztcclxuICAgIHRoaXMucyA9IHM7XHJcbiAgfVxyXG5cclxuICBEcmF3ICgpIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmM7XHJcbiAgICBjdHguZm9udCA9IGAke3RoaXMuc31weCBzYW5zLXNlcmlmYDtcclxuICAgIGN0eC50ZXh0QWxpZ24gPSB0aGlzLmE7XHJcbiAgICBjdHguZmlsbFRleHQodGhpcy50LCB0aGlzLngsIHRoaXMueSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
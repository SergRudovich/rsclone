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

    this.url = window.gameState.soundUrl;
    this.num = 1;
    this.fonSound = new Audio("".concat(this.url, "fon").concat(this.num, ".mp3"));
    document.body.appendChild(this.fonSound);
    this.fonSound.volume = 0.1;
    this.deadSound = new Audio("".concat(this.url, "dead.mp3"));
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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _obstacle___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle  */ "./src/obstacle .js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ "./src/text.js");
/* harmony import */ var _random_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./random-range */ "./src/random-range.js");
/* harmony import */ var _game_sound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-sound */ "./src/game-sound.js");
/* eslint-disable linebreak-style */





var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d'); // Variables

var score;
var scoreText;
var highscore;
var highscoreText;
var player;
var gravity;
var obstacles = [];
var gameSpeed;
var keys = {};
window.gameState = {
  soundUrl: '.././dist/sound/',
  isFonSound: true,
  isPlayerSound: true
};
var playSound = new _game_sound__WEBPACK_IMPORTED_MODULE_4__.default(); // Event Listeners

document.addEventListener('keydown', function (evt) {
  keys[evt.code] = true;
});
document.addEventListener('keyup', function (evt) {
  keys[evt.code] = false;
});

function SpawnObstacle() {
  var size = (0,_random_range__WEBPACK_IMPORTED_MODULE_3__.default)(20, 70);
  var type = (0,_random_range__WEBPACK_IMPORTED_MODULE_3__.default)(0, 1);
  var obstacle = new _obstacle___WEBPACK_IMPORTED_MODULE_1__.default(canvas.width + size, canvas.height - size, size, size, '#2484E4', ctx, gameSpeed);

  if (type === 1) {
    obstacle.y -= player.originalHeight - 10;
  }

  obstacles.push(obstacle);
}

var initialSpawnTimer = 200;
var spawnTimer = initialSpawnTimer;

function Update() {
  requestAnimationFrame(Update);
  ctx.clearRect(0, 0, canvas.width, canvas.height); // выключить фоновую музыку

  if (keys.KeyQ) {
    window.gameState.isFonSound = false;
    playSound.stopFon();
  } // включить фоновую музыку


  if (keys.KeyA) {
    window.gameState.isFonSound = true;
    playSound.playFon();
  }

  spawnTimer -= 1;

  if (spawnTimer <= 0) {
    SpawnObstacle();
    spawnTimer = initialSpawnTimer - gameSpeed * 8;

    if (spawnTimer < 60) {
      spawnTimer = 60;
    }
  } // Spawn Enemies


  for (var i = 0; i < obstacles.length; i += 1) {
    var o = obstacles[i];

    if (o.x + o.w < 0) {
      obstacles.splice(i, 1);
    }

    if (player.x < o.x + o.w && player.x + player.w > o.x && player.y < o.y + o.h && player.y + player.h > o.y) {
      playSound.playDead();
      obstacles = [];
      score = 0;
      spawnTimer = initialSpawnTimer;
      gameSpeed = 3;
      window.localStorage.setItem('highscore', highscore);
    }

    o.Update();
  }

  player.Animate();
  score += 1;
  scoreText.t = "Score: ".concat(score);
  scoreText.Draw();

  if (score > highscore) {
    highscore = score;
    highscoreText.t = "Highscore: ".concat(highscore);
  }

  highscoreText.Draw();
  gameSpeed += 0.003;
}

function Start() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.font = '20px sans-serif';
  gameSpeed = 3;
  gravity = 1;
  score = 0;
  highscore = 0;

  if (localStorage.getItem('highscore')) {
    highscore = localStorage.getItem('highscore');
  }

  player = new _player__WEBPACK_IMPORTED_MODULE_0__.default(25, 0, 50, 50, '#FF5858', canvas, ctx, keys, gravity);
  scoreText = new _text__WEBPACK_IMPORTED_MODULE_2__.default("Score: ".concat(score), 25, 25, 'left', '#212121', '20', ctx);
  highscoreText = new _text__WEBPACK_IMPORTED_MODULE_2__.default("Highscore: ".concat(highscore), canvas.width - 25, 25, 'right', '#212121', '20', ctx);
  requestAnimationFrame(Update);
}

Start();

if (window.gameState.isFonSound) {
  playSound.playFon();
}

/***/ }),

/***/ "./src/obstacle .js":
/*!**************************!*\
  !*** ./src/obstacle .js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Obstacle
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable linebreak-style */
var Obstacle = /*#__PURE__*/function () {
  function Obstacle(x, y, w, h, c, ctx, gameSpeed) {
    _classCallCheck(this, Obstacle);

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.ctx = ctx;
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
      this.ctx.beginPath();
      this.ctx.fillStyle = this.c;
      this.ctx.fillRect(this.x, this.y, this.w, this.h);
      this.ctx.closePath();
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

    this.url = window.gameState.soundUrl;
    this.soundUp = new Audio("".concat(this.url, "jumpUp.mp3"));
    document.body.appendChild(this.soundUp);
    this.soundDown = new Audio("".concat(this.url, "gravityDown.mp3"));
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
/* harmony export */   "default": () => /* binding */ Player
/* harmony export */ });
/* harmony import */ var _player_sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player-sound */ "./src/player-sound.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable linebreak-style */


var Player = /*#__PURE__*/function () {
  function Player(x, y, w, h, c, canvas, ctx, keys, gravity) {
    _classCallCheck(this, Player);

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.canvas = canvas;
    this.ctx = ctx;
    this.keys = keys;
    this.gravity = gravity;
    this.dy = 0;
    this.jumpForce = 15;
    this.originalHeight = h;
    this.grounded = false;
    this.jumpTimer = 0;
    this.sound = new _player_sound__WEBPACK_IMPORTED_MODULE_0__.default();
  }

  _createClass(Player, [{
    key: "Animate",
    value: function Animate() {
      // Jump
      if (this.keys.Space || this.keys.KeyW) {
        this.sound.jumpUp();
        this.Jump();
      } else {
        this.jumpTimer = 0;
      }

      if (this.keys.ShiftLeft || this.keys.KeyS) {
        this.h = this.originalHeight / 2;
        this.sound.gravityDown();
      } else {
        this.h = this.originalHeight;
        this.sound.gravityUp();
      }

      this.y += this.dy; // Gravity

      if (this.y + this.h < this.canvas.height) {
        this.dy += this.gravity;
        this.grounded = false;
      } else {
        this.dy = 0;
        this.grounded = true;
        this.y = this.canvas.height - this.h;
      }

      this.Draw();
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
      }
    }
  }, {
    key: "Draw",
    value: function Draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.c;
      this.ctx.fillRect(this.x, this.y, this.w, this.h);
      this.ctx.closePath();
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./src/random-range.js":
/*!*****************************!*\
  !*** ./src/random-range.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ RandomRange
/* harmony export */ });
/* eslint-disable linebreak-style */
function RandomRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable linebreak-style */
var Text = /*#__PURE__*/function () {
  function Text(t, x, y, a, c, s, ctx) {
    _classCallCheck(this, Text);

    this.t = t;
    this.x = x;
    this.y = y;
    this.a = a;
    this.c = c;
    this.s = s;
    this.ctx = ctx;
  }

  _createClass(Text, [{
    key: "Draw",
    value: function Draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.c;
      this.ctx.font = "".concat(this.s, "px sans-serif");
      this.ctx.textAlign = this.a;
      this.ctx.fillText(this.t, this.x, this.y);
      this.ctx.closePath();
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2dhbWUtc291bmQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL29ic3RhY2xlIC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3BsYXllci1zb3VuZC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3JhbmRvbS1yYW5nZS5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL3RleHQuanMiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkdhbWVTb3VuZCIsInVybCIsIndpbmRvdyIsImdhbWVTdGF0ZSIsInNvdW5kVXJsIiwibnVtIiwiZm9uU291bmQiLCJBdWRpbyIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidm9sdW1lIiwiZGVhZFNvdW5kIiwibG9vcCIsInBsYXkiLCJwYXVzZSIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInNjb3JlIiwic2NvcmVUZXh0IiwiaGlnaHNjb3JlIiwiaGlnaHNjb3JlVGV4dCIsInBsYXllciIsImdyYXZpdHkiLCJvYnN0YWNsZXMiLCJnYW1lU3BlZWQiLCJrZXlzIiwiaXNGb25Tb3VuZCIsImlzUGxheWVyU291bmQiLCJwbGF5U291bmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwiY29kZSIsIlNwYXduT2JzdGFjbGUiLCJzaXplIiwiUmFuZG9tUmFuZ2UiLCJ0eXBlIiwib2JzdGFjbGUiLCJPYnN0YWNsZSIsIndpZHRoIiwiaGVpZ2h0IiwieSIsIm9yaWdpbmFsSGVpZ2h0IiwicHVzaCIsImluaXRpYWxTcGF3blRpbWVyIiwic3Bhd25UaW1lciIsIlVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsIktleVEiLCJzdG9wRm9uIiwiS2V5QSIsInBsYXlGb24iLCJpIiwibGVuZ3RoIiwibyIsIngiLCJ3Iiwic3BsaWNlIiwiaCIsInBsYXlEZWFkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkFuaW1hdGUiLCJ0IiwiRHJhdyIsIlN0YXJ0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZm9udCIsImdldEl0ZW0iLCJQbGF5ZXIiLCJUZXh0IiwiYyIsImR4IiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjbG9zZVBhdGgiLCJQbGF5ZXJTb3VuZCIsInNvdW5kVXAiLCJzb3VuZERvd24iLCJpc0dyYXZpdHlEb3duIiwiaXNKdW1wVXAiLCJjdXJyZW50VGltZSIsImR5IiwianVtcEZvcmNlIiwiZ3JvdW5kZWQiLCJqdW1wVGltZXIiLCJzb3VuZCIsIlNwYWNlIiwiS2V5VyIsImp1bXBVcCIsIkp1bXAiLCJTaGlmdExlZnQiLCJLZXlTIiwiZ3Jhdml0eURvd24iLCJncmF2aXR5VXAiLCJqdW1wRG93biIsIm1pbiIsIm1heCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImEiLCJzIiwidGV4dEFsaWduIiwiZmlsbFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFFcUJBLFM7QUFDbkIsdUJBQWM7QUFBQTs7QUFDWixTQUFLQyxHQUFMLEdBQVdDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsUUFBNUI7QUFDQSxTQUFLQyxHQUFMLEdBQVcsQ0FBWDtBQUNBLFNBQUtDLFFBQUws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QUNBLFNBQUtnQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLekYsR0FBTCxHQUFXQSxHQUFYO0FBQ0Q7Ozs7MkJBRU07QUFDTCxXQUFLQSxHQUFMLENBQVMyRCxTQUFUO0FBQ0EsV0FBSzNELEdBQUwsQ0FBUzRELFNBQVQsR0FBcUIsS0FBS0gsQ0FBMUI7QUFDQSxXQUFLekQsR0FBTCxDQUFTcUQsSUFBVCxhQUFtQixLQUFLb0MsQ0FBeEI7QUFDQSxXQUFLekYsR0FBTCxDQUFTMEYsU0FBVCxHQUFxQixLQUFLRixDQUExQjtBQUNBLFdBQUt4RixHQUFMLENBQVMyRixRQUFULENBQWtCLEtBQUszQyxDQUF2QixFQUEwQixLQUFLUixDQUEvQixFQUFrQyxLQUFLZixDQUF2QztBQUNBLFdBQUt6QixHQUFMLENBQVM4RCxTQUFUO0FBQ0Q7Ozs7Ozs7Ozs7OztVQ25CSDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiLi9qcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTb3VuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnVybCA9IHdpbmRvdy5nYW1lU3RhdGUuc291bmRVcmw7XHJcbiAgICB0aGlzLm51bSA9IDE7XHJcbiAgICB0aGlzLmZvblNvdW5kID0gbmV3IEF1ZGlvKGAke3RoaXMudXJsfWZvbiR7dGhpcy5udW19Lm1wM2ApO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmZvblNvdW5kKTtcclxuICAgIHRoaXMuZm9uU291bmQudm9sdW1lID0gMC4xO1xyXG4gICAgdGhpcy5kZWFkU291bmQgPSBuZXcgQXVkaW8oYCR7dGhpcy51cmx9ZGVhZC5tcDNgKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kZWFkU291bmQpO1xyXG4gIH1cclxuXHJcbiAgcGxheUZvbigpIHtcclxuICAgIHRoaXMuZm9uU291bmQubG9vcCA9IHRydWU7XHJcbiAgICB0aGlzLmZvblNvdW5kLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIHN0b3BGb24oKSB7XHJcbiAgICB0aGlzLmZvblNvdW5kLnBhdXNlKCk7XHJcbiAgfVxyXG5cclxuICBwbGF5RGVhZCgpIHtcclxuICAgIHRoaXMuZGVhZFNvdW5kLnBsYXkoKTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IE9ic3RhY2xlIGZyb20gJy4vb2JzdGFjbGUgJztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0JztcclxuaW1wb3J0IFJhbmRvbVJhbmdlIGZyb20gJy4vcmFuZG9tLXJhbmdlJztcclxuaW1wb3J0IEdhbWVTb3VuZCBmcm9tICcuL2dhbWUtc291bmQnO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4vLyBWYXJpYWJsZXNcclxubGV0IHNjb3JlO1xyXG5sZXQgc2NvcmVUZXh0O1xyXG5sZXQgaGlnaHNjb3JlO1xyXG5sZXQgaGlnaHNjb3JlVGV4dDtcclxubGV0IHBsYXllcjtcclxubGV0IGdyYXZpdHk7XHJcbmxldCBvYnN0YWNsZXMgPSBbXTtcclxubGV0IGdhbWVTcGVlZDtcclxuY29uc3Qga2V5cyA9IHt9O1xyXG5cclxud2luZG93LmdhbWVTdGF0ZSA9IHtcclxuICBzb3VuZFVybDogJy4uLy4vZGlzdC9zb3VuZC8nLFxyXG4gIGlzRm9uU291bmQ6IHRydWUsXHJcbiAgaXNQbGF5ZXJTb3VuZDogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IHBsYXlTb3VuZCA9IG5ldyBHYW1lU291bmQoKTtcclxuXHJcbi8vIEV2ZW50IExpc3RlbmVyc1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2dCkgPT4ge1xyXG4gIGtleXNbZXZ0LmNvZGVdID0gdHJ1ZTtcclxufSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2dCkgPT4ge1xyXG4gIGtleXNbZXZ0LmNvZGVdID0gZmFsc2U7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gU3Bhd25PYnN0YWNsZSgpIHtcclxuICBjb25zdCBzaXplID0gUmFuZG9tUmFuZ2UoMjAsIDcwKTtcclxuICBjb25zdCB0eXBlID0gUmFuZG9tUmFuZ2UoMCwgMSk7XHJcbiAgY29uc3Qgb2JzdGFjbGUgPSBuZXcgT2JzdGFjbGUoY2FudmFzLndpZHRoICsgc2l6ZSwgY2FudmFzLmhlaWdodCAtIHNpemUsIHNpemUsIHNpemUsICcjMjQ4NEU0JywgY3R4LCBnYW1lU3BlZWQpO1xyXG5cclxuICBpZiAodHlwZSA9PT0gMSkge1xyXG4gICAgb2JzdGFjbGUueSAtPSBwbGF5ZXIub3JpZ2luYWxIZWlnaHQgLSAxMDtcclxuICB9XHJcbiAgb2JzdGFjbGVzLnB1c2gob2JzdGFjbGUpO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3Bhd25UaW1lciA9IDIwMDtcclxubGV0IHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcclxuZnVuY3Rpb24gVXBkYXRlKCkge1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShVcGRhdGUpO1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgLy8g0LLRi9C60LvRjtGH0LjRgtGMINGE0L7QvdC+0LLRg9GOINC80YPQt9GL0LrRg1xyXG4gIGlmIChrZXlzLktleVEpIHtcclxuICAgIHdpbmRvdy5nYW1lU3RhdGUuaXNGb25Tb3VuZCA9IGZhbHNlO1xyXG4gICAgcGxheVNvdW5kLnN0b3BGb24oKTtcclxuICB9XHJcblxyXG4gIC8vINCy0LrQu9GO0YfQuNGC0Ywg0YTQvtC90L7QstGD0Y4g0LzRg9C30YvQutGDXHJcbiAgaWYgKGtleXMuS2V5QSkge1xyXG4gICAgd2luZG93LmdhbWVTdGF0ZS5pc0ZvblNvdW5kID0gdHJ1ZTtcclxuICAgIHBsYXlTb3VuZC5wbGF5Rm9uKCk7XHJcbiAgfVxyXG5cclxuICBzcGF3blRpbWVyIC09IDE7XHJcbiAgaWYgKHNwYXduVGltZXIgPD0gMCkge1xyXG4gICAgU3Bhd25PYnN0YWNsZSgpO1xyXG4gICAgc3Bhd25UaW1lciA9IGluaXRpYWxTcGF3blRpbWVyIC0gZ2FtZVNwZWVkICogODtcclxuXHJcbiAgICBpZiAoc3Bhd25UaW1lciA8IDYwKSB7XHJcbiAgICAgIHNwYXduVGltZXIgPSA2MDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFNwYXduIEVuZW1pZXNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9ic3RhY2xlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgbyA9IG9ic3RhY2xlc1tpXTtcclxuXHJcbiAgICBpZiAoby54ICsgby53IDwgMCkge1xyXG4gICAgICBvYnN0YWNsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgcGxheWVyLnggPCBvLnggKyBvLndcclxuICAgICAgICAmJiBwbGF5ZXIueCArIHBsYXllci53ID4gby54XHJcbiAgICAgICAgJiYgcGxheWVyLnkgPCBvLnkgKyBvLmhcclxuICAgICAgICAmJiBwbGF5ZXIueSArIHBsYXllci5oID4gby55XHJcbiAgICApIHtcclxuICAgICAgcGxheVNvdW5kLnBsYXlEZWFkKCk7XHJcbiAgICAgIG9ic3RhY2xlcyA9IFtdO1xyXG4gICAgICBzY29yZSA9IDA7XHJcbiAgICAgIHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcclxuICAgICAgZ2FtZVNwZWVkID0gMztcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWdoc2NvcmUnLCBoaWdoc2NvcmUpO1xyXG4gICAgfVxyXG5cclxuICAgIG8uVXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwbGF5ZXIuQW5pbWF0ZSgpO1xyXG5cclxuICBzY29yZSArPSAxO1xyXG4gIHNjb3JlVGV4dC50ID0gYFNjb3JlOiAke3Njb3JlfWA7XHJcbiAgc2NvcmVUZXh0LkRyYXcoKTtcclxuXHJcbiAgaWYgKHNjb3JlID4gaGlnaHNjb3JlKSB7XHJcbiAgICBoaWdoc2NvcmUgPSBzY29yZTtcclxuICAgIGhpZ2hzY29yZVRleHQudCA9IGBIaWdoc2NvcmU6ICR7aGlnaHNjb3JlfWA7XHJcbiAgfVxyXG5cclxuICBoaWdoc2NvcmVUZXh0LkRyYXcoKTtcclxuXHJcbiAgZ2FtZVNwZWVkICs9IDAuMDAzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTdGFydCgpIHtcclxuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICBjdHguZm9udCA9ICcyMHB4IHNhbnMtc2VyaWYnO1xyXG5cclxuICBnYW1lU3BlZWQgPSAzO1xyXG4gIGdyYXZpdHkgPSAxO1xyXG5cclxuICBzY29yZSA9IDA7XHJcbiAgaGlnaHNjb3JlID0gMDtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hzY29yZScpKSB7XHJcbiAgICBoaWdoc2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJyk7XHJcbiAgfVxyXG5cclxuICBwbGF5ZXIgPSBuZXcgUGxheWVyKDI1LCAwLCA1MCwgNTAsICcjRkY1ODU4JywgY2FudmFzLCBjdHgsIGtleXMsIGdyYXZpdHkpO1xyXG5cclxuICBzY29yZVRleHQgPSBuZXcgVGV4dChgU2NvcmU6ICR7c2NvcmV9YCwgMjUsIDI1LCAnbGVmdCcsICcjMjEyMTIxJywgJzIwJywgY3R4KTtcclxuICBoaWdoc2NvcmVUZXh0ID0gbmV3IFRleHQoYEhpZ2hzY29yZTogJHtoaWdoc2NvcmV9YCwgY2FudmFzLndpZHRoIC0gMjUsIDI1LCAncmlnaHQnLCAnIzIxMjEyMScsICcyMCcsIGN0eCk7XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShVcGRhdGUpO1xyXG59XHJcblxyXG5TdGFydCgpO1xyXG5pZiAod2luZG93LmdhbWVTdGF0ZS5pc0ZvblNvdW5kKSB7XHJcbiAgcGxheVNvdW5kLnBsYXlGb24oKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzdGFjbGUge1xyXG4gIGNvbnN0cnVjdG9yKHgsIHksIHcsIGgsIGMsIGN0eCwgZ2FtZVNwZWVkKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMudyA9IHc7XHJcbiAgICB0aGlzLmggPSBoO1xyXG4gICAgdGhpcy5jID0gYztcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5nYW1lU3BlZWQgPSBnYW1lU3BlZWQ7XHJcbiAgICB0aGlzLmR4ID0gLXRoaXMuZ2FtZVNwZWVkO1xyXG4gIH1cclxuXHJcbiAgVXBkYXRlKCkge1xyXG4gICAgdGhpcy54ICs9IHRoaXMuZHg7XHJcbiAgICB0aGlzLkRyYXcoKTtcclxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XHJcbiAgfVxyXG5cclxuICBEcmF3KCkge1xyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmM7XHJcbiAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53LCB0aGlzLmgpO1xyXG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyU291bmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy51cmwgPSB3aW5kb3cuZ2FtZVN0YXRlLnNvdW5kVXJsO1xyXG4gICAgdGhpcy5zb3VuZFVwID0gbmV3IEF1ZGlvKGAke3RoaXMudXJsfWp1bXBVcC5tcDNgKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZFVwKTtcclxuICAgIHRoaXMuc291bmREb3duID0gbmV3IEF1ZGlvKGAke3RoaXMudXJsfWdyYXZpdHlEb3duLm1wM2ApO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kRG93bik7XHJcbiAgICB0aGlzLmlzR3Jhdml0eURvd24gPSBmYWxzZTtcclxuICAgIHRoaXMuaXNKdW1wVXAgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGp1bXBVcCgpIHtcclxuICAgIGlmICghdGhpcy5pc0p1bXBVcCkge1xyXG4gICAgICB0aGlzLnNvdW5kVXAucGxheSgpO1xyXG4gICAgICB0aGlzLmlzSnVtcFVwID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGp1bXBEb3duKCkge1xyXG4gICAgdGhpcy5zb3VuZFVwLnBhdXNlKCk7XHJcbiAgICB0aGlzLnNvdW5kVXAuY3VycmVudFRpbWUgPSAwLjA7XHJcbiAgICB0aGlzLmlzSnVtcFVwID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBncmF2aXR5RG93bigpIHtcclxuICAgIGlmICghdGhpcy5pc0dyYXZpdHlEb3duKSB7XHJcbiAgICAgIHRoaXMuc291bmREb3duLnBsYXkoKTtcclxuICAgICAgdGhpcy5pc0dyYXZpdHlEb3duID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdyYXZpdHlVcCgpIHtcclxuICAgIHRoaXMuc291bmREb3duLnBhdXNlKCk7XHJcbiAgICB0aGlzLnNvdW5kRG93bi5jdXJyZW50VGltZSA9IDAuMDtcclxuICAgIHRoaXMuaXNHcmF2aXR5RG93biA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0IFBsYXllclNvdW5kIGZyb20gJy4vcGxheWVyLXNvdW5kJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IoeCwgeSwgdywgaCwgYywgY2FudmFzLCBjdHgsIGtleXMsIGdyYXZpdHkpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy53ID0gdztcclxuICAgIHRoaXMuaCA9IGg7XHJcbiAgICB0aGlzLmMgPSBjO1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMua2V5cyA9IGtleXM7XHJcbiAgICB0aGlzLmdyYXZpdHkgPSBncmF2aXR5O1xyXG4gICAgdGhpcy5keSA9IDA7XHJcbiAgICB0aGlzLmp1bXBGb3JjZSA9IDE1O1xyXG4gICAgdGhpcy5vcmlnaW5hbEhlaWdodCA9IGg7XHJcbiAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmp1bXBUaW1lciA9IDA7XHJcbiAgICB0aGlzLnNvdW5kID0gbmV3IFBsYXllclNvdW5kKCk7XHJcbiAgfVxyXG5cclxuICBBbmltYXRlKCkge1xyXG4gICAgLy8gSnVtcFxyXG4gICAgaWYgKHRoaXMua2V5cy5TcGFjZSB8fCB0aGlzLmtleXMuS2V5Vykge1xyXG4gICAgICB0aGlzLnNvdW5kLmp1bXBVcCgpO1xyXG4gICAgICB0aGlzLkp1bXAoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuanVtcFRpbWVyID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5rZXlzLlNoaWZ0TGVmdCB8fCB0aGlzLmtleXMuS2V5Uykge1xyXG4gICAgICB0aGlzLmggPSB0aGlzLm9yaWdpbmFsSGVpZ2h0IC8gMjtcclxuICAgICAgdGhpcy5zb3VuZC5ncmF2aXR5RG93bigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oID0gdGhpcy5vcmlnaW5hbEhlaWdodDtcclxuICAgICAgdGhpcy5zb3VuZC5ncmF2aXR5VXAoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnkgKz0gdGhpcy5keTtcclxuXHJcbiAgICAvLyBHcmF2aXR5XHJcbiAgICBpZiAodGhpcy55ICsgdGhpcy5oIDwgdGhpcy5jYW52YXMuaGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuZHkgKz0gdGhpcy5ncmF2aXR5O1xyXG4gICAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmR5ID0gMDtcclxuICAgICAgdGhpcy5ncm91bmRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLkRyYXcoKTtcclxuICB9XHJcblxyXG4gIEp1bXAoKSB7XHJcbiAgICBpZiAodGhpcy5ncm91bmRlZCAmJiB0aGlzLmp1bXBUaW1lciA9PT0gMCkge1xyXG4gICAgICB0aGlzLmp1bXBUaW1lciA9IDE7XHJcbiAgICAgIHRoaXMuZHkgPSAtdGhpcy5qdW1wRm9yY2U7XHJcbiAgICAgIHRoaXMuc291bmQuanVtcERvd24oKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5qdW1wVGltZXIgPiAwICYmIHRoaXMuanVtcFRpbWVyIDwgMTUpIHtcclxuICAgICAgdGhpcy5qdW1wVGltZXIgKz0gMTtcclxuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZSAtICh0aGlzLmp1bXBUaW1lciAvIDUwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIERyYXcoKSB7XHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuYztcclxuICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLncsIHRoaXMuaCk7XHJcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5kb21SYW5nZShtaW4sIG1heCkge1xyXG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQge1xyXG4gIGNvbnN0cnVjdG9yKHQsIHgsIHksIGEsIGMsIHMsIGN0eCkge1xyXG4gICAgdGhpcy50ID0gdDtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5hID0gYTtcclxuICAgIHRoaXMuYyA9IGM7XHJcbiAgICB0aGlzLnMgPSBzO1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgfVxyXG5cclxuICBEcmF3KCkge1xyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmM7XHJcbiAgICB0aGlzLmN0eC5mb250ID0gYCR7dGhpcy5zfXB4IHNhbnMtc2VyaWZgO1xyXG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gdGhpcy5hO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQodGhpcy50LCB0aGlzLngsIHRoaXMueSk7XHJcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9
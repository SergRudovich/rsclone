/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fon-sound.js":
/*!**************************!*\
  !*** ./src/fon-sound.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FonSound
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable linebreak-style */
var FonSound = /*#__PURE__*/function () {
  function FonSound() {
    _classCallCheck(this, FonSound);

    this.url = window.gameState.soundUrl;
    this.num = 1;
    this.fonSound = new Audio("".concat(this.url, "run").concat(this.num, ".mp3"));
    document.body.appendChild(this.fonSound);
    this.fonSound.volume = 0.1;
  }

  _createClass(FonSound, [{
    key: "play",
    value: function play() {
      this.fonSound.loop = true;
      this.fonSound.play();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.fonSound.pause();
    }
  }]);

  return FonSound;
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
/* harmony import */ var _fon_sound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fon-sound */ "./src/fon-sound.js");
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
var playFon = new _fon_sound__WEBPACK_IMPORTED_MODULE_4__.default(); // Event Listeners

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
    playFon.stop();
  } // включить фоновую музыку


  if (keys.KeyA) {
    window.gameState.isFonSound = true;
    playFon.play();
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
  playFon.play();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Zvbi1zb3VuZC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvb2JzdGFjbGUgLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGxheWVyLXNvdW5kLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcmFuZG9tLXJhbmdlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvdGV4dC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiRm9uU291bmQiLCJ1cmwiLCJ3aW5kb3ciLCJnYW1lU3RhdGUiLCJzb3VuZFVybCIsIm51bSIsImZvblNvdW5kIiwiQXVkaW8iLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInZvbHVtZSIsImxvb3AiLCJwbGF5IiwicGF1c2UiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJzY29yZSIsInNjb3JlVGV4dCIsImhpZ2hzY29yZSIsImhpZ2hzY29yZVRleHQiLCJwbGF5ZXIiLCJncmF2aXR5Iiwib2JzdGFjbGVzIiwiZ2FtZVNwZWVkIiwia2V5cyIsImlzRm9uU291bmQiLCJpc1BsYXllclNvdW5kIiwicGxheUZvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJjb2RlIiwiU3Bhd25PYnN0YWNsZSIsInNpemUiLCJSYW5kb21SYW5nZSIsInR5cGUiLCJvYnN0YWNsZSIsIk9ic3RhY2xlIiwid2lkdGgiLCJoZWlnaHQiLCJ5Iiwib3JpZ2luYWxIZWlnaHQiLCJwdXNoIiwiaW5pdGlhbFNwYXduVGltZXIiLCJzcGF3blRpbWVyIiwiVXBkYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0IiwiS2V5USIsInN0b3AiLCJLZXlBIiwiaSIsImxlbmd0aCIsIm8iLCJ4IiwidyIsInNwbGljZSIsImgiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiQW5pbWF0ZSIsInQiLCJEcmF3IiwiU3RhcnQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJmb250IiwiZ2V0SXRlbSIsIlBsYXllciIsIlRleHQiLCJjIiwiZHgiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNsb3NlUGF0aCIsIlBsYXllclNvdW5kIiwic291bmRVcCIsInNvdW5kRG93biIsImlzR3Jhdml0eURvd24iLCJpc0p1bXBVcCIsImN1cnJlbnRUaW1lIiwiZHkiLCJqdW1wRm9yY2UiLCJncm91bmRlZCIsImp1bXBUaW1lciIsInNvdW5kIiwiU3BhY2UiLCJLZXlXIiwianVtcFVwIiwiSnVtcCIsIlNoaWZ0TGVmdCIsIktleVMiLCJncmF2aXR5RG93biIsImdyYXZpdHlVcCIsImp1bXBEb3duIiwibWluIiwibWF4IiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiYSIsInMiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUVxQkEsUTtBQUNuQixzQkFBYztBQUFBOztBQUNaLFNBQUtDLEdBQUwsR0FBV0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUE1QjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxDQUFYO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixJQUFJQyxLQUFKLFdBQWEsS0FBS04sR0FBbEIsZ0JBQTJCLEtBQUtJLEdBQWhDLFVBQWhCO0FBQ0FHLFlBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxXQUFkLENBQTBCLEtBQUtKLFFBQS9CO0FBQ0EsU0FBS0EsUUFBTCxDQUFjSyxNQUFkLEdBQXVCLEdBQXZCO0FBQ0Q7Ozs7MkJBRU07QUFDTCxXQUFLTCxRQUFMLENBQWNNLElBQWQsR0FBcUIsSUFBckI7QUFDQSxXQUFLTixRQUFMLENBQWNPLElBQWQ7QUFDRDs7OzJCQUVNO0FBQ0wsV0FBS1AsUUFBTCxDQUFjUSxLQUFkO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkg7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUMsTUFBTSxHQUFHUCxRQUFRLENBQUNRLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFQLENBQWtCLElBQWxCLENBQVosQyxDQUVBOztBQUNBLElBQUlDLEtBQUo7QUFDQSxJQUFJQyxTQUFKO0FBQ0EsSUFBSUMsU0FBSjtBQUNBLElBQUlDLGFBQUo7QUFDQSxJQUFJQyxNQUFKO0FBQ0EsSUFBSUMsT0FBSjtBQUNBLElBQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUNBLElBQUlDLFNBQUo7QUFDQSxJQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUVBekIsTUFBTSxDQUFDQyxTQUFQLEdBQW1CO0FBQ2pCQyxVQUFRLEVBQUUsa0JBRE87QUFFakJ3QixZQUFVLEVBQUUsSUFGSztBQUdqQkMsZUFBYSxFQUFFO0FBSEUsQ0FBbkI7QUFNQSxJQUFNQyxPQUFPLEdBQUcsSUFBSTlCLCtDQUFKLEVBQWhCLEMsQ0FFQTs7QUFDQVEsUUFBUSxDQUFDdUIsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ0MsR0FBRCxFQUFTO0FBQzVDTCxNQUFJLENBQUNLLEdBQUcsQ0FBQ0MsSUFBTCxDQUFKLEdBQWlCLElBQWpCO0FBQ0QsQ0FGRDtBQUdBekIsUUFBUSxDQUFDdUIsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsR0FBRCxFQUFTO0FBQzFDTCxNQUFJLENBQUNLLEdBQUcsQ0FBQ0MsSUFBTCxDQUFKLEdBQWlCLEtBQWpCO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTQyxhQUFULEdBQXlCO0FBQ3ZCLE1BQU1DLElBQUksR0FBR0Msc0RBQVcsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUF4QjtBQUNBLE1BQU1DLElBQUksR0FBR0Qsc0RBQVcsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUF4QjtBQUNBLE1BQU1FLFFBQVEsR0FBRyxJQUFJQywrQ0FBSixDQUFheEIsTUFBTSxDQUFDeUIsS0FBUCxHQUFlTCxJQUE1QixFQUFrQ3BCLE1BQU0sQ0FBQzBCLE1BQVAsR0FBZ0JOLElBQWxELEVBQXdEQSxJQUF4RCxFQUE4REEsSUFBOUQsRUFBb0UsU0FBcEUsRUFBK0VsQixHQUEvRSxFQUFvRlMsU0FBcEYsQ0FBakI7O0FBRUEsTUFBSVcsSUFBSSxLQUFLLENBQWIsRUFBZ0I7QUFDZEMsWUFBUSxDQUFDSSxDQUFULElBQWNuQixNQUFNLENBQUNvQixjQUFQLEdBQXdCLEVBQXRDO0FBQ0Q7O0FBQ0RsQixXQUFTLENBQUNtQixJQUFWLENBQWVOLFFBQWY7QUFDRDs7QUFFRCxJQUFNTyxpQkFBaUIsR0FBRyxHQUExQjtBQUNBLElBQUlDLFVBQVUsR0FBR0QsaUJBQWpCOztBQUNBLFNBQVNFLE1BQVQsR0FBa0I7QUFDaEJDLHVCQUFxQixDQUFDRCxNQUFELENBQXJCO0FBQ0E5QixLQUFHLENBQUNnQyxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQmxDLE1BQU0sQ0FBQ3lCLEtBQTNCLEVBQWtDekIsTUFBTSxDQUFDMEIsTUFBekMsRUFGZ0IsQ0FJaEI7O0FBQ0EsTUFBSWQsSUFBSSxDQUFDdUIsSUFBVCxFQUFlO0FBQ2JoRCxVQUFNLENBQUNDLFNBQVAsQ0FBaUJ5QixVQUFqQixHQUE4QixLQUE5QjtBQUNBRSxXQUFPLENBQUNxQixJQUFSO0FBQ0QsR0FSZSxDQVVoQjs7O0FBQ0EsTUFBSXhCLElBQUksQ0FBQ3lCLElBQVQsRUFBZTtBQUNibEQsVUFBTSxDQUFDQyxTQUFQLENBQWlCeUIsVUFBakIsR0FBOEIsSUFBOUI7QUFDQUUsV0FBTyxDQUFDakIsSUFBUjtBQUNEOztBQUVEaUMsWUFBVSxJQUFJLENBQWQ7O0FBQ0EsTUFBSUEsVUFBVSxJQUFJLENBQWxCLEVBQXFCO0FBQ25CWixpQkFBYTtBQUNiWSxjQUFVLEdBQUdELGlCQUFpQixHQUFHbkIsU0FBUyxHQUFHLENBQTdDOztBQUVBLFFBQUlvQixVQUFVLEdBQUcsRUFBakIsRUFBcUI7QUFDbkJBLGdCQUFVLEdBQUcsRUFBYjtBQUNEO0FBQ0YsR0F4QmUsQ0EwQmhCOzs7QUFDQSxPQUFLLElBQUlPLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc1QixTQUFTLENBQUM2QixNQUE5QixFQUFzQ0QsQ0FBQyxJQUFJLENBQTNDLEVBQThDO0FBQzVDLFFBQU1FLENBQUMsR0FBRzlCLFNBQVMsQ0FBQzRCLENBQUQsQ0FBbkI7O0FBRUEsUUFBSUUsQ0FBQyxDQUFDQyxDQUFGLEdBQU1ELENBQUMsQ0FBQ0UsQ0FBUixHQUFZLENBQWhCLEVBQW1CO0FBQ2pCaEMsZUFBUyxDQUFDaUMsTUFBVixDQUFpQkwsQ0FBakIsRUFBb0IsQ0FBcEI7QUFDRDs7QUFFRCxRQUNFOUIsTUFBTSxDQUFDaUMsQ0FBUCxHQUFXRCxDQUFDLENBQUNDLENBQUYsR0FBTUQsQ0FBQyxDQUFDRSxDQUFuQixJQUNLbEMsTUFBTSxDQUFDaUMsQ0FBUCxHQUFXakMsTUFBTSxDQUFDa0MsQ0FBbEIsR0FBc0JGLENBQUMsQ0FBQ0MsQ0FEN0IsSUFFS2pDLE1BQU0sQ0FBQ21CLENBQVAsR0FBV2EsQ0FBQyxDQUFDYixDQUFGLEdBQU1hLENBQUMsQ0FBQ0ksQ0FGeEIsSUFHS3BDLE1BQU0sQ0FBQ21CLENBQVAsR0FBV25CLE1BQU0sQ0FBQ29DLENBQWxCLEdBQXNCSixDQUFDLENBQUNiLENBSi9CLEVBS0U7QUFDQWpCLGVBQVMsR0FBRyxFQUFaO0FBQ0FOLFdBQUssR0FBRyxDQUFSO0FBQ0EyQixnQkFBVSxHQUFHRCxpQkFBYjtBQUNBbkIsZUFBUyxHQUFHLENBQVo7QUFDQXhCLFlBQU0sQ0FBQzBELFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFdBQTVCLEVBQXlDeEMsU0FBekM7QUFDRDs7QUFFRGtDLEtBQUMsQ0FBQ1IsTUFBRjtBQUNEOztBQUVEeEIsUUFBTSxDQUFDdUMsT0FBUDtBQUVBM0MsT0FBSyxJQUFJLENBQVQ7QUFDQUMsV0FBUyxDQUFDMkMsQ0FBVixvQkFBd0I1QyxLQUF4QjtBQUNBQyxXQUFTLENBQUM0QyxJQUFWOztBQUVBLE1BQUk3QyxLQUFLLEdBQUdFLFNBQVosRUFBdUI7QUFDckJBLGFBQVMsR0FBR0YsS0FBWjtBQUNBRyxpQkFBYSxDQUFDeUMsQ0FBZCx3QkFBZ0MxQyxTQUFoQztBQUNEOztBQUVEQyxlQUFhLENBQUMwQyxJQUFkO0FBRUF0QyxXQUFTLElBQUksS0FBYjtBQUNEOztBQUVELFNBQVN1QyxLQUFULEdBQWlCO0FBQ2ZsRCxRQUFNLENBQUN5QixLQUFQLEdBQWV0QyxNQUFNLENBQUNnRSxVQUF0QjtBQUNBbkQsUUFBTSxDQUFDMEIsTUFBUCxHQUFnQnZDLE1BQU0sQ0FBQ2lFLFdBQXZCO0FBRUFsRCxLQUFHLENBQUNtRCxJQUFKLEdBQVcsaUJBQVg7QUFFQTFDLFdBQVMsR0FBRyxDQUFaO0FBQ0FGLFNBQU8sR0FBRyxDQUFWO0FBRUFMLE9BQUssR0FBRyxDQUFSO0FBQ0FFLFdBQVMsR0FBRyxDQUFaOztBQUNBLE1BQUl1QyxZQUFZLENBQUNTLE9BQWIsQ0FBcUIsV0FBckIsQ0FBSixFQUF1QztBQUNyQ2hELGFBQVMsR0FBR3VDLFlBQVksQ0FBQ1MsT0FBYixDQUFxQixXQUFyQixDQUFaO0FBQ0Q7O0FBRUQ5QyxRQUFNLEdBQUcsSUFBSStDLDRDQUFKLENBQVcsRUFBWCxFQUFlLENBQWYsRUFBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsU0FBMUIsRUFBcUN2RCxNQUFyQyxFQUE2Q0UsR0FBN0MsRUFBa0RVLElBQWxELEVBQXdESCxPQUF4RCxDQUFUO0FBRUFKLFdBQVMsR0FBRyxJQUFJbUQsMENBQUosa0JBQW1CcEQsS0FBbkIsR0FBNEIsRUFBNUIsRUFBZ0MsRUFBaEMsRUFBb0MsTUFBcEMsRUFBNEMsU0FBNUMsRUFBdUQsSUFBdkQsRUFBNkRGLEdBQTdELENBQVo7QUFDQUssZUFBYSxHQUFHLElBQUlpRCwwQ0FBSixzQkFBdUJsRCxTQUF2QixHQUFvQ04sTUFBTSxDQUFDeUIsS0FBUCxHQUFlLEVBQW5ELEVBQXVELEVBQXZELEVBQTJELE9BQTNELEVBQW9FLFNBQXBFLEVBQStFLElBQS9FLEVBQXFGdkIsR0FBckYsQ0FBaEI7QUFFQStCLHVCQUFxQixDQUFDRCxNQUFELENBQXJCO0FBQ0Q7O0FBRURrQixLQUFLOztBQUNMLElBQUkvRCxNQUFNLENBQUNDLFNBQVAsQ0FBaUJ5QixVQUFyQixFQUFpQztBQUMvQkUsU0FBTyxDQUFDakIsSUFBUjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0lEO0lBQ3FCMEIsUTtBQUNuQixvQkFBWWlCLENBQVosRUFBZWQsQ0FBZixFQUFrQmUsQ0FBbEIsRUFBcUJFLENBQXJCLEVBQXdCYSxDQUF4QixFQUEyQnZELEdBQTNCLEVBQWdDUyxTQUFoQyxFQUEyQztBQUFBOztBQUN6QyxTQUFLOEIsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS2QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS2UsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0UsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS2EsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS3ZELEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtTLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBSytDLEVBQUwsR0FBVSxDQUFDLEtBQUsvQyxTQUFoQjtBQUNEOzs7OzZCQUVRO0FBQ1AsV0FBSzhCLENBQUwsSUFBVSxLQUFLaUIsRUFBZjtBQUNBLFdBQUtULElBQUw7QUFDQSxXQUFLUyxFQUFMLEdBQVUsQ0FBQyxLQUFLL0MsU0FBaEI7QUFDRDs7OzJCQUVNO0FBQ0wsV0FBS1QsR0FBTCxDQUFTeUQsU0FBVDtBQUNBLFdBQUt6RCxHQUFMLENBQVMwRCxTQUFULEdBQXFCLEtBQUtILENBQTFCO0FBQ0EsV0FBS3ZELEdBQUwsQ0FBUzJELFFBQVQsQ0FBa0IsS0FBS3BCLENBQXZCLEVBQTBCLEtBQUtkLENBQS9CLEVBQWtDLEtBQUtlLENBQXZDLEVBQTBDLEtBQUtFLENBQS9DO0FBQ0EsV0FBSzFDLEdBQUwsQ0FBUzRELFNBQVQ7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Qkg7SUFFcUJDLFc7QUFDbkIseUJBQWM7QUFBQTs7QUFDWixTQUFLN0UsR0FBTCxHQUFXQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFFBQTVCO0FBQ0EsU0FBSzJFLE9BQUwsR0FBZSxJQUFJeEUsS0FBSixXQUFhLEtBQUtOLEdBQWxCLGdCQUFmO0FBQ0FPLFlBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxXQUFkLENBQTBCLEtBQUtxRSxPQUEvQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsSUFBSXpFLEtBQUosV0FBYSxLQUFLTixHQUFsQixxQkFBakI7QUFDQU8sWUFBUSxDQUFDQyxJQUFULENBQWNDLFdBQWQsQ0FBMEIsS0FBS3NFLFNBQS9CO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixLQUFyQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDRDs7Ozs2QkFFUTtBQUNQLFVBQUksQ0FBQyxLQUFLQSxRQUFWLEVBQW9CO0FBQ2xCLGFBQUtILE9BQUwsQ0FBYWxFLElBQWI7QUFDQSxhQUFLcUUsUUFBTCxHQUFnQixJQUFoQjtBQUNEO0FBQ0Y7OzsrQkFFVTtBQUNULFdBQUtILE9BQUwsQ0FBYWpFLEtBQWI7QUFDQSxXQUFLaUUsT0FBTCxDQUFhSSxXQUFiLEdBQTJCLEdBQTNCO0FBQ0EsV0FBS0QsUUFBTCxHQUFnQixLQUFoQjtBQUNEOzs7a0NBRWE7QUFDWixVQUFJLENBQUMsS0FBS0QsYUFBVixFQUF5QjtBQUN2QixhQUFLRCxTQUFMLENBQWVuRSxJQUFmO0FBQ0EsYUFBS29FLGFBQUwsR0FBcUIsSUFBckI7QUFDRDtBQUNGOzs7Z0NBRVc7QUFDVixXQUFLRCxTQUFMLENBQWVsRSxLQUFmO0FBQ0EsV0FBS2tFLFNBQUwsQ0FBZUcsV0FBZixHQUE2QixHQUE3QjtBQUNBLFdBQUtGLGFBQUwsR0FBcUIsS0FBckI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNIO0FBQ0E7O0lBRXFCWCxNO0FBQ25CLGtCQUFZZCxDQUFaLEVBQWVkLENBQWYsRUFBa0JlLENBQWxCLEVBQXFCRSxDQUFyQixFQUF3QmEsQ0FBeEIsRUFBMkJ6RCxNQUEzQixFQUFtQ0UsR0FBbkMsRUFBd0NVLElBQXhDLEVBQThDSCxPQUE5QyxFQUF1RDtBQUFBOztBQUNyRCxTQUFLZ0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS2QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS2UsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0UsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS2EsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS3pELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtFLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtVLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtILE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUs0RCxFQUFMLEdBQVUsQ0FBVjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLMUMsY0FBTCxHQUFzQmdCLENBQXRCO0FBQ0EsU0FBSzJCLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLElBQUlWLGtEQUFKLEVBQWI7QUFDRDs7Ozs4QkFFUztBQUNSO0FBQ0EsVUFBSSxLQUFLbkQsSUFBTCxDQUFVOEQsS0FBVixJQUFtQixLQUFLOUQsSUFBTCxDQUFVK0QsSUFBakMsRUFBdUM7QUFDckMsYUFBS0YsS0FBTCxDQUFXRyxNQUFYO0FBQ0EsYUFBS0MsSUFBTDtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtMLFNBQUwsR0FBaUIsQ0FBakI7QUFDRDs7QUFFRCxVQUFJLEtBQUs1RCxJQUFMLENBQVVrRSxTQUFWLElBQXVCLEtBQUtsRSxJQUFMLENBQVVtRSxJQUFyQyxFQUEyQztBQUN6QyxhQUFLbkMsQ0FBTCxHQUFTLEtBQUtoQixjQUFMLEdBQXNCLENBQS9CO0FBQ0EsYUFBSzZDLEtBQUwsQ0FBV08sV0FBWDtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtwQyxDQUFMLEdBQVMsS0FBS2hCLGNBQWQ7QUFDQSxhQUFLNkMsS0FBTCxDQUFXUSxTQUFYO0FBQ0Q7O0FBRUQsV0FBS3RELENBQUwsSUFBVSxLQUFLMEMsRUFBZixDQWpCUSxDQW1CUjs7QUFDQSxVQUFJLEtBQUsxQyxDQUFMLEdBQVMsS0FBS2lCLENBQWQsR0FBa0IsS0FBSzVDLE1BQUwsQ0FBWTBCLE1BQWxDLEVBQTBDO0FBQ3hDLGFBQUsyQyxFQUFMLElBQVcsS0FBSzVELE9BQWhCO0FBQ0EsYUFBSzhELFFBQUwsR0FBZ0IsS0FBaEI7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLRixFQUFMLEdBQVUsQ0FBVjtBQUNBLGFBQUtFLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxhQUFLNUMsQ0FBTCxHQUFTLEtBQUszQixNQUFMLENBQVkwQixNQUFaLEdBQXFCLEtBQUtrQixDQUFuQztBQUNEOztBQUVELFdBQUtLLElBQUw7QUFDRDs7OzJCQUVNO0FBQ0wsVUFBSSxLQUFLc0IsUUFBTCxJQUFpQixLQUFLQyxTQUFMLEtBQW1CLENBQXhDLEVBQTJDO0FBQ3pDLGFBQUtBLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxhQUFLSCxFQUFMLEdBQVUsQ0FBQyxLQUFLQyxTQUFoQjtBQUNBLGFBQUtHLEtBQUwsQ0FBV1MsUUFBWDtBQUNELE9BSkQsTUFJTyxJQUFJLEtBQUtWLFNBQUwsR0FBaUIsQ0FBakIsSUFBc0IsS0FBS0EsU0FBTCxHQUFpQixFQUEzQyxFQUErQztBQUNwRCxhQUFLQSxTQUFMLElBQWtCLENBQWxCO0FBQ0EsYUFBS0gsRUFBTCxHQUFVLENBQUMsS0FBS0MsU0FBTixHQUFtQixLQUFLRSxTQUFMLEdBQWlCLEVBQTlDO0FBQ0Q7QUFDRjs7OzJCQUVNO0FBQ0wsV0FBS3RFLEdBQUwsQ0FBU3lELFNBQVQ7QUFDQSxXQUFLekQsR0FBTCxDQUFTMEQsU0FBVCxHQUFxQixLQUFLSCxDQUExQjtBQUNBLFdBQUt2RCxHQUFMLENBQVMyRCxRQUFULENBQWtCLEtBQUtwQixDQUF2QixFQUEwQixLQUFLZCxDQUEvQixFQUFrQyxLQUFLZSxDQUF2QyxFQUEwQyxLQUFLRSxDQUEvQztBQUNBLFdBQUsxQyxHQUFMLENBQVM0RCxTQUFUO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVIO0FBRWUsU0FBU3pDLFdBQVQsQ0FBcUI4RCxHQUFyQixFQUEwQkMsR0FBMUIsRUFBK0I7QUFDNUMsU0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQkgsR0FBRyxHQUFHRCxHQUF2QixJQUE4QkEsR0FBekMsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkQ7SUFDcUIzQixJO0FBQ25CLGdCQUFZUixDQUFaLEVBQWVQLENBQWYsRUFBa0JkLENBQWxCLEVBQXFCNkQsQ0FBckIsRUFBd0IvQixDQUF4QixFQUEyQmdDLENBQTNCLEVBQThCdkYsR0FBOUIsRUFBbUM7QUFBQTs7QUFDakMsU0FBSzhDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtQLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtkLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUs2RCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLL0IsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS2dDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUt2RixHQUFMLEdBQVdBLEdBQVg7QUFDRDs7OzsyQkFFTTtBQUNMLFdBQUtBLEdBQUwsQ0FBU3lELFNBQVQ7QUFDQSxXQUFLekQsR0FBTCxDQUFTMEQsU0FBVCxHQUFxQixLQUFLSCxDQUExQjtBQUNBLFdBQUt2RCxHQUFMLENBQVNtRCxJQUFULGFBQW1CLEtBQUtvQyxDQUF4QjtBQUNBLFdBQUt2RixHQUFMLENBQVN3RixTQUFULEdBQXFCLEtBQUtGLENBQTFCO0FBQ0EsV0FBS3RGLEdBQUwsQ0FBU3lGLFFBQVQsQ0FBa0IsS0FBSzNDLENBQXZCLEVBQTBCLEtBQUtQLENBQS9CLEVBQWtDLEtBQUtkLENBQXZDO0FBQ0EsV0FBS3pCLEdBQUwsQ0FBUzRELFNBQVQ7QUFDRDs7Ozs7Ozs7Ozs7O1VDbkJIO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiIuL2pzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9uU291bmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy51cmwgPSB3aW5kb3cuZ2FtZVN0YXRlLnNvdW5kVXJsO1xyXG4gICAgdGhpcy5udW0gPSAxO1xyXG4gICAgdGhpcy5mb25Tb3VuZCA9IG5ldyBBdWRpbyhgJHt0aGlzLnVybH1ydW4ke3RoaXMubnVtfS5tcDNgKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5mb25Tb3VuZCk7XHJcbiAgICB0aGlzLmZvblNvdW5kLnZvbHVtZSA9IDAuMTtcclxuICB9XHJcblxyXG4gIHBsYXkoKSB7XHJcbiAgICB0aGlzLmZvblNvdW5kLmxvb3AgPSB0cnVlO1xyXG4gICAgdGhpcy5mb25Tb3VuZC5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5mb25Tb3VuZC5wYXVzZSgpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgT2JzdGFjbGUgZnJvbSAnLi9vYnN0YWNsZSAnO1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuL3RleHQnO1xyXG5pbXBvcnQgUmFuZG9tUmFuZ2UgZnJvbSAnLi9yYW5kb20tcmFuZ2UnO1xyXG5pbXBvcnQgRm9uU291bmQgZnJvbSAnLi9mb24tc291bmQnO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4vLyBWYXJpYWJsZXNcclxubGV0IHNjb3JlO1xyXG5sZXQgc2NvcmVUZXh0O1xyXG5sZXQgaGlnaHNjb3JlO1xyXG5sZXQgaGlnaHNjb3JlVGV4dDtcclxubGV0IHBsYXllcjtcclxubGV0IGdyYXZpdHk7XHJcbmxldCBvYnN0YWNsZXMgPSBbXTtcclxubGV0IGdhbWVTcGVlZDtcclxuY29uc3Qga2V5cyA9IHt9O1xyXG5cclxud2luZG93LmdhbWVTdGF0ZSA9IHtcclxuICBzb3VuZFVybDogJy4uLy4vZGlzdC9zb3VuZC8nLFxyXG4gIGlzRm9uU291bmQ6IHRydWUsXHJcbiAgaXNQbGF5ZXJTb3VuZDogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IHBsYXlGb24gPSBuZXcgRm9uU291bmQoKTtcclxuXHJcbi8vIEV2ZW50IExpc3RlbmVyc1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2dCkgPT4ge1xyXG4gIGtleXNbZXZ0LmNvZGVdID0gdHJ1ZTtcclxufSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2dCkgPT4ge1xyXG4gIGtleXNbZXZ0LmNvZGVdID0gZmFsc2U7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gU3Bhd25PYnN0YWNsZSgpIHtcclxuICBjb25zdCBzaXplID0gUmFuZG9tUmFuZ2UoMjAsIDcwKTtcclxuICBjb25zdCB0eXBlID0gUmFuZG9tUmFuZ2UoMCwgMSk7XHJcbiAgY29uc3Qgb2JzdGFjbGUgPSBuZXcgT2JzdGFjbGUoY2FudmFzLndpZHRoICsgc2l6ZSwgY2FudmFzLmhlaWdodCAtIHNpemUsIHNpemUsIHNpemUsICcjMjQ4NEU0JywgY3R4LCBnYW1lU3BlZWQpO1xyXG5cclxuICBpZiAodHlwZSA9PT0gMSkge1xyXG4gICAgb2JzdGFjbGUueSAtPSBwbGF5ZXIub3JpZ2luYWxIZWlnaHQgLSAxMDtcclxuICB9XHJcbiAgb2JzdGFjbGVzLnB1c2gob2JzdGFjbGUpO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3Bhd25UaW1lciA9IDIwMDtcclxubGV0IHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcclxuZnVuY3Rpb24gVXBkYXRlKCkge1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShVcGRhdGUpO1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgLy8g0LLRi9C60LvRjtGH0LjRgtGMINGE0L7QvdC+0LLRg9GOINC80YPQt9GL0LrRg1xyXG4gIGlmIChrZXlzLktleVEpIHtcclxuICAgIHdpbmRvdy5nYW1lU3RhdGUuaXNGb25Tb3VuZCA9IGZhbHNlO1xyXG4gICAgcGxheUZvbi5zdG9wKCk7XHJcbiAgfVxyXG5cclxuICAvLyDQstC60LvRjtGH0LjRgtGMINGE0L7QvdC+0LLRg9GOINC80YPQt9GL0LrRg1xyXG4gIGlmIChrZXlzLktleUEpIHtcclxuICAgIHdpbmRvdy5nYW1lU3RhdGUuaXNGb25Tb3VuZCA9IHRydWU7XHJcbiAgICBwbGF5Rm9uLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIHNwYXduVGltZXIgLT0gMTtcclxuICBpZiAoc3Bhd25UaW1lciA8PSAwKSB7XHJcbiAgICBTcGF3bk9ic3RhY2xlKCk7XHJcbiAgICBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXIgLSBnYW1lU3BlZWQgKiA4O1xyXG5cclxuICAgIGlmIChzcGF3blRpbWVyIDwgNjApIHtcclxuICAgICAgc3Bhd25UaW1lciA9IDYwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU3Bhd24gRW5lbWllc1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JzdGFjbGVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBvID0gb2JzdGFjbGVzW2ldO1xyXG5cclxuICAgIGlmIChvLnggKyBvLncgPCAwKSB7XHJcbiAgICAgIG9ic3RhY2xlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBwbGF5ZXIueCA8IG8ueCArIG8ud1xyXG4gICAgICAgICYmIHBsYXllci54ICsgcGxheWVyLncgPiBvLnhcclxuICAgICAgICAmJiBwbGF5ZXIueSA8IG8ueSArIG8uaFxyXG4gICAgICAgICYmIHBsYXllci55ICsgcGxheWVyLmggPiBvLnlcclxuICAgICkge1xyXG4gICAgICBvYnN0YWNsZXMgPSBbXTtcclxuICAgICAgc2NvcmUgPSAwO1xyXG4gICAgICBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXI7XHJcbiAgICAgIGdhbWVTcGVlZCA9IDM7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaHNjb3JlJywgaGlnaHNjb3JlKTtcclxuICAgIH1cclxuXHJcbiAgICBvLlVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcGxheWVyLkFuaW1hdGUoKTtcclxuXHJcbiAgc2NvcmUgKz0gMTtcclxuICBzY29yZVRleHQudCA9IGBTY29yZTogJHtzY29yZX1gO1xyXG4gIHNjb3JlVGV4dC5EcmF3KCk7XHJcblxyXG4gIGlmIChzY29yZSA+IGhpZ2hzY29yZSkge1xyXG4gICAgaGlnaHNjb3JlID0gc2NvcmU7XHJcbiAgICBoaWdoc2NvcmVUZXh0LnQgPSBgSGlnaHNjb3JlOiAke2hpZ2hzY29yZX1gO1xyXG4gIH1cclxuXHJcbiAgaGlnaHNjb3JlVGV4dC5EcmF3KCk7XHJcblxyXG4gIGdhbWVTcGVlZCArPSAwLjAwMztcclxufVxyXG5cclxuZnVuY3Rpb24gU3RhcnQoKSB7XHJcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgY3R4LmZvbnQgPSAnMjBweCBzYW5zLXNlcmlmJztcclxuXHJcbiAgZ2FtZVNwZWVkID0gMztcclxuICBncmF2aXR5ID0gMTtcclxuXHJcbiAgc2NvcmUgPSAwO1xyXG4gIGhpZ2hzY29yZSA9IDA7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoc2NvcmUnKSkge1xyXG4gICAgaGlnaHNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hzY29yZScpO1xyXG4gIH1cclxuXHJcbiAgcGxheWVyID0gbmV3IFBsYXllcigyNSwgMCwgNTAsIDUwLCAnI0ZGNTg1OCcsIGNhbnZhcywgY3R4LCBrZXlzLCBncmF2aXR5KTtcclxuXHJcbiAgc2NvcmVUZXh0ID0gbmV3IFRleHQoYFNjb3JlOiAke3Njb3JlfWAsIDI1LCAyNSwgJ2xlZnQnLCAnIzIxMjEyMScsICcyMCcsIGN0eCk7XHJcbiAgaGlnaHNjb3JlVGV4dCA9IG5ldyBUZXh0KGBIaWdoc2NvcmU6ICR7aGlnaHNjb3JlfWAsIGNhbnZhcy53aWR0aCAtIDI1LCAyNSwgJ3JpZ2h0JywgJyMyMTIxMjEnLCAnMjAnLCBjdHgpO1xyXG5cclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoVXBkYXRlKTtcclxufVxyXG5cclxuU3RhcnQoKTtcclxuaWYgKHdpbmRvdy5nYW1lU3RhdGUuaXNGb25Tb3VuZCkge1xyXG4gIHBsYXlGb24ucGxheSgpO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnN0YWNsZSB7XHJcbiAgY29uc3RydWN0b3IoeCwgeSwgdywgaCwgYywgY3R4LCBnYW1lU3BlZWQpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy53ID0gdztcclxuICAgIHRoaXMuaCA9IGg7XHJcbiAgICB0aGlzLmMgPSBjO1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLmdhbWVTcGVlZCA9IGdhbWVTcGVlZDtcclxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XHJcbiAgfVxyXG5cclxuICBVcGRhdGUoKSB7XHJcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcclxuICAgIHRoaXMuRHJhdygpO1xyXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcclxuICB9XHJcblxyXG4gIERyYXcoKSB7XHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuYztcclxuICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLncsIHRoaXMuaCk7XHJcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJTb3VuZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnVybCA9IHdpbmRvdy5nYW1lU3RhdGUuc291bmRVcmw7XHJcbiAgICB0aGlzLnNvdW5kVXAgPSBuZXcgQXVkaW8oYCR7dGhpcy51cmx9anVtcFVwLm1wM2ApO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kVXApO1xyXG4gICAgdGhpcy5zb3VuZERvd24gPSBuZXcgQXVkaW8oYCR7dGhpcy51cmx9Z3Jhdml0eURvd24ubXAzYCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmREb3duKTtcclxuICAgIHRoaXMuaXNHcmF2aXR5RG93biA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0p1bXBVcCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAganVtcFVwKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzSnVtcFVwKSB7XHJcbiAgICAgIHRoaXMuc291bmRVcC5wbGF5KCk7XHJcbiAgICAgIHRoaXMuaXNKdW1wVXAgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAganVtcERvd24oKSB7XHJcbiAgICB0aGlzLnNvdW5kVXAucGF1c2UoKTtcclxuICAgIHRoaXMuc291bmRVcC5jdXJyZW50VGltZSA9IDAuMDtcclxuICAgIHRoaXMuaXNKdW1wVXAgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdyYXZpdHlEb3duKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzR3Jhdml0eURvd24pIHtcclxuICAgICAgdGhpcy5zb3VuZERvd24ucGxheSgpO1xyXG4gICAgICB0aGlzLmlzR3Jhdml0eURvd24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ3Jhdml0eVVwKCkge1xyXG4gICAgdGhpcy5zb3VuZERvd24ucGF1c2UoKTtcclxuICAgIHRoaXMuc291bmREb3duLmN1cnJlbnRUaW1lID0gMC4wO1xyXG4gICAgdGhpcy5pc0dyYXZpdHlEb3duID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5pbXBvcnQgUGxheWVyU291bmQgZnJvbSAnLi9wbGF5ZXItc291bmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcclxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3LCBoLCBjLCBjYW52YXMsIGN0eCwga2V5cywgZ3Jhdml0eSkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLncgPSB3O1xyXG4gICAgdGhpcy5oID0gaDtcclxuICAgIHRoaXMuYyA9IGM7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5rZXlzID0ga2V5cztcclxuICAgIHRoaXMuZ3Jhdml0eSA9IGdyYXZpdHk7XHJcbiAgICB0aGlzLmR5ID0gMDtcclxuICAgIHRoaXMuanVtcEZvcmNlID0gMTU7XHJcbiAgICB0aGlzLm9yaWdpbmFsSGVpZ2h0ID0gaDtcclxuICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuanVtcFRpbWVyID0gMDtcclxuICAgIHRoaXMuc291bmQgPSBuZXcgUGxheWVyU291bmQoKTtcclxuICB9XHJcblxyXG4gIEFuaW1hdGUoKSB7XHJcbiAgICAvLyBKdW1wXHJcbiAgICBpZiAodGhpcy5rZXlzLlNwYWNlIHx8IHRoaXMua2V5cy5LZXlXKSB7XHJcbiAgICAgIHRoaXMuc291bmQuanVtcFVwKCk7XHJcbiAgICAgIHRoaXMuSnVtcCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5qdW1wVGltZXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmtleXMuU2hpZnRMZWZ0IHx8IHRoaXMua2V5cy5LZXlTKSB7XHJcbiAgICAgIHRoaXMuaCA9IHRoaXMub3JpZ2luYWxIZWlnaHQgLyAyO1xyXG4gICAgICB0aGlzLnNvdW5kLmdyYXZpdHlEb3duKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmggPSB0aGlzLm9yaWdpbmFsSGVpZ2h0O1xyXG4gICAgICB0aGlzLnNvdW5kLmdyYXZpdHlVcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueSArPSB0aGlzLmR5O1xyXG5cclxuICAgIC8vIEdyYXZpdHlcclxuICAgIGlmICh0aGlzLnkgKyB0aGlzLmggPCB0aGlzLmNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgdGhpcy5keSArPSB0aGlzLmdyYXZpdHk7XHJcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZHkgPSAwO1xyXG4gICAgICB0aGlzLmdyb3VuZGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuRHJhdygpO1xyXG4gIH1cclxuXHJcbiAgSnVtcCgpIHtcclxuICAgIGlmICh0aGlzLmdyb3VuZGVkICYmIHRoaXMuanVtcFRpbWVyID09PSAwKSB7XHJcbiAgICAgIHRoaXMuanVtcFRpbWVyID0gMTtcclxuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZTtcclxuICAgICAgdGhpcy5zb3VuZC5qdW1wRG93bigpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmp1bXBUaW1lciA+IDAgJiYgdGhpcy5qdW1wVGltZXIgPCAxNSkge1xyXG4gICAgICB0aGlzLmp1bXBUaW1lciArPSAxO1xyXG4gICAgICB0aGlzLmR5ID0gLXRoaXMuanVtcEZvcmNlIC0gKHRoaXMuanVtcFRpbWVyIC8gNTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgRHJhdygpIHtcclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jO1xyXG4gICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMudywgdGhpcy5oKTtcclxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmRvbVJhbmdlKG1pbiwgbWF4KSB7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCB7XHJcbiAgY29uc3RydWN0b3IodCwgeCwgeSwgYSwgYywgcywgY3R4KSB7XHJcbiAgICB0aGlzLnQgPSB0O1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmEgPSBhO1xyXG4gICAgdGhpcy5jID0gYztcclxuICAgIHRoaXMucyA9IHM7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICB9XHJcblxyXG4gIERyYXcoKSB7XHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuYztcclxuICAgIHRoaXMuY3R4LmZvbnQgPSBgJHt0aGlzLnN9cHggc2Fucy1zZXJpZmA7XHJcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSB0aGlzLmE7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLnQsIHRoaXMueCwgdGhpcy55KTtcclxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=
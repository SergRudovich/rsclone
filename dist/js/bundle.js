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
  isFonSound: false,
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

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Player
/* harmony export */ });
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
  }

  _createClass(Player, [{
    key: "Animate",
    value: function Animate() {
      // Jump
      if (this.keys.Space || this.keys.KeyW) {
        this.Jump();
      } else {
        this.jumpTimer = 0;
      }

      if (this.keys.ShiftLeft || this.keys.KeyS) {
        this.h = this.originalHeight / 2;
      } else {
        this.h = this.originalHeight;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2Zvbi1zb3VuZC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvb2JzdGFjbGUgLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcmFuZG9tLXJhbmdlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvdGV4dC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiRm9uU291bmQiLCJ1cmwiLCJ3aW5kb3ciLCJnYW1lU3RhdGUiLCJzb3VuZFVybCIsIm51bSIsImZvblNvdW5kIiwiQXVkaW8iLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImxvb3AiLCJwbGF5IiwicGF1c2UiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJzY29yZSIsInNjb3JlVGV4dCIsImhpZ2hzY29yZSIsImhpZ2hzY29yZVRleHQiLCJwbGF5ZXIiLCJncmF2aXR5Iiwib2JzdGFjbGVzIiwiZ2FtZVNwZWVkIiwia2V5cyIsImlzRm9uU291bmQiLCJpc1BsYXllclNvdW5kIiwicGxheUZvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJjb2RlIiwiU3Bhd25PYnN0YWNsZSIsInNpemUiLCJSYW5kb21SYW5nZSIsInR5cGUiLCJvYnN0YWNsZSIsIk9ic3RhY2xlIiwid2lkdGgiLCJoZWlnaHQiLCJ5Iiwib3JpZ2luYWxIZWlnaHQiLCJwdXNoIiwiaW5pdGlhbFNwYXduVGltZXIiLCJzcGF3blRpbWVyIiwiVXBkYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0IiwiS2V5USIsInN0b3AiLCJLZXlBIiwiaSIsImxlbmd0aCIsIm8iLCJ4IiwidyIsInNwbGljZSIsImgiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiQW5pbWF0ZSIsInQiLCJEcmF3IiwiU3RhcnQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJmb250IiwiZ2V0SXRlbSIsIlBsYXllciIsIlRleHQiLCJjIiwiZHgiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNsb3NlUGF0aCIsImR5IiwianVtcEZvcmNlIiwiZ3JvdW5kZWQiLCJqdW1wVGltZXIiLCJTcGFjZSIsIktleVciLCJKdW1wIiwiU2hpZnRMZWZ0IiwiS2V5UyIsIm1pbiIsIm1heCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImEiLCJzIiwidGV4dEFsaWduIiwiZmlsbFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFFcUJBLFE7QUFDbkIsc0JBQWM7QUFBQTs7QUFDWixTQUFLQyxHQUFMLEdBQVdDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsUUFBNUI7QUFDQSxTQUFLQyxHQUFMLEdBQVcsQ0FBWDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsS0FBSixXQUFhLEtBQUtOLEdBQWxCLGdCQUEyQixLQUFLSSxHQUFoQyxVQUFoQjtBQUNBRyxZQUFRLENBQUNDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQixLQUFLSixRQUEvQjtBQUNEOzs7OzJCQUVNO0FBQ0wsV0FBS0EsUUFBTCxDQUFjSyxJQUFkLEdBQXFCLElBQXJCO0FBQ0EsV0FBS0wsUUFBTCxDQUFjTSxJQUFkO0FBQ0Q7OzsyQkFFTTtBQUNMLFdBQUtOLFFBQUwsQ0FB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V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiIuL2pzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9uU291bmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy51cmwgPSB3aW5kb3cuZ2FtZVN0YXRlLnNvdW5kVXJsO1xyXG4gICAgdGhpcy5udW0gPSAxO1xyXG4gICAgdGhpcy5mb25Tb3VuZCA9IG5ldyBBdWRpbyhgJHt0aGlzLnVybH1ydW4ke3RoaXMubnVtfS5tcDNgKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5mb25Tb3VuZCk7XHJcbiAgfVxyXG5cclxuICBwbGF5KCkge1xyXG4gICAgdGhpcy5mb25Tb3VuZC5sb29wID0gdHJ1ZTtcclxuICAgIHRoaXMuZm9uU291bmQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgc3RvcCgpIHtcclxuICAgIHRoaXMuZm9uU291bmQucGF1c2UoKTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IE9ic3RhY2xlIGZyb20gJy4vb2JzdGFjbGUgJztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0JztcclxuaW1wb3J0IFJhbmRvbVJhbmdlIGZyb20gJy4vcmFuZG9tLXJhbmdlJztcclxuaW1wb3J0IEZvblNvdW5kIGZyb20gJy4vZm9uLXNvdW5kJztcclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuLy8gVmFyaWFibGVzXHJcbmxldCBzY29yZTtcclxubGV0IHNjb3JlVGV4dDtcclxubGV0IGhpZ2hzY29yZTtcclxubGV0IGhpZ2hzY29yZVRleHQ7XHJcbmxldCBwbGF5ZXI7XHJcbmxldCBncmF2aXR5O1xyXG5sZXQgb2JzdGFjbGVzID0gW107XHJcbmxldCBnYW1lU3BlZWQ7XHJcbmNvbnN0IGtleXMgPSB7fTtcclxuXHJcbndpbmRvdy5nYW1lU3RhdGUgPSB7XHJcbiAgc291bmRVcmw6ICcuLi8uL2Rpc3Qvc291bmQvJyxcclxuICBpc0ZvblNvdW5kOiBmYWxzZSxcclxuICBpc1BsYXllclNvdW5kOiB0cnVlLFxyXG59O1xyXG5cclxuY29uc3QgcGxheUZvbiA9IG5ldyBGb25Tb3VuZCgpO1xyXG5cclxuLy8gRXZlbnQgTGlzdGVuZXJzXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZ0KSA9PiB7XHJcbiAga2V5c1tldnQuY29kZV0gPSB0cnVlO1xyXG59KTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZ0KSA9PiB7XHJcbiAga2V5c1tldnQuY29kZV0gPSBmYWxzZTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBTcGF3bk9ic3RhY2xlKCkge1xyXG4gIGNvbnN0IHNpemUgPSBSYW5kb21SYW5nZSgyMCwgNzApO1xyXG4gIGNvbnN0IHR5cGUgPSBSYW5kb21SYW5nZSgwLCAxKTtcclxuICBjb25zdCBvYnN0YWNsZSA9IG5ldyBPYnN0YWNsZShjYW52YXMud2lkdGggKyBzaXplLCBjYW52YXMuaGVpZ2h0IC0gc2l6ZSwgc2l6ZSwgc2l6ZSwgJyMyNDg0RTQnLCBjdHgsIGdhbWVTcGVlZCk7XHJcblxyXG4gIGlmICh0eXBlID09PSAxKSB7XHJcbiAgICBvYnN0YWNsZS55IC09IHBsYXllci5vcmlnaW5hbEhlaWdodCAtIDEwO1xyXG4gIH1cclxuICBvYnN0YWNsZXMucHVzaChvYnN0YWNsZSk7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTcGF3blRpbWVyID0gMjAwO1xyXG5sZXQgc3Bhd25UaW1lciA9IGluaXRpYWxTcGF3blRpbWVyO1xyXG5mdW5jdGlvbiBVcGRhdGUoKSB7XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKFVwZGF0ZSk7XHJcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAvLyDQstGL0LrQu9GO0YfQuNGC0Ywg0YTQvtC90L7QstGD0Y4g0LzRg9C30YvQutGDXHJcbiAgaWYgKGtleXMuS2V5USkge1xyXG4gICAgd2luZG93LmdhbWVTdGF0ZS5pc0ZvblNvdW5kID0gZmFsc2U7XHJcbiAgICBwbGF5Rm9uLnN0b3AoKTtcclxuICB9XHJcblxyXG4gIC8vINCy0LrQu9GO0YfQuNGC0Ywg0YTQvtC90L7QstGD0Y4g0LzRg9C30YvQutGDXHJcbiAgaWYgKGtleXMuS2V5QSkge1xyXG4gICAgd2luZG93LmdhbWVTdGF0ZS5pc0ZvblNvdW5kID0gdHJ1ZTtcclxuICAgIHBsYXlGb24ucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgc3Bhd25UaW1lciAtPSAxO1xyXG4gIGlmIChzcGF3blRpbWVyIDw9IDApIHtcclxuICAgIFNwYXduT2JzdGFjbGUoKTtcclxuICAgIHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lciAtIGdhbWVTcGVlZCAqIDg7XHJcblxyXG4gICAgaWYgKHNwYXduVGltZXIgPCA2MCkge1xyXG4gICAgICBzcGF3blRpbWVyID0gNjA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTcGF3biBFbmVtaWVzXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnN0YWNsZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG8gPSBvYnN0YWNsZXNbaV07XHJcblxyXG4gICAgaWYgKG8ueCArIG8udyA8IDApIHtcclxuICAgICAgb2JzdGFjbGVzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHBsYXllci54IDwgby54ICsgby53XHJcbiAgICAgICAgJiYgcGxheWVyLnggKyBwbGF5ZXIudyA+IG8ueFxyXG4gICAgICAgICYmIHBsYXllci55IDwgby55ICsgby5oXHJcbiAgICAgICAgJiYgcGxheWVyLnkgKyBwbGF5ZXIuaCA+IG8ueVxyXG4gICAgKSB7XHJcbiAgICAgIG9ic3RhY2xlcyA9IFtdO1xyXG4gICAgICBzY29yZSA9IDA7XHJcbiAgICAgIHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcclxuICAgICAgZ2FtZVNwZWVkID0gMztcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWdoc2NvcmUnLCBoaWdoc2NvcmUpO1xyXG4gICAgfVxyXG5cclxuICAgIG8uVXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwbGF5ZXIuQW5pbWF0ZSgpO1xyXG5cclxuICBzY29yZSArPSAxO1xyXG4gIHNjb3JlVGV4dC50ID0gYFNjb3JlOiAke3Njb3JlfWA7XHJcbiAgc2NvcmVUZXh0LkRyYXcoKTtcclxuXHJcbiAgaWYgKHNjb3JlID4gaGlnaHNjb3JlKSB7XHJcbiAgICBoaWdoc2NvcmUgPSBzY29yZTtcclxuICAgIGhpZ2hzY29yZVRleHQudCA9IGBIaWdoc2NvcmU6ICR7aGlnaHNjb3JlfWA7XHJcbiAgfVxyXG5cclxuICBoaWdoc2NvcmVUZXh0LkRyYXcoKTtcclxuXHJcbiAgZ2FtZVNwZWVkICs9IDAuMDAzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTdGFydCgpIHtcclxuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICBjdHguZm9udCA9ICcyMHB4IHNhbnMtc2VyaWYnO1xyXG5cclxuICBnYW1lU3BlZWQgPSAzO1xyXG4gIGdyYXZpdHkgPSAxO1xyXG5cclxuICBzY29yZSA9IDA7XHJcbiAgaGlnaHNjb3JlID0gMDtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hzY29yZScpKSB7XHJcbiAgICBoaWdoc2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJyk7XHJcbiAgfVxyXG5cclxuICBwbGF5ZXIgPSBuZXcgUGxheWVyKDI1LCAwLCA1MCwgNTAsICcjRkY1ODU4JywgY2FudmFzLCBjdHgsIGtleXMsIGdyYXZpdHkpO1xyXG5cclxuICBzY29yZVRleHQgPSBuZXcgVGV4dChgU2NvcmU6ICR7c2NvcmV9YCwgMjUsIDI1LCAnbGVmdCcsICcjMjEyMTIxJywgJzIwJywgY3R4KTtcclxuICBoaWdoc2NvcmVUZXh0ID0gbmV3IFRleHQoYEhpZ2hzY29yZTogJHtoaWdoc2NvcmV9YCwgY2FudmFzLndpZHRoIC0gMjUsIDI1LCAncmlnaHQnLCAnIzIxMjEyMScsICcyMCcsIGN0eCk7XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShVcGRhdGUpO1xyXG59XHJcblxyXG5TdGFydCgpO1xyXG5pZiAod2luZG93LmdhbWVTdGF0ZS5pc0ZvblNvdW5kKSB7XHJcbiAgcGxheUZvbi5wbGF5KCk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlIHtcclxuICBjb25zdHJ1Y3Rvcih4LCB5LCB3LCBoLCBjLCBjdHgsIGdhbWVTcGVlZCkge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLncgPSB3O1xyXG4gICAgdGhpcy5oID0gaDtcclxuICAgIHRoaXMuYyA9IGM7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuZ2FtZVNwZWVkID0gZ2FtZVNwZWVkO1xyXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcclxuICB9XHJcblxyXG4gIFVwZGF0ZSgpIHtcclxuICAgIHRoaXMueCArPSB0aGlzLmR4O1xyXG4gICAgdGhpcy5EcmF3KCk7XHJcbiAgICB0aGlzLmR4ID0gLXRoaXMuZ2FtZVNwZWVkO1xyXG4gIH1cclxuXHJcbiAgRHJhdygpIHtcclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jO1xyXG4gICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMudywgdGhpcy5oKTtcclxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IoeCwgeSwgdywgaCwgYywgY2FudmFzLCBjdHgsIGtleXMsIGdyYXZpdHkpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy53ID0gdztcclxuICAgIHRoaXMuaCA9IGg7XHJcbiAgICB0aGlzLmMgPSBjO1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMua2V5cyA9IGtleXM7XHJcbiAgICB0aGlzLmdyYXZpdHkgPSBncmF2aXR5O1xyXG4gICAgdGhpcy5keSA9IDA7XHJcbiAgICB0aGlzLmp1bXBGb3JjZSA9IDE1O1xyXG4gICAgdGhpcy5vcmlnaW5hbEhlaWdodCA9IGg7XHJcbiAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmp1bXBUaW1lciA9IDA7XHJcbiAgfVxyXG5cclxuICBBbmltYXRlKCkge1xyXG4gICAgLy8gSnVtcFxyXG4gICAgaWYgKHRoaXMua2V5cy5TcGFjZSB8fCB0aGlzLmtleXMuS2V5Vykge1xyXG4gICAgICB0aGlzLkp1bXAoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuanVtcFRpbWVyID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5rZXlzLlNoaWZ0TGVmdCB8fCB0aGlzLmtleXMuS2V5Uykge1xyXG4gICAgICB0aGlzLmggPSB0aGlzLm9yaWdpbmFsSGVpZ2h0IC8gMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaCA9IHRoaXMub3JpZ2luYWxIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy55ICs9IHRoaXMuZHk7XHJcblxyXG4gICAgLy8gR3Jhdml0eVxyXG4gICAgaWYgKHRoaXMueSArIHRoaXMuaCA8IHRoaXMuY2FudmFzLmhlaWdodCkge1xyXG4gICAgICB0aGlzLmR5ICs9IHRoaXMuZ3Jhdml0eTtcclxuICAgICAgdGhpcy5ncm91bmRlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5keSA9IDA7XHJcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmg7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5EcmF3KCk7XHJcbiAgfVxyXG5cclxuICBKdW1wKCkge1xyXG4gICAgaWYgKHRoaXMuZ3JvdW5kZWQgJiYgdGhpcy5qdW1wVGltZXIgPT09IDApIHtcclxuICAgICAgdGhpcy5qdW1wVGltZXIgPSAxO1xyXG4gICAgICB0aGlzLmR5ID0gLXRoaXMuanVtcEZvcmNlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmp1bXBUaW1lciA+IDAgJiYgdGhpcy5qdW1wVGltZXIgPCAxNSkge1xyXG4gICAgICB0aGlzLmp1bXBUaW1lciArPSAxO1xyXG4gICAgICB0aGlzLmR5ID0gLXRoaXMuanVtcEZvcmNlIC0gKHRoaXMuanVtcFRpbWVyIC8gNTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgRHJhdygpIHtcclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jO1xyXG4gICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMudywgdGhpcy5oKTtcclxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmRvbVJhbmdlKG1pbiwgbWF4KSB7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCB7XHJcbiAgY29uc3RydWN0b3IodCwgeCwgeSwgYSwgYywgcywgY3R4KSB7XHJcbiAgICB0aGlzLnQgPSB0O1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmEgPSBhO1xyXG4gICAgdGhpcy5jID0gYztcclxuICAgIHRoaXMucyA9IHM7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICB9XHJcblxyXG4gIERyYXcoKSB7XHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuYztcclxuICAgIHRoaXMuY3R4LmZvbnQgPSBgJHt0aGlzLnN9cHggc2Fucy1zZXJpZmA7XHJcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSB0aGlzLmE7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLnQsIHRoaXMueCwgdGhpcy55KTtcclxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=
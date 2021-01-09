/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
var keys = {}; // Event Listeners

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
  ctx.clearRect(0, 0, canvas.width, canvas.height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvb2JzdGFjbGUgLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcmFuZG9tLXJhbmdlLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvdGV4dC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJzY29yZSIsInNjb3JlVGV4dCIsImhpZ2hzY29yZSIsImhpZ2hzY29yZVRleHQiLCJwbGF5ZXIiLCJncmF2aXR5Iiwib2JzdGFjbGVzIiwiZ2FtZVNwZWVkIiwia2V5cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJjb2RlIiwiU3Bhd25PYnN0YWNsZSIsInNpemUiLCJSYW5kb21SYW5nZSIsInR5cGUiLCJvYnN0YWNsZSIsIk9ic3RhY2xlIiwid2lkdGgiLCJoZWlnaHQiLCJ5Iiwib3JpZ2luYWxIZWlnaHQiLCJwdXNoIiwiaW5pdGlhbFNwYXduVGltZXIiLCJzcGF3blRpbWVyIiwiVXBkYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0IiwiaSIsImxlbmd0aCIsIm8iLCJ4IiwidyIsInNwbGljZSIsImgiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiQW5pbWF0ZSIsInQiLCJEcmF3IiwiU3RhcnQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJmb250IiwiZ2V0SXRlbSIsIlBsYXllciIsIlRleHQiLCJjIiwiZHgiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNsb3NlUGF0aCIsImR5IiwianVtcEZvcmNlIiwiZ3JvdW5kZWQiLCJqdW1wVGltZXIiLCJTcGFjZSIsIktleVciLCJKdW1wIiwiU2hpZnRMZWZ0IiwiS2V5UyIsIm1pbiIsIm1heCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImEiLCJzIiwidGV4dEFsaWduIiwiZmlsbFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWixDLENBRUE7O0FBQ0EsSUFBSUMsS0FBSjtBQUNBLElBQUlDLFNBQUo7QUFDQSxJQUFJQyxTQUFKO0FBQ0EsSUFBSUMsYUFBSjtBQUNBLElBQUlDLE1BQUo7QUFDQSxJQUFJQyxPQUFKO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsSUFBSUMsU0FBSjtBQUNBLElBQU1DLElBQUksR0FBRyxFQUFiLEMsQ0FFQTs7QUFDQVosUUFBUSxDQUFDYSxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFDQyxHQUFELEVBQVM7QUFDNUNGLE1BQUksQ0FBQ0UsR0FBRyxDQUFDQyxJQUFMLENBQUosR0FBaUIsSUFBakI7QUFDRCxDQUZEO0FBR0FmLFFBQVEsQ0FBQ2EsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsR0FBRCxFQUFTO0FBQzFDRixNQUFJLENBQUNFLEdBQUcsQ0FBQ0MsSUFBTCxDQUFKLEdBQWlCLEtBQWpCO0FBQ0QsQ0FGRDs7QUFJQSxT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QixFQUF3QnBCLENBQXhCLEVBQTJCcUIsQ0FBM0IsRUFBOEJ2RSxHQUE5QixFQUFtQztBQUFBOztBQUNqQyxTQUFLeUMsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS1IsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS1gsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS2dELENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtwQixDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLcUIsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS3ZFLEdBQUwsR0FBV0EsR0FBWDtBQUNEOzs7OzJCQUVNO0FBQ0wsV0FBS0EsR0FBTCxDQUFTb0QsU0FBVDtBQUNBLFdBQUtwRCxHQUFMLENBQVNxRCxTQUFULEdBQXFCLEtBQUtILENBQTFCO0FBQ0EsV0FBS2xELEdBQUwsQ0FBUzhDLElBQVQsYUFBbUIsS0FBS3lCLENBQXhCO0FBQ0EsV0FBS3ZFLEdBQUwsQ0FBU3dFLFNBQVQsR0FBcUIsS0FBS0YsQ0FBMUI7QUFDQSxXQUFLdEUsR0FBTCxDQUFTeUUsUUFBVCxDQUFrQixLQUFLaEMsQ0FBdkIsRUFBMEIsS0FBS1IsQ0FBL0IsRUFBa0MsS0FBS1gsQ0FBdkM7QUFDQSxXQUFLdEIsR0FBTCxDQUFTdUQsU0FBVDtBQUNEOzs7Ozs7Ozs7Ozs7VUNuQkg7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Ii4vanMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IE9ic3RhY2xlIGZyb20gJy4vb2JzdGFjbGUgJztcclxuaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0JztcclxuaW1wb3J0IFJhbmRvbVJhbmdlIGZyb20gJy4vcmFuZG9tLXJhbmdlJztcclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuLy8gVmFyaWFibGVzXHJcbmxldCBzY29yZTtcclxubGV0IHNjb3JlVGV4dDtcclxubGV0IGhpZ2hzY29yZTtcclxubGV0IGhpZ2hzY29yZVRleHQ7XHJcbmxldCBwbGF5ZXI7XHJcbmxldCBncmF2aXR5O1xyXG5sZXQgb2JzdGFjbGVzID0gW107XHJcbmxldCBnYW1lU3BlZWQ7XHJcbmNvbnN0IGtleXMgPSB7fTtcclxuXHJcbi8vIEV2ZW50IExpc3RlbmVyc1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2dCkgPT4ge1xyXG4gIGtleXNbZXZ0LmNvZGVdID0gdHJ1ZTtcclxufSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2dCkgPT4ge1xyXG4gIGtleXNbZXZ0LmNvZGVdID0gZmFsc2U7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gU3Bhd25PYnN0YWNsZSgpIHtcclxuICBjb25zdCBzaXplID0gUmFuZG9tUmFuZ2UoMjAsIDcwKTtcclxuICBjb25zdCB0eXBlID0gUmFuZG9tUmFuZ2UoMCwgMSk7XHJcbiAgY29uc3Qgb2JzdGFjbGUgPSBuZXcgT2JzdGFjbGUoY2FudmFzLndpZHRoICsgc2l6ZSwgY2FudmFzLmhlaWdodCAtIHNpemUsIHNpemUsIHNpemUsICcjMjQ4NEU0JywgY3R4LCBnYW1lU3BlZWQpO1xyXG5cclxuICBpZiAodHlwZSA9PT0gMSkge1xyXG4gICAgb2JzdGFjbGUueSAtPSBwbGF5ZXIub3JpZ2luYWxIZWlnaHQgLSAxMDtcclxuICB9XHJcbiAgb2JzdGFjbGVzLnB1c2gob2JzdGFjbGUpO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3Bhd25UaW1lciA9IDIwMDtcclxubGV0IHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcclxuZnVuY3Rpb24gVXBkYXRlKCkge1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShVcGRhdGUpO1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgc3Bhd25UaW1lciAtPSAxO1xyXG4gIGlmIChzcGF3blRpbWVyIDw9IDApIHtcclxuICAgIFNwYXduT2JzdGFjbGUoKTtcclxuICAgIHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lciAtIGdhbWVTcGVlZCAqIDg7XHJcblxyXG4gICAgaWYgKHNwYXduVGltZXIgPCA2MCkge1xyXG4gICAgICBzcGF3blRpbWVyID0gNjA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTcGF3biBFbmVtaWVzXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnN0YWNsZXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IG8gPSBvYnN0YWNsZXNbaV07XHJcblxyXG4gICAgaWYgKG8ueCArIG8udyA8IDApIHtcclxuICAgICAgb2JzdGFjbGVzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHBsYXllci54IDwgby54ICsgby53XHJcbiAgICAgICAgJiYgcGxheWVyLnggKyBwbGF5ZXIudyA+IG8ueFxyXG4gICAgICAgICYmIHBsYXllci55IDwgby55ICsgby5oXHJcbiAgICAgICAgJiYgcGxheWVyLnkgKyBwbGF5ZXIuaCA+IG8ueVxyXG4gICAgKSB7XHJcbiAgICAgIG9ic3RhY2xlcyA9IFtdO1xyXG4gICAgICBzY29yZSA9IDA7XHJcbiAgICAgIHNwYXduVGltZXIgPSBpbml0aWFsU3Bhd25UaW1lcjtcclxuICAgICAgZ2FtZVNwZWVkID0gMztcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWdoc2NvcmUnLCBoaWdoc2NvcmUpO1xyXG4gICAgfVxyXG5cclxuICAgIG8uVXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwbGF5ZXIuQW5pbWF0ZSgpO1xyXG5cclxuICBzY29yZSArPSAxO1xyXG4gIHNjb3JlVGV4dC50ID0gYFNjb3JlOiAke3Njb3JlfWA7XHJcbiAgc2NvcmVUZXh0LkRyYXcoKTtcclxuXHJcbiAgaWYgKHNjb3JlID4gaGlnaHNjb3JlKSB7XHJcbiAgICBoaWdoc2NvcmUgPSBzY29yZTtcclxuICAgIGhpZ2hzY29yZVRleHQudCA9IGBIaWdoc2NvcmU6ICR7aGlnaHNjb3JlfWA7XHJcbiAgfVxyXG5cclxuICBoaWdoc2NvcmVUZXh0LkRyYXcoKTtcclxuXHJcbiAgZ2FtZVNwZWVkICs9IDAuMDAzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTdGFydCgpIHtcclxuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICBjdHguZm9udCA9ICcyMHB4IHNhbnMtc2VyaWYnO1xyXG5cclxuICBnYW1lU3BlZWQgPSAzO1xyXG4gIGdyYXZpdHkgPSAxO1xyXG5cclxuICBzY29yZSA9IDA7XHJcbiAgaGlnaHNjb3JlID0gMDtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hzY29yZScpKSB7XHJcbiAgICBoaWdoc2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJyk7XHJcbiAgfVxyXG5cclxuICBwbGF5ZXIgPSBuZXcgUGxheWVyKDI1LCAwLCA1MCwgNTAsICcjRkY1ODU4JywgY2FudmFzLCBjdHgsIGtleXMsIGdyYXZpdHkpO1xyXG5cclxuICBzY29yZVRleHQgPSBuZXcgVGV4dChgU2NvcmU6ICR7c2NvcmV9YCwgMjUsIDI1LCAnbGVmdCcsICcjMjEyMTIxJywgJzIwJywgY3R4KTtcclxuICBoaWdoc2NvcmVUZXh0ID0gbmV3IFRleHQoYEhpZ2hzY29yZTogJHtoaWdoc2NvcmV9YCwgY2FudmFzLndpZHRoIC0gMjUsIDI1LCAncmlnaHQnLCAnIzIxMjEyMScsICcyMCcsIGN0eCk7XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShVcGRhdGUpO1xyXG59XHJcblxyXG5TdGFydCgpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzdGFjbGUge1xyXG4gIGNvbnN0cnVjdG9yKHgsIHksIHcsIGgsIGMsIGN0eCwgZ2FtZVNwZWVkKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMudyA9IHc7XHJcbiAgICB0aGlzLmggPSBoO1xyXG4gICAgdGhpcy5jID0gYztcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5nYW1lU3BlZWQgPSBnYW1lU3BlZWQ7XHJcbiAgICB0aGlzLmR4ID0gLXRoaXMuZ2FtZVNwZWVkO1xyXG4gIH1cclxuXHJcbiAgVXBkYXRlKCkge1xyXG4gICAgdGhpcy54ICs9IHRoaXMuZHg7XHJcbiAgICB0aGlzLkRyYXcoKTtcclxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XHJcbiAgfVxyXG5cclxuICBEcmF3KCkge1xyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmM7XHJcbiAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53LCB0aGlzLmgpO1xyXG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHgsIHksIHcsIGgsIGMsIGNhbnZhcywgY3R4LCBrZXlzLCBncmF2aXR5KSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMudyA9IHc7XHJcbiAgICB0aGlzLmggPSBoO1xyXG4gICAgdGhpcy5jID0gYztcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLmtleXMgPSBrZXlzO1xyXG4gICAgdGhpcy5ncmF2aXR5ID0gZ3Jhdml0eTtcclxuICAgIHRoaXMuZHkgPSAwO1xyXG4gICAgdGhpcy5qdW1wRm9yY2UgPSAxNTtcclxuICAgIHRoaXMub3JpZ2luYWxIZWlnaHQgPSBoO1xyXG4gICAgdGhpcy5ncm91bmRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5qdW1wVGltZXIgPSAwO1xyXG4gIH1cclxuXHJcbiAgQW5pbWF0ZSgpIHtcclxuICAgIC8vIEp1bXBcclxuICAgIGlmICh0aGlzLmtleXMuU3BhY2UgfHwgdGhpcy5rZXlzLktleVcpIHtcclxuICAgICAgdGhpcy5KdW1wKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmp1bXBUaW1lciA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMua2V5cy5TaGlmdExlZnQgfHwgdGhpcy5rZXlzLktleVMpIHtcclxuICAgICAgdGhpcy5oID0gdGhpcy5vcmlnaW5hbEhlaWdodCAvIDI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmggPSB0aGlzLm9yaWdpbmFsSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueSArPSB0aGlzLmR5O1xyXG5cclxuICAgIC8vIEdyYXZpdHlcclxuICAgIGlmICh0aGlzLnkgKyB0aGlzLmggPCB0aGlzLmNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgdGhpcy5keSArPSB0aGlzLmdyYXZpdHk7XHJcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZHkgPSAwO1xyXG4gICAgICB0aGlzLmdyb3VuZGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuRHJhdygpO1xyXG4gIH1cclxuXHJcbiAgSnVtcCgpIHtcclxuICAgIGlmICh0aGlzLmdyb3VuZGVkICYmIHRoaXMuanVtcFRpbWVyID09PSAwKSB7XHJcbiAgICAgIHRoaXMuanVtcFRpbWVyID0gMTtcclxuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5qdW1wVGltZXIgPiAwICYmIHRoaXMuanVtcFRpbWVyIDwgMTUpIHtcclxuICAgICAgdGhpcy5qdW1wVGltZXIgKz0gMTtcclxuICAgICAgdGhpcy5keSA9IC10aGlzLmp1bXBGb3JjZSAtICh0aGlzLmp1bXBUaW1lciAvIDUwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIERyYXcoKSB7XHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuYztcclxuICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLncsIHRoaXMuaCk7XHJcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5kb21SYW5nZShtaW4sIG1heCkge1xyXG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQge1xyXG4gIGNvbnN0cnVjdG9yKHQsIHgsIHksIGEsIGMsIHMsIGN0eCkge1xyXG4gICAgdGhpcy50ID0gdDtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5hID0gYTtcclxuICAgIHRoaXMuYyA9IGM7XHJcbiAgICB0aGlzLnMgPSBzO1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgfVxyXG5cclxuICBEcmF3KCkge1xyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmM7XHJcbiAgICB0aGlzLmN0eC5mb250ID0gYCR7dGhpcy5zfXB4IHNhbnMtc2VyaWZgO1xyXG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gdGhpcy5hO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQodGhpcy50LCB0aGlzLngsIHRoaXMueSk7XHJcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9
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

function RandomIntInRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function SpawnObstacle() {
  var size = RandomIntInRange(20, 70);
  var type = RandomIntInRange(0, 1);
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
    console.log(obstacles);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvb2JzdGFjbGUgLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3JzY2xvbmUvLi9zcmMvdGV4dC5qcyIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JzY2xvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yc2Nsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNjbG9uZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJzY29yZSIsInNjb3JlVGV4dCIsImhpZ2hzY29yZSIsImhpZ2hzY29yZVRleHQiLCJwbGF5ZXIiLCJncmF2aXR5Iiwib2JzdGFjbGVzIiwiZ2FtZVNwZWVkIiwia2V5cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJjb2RlIiwiUmFuZG9tSW50SW5SYW5nZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIlNwYXduT2JzdGFjbGUiLCJzaXplIiwidHlwZSIsIm9ic3RhY2xlIiwiT2JzdGFjbGUiLCJ3aWR0aCIsImhlaWdodCIsInkiLCJvcmlnaW5hbEhlaWdodCIsInB1c2giLCJpbml0aWFsU3Bhd25UaW1lciIsInNwYXduVGltZXIiLCJVcGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJjb25zb2xlIiwibG9nIiwiaSIsImxlbmd0aCIsIm8iLCJ4IiwidyIsInNwbGljZSIsImgiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiQW5pbWF0ZSIsInQiLCJEcmF3IiwiU3RhcnQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJmb250IiwiZ2V0SXRlbSIsIlBsYXllciIsIlRleHQiLCJjIiwiZHgiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNsb3NlUGF0aCIsImR5IiwianVtcEZvcmNlIiwiZ3JvdW5kZWQiLCJqdW1wVGltZXIiLCJTcGFjZSIsIktleVciLCJKdW1wIiwiU2hpZnRMZWZ0IiwiS2V5UyIsImEiLCJzIiwidGV4dEFsaWduIiwiZmlsbFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWixDLENBRUE7O0FBQ0EsSUFBSUMsS0FBSjtBQUNBLElBQUlDLFNBQUo7QUFDQSxJQUFJQyxTQUFKO0FBQ0EsSUFBSUMsYUFBSjtBQUNBLElBQUlDLE1BQUo7QUFDQSxJQUFJQyxPQUFKO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsSUFBSUMsU0FBSjtBQUNBLElBQU1DLElBQUksR0FBRyxFQUFiLEMsQ0FFQTs7QUFDQVosUUFBUSxDQUFDYSxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFDQyxHQUFELEVBQVM7QUFDNUNGLE1BQUksQ0FBQ0UsR0FBRyxDQUFDQyxJQUFMLENBQUosR0FBaUIsSUFBakI7QUFDRCxDQUZEO0FBR0FmLFFBQVEsQ0FBQ2EsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsR0FBRCxFQUFTO0FBQzFDRixNQUFJLENBQUNFLEdBQUcsQ0FBQ0MsSUFBTCxDQUFKLEdBQWlCLEtBQWpCO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTQyxnQkFBVCxDQUEwQkMsR0FBMUIsRUFB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d0JmLENBQXhCLEVBQTJCZ0IsQ0FBM0IsRUFBOEJ6RSxHQUE5QixFQUFtQztBQUFBOztBQUNqQyxTQUFLZ0QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS1IsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS2IsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBSzZDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtmLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtnQixDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLekUsR0FBTCxHQUFXQSxHQUFYO0FBQ0Q7Ozs7MkJBRU07QUFDTCxXQUFLQSxHQUFMLENBQVMyRCxTQUFUO0FBQ0EsV0FBSzNELEdBQUwsQ0FBUzRELFNBQVQsR0FBcUIsS0FBS0gsQ0FBMUI7QUFDQSxXQUFLekQsR0FBTCxDQUFTcUQsSUFBVCxhQUFtQixLQUFLb0IsQ0FBeEI7QUFDQSxXQUFLekUsR0FBTCxDQUFTMEUsU0FBVCxHQUFxQixLQUFLRixDQUExQjtBQUNBLFdBQUt4RSxHQUFMLENBQVMyRSxRQUFULENBQWtCLEtBQUszQixDQUF2QixFQUEwQixLQUFLUixDQUEvQixFQUFrQyxLQUFLYixDQUF2QztBQUNBLFdBQUszQixHQUFMLENBQVM4RCxTQUFUO0FBQ0Q7Ozs7Ozs7Ozs7OztVQ25CSDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiLi9qcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgT2JzdGFjbGUgZnJvbSAnLi9vYnN0YWNsZSAnO1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuL3RleHQnO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4vLyBWYXJpYWJsZXNcclxubGV0IHNjb3JlO1xyXG5sZXQgc2NvcmVUZXh0O1xyXG5sZXQgaGlnaHNjb3JlO1xyXG5sZXQgaGlnaHNjb3JlVGV4dDtcclxubGV0IHBsYXllcjtcclxubGV0IGdyYXZpdHk7XHJcbmxldCBvYnN0YWNsZXMgPSBbXTtcclxubGV0IGdhbWVTcGVlZDtcclxuY29uc3Qga2V5cyA9IHt9O1xyXG5cclxuLy8gRXZlbnQgTGlzdGVuZXJzXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZ0KSA9PiB7XHJcbiAga2V5c1tldnQuY29kZV0gPSB0cnVlO1xyXG59KTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZ0KSA9PiB7XHJcbiAga2V5c1tldnQuY29kZV0gPSBmYWxzZTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBSYW5kb21JbnRJblJhbmdlKG1pbiwgbWF4KSB7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3Bhd25PYnN0YWNsZSgpIHtcclxuICBjb25zdCBzaXplID0gUmFuZG9tSW50SW5SYW5nZSgyMCwgNzApO1xyXG4gIGNvbnN0IHR5cGUgPSBSYW5kb21JbnRJblJhbmdlKDAsIDEpO1xyXG4gIGNvbnN0IG9ic3RhY2xlID0gbmV3IE9ic3RhY2xlKGNhbnZhcy53aWR0aCArIHNpemUsIGNhbnZhcy5oZWlnaHQgLSBzaXplLCBzaXplLCBzaXplLCAnIzI0ODRFNCcsIGN0eCwgZ2FtZVNwZWVkKTtcclxuXHJcbiAgaWYgKHR5cGUgPT09IDEpIHtcclxuICAgIG9ic3RhY2xlLnkgLT0gcGxheWVyLm9yaWdpbmFsSGVpZ2h0IC0gMTA7XHJcbiAgfVxyXG4gIG9ic3RhY2xlcy5wdXNoKG9ic3RhY2xlKTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFNwYXduVGltZXIgPSAyMDA7XHJcbmxldCBzcGF3blRpbWVyID0gaW5pdGlhbFNwYXduVGltZXI7XHJcbmZ1bmN0aW9uIFVwZGF0ZSgpIHtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoVXBkYXRlKTtcclxuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gIHNwYXduVGltZXIgLT0gMTtcclxuICBpZiAoc3Bhd25UaW1lciA8PSAwKSB7XHJcbiAgICBTcGF3bk9ic3RhY2xlKCk7XHJcbiAgICBjb25zb2xlLmxvZyhvYnN0YWNsZXMpO1xyXG4gICAgc3Bhd25UaW1lciA9IGluaXRpYWxTcGF3blRpbWVyIC0gZ2FtZVNwZWVkICogODtcclxuXHJcbiAgICBpZiAoc3Bhd25UaW1lciA8IDYwKSB7XHJcbiAgICAgIHNwYXduVGltZXIgPSA2MDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFNwYXduIEVuZW1pZXNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9ic3RhY2xlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgbyA9IG9ic3RhY2xlc1tpXTtcclxuXHJcbiAgICBpZiAoby54ICsgby53IDwgMCkge1xyXG4gICAgICBvYnN0YWNsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgcGxheWVyLnggPCBvLnggKyBvLndcclxuICAgICAgICAmJiBwbGF5ZXIueCArIHBsYXllci53ID4gby54XHJcbiAgICAgICAgJiYgcGxheWVyLnkgPCBvLnkgKyBvLmhcclxuICAgICAgICAmJiBwbGF5ZXIueSArIHBsYXllci5oID4gby55XHJcbiAgICApIHtcclxuICAgICAgb2JzdGFjbGVzID0gW107XHJcbiAgICAgIHNjb3JlID0gMDtcclxuICAgICAgc3Bhd25UaW1lciA9IGluaXRpYWxTcGF3blRpbWVyO1xyXG4gICAgICBnYW1lU3BlZWQgPSAzO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hzY29yZScsIGhpZ2hzY29yZSk7XHJcbiAgICB9XHJcblxyXG4gICAgby5VcGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHBsYXllci5BbmltYXRlKCk7XHJcblxyXG4gIHNjb3JlICs9IDE7XHJcbiAgc2NvcmVUZXh0LnQgPSBgU2NvcmU6ICR7c2NvcmV9YDtcclxuICBzY29yZVRleHQuRHJhdygpO1xyXG5cclxuICBpZiAoc2NvcmUgPiBoaWdoc2NvcmUpIHtcclxuICAgIGhpZ2hzY29yZSA9IHNjb3JlO1xyXG4gICAgaGlnaHNjb3JlVGV4dC50ID0gYEhpZ2hzY29yZTogJHtoaWdoc2NvcmV9YDtcclxuICB9XHJcblxyXG4gIGhpZ2hzY29yZVRleHQuRHJhdygpO1xyXG5cclxuICBnYW1lU3BlZWQgKz0gMC4wMDM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN0YXJ0KCkge1xyXG4gIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gIGN0eC5mb250ID0gJzIwcHggc2Fucy1zZXJpZic7XHJcblxyXG4gIGdhbWVTcGVlZCA9IDM7XHJcbiAgZ3Jhdml0eSA9IDE7XHJcblxyXG4gIHNjb3JlID0gMDtcclxuICBoaWdoc2NvcmUgPSAwO1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaHNjb3JlJykpIHtcclxuICAgIGhpZ2hzY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoc2NvcmUnKTtcclxuICB9XHJcblxyXG4gIHBsYXllciA9IG5ldyBQbGF5ZXIoMjUsIDAsIDUwLCA1MCwgJyNGRjU4NTgnLCBjYW52YXMsIGN0eCwga2V5cywgZ3Jhdml0eSk7XHJcblxyXG4gIHNjb3JlVGV4dCA9IG5ldyBUZXh0KGBTY29yZTogJHtzY29yZX1gLCAyNSwgMjUsICdsZWZ0JywgJyMyMTIxMjEnLCAnMjAnLCBjdHgpO1xyXG4gIGhpZ2hzY29yZVRleHQgPSBuZXcgVGV4dChgSGlnaHNjb3JlOiAke2hpZ2hzY29yZX1gLCBjYW52YXMud2lkdGggLSAyNSwgMjUsICdyaWdodCcsICcjMjEyMTIxJywgJzIwJywgY3R4KTtcclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKFVwZGF0ZSk7XHJcbn1cclxuXHJcblN0YXJ0KCk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnN0YWNsZSB7XHJcbiAgY29uc3RydWN0b3IoeCwgeSwgdywgaCwgYywgY3R4LCBnYW1lU3BlZWQpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy53ID0gdztcclxuICAgIHRoaXMuaCA9IGg7XHJcbiAgICB0aGlzLmMgPSBjO1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLmdhbWVTcGVlZCA9IGdhbWVTcGVlZDtcclxuICAgIHRoaXMuZHggPSAtdGhpcy5nYW1lU3BlZWQ7XHJcbiAgfVxyXG5cclxuICBVcGRhdGUoKSB7XHJcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcclxuICAgIHRoaXMuRHJhdygpO1xyXG4gICAgdGhpcy5keCA9IC10aGlzLmdhbWVTcGVlZDtcclxuICB9XHJcblxyXG4gIERyYXcoKSB7XHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuYztcclxuICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLncsIHRoaXMuaCk7XHJcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IoeCwgeSwgdywgaCwgYywgY2FudmFzLCBjdHgsIGtleXMsIGdyYXZpdHkpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy53ID0gdztcclxuICAgIHRoaXMuaCA9IGg7XHJcbiAgICB0aGlzLmMgPSBjO1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMua2V5cyA9IGtleXM7XHJcbiAgICB0aGlzLmdyYXZpdHkgPSBncmF2aXR5O1xyXG4gICAgdGhpcy5keSA9IDA7XHJcbiAgICB0aGlzLmp1bXBGb3JjZSA9IDE1O1xyXG4gICAgdGhpcy5vcmlnaW5hbEhlaWdodCA9IGg7XHJcbiAgICB0aGlzLmdyb3VuZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmp1bXBUaW1lciA9IDA7XHJcbiAgfVxyXG5cclxuICBBbmltYXRlKCkge1xyXG4gICAgLy8gSnVtcFxyXG4gICAgaWYgKHRoaXMua2V5cy5TcGFjZSB8fCB0aGlzLmtleXMuS2V5Vykge1xyXG4gICAgICB0aGlzLkp1bXAoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuanVtcFRpbWVyID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5rZXlzLlNoaWZ0TGVmdCB8fCB0aGlzLmtleXMuS2V5Uykge1xyXG4gICAgICB0aGlzLmggPSB0aGlzLm9yaWdpbmFsSGVpZ2h0IC8gMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaCA9IHRoaXMub3JpZ2luYWxIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy55ICs9IHRoaXMuZHk7XHJcblxyXG4gICAgLy8gR3Jhdml0eVxyXG4gICAgaWYgKHRoaXMueSArIHRoaXMuaCA8IHRoaXMuY2FudmFzLmhlaWdodCkge1xyXG4gICAgICB0aGlzLmR5ICs9IHRoaXMuZ3Jhdml0eTtcclxuICAgICAgdGhpcy5ncm91bmRlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5keSA9IDA7XHJcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmg7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5EcmF3KCk7XHJcbiAgfVxyXG5cclxuICBKdW1wKCkge1xyXG4gICAgaWYgKHRoaXMuZ3JvdW5kZWQgJiYgdGhpcy5qdW1wVGltZXIgPT09IDApIHtcclxuICAgICAgdGhpcy5qdW1wVGltZXIgPSAxO1xyXG4gICAgICB0aGlzLmR5ID0gLXRoaXMuanVtcEZvcmNlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmp1bXBUaW1lciA+IDAgJiYgdGhpcy5qdW1wVGltZXIgPCAxNSkge1xyXG4gICAgICB0aGlzLmp1bXBUaW1lciArPSAxO1xyXG4gICAgICB0aGlzLmR5ID0gLXRoaXMuanVtcEZvcmNlIC0gKHRoaXMuanVtcFRpbWVyIC8gNTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgRHJhdygpIHtcclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jO1xyXG4gICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMudywgdGhpcy5oKTtcclxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCB7XHJcbiAgY29uc3RydWN0b3IodCwgeCwgeSwgYSwgYywgcywgY3R4KSB7XHJcbiAgICB0aGlzLnQgPSB0O1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLmEgPSBhO1xyXG4gICAgdGhpcy5jID0gYztcclxuICAgIHRoaXMucyA9IHM7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICB9XHJcblxyXG4gIERyYXcoKSB7XHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuYztcclxuICAgIHRoaXMuY3R4LmZvbnQgPSBgJHt0aGlzLnN9cHggc2Fucy1zZXJpZmA7XHJcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSB0aGlzLmE7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLnQsIHRoaXMueCwgdGhpcy55KTtcclxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc2Nsb25lLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic2NvcmUiLCJzY29yZVRleHQiLCJoaWdoc2NvcmUiLCJoaWdoc2NvcmVUZXh0IiwicGxheWVyIiwiZ3Jhdml0eSIsIm9ic3RhY2xlcyIsImdhbWVTcGVlZCIsImtleXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwiY29kZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWY7QUFDQSxJQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaLEMsQ0FFQTs7QUFDQSxJQUFJQyxLQUFKO0FBQ0EsSUFBSUMsU0FBSjtBQUNBLElBQUlDLFNBQUo7QUFDQSxJQUFJQyxhQUFKO0FBQ0EsSUFBSUMsTUFBSjtBQUNBLElBQUlDLE9BQUo7QUFDQSxJQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxJQUFJQyxTQUFKO0FBQ0EsSUFBSUMsSUFBSSxHQUFHLEVBQVgsQyxDQUVBOztBQUNBWixRQUFRLENBQUNhLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQVVDLEdBQVYsRUFBZTtBQUNsREYsTUFBSSxDQUFDRSxHQUFHLENBQUNDLElBQUwsQ0FBSixHQUFpQixJQUFqQjtBQUNELENBRkQ7QUFHQWYsUUFBUSxDQUFDYSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFVQyxHQUFWLEVBQWU7QUFDaERGLE1BQUksQ0FBQ0UsR0FBRyxDQUFDQyxJQUFMLENBQUosR0FBaUIsS0FBakI7QUFDRCxDQUZELEUiLCJmaWxlIjoiLi9qcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xyXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbi8vIFZhcmlhYmxlc1xyXG5sZXQgc2NvcmU7XHJcbmxldCBzY29yZVRleHQ7XHJcbmxldCBoaWdoc2NvcmU7XHJcbmxldCBoaWdoc2NvcmVUZXh0O1xyXG5sZXQgcGxheWVyO1xyXG5sZXQgZ3Jhdml0eTtcclxubGV0IG9ic3RhY2xlcyA9IFtdO1xyXG5sZXQgZ2FtZVNwZWVkO1xyXG5sZXQga2V5cyA9IHt9O1xyXG5cclxuLy8gRXZlbnQgTGlzdGVuZXJzXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAga2V5c1tldnQuY29kZV0gPSB0cnVlO1xyXG59KTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAga2V5c1tldnQuY29kZV0gPSBmYWxzZTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
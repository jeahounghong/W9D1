/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// import MovingObject from './moving_object';\n// import Ship from './ship'\n// import Util from './util';\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\")\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\")\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\")\n\nfunction Asteroid(option) {\n        this.COLOR = \"#191970\";\n        this.RADIUS = 10;\n        this.VEL = Util.randomVec(10);\n        MovingObject.call(this, {\n            pos: option.pos,\n            vel: this.VEL,\n            radius: this.RADIUS,\n            color: this.COLOR\n        });\n}\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function(ship){\n        // debugger;\n        if (ship instanceof Ship) {\n            // debugger;\n            ship.vel = 0;\n            return true;\n        }\n        return false;\n}\n\n\n\nmodule.exports = Asteroid;  \n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ship__WEBPACK_IMPORTED_MODULE_0__);\n// import Asteroid from \"./asteroid\";\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\n\nclass Game{\n    constructor(canvas){\n        this.DIM_X = canvas.width;\n        this.DIM_Y = canvas.height;\n        this.NUM_ASTEROIDS = this.NUM_ASTEROIDS || 10;\n        this.asteroids = [];\n        this.ctx = canvas.getContext(\"2d\");\n        this.ship = new (_ship__WEBPACK_IMPORTED_MODULE_0___default())({pos: this.randomPosition()});\n        // debugger;\n        for (let i = 0; i < this.NUM_ASTEROIDS; i++){\n            // debugger;\n            this.assAsteroids();\n        }\n        this.objects = [...this.asteroids];\n        this.objects.push(this.ship);\n        \n    }\n\n    assAsteroids(){\n        let a_pos = this.randomPosition.apply(this);\n        let newast = new Asteroid({pos: a_pos});\n        this.asteroids.push(newast);\n    }\n\n    randomPosition(){\n        let x = Math.random() * this.DIM_X ;\n        let y = Math.random() * this.DIM_Y ;\n        return [x,y];\n    }\n\n    draw(ctx){\n        ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n        ctx.fillStyle = (\"skyblue\");\n        ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n\n\n        console.log(this.objects)\n        this.objects.forEach(function(object){\n            object.draw(ctx);     \n        })\n\n        \n    }\n\n    moveObjects() {\n        let that = this;\n        this.objects.forEach(function(object){\n            // debugger;\n            object.move();\n            // debugger;\n            object.pos = that.wrap(object.pos);\n        })\n    }\n\n\n    wrap(pos) {\n        // console.log(this);\n        // console.log(\"HIIIII\")\n        let new_pos = [...pos]// != [[x,y]]\n        if (pos[0] < 0) {\n            new_pos[0] = this.DIM_X;\n        } else if (pos[0] > this.DIM_X) {\n            new_pos[0] = 0;\n        }\n        // console.log(new_pos)\n        if (pos[1] < 0) {\n            new_pos[1] = this.DIM_Y;\n        } else if (pos[0] > this.DIM_Y) {\n            new_pos[1] = 0;\n        }\n        return new_pos;\n    }\n\n    checkCollisions(){\n        for(let i = 0; i< this.objects.length -1; i++){\n            for (let j = i+1; j < this.objects.length; j++){\n                // debugger;\n                if (this.objects[i].isCollidedWith(this.objects[j])){\n                    let ship_collide = this.objects[i].collideWith(this.objects[j]);\n                    if (ship_collide){\n                        // console.log(this);\n                        this.ship.relocate(this.randomPosition());\n                    }\n                    // this.remove(this.objects[i]);\n                    // this.remove(this.objects[j]);\n                }\n            }\n        }\n    }\n\n    step(){\n        this.moveObjects();\n        this.checkCollisions();\n    }\n\n    remove(asteroid){\n        let idx = this.asteroids.indexOf(asteroid)\n        this.asteroids.splice(idx,1);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameView)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nclass GameView {\n    constructor(canvas){\n        this.ctx = canvas.getContext(\"2d\");\n        this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n    }\n\n    start(){\n        // console.log(this);\n        let that = this;\n\n\n        // this.game.draw(that.ctx);\n        setInterval(function(){\n            // console.log(that.game)\n            // that.game.ship.draw(that.ctx)\n            that.game.draw(that.ctx);\n            that.game.step();\n        }\n        ,200)\n    }\n}\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n// import MovingObject from './moving_object';\n// import Asteroid from './asteroid';\n// window.MovingObject = MovingObject;\n\n\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\")\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById('game-canvas');\n    let gv = new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n    let game = gv.game;\n    gv.start.apply(gv);\n    // window.asteroid = new Asteroid({pos: [40,40]});\n\n    let ctx = canvas.getContext(\"2d\");\n    // let game = new Game(canvas);\n    // game.draw(ctx)\n    setInterval(function(){\n        game.moveObjects();\n        game.draw(ctx);\n    },50)\n    \n\n    // let game = new FlappyBird(canvas\n    // game.restart();\n})\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("\nfunction MovingObject(option){\n        // debugger;\n        this.pos = option.pos;\n        this.vel = option.vel;\n        this.radius = option.radius;\n        this.color = option.color;\n}\n\nMovingObject.prototype.draw = function(ctx){\n    // console.log(this)\n    ctx.beginPath()\n    ctx.arc(this.pos[0], this.pos[1], this.radius,0, 2*Math.PI);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n    // debugger;\n    let x = this.pos[0] + this.vel[0];\n    let y = this.pos[1] + this.vel[1];\n    this.pos = [x,y];\n    // debugger\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject){\n    let radii_sum = this.radius + otherObject.radius;\n    let center_dist = this.distance(this.pos, otherObject.pos)\n    return center_dist < radii_sum;\n}\n\nMovingObject.prototype.distance = function(p1,p2){\n    return Math.sqrt(\n        (p1[0]-p2[0])**2 + (p1[1]-p2[1])**2\n    )\n}\n\nMovingObject.prototype.collideWith = function(otherObject){\n    // debugger;\n    return false;\n}\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// import MovingObject from './moving_object';\n// import Util from './util';\n\n\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\")\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\")\n\nfunction Ship(option){\n        this.COLOR = \"red\";\n        this.RADIUS = 15;\n        this.VEL = [0,0];\n        MovingObject.call(this, {\n            pos: option.pos,\n            vel: this.VEL,\n            radius: this.RADIUS,\n            color: this.COLOR\n        })\n}\nUtil.inherits(Ship,MovingObject);\nShip.prototype.relocate = function (pos){\n    this.pos = pos;\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("// import { __esModule } from \"../dist/main\"\n\nconst Util = {\n\n    inherits(childClass, parentClass){\n        function Surrogate() {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n\n    // distance(p1,p2){\n    //     return Math.sqrt(\n    //         (p1[0]-p2[0])**2 + (p1[1]-p2[1])**2\n    //     )\n    // }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
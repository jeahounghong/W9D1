// import MovingObject from './moving_object';
// import Ship from './ship'
// import Util from './util';
const Util = require("./util")
const MovingObject = require("./moving_object")
const Ship = require('./ship')

function Asteroid(option) {
        this.COLOR = "#191970";
        this.RADIUS = 10;
        this.VEL = Util.randomVec(10);
        MovingObject.call(this, {
            pos: option.pos,
            vel: this.VEL,
            radius: this.RADIUS,
            color: this.COLOR
        });
}
Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(ship){
        // debugger;
        if (ship instanceof Ship) {
            // debugger;
            ship.vel = 0;
            return true;
        }
        return false;
}



module.exports = Asteroid;  
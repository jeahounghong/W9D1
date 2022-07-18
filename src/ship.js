// import MovingObject from './moving_object';
// import Util from './util';


const Util = require("./util")
const MovingObject = require("./moving_object")

function Ship(option){
        this.COLOR = "red";
        this.RADIUS = 15;
        this.VEL = [0,0];
        MovingObject.call(this, {
            pos: option.pos,
            vel: this.VEL,
            radius: this.RADIUS,
            color: this.COLOR
        })
}
Util.inherits(Ship,MovingObject);
Ship.prototype.relocate = function (pos){
    this.pos = pos;
}

module.exports = Ship;
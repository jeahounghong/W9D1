import MovingObject from './moving_object';
import Util from './util';

export default class Asteroid {
    constructor(option){
        this.COLOR = "#191970";
        this.RADIUS = 10;
        this.VEL = Util.randomVec(10);
        this.__proto__ = new MovingObject({
            pos: option.pos,
            vel: this.VEL,
            radius: this.RADIUS,
            color: this.COLOR
        })
    }
}
Util.inherits(Asteroid, MovingObject);
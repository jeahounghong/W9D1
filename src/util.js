// import { __esModule } from "../dist/main"

const Util = {

    inherits(childClass, parentClass){
        function Surrogate() {};
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    },

    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    }

    // distance(p1,p2){
    //     return Math.sqrt(
    //         (p1[0]-p2[0])**2 + (p1[1]-p2[1])**2
    //     )
    // }
}

module.exports = Util;
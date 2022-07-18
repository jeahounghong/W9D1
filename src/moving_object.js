
export default class MovingObject{

    constructor(option){
        this.pos = option.pos;
        this.vel = option.vel;
        this.radius = option.radius;
        this.color = option.color;
    }

    draw(ctx){
        // console.log(this)
        ctx.beginPath()
        ctx.arc(this.pos[0], this.pos[1], this.radius,0, 2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    move() {
        let x = this.pos[0] + this.vel[0];
        let y = this.pos[1] + this.vel[1];
        this.pos = [x,y];
    }

    isCollidedWith(otherObject){
        let radii_sum = this.radius + otherObject.radius;
        let center_dist = this.distance(this.pos, otherObject.pos)
        return center_dist < radii_sum;
    }

    distance(p1,p2){
        return Math.sqrt(
            (p1[0]-p2[0])**2 + (p1[1]-p2[1])**2
        )
    }


};

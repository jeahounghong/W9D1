import Asteroid from "./asteroid";

export default class Game{
    constructor(canvas){
        this.DIM_X = canvas.width;
        this.DIM_Y = canvas.height;
        this.NUM_ASTEROIDS = this.NUM_ASTEROIDS || 20;
        this.asteroids = [];
        this.ctx = canvas.getContext("2d");

        for (let i = 0; i < this.NUM_ASTEROIDS; i++){
            this.assAsteroids.apply(this);
        }
    }

    assAsteroids(){
        let a_pos = this.randomPosition.apply(this);
        let newast = new Asteroid({pos: a_pos});
        this.asteroids.push(newast);
    }

    randomPosition(){
        let x = Math.random() * this.DIM_X ;
        let y = Math.random() * this.DIM_Y ;
        return [x,y];
    }

    draw(ctx){
        ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
        ctx.fillStyle = ("skyblue");
        ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);

        this.asteroids.forEach(function(asteroid){
            asteroid.draw(ctx);     
        })
    }

    moveObjects() {
        let that = this;
        this.asteroids.forEach(function(asteroid){
            asteroid.move();
            // console.log(this)
            // this.wrap();
            asteroid.pos = that.wrap(asteroid.pos);
        })
    }


    wrap(pos) {
        // console.log(this);
        // console.log("HIIIII")
        let new_pos = [...pos]// != [[x,y]]
        if (pos[0] < 0) {
            new_pos[0] = this.DIM_X;
        } else if (pos[0] > this.DIM_X) {
            new_pos[0] = 0;
        }
        console.log(new_pos)
        if (pos[1] < 0) {
            new_pos[1] = this.DIM_Y;
        } else if (pos[0] > this.DIM_Y) {
            new_pos[1] = 0;
        }
        return new_pos;
    }

    checkCollisions(){
        
    }
}

// import Asteroid from "./asteroid";
const Asteroid = require("./asteroid");
import Ship from "./ship";

export default class Game{
    constructor(canvas){
        this.DIM_X = canvas.width;
        this.DIM_Y = canvas.height;
        this.NUM_ASTEROIDS = this.NUM_ASTEROIDS || 10;
        this.asteroids = [];
        this.ctx = canvas.getContext("2d");
        this.ship = new Ship({pos: this.randomPosition()});
        // debugger;
        for (let i = 0; i < this.NUM_ASTEROIDS; i++){
            // debugger;
            this.assAsteroids();
        }
        this.objects = [...this.asteroids];
        this.objects.push(this.ship);
        
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


        console.log(this.objects)
        this.objects.forEach(function(object){
            object.draw(ctx);     
        })

        
    }

    moveObjects() {
        let that = this;
        this.objects.forEach(function(object){
            // debugger;
            object.move();
            // debugger;
            object.pos = that.wrap(object.pos);
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
        // console.log(new_pos)
        if (pos[1] < 0) {
            new_pos[1] = this.DIM_Y;
        } else if (pos[0] > this.DIM_Y) {
            new_pos[1] = 0;
        }
        return new_pos;
    }

    checkCollisions(){
        for(let i = 0; i< this.objects.length -1; i++){
            for (let j = i+1; j < this.objects.length; j++){
                // debugger;
                if (this.objects[i].isCollidedWith(this.objects[j])){
                    let ship_collide = this.objects[i].collideWith(this.objects[j]);
                    if (ship_collide){
                        // console.log(this);
                        this.ship.relocate(this.randomPosition());
                    }
                    // this.remove(this.objects[i]);
                    // this.remove(this.objects[j]);
                }
            }
        }
    }

    step(){
        this.moveObjects();
        this.checkCollisions();
    }

    remove(asteroid){
        let idx = this.asteroids.indexOf(asteroid)
        this.asteroids.splice(idx,1);
    }
}

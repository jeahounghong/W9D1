import Game from './game';


export default class GameView {
    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.game = new Game(canvas);
    }

    start(){
        // console.log(this);
        let that = this;


        setInterval(function(){
            // console.log(that.game)
            that.game.draw(that.ctx);
            that.game.moveObjects();
        }
        ,20)
    }
}
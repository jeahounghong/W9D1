// import MovingObject from './moving_object';
// import Asteroid from './asteroid';
// window.MovingObject = MovingObject;

import GameView from './game_view';
const Asteroid = require('./asteroid')

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    let gv = new GameView(canvas);
    let game = gv.game;
    gv.start.apply(gv);
    // window.asteroid = new Asteroid({pos: [40,40]});

    let ctx = canvas.getContext("2d");
    // let game = new Game(canvas);
    // game.draw(ctx)
    setInterval(function(){
        game.moveObjects();
        game.draw(ctx);
    },50)
    

    // let game = new FlappyBird(canvas
    // game.restart();
})



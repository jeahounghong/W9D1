// import MovingObject from './moving_object';
// import Asteroid from './asteroid';
// window.MovingObject = MovingObject;

import GameView from './game_view';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    let gv = new GameView(canvas);
    gv.start.apply(gv);

    // let ctx = canvas.getContext("2d");
    // let game = new Game(canvas);
    // game.draw(ctx)
    // setInterval(function(){
    //     game.moveObjects();
    //     game.draw(ctx);
    // },50)
    

    // let game = new FlappyBird(canvas
    // game.restart();
})



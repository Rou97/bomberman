'use strict'

class Game{
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.player;
        this.enemies = [];
    };

    startLoop() {

        const loop = () => {

            this.updateCanvas();
            this.clearCanvas();
            this.drawCAnvas();
            window.requestAnimationFrame(loop);
        }

        window.requestAnimationFrame(loop);
    }

    updateCanvas() {

    };

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    drawCAnvas() {

    };


} 
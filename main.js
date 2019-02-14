'use strict'

const main = () => {


    const buildDom = (html) => {
        const main = document.querySelector('main');
        main.innerHTML = html;
        return main;
    }


    const buildSplashScreen = () => {
        const splashScreen = buildDom(`
            <section class="splash-screen">
                <h1>Bomberman</h1>
                <button>Start</button>
            </section>
        `);
        const startButton = document.querySelector('button');
        startButton.addEventListener('click', buildGameScreen);
    };

    const buildGameScreen = () => {
        const gameScreen = buildDom(`
            <section class="game-screen">
                <canvas></canvas>
            </section>
        `);

        const width = document.querySelector('.game-screen').offsetWidth;
        const height = document.querySelector('.game-screen').offsetHeight;

        const canvasElement = document.querySelector('canvas');

        canvasElement.setAttribute('width', width);
        canvasElement.setAttribute('height', height);

        //setTimeout(buildGameOver, 3000);

        const game = new Game(canvasElement);
        game.startLoop();


        // if ((game.player.y - game.player.size/2 >= 0) || (game.player.y + game.player.size/2 <= game.player.canvas.height)){

        // }

        // if ((game.player.y - 1 < 0) || (game.player.y + 1 > game.player.canvas.height) || (game.player.x - 1 < 0) || (game.player.x + 1 > game.player.canvas.width)){
                
        // }

        const playerActions = (event) => {
            let tecla = 0;
            game.player.speed = 25;
            let collision = false;

            

            if(event.code === 'KeyS') {
                tecla = 1;
                collision = game.player.checkCollisions(tecla, game.wall);
                if(!collision) {
                    game.player.changeDirection(tecla, game.player.speed);
                }
            }
            if(event.code === 'KeyW') {
                tecla = 2;
                collision = game.player.checkCollisions(tecla, game.wall);
                if(!collision) {
                    game.player.changeDirection(tecla, game.player.speed);
                }
            }
            if(event.code === 'KeyD') {
                tecla = 3;
                collision = game.player.checkCollisions(tecla, game.wall);
                if(!collision) {
                    game.player.changeDirection(tecla, game.player.speed);
                }
            }
            if(event.code === 'KeyA') {
                tecla = 4;
                collision = game.player.checkCollisions(tecla, game.wall);
                if(!collision) {
                    game.player.changeDirection(tecla, game.player.speed);
                }
            }
            

            if (event.code === 'Space') {
                console.log('bomba');
            }
            
        } 

        document.addEventListener('keydown', playerActions);

    }

    const buildGameOver = () => {
        const gameOverScreen = buildDom(`
            <section class="game-over">
                <h1>Game Over Screen</h1>
                <button>Restart</button>
            </section>
        `);


        const restartButton = document.querySelector('button');
        restartButton.addEventListener('click', buildGameScreen);


    }

    buildSplashScreen();
};


window.addEventListener('load', main);
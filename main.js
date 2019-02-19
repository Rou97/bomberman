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


        const game = new Game(canvasElement);
        game.startLoop();



        const playerActions = (event) => {
            let tecla = 0;
            game.player.speed = 50;
            let collision = false;
            let dead =[];
            for (let i = 0; i <= 9; i++) {
                dead[i] = false;
                console.log(dead[i], i);
            }
            let dead1 = false;
            let dead2 = false;
            let dead3 = false;
            let dead4 = false;
            let dead5 = false;
            let dead6 = false;
            let dead7 = false;
            let dead8 = false;
            let dead9 = false;
            let dead11 = false;
            let dead12 = false;
            let dead13 = false;
            let dead14 = false;
            let dead15 = false;
            let dead16 = false;
            let dead17 = false;
            let dead18 = false;
            let dead19 = false;

                if(event.code === 'KeyS') {
                    tecla = 1;
                    
                    for(let i = 0; i <= 9; i++) {
                        dead[i] = game.player.checkExplosion(tecla, game.explosion[i]);
                    }

                    // dead1 = game.player.checkExplosion(tecla, game.explosion1);
                    // dead2 = game.player.checkExplosion(tecla, game.explosion2);
                    // dead3 = game.player.checkExplosion(tecla, game.explosion3);
                    // dead4 = game.player.checkExplosion(tecla, game.explosion4);
                    // dead5 = game.player.checkExplosion(tecla, game.explosion5);
                    // dead6 = game.player.checkExplosion(tecla, game.explosion6);
                    // dead7 = game.player.checkExplosion(tecla, game.explosion7);
                    // dead8 = game.player.checkExplosion(tecla, game.explosion8);
                    // dead9 = game.player.checkExplosion(tecla, game.explosion9);
                    // dead11 = game.player.checkExplosion(tecla, game.explosion11);
                    // dead12 = game.player.checkExplosion(tecla, game.explosion12);
                    // dead13 = game.player.checkExplosion(tecla, game.explosion13);
                    // dead14 = game.player.checkExplosion(tecla, game.explosion14);
                    // dead15 = game.player.checkExplosion(tecla, game.explosion15);
                    // dead16 = game.player.checkExplosion(tecla, game.explosion16);
                    // dead17 = game.player.checkExplosion(tecla, game.explosion17);
                    // dead18 = game.player.checkExplosion(tecla, game.explosion18);
                    // dead19 = game.player.checkExplosion(tecla, game.explosion19);
                    
                    if(dead1 || dead2 || dead3 || dead4 || dead5 || dead6 || dead7 || dead8 || dead9){
                        buildSplashScreen();
                    }
                    if(dead11 || dead12 || dead13 || dead14 || dead15 || dead16 || dead17 || dead18 || dead19){
                        buildSplashScreen();
                    }

                    game.wall.forEach(l => {
                        l.forEach(e => {
                            collision = game.player.checkCollisions(tecla, e);
                            if(collision) {
                                game.player.speed = 0;
                            }
                        })
                    });
                    if(!collision) {
                        game.player.changeDirection(tecla, game.player.speed);
                    }
                }


                if(event.code === 'KeyW') {
                    tecla = 2;

                    dead1 = game.player.checkExplosion(tecla, game.explosion1);
                    dead2 = game.player.checkExplosion(tecla, game.explosion2);
                    dead3 = game.player.checkExplosion(tecla, game.explosion3);
                    dead4 = game.player.checkExplosion(tecla, game.explosion4);
                    dead5 = game.player.checkExplosion(tecla, game.explosion5);
                    dead6 = game.player.checkExplosion(tecla, game.explosion6);
                    dead7 = game.player.checkExplosion(tecla, game.explosion7);
                    dead8 = game.player.checkExplosion(tecla, game.explosion8);
                    dead9 = game.player.checkExplosion(tecla, game.explosion9);
                    dead11 = game.player.checkExplosion(tecla, game.explosion11);
                    dead12 = game.player.checkExplosion(tecla, game.explosion12);
                    dead13 = game.player.checkExplosion(tecla, game.explosion13);
                    dead14 = game.player.checkExplosion(tecla, game.explosion14);
                    dead15 = game.player.checkExplosion(tecla, game.explosion15);
                    dead16 = game.player.checkExplosion(tecla, game.explosion16);
                    dead17 = game.player.checkExplosion(tecla, game.explosion17);
                    dead18 = game.player.checkExplosion(tecla, game.explosion18);
                    dead19 = game.player.checkExplosion(tecla, game.explosion19);
                    
                    if(dead1 || dead2 || dead3 || dead4 || dead5 || dead6 || dead7 || dead8 || dead9){
                        buildSplashScreen();
                    }
                    if(dead11 || dead12 || dead13 || dead14 || dead15 || dead16 || dead17 || dead18 || dead19){
                        buildSplashScreen();
                    }

                    game.wall.forEach(l => {
                        l.forEach(e => {
                            collision = game.player.checkCollisions(tecla, e);
                            if(collision) {
                                game.player.speed = 0;
                            }
                        })
                    });
                    if(!collision) {
                        game.player.changeDirection(tecla, game.player.speed);
                    }
                }
                if(event.code === 'KeyD') {
                    tecla = 3;

                    dead1 = game.player.checkExplosion(tecla, game.explosion1);
                    dead2 = game.player.checkExplosion(tecla, game.explosion2);
                    dead3 = game.player.checkExplosion(tecla, game.explosion3);
                    dead4 = game.player.checkExplosion(tecla, game.explosion4);
                    dead5 = game.player.checkExplosion(tecla, game.explosion5);
                    dead6 = game.player.checkExplosion(tecla, game.explosion6);
                    dead7 = game.player.checkExplosion(tecla, game.explosion7);
                    dead8 = game.player.checkExplosion(tecla, game.explosion8);
                    dead9 = game.player.checkExplosion(tecla, game.explosion9);
                    dead11 = game.player.checkExplosion(tecla, game.explosion11);
                    dead12 = game.player.checkExplosion(tecla, game.explosion12);
                    dead13 = game.player.checkExplosion(tecla, game.explosion13);
                    dead14 = game.player.checkExplosion(tecla, game.explosion14);
                    dead15 = game.player.checkExplosion(tecla, game.explosion15);
                    dead16 = game.player.checkExplosion(tecla, game.explosion16);
                    dead17 = game.player.checkExplosion(tecla, game.explosion17);
                    dead18 = game.player.checkExplosion(tecla, game.explosion18);
                    dead19 = game.player.checkExplosion(tecla, game.explosion19);
                    
                    if(dead1 || dead2 || dead3 || dead4 || dead5 || dead6 || dead7 || dead8 || dead9){
                        buildSplashScreen();
                    }
                    if(dead11 || dead12 || dead13 || dead14 || dead15 || dead16 || dead17 || dead18 || dead19){
                        buildSplashScreen();
                    }

                    game.wall.forEach(l => {
                        l.forEach(e => {
                            collision = game.player.checkCollisions(tecla, e);
                            if(collision) {
                                game.player.speed = 0;
                            }
                        })
                    });
                    if(!collision) {
                        game.player.changeDirection(tecla, game.player.speed);
                    }
                }
                if(event.code === 'KeyA') {
                    tecla = 4;

                    dead1 = game.player.checkExplosion(tecla, game.explosion1);
                    dead2 = game.player.checkExplosion(tecla, game.explosion2);
                    dead3 = game.player.checkExplosion(tecla, game.explosion3);
                    dead4 = game.player.checkExplosion(tecla, game.explosion4);
                    dead5 = game.player.checkExplosion(tecla, game.explosion5);
                    dead6 = game.player.checkExplosion(tecla, game.explosion6);
                    dead7 = game.player.checkExplosion(tecla, game.explosion7);
                    dead8 = game.player.checkExplosion(tecla, game.explosion8);
                    dead9 = game.player.checkExplosion(tecla, game.explosion9);
                    dead11 = game.player.checkExplosion(tecla, game.explosion11);
                    dead12 = game.player.checkExplosion(tecla, game.explosion12);
                    dead13 = game.player.checkExplosion(tecla, game.explosion13);
                    dead14 = game.player.checkExplosion(tecla, game.explosion14);
                    dead15 = game.player.checkExplosion(tecla, game.explosion15);
                    dead16 = game.player.checkExplosion(tecla, game.explosion16);
                    dead17 = game.player.checkExplosion(tecla, game.explosion17);
                    dead18 = game.player.checkExplosion(tecla, game.explosion18);
                    dead19 = game.player.checkExplosion(tecla, game.explosion19);
                    
                    if(dead1 || dead2 || dead3 || dead4 || dead5 || dead6 || dead7 || dead8 || dead9){
                        buildSplashScreen();
                    }
                    if(dead11 || dead12 || dead13 || dead14 || dead15 || dead16 || dead17 || dead18 || dead19){
                        buildSplashScreen();
                    }

                    game.wall.forEach(l => {
                        l.forEach(e => {
                            collision = game.player.checkCollisions(tecla, e);
                            if(collision) {
                                game.player.speed = 0;
                            }
                        })
                    });
                    if(!collision) {
                        game.player.changeDirection(tecla, game.player.speed);
                    }
                }

            if (event.code === 'Space') {
                if(game.bomb === undefined || game.bomb1 === undefined){
                    game.buildBomb();
                }

                console.log('bomba');
            }
            
        } 

        document.addEventListener('keyup', playerActions);

        const player2Actions = (event) => {
            let tecla = 0;
            game.player2.speed = 50;
            let collision = false;
            let dead1 = false;
            let dead2 = false;
            let dead3 = false;
            let dead4 = false;
            let dead5 = false;
            let dead6 = false;
            let dead7 = false;
            let dead8 = false;
            let dead9 = false;
            let dead11 = false;
            let dead12 = false;
            let dead13 = false;
            let dead14 = false;
            let dead15 = false;
            let dead16 = false;
            let dead17 = false;
            let dead18 = false;
            let dead19 = false;
    
                if(event.code === 'ArrowDown') {
                    tecla = 1;

                    dead1 = game.player2.checkExplosion(tecla, game.explosion1);
                    dead2 = game.player2.checkExplosion(tecla, game.explosion2);
                    dead3 = game.player2.checkExplosion(tecla, game.explosion3);
                    dead4 = game.player2.checkExplosion(tecla, game.explosion4);
                    dead5 = game.player2.checkExplosion(tecla, game.explosion5);
                    dead6 = game.player2.checkExplosion(tecla, game.explosion6);
                    dead7 = game.player2.checkExplosion(tecla, game.explosion7);
                    dead8 = game.player2.checkExplosion(tecla, game.explosion8);
                    dead9 = game.player2.checkExplosion(tecla, game.explosion9);
                    dead11 = game.player2.checkExplosion(tecla, game.explosion11);
                    dead12 = game.player2.checkExplosion(tecla, game.explosion12);
                    dead13 = game.player2.checkExplosion(tecla, game.explosion13);
                    dead14 = game.player2.checkExplosion(tecla, game.explosion14);
                    dead15 = game.player2.checkExplosion(tecla, game.explosion15);
                    dead16 = game.player2.checkExplosion(tecla, game.explosion16);
                    dead17 = game.player2.checkExplosion(tecla, game.explosion17);
                    dead18 = game.player2.checkExplosion(tecla, game.explosion18);
                    dead19 = game.player2.checkExplosion(tecla, game.explosion19);
                    
                    if(dead1 || dead2 || dead3 || dead4 || dead5 || dead6 || dead7 || dead8 || dead9){
                        buildSplashScreen();
                    }
                    if(dead11 || dead12 || dead13 || dead14 || dead15 || dead16 || dead17 || dead18 || dead19){
                        buildSplashScreen();
                    }

                    game.wall.forEach(l => {
                        l.forEach(e => {
                            collision = game.player2.checkCollisions(tecla, e);
                            if(collision) {
                                game.player2.speed = 0;
                            }
                        })
                    });
                    if(!collision) {
                        game.player2.changeDirection(tecla, game.player2.speed);
                    }
                }
    
    
                if(event.code === 'ArrowUp') {
                    tecla = 2;

                    dead1 = game.player2.checkExplosion(tecla, game.explosion1);
                    dead2 = game.player2.checkExplosion(tecla, game.explosion2);
                    dead3 = game.player2.checkExplosion(tecla, game.explosion3);
                    dead4 = game.player2.checkExplosion(tecla, game.explosion4);
                    dead5 = game.player2.checkExplosion(tecla, game.explosion5);
                    dead6 = game.player2.checkExplosion(tecla, game.explosion6);
                    dead7 = game.player2.checkExplosion(tecla, game.explosion7);
                    dead8 = game.player2.checkExplosion(tecla, game.explosion8);
                    dead9 = game.player2.checkExplosion(tecla, game.explosion9);
                    dead11 = game.player2.checkExplosion(tecla, game.explosion11);
                    dead12 = game.player2.checkExplosion(tecla, game.explosion12);
                    dead13 = game.player2.checkExplosion(tecla, game.explosion13);
                    dead14 = game.player2.checkExplosion(tecla, game.explosion14);
                    dead15 = game.player2.checkExplosion(tecla, game.explosion15);
                    dead16 = game.player2.checkExplosion(tecla, game.explosion16);
                    dead17 = game.player2.checkExplosion(tecla, game.explosion17);
                    dead18 = game.player2.checkExplosion(tecla, game.explosion18);
                    dead19 = game.player2.checkExplosion(tecla, game.explosion19);
                    
                    if(dead1 || dead2 || dead3 || dead4 || dead5 || dead6 || dead7 || dead8 || dead9){
                        buildSplashScreen();
                    }
                    if(dead11 || dead12 || dead13 || dead14 || dead15 || dead16 || dead17 || dead18 || dead19){
                        buildSplashScreen();
                    }

                    game.wall.forEach(l => {
                        l.forEach(e => {
                            collision = game.player2.checkCollisions(tecla, e);
                            if(collision) {
                                game.player2.speed = 0;
                            }
                        })
                    });
                    if(!collision) {
                        game.player2.changeDirection(tecla, game.player2.speed);
                    }
                }
                if(event.code === 'ArrowRight') {
                    tecla = 3;

                    dead1 = game.player2.checkExplosion(tecla, game.explosion1);
                    dead2 = game.player2.checkExplosion(tecla, game.explosion2);
                    dead3 = game.player2.checkExplosion(tecla, game.explosion3);
                    dead4 = game.player2.checkExplosion(tecla, game.explosion4);
                    dead5 = game.player2.checkExplosion(tecla, game.explosion5);
                    dead6 = game.player2.checkExplosion(tecla, game.explosion6);
                    dead7 = game.player2.checkExplosion(tecla, game.explosion7);
                    dead8 = game.player2.checkExplosion(tecla, game.explosion8);
                    dead9 = game.player2.checkExplosion(tecla, game.explosion9);
                    dead11 = game.player2.checkExplosion(tecla, game.explosion11);
                    dead12 = game.player2.checkExplosion(tecla, game.explosion12);
                    dead13 = game.player2.checkExplosion(tecla, game.explosion13);
                    dead14 = game.player2.checkExplosion(tecla, game.explosion14);
                    dead15 = game.player2.checkExplosion(tecla, game.explosion15);
                    dead16 = game.player2.checkExplosion(tecla, game.explosion16);
                    dead17 = game.player2.checkExplosion(tecla, game.explosion17);
                    dead18 = game.player2.checkExplosion(tecla, game.explosion18);
                    dead19 = game.player2.checkExplosion(tecla, game.explosion19);
                    
                    if(dead1 || dead2 || dead3 || dead4 || dead5 || dead6 || dead7 || dead8 || dead9){
                        buildSplashScreen();
                    }
                    if(dead11 || dead12 || dead13 || dead14 || dead15 || dead16 || dead17 || dead18 || dead19){
                        buildSplashScreen();
                    }

                    game.wall.forEach(l => {
                        l.forEach(e => {
                            collision = game.player2.checkCollisions(tecla, e);
                            if(collision) {
                                game.player2.speed = 0;
                            }
                        })
                    });
                    if(!collision) {
                        game.player2.changeDirection(tecla, game.player2.speed);
                    }
                }
                if(event.code === 'ArrowLeft') {
                    tecla = 4;

                    dead1 = game.player2.checkExplosion(tecla, game.explosion1);
                    dead2 = game.player2.checkExplosion(tecla, game.explosion2);
                    dead3 = game.player2.checkExplosion(tecla, game.explosion3);
                    dead4 = game.player2.checkExplosion(tecla, game.explosion4);
                    dead5 = game.player2.checkExplosion(tecla, game.explosion5);
                    dead6 = game.player2.checkExplosion(tecla, game.explosion6);
                    dead7 = game.player2.checkExplosion(tecla, game.explosion7);
                    dead8 = game.player2.checkExplosion(tecla, game.explosion8);
                    dead9 = game.player2.checkExplosion(tecla, game.explosion9);
                    dead11 = game.player2.checkExplosion(tecla, game.explosion11);
                    dead12 = game.player2.checkExplosion(tecla, game.explosion12);
                    dead13 = game.player2.checkExplosion(tecla, game.explosion13);
                    dead14 = game.player2.checkExplosion(tecla, game.explosion14);
                    dead15 = game.player2.checkExplosion(tecla, game.explosion15);
                    dead16 = game.player2.checkExplosion(tecla, game.explosion16);
                    dead17 = game.player2.checkExplosion(tecla, game.explosion17);
                    dead18 = game.player2.checkExplosion(tecla, game.explosion18);
                    dead19 = game.player2.checkExplosion(tecla, game.explosion19);
                    
                    if(dead1 || dead2 || dead3 || dead4 || dead5 || dead6 || dead7 || dead8 || dead9){
                        buildSplashScreen();
                    }
                    if(dead11 || dead12 || dead13 || dead14 || dead15 || dead16 || dead17 || dead18 || dead19){
                        buildSplashScreen();
                    }

                    game.wall.forEach(l => {
                        l.forEach(e => {
                            collision = game.player2.checkCollisions(tecla, e);
                            if(collision) {
                                game.player2.speed = 0;
                            }
                        })
                    });
                    if(!collision) {
                        game.player2.changeDirection(tecla, game.player2.speed);
                    }
                }
    
            if (event.code === 'Period') {
                if(game.bomb2 === undefined || game.bomb3 === undefined){
                    game.buildBomb2();
                }
    
                console.log('bomba2');
            }
            
        } 
    
        document.addEventListener('keyup', player2Actions);

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
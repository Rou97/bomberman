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
                <container>
                    <h1>Bomberman</h1>
                    <button>Start</button>
                </container>
            </section>
        `);
        const startButton = document.querySelector('button');
        startButton.addEventListener('click', buildGameScreen);
    };

    const buildGameScreen = () => {
        const gameScreen = buildDom(`
            <div class="caja">
            
                <section class="animation1">
                    <div class="eye1">
                        <div class="eye11"></div>
                    </div>
                    <div class="eye2">
                        <div class="eye22"></div>
                    </div>
                    <div class="mouth"></div>
                </section>

                <section class="game-screen">
                    <canvas></canvas>
                </section>  
                <section class="animation2">
                    
                    <div class="eye3">
                        <div class="eye11"></div>
                     </div>
                    <div class="eye4">
                        <div class="eye22"></div>
                    </div>
                    <div class="mouth2"></div>



                </section> 
            </div>
            <div class="caja2">
                <section class="player1">
                        <h1>Player 1</h1>
                        <p>
                        Move up: W
                        Move down: S
                        Move left: A
                        Move right: D
                        Drop bomb: Space
                        </p>
                    </section>
                    <section class="player2">
                        <h1>Player 2</h1>
                        <p>
                            Move up: Arrow up
                            Move down: Arrow down
                            Move left: Arrow left
                            Move right: Arrow right
                            Drop bomb: .
                        </p>
                </section>
            </div>
        `);

        /*
        <section class="player1">
                    <h1>Player 1</h1>
                    <p>
                    Move up: W
                    Move down: S
                    Move left: A
                    Move right: D
                    Drop bomb: Space
                    </p>
                </section>
                <section class="player2">
                    <h1>Player 2</h1>
                    <p>
                        Move up: Arrow up
                        Move down: Arrow down
                        Move left: Arrow left
                        Move right: Arrow right
                        Drop bomb: .
                    </p>
                </section>
        */

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
            let dead = false;
            

                if(event.code === 'KeyS') {
                    tecla = 1;
            
                    dead = game.checkDead(game.player, tecla);
                    
                    if(dead){
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

                    dead = game.checkDead(game.player, tecla);
                    
                    if(dead){
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

                    dead = game.checkDead(game.player, tecla);
                    
                    if(dead){
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

                    dead = game.checkDead(game.player, tecla);
                    
                    if(dead){
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
            let dead = false;
    
                if(event.code === 'ArrowDown') {
                    tecla = 1;

                    dead = game.checkDead(game.player2, tecla);
                    
                    if(dead){
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

                    dead = game.checkDead(game.player2, tecla);
                    
                    if(dead){
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

                    dead = game.checkDead(game.player2, tecla);
                    
                    if(dead){
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

                    dead = game.checkDead(game.player2, tecla);
                    
                    if(dead){
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
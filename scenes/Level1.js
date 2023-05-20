class Start1 extends Phaser.Scene {
    constructor() {
        super({ key: 'start1Scene'});
    }

    preload() {
    }

    create() {
        this.add.text(480, 200,
            `LEVEL 1`,
            {
                font: "60px"
            }
        ).setOrigin(0.5, 0.5);
        const text = this.add.text(480, 350,
            `Press left and right arrow keys to move, up arrow key to launch the ball, and number keys to change paddle color\n1: Blue\n2: Red\n\nClick to continue`,
            {
            font: "24px",
        }
        ).setOrigin(0.5, 0.5);
        text.setWordWrapWidth(700);

        this.input.once('pointerdown', () => {
            this.scene.start('level1Scene');
        });
    }
}

class Level1 extends Phaser.Scene {
    constructor() {
        super({ key: 'level1Scene'});
    }

    preload() {
        this.load.image('bluePaddle', 'assets/bluePaddle.png');
        this.load.image('blueBall', 'assets/blueBall.png');
        this.load.image('blueBrick', 'assets/blueBrick.png');
        this.load.image('redPaddle', 'assets/redPaddle.png');
        this.load.image('redBall', 'assets/redBall.png');
        this.load.image('redBrick', 'assets/redBrick.png');
    }

    create() {

        // based on example solution found online at https://stackabuse.com/introduction-to-phaser-3-building-breakout/
        paddle = this.physics.add.sprite(
            480,
            500,
            'bluePaddle',
        );

        ball = this.physics.add.sprite(
            480,
            470,
            'blueBall',
        );

        blueBricks = this.physics.add.group({
            key: 'blueBrick',
            repeat: 9,
            immovable: true,
            setXY: {
                x: 75,
                y: 40,
                stepX: 90
            }
        });

        redBricks = this.physics.add.group({
            key: 'redBrick',
            repeat: 9,
            immovable: true,
            setXY: {
                x: 75,
                y: 80,
                stepX: 90
            }
        });

        // for changing paddle color
        this.input.keyboard.on('keydown', (event) => {
            switch(event.key) {
                case '1':
                    paddle.setTexture('bluePaddle');
                    paddleColor = "blue";
                    break;
                case '2':
                    paddle.setTexture('redPaddle');
                    paddleColor = "red";
                    break;
                default:
                    break
            }
        });

        cursors = this.input.keyboard.createCursorKeys();
        paddleColor = "blue";
        ballColor = "blue";
        paddle.setImmovable(true);
        paddle.setCollideWorldBounds(true);
        ball.setCollideWorldBounds(true);
        ball.setBounce(1, 1);
        this.physics.world.checkCollision.down = false;

        // colliders
        this.physics.add.collider(ball, blueBricks, hitBlueBrick, null, this);
        this.physics.add.collider(ball, redBricks, hitRedBrick, null, this);
        this.physics.add.collider(ball, paddle, hitPaddle, null, this);
    }

    update() {
        if (ball.body.y > this.physics.world.bounds.height) {
            this.scene.start('start2Scene');
        } else {
            let isDown = this.input.activePointer;
            paddle.body.setVelocityX(0);
            if (!start) {
                ball.setX(paddle.x);
                if (cursors.up.isDown) {
                    start = true;
                    ball.setVelocityY(-300);
                }
            }

            // update ball color
            if (ballColor == "blue") {
                ball.setTexture('blueBall');
            } else {
                ball.setTexture('redBall');
            }
    
            // moving paddle
            if (cursors.left.isDown) {
                paddle.setVelocityX(-350);
            } else if (cursors.right.isDown) {
                paddle.setVelocityX(350);
            }
        }
        }
}

function hitBlueBrick(ball, brick) {
    if (ballColor == "blue") {
        brick.disableBody(true, true);
        score++;
    }
  
    if (ball.body.velocity.x == 0) {
      randNum = Math.random();
      if (randNum >= 0.5) {
        ball.body.setVelocityX(200);
      } else {
        ball.body.setVelocityX(-200);
      }
    }
  }

  function hitRedBrick(ball, brick) {
    if (ballColor == "red") {
        brick.disableBody(true, true);
        score++;
    }
  
    if (ball.body.velocity.x == 0) {
      randNum = Math.random();
      if (randNum >= 0.5) {
        ball.body.setVelocityX(200);
      } else {
        ball.body.setVelocityX(-200);
      }
    }
  }

  function hitPaddle(ball, paddle) {
    ballColor = paddleColor;

    // Increase the velocity of the ball after it bounces
    ball.setVelocityY(ball.body.velocity.y - 5);
  
    let newXVelocity = Math.abs(ball.body.velocity.x) + 5;
    // If the ball is to the left of the player, ensure the X Velocity is negative
    if (ball.x < paddle.x) {
        ball.setVelocityX(-newXVelocity);
    } else {
        ball.setVelocityX(newXVelocity);
    }
  }
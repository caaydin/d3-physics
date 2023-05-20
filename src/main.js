// global var
let cursors, paddleColor, ballColor, paddle, ball, blueBricks, redBricks, purpleBricks, greenBricks;
let start = false;
let score = 0; // number of blocks destroyed to be used in the total at the end

// functions
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

  function hitPurpleBrick(ball, brick) {
    if (ballColor == "purple") {
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

  function hitGreenBrick(ball, brick) {
    if (ballColor == "green") {
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

let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Start1, Level1, Start2, Level2, Start3, Level3, GameEnd ],
}

let game = new Phaser.Game(config);
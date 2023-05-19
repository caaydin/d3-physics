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
            `Move the mouse to change the color of the paddle\nLeft is blue and right is red\nPress A and D to move left and right\n\nClick to continue.`,
            {
            font: "24px",
        }
        ).setOrigin(0.5, 0.5);
        text.setWordWrapWidth(750);

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
        let paddle = this.physics.add.sprite(
            480,
            500,
            'bluePaddle',
        );
        let ball = this.physics.add.sprite(
            480,
            470,
            'blueBall',
        );

        blueBricks = this.physics.add.group({
            key: 'blueBrick',
            repeat: 9,
            setXY: {
                x: 75,
                y: 40,
                stepX: 90
            }
        })

        redBricks = this.physics.add.group({
            key: 'redBrick',
            repeat: 9,
            setXY: {
                x: 80,
                y: 90,
                stepX: 90
            }
        })

        cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        // paddle.setTexture('bluePaddle');
        // paddle.setTexture('redPaddle');
    }
}
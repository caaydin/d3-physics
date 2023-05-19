class Start2 extends Phaser.Scene {
    constructor() {
        super({ key: 'start2Scene'});
    }

    preload() {
    }

    create() {
        this.add.text(480, 200,
            `LEVEL 2`,
            {
                font: "60px"
            }
        ).setOrigin(0.5, 0.5);
        const text = this.add.text(480, 350,
            `Colors: Blue, red, purple`,
            {
            font: "24px",
        }
        ).setOrigin(0.5, 0.5);
        text.setWordWrapWidth(600);
    }
}

class Level2 extends Phaser.Scene {
    constructor() {
        super({ key: 'level2Scene'});
    }

    preload() {
    }

    create() {
    }

    update() {
    }
}
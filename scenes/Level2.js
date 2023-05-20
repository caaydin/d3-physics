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
            score + `/20 blocks destroyed on Level 1\nCurrent score: ` + Math.round((score/20 * 100)) + `%\n1: Blue\n2: Red\n3: Purple\nClick to continue`,
            {
            font: "24px",
        }
        ).setOrigin(0.5, 0.5);
        text.setWordWrapWidth(600);

        this.input.once('pointerdown', () => {
            this.scene.start('level2Scene');
        });
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
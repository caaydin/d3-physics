class Start3 extends Phaser.Scene {
    constructor() {
        super({ key: 'start3Scene'});
    }

    preload() {
    }

    create() {
        this.add.text(480, 200,
            `LEVEL 3`,
            {
                font: "60px"
            }
        ).setOrigin(0.5, 0.5);
        const text = this.add.text(480, 350,
            score + `/18 blocks destroyed on Level 2\nCurrent score: ` + Math.round((score/18 * 100)) + `%\n1: Blue\n2: Red\n3: Purple\n4: Green`,
            {
            font: "24px",
        }
        ).setOrigin(0.5, 0.5);
        text.setWordWrapWidth(600);
    }
}

class Level3 extends Phaser.Scene {
    constructor() {
        super({ key: 'level3Scene'});
    }

    preload() {
    }

    create() {
    }

    update() {
    }
}
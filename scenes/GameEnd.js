class GameEnd extends Phaser.Scene {
    constructor() {
        super({ key: 'endScene'});
    }

    preload() {
    }

    create() {
        const text = this.add.text(480, 280,
            score + `/54 blocks destroyed\nFinal score: `+ Math.round((score/54 * 100)) + `%`,
            {
            font: "50px",
            align: "center",
        }
        ).setOrigin(0.5, 0.5);
        text.setWordWrapWidth(750);
    }
}
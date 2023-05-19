// number of blocks destroyed to be used in the total at the end
let score = 0;

let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Start1, Level1, Start2, Level2, Start3, Level3, GameEnd ],
}

let game = new Phaser.Game(config);
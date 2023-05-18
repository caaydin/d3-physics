let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    backgroundColor: '#000000',
    scene: [ Level1, Level2, Level3, GameEnd ],
}

let game = new Phaser.Game(config);
import React, { Component } from 'react'
import Phaser from 'phaser'


export default class PhaserContainer extends Component {
    constructor(props) {
      super(props)
    
      this.game = null;
    }
    
    componentWillUnmount() {
        // We should destroy the Phaser Canvas
        if( this.game ) {
            this.game.destroy()
        }
    }

    componentDidMount() {
        var config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: 'phaser-container',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            scene: {
                preload: this.preload,
                create: this.create
            }
        };
        this.game = new Phaser.Game(config);
    }
    
    preload ()
    {
        this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    create ()
    {
        this.add.image(400, 300, 'sky');

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }

    render(){
        return (
            <div className="PhaserContainer" id="phaser-container">
            </div>
        );
    }
}

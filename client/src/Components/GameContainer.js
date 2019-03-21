import React, { Component } from 'react'

import PhaserContainer from './PhaserContainer'
import PlayerInfo from './PlayerInfo';
import Chat from './Chat'

export default class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: "dummy Info",
        }
    }

    render() {
        return (
            <div id='game-container' className='GameContainer'>
                <PlayerInfo />
                <PhaserContainer />
                <Chat />
            </div>
        );
    }
}
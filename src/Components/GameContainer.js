import React, { Component } from 'react'

import PhaserContainer from './PhaserContainer'
import PlayerInfo from './PlayerInfo';

export default class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: "dummy Info",
        }
    }

    render() {
        return(
            <div id='game-container' className='GameContainer'>
                <div id='info-tab' className='GameInfoTab'>
                    <PlayerInfo />
                </div>
                <PhaserContainer />
                <div id='chat-tab' className='ChatTab'>Coucou....</div>
            </div>
        );
    }
}
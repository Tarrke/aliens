import React, { Component } from 'react'

import PhaserContainer from './PhaserContainer'
import PlayerInfo from './PlayerInfo';

export default class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: "dummy Info",
            chat_data: {},
        }
    }

    componentDidMount() {
        this.callChatApi()
            .then(res => this.setState({ chat_data: res.data }))
            .catch(err => console.log(err));
    }

    callChatApi = async () => {
        const response = await fetch('/chat_data');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    render() {
        let output = this.state.chat_data.map((message, index) => {
            return (<li>{message.user}: {message.message}</li>);
        });

        return (
            <div id='game-container' className='GameContainer'>
                <div id='info-tab' className='GameInfoTab'>
                    <PlayerInfo />
                </div>
                <PhaserContainer />
                <div id='chat-tab' className='ChatTab'>
                    <ul>
                        {output}
                    </ul>
                </div>
            </div>
        );
    }
}
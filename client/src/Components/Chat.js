import React, { Component } from 'react'

export default class Chat extends Component {
    constructor(props) {
        super(props);

        this.intervalId = 0;

        this.state = {
            data: [],
            input_value: "",
        }

        this.handleChat = this.handleChat.bind(this);
        this.callChatApi = this.callChatApi.bind(this);
        this.handleChatInputChange = this.handleChatInputChange.bind(this);
    }

    componentDidMount() {
        console.log('Chat did mount');
        this.intervalId = setInterval(this.handleChat, 5000);
    }

    componentWillUnmount() {
        console.log('Chat will unmount');
        clearInterval(this.intervalId);
    }

    handleSubmit(event) {
        console.log("Chat text submit: ", event);
        // this.handleChat();
    }

    handleChatInputChange(event) {
        this.setState({ input_value: event.target.value });
    }

    handleChat() {
        this.callChatApi()
            .then(res => this.setState({ data: res.data }))
            .catch(err => console.log(err));
    }

    callChatApi = async () => {
        const response = await fetch('/chat_data');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    }

    render() {
        let output = this.state.data.slice(0).reverse().map((message, index) => {
            return (<li key={index}>{message.user}: {message.message}</li>);
        });
        return (
            <div id='chat-tab' className='ChatTab'>
                <div className='ChatSection'>
                    <ul>
                        {output}
                    </ul>
                </div>
                <div className='ChatForm'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' value={this.state.input_value} onChange={this.handleChatInputChange} />
                        <input type='submit' value='Send' />
                    </form>
                </div>
            </div>
        );
    }
}

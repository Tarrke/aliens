import React, { Component } from 'react'

export default class TabPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content,
        };
    }

    render() {
        return (
            <div className="TabPanel">
                {this.state.content}
            </div>
        );
    }
};
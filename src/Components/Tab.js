import React, { Component } from 'react'

export default class Tab extends Component {
    constructor(props) {
        super(props);
    }

    _handleClick() {
        const { setCurrentTab, index } = this.props;
        setCurrentTab(index);
    }

    render() {
        const { index, text } = this.props;
        return(
            <button key={index} onClick={this._handleClick.bind(this)}>{text}</button>
        );
    }
}

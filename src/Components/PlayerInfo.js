import React, { Component } from 'react'

export default class PalyerInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Tarrke',
            inGame: true,
        };
    }

    render() {
        let inGame = "";
        if (this.state.inGame) {
            inGame = "Oui";
        } else {
            inGame = "Non";
        }
        return(
            <div className="PlayerInfo">
                <p>Joueur: {this.state.name}</p>
                <p>En Jeu: {inGame}</p>
            </div>
        );
    }
};

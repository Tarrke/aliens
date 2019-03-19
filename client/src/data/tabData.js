// tabData.js
// Definition of our tabs

import React from 'react';

import PlayerInfo from '../Components/PlayerInfo'
import GameContainer from '../Components/GameContainer'

const tabData = [
    {
        name: 'Tab1',
        content: () => {return (<PlayerInfo />);},
    },
    {
        name: 'Tab2',
        content: () => {return (<GameContainer />);},
    },
    {
        name: 'Tab3',
        content: () => { return 'Tab 3 content';},
    },
    {
        name: 'Tab4',
        content: () => { return 'Tab 4 content';},
    },
];

export default tabData;
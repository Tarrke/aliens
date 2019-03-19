import React, { Component } from 'react';
import TabContainer from './Components/TabContainer'
import './App.css';

import tabData from './data/tabData'


export default class App extends Component {
  render() {
    return (
      <div className="Main">
        <h1>Welcome to Aliens, the video game</h1>
        <TabContainer defaultTab={1} data={tabData} />
      </div>
    );
  }
}

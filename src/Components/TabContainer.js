import React, { Component } from 'react';
import TabPanel from './TabPanel'
import Tab from './Tab'

export default class TabContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: this.props.defaultTab,
        };

        this._data = this.props.data;
    }

    _setCurrentTab(currentTab) {
        console.log("Going to tab " + currentTab);
        if (this.state.currentTab === currentTab) {
            return;
        }
        this.setState({ currentTab: currentTab });
    }

    _renderTabs() {
        return this._data.map((tab, index) => {
            return (
                <Tab
                    key={index}
                    index={index}
                    text={tab.name}
                    setCurrentTab={this._setCurrentTab.bind(this)}
                />
            );
        });
    }

    _renderTabPanel() {
        return this._data.map((tab, index) => {
            if (index === this.state.currentTab) {
                return (
                    <TabPanel key={index} content={tab.content()} />
                );
            } else {
                return (<div key={index}></div>);
            }
        });
    }

    render() {
        const Tabs = this._renderTabs();
        const TabPanel = this._renderTabPanel();
        return (
            <div className="TabContainer">
                <div className="Buttons">{Tabs}</div>
                <div className="Panel">{TabPanel}</div>
            </div>
        );
    }
};
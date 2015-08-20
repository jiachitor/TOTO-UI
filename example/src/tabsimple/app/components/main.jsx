/** In this file, we create a React component which incorporates components provided by material-ui */
import React from 'react';
import Tabs from '../../../../../src/tabsimple.jsx';
import Tab from '../../../../../src/tabsimpleItem.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    getActiveKey(){
        var _activeKey = this.refs.demoTabs.getActiveKey();
        console.log(_activeKey)
    }
    render() {

        let containerStyle = {
            textAlign: 'center',
            paddingTop: '200px'
        };

        let standardActions = [
            {text: 'Okay'}
        ];

        var tab1 = (
            <div className="demo-1">
                <Tabs
                    ref="demoTabs"
                    active={0}
                    getActiveIndex={this.getActiveKey.bind(this)}>
                    <Tab label="tab1" key="0">
                        <div>tab1</div>
                    </Tab>
                    <Tab label="tab2" key="1">
                        <div>tab2</div>
                    </Tab>
                    <Tab label="tab33" key="2">
                        <div>tab3</div>
                    </Tab>
                </Tabs>
            </div>
        );

        return (
            <div className="demos">
                {tab1}
            </div>
        );
    }
};

module.exports = Main;

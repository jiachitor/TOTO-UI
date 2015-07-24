/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let Tabs = require('../../../../../src/tabs.jsx');
let Tab = require('../../../../../src/tab.jsx');

let Main = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
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
                <Tabs>
                    <Tab label="tab1" key="0">
                        <div>tab1</div>
                    </Tab>
                    <Tab label="tab2" key="1">
                        <div>tab2</div>
                    </Tab>
                    <Tab label="tab3" key="2">
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
    },
});

module.exports = Main;

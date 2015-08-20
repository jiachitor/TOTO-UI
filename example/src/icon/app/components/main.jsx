import React from 'react';
import Icon from '../../../../../src/icon.jsx';
import Close from '../../../../../src/close.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        var icon1 = (
            <div className="demo-1">
                <p><Close /></p>
                <Icon icon="spinner" spin /> Loading
            </div>
        );

        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <p>{icon1}</p>
                </div>
            </div>
        );
    }
};

module.exports = Main;

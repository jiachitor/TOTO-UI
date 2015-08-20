/** In this file, we create a React component which incorporates components provided by material-ui */
import React from 'react';
import Button from '../../../../../src/button.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        var button1 = (
            <div className="demo-1">
              <Button>Default</Button>
            </div>
        );

        return (
            <div className="demos">
                {button1}
            </div>
        );
    }
};

module.exports = Main;

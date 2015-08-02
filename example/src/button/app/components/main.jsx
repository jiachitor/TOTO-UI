/** In this file, we create a React component which incorporates components provided by material-ui */
import Button from '../../../../../src/button.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    getActiveKey(){
        var _activeKey = this.refs.demoTabs.getActiveKey();
        console.log(_activeKey)
    }
    render() {

        var icon1 = (
            <div className="demo-1">
              <Button>Default</Button>
            </div>
        );

        return (
            <div className="demos">
                {icon1}
            </div>
        );
    }
};

module.exports = Main;

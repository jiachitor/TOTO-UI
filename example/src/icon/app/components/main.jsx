/** In this file, we create a React component which incorporates components provided by material-ui */
import Icon from '../../../../../src/icon.jsx';
console.log(React)
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
                <Icon icon="spinner" spin /> Loading
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

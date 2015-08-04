import Icon from '../../../../../src/icon.jsx';

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

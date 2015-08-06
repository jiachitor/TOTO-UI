'use strict';

import Tab from './tabsimpleItem';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.active || 0 ,
        };
    }
    getActiveKey(){
        return this.state.active;
    }
    handleTouch(tab, index) {
        let self = this;
        this.setState({
            active: index,
        },function(){
            self.props.getActiveIndex();
        });
    }
    render() {
        let tabs = [], className = 'tab-trigger ', active = this.state.active;
        let tabContents = React.Children.map(this.props.children, function (tab, index) {
            let classes, isActive = active === index;
            let onHandleTouch = this.handleTouch.bind(this, tab, index);

            classes = className + (isActive ? 'active' : '');

            tabs.push(<li className={classes} onClick={onHandleTouch} key={index}>
                <a href="#">{tab.props.label}</a>
            </li>);

            return <Tab
                key={index}
                active={isActive}
                _child={tab.props.children}/>;

        }, this);

        return (
            <div className="tabs">
                <div className="tabs-nav">
                    <ul>{tabs}</ul>
                </div>
                <div className="tabs-body">
                    {tabContents}
                </div>
            </div>
        );
    }
}

Tabs.propTypes = {
    initialCount: React.PropTypes.number,
};

Tabs.defaultProps = {
    initialCount: 0,
};

module.exports = Tabs;

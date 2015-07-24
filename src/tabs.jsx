let React = require('react'),
    Tab = require('./tab.jsx');

let Tabs = React.createClass({
    getInitialState: function () {
        return {
            active: this.props.active || 0,
        };
    },
    handleTouch: function (tab, index) {
        this.setState({active: index});
    },
    render: function () {
        let tabs = [], className = 'tab-trigger ', active = this.state.active;
        let tabContents = React.Children.map(this.props.children, function (tab, index) {
            let classes, isActive = active === index;
            let onHandleTouch = this.handleTouch.bind(this, tab, index);

            classes = className + (isActive ? 'active' : '');

            tabs.push(<li className={classes} onClick={onHandleTouch} key={index}>
                <a href="javascript:void(0)">{tab.props.label}</a>
            </li>);

            return <Tab
                key={index}
                active={isActive}
                _child={tab.props.children} />;

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
    },
});

module.exports = Tabs;

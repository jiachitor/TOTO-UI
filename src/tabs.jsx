var React = require('react'),
    Tab = require('./tab.jsx');

var Tabs = React.createClass({
    getInitialState: function () {
        return {
            active: this.props.active || 0
        }
    },
    handleTouch: function (tab, index) {
        this.setState({active: index});
    },
    render: function () {
        var tabs = [], className = 'tab-trigger ', active = this.state.active;
        var tabContents = React.Children.map(this.props.children, function (tab, index) {
            var classes, isActive = active === index;
            var onHandleTouch = this.handleTouch.bind(this, tab, index);

            classes = className + (isActive ? 'tab-trigger-active' : '');

            tabs.push(<li className={classes} onClick={onHandleTouch} key={index}>
                {tab.props.label}
            </li>);

            return <Tab
                key={index}
                active={isActive}
                _child={tab.props.children} />;

        }, this);

        return (
            <div className={this.props.className}>
                <div className="tab-head">
                    <ul>{tabs}</ul>
                </div>
                <div className="tab-bd">
                    {tabContents}
                </div>
            </div>
        );
    }
});

module.exports = Tabs;
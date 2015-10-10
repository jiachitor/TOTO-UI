'use strict';

import React from 'react';

class Tab extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.triggered = false;
        //如果当前tab是默认激活的
        if(this.props.active){
            console.log("actice");
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.active && !this.triggered){
            console.log(nextProps);
        }
    }
    render(){
        return (
            <div className="tabContents"
                 style={{display:(this.props.active ? 'block':'none')}}>
                {React.Children.map(this.props._child,function(child){
                    let newChildren = React.cloneElement(child, {
                        _child: child.props.children,
                        active : this.props.active,
                    });
                    return newChildren;
                }, this)}
            </div>
        );
    }
}

Tab.propTypes = {
    initialCount: React.PropTypes.number,
};

Tab.defaultProps = {
    initialCount: 0,
};

module.exports = Tab;

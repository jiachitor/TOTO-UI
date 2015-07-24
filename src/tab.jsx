var React = require('react');

var Tab = React.createClass({
    componentDidMount:function(){
        var _this = this;
        this.triggered = false;
        //如果当前tab是默认激活的
        if(this.props.active){
            console.log(1)
        }

    },
    componentWillReceiveProps:function(nextProps){

        if(nextProps.active && !this.triggered){
            console.log(nextProps)
            console.log(2)
        }
    },
    render:function(){
        return (
            <div className="tabContents"
                 style={{display:(this.props.active ? 'block':'none')}}>
                {React.Children.map(this.props._child,function(child,index){
                    var newChildren = React.cloneElement(child, {
                        _child: child.props.children,
                        active : this.props.active
                    });
                    return newChildren;
                }, this)}
            </div>
        );
    }
});

module.exports = Tab;
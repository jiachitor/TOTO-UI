'use strict';
import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';

class Icon extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
          this[v] =  ClassNameMixin[v].bind(this);
        }
    }
    render() {
        let classes = this.getClassSet();
        let props = this.props;
        let Component = props.href ? 'a' : props.componentTag;
        let prefixClass = this.prefixClass;
        let setClassNamespace = this.setClassNamespace;

        // del am-icon
        classes[setClassNamespace(props.classPrefix)] = false;

        // am-icon-[iconName]
        classes[prefixClass(props.icon)] = true;

        // am-icon-btn
        classes[prefixClass('btn')] = props.button;

        // button style
        props.button && props.amStyle &&
        (classes[setClassNamespace(props.amStyle)] = true);

        // am-icon-fw
        classes[prefixClass('fw')] = props.fw;

        // am-icon-spin
        classes[prefixClass('spin')] = props.spin;

        return (
            React.createElement(Component, React.__spread({},
                    props,
                    {className: classNames(classes, this.props.className)}),
                this.props.children
            )
        );
    }
};

Icon.displayName = "Icon";

Icon.propTypes = {
    amStyle: React.PropTypes.string,
    fw: React.PropTypes.bool,
    spin: React.PropTypes.bool,
    button: React.PropTypes.bool,
    size: React.PropTypes.string,
    href: React.PropTypes.string,
    componentTag: React.PropTypes.node.isRequired,
    icon: React.PropTypes.string.isRequired
};

Icon.defaultProps = {
    classPrefix: 'icon',
    componentTag: 'i'
};

module.exports = Icon;

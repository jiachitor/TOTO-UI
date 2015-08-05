'use strict';

import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import Icon from './icon.jsx';

class Close extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
    }
    render() {
        let Component = this.props.componentTag || 'button';
        let classSet = this.getClassSet();
        let props = this.props;

        // transfer type
        if (Component !== 'button') {
            props.type = undefined;
        }

        // className am-close-alt am-close-spin
        classSet[this.prefixClass('alt')] = this.props.alt;
        classSet[this.prefixClass('spin')] = this.props.spin;

        return (
            <Component
                {...props}
                className={classNames(classSet, this.props.className)}
                role="close">
                {this.props.icon ? <Icon icon="times" /> : '\u00D7'}
            </Component>
        );
    }
}

Close.displayName = "Close";

Close.propTypes = {
    classPrefix: React.PropTypes.string.isRequired,
    componentTag: React.PropTypes.node,
    spin: React.PropTypes.bool,
    alt: React.PropTypes.bool,
    icon: React.PropTypes.bool,
};

Close.defaultProps = {
    classPrefix: 'close',
    type: 'button',
};

module.exports = Close;

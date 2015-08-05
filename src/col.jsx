'use strict';

import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';

class Col extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
    }

    render() {
        let Component = this.props.componentTag;
        let classSet = {};
        let props = this.props;
        let prefixClass = this.prefixClass;

        ['sm', 'md', 'lg'].forEach(function(size) {
            let prop = size;

            if (props[size]) {
                classSet[prefixClass(size + '-' + props[prop])] = true;
            }

            prop = size + 'Offset';
            if (props[prop] >= 0) {
                classSet[prefixClass(size + '-offset-') + props[prop]] = true;
            }

            prop = size + 'Push';
            if (props[prop] >= 0) {
                classSet[prefixClass(size + '-push-') + props[prop]] = true;
            }

            prop = size + 'Pull';
            if (props[prop] >= 0) {
                classSet[prefixClass(size + '-pull-') + props[prop]] = true;
            }

            // `xxResetOrder` prop
            // - smResetOrder
            // - mdResetOrder
            // - lgResetOrder
            if (props[size + 'ResetOrder']) {
                classSet[prefixClass(size + '-reset-order')] = true;
            }

            // `xxCentered` prop
            // - smCentered
            // - mdCentered
            // - lgCentered
            if (props[size + 'Centered']) {
                classSet[prefixClass(size + '-centered')] = true;
            }

            // `xxUnCentered` prop
            // - smUnCentered
            // - mdUnCentered
            // - lgUnCentered
            if (props[size + 'UnCentered']) {
                classSet[prefixClass(size + '-uncentered')] = true;
            }
        });

        // `end` prop - end column
        props.end && (classSet[prefixClass('end')] = true);

        return (
            <Component
                {...this.props}
                className={classNames(this.props.className, classSet)}>
                {this.props.children}
            </Component>
        );
    }
}

Col.displayName = "Col";

Col.propTypes = {
    sm: React.PropTypes.number,
    md: React.PropTypes.number,
    lg: React.PropTypes.number,
    smOffset: React.PropTypes.number,
    mdOffset: React.PropTypes.number,
    lgOffset: React.PropTypes.number,
    smPush: React.PropTypes.number,
    mdPush: React.PropTypes.number,
    lgPush: React.PropTypes.number,
    smPull: React.PropTypes.number,
    mdPull: React.PropTypes.number,
    lgPull: React.PropTypes.number,
    classPrefix: React.PropTypes.string.isRequired,
    componentTag: React.PropTypes.node.isRequired,
    end: React.PropTypes.bool,
};

Col.defaultProps = {
    classPrefix: 'u',
    componentTag: 'div',
};

module.exports = Col;

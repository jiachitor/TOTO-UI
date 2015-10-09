'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import omit from 'object.omit';

class Button extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
    }

    renderAnchor(classSet) {
        let Component = this.props.componentTag || 'a';
        let href = this.props.href || '#';
        let props = omit(this.props, 'type');

        return (
            <Component
                {...props}
                href={href}
                className={classNames(this.props.className, classSet)}
                role="button">
                {this.props.children}
            </Component>
        );
    }

    renderButton(classSet) {
        let Component = this.props.componentTag || 'button';

        return (
            <Component
                {...this.props}
                className={classNames(this.props.className, classSet)}>
                {this.props.children}
            </Component>
        );
    }

    render() {
        let classSet = this.getClassSet();
        let renderType = this.props.href || this.props.target ?
            'renderAnchor' : 'renderButton';

        // block button
        this.props.block && (classSet[this.prefixClass('block')] = true);

        return this[renderType](classSet);
    }
}

Button.displayName = "Button";

Button.propTypes = {
    classPrefix: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool,
    block: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    radius: React.PropTypes.bool,
    round: React.PropTypes.bool,
    componentTag: React.PropTypes.node,
    href: React.PropTypes.string,
    target: React.PropTypes.string,
};

Button.defaultProps = {
    classPrefix: 'btn',
    type: 'button',
    amStyle: 'default',
};

module.exports = Button;

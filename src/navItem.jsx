'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

class NavItem extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.renderAnchor = this.renderAnchor.bind(this);
    }

    renderAnchor(classes) {
        let Component = this.props.componentTag;

        let linkProps = {
            href: this.props.href,
            title: this.props.tilte,
            target: this.props.target,
        };

        return (
            <Component
                {...this.props}
                className={classNames(classes, this.props.className)}>
                <a {...linkProps}>
                    {this.props.children}
                </a>
            </Component>
        );
    }

    render() {
        let classes = this.getClassSet();
        let props = this.props;
        let Component = props.componentTag;

        // del am-nav
        classes[this.setClassNamespace(props.classPrefix)] = false;

        // set classes
        classes[this.prefixClass('header')] = props.header;
        classes[this.prefixClass('divider')] = props.divider;

        if (props.href) {
            return this.renderAnchor(classes);
        }

        return (
            <Component
                {...props}
                className={classNames(classes, props.className)}>
                {this.props.children}
            </Component>
        );
    }
}

NavItem.displayName = "NavItem";

NavItem.propTypes = {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    header: React.PropTypes.bool,
    divider: React.PropTypes.bool,
    href: React.PropTypes.any,
    componentTag: React.PropTypes.node.isRequired,
};

NavItem.defaultProps = {
    classPrefix: 'nav',
    componentTag: 'li',
};

module.exports = NavItem;

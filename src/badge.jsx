'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

class Badge extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.renderAnchor = this.renderAnchor.bind(this);
    }

    renderAnchor (classSet) {
        let Component = this.props.componentTag || 'a';
        let href = this.props.href || '#';

        return (
            <Component
                {...this.props}
                href={href}
                className={classNames(classSet, this.props.className)}
                role="badge">
                {this.props.children}
            </Component>
        );
    }

    render() {
        let classSet = this.getClassSet();
        let Component = this.props.componentTag;
        let renderAnchor = this.props.href;

        if (renderAnchor) {
            return this.renderAnchor(classSet);
        }

        return (
            <Component
                {...this.props}
                className={classNames(classSet, this.props.className)}>
                {this.props.children}
            </Component>
        );
    }
}

Badge.displayName = "Badge";

Badge.propTypes = {
    componentTag: React.PropTypes.node,
    href: React.PropTypes.string,
    round: React.PropTypes.bool,
    radius: React.PropTypes.bool,
};

Badge.defaultProps = {
    classPrefix: 'badge',
    componentTag: 'span',
};

module.exports = Badge;

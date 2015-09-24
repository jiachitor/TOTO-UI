'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';

class Container extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
    }

    render() {
        let Component = this.props.componentTag;
        let classSet = this.getClassSet();

        return (
            <Component
                {...this.props}
                className={classNames(this.props.className, classSet)}>
                {this.props.children}
            </Component>
        );
    }
}

Container.displayName = "Container";

Container.propTypes = {
    classPrefix: React.PropTypes.string.isRequired,
    componentTag: React.PropTypes.node.isRequired,
};

Container.defaultProps = {
    classPrefix: 'container',
    componentTag: 'div',
};

module.exports = Container;

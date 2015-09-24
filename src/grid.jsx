'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
    }

    render() {
        let Component = this.props.componentTag;
        let classSet = this.getClassSet();
        let props = this.props;

        // .am-g-fixed
        classSet[this.prefixClass('fixed')] = props.fixed;

        // .am-g-collapse
        classSet[this.prefixClass('collapse')] = props.collapse;

        return (
            <Component
                {...this.props}
                className={classNames(this.props.className, classSet)}>
                {this.props.children}
            </Component>
        );
    }
}

Grid.displayName = "Grid";

Grid.propTypes = {
    classPrefix: React.PropTypes.string.isRequired,
    componentTag: React.PropTypes.node.isRequired,
    collapse: React.PropTypes.bool,
    fixed: React.PropTypes.bool,
};

Grid.defaultProps = {
    classPrefix: 'g',
    componentTag: 'div',
};

module.exports = Grid;

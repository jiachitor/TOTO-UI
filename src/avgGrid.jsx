'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';

class AvgGrid extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
    }
    render() {
        let Component = this.props.componentTag;
        let classSet = {};
        let prefixClass = this.prefixClass;
        let props = this.props;

        ['sm', 'md', 'lg'].forEach(function(size) {
            if (props[size]) {
                classSet[prefixClass(size + '-' + props[size])] = true;
            }
        });

        return (
            <Component
                {...this.props}
                className={classNames(this.props.className, classSet)}>
                {this.props.children}
            </Component>
        );
    }
}

AvgGrid.displayName = "AvgGrid";

AvgGrid.propTypes = {
    classPrefix: React.PropTypes.string.isRequired,
    componentTag: React.PropTypes.node,
    sm: React.PropTypes.number,
    md: React.PropTypes.number,
    lg: React.PropTypes.number,
};

AvgGrid.defaultProps = {
    classPrefix: 'avg',
    componentTag: 'ul',
};

module.exports = AvgGrid;

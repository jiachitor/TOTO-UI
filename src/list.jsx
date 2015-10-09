'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

class List extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
    }

    render() {
        let classes = this.getClassSet();
        let Component = this.props.componentTag;
        let props = this.props;
        let prefixClass = this.prefixClass;

        // am-list-border
        classes[prefixClass('border')] = props.border;

        // am-list-striped
        classes[prefixClass('striped')] = props.striped;

        // am-list-static
        classes[prefixClass('static')] = props.static;

        return (
            <Component
                {...props}
                className={classNames(classes, props.className)}>
                {props.children}
            </Component>
        );
    }
}

List.displayName = "List";

List.propTypes = {
    border: React.PropTypes.bool,
    striped: React.PropTypes.bool,
    static: React.PropTypes.bool,
    componentTag: React.PropTypes.node.isRequired,
};

List.defaultProps = {
    classPrefix: 'list',
    componentTag: 'ul',
};

module.exports = List;

'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

class ButtonGroup extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
          this[v] = ClassNameMixin[v].bind(this);
        }
    }
    render() {
        let classSet = this.getClassSet();

        classSet[this.prefixClass('stacked')] = this.props.stacked;
        classSet[this.prefixClass('justify')] = this.props.justify;

        return (
            <div
                {...this.props}
                className={classNames(this.props.className, classSet)}>
                {this.props.children}
            </div>
        );
    }
}

ButtonGroup.displayName = "ButtonGroup";

ButtonGroup.propTypes = {
    classPrefix: React.PropTypes.string.isRequired,
    stacked: React.PropTypes.bool,
    justify: React.PropTypes.bool,
};

ButtonGroup.defaultProps = {
    classPrefix: 'btn-group',
};

module.exports = ButtonGroup;

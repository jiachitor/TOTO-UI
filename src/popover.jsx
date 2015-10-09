'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

class Popover extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
    }
    render() {
        let classSet = this.getClassSet();
        let style = {
            left: this.props.positionLeft,
            top: this.props.positionTop,
            display: 'block',
        };

        classSet[this.setClassNamespace('active')] = true;
        classSet[this.prefixClass(this.props.placement)] = true;

        return (
            <div
                {...this.props}
                style={style}
                className={classNames(classSet, this.props.className)}>
                <div className={this.prefixClass('inner')}>
                    {this.props.children}
                </div>
                <div className={this.prefixClass('caret')}></div>
            </div>
        );
    }
}

Popover.displayName = "Popover";

Popover.propTypes = {
    classPrefix: React.PropTypes.string.isRequired,
    placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    positionLeft: React.PropTypes.number,
    positionTop: React.PropTypes.number,
    amSize: React.PropTypes.oneOf(['sm', 'lg']),
    amStyle: React.PropTypes.string,
};

Popover.defaultProps = {
    classPrefix: 'popover',
};

module.exports = Popover;

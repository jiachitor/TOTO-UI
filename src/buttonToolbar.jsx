'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

class ButtonToolbar extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
          this[v] = ClassNameMixin[v].bind(this);
        }
    }
    render() {
        let classSet = this.getClassSet();
        return (
            <div
                {...this.props}
                className={classNames(this.props.className, classSet)}>
                {this.props.children}
            </div>
        );
    }
}

ButtonToolbar.displayName = "ButtonToolbar";

ButtonToolbar.propTypes = {
    classPrefix: React.PropTypes.string.isRequired,
};

ButtonToolbar.defaultProps = {
    classPrefix: 'btn-toolbar',
};

module.exports = ButtonToolbar;

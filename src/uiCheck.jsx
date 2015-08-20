'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import Input from './input.jsx';

class UICheck extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
          this[v] = ClassNameMixin[v].bind(this);
        }
    }
    render() {
        let classSet = {};

        classSet[this.setClassNamespace(this.props.type)] = !this.props.inline;
        classSet[this.setClassNamespace(this.props.type + '-inline')] =
            this.props.inline;

        if (this.props.amStyle) {
            classSet[this.setClassNamespace(this.props.amStyle)] = true;
        }

        return (
            <label className={classNames(this.props.className, classSet)}>
                <Input
                    {...this.props}
                    ref="field"
                    className={this.setClassNamespace('ucheck-checkbox')} standalone />

        <span className={this.setClassNamespace('ucheck-icons')}>
          <i className="ui-icon-unchecked"></i>
          <i className="ui-icon-checked"></i>
        </span>

                {this.props.label}
            </label>
        );
    }
}

UICheck.displayName = "UICheck";

UICheck.propTypes = {
    type: React.PropTypes.oneOf(['radio', 'checkbox']),
    disabled: React.PropTypes.bool,
    amStyle: React.PropTypes.oneOf(['secondary', 'success', 'warning',
        'danger']),
    inline: React.PropTypes.bool,
    hasFeedback: React.PropTypes.bool,
};

UICheck.defaultProps = {
    type: 'checkbox',
};

module.exports = UICheck;

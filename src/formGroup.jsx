'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

class FormGroup extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
    }

    render() {
        let classSet = {};

        classSet[this.setClassNamespace('form-group')] = true;
        this.props.validation && (classSet[this.setClassNamespace('form-' +
            this.props.validation)] = true);
        classSet[this.setClassNamespace('form-feedback')] = this.props.hasFeedback;
        classSet[this.setClassNamespace('form-icon')] = this.props.hasFeedback;

        if (this.props.amSize) {
            classSet[this.setClassNamespace('form-group-' +
                this.props.amSize)] = true;
        }

        return (
            <div className={classNames(classSet, this.props.className)}>
                {this.props.children}
            </div>
        );
    }
}

FormGroup.displayName = "FormGroup";

FormGroup.propTypes = {
    validation: React.PropTypes.string,
    amSize: React.PropTypes.oneOf(['sm', 'lg']),
    hasFeedback: React.PropTypes.bool,
};

FormGroup.defaultProps = {
    classPrefix: 'formGroup',
};

module.exports = FormGroup;

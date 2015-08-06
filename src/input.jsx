'use strict';

/**
 * Inputs Components
 * @desc includes input, input-group
 */

import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import constants from './minxins/constants.js';
import FormGroup from './formGroup';
import Button from './button';
import Icon from './icon';


class Input extends React.Component {

    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }

        this.getFieldDOMNode = this.getFieldDOMNode.bind(this);
        this.getValue = this.getValue.bind(this);

        this.isCheckboxOrRadio = this.isCheckboxOrRadio.bind(this);
        this.isFile = this.isFile.bind(this);
        this.renderInput = this.renderInput.bind(this);
        this.renderWrapper = this.renderWrapper.bind(this);
        this.renderCheckboxAndRadioWrapper = this.renderCheckboxAndRadioWrapper.bind(this);
        this.renderLabel = this.renderLabel.bind(this);
        this.renderInputGroup = this.renderInputGroup.bind(this);
        this.renderHelp = this.renderHelp.bind(this);
        this.renderIcon = this.renderIcon.bind(this);
    }

    getFieldDOMNode() {
        return React.findDOMNode(this.refs.field);
    }

    getValue() {
        if (this.props.type === 'select' && this.props.multiple) {
            return this.getSelectedOptions();
        } else {
            return this.getFieldDOMNode().value;
        }
    }

    getChecked() {
        return this.getFieldDOMNode().checked;
    }

    getSelectedOptions() {
        let values = [];
        let options = this.getFieldDOMNode().getElementsByTagName('option');

        options.forEach(function (option) {
            if (option.selected) {
                let value = option.getAttribute('value') || option.innerHtml;

                values.push(value);
            }
        });

        return values;
    }

    isCheckboxOrRadio() {
        return this.props.type === 'radio' || this.props.type === 'checkbox';
    }

    isFile() {
        return this.props.type === 'file';
    }

    renderInput() {
        let input = null;
        let fieldClassName = this.isCheckboxOrRadio() || this.isFile() ? '' :
            this.setClassNamespace('form-field');
        let classSet = {};

        classSet[constants.CLASSES.round] = this.props.round;
        classSet[constants.CLASSES.radius] = this.props.radius;

        if (this.props.amSize && !this.props.standalone) {
            classSet[this.setClassNamespace('input-' + this.props.amSize)] = true;
        }

        let classes = classNames(this.props.className, fieldClassName, classSet);

        switch (this.props.type) {
            case 'select':
                input = (
                    <select
                        {...this.props}
                        className={classes}
                        ref="field" key="field">
                        {this.props.children}
                    </select>
                );
                break;
            case 'textarea':
                input = (
                    <textarea
                        {...this.props}
                        className={classes}
                        ref="field"
                        key="field"/>
                );
                break;
            case 'submit':
            case 'reset':
                input = (
                    <Button
                        {...this.props}
                        componentTag="input"
                        ref="field"
                        key="field"/>
                );
                break;
            default:
                input = (
                    <input
                        {...this.props}
                        className={classes}
                        ref="field"
                        key="field"/>
                );
        }

        return input;
    }

    // Input wrapper if wrapperClassName set
    renderWrapper(children) {
        return this.props.wrapperClassName ? (
            <div
                className={this.props.wrapperClassName}
                key="wrapper">
                {children}
            </div>
        ) : children;
    }

    // Wrap block checkbox/radio
    renderCheckboxAndRadioWrapper(children) {
        // Don't wrap inline checkbox/radio
        return this.props.inline ? children :
            (
                <div
                    className={this.setClassNamespace(this.props.type)}
                    key="checkboxAndRadioWrapper">
                    {children}
                </div>
            );
    }

    renderLabel(children) {
        // label doesn't work with icon
        /*if (this.props.icon) {
         return null;
         }*/

        let classSet = {};

        if (this.isCheckboxOrRadio()) {
            // inline checkbox and radio
            this.props.inline &&
            (classSet[this.setClassNamespace(this.props.type + '-inline')] = true);
        } else {
            // normal form label
            classSet[this.setClassNamespace('form-label')] = true;
        }

        return this.props.label ? (
            <label
                htmlFor={this.props.id}
                className={classNames(this.props.labelClassName, classSet)}
                key="label">
                {children}
                {this.props.label}
            </label>
        ) : children;
    }

    renderInputGroup(children) {
        let groupPrefix = this.setClassNamespace('input-group');
        let addonClassName = groupPrefix + '-label';
        let btnClassName = groupPrefix + '-btn';
        let addonBefore = this.props.addonBefore ? (
            <span className={addonClassName} key="addonBefore">
        {this.props.addonBefore}
      </span>
        ) : null;
        let addonAfter = this.props.addonAfter ? (
            <span className={addonClassName} key="addonAfter">
        {this.props.addonAfter}
      </span>
        ) : null;
        let btnBefore = this.props.btnBefore ? (
            <span className={btnClassName} key="btnBefore">
        {this.props.btnBefore}
      </span>
        ) : null;
        let btnAfter = this.props.btnAfter ? (
            <span className={btnClassName} key="btnAfter">
        {this.props.btnAfter}
      </span>
        ) : null;
        let classSet = {};

        if (this.props.amSize) {
            classSet[groupPrefix + '-' + this.props.amSize] = true;
        }

        if (this.props.amStyle) {
            classSet[groupPrefix + '-' + this.props.amStyle] = true;
        }

        return addonBefore || addonAfter || btnBefore || btnAfter ? (
            <div
                className={classNames(groupPrefix, classSet)}
                key="inputGroup">
                {addonBefore}
                {btnBefore}
                {children}
                {addonAfter}
                {btnAfter}
            </div>
        ) : children;
    }

    // form help
    renderHelp() {
        return this.props.help ? (
            <p
                className={classNames(this.setClassNamespace('form-help'),
        this.props.helpClassName)}
                key="help">
                {this.props.help}
            </p>
        ) : '';
    }

    renderIcon() {
        // TODO: replace with Icon component
        let props = this.props;
        let feedbackIcon = {
            success: 'check',
            warning: 'warning',
            error: 'times',
        };
        let icon = props.icon || (props.hasFeedback && props.validation &&
            feedbackIcon[props.validation]);

        return icon ? (<Icon icon={icon} key="icon"/>) : null;
    }

    render() {
        // standalone mode
        if (this.props.standalone) {
            return this.renderInput();
        }

        // render checkbox and radio, without FormGroup wrapper
        if (this.isCheckboxOrRadio()) {
            return this.renderWrapper(
                this.renderCheckboxAndRadioWrapper(
                    this.renderLabel(
                        this.renderInput()
                    )
                )
            );
        }

        let groupClassName = classNames(
            this.props.type === 'select' ?
                this.setClassNamespace('form-select') : null,
            this.props.icon && this.setClassNamespace('form-icon'),
            this.props.groupClassName,
        );

        return (
            <FormGroup
                className={groupClassName}
                validation={this.props.validation}
                amSize={this.props.amSize}
                hasFeedback={this.props.hasFeedback}>
                {[
                    this.renderLabel(),
                    this.renderWrapper(
                        this.renderInputGroup(
                            this.renderInput()
                        )
                    ),
                    this.renderIcon(),
                    this.renderHelp(),
                ]}
            </FormGroup>
        );
    }
}

Input.displayName = "Input";

Input.propTypes = {
    type: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    radius: React.PropTypes.bool,
    round: React.PropTypes.bool,
    amSize: React.PropTypes.oneOf(['sm', 'lg']),
    amStyle: React.PropTypes.string,
    validation: React.PropTypes.oneOf(['success', 'warning', 'error']),
    label: React.PropTypes.node,
    help: React.PropTypes.node,
    addonBefore: React.PropTypes.node,
    addonAfter: React.PropTypes.node,
    btnBefore: React.PropTypes.node,
    btnAfter: React.PropTypes.node,
    id: React.PropTypes.string,
    groupClassName: React.PropTypes.string,
    wrapperClassName: React.PropTypes.string,
    labelClassName: React.PropTypes.string,
    helpClassName: React.PropTypes.string,
    icon: React.PropTypes.string,
    standalone: React.PropTypes.bool,
    inline: React.PropTypes.bool,
    hasFeedback: React.PropTypes.bool,
};

Input.defaultProps = {
    type: 'text',
};

module.exports = Input;

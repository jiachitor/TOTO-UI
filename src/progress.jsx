'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

class Progress extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.renderProgressBar = this.renderProgressBar.bind(this);
        this.renderChildBar = this.renderChildBar.bind(this);
    }

    renderProgressBar() {
        let styleSheet = {
            width: this.props.now + '%'
        };
        let classes = {};
        let prefix = this.prefixClass('bar');
        let amStyle = this.props.amStyle;

        // set am-progress-bar
        classes[prefix] = true;

        if (amStyle) {
            classes[prefix + '-' + amStyle] = true;
        }

        return (
            <div
                className={classNames(classes)}
                style={styleSheet}
                role="progressbar">
                {this.props.label}
            </div>
        );
    }

    renderChildBar(child, index) {
        return React.cloneElement(child, {
            isChild: true,
            key: child.key ? child.key : index
        });
    }

    render() {
        let classes = this.getClassSet();

        // set class
        classes[this.prefixClass('striped')] = this.props.striped;

        if (this.props.active) {
            classes[this.prefixClass('striped')] = true;
        }

        if (!this.props.children) {
            if (!this.props.isChild) {
                return (
                    <div
                        {...this.props}
                        className={classNames(classes, this.props.className)}
                        >
                        {this.renderProgressBar()}
                    </div>
                );
            } else {
                return (
                    this.renderProgressBar()
                );
            }
        } else {
            return (
                <div
                    {...this.props}
                    className={classNames(classes, this.props.className)}
                    >
                    {React.Children.map(this.props.children, this.renderChildBar)}
                </div>
            );
        }
    }
}

Progress.displayName = "Progress";

Progress.propTypes = {
    now: React.PropTypes.number,
    label: React.PropTypes.string,
    active: React.PropTypes.bool,
    striped: React.PropTypes.bool,
    amSize: React.PropTypes.string,
    amStyle: React.PropTypes.string,
};

Progress.defaultProps = {
    classPrefix: 'progress',
};

module.exports = Progress;

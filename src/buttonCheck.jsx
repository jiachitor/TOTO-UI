'use strict';

import React from 'react';
import classNames from 'classnames';
import CSSCore from './utils/CSSCore';
import ClassNameMixin from './minxins/ClassNameMixin';
import ButtonGroup from './buttonGroup.jsx';
import constants from './constants.jsx';

class ButtonCheck extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
    }

    handleClick(e) {
        var changed = true;
        var target = e.target;
        var activeClassName = constants.CLASSES.active;

        if (target && target.nodeName === 'INPUT') {
            var parent = target.parentNode;

            if (target.type === 'radio') {
                if (target.checked && CSSCore.hasClass(parent, activeClassName)) {
                    changed = false;
                } else {
                    var siblings = parent.parentNode.children;

                    // remove siblings activeClassName
                    for (var i = 0; i < siblings.length; i++) {
                        (siblings[i] !== parent) &&
                        CSSCore.removeClass(siblings[i], activeClassName);
                    }
                }
            }

            if (changed) {
                CSSCore.toggleClass(parent, activeClassName);
            }
        }

        this.props.clickHandler.call(this);
    }

    render() {
        return (
            <ButtonGroup
                {...this.props}
                onClick={this.handleClick.bind(this)}
                className={this.setClassNamespace('btn-group-check')}>
                {this.props.children}
            </ButtonGroup>
        );
    }
}

ButtonCheck.displayName = "ButtonCheck";

ButtonCheck.propTypes = {
    clickHandler: React.PropTypes.func
};

ButtonCheck.defaultProps = {
    clickHandler: function () {
    }
};

module.exports = ButtonCheck;

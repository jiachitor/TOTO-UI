'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import getScrollbarWidth from '../utils/getScrollbarWidth';
import CSSCore from '../utils/CSSCore';

module.exports = {
    setDimmerContainer: function () {
        let container = (this.props.container &&
            ReactDOM.findDOMNode(this.props.container)) || document.body;
        let bodyPaddingRight = parseInt((container.style.paddingRight || 0), 10);
        let barWidth = getScrollbarWidth();

        if (barWidth) {
            container.style.paddingRight = bodyPaddingRight + barWidth + 'px';
        }

        CSSCore.addClass(container, this.setClassNamespace('dimmer-active'));
    },

    resetDimmerContainer: function () {
        let container = (this.props.container &&
            ReactDOM.findDOMNode(this.props.container)) || document.body;

        CSSCore.removeClass(container, this.setClassNamespace('dimmer-active'));

        container.style.paddingRight = '';
    },

    renderDimmer: function (children) {
        let onClick = this.handleDimmerClick || null;
        let classSet = {};

        classSet[this.setClassNamespace('dimmer')] = true;
        classSet[this.setClassNamespace('active')] = true;

        return (
            <div>
                <div
                    onClick={onClick}
                    ref="dimmer"
                    style={{display: 'block'}}
                    className={classNames(classSet)}></div>
                {children}
            </div>
        );
    },
};

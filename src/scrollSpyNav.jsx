'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'object-assign';
import classNames from 'classnames';
import SmoothScrollMixin from './mixins/SmoothScrollMixin';
import isInViewport from './utils/isInViewport';
import Events from './utils/Events';
import requestAnimationFrame from './utils/requestAnimationFrame';
import debounce from './utils/debounce';
import CSSCore from './utils/CSSCore';
import domUtils from './utils/domUtils';
import createChainedFunction from './utils/createChainedFunction';
import constants from './constants.jsx';

let cloneElement = React.cloneElement;

class ScrollSpyNav extends React.Component {
    constructor(props) {
        super(props);
        for (let v in SmoothScrollMixin) {
            this[v] = SmoothScrollMixin[v].bind(this);
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this._init = this._init.bind(this);
        this.checkIsInView = this.checkIsInView.bind(this);
        this.checkRAF = this.checkRAF.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.mounted = true;
        this._init();
    }

    componentWillMount() {
        this.checkRAF();
        let debounced = debounce(this.checkRAF, 100).bind(this);
        this._scrollListener = Events.on(window, 'scroll', this.checkRAF);
        this._resizeListener = Events.on(window, 'resize', debounced);
        this._orientationListener = Events.on(window, 'orientationchange', debounced);
    }

    componentWillUnmount() {
        this.mounted = false;
        this._scrollListener && this._scrollListener.off();
        this._resizeListener && this._resizeListener.off();
        this._orientationListener && this._orientationListener.off();
    }

    _init() {
        this._linkNodes = ReactDOM.findDOMNode(this).querySelectorAll('a[href^="#"]');
        this._anchorNodes = [];

        Array.prototype.forEach.call(this._linkNodes, function (link) {
            let anchor = document.getElementById(link.getAttribute('href').substr(1));

            if (anchor) {
                this._anchorNodes.push(anchor);
            }
        }.bind(this));
    }

    checkIsInView() {
        if (this.mounted) {
            let inViewsNodes = [];

            this._anchorNodes.forEach(function (anchor) {
                if (isInViewport(anchor)) {
                    inViewsNodes.push(anchor);
                }
            });

            if (inViewsNodes.length) {
                let targetNode;

                inViewsNodes.every(function (node) {
                    if (domUtils.offset(node).top >= domUtils.scrollTop(window)) {
                        targetNode = node;
                        return false; // break loop
                    }
                    return true;
                });

                if (!targetNode) {
                    return;
                }

                Array.prototype.forEach.call(this._linkNodes, function (link) {
                    CSSCore.removeClass(link, this.props.activeClass);
                }.bind(this));

                let targetLink = ReactDOM.findDOMNode(this).querySelector('a[href="#' + targetNode.id + '"]');

                targetLink && CSSCore.addClass(targetLink, this.props.activeClass);
            }
        }
    }

    checkRAF() {
        requestAnimationFrame(this.checkIsInView);
    }

    // Smooth scroll
    handleClick(e) {
        e.preventDefault();

        if (e.target && e.target.nodeName === 'A') {
            let targetNode = document.getElementById(e.target.getAttribute('href').
                substr(1));

            targetNode && this.smoothScroll(window, {
                position: domUtils.offset(targetNode).top - this.props.offsetTop || 0,
            });
        }
    }

    render() {
        let child = React.Children.only(this.props.children);

        // transfer child's props to cloned element
        return cloneElement(child, assign({}, this.props, child.props, {
            onClick: createChainedFunction(this.handleClick, child.props.onClick),
            className: classNames(this.props.className, child.props.className),
        }));
    }
}

ScrollSpyNav.displayName = "ScrollSpy ";

ScrollSpyNav.propTypes = {
    activeClass: React.PropTypes.string,
    offsetTop: React.PropTypes.number,
};

ScrollSpyNav.defaultProps = {
    activeClass: constants.CLASSES.active,
};

module.exports = ScrollSpyNav;

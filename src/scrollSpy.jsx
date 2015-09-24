'use strict';

import React from 'react';
import assign from 'object-assign';
import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import isInViewport from './utils/isInViewport';
import Events from './utils/Events';
import TransitionEvents from './utils/TransitionEvents';
import requestAnimationFrame from './utils/requestAnimationFrame';
import debounce from './utils/debounce';

let cloneElement = React.cloneElement;

class ScrollSpy extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.state = {
            inViewport: false,
        };
    }

    componentWillMount() {
        this.checkRAF();

        let debounced = debounce(this.checkRAF, 60).bind(this);

        this._scrollListener = Events.on(window, 'scroll', this.checkRAF);
        this._resizeListener = Events.on(window, 'resize', debounced);
        this._orientationListener = Events.on(window, 'orientationchange',
            debounced);
    }

    componentWillUnmount() {
        this._scrollListener && this._scrollListener.off();
        this._resizeListener && this._resizeListener.off();
        this._orientationListener && this._orientationListener.off();
        clearTimeout(this._timer);
    }

    checkIsInView() {
        if (!TransitionEvents.support.animationend) {
            return;
        }

        if (this.isMounted) {
            let isInView = isInViewport(React.findDOMNode(this));

            if (isInView && !this.state.inViewport) {
                if (this._timer) {
                    clearTimeout(this._timer);
                }

                this._timer = setTimeout(function () {
                    this.setState({
                        inViewport: true
                    });
                }.bind(this), this.props.delay);
            }

            if (this.props.repeat && !isInView) {
                this.setState({
                    inViewport: false
                });
            }
        }
    }

    checkRAF() {
        requestAnimationFrame(this.checkIsInView);
    }

    render() {
        let animation = this.state.inViewport ?
            this.setClassNamespace('animation-' + this.props.animation) : null;
        let child = React.Children.only(this.props.children);

        // transfer child's props to cloned element
        return cloneElement(child, assign({}, child.props, {
            className: classNames(child.props.className, animation),
            'data-scrollspy': 'animation', // style helper
            delay: this.props.delay
        }));
    }
}

ScrollSpy.displayName = "ScrollSpy ";

ScrollSpy.propTypes = {
    animation: React.PropTypes.string,
    delay: React.PropTypes.number,
    repeat: React.PropTypes.bool,
};

ScrollSpy.defaultProps = {
    animation: 'fade',
    delay: 0,
    repeat: false,
};

module.exports = ScrollSpy;

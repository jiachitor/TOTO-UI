'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'object-assign';
import ClassNameMixin from './mixins/ClassNameMixin';
import OverlayMixin from './mixins/OverlayMixin.js';
import dom from './utils/domUtils';
import createChainedFunction from './utils/createChainedFunction';

let cloneElement = React.cloneElement;

function isOneOf(one, of) {
    if (Array.isArray(of)) {
        return of.indexOf(one) >= 0;
    }
    return one === of;
}

class PopoverTrigger extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
        for (let x in OverlayMixin) {
            this[x] = OverlayMixin[x].bind(this);
        }
        this.state = {
            isPopoverActive: this.props.defaultPopoverActive == null ?
                false : this.props.defaultPopoverActive,
            popoverLeft: null,
            popoverTop: null,
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleDelayedOpen = this.handleDelayedOpen.bind(this);
        this.handleDelayedClose = this.handleDelayedClose.bind(this);
        this.updatePopoverPosition = this.updatePopoverPosition.bind(this);
        this.calcPopoverPosition = this.calcPopoverPosition.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.renderOverlay = this.renderOverlay.bind(this);
    }

    componentDidMount() {
        if (this.props.defaultPopoverActive) {
            this.updatePopoverPosition();
        }
    }

    componentWillUnmount() {
        clearTimeout(this._hoverDelay);
    }

    open() {
        this.setState({
            isPopoverActive: true,
        }, function () {
            this.updatePopoverPosition();
        });
    }

    close() {
        this.setState({
            isPopoverActive: false,
        });
    }

    toggle() {
        this.state.isPopoverActive ? this.close() : this.open();
    }

    handleDelayedOpen() {
        if (this._hoverDelay != null) {
            clearTimeout(this._hoverDelay);
            this._hoverDelay = null;
            return;
        }

        let delay = this.props.delayOpen != null ?
            this.props.delayOpen : this.props.delay;

        if (!delay) {
            this.open();
            return;
        }

        this._hoverDelay = setTimeout(function () {
            this._hoverDelay = null;
            this.open();
        }.bind(this), delay);
    }

    handleDelayedClose() {
        if (this._hoverDelay != null) {
            clearTimeout(this._hoverDelay);
            this._hoverDelay = null;
            return;
        }

        let delay = this.props.delayClose != null ?
            this.props.delayClose : this.props.delay;

        if (!delay) {
            this.close();
            return;
        }

        this._hoverDelay = setTimeout(function () {
            this._hoverDelay = null;
            this.close();
        }.bind(this), delay);
    }

    updatePopoverPosition() {
        //if (!this.isMounted) {
        //    return;
        //}

        let position = this.calcPopoverPosition();

        this.setState({
            popoverLeft: position.left,
            popoverTop: position.top,
        });
    }

    calcPopoverPosition() {
        let childOffset = this.getPosition();
        let popoverNode = this.getOverlayDOMNode();
        let popoverHeight = popoverNode.offsetHeight;
        let popoverWidth = popoverNode.offsetWidth;
        let caretSize = 8;

        switch (this.props.placement) {
            case 'right':
                return {
                    top: childOffset.top + childOffset.height / 2 - popoverHeight / 2,
                    left: childOffset.left + childOffset.width + caretSize,
                };
            case 'left':
                return {
                    top: childOffset.top + childOffset.height / 2 - popoverHeight / 2,
                    left: childOffset.left - popoverWidth - caretSize,
                };
            case 'top':
                return {
                    top: childOffset.top - popoverHeight - caretSize,
                    left: childOffset.left + childOffset.width / 2 - popoverWidth / 2 ,
                };
            case 'bottom':
                return {
                    top: childOffset.top + childOffset.height + caretSize,
                    left: childOffset.left + childOffset.width / 2 - popoverWidth / 2,
                };
            default:
                throw new Error('calcPopoverPosition(): No such placement of ['
                    + this.props.placement + '] found.');
        }
    }

    getPosition() {
        let node = ReactDOM.findDOMNode(this);
        let container = this.getContainerDOMNode();

        let offset = container.tagName === 'BODY' ?
            dom.offset(node) : dom.position(node, container);

        return assign({}, offset, {
            height: node.offsetHeight,
            width: node.offsetWidth,
        });
    }

    // used by Mixin
    renderOverlay() {
        if (!this.state.isPopoverActive) {
            return <span />;
        }

        let popover = this.props.popover;

        return cloneElement(
            this.props.popover,
            {
                onRequestHide: this.close,
                placement: this.props.placement,
                positionLeft: this.state.popoverLeft,
                positionTop: this.state.popoverTop,
                amStyle: popover.props.amStyle || this.props.amStyle,
                amSize: popover.props.amSize || this.props.amSize,
            }
        );
    }

    render() {
        let child = React.Children.only(this.props.children);

        let props = {};

        props.onClick = createChainedFunction(child.props.onClick,
            this.props.onClick);

        if (isOneOf('click', this.props.trigger)) {
            props.onClick = createChainedFunction(this.toggle, props.onClick);
        }

        if (isOneOf('hover', this.props.trigger)) {
            props.onMouseOver = createChainedFunction(this.handleDelayedOpen,
                this.props.onMouseOver);
            props.onMouseOut = createChainedFunction(this.handleDelayedClose,
                this.props.onMouseOut);
        }

        if (isOneOf('focus', this.props.trigger)) {
            props.onFocus = createChainedFunction(this.handleDelayedOpen,
                this.props.onFocus);
            props.onBlur = createChainedFunction(this.handleDelayedClose,
                this.props.onBlur);
        }

        return cloneElement(child, props);
    }
}

PopoverTrigger.displayName = "Popover";

PopoverTrigger.propTypes = {
    trigger: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(['click', 'hover', 'focus']),
        React.PropTypes.arrayOf(
            React.PropTypes.oneOf(['click', 'hover', 'focus'])
        ),
    ]),
    placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    delay: React.PropTypes.number,
    delayOpen: React.PropTypes.number,
    delayClose: React.PropTypes.number,
    defaultPopoverActive: React.PropTypes.bool,
    popover: React.PropTypes.node.isRequired,
};

PopoverTrigger.defaultProps = {
    placement: 'right',
    trigger: ['hover', 'focus'],
};

module.exports = PopoverTrigger;

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'object-assign';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import Events from './utils/Events';
import debounce from './utils/debounce';
import domUtils from './utils/domUtils';

class Sticky extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.state = {
            sticked: false,
            holderStyle: null,
            initialized: false,
            stickerStyle: null,
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this._init = this._init.bind(this);
        this.checkPosition = this.checkPosition.bind(this);
        this.checkMedia = this.checkMedia.bind(this);
        this.resetSticker = this.resetSticker.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.mounted = true;
        this._init();
        this.checkPosition();
        let ownerWindow = domUtils.ownerWindow(ReactDOM.findDOMNode(this.refs.sticker));

        this._scrollListener = Events.on(ownerWindow, 'scroll',
            debounce(this.checkPosition, 10).bind(this));
        this._resizeListener = Events.on(ownerWindow, 'resize',
            debounce(this.checkPosition, 50).bind(this));
    }

    componentWillMount() {
        this.mounted = false;
        this._scrollListener && this._scrollListener.off();
        this._resizeListener && this._resizeListener.off();
    }

    _init() {
        if (this.state.initialized || !this.mounted || !this.checkMedia()) {
            return;
        }

        let sticker = ReactDOM.findDOMNode(this.refs.sticker);
        let elStyle = getComputedStyle(sticker);
        let outerHeight = parseInt(elStyle.height, 10) +
            parseInt(elStyle.marginTop, 10) + parseInt(elStyle.marginBottom, 10);
        let style = {
            height: elStyle.position !== 'absolute' ? outerHeight : '',
            float: elStyle.float !== 'none' ? elStyle.float : '',
            margin: elStyle.margin ,
        };

        this.setState({
            initialized: true,
            holderStyle: style,
            stickerStyle: {
                margin: 0,
            },
        });
    }

    checkPosition() {
        if (this.mounted) {
            let scrollTop = domUtils.scrollTop(window);
            let offsetTop = this.props.top;
            let offsetBottom = this.props.bottom;
            let holder = ReactDOM.findDOMNode(this);

            if (typeof offsetBottom === 'function') {
                offsetBottom = offsetBottom();
            }

            let checkResult = (scrollTop > domUtils.offset(holder).top);

            if (checkResult && !this.state.sticked) {
                this.setState({
                    stickerStyle: {
                        top: offsetTop,
                        left: domUtils.offset(holder).left,
                        width: holder.offsetWidth,
                    },
                });
            }

            if (this.state.sticked && !checkResult) {
                this.resetSticker();
            }

            this.setState({
                sticked: checkResult,
            });
        }
    }

    checkMedia() {
        // TODO: add element visible detector
        /*if (!this.$element.is(':visible')) {
         return false;
         }*/

        let media = this.props.media;

        if (media) {
            switch (typeof media) {
                case 'number':
                    if (window.innerWidth < media) {
                        return false;
                    }
                    break;

                case 'string':
                    if (window.matchMedia && !window.matchMedia(media).matches) {
                        return false;
                    }
                    break;
            }
        }

        return true;
    }

    resetSticker() {
        this.setState({
            stickerStyle: {
                position: '',
                top: '',
                width: '',
                left: '',
                margin: 0,
            },
        });
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
        let stickyClass = this.getClassSet();
        let child = React.Children.only(this.props.children);
        let animation = this.props.animation && this.state.sticked ?
            this.setClassNamespace('animation-' + this.props.animation) : null;

        // transfer child's props to cloned element
        return (
            <div
                {...this.props}
                style={this.state.holderStyle}
                className={classNames(this.props.className,
        this.prefixClass('placeholder'))}>
                {React.cloneElement(child, assign({}, child.props, {
                    style: this.state.stickerStyle,
                    ref: 'sticker',
                    className: classNames(child.props.className,
                        this.state.sticked ? stickyClass : null, animation),
                }))}
            </div>
        );
    }
}

Sticky.displayName = "Sticky";

Sticky.propTypes = {
    classPrefix: React.PropTypes.string,
    media: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
    ]),
    top: React.PropTypes.number,
    animation: React.PropTypes.string,
    bottom: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.func,
    ]),
};

Sticky.defaultProps = {
    classPrefix: 'sticky',
    top: 0,
};

module.exports = Sticky;

'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.state = {
            activeIndex: this.props.defaultActiveIndex == null ?
                0 : this.props.defaultActiveIndex,
            previousActiveIndex: null,
            direction: null,
        };
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.pause = this.pause.bind(this);
        this.play = this.play.bind(this);
        this.waitForNext = this.waitForNext.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.getActiveIndex = this.getActiveIndex.bind(this);
        this.handleItemAnimateOutEnd = this.handleItemAnimateOutEnd.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.renderDirectionNav = this.renderDirectionNav.bind(this);
        this.renderControlNav = this.renderControlNav.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let activeIndex = this.getActiveIndex();

        if (nextProps.activeIndex != null &&
            nextProps.activeIndex !== activeIndex) {
            clearTimeout(this.timeout);
            this.setState({
                previousActiveIndex: activeIndex,
                direction: nextProps.direction != null ? nextProps.direction :
                    this.getDirection(activeIndex, nextProps.activeIndex),
            });
        }
    }

    componentDidMount() {
        this.props.autoPlay && this.waitForNext();
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    getDirection(prevIndex, index) {
        if (prevIndex === index) {
            return null;
        }

        return prevIndex > index ? 'prev' : 'next';
    }

    next(e) {
        e && e.preventDefault();

        let index = this.getActiveIndex() + 1;
        let count = React.Children.count(this.props.children);
        if (index > count - 1) {
            if (!this.props.loop) {
                return;
            }
            index = 0;
        }

        this.handleSelect(index, 'next');
    }

    prev(e) {
        e && e.preventDefault();

        let index = this.getActiveIndex() - 1;

        if (index < 0) {
            if (!this.props.loop) {
                return;
            }
            index = React.Children.count(this.props.children) - 1;
        }

        this.handleSelect(index, 'prev');
    }

    pause() {
        this.isPaused = true;
        clearTimeout(this.timeout);
    }

    play() {
        this.isPaused = false;
        this.waitForNext();
    }

    waitForNext() {
        if (!this.isPaused && this.props.slide && this.props.slideSpeed &&
            this.props.activeIndex == null) {
            this.timeout = setTimeout(this.next, this.props.slideSpeed);
        }
    }

    handleMouseOver() {
        if (this.props.pauseOnHover) {
            this.pause();
        }
    }

    handleMouseOut() {
        if (this.isPaused) {
            this.play();
        }
    }

    getActiveIndex() {
        return this.props.activeIndex != null ?
            this.props.activeIndex : this.state.activeIndex;
    }

    handleItemAnimateOutEnd() {
        this.setState({
            previousActiveIndex: null,
            direction: null,
        }, function () {
            this.waitForNext();

            if (this.props.onSlideEnd) {
                this.props.onSlideEnd();
            }
        });
    }

    handleSelect(index, direction, e) {
        e && e.preventDefault();
        clearTimeout(this.timeout);

        let previousActiveIndex = this.getActiveIndex();
        direction = direction || this.getDirection(previousActiveIndex, index);

        if (this.props.onSelect) {
            this.props.onSelect(index, direction);
        }

        if (this.props.activeIndex == null && index !== previousActiveIndex) {
            //这里是我的修改，暂时看不出这里的功能需求
            /*if (this.state.previousActiveIndex != null) {
                // If currently animating don't activate the new index.
                // TODO: look into queuing this canceled call and
                // animating after the current animation has ended.
                return;
            }*/
            this.setState({
                activeIndex: index,
                previousActiveIndex: previousActiveIndex,
                direction: direction,
            });
        }
    }

    renderDirectionNav() {
        return this.props.directionNav ? (
            <ul className={this.setClassNamespace('direction-nav')}>
                <li>
                    <a
                        onTouchTap={this.prev}
                        className={this.setClassNamespace('prev')}
                        href="#prev">
                        Previous
                    </a>
                </li>
                <li>
                    <a
                        onTouchTap={this.next}
                        className={this.setClassNamespace('next')}
                        href="#next">
                        Next
                    </a>
                </li>
            </ul>
        ) : null;
    }

    renderControlNav() {
        if (this.props.controlNav) {
            let isThumbnailNav = false;
            let children = React.Children.map(this.props.children,
                function (child, i) {
                    let className = (i === this.getActiveIndex()) ?
                        this.setClassNamespace('active') : null;

                    if (!isThumbnailNav) {
                        isThumbnailNav = !!child.props.thumbnail;
                    }

                    let thumb = child.props.thumbnail;

                    return (
                        <li
                            onTouchTap={this.handleSelect.bind(this, i, null)}
                            key={i}>
                            {thumb ? (
                                <img className={className} src={thumb}/>
                            ) : (
                                <a href={'#' + i} className={className}/>)}
                            <i></i>
                        </li>
                    );
                }.bind(this));
            let controlClass = this.setClassNamespace('control-' +
                (isThumbnailNav ? 'thumbs' : 'paging'));

            return (
                <ol
                    className={classNames(this.setClassNamespace('control-nav'), controlClass)}>
                    {children}
                </ol>
            );
        }

        return null;
    }

    renderItem(child, index) {
        let activeIndex = this.getActiveIndex();
        let isActive = (index === activeIndex);
        let isPreviousActive = this.state.previousActiveIndex != null &&
            this.state.previousActiveIndex === index && this.props.slide;

        return React.cloneElement(
            child,
            {
                active: isActive,
                ref: child.ref,
                key: child.key ? child.key : index,
                index: index,
                animateOut: isPreviousActive,
                animateIn: isActive && this.state.previousActiveIndex != null &&
                this.props.slide,
                direction: this.state.direction,
                onAnimateOutEnd: isPreviousActive ? this.handleItemAnimateOutEnd : null,
            }
        );
    }

    render() {
        let classSet = this.getClassSet();
        let viewportStyle = {
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
        };

        // React version slider style
        classSet[this.prefixClass('slide')] = true;

        return (
            <div
                {...this.props}
                className={classNames(classSet, this.props.className)}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}>
                <div
                    className={this.setClassNamespace('viewport')}
                    style={viewportStyle}>
                    <ul className={this.setClassNamespace('slides')}>
                        {React.Children.map(this.props.children, this.renderItem)}
                    </ul>
                </div>
                {this.renderDirectionNav()}
                {this.renderControlNav()}
            </div>
        );
    }
}

Slider.displayName = "Slider";

Slider.propTypes = {
    theme: React.PropTypes.oneOf(['default', 'a1', 'a2', 'a3', 'a4', 'a5',
        'b1', 'b2', 'b3', 'b4', 'c1', 'c2', 'c3', 'c4', 'd1', 'd2', 'd3']),
    directionNav: React.PropTypes.bool,   // prev/next icon
    controlNav: React.PropTypes.bool,

    animation: React.PropTypes.string,    // not working
    slide: React.PropTypes.bool,
    autoPlay: React.PropTypes.bool,
    slideSpeed: React.PropTypes.number,   // interval
    loop: React.PropTypes.bool,           // loop slide

    pauseOnHover: React.PropTypes.bool,
    touch: React.PropTypes.bool,          // TODO: add touch support

    onSelect: React.PropTypes.func,
    onSlideEnd: React.PropTypes.func,
    activeIndex: React.PropTypes.number,
    defaultActiveIndex: React.PropTypes.number,
    direction: React.PropTypes.oneOf(['prev', 'next']),
};

Slider.defaultProps = {
    classPrefix: 'slider',
    theme: 'default',
    directionNav: true,
    controlNav: true,
    slide: true,
    autoPlay: true,
    loop: true,
    slideSpeed: 5000,
    pauseOnHover: true,
};

module.exports = Slider;


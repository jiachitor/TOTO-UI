'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import TransitionEvents from './utils/TransitionEvents';

class SliderItem extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.state = {
            direction: null,
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.handleAnimateOutEnd = this.handleAnimateOutEnd.bind(this);
        this.startAnimation = this.startAnimation.bind(this);
    }

    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.active !== nextProps.active) {
            this.setState({
                direction: null,
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (!this.props.active && prevProps.active) {
            TransitionEvents.on(ReactDOM.findDOMNode(this), this.handleAnimateOutEnd);
        }

        //如果状态改变了，就执行动画
        if (this.props.active !== prevProps.active) {
            setTimeout(this.startAnimation, 20);
        }
    }

    handleAnimateOutEnd() {
        if (this.props.onAnimateOutEnd && this.mounted) {
            this.props.onAnimateOutEnd(this.props.index);
        }
    }

    startAnimation() {
        if (!this.mounted) {
            return;
        }

        this.setState({
            direction: this.props.direction === 'prev' ?
                'right' : 'left',
        });
    }

    render() {
        let classSet = {
            active: (this.props.active && !this.props.animateIn) ||
            this.props.animateOut,
            next: this.props.active && this.props.animateIn &&
            this.props.direction === 'next',
            prev: this.props.active && this.props.animateIn &&
            this.props.direction === 'prev',
        };

        if (this.state.direction && (this.props.animateIn || this.props.animateOut)) {
            classSet[this.state.direction] = true;
        }

        return (
            <li
                className={classNames(this.props.className, classSet)}>
                {this.props.children}
            </li>
        );
    }
}

SliderItem.displayName = "SliderItem";

SliderItem.propTypes = {
    direction: React.PropTypes.oneOf(['prev', 'next']),
    onAnimateOutEnd: React.PropTypes.func,
    active: React.PropTypes.bool,
    animateIn: React.PropTypes.bool,
    animateOut: React.PropTypes.bool,
    caption: React.PropTypes.node,
    index: React.PropTypes.number,
    thumbnail: React.PropTypes.string,
};

SliderItem.defaultProps = {
    animation: true,
};

module.exports = SliderItem;

'use strict';

import SmoothScrollMixin from './minxins/SmoothScrollMixin.js';
import Button from './button';

class ScrollTo extends React.Component{
    constructor(props) {
        super(props);
        for(let v in SmoothScrollMixin){
            this[v] = SmoothScrollMixin[v].bind(this);
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.smoothScroll(null, {
            position: this.props.position,
            speed: this.props.speed,
        });
    }

    render() {
        return (
            <Button
                {...this.props}
                onClick={this.handleClick}>
                {this.props.children}
            </Button>
        );
    }
}

ScrollTo.displayName = "ScrollTo";

ScrollTo.defaultProps = {};

module.exports = ScrollTo;

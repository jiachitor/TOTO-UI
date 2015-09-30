/**
 * modified version of:
 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CollapsibleMixin.js
 */

'use strict';

import TransitionEvents from '../utils/TransitionEvents';

let CollapseMixin = {
    //propTypes: {
    //    defaultExpanded: React.PropTypes.bool,
    //    expanded: React.PropTypes.bool
    //},


    //ES6 不支持 getInitialState ，所以这里的代码可以不用
    /*getInitialState: function () {
        let defaultExpanded = this.props.defaultExpanded != null ?
            this.props.defaultExpanded :
            this.props.expanded != null ? this.props.expanded : false;

        return {
            expanded: defaultExpanded,
            collapsing: false,
        };
    },*/

    componentWillUpdate: function (nextProps, nextState) {
        let willExpanded = nextProps.expanded != null ? nextProps.expanded :
            nextState.expanded;

        if (willExpanded === this.isExpanded()) {
            return;
        }

        // if the expanded state is being toggled, ensure node has a dimension value
        // this is needed for the animation to work and needs to be set before
        // the collapsing class is applied (after collapsing is applied the in class
        // is removed and the node's dimension will be wrong)

        let node = this.getCollapsibleDOMNode();
        let dimension = this.dimension();
        let value = '0';

        if (!willExpanded) {
            // get height
            value = this.getCollapsibleDimensionValue();
        }

        node.style[dimension] = value + 'px';

        this._afterWillUpdate();
    },

    componentDidUpdate: function (prevProps, prevState) {
        // check if expanded is being toggled; if so, set collapsing
        this._checkToggleCollapsing(prevProps, prevState);

        // check if collapsing was turned on; if so, start animation
        this._checkStartAnimation();
    },

    // helps enable test stubs
    _afterWillUpdate: function () {
    },

    _checkStartAnimation: function () {
        if (!this.state.collapsing) {
            return;
        }

        let node = this.getCollapsibleDOMNode();
        let dimension = this.dimension();
        let value = this.getCollapsibleDimensionValue();

        // setting the dimension here starts the transition animation
        let result;

        if (this.isExpanded()) {
            result = value + 'px';
        } else {
            result = '0px';
        }
        node.style[dimension] = result;
    },

    _checkToggleCollapsing: function (prevProps, prevState) {
        let wasExpanded = prevProps.expanded != null ? prevProps.expanded :
            prevState.expanded;
        let isExpanded = this.isExpanded();

        if (wasExpanded !== isExpanded) {
            if (wasExpanded) {
                this._handleCollapse();
            } else {
                this._handleExpand();
            }
        }
    },

    _handleExpand: function () {
        let node = this.getCollapsibleDOMNode();
        let dimension = this.dimension();

        let complete = function () {
            this._removeEndEventListener(node, complete);
            // remove dimension value - this ensures the collapsible item can grow
            // in dimension after initial display (such as an image loading)
            node.style[dimension] = '';
            this.setState({
                collapsing: false,
            });
        }.bind(this);

        this._addEndEventListener(node, complete);

        this.setState({
            collapsing: true,
        });
    },

    _handleCollapse: function () {
        let node = this.getCollapsibleDOMNode();
        let _this = this;
        let complete = function () {
            _this._removeEndEventListener(node, complete);
            _this.setState({
                collapsing: false,
            });
        };

        this._addEndEventListener(node, complete);

        this.setState({
            collapsing: true,
        });
    },

    // helps enable test stubs
    _addEndEventListener: function (node, complete) {
        TransitionEvents.on(node, complete);
    },

    // helps enable test stubs
    _removeEndEventListener: function (node, complete) {
        TransitionEvents.off(node, complete);
    },

    dimension: function () {
        return (typeof this.getCollapsibleDimension === 'function') ?
            this.getCollapsibleDimension() : 'height';
    },

    isExpanded: function () {
        return this.props.expanded != null ? this.props.expanded : this.state.expanded;
    },

    getCollapsibleClassSet: function (className) {
        let classSet = {};

        if (typeof className === 'string') {
            className.split(' ').forEach(function (subClass) {
                if (subClass) {
                    classSet[subClass] = true;
                }
            });
        }

        classSet[this.setClassNamespace('collapsing')] = this.state.collapsing;
        classSet[this.setClassNamespace('collapse')] = !this.state.collapsing;
        classSet[this.setClassNamespace('in')] = this.isExpanded() && !this.state.collapsing;

        return classSet;
    },
};

module.exports = CollapseMixin;

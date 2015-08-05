'use strict';

import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import constants from './minxins/constants.js';
import Button from './button.jsx';
import Icon from './icon.jsx';
import Events from './utils/Events.js';
import isNodeInTree from './utils/isNodeInTree.js';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.state = {
            open: false,
        };

        this.setDropdownState = this.setDropdownState.bind(this);
        this.handleDropdownClick = this.handleDropdownClick.bind(this);
        this.handleOuterClick = this.handleOuterClick.bind(this);
        this.bindOuterHandlers = this.bindOuterHandlers.bind(this);
        this.handleKeyup = this.handleKeyup.bind(this);
    }

    componentWillMount() {
        this.unbindOuterHandlers();
    }

    componentWillUnmount() {
        this.unbindOuterHandlers();
    }

    setDropdownState(state, callback) {
        if (state) {
            this.bindOuterHandlers();
        } else {
            this.unbindOuterHandlers();
        }

        this.setState({
            open: state,
        }, function () {
            callback && callback();

            state && this.props.onOpen && this.props.onOpen();
            !state && this.props.onClose && this.props.onClose();
        });
    }

    // close dropdown on `esc` keyup
    handleKeyup(e) {
        (e.keyCode === 27) && this.setDropdownState(false);
    }

    // close dropdown when click outer dropdown
    handleOuterClick(e) {
        if (isNodeInTree(e.target, React.findDOMNode(this))) {
            return false;
        }

        this.setDropdownState(false);
    }

    bindOuterHandlers() {
        Events.on(document, 'click', this.handleOuterClick);
        Events.on(document, 'keyup', this.handleKeyup);
    }

    unbindOuterHandlers() {
        Events.off(document, 'click', this.handleOuterClick);
        Events.off(document, 'keyup', this.handleKeyup);
    }

    handleDropdownClick(e) {
        e.preventDefault();
        this.setDropdownState(!this.state.open);
    }

    render() {
        let classSet = this.getClassSet();
        let Component = this.props.navItem ? 'li' : 'div';
        let caret = (<Icon
            className={this.props.caretClassName}
            icon={'caret-' + (this.props.dropup ? 'up' : 'down')}/>);
        let animation = this.state.open ?
            this.setClassNamespace('animation-slide-top-fixed') :
            this.setClassNamespace('dropdown-animation');
        let ContentTag = this.props.contentTag;

        classSet[constants.CLASSES.active] = this.state.open;
        classSet[this.prefixClass('up')] = this.props.dropup;

        return (
            <Component
                btnStyle={null}
                className={classNames(this.props.className, classSet)}>
                <Button
                    onClick={this.handleDropdownClick}
                    amStyle={this.props.btnStyle}
                    style={this.props.btnInlineStyle}
                    className={classNames(this.prefixClass('toggle'),
          this.props.toggleClassName)}
                    ref="dropdownToggle">
                    {this.props.title}
                    {' '}
                    {caret}
                </Button>
                <ContentTag
                    ref="dropdownContent"
                    style={this.props.contentInlineStyle}
                    className={classNames(this.prefixClass('content'),
          animation, this.props.contentClassName)}>
                    {this.props.children}
                </ContentTag>
            </Component>
        );
    }
}

Dropdown.displayName = "Dropdown";

Dropdown.propTypes = {
    title: React.PropTypes.node.isRequired,
    dropup: React.PropTypes.bool,
    navItem: React.PropTypes.bool,
    btnStyle: React.PropTypes.string,
    btnInlineStyle: React.PropTypes.object,
    contentInlineStyle: React.PropTypes.object,
    contentTag: React.PropTypes.node,
    toggleClassName: React.PropTypes.string,
    caretClassName: React.PropTypes.string,
    contentClassName: React.PropTypes.string,
    onOpen: React.PropTypes.func, // open callback
    onClose: React.PropTypes.func, // close callback
};

Dropdown.defaultProps = {
    classPrefix: 'dropdown',
    contentTag: 'ul',
};

module.exports = Dropdown;

/*
 * TODO:
 *   1. 关闭动画
 *   2. 位置检测/宽度适应
 * */

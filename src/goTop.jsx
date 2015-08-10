'use strict';

import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import SmoothScrollMixin from './minxins/SmoothScrollMixin';
import Events from './utils/Events';
import debounce from './utils/debounce';
import dom from './utils/domUtils';
import CSSCore from './utils/CSSCore';
import Icon from './icon.jsx';

class GoTop extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
        for (let b in SmoothScrollMixin) {
            this[b] = SmoothScrollMixin[b].bind(this);
        }
        this.isAutoHide = this.isAutoHide.bind(this);
        this.renderIcon = this.renderIcon.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.isAutoHide()) {
            let check = this.checkPosition;

            check();

            this._listener = Events.on(window, 'scroll', debounce(check, 100));
        }
    }

    componentWillUnmount() {
        this._listener && this._listener.off();
    }

    checkPosition() {
        let action = (dom.scrollTop(window) > 50 ? 'add' : 'remove') + 'Class';

        CSSCore[action](React.findDOMNode(this), this.setClassNamespace('active'));
    }

    isAutoHide() {
        return this.props.theme === 'fixed' && this.props.autoHide;
    }

    handleClick(e) {
        e.preventDefault();
        this.smoothScroll();
    }

    renderIcon() {
        return this.props.src ? (
            <img
                className={this.prefixClass('icon-custom')}
                src={this.props.src}
                alt={this.props.title}/>
        ) : <Icon
            className={this.prefixClass('icon')}
            icon={this.props.icon || 'chevron-up'}/>;
    }

    render() {
        let classSet = this.getClassSet();

        classSet[this.prefixClass(this.props.theme)] = true;
        classSet[this.setClassNamespace('active')] = !this.isAutoHide();

        return (
            <div
                {...this.props}
                data-am-widget={this.props.classPrefix}
                className={classNames(classSet, this.props.className)}>
                <a
                    href="#top"
                    onClick={this.handleClick}
                    title={this.props.title}>
                    {this.props.title ? (<span className={this.prefixClass('title')}>
            {this.props.title}
            </span>) : null}
                    {this.renderIcon()}
                </a>
            </div>
        );
    }
}

GoTop.displayName = "GoTop";

GoTop.propTypes = {
    classPrefix: React.PropTypes.string.isRequired,
    theme: React.PropTypes.oneOf(['default', 'fixed']),
    title: React.PropTypes.string,
    src: React.PropTypes.string,
    icon: React.PropTypes.string,
    autoHide: React.PropTypes.bool,
};

GoTop.defaultProps = {
    classPrefix: 'gotop',
    theme: 'default',
};

module.exports = GoTop;

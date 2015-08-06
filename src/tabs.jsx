'use strict';
import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import omit from 'object.omit';
import Nav from './nav';
import NavItem from './navItem';
import TabsItem from './tabsItem';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
        let defaultActiveKey = this.props.defaultActiveKey != null
            ? this.props.defaultActiveKey
            : this.getDefaultActiveKey(this.props.children);
        this.state={
            activeKey: defaultActiveKey,
            previousActiveKey: null,
        };
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.getDefaultActiveKey = this.getDefaultActiveKey.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.renderNav = this.renderNav.bind(this);
        this.renderTabPanels = this.renderTabPanels.bind(this);
        this.renderData = this.renderData.bind(this);
        this.renderWrapper = this.renderWrapper.bind(this);
        this.renderNavWrapper = this.renderNavWrapper.bind(this);
        this.renderBodyWrapper = this.renderBodyWrapper.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.activeKey != null &&
            nextProps.activeKey !== this.props.activeKey) {
            this.setState({
                previousActiveKey: this.props.activeKey,
            });
        }
    }

    getDefaultActiveKey(children) {
        let defaultActiveKey = null;

        if (this.props.data) {
            this.props.data.every(function (item, i) {
                if (item.active) {
                    defaultActiveKey = i;
                    return false;
                }

                return true;
            });

            return defaultActiveKey == null ? 0 : defaultActiveKey;
        }

        React.Children.forEach(children, function (child) {
            if (defaultActiveKey == null) {
                defaultActiveKey = child.props.eventKey;
            }
        });

        return defaultActiveKey;
    }

    handleClick(key, disabled, e) {
        e.preventDefault();
        let activeKey = this.state.activeKey;

        if (disabled) {
            return null;
        }

        if (this.props.onSelect) {
            this.props.onSelect(key);
        }

        if (activeKey !== key) {
            this.setState({
                activeKey: key,
                previousActiveKey: activeKey,
            });
        }
    }

    renderNav() {
        let activeKey = this.state.activeKey;

        return React.Children.map(this.props.children, function (child, index) {
            let key = child.props.key || child.props.eventKey || index;
            let disabled = child.props.disabled;

            return (
                <NavItem
                    href="#"
                    ref={'ref' + key}
                    key={key}
                    onClick={this.handleClick.bind(this, key, disabled)}
                    active={child.props.eventKey === activeKey}
                    disabled={disabled}>
                    {child.props.title}
                </NavItem>
            );
        }.bind(this));
    }

    renderTabPanels() {
        let activeKey = this.state.activeKey;

        return React.Children.map(this.props.children, function (child, index) {
            return (
                <TabsItem
                    active={child.props.eventKey === activeKey}
                    key={child.props.key ? child.props.key : index}>
                    {child.props.children}
                </TabsItem>
            );
        });
    }

    // for Amaze UI tabs widget
    renderData() {
        let activeKey = this.state.activeKey;
        let navs = [];
        let panels = [];

        this.props.data.forEach(function (item, key) {
            navs.push(
                <NavItem
                    href="#"
                    ref={'ref' + key}
                    key={key}
                    onClick={this.handleClick.bind(this, key, item.disabled)}
                    active={key === activeKey}
                    disabled={item.disabled}>
                    {item.title}
                </NavItem>);

            panels.push(
                <TabsItem
                    eventKey={key}
                    // active={item.active}
                    active={key === activeKey}
                    key={key}>
                    {item.content}
                </TabsItem>
            );
        }.bind(this));

        return {
            navs: navs,
            panels: panels,
        };
    }

    renderWrapper(children) {
        let classSet = this.getClassSet();
        let props = omit(this.props, 'data');

        return (
            <div
                {...props}
                data-ui-widget={this.props.theme ? this.props.classPrefix : null}
                className={classNames(classSet, this.props.className)}>
                {children}
            </div>
        );
    }

    renderNavWrapper(children) {
        let TabsNav = this.props.theme ? 'ul' : Nav;

        return (
            <TabsNav
                key="tabsNav"
                tabs
                className={classNames(this.prefixClass('nav'),
          this.setClassNamespace('cf'))}
                justify={this.props.justify}>
                {children}
            </TabsNav>
        );
    }

    renderBodyWrapper(children) {
        let animationClass = this.prefixClass(this.props.animation);

        return (
            <div
                key="tabsBody"
                className={classNames(this.prefixClass('bd'), animationClass)}>
                {children}
            </div>);
    }

    render() {
        let children = this.props.data ? this.renderData() : {};

        return this.renderWrapper([
            this.renderNavWrapper(children.navs || this.renderNav()),
            this.renderBodyWrapper(children.panels || this.renderTabPanels()),
        ]);
    }
}

Tabs.displayName = "Tabs";

Tabs.propTypes = {
    theme: React.PropTypes.oneOf(['default', 'd2']),
    onSelect: React.PropTypes.func,
    animation: React.PropTypes.oneOf(['slide', 'fade']),
    defaultActiveKey: React.PropTypes.any,
    justify: React.PropTypes.bool,
    data: React.PropTypes.array,
};

Tabs.defaultProps = {
    classPrefix: 'tabs',
    animation: 'fade',
};

module.exports = Tabs;

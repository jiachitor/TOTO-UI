'use strict';

import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import Icon from './icon.jsx';
import AvgGrid from './avgGrid.jsx';
import omit from 'object.omit';

class Menu extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.state={
            data: this.props.data,
            expanded: !this.isDropdown(),
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleParentClick = this.handleParentClick.bind(this);
        this.closeAll = this.closeAll.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.isDropdown = this.isDropdown.bind(this);
        this.renderMenuToggle = this.renderMenuToggle.bind(this);
        this.renderNavs = this.renderNavs.bind(this);
    }

    handleClick(nav, index, closeAll, e) {
        if (nav && nav.subMenu) {
            this.handleParentClick(nav, index, closeAll, e);
        }

        this.props.onSelect.call(this, nav, index, e);
    }

    /**
     * handle nav with subMenu click
     * @param {object} nav - clicked nav
     * @param {number} index - clicked nav index
     * @param {bool} closeAll - close all submenu
     * @param {object} e
     */
    handleParentClick(nav, index, closeAll, e) {
        e && e.preventDefault();

        let data = this.state.data.map(function(item, i) {
            item.subActive = closeAll ? false :
                (index === i) ? !item.subActive : false;
            return item;
        });

        this.setState({
            data: data,
        });
    }

    closeAll() {
        this.handleParentClick(null, null, true, undefined);
    }

    // handle toggle button click for dropdown/slide theme
    handleToggle(e) {
        e && e.preventDefault();
        this.setState({
            expanded: !this.state.expanded,
        }, function() {
            !this.state.expanded && this.closeAll();
        }.bind(this));
    }

    isDropdown() {
        return ['dropdown1', 'dropdown2', 'slide1'].indexOf(this.props.theme) > -1;
    }
    renderMenuToggle() {
        let title = this.props.toggleTitle ? (
            <span className={this.prefixClass('toggle-title')}>
        {this.props.toggleTitle}
      </span>
        ) : null;
        let icon = this.props.toggleCustomIcon ? (
            <img src={this.props.toggleCustomIcon} alt="Menu Toggle"/>
        ) : (
            <Icon
                className={this.prefixClass('toggle-icon')}
                icon={this.props.toggleIcon || 'bars'}/>
        );

        return (
            <a
                href="#"
                onClick={this.handleToggle}
                className={classNames(this.prefixClass('toggle'),
        this.state.expanded ? this.setClassNamespace('active') : null)}>
                {title}
                {icon}
            </a>);
    }

    renderNavs() {
        let _this = this;
        let openClassName = this.setClassNamespace('open');
        let inClassName = this.setClassNamespace('in');

        return this.state.data.map(function(nav, i) {
            return (
                <li
                    key={i}
                    className={classNames(nav.subMenu ?
          _this.setClassNamespace('parent') : null,
          nav.subActive ? openClassName : null)}>
                    <a
                        onClick={_this.handleClick.bind(_this, nav, i, false)}
                        href={nav.link}>
                        {nav.title}
                    </a>
                    {nav.subMenu ? (
                        <AvgGrid
                            sm={nav.subCols || 1}
                            className={classNames(_this.prefixClass('sub'),
              _this.setClassNamespace('collapse'),
              nav.subActive ? inClassName : null)}>
                            {nav.subMenu.map(function(subNav, index) {
                                return (
                                    <li key={index}>
                                        <a
                                            onClick={_this.handleClick.bind(_this, subNav,
                      [i, index], false)}
                                            target={subNav.target}
                                            href={subNav.link}>
                                            {subNav.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </AvgGrid>
                    ) : null}
                </li>
            );
        });
    }

    render() {
        let classSet = this.getClassSet();
        let props = omit(this.props, 'data');
        let hideTopLevel = !this.state.expanded ?
            this.setClassNamespace('collapse') : null;

        return (
            <nav
                {...props}
                data-am-widget={this.props.classPrefix}
                className={classNames(this.props.className, classSet)}>
                {this.renderMenuToggle()}
                <AvgGrid
                    sm={this.props.cols}
                    className={classNames(this.prefixClass('nav'), hideTopLevel)}>
                    {this.renderNavs()}
                </AvgGrid>
            </nav>
        );
    }
}

Menu.displayName = "Menu";

Menu.propTypes = {
    classPrefix: React.PropTypes.string,
    theme: React.PropTypes.oneOf(['default', 'dropdown1', 'dropdown2',
        'slide1', 'stack']),
    data: React.PropTypes.array,
    onSelect: React.PropTypes.func,
    toggleTitle: React.PropTypes.string,
    toggleCustomIcon: React.PropTypes.string,
    toggleIcon: React.PropTypes.string,
    cols: React.PropTypes.number,
};

Menu.defaultProps = {
    classPrefix: 'menu',
    theme: 'default',
    data: [],
    onSelect: function() {},
};

module.exports = Menu;

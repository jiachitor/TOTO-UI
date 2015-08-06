'use strict';

import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import Icon from './icon';
import omit from 'object.omit';

class Header extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.renderTitle = this.renderTitle.bind(this);
        this.renderNav = this.renderNav.bind(this);
    }

    renderTitle() {
        return this.props.title ? (
            <h1
                className={this.prefixClass('title')}
                onClick={this.props.onSelect.bind(this, {
          title: this.props.title,
          link: this.props.link,
        })}>
                {this.props.link ? (
                    <a href={this.props.link}>
                        {this.props.title}
                    </a>
                ) : this.props.title}
            </h1>
        ) : null;
    }

    renderNav(position) {
        let data = this.props.data;
        let renderItem = function(item, i) {
            return (
                <a href={item.link}
                   onClick={this.props.onSelect.bind(this, item)}
                   key={'headerNavItem' + i}>
                    {item.title ? (
                        <span className={this.prefixClass('nav-title')}>
              {item.title}
            </span>
                    ) : null}

                    {item.customIcon ? (
                        <img src={item.customIcon} alt={item.title || null}/>
                    ) : item.icon ? (
                        <Icon
                            className={this.prefixClass('icon')}
                            icon={item.icon}/>
                    ) : null}
                </a>
            );
        }.bind(this);

        return data && data[position] ? (
            <div
                className={classNames(this.prefixClass('nav'),
        this.prefixClass(position))}>
                {data[position].map(function(item, i) {
                    return renderItem(item, i);
                })}
            </div>
        ) : null;
    }

    render() {
        let classSet = this.getClassSet();

        // am-header-fixed: fixed header
        classSet[this.prefixClass('fixed')] = this.props.fixed;

        return (
            <header
                {...omit(this.props, ['data', 'title'])}
                data-am-widget={this.props.classPrefix}
                className={classNames(this.props.className, classSet)}>
                {this.renderNav('left')}
                {this.renderTitle()}
                {this.renderNav('right')}
            </header>
        );
    }
}

Header.displayName = "Header";

Header.propTypes = {
    classPrefix: React.PropTypes.string,
    theme: React.PropTypes.oneOf(['default']),
    data: React.PropTypes.object,
    fixed: React.PropTypes.bool,
    title: React.PropTypes.node,
    link: React.PropTypes.string,
    onSelect: React.PropTypes.func,
};

Header.defaultProps = {
    classPrefix: 'header',
    theme: 'default',
    onSelect: function() {},
};

module.exports = Header;

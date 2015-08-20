'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import Icon from './icon.jsx';
import omit from 'object.omit';

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
    }

    render() {
        let classSet = this.getClassSet();
        let props = omit(this.props, 'data');

        return (
            <div
                {...props}
                data-am-widget={this.props.classPrefix}
                cf
                className={classNames(this.props.className, classSet)}>
                <ul className={this.prefixClass('nav')}>
                    {this.props.data.map(function(item, i) {
                        return (
                            <li key={i}
                                onTouchStart={this.props.onSelect.bind(this, item.link)}>
                                <a href={item.link}>
                                    {item.customIcon ? (
                                        <img src={item.customIcon} alt={item.title}/>
                                    ) : item.icon ? (
                                        <Icon icon={item.icon}/>
                                    ) : null}

                                    {item.title ? (
                                        <span className={this.prefixClass('label')}>
                    {item.title}
                  </span>
                                    ) : null}
                                </a>
                            </li>
                        );
                    }.bind(this))}
                </ul>
            </div>
        );
    }
}

Navbar.displayName = "Navbar";

Navbar.propTypes = {
    classPrefix: React.PropTypes.string,
    theme: React.PropTypes.oneOf(['default']),
    data: React.PropTypes.array,
    onSelect: React.PropTypes.func,
};

Navbar.defaultProps = {
    classPrefix: 'navbar',
    theme: 'default',
    data: [],
    onSelect: function() {},
};

module.exports = Navbar;

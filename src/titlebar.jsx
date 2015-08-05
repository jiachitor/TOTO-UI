'use strict';

import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import omit from 'object.omit';

class Titlebar extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
    }
    render() {
        let classSet = this.getClassSet();
        let props = omit(this.props, ['classPrefix', 'nav', 'theme']);

        return (
            <div
                {...props}
                data-am-widget={this.props.classPrefix}
                className={classNames(this.props.className, classSet)}>
                <h2 className={this.prefixClass('title')}>
                    {this.props.href ? (
                        <a href={this.props.href}>
                            {this.props.title}
                        </a>
                    ) : this.props.title}
                </h2>
                {this.props.nav ? (
                    <nav className={this.prefixClass('nav')}>
                        {this.props.nav.map(function(item, i) {
                            return (
                                <a href={item.link} key={i}>
                                    {item.title}
                                </a>);
                        })}
                    </nav>
                ) : null}
            </div>
        );
    }
}

Titlebar.displayName = "Titlebar";

Titlebar.propTypes = {
    classPrefix: React.PropTypes.string,
    theme: React.PropTypes.oneOf(['default', 'multi', 'cols']),
    nav: React.PropTypes.array,
    title: React.PropTypes.node,
};

Titlebar.defaultProps = {
    classPrefix: 'titlebar',
    theme: 'default',
    data: [],
};

module.exports = Titlebar;

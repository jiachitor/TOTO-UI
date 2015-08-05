'use strict';

import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';

class DropdownItem extends React.Component{

    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
    }

    render () {
        let classSet = this.getClassSet();
        let children = null;

        classSet[this.setClassNamespace('dropdown-header')] = this.props.header;

        if (this.props.header) {
            children = this.props.children;
        } else if (!this.props.divider) {
            children = (
                <a
                    onClick={this.handleClick}
                    href={this.props.href}
                    target={this.props.target}
                    title={this.props.title}>
                    {this.props.children}
                </a>
            );
        }

        return (
            <li
                {...this.props}
                title={null}
                href={null}
                className={classNames(this.props.className, classSet)}>
                {children}
            </li>
        );
    }
}

DropdownItem.displayName = "DropdownItem";

DropdownItem.propTypes = {
    href: React.PropTypes.string,
    target: React.PropTypes.string,
    title: React.PropTypes.string,
    header: React.PropTypes.bool,
    divider: React.PropTypes.bool,
};

DropdownItem.defaultProps = {
    classPrefix: 'dropdown',
    contentTag: 'ul',
};

module.exports = DropdownItem;


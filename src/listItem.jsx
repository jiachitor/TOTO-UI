'use strict';

import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';

class ListItem extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.renderAnchor = this.renderAnchor.bind(this);
    }

    renderAnchor(classes) {
        let props = this.props;
        let Component = props.componentTag;
        let truncate = props.truncate ? 'am-text-truncate' : '';

        return (
            <Component
                {...props}
                className={classNames(classes, this.props.className)}>
                <a
                    className={truncate}
                    href={this.props.href}
                    title={this.props.title}
                    target={this.props.target}>
                    {this.props.children}
                </a>
            </Component>
        );
    }

    render() {
        let classes = {};
        let Component = this.props.componentTag;

        // set .am-text-truncate
        classes['am-text-truncate'] = this.props.truncate;

        // render Anchor
        if (this.props.href) {
            return this.renderAnchor(classes);
        }

        return (
            <Component
                {...this.props}
                className={classNames(classes, this.props.className)}>
                {this.props.children}
            </Component>
        );
    }
}

ListItem.displayName = "ListItem";

ListItem.propTypes = {
    href: React.PropTypes.string,
    truncate: React.PropTypes.bool,
    componentTag: React.PropTypes.node.isRequired,
};

ListItem.defaultProps = {
    componentTag: 'li',
};

module.exports = ListItem;

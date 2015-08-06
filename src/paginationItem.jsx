'use strict';
import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';

class PaginationItem extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
          this[v] = ClassNameMixin[v].bind(this);
        }
    }
    render() {
        let Component = this.props.componentTag;
        let classSet = this.getClassSet(true);
        let props = this.props;

        // .am-pagination-prev
        classSet[this.prefixClass('prev')] = props.prev;

        // .am-pagination-next
        classSet[this.prefixClass('next')] = props.next;

        return (
            <Component
                {...this.props}
                className={classNames(classSet, this.props.className)}>
                <a
                    href={this.props.href}
                    title={this.props.title}
                    target={this.props.target}
                    ref="anchor">
                    {this.props.children}
                </a>
            </Component>
        );
    }
}

PaginationItem.displayName = "PaginationItem";

PaginationItem.propTypes = {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    prev: React.PropTypes.bool,
    next: React.PropTypes.bool,
    href: React.PropTypes.string,
    componentTag: React.PropTypes.node.isRequired,
};

PaginationItem.defaultProps = {
    classPrefix: 'pagination',
    href: '#',
    componentTag: 'li',
};

module.exports = PaginationItem;

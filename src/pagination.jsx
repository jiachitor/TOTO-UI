'use strict';
import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import PaginationItem from './paginationItem.jsx';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.renderItem = this.renderItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderPages = this.renderPages.bind(this);
    }

    renderItem(type) {
        let data = this.props.data;

        return data && data[type + 'Title'] && data[type + 'Link'] ? (
            <PaginationItem
                onClick={this.props.onSelect &&
        this.props.onSelect.bind(this, data[type + 'Link'])}
                key={type}
                href={data[type + 'Link']}
                className={this.prefixClass(type)}>
                {data[type + 'Title']}
            </PaginationItem>
        ) : null;
    }

    handleChange(e) {
        if (this.props.onSelect) {
            let select = React.findDOMNode(this.refs.select);

            this.props.onSelect.call(this, select && select.value, e);
        }
    }

    renderPages() {
        let data = this.props.data;

        if (data.pages) {
            return this.props.theme === 'select' ? (
                <li className={this.prefixClass('select')}>
                    <select
                        onChange={this.handleChange}
                        ref="select">
                        {data.pages.map(function (page, i) {
                            return (
                                <option value={page.link} key={i}>
                                    {page.title} / {data.pages.length}
                                </option>
                            );
                        })}
                    </select>
                </li>
            ) : (
                data.pages.map(function (page, i) {
                    return (
                        <PaginationItem
                            key={i}
                            onClick={this.props.onSelect &&
                this.props.onSelect.bind(this, page.link)}
                            active={page.active}
                            disabled={page.disabled}
                            href={page.link}>
                            {page.title}
                        </PaginationItem>);
                }.bind(this)));
        }
    }

    render() {
        let props = this.props;
        let Component = props.componentTag;
        let classSet = this.getClassSet();
        let notSelect = props.theme !== 'select';

        // .am-pagination-right
        classSet[this.prefixClass('right')] = props.right;

        // .am-pagination-centered
        classSet[this.prefixClass('centered')] = props.centered;

        return props.data ? (
            <Component
                {...props}
                className={classNames(classSet, props.className)}>
                {notSelect && this.renderItem('first')}
                {this.renderItem('prev')}
                {this.renderPages()}
                {this.renderItem('next')}
                {notSelect && this.renderItem('last')}
            </Component>
        ) : (
            <Component
                {...props}
                className={classNames(classSet, props.className)}>
                {this.props.children}
            </Component>
        );
    }
}

Pagination.displayName = "Pagination";

Pagination.propTypes = {
    componentTag: React.PropTypes.node.isRequired,
    centered: React.PropTypes.bool,
    right: React.PropTypes.bool,
    theme: React.PropTypes.oneOf(['default', 'select']),
    data: React.PropTypes.object,
    onSelect: React.PropTypes.func,
};

Pagination.defaultProps = {
    classPrefix: 'pagination',
    componentTag: 'ul',
};

module.exports = Pagination;

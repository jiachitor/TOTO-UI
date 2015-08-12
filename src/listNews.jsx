'use strict';

import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import Button from './button.jsx';
import Col from './col.jsx';

class ListNews extends React.Component {

    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.renderHeader = this.renderHeader.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.getListItemClasses = this.getListItemClasses.bind(this);
        this.renderBody = this.renderBody.bind(this);
        this.renderList = this.renderList.bind(this);
        this.renderItemMisc = this.renderItemMisc.bind(this);
        this.renderItemThumb = this.renderItemThumb.bind(this);
        this.renderItemMain = this.renderItemMain.bind(this);

        this._onItemMainClick = this._onItemMainClick.bind(this);
        this._onMoreClick = this._onMoreClick.bind(this);
    }

    renderHeader() {
        let data = this.props.data;

        return data && data.header && data.header.title ? (
            <div
                className={classNames(this.prefixClass('hd'),
              this.setClassNamespace('cf'))}>
                        {data.header.link ? (
                            <a href={data.header.link} onClick={this._onMoreClick}>
                                <h2>{data.header.title}</h2>
                                {this.props.morePosition === 'top' ? (
                                    <span
                                        className={classNames(this.prefixClass('more'),
                      this.setClassNamespace('fr'))}>
                    {this.props.moreTextTitle}
                      {this.props.moreText}
                    </span>
                                ) : null}
                            </a>
                        ) : (<h2>{data.header.title}</h2>)}
                    </div>
                ) : null;
    }

    // `more` on bottom
    renderFooter() {
        return this.props.morePosition === 'bottom' &&
        this.props.data.header.link ? (
            <div className={this.prefixClass('ft')}>
                <Button
                    className={this.prefixClass('more')}
                    href={this.props.data.header.link}
                    onClick={this._onMoreClick}>
                    {this.props.moreTextTitle}
                    {this.props.moreText}
                </Button>
            </div>
        ) : null;
    }

    getListItemClasses(item) {
        return classNames(
            this.setClassNamespace('g'),
            item.date ? this.setClassNamespace('list-item-dated') : false,
            item.desc ? this.setClassNamespace('list-item-desced') : false,
            item.img ? this.setClassNamespace('list-item-thumbed') : false,
            this.props.thumbPosition ? this.setClassNamespace('list-item-thumb-' +
                this.props.thumbPosition) : false
        );
    }

    renderBody(children) {
        return (
            <div className={this.prefixClass('bd')}>
                <ul className={this.setClassNamespace('list')}>
                    {children}
                </ul>
            </div>
        );
    }

    renderList() {
        let position = this.props.thumbPosition;
        let orderChildren = function (item, i) {
            let thumb = this.renderItemThumb(item, i);
            let main = this.renderItemMain(item, i);

            return (position === 'right' || position === 'bottom-right') ?
                [main, thumb] : [thumb, main];
        }.bind(this);

        return (this.props.data.main.map(function (item, i) {
            return (
                <li
                    key={i}
                    className={this.getListItemClasses(item)}>
                    {position === 'bottom-left' || position === 'bottom-right' ?
                        this.renderThumbItemTitle(item) : null}

                    {orderChildren(item, i)}
                </li>
            );
        }.bind(this)));
    }

    renderItemMisc(item, type) {
        let Tag = type === 'date' ? 'span' : 'div';
        let className;

        switch (type) {
            case 'date':
                className = 'list-date';
                break;
            case 'desc':
                className = 'list-item-text';
                break;
            case 'mainAddition':
                className = 'list-news-addon';
                break;
            case 'thumbAddition':
                className = 'list-thumb-addon';
        }

        return item[type] ? (
            <Tag className={this.setClassNamespace(className)}>
                {item[type]}
            </Tag>
        ) : null;
    }

    //略缩图
    renderItemThumb(item, i) {
        let cols = this.props.thumbPosition === 'top' ? 12 : 4;

        return item.img ? (<Col
            key={'thumb' + i}
            sm={cols}
            className={this.setClassNamespace('list-thumb')}>
            <a href={item.link}>
                <img src={item.img} alt={item.title}/>
            </a>
            {this.renderItemMisc(item, 'thumbAddition')}
        </Col>) : null;
    }

    //主要的列表
    renderItemMain(item, i) {

        let position = this.props.thumbPosition;
        let date = this.renderItemMisc(item, 'date');
        let desc = this.renderItemMisc(item, 'desc');
        let addon = this.renderItemMisc(item, 'mainAddition');

        // title of list without thumbnail
        let itemWithoutThumbTitle = !position && item.title ? (
            <a
                key={'title' + i}
                className={this.setClassNamespace('list-item-hd')}
                href={item.link}>
                {item.title}
            </a>
        ) : null;
        let cols = position === 'top' ? 12 : item.img ? 8 : 12;

        return position ? (
            <Col
                sm={cols}
                className={this.setClassNamespace('list-main')}
                key={'itemMain' + i}>
                {position !== 'bottom-left' && position !== 'bottom-right' ?
                    this.renderThumbItemTitle(item) : null}
                {desc}
                {date}
                {addon}
            </Col>
        ) : [itemWithoutThumbTitle, date, desc, addon];
    }

    //文章标题
    renderThumbItemTitle(item) {
        let onItemMainClick = this._onItemMainClick.bind(this, item);
        return item.title ? (
            <h3 className={this.setClassNamespace('list-item-hd')}>
                <a
                    href={item.link}
                    onClick={onItemMainClick}>
                    {item.title}
                </a>
            </h3>
        ) : null;
    }

    _onItemMainClick(item, e ) {
        if (this.props.onClick) {
            e.stopPropagation();
            e.preventDefault();
            this.props.onClick(item, e);
        }
    }

    _onMoreClick(e) {
        if (this.props.onClickMore) {
            e.stopPropagation();
            e.preventDefault();
            this.props.onClickMore(e);
        }
    }

    render() {
        let classSet = this.getClassSet();

        return (
            <div
                {...this.props}
                data-am-widget={this.props.classPrefix}
                className={classNames(this.props.className, classSet)}>
                {this.props.header || this.renderHeader()}
                {this.renderBody(
                    this.renderList()
                )}
                {this.props.footer || this.renderFooter()}
            </div>
        );
    }
}

ListNews.displayName = "ListNews";

ListNews.propTypes = {
    classPrefix: React.PropTypes.string,
    theme: React.PropTypes.oneOf(['default']),
    data: React.PropTypes.object,
    header: React.PropTypes.node,
    footer: React.PropTypes.node,
    morePosition: React.PropTypes.oneOf(['top', 'bottom']),
    moreText: React.PropTypes.string,
    thumbPosition: React.PropTypes.oneOf(['top', 'left', 'right', 'bottom-left',
        'bottom-right']),
};

ListNews.defaultProps = {
    classPrefix: 'list-news',
    theme: 'default',
    moreText: ' \u00BB',
};

module.exports = ListNews;

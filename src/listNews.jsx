'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
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
                            <a href={data.header.link} onTouchTap={this._onMoreClick}>
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
        let showMore = this.props.showFooterMore ? "block" : "none";
        return this.props.morePosition === 'bottom' &&
        this.props.data.header.link ? (
            <div className={this.prefixClass('ft')} style={{display:showMore}}>
                <Button
                    className={this.prefixClass('more')}
                    href={this.props.data.header.link}
                    onTouchTap={this._onMoreClick}>
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

    //生成列表主题
    renderList() {
        let position = this.props.thumbPosition;  //定义略缩图位置

        let orderChildren = function (item, i) {
            let thumb = this.renderItemThumb(item, i); //生成略缩图
            let main = this.renderItemMain(item, i);  //生成主题内容
            //也就是说，图片默认位置为“left”,"bottom-left".
            //注意这里生成的main ,还需要判断是否需要再生成标题。判断为"left","right"的情况下才生成标题
            return (position === 'right' || position === 'bottom-right') ?
                [main, thumb] : [thumb, main];
        }.bind(this);

        //判断略缩图，如果在标题下面的话，则生成H3 标题。 如果标题和略缩图平级，则不生成顶部标题。
        return (this.props.data.main.map(function (item, i) {
            return (
                <li
                    key={i}
                    className={this.getListItemClasses(item)}>
                    {position === 'bottom-left' || position === 'bottom-right' ? this.renderThumbItemTitle(item) : null}
                    {orderChildren(item, i)}
                </li>
            );
        }.bind(this)));
    }

    //根据传入data 中的 tag 生成相对应的标签，只生成用于展示的标签部分
    renderItemMisc(item, type) {
        let Tag = type === 'date' ? 'span' : 'div';
        let className;

        switch (type) {
            case 'date':
                //日期
                className = 'list-date';
                break;
            case 'desc':
                //详情描述
                className = 'list-item-text';
                break;
            case 'mainAddition':
                //生成主要内容
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

    //生成功能按钮
    renderItemBtn(item, type){

        let className, eventName;

        switch (type) {
            case 'delete':
                //日期
                className = 'list-btn-delete';
                eventName = '_onTouchTapDelete';
                break;
        }

        return item[type] ? (
            <a href="##"
               className={this.setClassNamespace(className)}
               onTouchTap={this[eventName].bind(this, item)}>
                {item[type]}
            </a>
        ) : null;
    }

    //略缩图
    renderItemThumb(item, i) {
        let cols = this.props.thumbPosition === 'top' ? 12 : 4;

        return item.img ? (<Col
            key={'thumb' + i}
            sm={cols}
            className={this.setClassNamespace('list-thumb')}>
            <a href={item.link} onTouchTap={this._onItemMainClick.bind(this, item)} >
                <img src={item.img} alt={item.title}/>
            </a>
            {this.renderItemMisc(item, 'thumbAddition')}
        </Col>) : null;
    }

    //主要的列表
    renderItemMain(item, i) {

        let position = this.props.thumbPosition;  //略缩图的位置
        let date = this.renderItemMisc(item, 'date');  //生成日期
        let desc = this.renderItemMisc(item, 'desc');  //生成标题
        let addon = this.renderItemMisc(item, 'mainAddition');  //生成主要内容
        let deleteFn = this.renderItemBtn(item, 'delete');  //生成主要内容

        // 如果没有设置 position 值，则不生成略缩图
        let itemWithoutThumbTitle = !position && item.title ? (
            <a
                key={'title' + i}
                className={this.setClassNamespace('list-item-hd')}
                href={item.link}>
                {item.title}
            </a>
        ) : null;

        //其实这里是生成栅格的，但是不需要怎么办
        // top 的话就是 12， 其余的看是否有图片，有图片的就是8， 没有的话就是12
        let cols = position === 'top' ? 12 : item.img ? 8 : 12;

        //有略缩图的话就生成略缩图，没有的话只生成标题等
        return position ? (
            <Col
                sm={cols}
                className={this.setClassNamespace('list-main')}
                key={'itemMain' + i}>
                {position !== 'bottom-left' && position !== 'bottom-right' ? this.renderThumbItemTitle(item) : null}
                {desc}
                {date}
                {addon}
                <div className={this.setClassNamespace('list-btn')}>
                    {deleteFn}
                </div>
            </Col>
        ) : [itemWithoutThumbTitle, date, desc, addon];
    }

    //图片在标题下面时（”bottom- “），生成文章标题
    renderThumbItemTitle(item) {
        return item.title ? (
            <h3 className={this.setClassNamespace('list-item-hd')}>
                <a
                    href={item.link}
                    onTouchTap={this._onItemMainClick.bind(this, item)}>
                    {item.title}
                </a>
            </h3>
        ) : null;
    }

    //文章点击事件
    _onItemMainClick(item, e ) {
        if (this.props.onTouchTapTitle) {
            e.stopPropagation();
            e.preventDefault();
            this.props.onTouchTapTitle(item, e);
        }
    }

    //more 按钮点击事件
    _onMoreClick(e) {
        if (this.props.onTouchTapMore) {
            e.stopPropagation();
            e.preventDefault();
            this.props.onTouchTapMore(e);
        }
    }

    _onTouchTapDelete(item,e){
        if (this.props.onTouchTapDelete) {
            e.stopPropagation();
            e.preventDefault();
            this.props.onTouchTapDelete(item,e);
        }
    }

    render() {
        let classSet = this.getClassSet();

        return (
            <div
                {...this.props}
                data-widget={this.props.classPrefix}
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

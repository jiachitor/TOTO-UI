import React from 'react';
import Pagination from '../../../../../src/pagination.jsx';
import PaginationItem from '../../../../../src/paginationItem.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        /*
         <Pagination>: 为外层容器，对应 .am-pagination ，默认渲染 <ul> 标签。属性说明：

         componentTag: string 可以接受 ol 字符串，渲染 <ol> 标签
         centered: bool 居中对齐
         right: bool 右对齐
         <PaginationItem>: 子组件，渲染 <li> 标签。属性说明：

         active: bool 激活当前子组件
         disabled: bool 禁用当前子组件
         prev: bool 子组件居左对齐
         next: bool 子组件居右对齐
         href: string 添加 url 地址
        * */

        //基本使用
        var PaginationInstance1 = (
            <div>
                <Pagination>
                    <PaginationItem disabled href="#">&laquo;</PaginationItem>
                    <PaginationItem active>1</PaginationItem>
                    <PaginationItem href="http://www.amazeui.org">2</PaginationItem>
                    <PaginationItem href="#">3</PaginationItem>
                    <PaginationItem href="#">4</PaginationItem>
                    <PaginationItem href="#">5</PaginationItem>
                    <PaginationItem href="#">&raquo;</PaginationItem>
                </Pagination>

                <hr />

                <Pagination>
                    <PaginationItem href="#">&laquo; Prev</PaginationItem>
                    <PaginationItem href="#">Next &raquo;</PaginationItem>
                </Pagination>
            </div>
        );


        /*-------------------------------------------------------------------------*/
        //居中对齐：
        var PaginationInstance2 = (
            <Pagination centered>
                <PaginationItem disabled href="#">&laquo;</PaginationItem>
                <PaginationItem active>1</PaginationItem>
                <PaginationItem href="#">2</PaginationItem>
                <PaginationItem href="#">3</PaginationItem>
                <PaginationItem href="#">4</PaginationItem>
                <PaginationItem href="#">5</PaginationItem>
                <PaginationItem href="#">&raquo;</PaginationItem>
            </Pagination>
        );


        /*-------------------------------------------------------------------------*/
        //右对齐
        var PaginationInstance3 = (
            <Pagination right>
                <PaginationItem disabled href="#">&laquo;</PaginationItem>
                <PaginationItem active>1</PaginationItem>
                <PaginationItem href="#">2</PaginationItem>
                <PaginationItem href="#">3</PaginationItem>
                <PaginationItem href="#">4</PaginationItem>
                <PaginationItem href="#">5</PaginationItem>
                <PaginationItem href="#">&raquo;</PaginationItem>
            </Pagination>
        );


        /*-------------------------------------------------------------------------*/
        //左右分布
        var PaginationInstance4 = (
            <Pagination>
                <PaginationItem prev href="#">&laquo; Prev</PaginationItem>
                <PaginationItem next href="#">Next &raquo;</PaginationItem>
            </Pagination>
        );



        /*-------------------------------------------------------------------------*/
        //使用数据渲染
        var data5 = {
            prevTitle: '上一页',
            prevLink: '?prev',
            nextTitle: '下一页',
            nextLink: '?next',
            firstTitle: '第一页',
            firstLink: '?first',
            lastTitle: '最末页',
            lastLink: '?last',
            pages: [
                {
                    title: '1',
                    link: '#1'
                },
                {
                    title: '2',
                    link: '#2',
                    active: true
                },
                {
                    title: '3',
                    link: '#3'
                },
                {
                    title: '4',
                    link: '#4'
                },
                {
                    title: '5',
                    link: '#5'
                }
            ]
        };

        var handleSelect5 = function(link, e) {
            e.preventDefault();
            console.log('你点击了', link);
        };

        var PaginationInstance5 = (
            <Pagination
                onSelect={handleSelect5}
                theme="default" data={data5} />
        );



        /*-------------------------------------------------------------------------*/
        var data6 = {
            prevTitle: '上一页',
            prevLink: '#prev',
            nextTitle: '下一页',
            nextLink: '#next',
            pages: [
                {
                    title: '1',
                    link: '?1'
                },
                {
                    title: '2',
                    link: '?2'
                },
                {
                    title: '3',
                    link: '?3'
                },
                {
                    title: '4',
                    link: '?4'
                },
                {
                    title: '5',
                    link: '?5'
                }
            ]
        };

        var selectHandle6 = function(link, e) {
            e.preventDefault();
            console.log('你点击了：', link);
        };

        var PaginationInstance6 = (
            <Pagination
                onSelect={selectHandle6}
                theme="select" data={data6} />
        );




        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <div className="demo_box">{PaginationInstance1}</div>
                    <div className="demo_box">{PaginationInstance2}</div>
                    <div className="demo_box">{PaginationInstance3}</div>
                    <div className="demo_box">{PaginationInstance4}</div>
                    <div className="demo_box">{PaginationInstance5}</div>
                    <div className="demo_box">{PaginationInstance6}</div>
                </div>
            </div>
        );
    }
};

module.exports = Main;

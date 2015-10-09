import React from 'react';
import Navbar from '../../../../../src/navbar.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        /*
        *
        * 组件介绍

         <Navbar> 组件，页面底部导航条（原二维码、响应式、自动收缩为列表功能已不再内容）。

         属性：

         theme: string - 主题名称
         data: array - 数据
         onSelect: func - 点击时的处理函数，第一个参数为点击的链接，第二个参数为 event 对象
         数据格式：

         var data = [
         {
         "title": "", // title 值：要显示的文本
         "link": "", // link 值 ：链接地址，电话则写 "tel:0101245678"
         "customIcon": "", // 自定义图标图片地址
         }
         ];
        *
        * */

        var data = [
            {
                title: '呼叫',
                link: 'tel:123456789',
                icon: 'phone'
            },
            {
                title: 'GitHub',
                link: 'https://github.com/allmobilize/amazeui',
                icon: 'github'
            },
            {
                title: '下载使用',
                link: 'http://amazeui.org/getting-started',
                icon: 'download'
            },
            {
                title: 'Bug 反馈',
                link: 'https://github.com/allmobilize/amazeui/issues',
                icon: 'location-arrow'
            }
        ];

        var handleSelect = function(link, e) {
            e.preventDefault();
            console.log('你点击了：', link);
        };


        var navbar = (
            <div className="demo-1">
                <Navbar onSelect={handleSelect} data={data} />
            </div>
        );

        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <div className="demo_box">{navbar}</div>
                </div>
            </div>
        );
    }
};

module.exports = Main;

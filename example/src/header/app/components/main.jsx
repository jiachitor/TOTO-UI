import React from 'react';
import Header from '../../../../../src/header.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        /*
        * 组件介绍

         <Header> 组件，页面头部。

         属性：

         theme: string - 主题名称
         data: array - 左右厕链接数据
         title: string - 标题
         link: link - 链接
         数据格式：

         var data = {
         "left": [
         {
         "link": "",         // url : http://xxx.xxx.xxx
         "title": "",        // 链接标题
         "icon": "",         // 字体图标名称: 使用 Amaze UI 字体图标 http://www.amazeui.org/css/icon
         "customIcon": ""    // 自定义图标 URL，设置此项后当前链接不再显示 icon
         }
         ],

         "right": [ // 右侧字段含义同左侧
         {
         "link": "",
         "title": "",
         "icon": "",
         "customIcon": ""
         }
         ]
         };
        *
        * */


        var data = {
            "left": [
                {
                    "link": "",         // url : http://xxx.xxx.xxx
                    "title": "",        // 链接标题
                    "icon": "",         // 字体图标名称: 使用 Amaze UI 字体图标 http://www.amazeui.org/css/icon
                    "customIcon": ""    // 自定义图标 URL，设置此项后当前链接不再显示 icon
                }
            ],
            "right": [ // 右侧字段含义同左侧
                {
                    "link": "",
                    "title": "",
                    "icon": "",
                    "customIcon": ""
                }
            ]
        };
        var codeView = JSON.stringify(data, 4, 4);


        /*##########################################################################*/

        var props1 = {
            "title": "Amaze UI",
            "link": "#title-link",
            data: {
                "left": [
                    {
                        "link": "#left-link",
                        "icon": "home"
                    }
                ],
                "right": [
                    {
                        "link": "#right-link",
                        "icon": "bars"
                    }
                ]
            }
        };

        var header1 = (
            <Header {...props1} />
        );


        /*#########################################################################*/


        var cutstomIcon2 = <img src="http://cdn.amazeui.org/assets/i/brand/amazeui-cw.png" />;

        var props2 = {
            title: cutstomIcon2,
            data: {
                left: [
                    {
                        link: "#left-link",
                        icon: "home",
                        customIcon: "data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 20\"><path d=\"M10,0l2,2l-8,8l8,8l-2,2L0,10L10,0z\" fill=\"%23fff\"/></svg>"
                    }
                ],
                right: [
                    {
                        link: "#right-link",
                        customIcon: "data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 42 26\" fill=\"%23fff\"><rect width=\"4\" height=\"4\"/><rect x=\"8\" y=\"1\" width=\"34\" height=\"2\"/><rect y=\"11\" width=\"4\" height=\"4\"/><rect x=\"8\" y=\"12\" width=\"34\" height=\"2\"/><rect y=\"22\" width=\"4\" height=\"4\"/><rect x=\"8\" y=\"23\" width=\"34\" height=\"2\"/></svg>"
                    }
                ]
            }
        };

        var header2 = (
            <Header {...props2} />
        );



        /*#########################################################################*/


        var props3 = {
            "title": "Amaze UI",
            data: {
                "left": [
                    {
                        "link": "#left-link",
                        "title": "首页",
                        "icon": "home"
                    }
                ],
                "right": [
                    {
                        "link": "#right-link",
                        "icon": "bars",
                        "title": "菜单"
                    }
                ]
            }
        };

        var header3 = (
            <Header {...props3} />
        );


        /*#########################################################################*/


        var props4 = {
            title: "Amaze UI",
            data: {
                left: [
                    {
                        link: "#left-link",
                        icon: "home"
                    },
                    {
                        link: "#phone-link",
                        icon: "phone"
                    }
                ],
                right: [
                    {
                        link: "#user-link",
                        icon: "user"
                    },
                    {
                        link: "#cart-link",
                        icon: "shopping-cart"
                    }
                ]
            }
        };


        var header4 = (
            <Header {...props4} />
        );


        return (
            <div className="module">
                <div className="introduce">
                    <pre>{codeView}</pre>
                </div>
                <div className="demos">
                    <div className="demo_box">{header1}</div>
                    <div className="demo_box">{header2}</div>
                    <div className="demo_box">{header3}</div>
                    <div className="demo_box">{header4}</div>
                </div>
            </div>
        );
    }
};

module.exports = Main;

import React from 'react';
import Menu from '../../../../../src/menu.jsx';
import Header from '../../../../../src/header.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        /*
        * 组件介绍

         <Menu> 菜单组件（原策划菜单被移除，暂无动画效果）。

         请将窗口缩小至 640px 以下查看演示。

         属性：

         theme: string - 主题名称， 'default' | 'dropdown1' | 'dropdown2' | 'slide1' | 'stack'；
         data: array - 数据；
         cols: string - 一级菜单列数（对 dropdown1 主题无效）；
         onSelect: func - 点击时的处理函数，第一个参数为点击链接的数据对象，第二个参数为点击链接数据在 data 中的索引，第三个参数为 event 对象。
         针对 'dropdown1' | 'dropdown2' | 'slide1' 主题的属性：

         toggleTitle: string - 触发按钮文字，默认为空；
         toggleIcon: string - 触发按钮名称，默认为 bars。
         数据格式：

         var data = [
         {
         "title": "",            // 一级菜单标题
         "link": "",             // 一级菜单链接
         "subMenu": [
         {                   // 二级菜单
         "title": "",    // 二级菜单标题
         "link": "",     // 二级菜单链接
         "target": ""
         }
         ],
         "subCols": 3            // 设置二级菜单列数
         }
         ];
        *
        *
        * */

        var data = [
            {
                "title": "",            // 一级菜单标题
                "link": "",             // 一级菜单链接
                "subMenu": [
                    {                   // 二级菜单
                        "title": "",    // 二级菜单标题
                        "link": "",     // 二级菜单链接
                        "target": ""
                    }
                ],
                "subCols": 3            // 设置二级菜单列数
            }
        ];
        var codeView = JSON.stringify(data, 4, 4);




        //默认
        var data1=[{link:'##',title:'公司',subCols:2,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'人物',subCols:3,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'#c3',title:'趋势',subCols:4,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'投融资',subCols:3,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}];

        var handleClick1 = function(nav, index, e) {
            if (nav && nav.subMenu) {
                // 有二级菜单的链接点击了
            } else {
                e.preventDefault();
                console.log('点击的链接为：', nav);
                // do something
                // this.closeAll(); //关闭二级菜单
            }
        };

        var menuIntance1 = (
            <div className="demo-1">
                <Menu cols={3} data={data1} onSelect={handleClick1} />
            </div>
        );


        /*##############################################################################*/
        //主题 dropdown1
        var data2=[{link:'##',title:'公司',subCols:2,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'人物',subCols:3,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'#c3',title:'趋势',subCols:4,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'投融资',subCols:3,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}];

        var handleClick2 = function(nav, index, e) {
            if (nav && nav.subMenu) {
                // 有二级菜单的链接点击了
            } else {
                e.preventDefault();
                console.log('点击的链接为：', nav);
                // do something
                // this.handleToggle(); // 关闭整个下拉菜单
            }
        };

        var menuIntance2 = (
            <div>
                <Header title="Menu Demo" />
                <Menu
                    toggleIcon="list"
                    data={data2}
                    theme="dropdown1"
                    onSelect={handleClick2} />
            </div>
        );


        /*##############################################################################*/
        //主题 dropdown2
        var data3=[{link:'##',title:'公司',subCols:2,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'人物',subCols:3,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'#c3',title:'趋势',subCols:4,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'投融资',subCols:3,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}];

        var handleClick3 = function(nav, index, e) {
            if (nav && nav.subMenu) {
                // 有二级菜单的链接点击了
            } else {
                e.preventDefault();
                console.log('点击的链接为：', nav);
                // do something
                // this.handleToggle(); // 关闭整个下拉菜单
            }
        };

        var menuIntance3 = (
            <div>
                <Header title="Menu Demo" />
                <Menu
                    cols={3}
                    data={data3} theme="dropdown2"
                    onSelect={handleClick3} />
            </div>
        );


        /*##############################################################################*/
        //主题 slide1
        var data4=[{link:'##',title:'公司',subCols:2,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'人物',subCols:3,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'#c3',title:'趋势',subCols:4,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'投融资',subCols:3,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}];

        var handleClick4 = function(nav, index, e) {
            if (nav && nav.subMenu) {
                // 有二级菜单的链接点击了
            } else {
                e.preventDefault();
                console.log('点击的链接为：', nav);
                // do something
                // this.handleToggle(); // 关闭整个下拉菜单
            }
        };

        var menuIntance4 = (
            <div>
                <Header title="Menu Demo" />
                <Menu cols={3} data={data4} theme="slide1" onSelect={handleClick4} />
            </div>
        );


        /*##############################################################################*/

        //主题 stack
        var data5=[{link:'##',title:'公司',subCols:2,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'人物',subCols:3,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'#c3',title:'趋势',subCols:4,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'投融资',subCols:3,subMenu:[{link:'##',title:'公司'},{link:'##',title:'人物'},{link:'##',title:'趋势'},{link:'##',title:'投融资'},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}]},{link:'##',title:'创业公司'},{link:'##',title:'创业人物'}];

        var handleClick5 = function(nav, index, e) {
            if (nav && nav.subMenu) {
                // 有二级菜单的链接点击了
            } else {
                e.preventDefault();
                console.log('点击的链接为：', nav);
                // do something
                // this.closeAll(); // 关闭所有展开的二级菜单
            }
        };

        var menuIntance5 = (
            <div>
                <Menu
                    data={data5}
                    theme="stack"
                    onSelect={handleClick5} />
            </div>
        );


        return (
            <div className="module">
                <div className="introduce">
                    <pre>{codeView}</pre>
                </div>
                <div className="demos">
                    <div className="demo_box">{menuIntance1}</div>
                    <div className="demo_box">{menuIntance2}</div>
                    <div className="demo_box">{menuIntance3}</div>
                    <div className="demo_box">{menuIntance4}</div>
                    <div className="demo_box">{menuIntance5}</div>
                </div>
            </div>
        );
    }
};

module.exports = Main;

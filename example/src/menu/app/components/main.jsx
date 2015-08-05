import Menu from '../../../../../src/menu.jsx';
import Header from '../../../../../src/header.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

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
                    <p>{menuIntance1}</p>
                    <p>{menuIntance2}</p>
                    <p>{menuIntance3}</p>
                    <p>{menuIntance4}</p>
                    <p>{menuIntance5}</p>
                </div>
            </div>
        );
    }
};

module.exports = Main;

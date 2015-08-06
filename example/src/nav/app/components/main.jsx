import Nav from '../../../../../src/nav.jsx';
import NavItem from '../../../../../src/navItem.jsx';
import Icon from '../../../../../src/icon.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        /*
        * <Nav>: 为外层容器，对应 .am-nav ，默认渲染 <ul> 标签。属性说明：

         componentTag: string - 可以接受 ol 字符串，渲染 <ol> 标签；
         pills: bool - 开启水平导航；
         tabs: bool - 开启标签式导航；
         justify: bool - 在水平导航或标签式导航上添加 justify 让子组件宽度自适应。
         <NavItem>: 子组件，渲染 <li> 标签。属性说明：

         active: bool - 是否激活；
         disabled: bool - 是否禁用；
         header: bool - 是否渲染为标题；
         divider: bool - 是否渲染为分隔线；
         href: string - 添加 url 地址，渲染成链接列表。
        * */

        var navInstance1 = (
            <Nav>
                <NavItem active href="http://www.amazeui.org">首页</NavItem>
                <NavItem href="http://www.amazeui.org">开始使用</NavItem>
                <NavItem href="http://www.amazeui.org">按需定制</NavItem>
            </Nav>
        );



        //水平导航
        var navInstance2 = (
            <Nav pills>
                <NavItem active href="http://www.amazeui.org">首页</NavItem>
                <NavItem href="http://www.amazeui.org">开始使用</NavItem>
                <NavItem href="http://www.amazeui.org">按需定制</NavItem>
            </Nav>
        );



        //标签式导航
        var navInstance3 = (
            <Nav tabs>
                <NavItem active href="http://www.amazeui.org">首页</NavItem>
                <NavItem href="http://www.amazeui.org">开始使用</NavItem>
                <NavItem href="http://www.amazeui.org">按需定制</NavItem>
            </Nav>
        );


        //宽度自适应
        var navInstance4 = (
            <div>
                <Nav pills justify>
                    <NavItem active href="http://www.amazeui.org">首页</NavItem>
                    <NavItem href="http://www.amazeui.org">开始使用</NavItem>
                    <NavItem href="http://www.amazeui.org">按需定制</NavItem>
                    <NavItem href="http://www.amazeui.org">加入我们</NavItem>
                </Nav>

                <Nav tabs justify>
                    <NavItem active href="http://www.amazeui.org">首页</NavItem>
                    <NavItem href="http://www.amazeui.org">开始使用</NavItem>
                    <NavItem href="http://www.amazeui.org">按需定制</NavItem>
                    <NavItem href="http://www.amazeui.org">加入我们</NavItem>
                </Nav>
            </div>
        );


        //导航状态
        var navInstance5 = (
            <Nav>
                <NavItem active href="http://www.amazeui.org">首页</NavItem>
                <NavItem href="http://www.amazeui.org">关于我们</NavItem>
                <NavItem disabled href="http://www.amazeui.org">禁用链接</NavItem>
            </Nav>
        );

        //导航标题及分隔线
        var navInstance6 = (
            <Nav>
                <NavItem href="http://www.amazeui.org">
                    <Icon icon="home" />首页</NavItem>
                <NavItem header>开始使用</NavItem>
                <NavItem href="http://www.amazeui.org">关于我们</NavItem>
                <NavItem href="http://www.amazeui.org">联系我们</NavItem>
                <NavItem divider />
                <NavItem href="http://www.amazeui.org">响应式</NavItem>
                <NavItem href="http://www.amazeui.org">移动优先</NavItem>
            </Nav>
        );



        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <p>{navInstance1}</p>
                    <p>{navInstance2}</p>
                    <p>{navInstance3}</p>
                    <p>{navInstance4}</p>
                    <p>{navInstance5}</p>
                    <p>{navInstance6}</p>
                </div>
            </div>
        );
    }
};

module.exports = Main;

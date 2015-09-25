import React from 'react';
import Icon from '../../../../../src/icon.jsx';
import Close from '../../../../../src/close.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        /*
        * 组件介绍

         Icon 组件目前使用 Font Awesome (4.3.0)。

         使用方法：<Icon icon="图标名称" />，图标名称请从这里或者Font Awesome 官网查询。

         属性说明：

         icon: string - 图标名称；
         size: string 提供 3 种大小 sm md lg；
         button: bool 是否显示为图标按钮；
         amStyle: string 提供 5 种颜色 primary secondary success warning danger，设置 button 属性后有效；
         spin: bool - 旋转动画(Chrome 和 Firefox 下， display: inline-block; 或 display: block; 的元素才会应用旋转动画)；
         fw: bool - FontAwesome 在绘制图标的时候不同图标宽度有差异， 添加 fw 将图标设置为固定的宽度，解决宽度不一致问题；
         href: string - 链接地址。
        * */

        //1 基本样式
        var iconInstance1 = (
            <div>
                <p><Icon icon="qq" /> QQ</p>
                <p><Icon icon="weixin" /> Wechat</p>
            </div>
        );


        //2 图标大小
        var iconInstance2 = (
            <div>
                <p><Icon icon="home" /> 默认大小 </p>
                <p><Icon amSize="sm" icon="home" /> sm </p>
                <p><Icon amSize="md" icon="home" /> md </p>
                <p><Icon amSize="lg" icon="home" /> lg </p>
            </div>
        );


        //3 图标按钮
        /*
        * 添加 `button` 属性将图标显示为按钮样式。

         通过 amStyle 可以设置按钮图标的颜色。

         primary
         secondary
         success
         warning
         danger
        * */
        var iconInstance3 = (
            <div>
                <Icon button icon="twitter" />
                <Icon button icon="facebook" />
                <Icon button icon="github" />
                <Icon button amStyle="primary" icon="qq" />
                <Icon button amStyle="secondary" icon="drupal" />
                <Icon button amStyle="success" icon="shield" />
                <Icon button amStyle="warning" icon="warning" />
                <Icon button amStyle="danger" icon="youtube" />
            </div>
        );


        //4 旋转动画
        var iconInstance4 = (
            <div>
                <Icon spin icon="spinner" />
                <Icon spin icon="refresh" />
                <Icon spin icon="circle-o-notch" />
                <Icon spin icon="cog" />
                <Icon spin icon="gear" />
            </div>
        );


        //5 固定宽度
        var iconInstance5 = (
            <div>
                <p><Icon fw icon="qq" /> QQ</p>
                <p><Icon fw icon="skype" /> Skype</p>
                <p><Icon fw icon="github" /> Github</p>
                <p><Icon fw icon="cc-amex" /> Amex</p>
            </div>
        );


        //6 添加链接
        var iconInstance6 = (
            <div>
                <p><Icon button href="http://www.github.com" icon="github" /></p>
                <p><Icon href="http://www.github.com" icon="github" /></p>
                <p><Icon href="http://www.github.com" icon="github"> GitHub</Icon></p>
            </div>
        );




        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <p>{iconInstance1}</p>
                    <p>{iconInstance2}</p>
                    <p>{iconInstance3}</p>
                    <p>{iconInstance4}</p>
                    <p>{iconInstance5}</p>
                    <p>{iconInstance6}</p>
                </div>
            </div>
        );
    }
};

module.exports = Main;

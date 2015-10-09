import React from 'react';
import Close from '../../../../../src/close.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        /*
        *
        * 组件介绍

         <Close> 组件，关闭按钮。

         属性列表：

         alt: bool - 是否使用带边框样式
         spin: bool - 是否 hover 旋转效果
         icon: bool - 是否使用 Icon
        * */


        //1  基本样式
        var closeInstance1 = (
            <div>
                <Close /> {" "}
                <Close icon />
            </div>
        );


        //2 带边框样式
        var closeInstance2 = (
            <div>
                <Close alt /> {" "}
                <Close alt icon />
            </div>
        );


        //3 hover 旋转
        var closeInstance3 = (
            <div>
                <Close spin />{" "}
                <Close alt spin />{" "}
                <Close spin icon />{" "}
                <Close alt spin icon />
            </div>
        );


        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <div className="demo_box">{closeInstance1}</div>
                    <div className="demo_box">{closeInstance2}</div>
                    <div className="demo_box">{closeInstance3}</div>
                </div>
            </div>
        );
    }
}

module.exports = Main;

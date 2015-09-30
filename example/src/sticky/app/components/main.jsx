import React from 'react';
import Sticky from '../../../../../src/sticky.jsx';
import Button from '../../../../../src/button.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        /*
        * <Sticky> 组件，当窗口滚动至元素上边距离时，将元素固定在窗口顶部。

         属性说明：

         top: number - 悬浮时距离顶部位置；
         animation: string - CSS 动画名称。
        * */

        //默认设置
        var scrollSpyNavInstance1 = (
            <Sticky>
                <Button amStyle="primary" block style={{marginLeft: 10}}>Stick on the Top</Button>
            </Sticky>
        );

        //设置上边距
        var scrollSpyNavInstance2 = (
            <Sticky top={70}>
                <Button amStyle="secondary" block>固定在距离顶部 70px 的位置</Button>
            </Sticky>
        );

        //动画效果
        var scrollSpyNavInstance3 = (
            <Sticky top={120} animation="slide-top">
                <Button amStyle="danger" block>固定在距离顶部 120px 的位置</Button>
            </Sticky>
        );




        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <p>{scrollSpyNavInstance1}</p>
                    <p>{scrollSpyNavInstance2}</p>
                    <p>{scrollSpyNavInstance3}</p>
                </div>
            </div>
        );
    }
};

module.exports = Main;

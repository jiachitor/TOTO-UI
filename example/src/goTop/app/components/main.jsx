import React from 'react';
import GoTop from '../../../../../src/goTop.jsx';
import ScrollTo from '../../../../../src/scrollTo.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        /*
        *
        * GoTop 组件

         <GoTop> 组件，显示一个链接，点击滚动到窗口顶部，原回到顶部 React 封装。

         属性：

         theme: string - 主题名称
         title: string - 显示的文字
         src: string - 自定图标的地址
         icon: string - FontAwesome 图标名称，如果定义了 src，则优先使用 src，此属性将被忽略
         autoHide: bool - 是否自动隐藏回到顶部图标，仅在 fixed 主题中有效
        * */


        var divStyle = {marginTop:'800px'};

        var GoTop1 = (
            <div className="demo-1">
                <GoTop title="回到顶部" />
            </div>
        );

        // 看不见东西？见右下角的回到顶部图标
        var GoTop2 = (
            <div className="demo-1">
                <GoTop theme="fixed" autoHide icon="arrow-up" title="go"  />
            </div>
        );


        var scrollToInstance = (
            <div>
                <ScrollTo amStyle="primary">滚动到顶部</ScrollTo>
                <ScrollTo amStyle="secondary" position={100}>滚到距离顶部 100px 的位置</ScrollTo>
            </div>
        );



        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos" style={divStyle}>
                    <div className="demo_box">{GoTop1}</div>
                    <div className="demo_box">{GoTop2}</div>
                    <div className="demo_box">{scrollToInstance}</div>
                </div>
            </div>
        );
    }
}

module.exports = Main;

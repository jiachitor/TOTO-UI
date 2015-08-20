import React from 'react';
import GoTop from '../../../../../src/goTop.jsx';
import ScrollTo from '../../../../../src/scrollTo.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
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
                    <p>{GoTop1}</p>
                    <p>{GoTop2}</p>
                    <p>{scrollToInstance}</p>
                </div>
            </div>
        );
    }
}

module.exports = Main;

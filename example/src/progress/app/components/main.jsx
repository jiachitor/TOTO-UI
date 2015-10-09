/** In this file, we create a React component which incorporates components provided by material-ui */
import React from 'react';
import Progress from '../../../../../src/progress.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    getActiveKey(){
        var _activeKey = this.refs.demoTabs.getActiveKey();
        console.log(_activeKey)
    }
    render() {

        /*
        *
        * props 说明：

         now: number 进度条长度
         label: string 进度条辅助文字
         active: bool true 显示进度条动画
         amSize: string 进度条高度，目前只有两个参数 sm xs
         amStyle: string 进度条颜色，默认为 Amaze UI 主色调 蓝色，可以传入 secondary、success、warning、danger
         striped: bool striped 为 true 显示进度条条纹
        *
        * */

        //1 基本样式
        var progressInstance1 = (
            <div>
                <Progress now={40} />
                <Progress now={40} label="40%" />
            </div>
        );


        //2 进度条颜色
        var progressInstance2 = (
            <div>
                <Progress now={15} />
                <Progress amStyle="secondary" now={30} />
                <Progress amStyle="success" now={45} />
                <Progress amStyle="warning" now={60} />
                <Progress amStyle="danger" now={75} />
            </div>
        );


        //3 进度条高度
        var progressInstance3 = (
            <div>
                <Progress now={80} amSize="xs" />
                <Progress now={60} amSize="sm" />
                <Progress now={40} />
            </div>
        );


        //4 进度条条纹
        var progressInstance4 = (
            <div>
                <Progress now={80} striped amStyle="danger" />
                <Progress now={60} striped amStyle="warning" />
                <Progress now={45} striped amStyle="success" />
                <Progress now={30} striped amStyle="secondary" />
                <Progress now={15} striped />
            </div>
        );


        //5 进度条动画
        var progressInstance5 = (
            <Progress now={50} active amStyle="secondary" amSize="sm" />
        );



        //6 进度条堆叠
        var progressInstance6 = (
            <Progress>
                <Progress now={65} label="Male" amStyle="success" key={1} />
                <Progress now={15} label="Female" amStyle="warning" key={2} />
                <Progress now={20} label="Other" amStyle="danger" key={3} />
            </Progress>
        );


        return (
            <div className="demos">
                <div className="demo_box">{progressInstance1}</div>
                <div className="demo_box">{progressInstance2}</div>
                <div className="demo_box">{progressInstance3}</div>
                <div className="demo_box">{progressInstance4}</div><div className="demo_box">{progressInstance5}</div>
                <div className="demo_box">{progressInstance6}</div>

            </div>
        );
    }
};

module.exports = Main;

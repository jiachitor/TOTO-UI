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
        * props ˵����

         now: number ����������
         label: string ��������������
         active: bool true ��ʾ����������
         amSize: string �������߶ȣ�Ŀǰֻ���������� sm xs
         amStyle: string ��������ɫ��Ĭ��Ϊ Amaze UI ��ɫ�� ��ɫ�����Դ��� secondary��success��warning��danger
         striped: bool striped Ϊ true ��ʾ����������
        *
        * */

        //1 ������ʽ
        var progressInstance1 = (
            <div>
                <Progress now={40} />
                <Progress now={40} label="40%" />
            </div>
        );


        //2 ��������ɫ
        var progressInstance2 = (
            <div>
                <Progress now={15} />
                <Progress amStyle="secondary" now={30} />
                <Progress amStyle="success" now={45} />
                <Progress amStyle="warning" now={60} />
                <Progress amStyle="danger" now={75} />
            </div>
        );


        //3 �������߶�
        var progressInstance3 = (
            <div>
                <Progress now={80} amSize="xs" />
                <Progress now={60} amSize="sm" />
                <Progress now={40} />
            </div>
        );


        //4 ����������
        var progressInstance4 = (
            <div>
                <Progress now={80} striped amStyle="danger" />
                <Progress now={60} striped amStyle="warning" />
                <Progress now={45} striped amStyle="success" />
                <Progress now={30} striped amStyle="secondary" />
                <Progress now={15} striped />
            </div>
        );


        //5 ����������
        var progressInstance5 = (
            <Progress now={50} active amStyle="secondary" amSize="sm" />
        );



        //6 �������ѵ�
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

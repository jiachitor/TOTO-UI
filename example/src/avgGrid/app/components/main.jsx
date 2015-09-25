import React from 'react';
import AvgGrid from '../../../../../src/avgGrid.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        /*
        * Average Grid��ʹ�� ul / ol �����ȷ��У��������ݵ����С�

         ������� <AvgGrid>�������б�

         sm: number - sm ����������
         md: number - md ����������
         lg: number - lg ����������
        * */

        //����һ������
        var avgGridInstance1 = (
            <AvgGrid sm={4} className="am-thumbnails">
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-1.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-3.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-4.jpg" /></li>
            </AvgGrid>
        );


        //��Ӧʽ
        var avgGridInstance2 = (
            <AvgGrid sm={2} md={3} lg={4} className="am-thumbnails">
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-1.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-3.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-4.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-1.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-3.jpg" /></li>
                <li><img className="am-thumbnail" src="http://s.amazeui.org/media/i/demos/bing-4.jpg" /></li>
            </AvgGrid>
        );

        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <p>{avgGridInstance1}</p>
                    <p>{avgGridInstance2}</p>
                </div>
            </div>
        );
    }
};

module.exports = Main;

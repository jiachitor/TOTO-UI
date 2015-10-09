import React from 'react';
import Badge from '../../../../../src/badge.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        /*
        *
        * �������

         <Badge> �����

         props ˵����

         amStyle: string - ������ɫ��Ĭ��Ϊ��ɫ����ѡֵΪ primary��secondary��success��warning��danger
         round: bool - ��Բ��ʽ
         radius: bool - Բ����ʽ
         href: string - ���ӵ�ַ
        * */

        var badgeInstance1 = (
            <div>
                <Badge>Badge</Badge>
                <Badge amStyle="primary">primary</Badge>
                <Badge amStyle="secondary">secondary</Badge>
                <Badge amStyle="success">success</Badge>
                <Badge amStyle="warning">warning</Badge>
                <Badge amStyle="danger">Danger</Badge>
            </div>
        );


        var badgeInstance2 = (
            <div>
                <Badge round>Badge</Badge>
                <Badge amStyle="primary" round>primary</Badge>
                <Badge amStyle="secondary" round>secondary</Badge>
                <Badge amStyle="success" round>success</Badge>
                <Badge amStyle="warning" round>warning</Badge>
                <Badge amStyle="danger" round>Danger</Badge>
            </div>
        );


        var badgeInstance3 = (
            <div>
                <Badge radius>Badge</Badge>
                <Badge amStyle="primary" radius>primary</Badge>
                <Badge amStyle="secondary" radius>secondary</Badge>
                <Badge amStyle="success" radius>success</Badge>
                <Badge amStyle="warning" radius>warning</Badge>
                <Badge amStyle="danger" radius>Danger</Badge>
            </div>
        );


        var badgeInstance4 = (
            <div>
                <Badge>default</Badge>
                <Badge amStyle="primary" className="am-text-sm">small</Badge>
                <Badge amStyle="secondary" className="am-text-default">normal</Badge>
                <Badge amStyle="success" className="am-text-lg">large</Badge>
                <Badge amStyle="warning" className="am-text-xl">x large</Badge>
            </div>
        );



        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <div className="demo_box">{badgeInstance1}</div>
                    <div className="demo_box">{badgeInstance2}</div>
                    <div className="demo_box">{badgeInstance3}</div>
                    <div className="demo_box">{badgeInstance4}</div>
                </div>
            </div>
        );
    }
};

module.exports = Main;

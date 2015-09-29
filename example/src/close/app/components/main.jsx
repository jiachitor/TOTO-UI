import React from 'react';
import Close from '../../../../../src/close.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        /*
        *
        * �������

         <Close> ������رհ�ť��

         �����б���

         alt: bool - �Ƿ�ʹ�ô��߿���ʽ
         spin: bool - �Ƿ� hover ��תЧ��
         icon: bool - �Ƿ�ʹ�� Icon
        * */


        //1  ������ʽ
        var closeInstance1 = (
            <div>
                <Close /> {" "}
                <Close icon />
            </div>
        );


        //2 ���߿���ʽ
        var closeInstance2 = (
            <div>
                <Close alt /> {" "}
                <Close alt icon />
            </div>
        );


        //3 hover ��ת
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
                    <p>{closeInstance1}</p>
                    <p>{closeInstance2}</p>
                    <p>{closeInstance3}</p>
                </div>
            </div>
        );
    }
}

module.exports = Main;
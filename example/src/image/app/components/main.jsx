import React from 'react';
import Image from '../../../../../src/image.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        /*
        * �������

         <Image> ������������ԣ�

         radius: bool Բ�ǣ�
         round: bool ��Բ��
         circle: bool Բ�Σ�
         responsive: bool �Ƿ���Ӧʽ��
         thumbnail: bool ���߿���ʽ��
         TODO��

         ��Ӧʽ�����ݷֱ��ʼ������ʺϵ�ͼƬ����
         �����ء�
        * */


        //1 ��Ӧʽ
        var imageInstance1 = (
            <Image
                src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg"
                responsive />
        );

        //2 ͼƬ��״

        var imageInstance2 = (
            <p>
                <Image
                    src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80"
                    width="140"
                    height="140"
                    radius />

                <Image
                    src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/600/q/80"
                    width="200"
                    height="120"
                    round />

                <Image
                    src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80"
                    width="140"
                    height="140"
                    circle />
            </p>
        );


        //3 ����ͼ��ʽ
        var imgSrc = 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80';

        var imageInstance3 = (
            <p>
                <Image src={imgSrc} width='140' height='140' thumbnail />
                <Image src={imgSrc} width='140' height='140' thumbnail radius />
                <Image src={imgSrc} width='140' height='140' thumbnail circle />
            </p>
        );



        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <p>{imageInstance1}</p>
                    <p>{imageInstance2}</p>
                    <p>{imageInstance3}</p>
                </div>
            </div>
        );
    }
};

module.exports = Main;

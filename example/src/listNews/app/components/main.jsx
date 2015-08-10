import ListNews from '../../../../../src/listNews.jsx';
import Titlebar from '../../../../../src/titlebar.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        var data = {
            // 列表标题
            "header": {
                "title": "最新文章",
                "link": "###"
            },

            // 列表主要内容
            "main": [
                {
                    "title": "",            // 新闻标题
                    "link": "",             // 新闻链接
                    "date": "",             // 日期
                    "desc": "",             // 摘要信息
                    "img": ""               // 缩略图地址
                }
            ]
        };
        var codeView = JSON.stringify(data, 4, 4);


        var data1 = {
            header: {
                title: '栏目标题',
                link: '##'
            },
            main: [
                {
                    title: '我很囧，你保重....晒晒旅行中的那些囧！',
                    link: '##',
                    date: '2013-09-18'
                },
                {
                    title: '我最喜欢的一张画',
                    link: '##',
                    date: '2013-10-14'
                },
                {
                    title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
                    link: '##',
                    date: '2013-11-18'
                }
            ]
        };

        var listnewsInstance1 = (
            <div>
                <h3>更多在上</h3>
                <ListNews data={data1} morePosition="top" moreTextTitle='更多'/>

                <h3>更多在下</h3>
                <ListNews data={data1} morePosition="bottom"  moreTextTitle='More'/>
            </div>
        );


        /*#####################################################################*/

        var data2 = {
            header: {
                title: '带摘要的列表',
                link: '###'
            },
            main: [
                {
                    title: '我很囧，你保重....晒晒旅行中的那些囧！',
                    link: 'http://www.douban.com/online/11614662/',
                    desc: '囧人囧事囧照，人在囧途，越囧越萌。标记《带你出发，陪我回家》http://book.douban.com/subject/25711202/为“想读”“在读”或“读过”，有机会获得此书本活动进行3个月，每月送出三本书。会有不定期bonus！'
                },
                {
                    title: '我最喜欢的一张画',
                    link: 'http://www.douban.com/online/11624755/',
                    desc: '你最喜欢的艺术作品，告诉大家它们的------名图画，色彩，交织，撞色，线条雕塑装置当代古代现代作品的照片美我最喜欢的画群296795413进群发画，少说多发图，'
                },
                {
                    title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
                    link: 'http://www.douban.com/online/11645411/'
                }
            ]
        };

        var listnewsInstance2 = (
            <div>
                <ListNews data={data2} morePosition="top"  moreTextTitle='More'/>
            </div>
        );


        /*#####################################################################*/

        var data3 = {
            header: {
                title: '缩略图在顶部 + 摘要',
                link: '###'
            },
            main: [
                {
                    title: '我很囧，你保重....晒晒旅行中的那些囧！',
                    link: 'http://www.douban.com/online/11614662/',
                    desc: '囧人囧事囧照，人在囧途，越囧越萌。标记《带你出发，陪我回家》http://book.douban.com/subject/25711202/为“想读”“在读”或“读过”，有机会获得此书本活动进行3个月，每月送出三本书。会有不定期bonus！',
                    img: 'http://img5.douban.com/lpic/o636459.jpg'
                },
                {
                    title: '我最喜欢的一张画',
                    link: 'http://www.douban.com/online/11624755/',
                    desc: '你最喜欢的艺术作品，告诉大家它们的------名图画，色彩，交织，撞色，线条雕塑装置当代古代现代作品的照片美我最喜欢的画群296795413进群发画，少说多发图，',
                    img: 'http://img3.douban.com/lpic/o637240.jpg'
                },
                {
                    title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
                    link: 'http://www.douban.com/online/11645411/',
                    desc: '还在苦恼圣诞礼物再也玩儿不出新意？快来抢2013最炫彩的跨国圣诞礼物！【参与方式】1.关注“UniqueWay无二之旅”豆瓣品牌小站http://brand.douban.com/uniqueway/2.上传一张**本人**在旅行中色彩最浓郁、最丰富的照片（色彩包含取景地、周边事物、服装饰品、女生彩妆等等，发挥你们无穷的创意想象力哦！^^）一定要有本人出现喔！3. 在照片下方，附上一句旅行宣言作为照片说明。 成功参与活动！* 听他们刚才说，上传照片的次',
                    img: 'http://img3.douban.com/lpic/o638852.jpg'
                }
            ]
        };

        var listnewsInstance3 = (
            <div>
                <ListNews data={data3} morePosition="top"  moreTextTitle='More'/>
            </div>
        );


        /*#####################################################################*/

        var data4 = {
            header: {
                title: '缩略图侧边 + 摘要',
                link: '###'
            },
            main: [
                {
                    title: '我很囧，你保重....晒晒旅行中的那些囧！',
                    link: 'http://www.douban.com/online/11614662/',
                    desc: '囧人囧事囧照，人在囧途，越囧越萌。标记《带你出发，陪我回家》http://book.douban.com/subject/25711202/为“想读”“在读”或“读过”，有机会获得此书本活动进行3个月，每月送出三本书。会有不定期bonus！',
                    img: 'http://img5.douban.com/lpic/o636459.jpg'
                },
                {
                    title: '我最喜欢的一张画',
                    link: 'http://www.douban.com/online/11624755/',
                    desc: '你最喜欢的艺术作品，告诉大家它们的------名图画，色彩，交织，撞色，线条雕塑装置当代古代现代作品的照片美我最喜欢的画群296795413进群发画，少说多发图，',
                    img: 'http://img3.douban.com/lpic/o637240.jpg'
                },
                {
                    title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
                    link: 'http://www.douban.com/online/11645411/',
                    desc: '还在苦恼圣诞礼物再也玩儿不出新意？快来抢2013最炫彩的跨国圣诞礼物！【参与方式】1.关注“UniqueWay无二之旅”豆瓣品牌小站http://brand.douban.com/uniqueway/2.上传一张**本人**在旅行中色彩最浓郁、最丰富的照片（色彩包含取景地、周边事物、服装饰品、女生彩妆等等，发挥你们无穷的创意想象力哦！^^）一定要有本人出现喔！3. 在照片下方，附上一句旅行宣言作为照片说明。 成功参与活动！* 听他们刚才说，上传照片的次'
                }
            ]
        };

        var listnewsInstance4 = (
            <div>
                <h4>缩略图在左侧</h4>
                <ListNews data={data4} thumbPosition="left"  moreTextTitle='More'/>

                <h4>缩略图在右侧</h4>
                <ListNews data={data4} thumbPosition="right"  moreTextTitle='More'/>
            </div>
        )


        /*#####################################################################*/


        var data5 = {
            header: {
                title: '缩略图在底部 + 摘要',
                link: '###'
            },
            main: [
                {
                    title: '我很囧，你保重....晒晒旅行中的那些囧！',
                    link: '##',
                    desc: '囧人囧事囧照，人在囧途，越囧越萌。标记《带你出发，陪我回家》http://book.douban.com/subject/25711202/为“想读”“在读”或“读过”，有机会获得此书本活动进行3个月，每月送出三本书。会有不定期bonus！',
                    img: 'http://img5.douban.com/lpic/o636459.jpg',
                    date: '2013-09-18'
                },
                {
                    title: '我最喜欢的一张画',
                    link: '##',
                    desc: '你最喜欢的艺术作品，告诉大家它们的------名图画，色彩，交织，撞色，线条雕塑装置当代古代现代作品的照片美我最喜欢的画群296795413进群发画，少说多发图，',
                    img: 'http://img3.douban.com/lpic/o637240.jpg',
                    date: '2013-09-18'
                },
                {
                    title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
                    link: 'http://www.douban.com/online/11645411/',
                    desc: '还在苦恼圣诞礼物再也玩儿不出新意？快来抢2013最炫彩的跨国圣诞礼物！【参与方式】1.关注“UniqueWay无二之旅”豆瓣品牌小站http://brand.douban.com/uniqueway/2.上传一张**本人**在旅行中色彩最浓郁、最丰富的照片（色彩包含取景地、周边事物、服装饰品、女生彩妆等等，发挥你们无穷的创意想象力哦！^^）一定要有本人出现喔！3. 在照片下方，附上一句旅行宣言作为照片说明。 成功参与活动！* 听他们刚才说，上传照片的次',
                    date: '2013-09-18'
                }
            ]
        };

        var listnewsInstance5 = (
            <div>
                <h4>缩略图在左下</h4>
                <ListNews data={data5} thumbPosition="bottom-left"  moreTextTitle='More'/>

                <h4>缩略图在右下</h4>
                <ListNews
                    data={data5}
                    thumbPosition="bottom-right"
                    moreTextTitle='More'
                    onClick={this._onClick}/>
            </div>
        )



        /*#####################################################################*/


        var data6 = {
            main: [
                {
                    title: '我很囧，你保重....晒晒旅行中的那些囧！',
                    link: '##',
                    date: '2013-09-18'
                },
                {
                    title: '我最喜欢的一张画',
                    link: '##',
                    date: '2013-10-14'
                },
                {
                    title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
                    link: '##',
                    date: '2013-11-18'
                }
            ]
        };


        var listnewsInstance6 = (
            <div>
                <ListNews
                    header={<Titlebar title="栏目标题" />}
                    data={data6}
                    moreTextTitle='More' />
            </div>
        )




        return (
            <div className="module">
                <div className="introduce">
                    <pre>{codeView}</pre>
                </div>
                <div className="demos">
                    <p>{listnewsInstance1}</p>
                    <p>{listnewsInstance2}</p>
                    <p>{listnewsInstance3}</p>
                    <p>{listnewsInstance4}</p>
                    <p>{listnewsInstance5}</p>
                    <p>{listnewsInstance6}</p>
                </div>
            </div>
        );
    }

    _onClick(item, e){
        console.log(item)
        console.log(e)
    }
}

module.exports = Main;

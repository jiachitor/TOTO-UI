import React from 'react';
import Slider from '../../../../../src/slider.jsx';
import SliderItem from '../../../../../src/sliderItem.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        /*
        *
        * <Slider> 组件，轮播容器，包含以下属性：

         theme: string - 主题名称；
         directionNav: bool - 是否显示上一个、下一个图标，默认为 true；
         controlNav: bool - 是否显示点击控制点；
         slideSpeed: number - 播放速度，默认为 5000 （ms）；
         autoPlay: bool - 是否自动播放，默认为 true；
         defaultActiveIndex: number - 默认激活的幻灯片编号，从 0 开始计算；
         onSelect: func - 切换幻灯片回掉函数，接受两个参数，第一个参数为激活的幻灯片编号，第二参数为滚动方向。
         <SliderItem> 组件，幻灯片内容，包含以下属性：

         thumbnail: string - 缩略略图 URL。
        * */

        //常规模式
        var onSelect1 = function(index, direction) {
            console.log('激活的幻灯片编号：', index, '，滚动方向：', direction);
        };

        var sliderIntance1 = (
            <Slider onSelect={onSelect1}>
                <SliderItem>
                    <img
                        src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>
                </SliderItem>
                <SliderItem><img
                    src="http://s.amazeui.org/media/i/demos/bing-2.jpg"/></SliderItem>
                <SliderItem>
                    <img
                        src="http://s.amazeui.org/media/i/demos/bing-3.jpg"/></SliderItem>
                <SliderItem>
                    <img
                        src="http://s.amazeui.org/media/i/demos/bing-4.jpg"/></SliderItem>
            </Slider>
        );

        //缩略图模式
        var data2 = [
            {
                thumb: 'http://s.amazeui.org/media/i/demos/bing-1.jpg',
                img: 'http://s.amazeui.org/media/i/demos/bing-1.jpg'
            },
            {
                thumb: 'http://s.amazeui.org/media/i/demos/bing-2.jpg',
                img: 'http://s.amazeui.org/media/i/demos/bing-2.jpg'
            },
            {
                thumb: 'http://s.amazeui.org/media/i/demos/bing-3.jpg',
                img: 'http://s.amazeui.org/media/i/demos/bing-3.jpg'
            },
            {
                thumb: 'http://s.amazeui.org/media/i/demos/bing-4.jpg',
                img: 'http://s.amazeui.org/media/i/demos/bing-4.jpg'
            }];

        var sliderIntance2 = (
            <Slider directionNav={false}>
                {data2.map(function(item, i) {
                    return (
                        <SliderItem key={i} thumbnail={item.thumb}>
                            <img src={item.img} />
                        </SliderItem>
                    );
                })}
            </Slider>
        );


        //显示标题
        var data3 = [
            {
                img: 'http://s.amazeui.org/media/i/demos/bing-1.jpg',
                desc: '这是标题标题标题标题标题标题标题0'
            },
            {
                img: 'http://s.amazeui.org/media/i/demos/bing-2.jpg',
                desc: '这是标题标题标题标题标题标题标题1'
            },
            {
                img: 'http://s.amazeui.org/media/i/demos/bing-3.jpg',
                desc: '这是标题标题标题标题标题标题标题2'
            },
            {
                img: 'http://s.amazeui.org/media/i/demos/bing-4.jpg',
                desc: '这是标题标题标题标题标题标题标题3'
            }
        ];

        var sliderIntance3 = (
            <Slider>
                {data3.map(function(item, i) {
                    return (
                        <SliderItem key={i}>
                            <img src={item.img} />
                            <div className="slider-desc">
                                {item.desc}
                            </div>
                        </SliderItem>
                    );
                })}
            </Slider>
        );


        /*a 系列主题*/
        var data_a = ['http://s.amazeui.org/media/i/demos/bing-1.jpg',
            'http://s.amazeui.org/media/i/demos/bing-2.jpg',
            'http://s.amazeui.org/media/i/demos/bing-3.jpg',
            'http://s.amazeui.org/media/i/demos/bing-4.jpg'];

        var themes_a = ['a1', 'a2', 'a3', 'a4', 'a5'];

        var sliderIntance_a = (
            <div>
                {themes_a.map(function(t, i) {
                    return (
                        <div key={i} className="margin-bottom">
                            <h4>主题 <code>{t}</code></h4>
                            <Slider theme={t}>
                                {data_a.map(function(item, i) {
                                    return (
                                        <SliderItem key={i}>
                                            <img src={item} />
                                        </SliderItem>
                                    );
                                })}
                            </Slider>
                        </div>
                    );
                })}
            </div>
        );



        /*b 系列主题*/
        var data_b = ['http://s.amazeui.org/media/i/demos/bing-1.jpg',
            'http://s.amazeui.org/media/i/demos/bing-2.jpg',
            'http://s.amazeui.org/media/i/demos/bing-3.jpg',
            'http://s.amazeui.org/media/i/demos/bing-4.jpg'];

        var themes_b = ['b1', 'b2', 'b3', 'b4'];

        var sliderIntance_b = (
            <div>
                {themes_b.map(function(t, i) {
                    return (
                        <div key={i} className="margin-bottom">
                            <h4>主题 <code>{t}</code></h4>
                            <Slider theme={t}>
                                {data_b.map(function(item, i) {
                                    return (
                                        <SliderItem key={i}>
                                            <img src={item} />
                                        </SliderItem>
                                    );
                                })}
                            </Slider>
                        </div>
                    );
                })}
            </div>
        );


        /*c 系列主题*/
        var data_c = [{img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",desc:"这是标题标题标题标题标题标题标题0"},{img:"http://s.amazeui.org/media/i/demos/bing-2.jpg",desc:"这是标题标题标题标题标题标题标题1"},{img:"http://s.amazeui.org/media/i/demos/bing-3.jpg",desc:"这是标题标题标题标题标题标题标题2"},{img:"http://s.amazeui.org/media/i/demos/bing-4.jpg",desc:"这是标题标题标题标题标题标题标题3"}]

        var themes_c = ['c1', 'c2', 'c3', 'c4'];

        var sliderIntance_c = (
            <div>
                {themes_c.map(function(t, i) {
                    return (
                        <div key={i} className="margin-bottom">
                            <h4>主题 <code>{t}</code></h4>
                            <Slider theme={t}>
                                {data_c.map(function(item, k) {
                                    return (
                                        <SliderItem key={k}>
                                            <img src={item.img} />
                                            <div className="slider-desc">{item.desc}</div>
                                        </SliderItem>
                                    );
                                })}
                            </Slider>
                        </div>
                    );
                })}
            </div>
        );



        // d1 系列主题
        var data_d1 = [{img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",desc:'<h2 class="slider-title">远方 有一个地方 那里种有我们的梦想</h2><a class="slider-more">了解更多</a>'},{img:"http://s.amazeui.org/media/i/demos/bing-2.jpg",desc:'<h2 class="slider-title">某天 也许会相遇 相遇在这个好地方</h2><a class="slider-more">了解更多</a>'},{img:"http://s.amazeui.org/media/i/demos/bing-3.jpg",desc:'<h2 class="slider-title">不要太担心 只因为我相信 终会走过这条遥远的道路</h2><a class="slider-more">了解更多</a>'},{img:"http://s.amazeui.org/media/i/demos/bing-4.jpg",desc:'<h2 class="slider-title">OH PARA PARADISE 是否那么重要 你是否那么地遥远</h2><a class="slider-more">了解更多</a>'}];


        var sliderIntance_d1 = (
            <Slider theme="d1">
                {data_d1.map(function(item, k) {
                    return (
                        <SliderItem key={k}>
                            <img src={item.img} />
                            <div
                                className="slider-desc"
                                dangerouslySetInnerHTML={{__html: item.desc}} />
                        </SliderItem>
                    );
                })}
            </Slider>);



        // d2 系列主题
        var data_d2 = [{img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",desc:'<div class="slider-content"><h2 class="slider-title">远方 有一个地方 那里种有我们的梦想</h2><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p></div><a class="slider-more">了解更多</a>'},{img:"http://s.amazeui.org/media/i/demos/bing-2.jpg",desc:'<div class="slider-content"><h2 class="slider-title">某天 也许会相遇 相遇在这个好地方</h2><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p></div><a class="slider-more">了解更多</a>'},{img:"http://s.amazeui.org/media/i/demos/bing-3.jpg",desc:'<div class="slider-content"><h2 class="slider-title">不要太担心 只因为我相信 终会走过这条遥远的道路</h2><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p></div><a class="slider-more">了解更多</a>'},{img:"http://s.amazeui.org/media/i/demos/bing-4.jpg",desc:'<div class="slider-content"><h2 class="slider-title">OH PARA PARADISE 是否那么重要 你是否那么地遥远</h2><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p></div><a class="slider-more">了解更多</a>'}];


        var sliderIntance_d2 = (
            <Slider theme="d2">
                {data_d2.map(function(item, k) {
                    return (
                        <SliderItem key={k}>
                            <img src={item.img} />
                            <div
                                className="slider-desc"
                                dangerouslySetInnerHTML={{__html: item.desc}} />
                        </SliderItem>
                    );
                })}
            </Slider>);



        // d3 系列主题
        var data_d3 = [{img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",thumb:"http://s.amazeui.org/media/i/demos/bing-1.jpg",desc:'<h2 class="slider-title">远方 有一个地方 那里种有我们的梦想</h2><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p>'},{img:"http://s.amazeui.org/media/i/demos/bing-2.jpg",thumb:"http://s.amazeui.org/media/i/demos/bing-2.jpg",desc:'<h2 class="slider-title">某天 也许会相遇 相遇在这个好地方</h2><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p>'},{img:"http://s.amazeui.org/media/i/demos/bing-3.jpg",thumb:"http://s.amazeui.org/media/i/demos/bing-3.jpg",desc:'<h2 class="slider-title">不要太担心 只因为我相信 终会走过这条遥远的道路</h2><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p>'},{img:"http://s.amazeui.org/media/i/demos/bing-4.jpg",thumb:"http://s.amazeui.org/media/i/demos/bing-4.jpg",desc:'<h2 class="slider-title">OH PARA PARADISE 是否那么重要 你是否那么地遥远</h2><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p>'}];

        var sliderIntance_d3 = (
            <Slider theme="d3">
                {data_d3.map(function(item, k) {
                    return (
                        <SliderItem key={k} thumbnail={item.thumb}>
                            <img src={item.img} />
                            <div
                                className="slider-desc"
                                dangerouslySetInnerHTML={{__html: item.desc}} />
                        </SliderItem>
                    );
                })}
            </Slider>);



        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <div className="demo_box">{sliderIntance1}</div>
                    <div className="demo_box">{sliderIntance2}</div>
                    <div className="demo_box">{sliderIntance3}</div>
                    <div className="demo_box">{sliderIntance_a}</div>
                    <div className="demo_box">{sliderIntance_b}</div>
                    <div className="demo_box">{sliderIntance_c}</div>
                    <div className="demo_box">{sliderIntance_d1}</div>
                    <div className="demo_box">{sliderIntance_d2}</div>
                    <div className="demo_box">{sliderIntance_d3}</div>
                </div>
            </div>
        );
    }
};

module.exports = Main;

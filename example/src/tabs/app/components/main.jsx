/** In this file, we create a React component which incorporates components provided by material-ui */
import React from 'react';
import Tabs from '../../../../../src/tabs.jsx';
import TabsItem from '../../../../../src/tabsItem.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {

        /*
        * <Tabs>，多标签组件容器，包含以下属性：

         defaultActiveKey: any - 默认激活的标签页的 eventKey；
         animation: string - ['fade'|'slide'] 动画效果。
         justify: bool 标题宽度自适应；
         onSelect: func 点击标签时回掉函数。
         <TabsItem>，标签面板，包含以下属性：

         title: string - 标题；
         disabled: bool - 是否禁用；
         eventKey: any - 事件处理识别 key，如果 defaultActiveKey 等于 eventKey，则当前标签页激活。
         */

        //基本样式
        var tabsInstance1 = (
            <Tabs>
                <TabsItem eventKey="1" title="恣意">
                    置身人群中<br />你只需要被淹没 享受 沉默<br />退到人群后<br />你只需给予双手 微笑 等候
                </TabsItem>
                <TabsItem eventKey="2" title="等候">
                    走在忠孝东路<br />徘徊在茫然中<br />在我的人生旅途<br />选择了多少错误<br />我在睡梦中惊醒<br />感叹悔言无尽<br />恨我不能说服自己<br />接受一切教训<br />让生命去等候<br />等候下一个漂流<br />让生命去等候<br />等候下一个伤口
                </TabsItem>
                <TabsItem eventKey="3" title="流浪">
                    我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？
                </TabsItem>
            </Tabs>
        );


        /*-------------------------------------------------------------*/
        /*默认选中与禁用*/
        var tabsInstance2 = (
            <Tabs defaultActiveKey="2">
                <TabsItem eventKey="1" title="恣意">
                    置身人群中<br />你只需要被淹没 享受 沉默<br />退到人群后<br />你只需给予双手 微笑 等候
                </TabsItem>
                <TabsItem eventKey="2" title="等候">
                    走在忠孝东路<br />徘徊在茫然中<br />在我的人生旅途<br />选择了多少错误<br />我在睡梦中惊醒<br />感叹悔言无尽<br />恨我不能说服自己<br />接受一切教训<br />让生命去等候<br />等候下一个漂流<br />让生命去等候<br />等候下一个伤口
                </TabsItem>
                <TabsItem eventKey="3" title="流浪" disabled>
                    我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？
                </TabsItem>
            </Tabs>
        );


        /*-------------------------------------------------------------*/
        //回掉函数
        var TabsSelect3 = React.createClass({
            getInitialState: function() {
                return {
                    key: '1'
                };
            },

            handleSelect: function(key) {
                console.log('你点击了：', key);

                this.setState({
                    key: key
                });
            },

            render: function() {
                return (
                    <Tabs defaultActiveKey={this.state.key} onSelect={this.handleSelect}>
                        <TabsItem eventKey="1" title="恣意">
                            置身人群中<br />你只需要被淹没 享受 沉默<br />退到人群后<br />你只需给予双手 微笑 等候
                        </TabsItem>
                        <TabsItem eventKey="2" title="等候">
                            走在忠孝东路<br />徘徊在茫然中<br />在我的人生旅途<br />选择了多少错误<br />我在睡梦中惊醒<br />感叹悔言无尽<br />恨我不能说服自己<br />接受一切教训<br />让生命去等候<br />等候下一个漂流<br />让生命去等候<br />等候下一个伤口
                        </TabsItem>
                        <TabsItem eventKey="3" title="流浪" disabled>
                            我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？
                        </TabsItem>
                    </Tabs>
                );
            }
        });

        var tabsInstance3 = (
            <TabsSelect3 />
        );


        /*-------------------------------------------------------------*/
        //宽度自适应
        var tabsInstance4 = (
            <Tabs defaultActiveKey="1" justify>
                <TabsItem eventKey="1" title="恣意">
                    置身人群中<br />你只需要被淹没 享受 沉默<br />退到人群后<br />你只需给予双手 微笑 等候
                </TabsItem>
                <TabsItem eventKey="2" title="等候">
                    走在忠孝东路<br />徘徊在茫然中<br />在我的人生旅途<br />选择了多少错误<br />我在睡梦中惊醒<br />感叹悔言无尽<br />恨我不能说服自己<br />接受一切教训<br />让生命去等候<br />等候下一个漂流<br />让生命去等候<br />等候下一个伤口
                </TabsItem>
                <TabsItem eventKey="3" title="流浪" disabled>
                    我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？
                </TabsItem>
            </Tabs>
        );



        /*-------------------------------------------------------------*/
        //设置动画
        var animations5 = ['fade', 'slide'];
        var renderTabs5 = function(animation) {
            return (
                <Tabs animation={animation}>
                    <TabsItem eventKey="1" title="恣意">
                        置身人群中<br />你只需要被淹没 享受 沉默<br />退到人群后<br />你只需给予双手 微笑 等候
                    </TabsItem>
                    <TabsItem eventKey="2" title="等候">
                        走在忠孝东路<br />徘徊在茫然中<br />在我的人生旅途<br />选择了多少错误<br />我在睡梦中惊醒<br />感叹悔言无尽<br />恨我不能说服自己<br />接受一切教训<br />让生命去等候<br />等候下一个漂流<br />让生命去等候<br />等候下一个伤口
                    </TabsItem>
                    <TabsItem eventKey="3" title="流浪">
                        我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？
                    </TabsItem>
                </Tabs>
            );
        };

        var tabsInstance5 = (
            <div>
                {animations5.map(function(animation, index) {
                    return (
                        <div className="ui-margin-bottom" key={index}>
                            <h4>动画：<code>{animation}</code></h4>
                            {renderTabs5(animation)}
                        </div>
                    );
                })}
            </div>
        );



        /*-------------------------------------------------------------*/
        //原 Web 组件中数据接口
        var data6 = [
            {
                title: "青春",
                content: "【青春】那时候有多好，任雨打湿裙角。忍不住哼起，心爱的旋律。绿油油的树叶，自由地在说笑。燕子忙归巢，风铃在舞蹈。经过青春的草地，彩虹忽然升起。即使视线渐渐模糊，它也在我心里。就像爱过的旋律，没人能抹去。因为生命存在失望，歌唱，所以才要歌唱。",
                active: true
            },
            {
                title: "彩虹",
                content: "【彩虹】那时候有多好，任雨打湿裙角。忍不住哼起，心爱的旋律。绿油油的树叶，自由地在说笑。燕子忙归巢，风铃在舞蹈。经过青春的草地，彩虹忽然升起。即使视线渐渐模糊，它也在我心里。就像爱过的旋律，没人能抹去。因为生命存在失望，歌唱，所以才要歌唱。"
            },
            {
                title: "歌唱",
                content: "【歌唱】那时候有多好，任雨打湿裙角。忍不住哼起，心爱的旋律。绿油油的树叶，自由地在说笑。燕子忙归巢，风铃在舞蹈。经过青春的草地，彩虹忽然升起。即使视线渐渐模糊，它也在我心里。就像爱过的旋律，没人能抹去。因为生命存在失望，歌唱，所以才要歌唱。"
            }
        ];

        var tabsInstance6 = (
            <Tabs data={data6} theme="default" />
        );


        /*-------------------------------------------------------------*/
        //d2 主题
        var data7 = [
            {
                title: "青春",
                content: "【青春】那时候有多好，任雨打湿裙角。忍不住哼起，心爱的旋律。绿油油的树叶，自由地在说笑。燕子忙归巢，风铃在舞蹈。经过青春的草地，彩虹忽然升起。即使视线渐渐模糊，它也在我心里。就像爱过的旋律，没人能抹去。因为生命存在失望，歌唱，所以才要歌唱。",
                active: true
            },
            {
                title: "彩虹",
                content: "【彩虹】那时候有多好，任雨打湿裙角。忍不住哼起，心爱的旋律。绿油油的树叶，自由地在说笑。燕子忙归巢，风铃在舞蹈。经过青春的草地，彩虹忽然升起。即使视线渐渐模糊，它也在我心里。就像爱过的旋律，没人能抹去。因为生命存在失望，歌唱，所以才要歌唱。"
            },
            {
                title: "歌唱",
                content: "【歌唱】那时候有多好，任雨打湿裙角。忍不住哼起，心爱的旋律。绿油油的树叶，自由地在说笑。燕子忙归巢，风铃在舞蹈。经过青春的草地，彩虹忽然升起。即使视线渐渐模糊，它也在我心里。就像爱过的旋律，没人能抹去。因为生命存在失望，歌唱，所以才要歌唱。"
            }
        ];

        var tabsInstance7 = (
            <Tabs data={data6} theme="d2" />
        );




        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <div className="demo_box">{tabsInstance1}</div>
                    <div className="demo_box">{tabsInstance2}</div>
                    <div className="demo_box">{tabsInstance3}</div>
                    <div className="demo_box">{tabsInstance4}</div>
                    <div className="demo_box">{tabsInstance5}</div>
                    <div className="demo_box">{tabsInstance6}</div>
                    <div className="demo_box">{tabsInstance7}</div>
                </div>
            </div>
        );
    }
};

module.exports = Main;

import React from 'react';
import Panel from '../../../../../src/panel.jsx';
import PanelGroup from '../../../../../src/panelGroup.jsx';
import Table from '../../../../../src/table.jsx';
import List from '../../../../../src/list.jsx';
import ListItem from '../../../../../src/listItem.jsx';


class Main extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {

        /*
        *
        * 组件介绍

         Panel 共封装了两个 React 组件：

         <Panel>，属性说明：

         header: string - 面板标题；
         footer: string - 面板页脚，用于放置次要信息，页脚不会继承 amStyle 颜色样式；
         amStyle: string - 面板颜色，默认为 default，可选 primary 、secondary、success、warning、danger；
         fill: bool - 通常 <Panel> 子组件会被放入 .am-panel-bd 下，添加 fill 子组件会被渲染到 .am-panel。
         <PanelGroup> 将多个 <Panel> 放入面板群组里面。
        * */


        //1  基本样式
        var panelInstance1 = (
            <Panel>
                这是一个基本的面板组件。
            </Panel>
        );


        //2 带标题的面板
        var panelInstance2 = (
            <Panel header="面板标题">
                面板内容
            </Panel>
        );

        var panelInstance2_2 = (
            <Panel footer="面板页脚">
                面板内容
            </Panel>
        );

        //3 面板颜色
        var panelInstance3 = (
            <div>
                <Panel header="面板标题">
                    默认面板
                </Panel>
                <Panel header="面板标题" amStyle="primary">
                    primary - 面板
                </Panel>
                <Panel header="面板标题" amStyle="secondary">
                    secondary - 面板
                </Panel>
                <Panel header="面板标题" amStyle="success">
                    success - 面板
                </Panel>
                <Panel header="面板标题" amStyle="warning">
                    warning - 面板
                </Panel>
                <Panel header="面板标题" amStyle="danger">
                    danger - 面板
                </Panel>
            </div>
        );


        //4 面板嵌套表格
        var panelInstance4 = (
            <Panel header="面板标题">
                面板内容
                <Table fill>
                    <thead>
                    <tr>
                        <th>网站名称</th>
                        <th>网址</th>
                        <th>创建时间</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Amaze UI</td>
                        <td>http://amazeui.org</td>
                        <td>2012-10-01</td>
                    </tr>
                    <tr>
                        <td>Amaze UI(Active)</td>
                        <td>http://amazeui.org</td>
                        <td>2012-10-01</td>
                    </tr>
                    <tr>
                        <td>Amaze UI</td>
                        <td>http://amazeui.org</td>
                        <td>2012-10-01</td>
                    </tr>
                    </tbody>
                </Table>
            </Panel>
        );


        //5  面板嵌套列表
        var panelInstance5 = (
            <Panel header="面板标题" footer="面板页脚">
                这里是面板 body 内容。
                <List static fill>
                    <ListItem>每个人都有一个死角， 自己走不出来，别人也闯不进去。</ListItem>
                    <ListItem>我把最深沉的秘密放在那里。</ListItem>
                    <ListItem>你不懂我，我不怪你。</ListItem>
                    <ListItem>每个人都有一道伤口， 或深或浅，盖上布，以为不存在。</ListItem>
                </List>
            </Panel>
        );


        //6 面板组演示
        var panelInstance6 = (
            <PanelGroup>
                <Panel header="面板标题">
                    面板内容
                </Panel>
                <Panel header="面板标题">
                    面板内容
                </Panel>
                <Panel header="面板标题">
                    面板内容
                </Panel>
            </PanelGroup>
        );


        //7  可折叠面板
        var panelInstance7 = (
            <Panel header="面板标题" collapsible>
                面板内容
            </Panel>
        );


        //8 可以同时展开/闭合多个面板
        var panelInstance8 = (
            <PanelGroup defaultActiveKey="2" accordion>
                <Panel header="面板 1" eventKey="1">面板 1 内容</Panel>
                <Panel header="面板 2" eventKey="2">面板 2 内容</Panel>
            </PanelGroup>
        );


        //9 一次只能展开一个面板
        var panelInstance9 = React.createClass({
            getInitialState: function() {
                return {
                    activeKey: 1
                };
            },

            handleSelect: function(key) {
                this.setState({activeKey: key});
            },

            render: function() {
                return (
                    <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
                        <Panel header="面板 1" eventKey="1">面板 1 内容</Panel>
                        <Panel header="面板 2" eventKey="2">面板 2 内容</Panel>
                    </PanelGroup>
                );
            }
        });


        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <div className="demo_box">{panelInstance1}</div>
                    <div className="demo_box">{panelInstance2}</div>
                    <div className="demo_box">{panelInstance2_2}</div>
                    <div className="demo_box">{panelInstance3}</div>
                    <div className="demo_box">{panelInstance4}</div>
                    <div className="demo_box">{panelInstance5}</div>
                    <div className="demo_box">{panelInstance6}</div>
                    <div className="demo_box">{panelInstance7}</div>
                    <div className="demo_box">{panelInstance8}</div>
                    <div className="demo_box">{panelInstance9}</div>
                </div>
            </div>
        );
    }
}

module.exports = Main;

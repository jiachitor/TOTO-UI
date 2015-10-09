import React from 'react';
import List from '../../../../../src/list.jsx';
import ListItem from '../../../../../src/listItem.jsx';
import Badge from '../../../../../src/badge.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        /*
        * 组件介绍

         列表组件共封装两个 React 组件：

         <List>: 为外层容器，对应 .am-list ，默认渲染 <ul> 标签。属性说明：

         componentTag: string - 可以接受 ol 字符串，渲染 <ol> 标签；
         static: bool - 如果内容为纯文字列表，需要增加该属性；
         border: bool - 为 list 添加边框；
         striped: bool - 为 list 添加斑马纹。
         <ListItem>: 子组件，渲染 <li> 标签。属性说明：

         truncate: bool - 单行截断，文字超出一行时截断为 ...；
         href: string - 添加 url 地址，渲染成链接列表。
        * */

        var listInstance1 = (
            <div>
                <List>
                    <ListItem href="http://www.amazeui.org">
                        基本样式
                    </ListItem>
                    <ListItem href="http://www.amazeui.org">
                        天的温柔 地的温柔 像你抱着我 然后发现 你的改变 孤单的今后
                    </ListItem>
                    <ListItem href="http://www.amazeui.org">
                        天边风光 身边的我 都不在你眼中 你的眼中 藏着什么 我从来都不懂
                    </ListItem>
                    <ListItem href="http://www.amazeui.org">不打扰 是我的温柔</ListItem>
                </List>

                <List static>
                    <ListItem>脱下长日的假面</ListItem>
                    <ListItem>奔向梦幻的疆界</ListItem>
                    <ListItem>南瓜马车的午夜</ListItem>
                    <ListItem>昨天太近　明天太远</ListItem>
                    <ListItem>让我享受这感觉</ListItem>
                </List>
            </div>
        );


        var listInstance2 = (
            <div>
                <List static>
                    <ListItem truncate>
                        单行截取
                    </ListItem>
                    <ListItem truncate>
                        天边风光 身边的我 都不在你眼中 你的眼中 藏着什么 我从来都不懂 天边风光 身边的我 都不在你眼中 你的眼中 藏着什么 我从来都不懂</ListItem>
                </List>
                <List>
                    <ListItem truncate href="http://www.amazeui.org">
                        走在风中 今天阳光 突然好温柔
                    </ListItem>
                    <ListItem truncate href="http://www.amazeui.org">
                        天边风光 身边的我 都不在你眼中 你的眼中 藏着什么 我从来都不懂 天边风光 身边的我 都不在你眼中 你的眼中 藏着什么 我从来都不懂
                    </ListItem>
                </List>
            </div>
        );



        var listInstance3 = (
            <div>
                <List static border>
                    <ListItem>列表边框</ListItem>
                    <ListItem>奔向梦幻的疆界</ListItem>
                    <ListItem>南瓜马车的午夜</ListItem>
                    <ListItem>昨天太近　明天太远</ListItem>
                    <ListItem>让我享受这感觉</ListItem>
                </List>

                <hr />

                <List border>
                    <ListItem href="http://www.amazeui.org">
                        走在风中 今天阳光 突然好温柔
                    </ListItem>
                    <ListItem href="http://www.amazeui.org">
                        天的温柔 地的温柔 像你抱着我 然后发现 你的改变 孤单的今后
                    </ListItem>
                    <ListItem href="http://www.amazeui.org">
                        天边风光 身边的我 都不在你眼中 你的眼中 藏着什么 我从来都不懂
                    </ListItem>
                    <ListItem href="http://www.amazeui.org">
                        不打扰 是我的温柔
                    </ListItem>
                </List>
            </div>
        );



        var listInstance4 = (
            <div>
                <List static border striped>
                    <ListItem>脱下长日的假面</ListItem>
                    <ListItem>奔向梦幻的疆界</ListItem>
                    <ListItem>南瓜马车的午夜</ListItem>
                    <ListItem>昨天太近　明天太远</ListItem>
                    <ListItem>让我享受这感觉</ListItem>
                </List>

                <hr />

                <List striped border>
                    <ListItem href="http://www.amazeui.org">
                        走在风中 今天阳光 突然好温柔
                    </ListItem>
                    <ListItem href="http://www.amazeui.org">
                        天的温柔 地的温柔 像你抱着我 然后发现 你的改变 孤单的今后
                    </ListItem>
                    <ListItem href="http://www.amazeui.org">
                        天边风光 身边的我 都不在你眼中 你的眼中 藏着什么 我从来都不懂
                    </ListItem>
                    <ListItem href="http://www.amazeui.org">
                        不打扰 是我的温柔
                    </ListItem>
                </List>

            </div>
        );



        var listInstance5 = (
            <div>
                <List border static>
                    <ListItem>
                        <Badge amStyle="warning">NO</Badge><Badge amStyle="success">YEs</Badge>走在风中 今天阳光 突然好温柔
                    </ListItem>
                    <ListItem>
                        <Badge>1</Badge>天的温柔 地的温柔 像你抱着我 然后发现 你的改变 孤单的今后
                    </ListItem>
                    <ListItem>
                        <Badge>20</Badge>奔向梦幻的疆界
                    </ListItem>
                    <ListItem>
                        <Badge>5</Badge>让我享受这感觉
                    </ListItem>
                </List>
            </div>
        );

        var listInstance6 = (
            <div>
                <List border static>
                    <ListItem>
                        <Badge amStyle="warning">NO</Badge><Badge amStyle="success">YEs</Badge>
                        <a href="#" target="_blank">走在风中 今天阳光 突然好温柔</a>
                    </ListItem>
                    <ListItem>
                        <Badge>1</Badge>
                        <a href="#" target="_blank">天的温柔 地的温柔 像你抱着我 然后发现 你的改变 孤单的今后</a>
                    </ListItem>
                    <ListItem>
                        <Badge>20</Badge>
                        <a href="#" target="_blank">奔向梦幻的疆界</a>
                    </ListItem>
                    <ListItem>
                        <Badge>5</Badge>
                        <a href="#" target="_blank">让我享受这感觉</a>
                    </ListItem>
                </List>
            </div>
        );


        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <div className="demo_box">{listInstance1}</div>
                    <div className="demo_box">{listInstance2}</div>
                    <div className="demo_box">{listInstance3}</div>
                    <div className="demo_box">{listInstance4}</div>
                    <div className="demo_box">{listInstance5}</div>
                    <div className="demo_box">{listInstance6}</div>
                </div>
            </div>
        );
    }
};

module.exports = Main;

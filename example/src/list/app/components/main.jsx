import List from '../../../../../src/list.jsx';
import ListItem from '../../../../../src/listItem.jsx';
import Badge from '../../../../../src/badge.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

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
                    <p>{listInstance1}</p>
                    <p>{listInstance2}</p>
                    <p>{listInstance3}</p>
                    <p>{listInstance4}</p>
                    <p>{listInstance5}</p>
                    <p>{listInstance6}</p>
                </div>
            </div>
        );
    }
};

module.exports = Main;

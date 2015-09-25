/** In this file, we create a React component which incorporates components provided by material-ui */
import React from 'react';
import Button from '../../../../../src/button.jsx';
import ButtonToolbar from '../../../../../src/buttonToolbar.jsx';
import ButtonGroup from '../../../../../src/buttonGroup.jsx';
import Icon from '../../../../../src/icon.jsx';
import LoadingButton from '../../../../../src/loadingButton.jsx';
import ButtonCheck from '../../../../../src/buttonCheck.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        /*
        * 按钮系列组件包括 Button、ButtonGroup、ButtonGroup 等。

         Button

         按钮组件包含以下属性：

         amSize: string 按钮大小
         lg
         sm
         xs
         amStyle: string 按钮颜色
         primary
         secondary
         warning
         success
         danger
         link
         radius: bool 圆角样式
         round: bool 椭圆样式
         active: bool 是否激活
         disabled: bool 是否禁用
        * */

        //1 默认样式
        var buttonsInstance1 = (
            <ButtonToolbar>
                <Button>Default</Button>
                <Button amStyle="primary">Primary</Button>
                <Button amStyle="secondary">Secondary</Button>
                <Button amStyle="success">Success</Button>
                <Button amStyle="warning">Warning</Button>
                <Button amStyle="danger">Danger</Button>
                <Button amStyle="link">Link</Button>
            </ButtonToolbar>
        );


        //2 圆角
        var buttonsInstance2 = (
            <ButtonToolbar>
                <Button radius>Default</Button>
                <Button amStyle="primary" radius>Primary</Button>
                <Button amStyle="secondary" radius>Secondary</Button>
                <Button amStyle="success" radius>Success</Button>
                <Button amStyle="warning" radius>Warning</Button>
                <Button amStyle="danger" radius>Danger</Button>
            </ButtonToolbar>
        );

        //3 椭圆
        var buttonsInstance3 = (
            <ButtonToolbar>
                <Button round>Default</Button>
                <Button amStyle="primary" round>Primary</Button>
                <Button amStyle="secondary" round>Secondary</Button>
                <Button amStyle="success" round>Success</Button>
                <Button amStyle="warning" round>Warning</Button>
                <Button amStyle="danger" round>Danger</Button>
            </ButtonToolbar>
        );


        //4 激活状态
        var buttonsInstance4 = (
            <ButtonToolbar>
                <Button active>Default - active</Button>
                <Button amStyle="primary" active>Primary - active</Button>
            </ButtonToolbar>
        );

        //5 禁用状态
        var buttonsInstance5 = (
            <ButtonToolbar>
                <Button disabled>Default - disabled</Button>
                <Button amStyle="primary" disabled>Primary - disabled</Button>
            </ButtonToolbar>
        );

        //6 按钮尺寸
        var buttonsInstance6 = (
            <div>
                <ButtonToolbar>
                    <Button amSize="xl">按钮 - xl</Button>
                    <Button amStyle="primary" amSize="xl">按钮 - xl</Button>
                </ButtonToolbar>

                <ButtonToolbar>
                    <Button amSize="lg">按钮 - lg</Button>
                    <Button amStyle="primary" amSize="lg">按钮 - lg</Button>
                </ButtonToolbar>

                <ButtonToolbar>
                    <Button>按钮 - 默认</Button>
                    <Button amStyle="primary">按钮 - 默认</Button>
                </ButtonToolbar>

                <ButtonToolbar>
                    <Button amSize="sm">按钮 - sm</Button>
                    <Button amStyle="primary" amSize="sm">按钮 - sm</Button>
                </ButtonToolbar>

                <ButtonToolbar>
                    <Button amSize="xs">按钮 - xs</Button>
                    <Button amStyle="primary" amSize="xs">按钮 - xs</Button>
                </ButtonToolbar>
            </div>
        );


        //7 块级显示
        var buttonsInstance7 = (
            <div>
                <Button amStyle="primary" block>块级显示的按钮</Button>
                <Button block>块级显示的按钮</Button>
            </div>
        );

        //8 结合 Icon
        var buttonsInstance8 = (
            <ButtonToolbar>
                <Button>
                    <Icon icon="cog" /> 设置
                </Button>

                <Button amStyle="warning">
                    <Icon icon="shopping-cart" /> 败家
                </Button>

                <Button>
                    <Icon icon="spinner" spin /> Loading
                </Button>

                <Button amStyle="secondary">
                    下载片片 <Icon icon="cloud-download" />
                </Button>
            </ButtonToolbar>
        );

        //Button Group
        /*
        * <ButtonGroup> 有以下属性：

         tacked: bool 是否垂直排列
         justify: justify 是否自适应宽度
        * */
        //基本按钮组
        var buttonsInstance10 = (
            <div>
                <ButtonGroup>
                    <Button>左手</Button>
                    <Button>猪手</Button>
                    <Button>右手</Button>
                </ButtonGroup>

                <ButtonGroup>
                    <Button amStyle="primary">左手</Button>
                    <Button amStyle="primary">猪手</Button>
                    <Button amStyle="primary">右手</Button>
                </ButtonGroup>

                <ButtonGroup>
                    <Button amStyle="success" round>左手</Button>
                    <Button amStyle="success" round>猪手</Button>
                    <Button amStyle="success" round>右手</Button>
                </ButtonGroup>
            </div>
        );


        //按钮工具栏
        var buttonsInstance11 = (
            <ButtonToolbar>
                <ButtonGroup>
                    <Button amStyle="primary"><i
                        className="am-icon-align-left"></i></Button>
                    <Button amStyle="primary"><i
                        className="am-icon-align-center"></i></Button>
                    <Button amStyle="primary"><i
                        className="am-icon-align-right"></i></Button>
                    <Button amStyle="primary"><i
                        className="am-icon-align-justify"></i></Button>
                </ButtonGroup>

                <ButtonGroup>
                    <Button amStyle="primary"><i
                        className="am-icon-font"></i></Button>
                    <Button amStyle="primary"><i
                        className="am-icon-bold"></i></Button>
                    <Button amStyle="primary"><i
                        className="am-icon-italic"></i></Button>
                    <Button amStyle="primary"><i
                        className="am-icon-underline"></i></Button>
                </ButtonGroup>

                <ButtonGroup className="am-btn-group">
                    <Button amStyle="primary"><i
                        className="am-icon-copy"></i></Button>
                    <Button amStyle="primary"><i
                        className="am-icon-paste"></i></Button>
                </ButtonGroup>
            </ButtonToolbar>
        );

        //3 按钮组尺寸
        var buttonsInstance12 = (
            <div>
                <ButtonGroup>
                    <Button amSize="lg">左手 lg</Button>
                    <Button amSize="lg">猪手 lg</Button>
                    <Button amSize="lg">右手 lg</Button>
                </ButtonGroup>

                <br/><br/>

                <ButtonGroup>
                    <Button>左手</Button>
                    <Button>猪手</Button>
                    <Button>右手</Button>
                </ButtonGroup>

                <br/><br/>

                <ButtonGroup>
                    <Button amSize="sm">左手 - sm</Button>
                    <Button amSize="sm">猪手 - sm</Button>
                    <Button amSize="sm">右手 - sm</Button>
                </ButtonGroup>

                <br/><br/>

                <ButtonGroup>
                    <Button amSize="xs">左手 - xs</Button>
                    <Button amSize="xs">猪手 - xs</Button>
                    <Button amSize="xs">右手 - xs</Button>
                </ButtonGroup>
            </div>
        );


        //4  垂直排列
        var buttonsInstance13 = (
            <ButtonGroup stacked>
                <Button>左手 - 垂直排列</Button>
                <Button>猪手 - 垂直排列</Button>
                <Button>右手 - 垂直排列</Button>
            </ButtonGroup>
        );


        //5  宽度自适应
        var buttonsInstance14 = (
            <ButtonGroup justify>
                <Button>左手</Button>
                <Button>猪手</Button>
                <Button>右手</Button>
            </ButtonGroup>
        );


        //按钮交互
        //按钮加载状态
        var handler = function() {
            // do something...
            setTimeout(function() {
                // done
                this.setState({isLoading: false});
            }.bind(this), 2000);
        };

        var buttonsInstance15 = (
            <LoadingButton
                clickHandler={handler}
                loadingText="正在加载..."
                amStyle="secondary">
                获取信息
            </LoadingButton>
        );

        //按钮式单选/复选框
        var buttonsInstance16 = (
            <div>
                复选
                <br/>
                <ButtonCheck>
                    <Button amStyle="primary" componentTag="label">
                        <input type="checkbox" name="doc-js-btn" value="苹果"/> 苹果</Button>
                    <Button amStyle="primary" componentTag="label">
                        <input type="checkbox" name="doc-js-btn" value="橘子"/> 橘子
                    </Button>
                    <Button amStyle="primary" componentTag="label">
                        <input type="checkbox" name="doc-js-btn" value="香蕉"/> 香蕉
                    </Button>
                </ButtonCheck>
                <hr/>
                单选
                <br/>
                <ButtonCheck>
                    <Button amStyle="primary" componentTag="label">
                        <input type="radio" name="options" value="选项 1" id="option1"/> 选项 1
                    </Button>
                    <Button amStyle="primary" componentTag="label">
                        <input type="radio" name="options" value="选项 2" id="option2"/> 选项 2
                    </Button>
                    <Button amStyle="primary" componentTag="label">
                        <input type="radio" name="options" value="选项 3" id="option3"/> 选项 3
                    </Button>
                    <Button amStyle="primary" componentTag="label" disabled>
                        <input type="radio" name="options" value="选项 4" id="option4"/> 选项 4
                    </Button>
                </ButtonCheck>
            </div>
        );






        return (
            <div className="demos">
                {buttonsInstance1}
                <br />
                {buttonsInstance2}
                <br />
                {buttonsInstance3}
                <br />
                {buttonsInstance4}
                <br />
                {buttonsInstance5}
                <br />
                {buttonsInstance6}
                <br />
                {buttonsInstance7}
                <br />
                {buttonsInstance8}
                <br />
                {buttonsInstance10}
                <br />
                {buttonsInstance11}
                <br />
                {buttonsInstance12}
                <br />
                {buttonsInstance13}
                <br />
                {buttonsInstance14}
                <br />
                {buttonsInstance15}
                <br />
                {buttonsInstance16}
                <br />
            </div>
        );
    }
}


module.exports = Main;

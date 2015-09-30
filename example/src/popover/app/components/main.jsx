import React from 'react';
import Popover from '../../../../../src/popover.jsx';
import PopoverTrigger from '../../../../../src/popoverTrigger.jsx';
import Button from '../../../../../src/button.jsx';
import ButtonToolbar from '../../../../../src/buttonToolbar.jsx';
import Icon from '../../../../../src/icon.jsx';


class Main extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {

        /*
        * 组件介绍

         弹出层需要 <Popover>、<PopoverTrigger> 结合使用。

         <Popover> 组件，弹出层，含以下属性：

         placement: string - 显示位置 left、right、top、bottom
         positionLeft: number - 左边定位
         positionTop: number - 顶部定位
         amStyle: string - popover 样式，可选值为 primary、secondary、success、warning、danger
         amSize: number - popover 大小，可选值为 lg、sm
         <PopoverTrigger> 组件，Popover 触发器。

         trigger: string|array - 触发 popover 的形式，click、focus、click，默认为 [focus,click]；
         placement: string 位置，left、right、top、bottom，必须设置；
         amStyle: string - popover 样式，可选值为 primary、secondary、success、warning、danger；
         amSize: number - popover 大小，可选值为 lg、sm。
         placement、amStyle、amSize 该属性会传递到 <Popover> 上。如果 <PopoverTrigger> 设置了，<Popover> 就不用再设置。
        * */


        //1  渲染 Popover
        var popoverInstance1 = (
            <div style={{height: 80}}>
                <Popover placement="right" positionLeft={50} positionTop={50}>
                    这一个是默认 Popover
                </Popover>
            </div>
        );


        //2  在 Trigger 上显示
        var placements = ['Left', 'Top', 'Bottom', 'Right'];
        var styles = ['primary', 'secondary', 'success', 'warning'];

        var popoverInstance2 = (
            <ButtonToolbar>
                {
                    placements.map(function(placement, i) {
                        return (
                            <PopoverTrigger
                                key={i}
                                placement={placement.toLowerCase()}
                                popover={<Popover><strong>{placement}</strong> 显示的 Popover</Popover>}>
                                <Button amStyle={styles[i]}>{placement} Popover</Button>
                            </PopoverTrigger>
                        );
                    })
                }
            </ButtonToolbar>
        );


        //3  点击显示
        var popoverInstance3 = (
            <PopoverTrigger
                trigger="click" // 设置触发方式
                amStyle="warning" // 设置 popover 样式
                amSize="sm" // 设置 popover 大小
                placement="top"
                popover={<Popover><strong>Click</strong> 显示的 Popover</Popover>}>
                <Button amStyle="primary">点击显示 Popover</Button>
            </PopoverTrigger>
        );



        //4  Tooltip 效果
        var LinkTooltip = React.createClass({
            render: function() {
                var tooltip = <Popover amSize="sm">{this.props.tooltip}</Popover>;

                return (
                    <PopoverTrigger
                        placement="top"
                        popover={tooltip}
                        delayOpen={300}
                        delayClose={150}>
                        <a
                            href={this.props.href}>
                            {this.props.children}
                        </a>
                    </PopoverTrigger>
                );
            }
        });

        var popoverInstance4 = (
            <p>
                置身<LinkTooltip tooltip="mountain people mountain sea" href="http://baike.baidu.com/link?url=8z5JIKuhAR-ffyW9pl8f0ahxaAnyZRaZhWoaWfviOk1wdgOIvWyuYQ2TLo8AtnzmWtliphjNhtShtOyOQwcvL">人群</LinkTooltip>中，你只需要被淹没，享受，沉默；<LinkTooltip tooltip="不被了解的怪人" href="http://baike.baidu.com/view/9548143.htm">退到</LinkTooltip>人群后，你只需给予双手，微笑，等候。
            </p>
        );




        return (
            <div className="demos">
                <p>{popoverInstance1}</p>
                <p>{popoverInstance2}</p>
                <p>{popoverInstance3}</p>
                <p>{popoverInstance4}</p>
            </div>
        );
    }
};

module.exports = Main;

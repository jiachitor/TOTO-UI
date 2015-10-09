import React from 'react';
import ScrollSpy from '../../../../../src/scrollSpy.jsx';
import Grid from '../../../../../src/grid.jsx';
import Col from '../../../../../src/col.jsx';
import Panel from '../../../../../src/panel.jsx';



class Main extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {

        /*
        * 组件介绍

         <ScrollSpy> 组件，组件进入视口时执行 CSS 动画。

         属性说明：

         animation: string - 动画名称，默认为 fade；
         delay: number - 延迟执行时间，默认为 0；
         repeat: bool - 组件再次进入视口时是否重复动画，默认为 false。
        * */


        //1  渲染 Popover
        var bullshit = '生命是一团欲望，欲望不满足便痛苦，满足便无聊。人生就在痛苦和无聊之间摇摆。——叔本华';
        var cols = {
            sm: 12,
            md: 4,
            lg: 3
        };

        var scrollSpyInstance = (
            <div>
                <Grid>
                    <Col {...cols}>
                        <ScrollSpy>
                            <Panel amStyle="primary" header="Fade">
                                {bullshit}
                            </Panel>
                        </ScrollSpy>
                    </Col>
                </Grid>


                <Grid>
                    <Col {...cols} mdOffset={4} lgOffset={3}>
                        <ScrollSpy repeat animation="scale-up">
                            <Panel amStyle="secondary" header="scale-up">
                                {bullshit}
                            </Panel>
                        </ScrollSpy>
                    </Col>
                </Grid>

                <Grid>
                    <Col {...cols} mdOffset={8} lgOffset={6}>
                        <ScrollSpy repeat animation="scale-down">
                            <Panel amStyle="success" header="scale-down">
                                {bullshit}
                            </Panel>
                        </ScrollSpy>
                    </Col>
                </Grid>

                <Grid>
                    <Col {...cols} mdOffset={8} lgOffset={9}>
                        <ScrollSpy repeat animation="slide-top">
                            <Panel amStyle="warning" header="slide-top">
                                {bullshit}
                            </Panel>
                        </ScrollSpy>
                    </Col>
                </Grid>

                <Grid>
                    <Col {...cols} mdOffset={8} lgOffset={6}>
                        <ScrollSpy repeat animation="slide-bottom">
                            <Panel amStyle="danger" header="slide-bottom">
                                {bullshit}
                            </Panel>
                        </ScrollSpy>
                    </Col>
                </Grid>

                <Grid>
                    <Col {...cols} mdOffset={4} lgOffset={3}>
                        <ScrollSpy repeat animation="slide-right">
                            <Panel amStyle="secondary" header="slide-right">
                                {bullshit}
                            </Panel>
                        </ScrollSpy>
                    </Col>
                </Grid>

                <Grid>
                    <Col {...cols}>
                        <ScrollSpy repeat animation="slide-left">
                            <Panel amStyle="primary" header="slide-left">
                                {bullshit}
                            </Panel>
                        </ScrollSpy>
                    </Col>
                </Grid>

                <Grid>
                    <Col {...cols}>
                        <ScrollSpy repeat animation="fade">
                            <Panel amStyle="primary" header="fade">
                                {bullshit}
                            </Panel>
                        </ScrollSpy>
                    </Col>

                    <Col {...cols}>
                        <ScrollSpy repeat animation="fade" delay={300}>
                            <Panel amStyle="secondary" header="fade">
                                {bullshit}
                            </Panel>
                        </ScrollSpy>
                    </Col>

                    <Col {...cols}>
                        <ScrollSpy repeat animation="fade" delay={600}>
                            <Panel amStyle="success" header="fade">
                                {bullshit}
                            </Panel>
                        </ScrollSpy>
                    </Col>

                    <Col {...cols}>
                        <ScrollSpy repeat animation="fade" delay={900}>
                            <Panel amStyle="warning" header="fade">
                                {bullshit}
                            </Panel>
                        </ScrollSpy>
                    </Col>
                </Grid>
            </div>
        );

        return (
            <div className="demos">
                <div className="demo_box">{scrollSpyInstance}</div>
            </div>
        );
    }
};

module.exports = Main;

import React from 'react';
import Grid from '../../../../../src/grid.jsx';
import Col from '../../../../../src/col.jsx';
import Container from '../../../../../src/container.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
         /*
         *
          组件介绍

          网格系统共封装了三个 React 组件：

          <Grid>: 行，对应 .am-g
          fixed: bool
          collapse: bool

          <Col>: 列，对应 .am-u-xx
          sm, md, lg: number
          end: bool
          xxOffset: number
          xxPush: number
          xxPull: number
          xxResetOrder: bool
          xxCentered: bool
          xxUnCentered: bool

          <Container>: 容器 .am-container

         * */



        //1 一个基本网格
        var gridInstance1 = (
            <Grid className="doc-g">
                <Col sm={4}>4</Col>
                <Col sm={8}>8</Col>
            </Grid>
        );


        //2 响应式网格
        var gridInstance2 = (
            <Grid className="doc-g">
                <Col sm={12} md={5} lg={4}>sm-12 md-5 lg-4</Col>
                <Col sm={12} md={7} lg={8}>sm-12 md-7 lg-8</Col>
            </Grid>
        );

        //3 添加 fixed 属性限制宽度
        var gridInstance3 = (
            <Grid fixed className="doc-g">
                <Col sm={4}>4</Col>
                <Col sm={8}>8</Col>
            </Grid>
        );

        //4  容器  容器用来放置全宽的内容，避免没有必要的标签嵌套。
        var gridInstance4 = (
            <div>
                {/* 全宽的列可以使用容器，不需要的网格嵌套 */}
                <Container>我是一个容器里的内容</Container>
            </div>
        );

        //  多行
        var gridInstance5 = (
            <div>
                {/* 每一行使用一个 Grid，方便控制每行的样式 */}
                <h4>每行一个 Grid</h4>
                <Grid className="doc-g">
                    <Col sm={6}>6</Col>
                    <Col sm={6}>6</Col>
                </Grid>

                <Grid className="doc-g">
                    <Col sm={6}>6</Col>
                    <Col sm={6}>6</Col>
                </Grid>

                {/* 当然，这样写也没问题 */}
                <h4>多行嵌套在一个 Grid 里</h4>
                <Grid className="doc-g">
                    <Col sm={6}>6</Col>
                    <Col sm={6}>6</Col>

                    <Col sm={6}>6</Col>
                    <Col sm={6}>6</Col>
                </Grid>
            </div>
        );


        //6   不足 12 列的网格   end 属性
        var gridInstance6 = (
            <div>
                {/* Grid 中最后一个 Col 会向右浮动，如果不足 12 列添加 `end` 属性可以取消想用浮动 */}
                <p>没有添加 end 属性</p>
                <Grid className="doc-g">
                    <Col sm={3}>3</Col>
                    <Col sm={3}>3</Col>
                    <Col sm={3}>3</Col>
                </Grid>
                <hr/>
                <p>添加了 end 属性</p>
                <Grid className="doc-g">
                    <Col sm={3}>3</Col>
                    <Col sm={3}>3</Col>
                    <Col sm={3} end>3</Col>
                </Grid>
            </div>
        );


        /*=================================================================*/

        /*
        * 进阶使用

         列边距

         网格系统共封装了三个 React 组件：

         <Grid>: 行，对应 .am-g
         fixed: bool
         collapse: bool

         <Col>: 列，对应 .am-u-xx
         sm, md, lg: number
         end: bool
         xxOffset: number
         xxPush: number
         xxPull: number
         xxResetOrder: bool
         xxCentered: bool
         xxUnCentered: bool

         <Container>: 容器 .am-container
        * */

        //列边距
        var gridInstance7 = (
            <div>
                {/* 在 Col 上设置 xxOffset 属性 */}
                <Grid className="doc-g">
                    <Col sm={1}>1</Col>
                    <Col sm={11}>11</Col>
                </Grid>

                <Grid className="doc-g">
                    <Col sm={1}>1</Col>
                    <Col sm={9} smOffset={2}>9</Col>
                </Grid>

                <Grid className="doc-g">
                    <Col sm={1}>1</Col>
                    <Col sm={7} smOffset={4}>7</Col>
                </Grid>

                <Grid className="doc-g">
                    <Col sm={1}>1</Col>
                    <Col sm={5} smOffset={6}>5</Col>
                </Grid>

                <Grid className="doc-g">
                    <Col sm={1}>1</Col>
                    <Col sm={3} smOffset={8}>3</Col>
                </Grid>

                <Grid className="doc-g">
                    <Col sm={1}>1</Col>
                    <Col sm={1} smOffset={10}>1</Col>
                </Grid>
            </div>
        );


        //居中的列
        var gridInstance8 = (
            <div>
                {/* 在 Col 上设置 xxCentered 属性 */}

                {/* 始终居中 */}
                <Grid className="doc-g">
                    <Col sm={3} smCentered>3 centered</Col>
                </Grid>

                {/* lg 区间居中 */}
                <Grid className="doc-g">
                    <Col sm={6} lgCentered>6 lgCentered</Col>
                </Grid>

                {/* lg 区间不居中 */}
                <Grid className="doc-g">
                    <Col sm={9} smCentered lgUnCentered>9 md down centered</Col>
                </Grid>
            </div>
        );


        // 9：Push/Pull 实现结构与表现调整
        var gridInstance9 = (
            <Grid className="doc-g">
                {/*
                 结构中 main 在前， sidebar 在后
                 通过 push/pull，在 md 区间将 sidebar 显示到左侧，main 显示到右侧
                 lg 区间 reset 回结构排序
                 */}
                <Col md={8} mdPush={4} lgResetOrder>8 main</Col>
                <Col md={4} mdPull={8} lgResetOrder>4 sidebar</Col>
            </Grid>
        );


        //  10：使用 collapse 属性移除列边距
        var gridInstance10 = (
            <Grid className="doc-g" collapse>
                <Col sm={6}>6</Col>
                <Col sm={6}>6</Col>
            </Grid>
        );

        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <p>{gridInstance1}</p>
                    <p>{gridInstance2}</p>
                    <p>{gridInstance3}</p>
                    <p>{gridInstance4}</p>
                    <p>{gridInstance5}</p>
                    <p>{gridInstance6}</p>
                    <p>{gridInstance7}</p>
                    <p>{gridInstance8}</p>
                    <p>{gridInstance9}</p>
                    <p>{gridInstance10}</p>
                </div>
            </div>
        );
    }
};

module.exports = Main;

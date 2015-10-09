import React from 'react';
import Dropdown from '../../../../../src/dropdown.jsx';
import DropdownItem from '../../../../../src/dropdownItem.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        /*
        * 组件介绍

         <Dropdown> 组件，用于显示下拉菜单（内容）。

         <Dropdown> 属性列表：

         sm: number - sm 区间列数；
         md: number - md 区间列数；
         lg: number - lg 区间列数。
         子组件：

         <Dropdown.Item> 用于显示带链接的 <li>
         组件演示
        * */

        var dropdownInstance1 = (
            <Dropdown title="下拉列表" btnStyle="primary">
                <DropdownItem header>标题</DropdownItem>
                <DropdownItem>快乐的方式不只一种</DropdownItem>
                <DropdownItem active>最荣幸是</DropdownItem>
                <DropdownItem>谁都是造物者的光荣</DropdownItem>
                <DropdownItem disabled>就站在光明的角落</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>天空海阔 要做最坚强的泡沫</DropdownItem>
            </Dropdown>
        );

        var dropdownInstance2 = (
            <Dropdown title="下拉列表" btnStyle="success" dropup>
                <DropdownItem header>标题</DropdownItem>
                <DropdownItem>快乐的方式不只一种</DropdownItem>
                <DropdownItem active>最荣幸是</DropdownItem>
                <DropdownItem>谁都是造物者的光荣</DropdownItem>
                <DropdownItem disabled>就站在光明的角落</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>天空海阔 要做最坚强的泡沫</DropdownItem>
            </Dropdown>
        );


        var dropdownInstance3 = (
            <Dropdown title="下拉内容" btnStyle="secondary" contentTag="div">
                <h2>I am what I am</h2>
                <p>
                    多么高兴 在琉璃屋中快乐生活
                    对世界说 甚么是光明和磊落
                    我就是我 是颜色不一样的烟火
                </p>
            </Dropdown>
        );


        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <div className="demo_box">{dropdownInstance1}</div>
                    <div className="demo_box">{dropdownInstance2}</div>
                    <div className="demo_box">{dropdownInstance3}</div>
                </div>
            </div>
        );
    }
};

module.exports = Main;

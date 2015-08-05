import Selected from '../../../../../src/selected.jsx';
import Button from '../../../../../src/button.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        var data1 = [
            {value: 'one', label: 'One'},
            {value: 'two', label: 'Two'},
            {value: 'three', label: 'Three'}
        ];

        var props1 = {
            data: data1,
            onChange: function(value) {
                console.log('value', value);
            }
        }
        var selectedInstance1 = (
            <div>
                <Selected {...props1} />

                {/* 设置默认值 */ ' '}
                <Selected {...props1} btnStyle="primary" value="one" />
            </div>
        );

        /*##########################################################################*/
        //表单提交测试
        /* eslint-disable */
        var data2 = [
            {value: 'one', label: 'One'},
            {value: 'two', label: 'Two'},
            {value: 'three', label: 'Three'}
        ];

        var props2 = {
            name: 'selected', // 注意设置 `name` 属性
            data: data2,
            onChange: function(value) {
                console.log('当前值为：', value);
            }
        };

        var selectedInstance2 = (
            <form target="_blank">
                <p>选择一个值，然后提交表单试试</p>
                <Selected {...props2} />
                <Button type="submit">提交</Button>
            </form>
        );


        /*##########################################################################*/

        var options3 = [
            {value: 'one', label: 'One'},
            {value: 'two', label: 'Two'},
            {value: 'three', label: 'Three'},
            {value: 'a', label: 'Apple'},
            {value: 'b', label: 'Banana'},
            {value: 'o', label: 'Orange'},
            {value: 'm', label: 'Mango'}
        ];

        var props3 = {
            data: options3,
            onChange: function(value) {
                console.log('当前值为：', value);
            },
            multiple: true,
            maxHeight: 150,
            btnStyle: 'secondary'
        };

        var selectedInstance3 = (
            <div>
                <Selected {...props3} />

                {/* 设置默认值 */' '}
                <Selected {...props3} btnStyle="warning" value="one,o" />
            </div>
        );



        /*##########################################################################*/

        var options4 = [
            {group: 'Some Group', value: 'one', label: 'One'},
            {group: 'Some Group', value: 'two', label: 'Two'},
            {group: 'Some Group', value: 'three', label: 'Three'},
            {group: 'Fruit', value: 'a', label: 'Apple'},
            {group: 'Fruit', value: 'b', label: 'Banana'},
            {group: 'Fruit', value: 'o', label: 'Orange'},
            {group: 'Fruit', value: 'm', label: 'Mango'}
        ];

        var props4 = {
            data: options4,
            onChange: function(value) {
                console.log('当前值为：', value);
            },
            multiple: true,
            maxHeight: 150,
            btnStyle: 'primary'
        };

        var selectedInstance4 = (
            <div>
                <Selected {...props4} />
            </div>
        );



        /*##########################################################################*/

        var options5 = [
            {value: 'one', label: 'One'},
            {value: 'two', label: 'Two'},
            {value: 'three', label: 'Three'},
            {value: 'a', label: 'Apple'},
            {value: 'b', label: 'Banana'},
            {value: 'o', label: 'Orange'},
            {value: 'm', label: 'Mango'}
        ];

        var props5 = {
            data: options5,
            onChange: function(value) {
                console.log('当前值为：', value);
            },
            multiple: true,
            maxHeight: 150,
            btnStyle: 'success',
            searchBox: true
        };

        var myFilter = function(filterText, option) {
            // 无论用户输入毛过滤字符，都只匹配值为 `one` 项
            return (option.value === 'one');
        };

        var selectedInstance5 = (
            <div>
                <Selected {...props5} />

                {/* 自定义过滤函数 */ ' '}
                <Selected {...props5} optionFilter={myFilter} btnStyle="danger" />
            </div>
        );




        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <p>单选{selectedInstance1}</p>
                    <p>表单提交测试{selectedInstance2}</p>
                    <p>多选{selectedInstance3}</p>
                    <p>选项分组{selectedInstance4}</p>
                    <p>搜索过滤框{selectedInstance5}</p>
                </div>
            </div>
        );
    }
};

module.exports = Main;

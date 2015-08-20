import React from 'react';
import Form from '../../../../../src/form.jsx';
import Input from '../../../../../src/input.jsx';
import FormGroup from '../../../../../src/formGroup.jsx';
import ButtonToolbar from '../../../../../src/buttonToolbar.jsx';
import Icon from '../../../../../src/icon.jsx';
import Button from '../../../../../src/button.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        //基本使用
        var formInstance1 = (
            <form className="ui-form" target="_blank">
                <Input type="text" label="用户名" id="doc-ipt-1" placeholder="输入用户名" />
                <Input type="password" label="密码" id="doc-ipt-2" placeholder="输入密码" />
                <Input type="file" label="尊容" id="doc-ipt-3" help="选择一个文件" />
                <Input type="checkbox" label="选我选我选我" checked readOnly />
                <Input type="radio" name="doc-radio-1" label="单选框 - 选项 1" />
                <Input type="radio" name="doc-radio-1" label="单选框 - 选项 2" />

                {/* inline checkbox  */}
                <FormGroup>
                    <label>多选：</label>
                    <Input type="checkbox" name="doc-checkbox-1" label="选我" inline />
                    <Input type="checkbox" name="doc-checkbox-1" label="也可以选我" inline />
                    <Input type="checkbox" name="doc-checkbox-1" label="还可以选我" inline />
                </FormGroup>

                <FormGroup>
                    <label>单选：</label>
                    <Input type="radio" name="doc-radio-2" label="只能选我" inline />
                    <Input type="radio" name="doc-radio-2" label="或者选我" inline />
                    <Input type="radio" name="doc-radio-2" label="再或者我" inline />
                </FormGroup>

                <Input type="select" label="单选框">
                    <option value="v1">选项 1</option>
                    <option value="v2">选项 2</option>
                    <option value="v3">选项 3</option>
                    <option value="v4">选项 4</option>
                </Input>
                <Input type="select" label="多选框" multiple>
                    <option value="v1">选项 - 1</option>
                    <option value="v2">选项 - 2</option>
                    <option value="v3">选项 - 3</option>
                    <option value="v4">选项 - 4</option>
                </Input>
                <Input type="textarea" label="文本域" placeholder="说点神马..." />

                {/* 输入框形状 */}
                <Input label="圆角输入框" radius />
                <Input label="椭圆输入框" round />

                {/* 禁用状态 */}
                <Input label="禁止使用" placeholder="说点神马..." disabled />
                <Input type="textarea" label="禁止使用" placeholder="说点神马..." disabled />
                <ButtonToolbar>
                    <Input type="submit" value="提交" standalone />
                    <Input type="reset" value="重置" amStyle="danger" standalone />
                </ButtonToolbar>
            </form>
        );


        /*--------------------------------------------------------------------*/
        //禁用内的元素
        var formInstance2 = (
            <form className="ui-form" target="_blank">
                <fieldset disabled>
                    <Input label="禁用的文本框"/>
                    <Input type="select" label="禁止选择">
                        <option value="a">禁止选择</option>
                    </Input>
                    <Input type="submit" value="提交"/>
                </fieldset>
            </form>
        );


        /*-----------------------------------------------------------------------------*/
        //水平排列
        var formInstance3 = (
            <Form horizontal>
                <Input label="用户名" labelClassName="ui-u-sm-2"
                       wrapperClassName="ui-u-sm-10" />
                <Input type="textarea" label="留言" labelClassName="ui-u-sm-2"
                       wrapperClassName="ui-u-sm-10" />
                <FormGroup>
                    <Input type="checkbox" label="有回复时邮件通知孤"
                           wrapperClassName="ui-u-sm-offset-2 ui-u-sm-10" />
                </FormGroup>
                <Input type="submit" amStyle="primary" value="提交"
                       wrapperClassName="ui-u-sm-offset-2 ui-u-sm-10" />
            </Form>
        );


        /*----------------------------------------------------------------------------------*/
        //行内排列
        var formInstance4 = (
            <Form inline>
                <Input placeholder="用户名" />
                {'\u00a0'}
                <Input placeholder="密码" />
                {'\u00a0'}
                <Input type="submit" amStyle="primary" value="登录" standalone/>
            </Form>
        );



        /*----------------------------------------------------------------------------------*/
        //表单域 Icon
        var formInstance5 = (
            <Form inline>
                <Input placeholder="用户名" icon="user" />
                {'\u00a0'}
                <Input placeholder="密码" icon="lock" />
                {'\u00a0'}
                <Input type="submit" amStyle="primary" value="登录" standalone/>
            </Form>
        );



        /*----------------------------------------------------------------------------------*/
        //验证提示
        var formInstance6 = (
            <Form>
                <Input placeholder="验证成功" label="验证成功" validation="success" />
                <Input placeholder="验证警告" label="验证警告" validation="warning" />
                <Input placeholder="验证失败" label="验证失败" validation="error" />
                <FormGroup validation="success">
                    <label>单选按钮：</label>
                    <Input type="radio" label="男" inline />
                    <Input type="radio" label="女" inline />
                </FormGroup>
            </Form>
        );


        /*----------------------------------------------------------------------------------*/
        //带图标的验证提示
        var formInstance7 = (
            <Form>
                <Input placeholder="验证成功" label="验证成功" validation="success" hasFeedback />
                <Input placeholder="验证警告" label="验证警告" validation="warning" hasFeedback />
                <Input placeholder="验证失败" label="验证失败" validation="error" hasFeedback />
                <Input placeholder="没有 Label" validation="success" hasFeedback />
            </Form>
        );


        /*----------------------------------------------------------------------------------*/
        //表单域大小
        var formInstance8 = (
            <Form horizontal>
                <Input placeholder="amSize - lg" amSize="lg" />
                <Input placeholder="default size" />
                <Input placeholder="default sm" amSize="sm" />
                <hr/>
                <Input
                    label="用户名"
                    labelClassName="ui-u-sm-2"
                    placeholder="amSize - sm"
                    wrapperClassName="ui-u-sm-10"
                    amSize="sm" />
                <Input
                    type="textarea"
                    label="留言"
                    labelClassName="ui-u-sm-2"
                    placeholder="amSize - lg"
                    wrapperClassName="ui-u-sm-10"
                    amSize="lg" />
            </Form>
        );



        /*----------------------------------------------------------------------------------*/
        //表单集
        var formInstance9 = (
            <Form>
                <fieldset className="ui-form-set">
                    <Input placeholder="用户名" standalone />
                    <Input type="password" placeholder="密码" standalone />
                    <Input type="email" placeholder="邮箱" standalone />
                </fieldset>
                <Input type="submit" value="提交" amStyle="primary" block />
            </Form>
        );


        /*----------------------------------------------------------------------------------*/
        //附加图标、文字
        var iconUser10 = <Icon icon="user" />;
        var iconPwd10 = <Icon icon="lock" />;

        var formInstance10 = (
            <Form>
                <Input addonBefore="$" addonAfter=".00" />
                <Input addonBefore="@" placeholder="Email" />
                <Input addonBefore={iconUser10} placeholder="User Name" />
                <Input addonBefore={iconPwd10} placeholder="Password" />
                <Input addonBefore={<input type="checkbox" />} placeholder="Checkbox" />
                <Input addonBefore={<input type="radio" />} placeholder="Radio" />
            </Form>
        );


        /*----------------------------------------------------------------------------------*/
        //附加按钮
        var btnSearch11 = (<Button><Icon icon="search" /></Button>);
        var btnGo11 = <Button>手气不错</Button>;

        var formInstance11 = (
            <Form>
                <Input btnBefore={btnSearch11} />
                <Input btnAfter={btnGo11} />
            </Form>
        );



        /*----------------------------------------------------------------------------------*/
        //输入框组尺寸
        var formInstance12 = (
            <Form>
                <Input addonBefore="@" placeholder="lg size" amSize="lg" />
                <Input addonBefore="@" placeholder="Default size" />
                <Input addonBefore="@" placeholder="sm size" amSize="sm" />
            </Form>
        );



        /*----------------------------------------------------------------------------------*/
        //输入框组样式
        var iconUser13 = <span className="ui-icon-user"></span>;
        var btnSearch13 = (
            <Button amStyle="primary">{/* Button 仍然需要设置样式 */}
                <Icon icon="search" />
            </Button>
        );

        var formInstance13 = (
            <Form>
                <Input addonBefore={iconUser13} placeholder="User Name" amStyle="primary" />
                <Input addonBefore={iconUser13} placeholder="User Name" amStyle="secondary" />
                <Input addonBefore={iconUser13} placeholder="User Name" amStyle="success" />
                <Input addonBefore={iconUser13} placeholder="User Name" amStyle="warning" />
                <Input addonBefore={iconUser13} placeholder="User Name" amStyle="danger" />
                <Input btnBefore={btnSearch13} placeholder="手气不错" amStyle="primary" />
            </Form>
        );



        /*----------------------------------------------------------------------------------*/
        //简单验证示例
        var ValidationExample14 = React.createClass({
            getInitialState: function() {
                return {
                    value: ''
                };
            },

            validate: function() {
                var length = this.state.value.length;

                if (length < 10 && length > 4) {
                    return 'success';
                } else {
                    return 'error';
                }
            },

            handleChange: function() {
                this.setState({
                    value: this.refs.field.getValue()
                });
            },

            render: function() {
                return (
                    <Input
                        value={this.state.value}
                        placeholder="输入 5-9 个字符用户名"
                        label="表单验证示例"
                        validation={this.validate()}
                        hasFeedback
                        ref="field"
                        onChange={this.handleChange} />
                );
            }
        });

        var formInstance14 = (
            <ValidationExample14 />
        );







        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <p>{formInstance1}</p>
                    <p>{formInstance2}</p>
                    <p>{formInstance3}</p>
                    <p>{formInstance4}</p>
                    <p>{formInstance5}</p>
                    <p>{formInstance6}</p>
                    <p>{formInstance7}</p>
                    <p>{formInstance8}</p>
                    <p>{formInstance9}</p>
                    <p>{formInstance10}</p>
                    <p>{formInstance11}</p>
                    <p>{formInstance12}</p>
                    <p>{formInstance13}</p>
                    <p>{formInstance14}</p>
                </div>
            </div>
        );
    }
};

module.exports = Main;

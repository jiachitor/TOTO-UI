import React from 'react';
import Icon from '../../../../../src/icon.jsx';
import UICheck from '../../../../../src/uiCheck.jsx';
import FormGroup from '../../../../../src/formGroup.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        var uCheckExample = (
            <div>
                <div>
                    <div sm={6}>
                        <UICheck type="checkbox" label="未选中" />
                        <UICheck type="checkbox" label="选中" defaultChecked />
                        <UICheck type="checkbox" label="禁用/未选中" disabled />
                        <UICheck type="checkbox" label="禁用/选中" disabled checked />
                    </div>

                    <div sm={6}>
                        <UICheck type="radio" name="uc-rc-3" label="未选中" />
                        <UICheck type="radio" name="uc-rc-3" label="选中" defaultChecked />
                        <UICheck type="radio" label="禁用/未选中" disabled />
                        <UICheck type="radio" label="禁用/选中" disabled checked />
                    </div>
                </div>

                <h3>颜色样式</h3>
                <div>
                    <div sm={6}>
                        <UICheck type="checkbox" label="Secondary" amStyle="secondary" />
                        <UICheck type="checkbox" label="Success" amStyle="success" />
                        <UICheck type="checkbox" label="Warning" amStyle="warning" />
                        <UICheck type="checkbox" label="Danger" amStyle="danger" />
                    </div>

                    <div sm={6}>
                        <UICheck type="radio" name="uc-rd-1" label="Secondary" amStyle="secondary" />
                        <UICheck type="radio" name="uc-rd-1" label="Success" amStyle="success" />
                        <UICheck type="radio" name="uc-rd-1" label="Warning" amStyle="warning" />
                        <UICheck type="radio" name="uc-rd-1" label="Danger" amStyle="danger" />
                    </div>
                </div>

                <h3>行内排列</h3>
                <FormGroup>
                    <h4>装备</h4>
                    <UICheck label="iPhone" inline />
                    <UICheck label="iMac" inline />
                    <UICheck label="Mac Book" inline />
                </FormGroup>

                <FormGroup>
                    <h4>性别</h4>
                    <UICheck type="radio" name="uc-rd-2" label="男" inline />
                    <UICheck type="radio" name="uc-rd-2" label="女" inline />
                    <UICheck type="radio" name="uc-rd-2" label="其他" inline />
                </FormGroup>
            </div>
        );

        return (
            <div className="module">
                <div className="introduce">

                </div>
                <div className="demos">
                    <p>{uCheckExample}</p>
                </div>
            </div>
        );
    }
};

module.exports = Main;

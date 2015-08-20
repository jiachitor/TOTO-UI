import Modal from '../../../../../src/modal.jsx';
import ModalTrigger from '../../../../../src/modalTrigger.jsx';
import Button from '../../../../../src/button.jsx';
import Icon from '../../../../../src/icon.jsx';


class Main extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {

        var modal1 = <Modal title="Amaze UI Modal">这一个 Modal 窗口。</Modal>;
        var modalInstance1 = (
            <ModalTrigger modal={modal1}>
                <Button amStyle='primary'>打开 Modal 窗口</Button>
            </ModalTrigger>
        );




        var modal2 = <Modal type="alert" title="Amaze UI">这一个 Alert 窗口。</Modal>;
        var modalInstance2 = (
            <ModalTrigger modal={modal2}>
                <Button amStyle='primary'>显示 Alert</Button>
            </ModalTrigger>
        );




        var modal3 = <Modal type="confirm" title="Amaze UI">你，确定要删除这条记录吗？</Modal>;

        function onConfirm(e) {
            console.log('Confirmed...');
        }

        function onCancel() {
            console.log('Canceled...');
        }

        var modalInstance3 = (
            <ModalTrigger
                modal={modal3}
                onCancel={onCancel}
                onConfirm={onConfirm}>
                <Button amStyle="danger">显示 Confirm</Button>
            </ModalTrigger>
        );





        var modal4 = (
            <Modal type="prompt" title="Amaze UI">
                来来来，吐槽点啥吧
                <div className="data-area" data-dom="input" data-type="text">
                    <input type="text" className="ui-modal-prompt-input"/>
                </div>
                <div className="data-area" data-dom="input" data-type="checkbox">
                    <label><input type="checkbox" name="doc-checkbox-1" value="1"/>Top Story</label>
                    <label><input type="checkbox" name="doc-checkbox-1" value="2"/>Browser</label>
                    <label><input type="checkbox" name="doc-checkbox-1"value="3"/>Mobogenie</label>
                </div>
                <div className="data-area" data-dom="input" data-type="radio">
                    <label><input type="radio" name="Sex" value="male"/>男性</label>
                    <label><input type="radio" name="Sex" value="female"/>女性</label>
                </div>
                <div className="data-area" data-dom="select" data-type="">
                    <select name="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="data-area" data-dom="textarea" data-type="">
                    <textarea rows="3" cols="30" />
                </div>
            </Modal>
        );

        function onConfirm(data) {
            console.log(data);
        }

        function onCancel() {
            console.log('Canceled...');
        }

        var modalInstance4 = (
            <ModalTrigger
                modal={modal4}
                onCancel={onCancel}
                onConfirm={onConfirm}>
                <Button amStyle="warning">模拟 Prompt</Button>
            </ModalTrigger>
        );




        var modal5 = <Modal type="loading" title="正在加载..." />;

        var modalInstance5 = (
            <ModalTrigger
                modal={modal5}>
                <Button amStyle="primary">Loading 窗口</Button>
            </ModalTrigger>
        );





        var MyActions6 = React.createClass({
            render: function() {
                return (
                    <Modal {...this.props} type="actions">
                        <div className="ui-modal-actions-group">
                            <ul className="ui-list">
                                <li className="ui-modal-actions-header">分享到</li>
                                <li><a href="#"><Icon icon="wechat" /> 微信</a></li>
                                <li className="ui-modal-actions-danger">
                                    <a href="#"><Icon icon="twitter" /> Twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div className="ui-modal-actions-group">
                            <Button
                                amStyle="secondary"
                                block
                                onTouchStart={this.props.onRequestClose}>
                                取消
                            </Button>
                        </div>
                    </Modal>);
            }
        });

        var modalInstance6 = (
            <ModalTrigger
                modal={<MyActions6 />}>
                <Button amStyle="primary">Actions</Button>
            </ModalTrigger>
        );





        var modal7 = (<Modal type="popup" title="爱过什么女爵的滋味">
            <p>为你封了国境<br/>为你赦了罪<br/>为你撤了历史记载<br/>为你涂了装扮<br/>为你喝了醉<br/>为你建了城池围墙<br/>一颗热的心穿着冰冷外衣<br/>一张白的脸漆上多少褪色的情节<br/>在我的空虚身体里面<br/>爱上哪个肤浅的王位<br/>在你的空虚宝座里面<br/>爱过什麽女爵的滋味<br/>为你封了国境</p><p>为你赦了罪<br/>为你撤了历史记载<br/>一颗热的心<br/>穿着冰冷外衣<br/>一张白的脸<br/>漆上多少褪色的情节<br/>在我的空虚身体里面<br/>爱上哪个肤浅的王位<br/>在你的空虚宝座里面<br/>爱过什麽女爵的滋味<br/>在我的空虚身体里面<br/>爱上哪个肤浅的王位<br/>在你的空虚宝座里面<br/>爱过什麽女爵的滋味</p>
        </Modal>);

        var modalInstance7 = (
            <ModalTrigger
                modal={modal7}>
                <Button amStyle="primary">Popup 窗口</Button>
            </ModalTrigger>
        );





        return (
            <div className="demos">
                <p>{modalInstance1}</p>
                <p>{modalInstance2}</p>
                <p>{modalInstance3}</p>
                <p>{modalInstance4}</p>
                <p>{modalInstance5}</p>
                <p>{modalInstance6}</p>
                <p>{modalInstance7}</p>
            </div>
        );
    }
};

module.exports = Main;

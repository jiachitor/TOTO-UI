'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import DimmerMixin from './minxins/DimmerMixin';
import Events from './utils/Events';
import Close from './close.jsx';
import Icon from './icon.jsx';

/*这个模块里面的click事件，还不能替换为onTouchTap事件，需要等React 原生支持*/

class Modal extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
        for(let b in DimmerMixin){
            this[b] = DimmerMixin[b].bind(this);
        }
        this.state = {
            transitioning: false,
        };

        this.handleDimmerClick = this.handleDimmerClick.bind(this);
        this.handleBackdropClick = this.handleBackdropClick.bind(this);
        this.handleDocumentKeyUp = this.handleDocumentKeyUp.bind(this);
        this.isPopup = this.isPopup.bind(this);
        this.isActions = this.isActions.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.renderActions = this.renderActions.bind(this);
        this.renderPopup = this.renderPopup.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
    }

    componentDidMount() {
        this._documentKeyupListener =
            Events.on(document, 'keyup', this.handleDocumentKeyUp, false);

        this.setDimmerContainer();

        // TODO: 何为添加动画效果的最佳时机？ render 完成以后添加动画 Class？
        this.setState({
            transitioning: true,
        });
    }

    componentWillUnmount() {
        this._documentKeyupListener.off();
        this.resetDimmerContainer();
    }

    handleDimmerClick() {
        if (this.props.closeViaDimmer) {
            this.props.onRequestClose();
        }
    }

    handleBackdropClick(e) {
        if (e.target !== e.currentTarget) {
            return;
        }

        this.props.onRequestClose();
    }

    handleDocumentKeyUp(e) {
        if (!this.props.keyboard && e.keyCode === 27) {
            this.props.onRequestClose();
        }
    }

    isPopup() {
        return this.props.type === 'popup';
    }

    isActions() {
        return this.props.type === 'actions';
    }

    // Get input data for prompt modal
    getPromptData() {
        let data = [];
        let dataArea = React.findDOMNode(this).querySelectorAll('.data-area');

        if(dataArea){
            let i = 0;
            for (; i < dataArea.length; i++) {
                let _dom = dataArea[i].dataset.dom,
                    _type = dataArea[i].dataset.type,
                    domData = [];

                if(_dom === "input"){
                    let inputs = dataArea[i].querySelectorAll('input');
                    switch(_type) {
                        case "text":
                            let j = 0;
                            for (; j < inputs.length; j++) {
                                domData.push(inputs[j].value);
                            }
                            break;
                        case "password":
                            let jj = 0;
                            for (; jj < inputs.length; jj++) {
                                domData.push(inputs[jj].value);
                            }
                            break;
                        case "checkbox":
                            let jjj = 0;
                            for (; jjj < inputs.length; jjj++) {
                                if(inputs[jjj].checked){
                                    domData.push(inputs[jjj].value);
                                }
                            }
                            break;
                        case "radio":
                            let jjjj = 0;
                            for (; jjjj < inputs.length; jjjj++) {
                                if(inputs[jjjj].checked){
                                    domData.push(inputs[jjjj].value);
                                }
                            }
                            break;
                        default:
                            break;
                    }
                }else if( _dom === "select"){
                    let selects = dataArea[i].querySelectorAll('select');
                    let k = 0;
                    for (; k < selects.length; k++) {
                        domData.push(selects[k].value);
                    }
                }else if( _dom === "textarea"){
                    let textareas = dataArea[i].querySelectorAll('textarea');
                    let l = 0;
                    for (; l < textareas.length; l++) {
                        domData.push(textareas[l].value);
                    }
                }

                data.push(domData);
            }
        }

        return (data.length === 0) ? null : data;
    }

    handleConfirm(e) {
        let data = e;

        if (this.props.type === 'prompt') {
            data = this.getPromptData();
        }

        this.props.onConfirm(data);
    }

    renderActions() {
        return (
            <div
                style={{display: 'block'}}
                className={classNames(this.props.className,
        this.setClassNamespace('modal-actions'),
        this.setClassNamespace('modal-active'))}>
                {this.props.children}
            </div>
        );
    }

    //这种是根据需求生成的弹出框头部。该弹出框可以展示自定义内容，比如文章内容等，带有滚动条
    renderPopup() {
        return (
            <div
                style={{display: 'block'}}
                className={classNames(this.props.className,
                this.setClassNamespace('popup'),
                this.setClassNamespace('modal-active'))}>
                <div className={this.setClassNamespace('popup-inner')}>
                    <div className={this.setClassNamespace('popup-hd')}>
                        {this.props.title ? (
                            <h4 className={this.setClassNamespace('popup-title')}>
                                {this.props.title}
                            </h4>
                        ) : null}
                        <Close onClick={this.props.onRequestClose} />
                    </div>
                    <div className={this.setClassNamespace('popup-bd')}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }

    //标准弹出框头部，没有头部下划线
    renderHeader() {
        let title = this.props.title;
        let closeIcon = this.props.closeIcon && !this.props.type ? (
            <Close
                spin
                onClick={this.props.onRequestClose}/>) : null;

        return (this.props.title || closeIcon) ? (
            <div className={this.prefixClass('hd')}>
                {title ? <h4
                    className={this.setClassNamespace('margin-bottom-sm')}>
                    {title}
                </h4> : null}
                {closeIcon}
            </div>) : null;
    }

    // Render alert/confirm/prompt buttons
    renderFooter() {
        let buttons;
        let btnClass = this.prefixClass('btn');
        let props = this.props;

        switch (this.props.type) {
            case 'alert':
                buttons = (
                    <span
                        onClick={this.props.onConfirm}
                        className={btnClass}>
            {this.props.confirmText}
          </span>);
                break;
            case 'confirm':
            case 'prompt':
                buttons = [props.cancelText, props.confirmText].map(function(text, i) {
                    return (
                        <span
                            key={i}
                            onClick={i === 0 ? this.props.onCancel : this.handleConfirm}
                            className={btnClass}>
              {text}
            </span>
                    );
                }.bind(this));
                break;
            default:
                buttons = null;
        }

        return buttons ? (
            <div className={this.prefixClass('footer')}>
                {buttons}
            </div>
        ) : null;
    }

    render() {
        if (this.isActions()) {
            return this.renderDimmer(this.renderActions());
        }

        if (this.isPopup()) {
            return this.renderDimmer(this.renderPopup());
        }

        let classSet = this.getClassSet();
        let props = this.props;
        let footer = this.renderFooter();
        let style = {
            display: 'block',
            width: props.modalWidth,
            height: props.modalHeight,
            marginLeft: props.marginLeft,
            marginTop: props.marginTop,
        };

        classSet[this.prefixClass('active')] = this.state.transitioning;

        // .am-modal-no-btn -> refactor this style using `~` selector
        classSet[this.prefixClass('no-btn')] = !footer;
        props.type && (classSet[this.prefixClass(props.type)] = true);

        let modal = (
            <div
                {...props}
                style={style}
                ref="modal"
                title={null}
                className={classNames(classSet, props.className)}>
                <div className={this.prefixClass('dialog')}>
                    {this.renderHeader()}
                    <div className={this.prefixClass('bd')} ref="modalBody">
                        {props.type === 'loading' ?
                            (props.children ? props.children : <Icon icon="spinner" spin />) :
                            props.children}
                    </div>
                    {footer}
                </div>
            </div>
        );

        return this.renderDimmer(modal);
    }
}


Modal.displayName = "Modal";

Modal.propTypes = {
    classPrefix: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['alert', 'confirm', 'prompt', 'loading',
        'actions', 'popup']),
    title: React.PropTypes.node,
    confirmText: React.PropTypes.string,
    cancelText: React.PropTypes.string,
    closeIcon: React.PropTypes.bool,
    closeViaDimmer: React.PropTypes.bool,
};

Modal.defaultProps = {
    classPrefix: 'modal',
    closeIcon: true,
    confirmText: 'submit',
    cancelText: 'cancal',
};

module.exports = Modal;

// TODO: Modal 动画效果实现
// -> 如何关闭 Loading Modal?
// -> 关闭 Modal 以后窗口滚动会原来滚动条所在位置

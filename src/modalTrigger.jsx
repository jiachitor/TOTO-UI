'use strict';

import React from 'react';
import OverlayMixin from './mixins/OverlayMixin';
import DimmerMixin from './mixins/DimmerMixin';
import createChainedFunction from './utils/createChainedFunction';

let cloneElement = React.cloneElement;

class ModalTrigger extends React.Component{
    constructor(props) {
        super(props);
        for(let v in OverlayMixin){
            this[v] = OverlayMixin[v].bind(this);
        }
        for(let b in DimmerMixin){
            this[b] = DimmerMixin[b].bind(this);
        }
        this.state = {
            isModalActive: false,
            modalWidth: null,
            modalMarginLeft: null,
            modalHeight: null,
            modalMarginTop: null,
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.toggle = this.toggle.bind(this);
        this.setModalStyle = this.setModalStyle.bind(this);
        this.renderOverlay = this.renderOverlay.bind(this);
    }

    open() {
        this.setState({
            isModalActive: true,
        }, this.setModalStyle);
    }

    close() {
        this.setState({
            isModalActive: false,
        });
    }

    toggle() {
        if (this.state.isModalActive) {
            this.close();
        } else {
            this.open();
        }
    }

    //设置弹出框样式
    setModalStyle() {

        // TODO: selector
        let modal = this.getOverlayDOMNode().querySelector('.modal');

        if (!modal) {
            return;
        }

        let style = {};

        if (this.props.modalHeight) {
            style.modalHeight = this.props.modalHeight;
            style.modalMarginTop = -this.props.height / 2;
        } else {
            style.modalMarginTop = -modal.offsetHeight / 2;
        }

        if (this.props.modalWidth) {
            style.modalWidth = this.props.modalWidth;
            style.modalMarginLeft = -this.props.modalWidth / 2;
        }

        this.setState(style);
    }

    // overlay is the modal
    renderOverlay() {
        if (!this.state.isModalActive) {
            return <span />;
        }
        //复制modal
        return cloneElement(
            this.props.modal, {
                onRequestClose: this.close,
                marginTop: this.state.modalMarginTop,
                marginLeft: this.state.modalMarginLeft,
                modalWidth: this.state.modalWidth,
                modalHeight: this.state.modalHeight,
                title: this.props.modal.props.title || this.props.title,
                onConfirm: createChainedFunction(this.close, this.props.onConfirm),
                onCancel: createChainedFunction(this.close, this.props.onCancel),
            }
        );
    }

    render() {
        let child = React.Children.only(this.props.children);
        let props = {};
        //这里是为 ModalTrigger 里面包含的子元素（比如 button 等）绑定 交互事件
        props.onTouchTap = createChainedFunction(child.props.onTouchTap, this.toggle);
       /* props.onTouchStart = createChainedFunction(child.props.onTouchStart, this.toggle);*/
        props.onMouseOver = createChainedFunction(child.props.onMouseOver,
            this.props.onMouseOver);
        props.onMouseOut = createChainedFunction(child.props.onMouseOut,
            this.props.onMouseOut);
        props.onFocus = createChainedFunction(child.props.onFocus,
            this.props.onFocus);
        props.onBlur = createChainedFunction(child.props.onBlur,
            this.props.onBlur);

        return cloneElement(child, props);
    }
}


ModalTrigger.displayName = "ModalTrigger";

ModalTrigger.propTypes = {
    modal: React.PropTypes.node.isRequired,
    onConfirm: React.PropTypes.func,
    onCancel: React.PropTypes.func,
    title: React.PropTypes.string,
};

ModalTrigger.defaultProps = {
    test: '',
};

module.exports = ModalTrigger;

'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';

class PanelGroup extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }

        this.state = {
            activeKey: this.props.defaultActiveKey,
        };

        this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
        this.renderPanel = this.renderPanel.bind(this);
    }

    shouldComponentUpdate() {
        return !this._isChanging;
    }

    handleSelect(e, key) {
        e.preventDefault();

        if (this.props.onSelect) {
            this._isChanging = true;
            this.props.onSelect(key);
            this._isChanging = false;
        }

        if (this.state.activeKey === key) {
            key = null;
        }

        this.setState({
            activeKey: key,
        });
    }

    renderPanel(child, index) {
        let activeKey = this.props.activeKey != null ?
            this.props.activeKey : this.state.activeKey;

        let props = {
            amStyle: child.props.amStyle || this.props.amStyle,
            key: child.key ? child.key : index,
            ref: child.ref,
        };

        if (this.props.accordion) {
            props.collapsible = true;
            props.expanded = (child.props.eventKey === activeKey);
            props.onSelect = this.handleSelect.bind(this);
        }

        return React.cloneElement(child, props);
    }

    render() {
        let classes = this.getClassSet();

        return (
            <div
                {...this.props}
                className={classNames(classes, this.props.className)}>
                {React.Children.map(this.props.children, this.renderPanel)}
            </div>
        );
    }
}

PanelGroup.displayName = "PanelGroup";

PanelGroup.propTypes = {
    amStyle: React.PropTypes.string,
    activeKey: React.PropTypes.any,
    defaultActiveKey: React.PropTypes.any,
    onSelect: React.PropTypes.func,
    accordion: React.PropTypes.bool,
};

PanelGroup.defaultProps = {
    classPrefix: 'panel-group',
};

module.exports = PanelGroup;

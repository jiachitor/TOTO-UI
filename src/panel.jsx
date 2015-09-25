'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import CollapseMixin from './minxins/CollapseMixin';

class Panel extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
        for (let c in CollapseMixin) {
            this[c] = CollapseMixin[c].bind(this);
        }
        this.state = {
            expanded: true
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.getCollapsibleDimensionValue = this.getCollapsibleDimensionValue.bind(this);
        this.getCollapsibleDOMNode = this.getCollapsibleDOMNode.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderBody = this.renderBody.bind(this);
        this.renderCollapsibleBody = this.renderCollapsibleBody.bind(this);
        this.renderFooter = this.renderFooter.bind(this);

    }

    handleClick(e) {
        e.selected = true;

        if (this.props.onSelect) {
            this.props.onSelect(e, this.props.eventKey);
        } else {
            e.preventDefault();
        }

        if (e.selected) {
            this.handleToggle();
        }
    }

    handleToggle() {
        this.setState({expanded: !this.state.expanded});
    }

    getCollapsibleDimensionValue() {
        return React.findDOMNode(this.refs.panel).scrollHeight;
    }

    getCollapsibleDOMNode() {
        if (!this.isMounted || !this.refs || !this.refs.panel) {
            return null;
        }

        return React.findDOMNode(this.refs.panel);
    }

    renderHeader() {
        if (!this.props.header) {
            return null;
        }

        let header = this.props.header;

        return (
            <div className={this.prefixClass('hd')}>
                {this.props.collapsible ? (
                    <h4
                        data-am-collapse // just for `pointer` style
                        className={classNames(this.prefixClass('title'),
            this.isExpanded() ? null : this.setClassNamespace('collapsed'))}
                        onClick={this.handleClick.bind(this)}>
                        {header}
                    </h4>) : header}
            </div>
        );
    }

    renderBody() {
        let bodyClass = this.prefixClass('bd');
        let bodyChildren = this.props.children;
        let bodyElements = [];
        let panelBodyChildren = [];

        function getProps() {
            return {
                key: bodyElements.length
            };
        }

        function addFillChild(child) {
            bodyElements.push(React.cloneElement(child, getProps()));
        }

        function addPanelBody(child) {
            bodyElements.push(
                <div className={bodyClass} {...getProps} key="panelBody">
                    {child}
                </div>
            );
        }

        function maybeRenderPanelBody() {
            if (panelBodyChildren.length === 0) {
                return;
            }

            addPanelBody(panelBodyChildren);
            panelBodyChildren = [];
        }

        if (Array.isArray(bodyChildren)) {
            bodyChildren.forEach(function (child) {
                // props fill and isValidElement
                if (this.shouldRenderFill(child)) {
                    maybeRenderPanelBody();

                    addFillChild(child);
                } else {
                    panelBodyChildren.push(child);
                }

            }.bind(this));

            maybeRenderPanelBody();
        } else {
            if (this.shouldRenderFill(bodyChildren)) {
                addFillChild(bodyChildren);
            } else {
                addPanelBody(bodyChildren);
            }
        }

        return bodyElements;
    }

    renderCollapsibleBody() {
        let collapseClass = this.prefixClass('collapse');

        return (
            <div
                className={classNames(this.getCollapsibleClassSet(collapseClass))}
                id={this.props.id}
                ref='panel'>
                {this.renderBody()}
            </div>
        );
    }

    shouldRenderFill(child) {
        return React.isValidElement(child) && child.props.fill;
    }

    renderFooter() {
        if (!this.props.footer) {
            return null;
        }

        return (
            <div className={this.prefixClass('footer')}>
                {this.props.footer}
            </div>
        );
    }

    render() {
        let classes = this.getClassSet();
        let collapsible = this.props.collapsible;

        return (
            <div
                {...this.props}
                id={collapsible ? null : this.props.id}
                className={classNames(classes, this.props.className)}>
                {this.renderHeader()}
                {collapsible ? this.renderCollapsibleBody() : this.renderBody()}
                {this.renderFooter()}
            </div>
        );
    }
}

Panel.displayName = "Panel";

Panel.propTypes = {
    collapsible: React.PropTypes.bool,
    header: React.PropTypes.node,
    footer: React.PropTypes.node,
    id: React.PropTypes.string,
    amStyle: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    eventKey: React.PropTypes.any,
};

Panel.defaultProps = {
    classPrefix: 'panel',
    amStyle: 'default',
};

module.exports = Panel;

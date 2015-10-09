'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import CollapseMixin from './mixins/CollapseMixin';

class AccordionItem extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
        for (let x in CollapseMixin) {
            this[x] = CollapseMixin[x].bind(this);
        }
        this.state = {
            collapsing:false
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.getCollapsibleDimensionValue = this.getCollapsibleDimensionValue.bind(this);
        this.getCollapsibleDOMNode = this.getCollapsibleDOMNode.bind(this);
    }

    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    handleToggle() {
        this.setState({expanded: !this.state.expanded});
    }

    getCollapsibleDimensionValue() {
        return ReactDOM.findDOMNode(this.refs.panel).scrollHeight;
    }

    getCollapsibleDOMNode() {
        if (!this.mounted || !this.refs || !this.refs.panel) {
            return null;
        }

        return ReactDOM.findDOMNode(this.refs.panel);
    }

    render() {
        return (
            <dl className={classNames(this.setClassNamespace('accordion-item'),
       this.isExpanded() ? this.setClassNamespace('active') : null,
       this.props.expanded ? this.setClassNamespace('disabled') : null
      )}>
                <dt
                    onClick={this.handleToggle}
                    className={this.setClassNamespace('accordion-title')}>
                    {this.props.title}
                </dt>
                <dd
                    className={classNames(this.getCollapsibleClassSet())}
                    ref="panel">
                    <div
                        className={this.setClassNamespace('accordion-content')}
                        dangerouslySetInnerHTML={{__html: this.props.children}}/>
                </dd>
            </dl>
        );
    }
}

AccordionItem.displayName = "AccordionItem";

AccordionItem.propTypes = {
    title: React.PropTypes.node,
    expanded: React.PropTypes.bool,
};

AccordionItem.defaultProps = {
    classPrefix: 'accordion',
    theme: 'default',
};

module.exports = AccordionItem;

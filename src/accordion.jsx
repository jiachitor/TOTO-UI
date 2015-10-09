'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import AccordionItem from './accordionItem.jsx';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        for (let v in ClassNameMixin) {
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.state = {
            activeKey: this.props.defaultActiveKey,
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(e, key) {
        e.preventDefault();

        if (this.state.activeKey === key) {
            key = null;
        }

        this.setState({
            activeKey: key,
        });
    }

    render() {
        let classSet = this.getClassSet();

        classSet[this.prefixClass(this.props.theme)] = true;

        return (
            <section
                {...this.props}
                data-widget={this.props.classPrefix}
                className={classNames(classSet, this.props.className)}>
                {this.props.data.map(function (item, index) {
                    return (
                        <AccordionItem
                            title={item.title}
                            expanded={item.active && item.disabled}
                            defaultExpanded={item.active && !item.disabled}
                            eventKey={index}
                            key={index}>
                            {item.content}
                        </AccordionItem>
                    );
                })}
            </section>
        );
    }
}

Accordion.displayName = "Accordion";

Accordion.propTypes = {
    theme: React.PropTypes.oneOf(['default', 'basic', 'gapped']),
    data: React.PropTypes.array,
    activeKey: React.PropTypes.any,
    defaultActiveKey: React.PropTypes.any,
};

Accordion.defaultProps = {
    classPrefix: 'accordion',
    theme: 'default',
};

module.exports = Accordion;

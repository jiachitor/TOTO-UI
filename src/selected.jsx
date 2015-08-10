'use strict';

import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import Dropdown from './dropdown.jsx';
import Icon from './icon.jsx';
import Input from './input.jsx';

class Selected extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.state={
            value: this.props.value,
            dropdownWidth: null,
            filterText: null,
        };
        this.setDropdownWidth = this.setDropdownWidth.bind(this);
        this.getValueArray = this.getValueArray.bind(this);
        this.setValue = this.setValue.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.clearFilterInput = this.clearFilterInput.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    componentDidMount () {
        this.setDropdownWidth();
    }

    setDropdownWidth () {
        if (this.isMounted) {
            let toggleButton = React.findDOMNode(this.refs.dropdown.
                refs.dropdownToggle);

            toggleButton && this.setState({dropdownWidth: toggleButton.offsetWidth});
        }
    }

    getValueArray () {
        return this.state.value ? this.state.value.split(this.props.delimiter) : [];
    }

    hasValue (value) {
        return this.getValueArray().indexOf(value) > -1;
    }

    setValue (value, callback) {
        this.setState({
            value: value,
        }, function () {
            this.props.onChange(value);
            callback && callback();
        });
    }

    handleCheck (option, e) {
        e.preventDefault();

        let clickedValue = option.value;

        // multiple select
        if (this.props.multiple) {
            let values = this.getValueArray();

            if (this.hasValue(clickedValue)) {
                values.splice(values.indexOf(clickedValue), 1);
            } else {
                values.push(clickedValue);
            }

            this.setValue(values.join(this.props.delimiter));
        } else {
            this.setValue(clickedValue);
            this.refs.dropdown.setDropdownState(false);
        }
    }

    handleUserInput (e) {
        e.preventDefault();

        this.setState({
            filterText: React.findDOMNode(this.refs.filterInput).value,
        });
    }

    // clear filter
    clearFilterInput () {
        if (this.props.multiple && this.props.searchBox) {
            this.setState({
                filterText: null,
            });
            React.findDOMNode(this.refs.filterInput).value = null;
        }
    }

    // API for getting component value
    getValue () {
        return this.state.value;
    }

    render () {
        let classSet = this.getClassSet();
        let selectedLabel = [];
        let items = [];
        let filterText = this.state.filterText;
        let groupHeader;

        this.props.data.forEach(function (option, i) {
            let checked = this.hasValue(option.value);
            let checkedClass = checked ? this.setClassNamespace('checked') : null;
            let checkedIcon = checked ? <Icon icon="check"/> : null;

            checked && selectedLabel.push(option.label);

            // add group header
            if (option.group && groupHeader !== option.group) {
                groupHeader = option.group;
                items.push(
                    <li
                        className={this.prefixClass('list-header')}
                        key={'header' + i}>
                        {groupHeader}
                    </li>
                );
            }

            if (filterText && !this.props.optionFilter(filterText, option)) {
                return;
            }

            items.push(
                <li
                    className={checkedClass}
                    onClick={this.handleCheck.bind(this, option)}
                    key={i}>
          <span className={this.prefixClass('text')}>
            {option.label}
          </span>
                    {checkedIcon}
                </li>
            );
        }.bind(this));

        let status = (
            <span
                className={classNames(this.prefixClass('status'),
      this.setClassNamespace('fl'))}>
        {selectedLabel.length ? selectedLabel.join(', ') : (
            <span className={this.prefixClass('placeholder ')}>
            {this.props.placeholder}
          </span>)}
      </span>
        );
        let optionsStyle = {};

        if (this.props.maxHeight) {
            optionsStyle = {
                maxHeight: this.props.maxHeight,
                overflowY: 'scroll',
            };
        }

        return (
            <Dropdown
                className={classNames(this.props.className, classSet)}
                title={status}
                onClose={this.clearFilterInput}
                btnStyle={this.props.btnStyle}
                btnInlineStyle={{width: this.props.btnWidth}}
                contentInlineStyle={{minWidth: this.state.dropdownWidth}}
                toggleClassName={this.prefixClass('btn')}
                caretClassName={this.prefixClass('icon')}
                contentClassName={this.prefixClass('content')}
                contentTag="div"
                dropup={this.props.dropup}
                ref="dropdown">
                {this.props.searchBox ? (
                    <div className={this.prefixClass('search')}>
                        <Input
                            onChange={this.handleUserInput}
                            autoComplete="off"
                            standalone
                            ref="filterInput"/>
                    </div>) : null}
                <ul
                    style={optionsStyle}
                    className={this.prefixClass('list')}>
                    {items}
                </ul>
                <input
                    name={this.props.name}
                    type="hidden"
                    ref="selectedField"
                    value={this.state.value}/>
            </Dropdown>
        );
    }
}

Selected.displayName = "Selected";

Selected.propTypes = {
    classPrefix: React.PropTypes.string,
    data: React.PropTypes.array.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    multiple: React.PropTypes.bool,
    searchBox: React.PropTypes.bool,
    name: React.PropTypes.string,
    onChange: React.PropTypes.func,
    optionFilter: React.PropTypes.func,
    dropup: React.PropTypes.bool,
    btnWidth: React.PropTypes.number,
    btnStyle: React.PropTypes.string,
    maxHeight: React.PropTypes.number,
    delimiter: React.PropTypes.string,
};

Selected.defaultProps = {
    classPrefix: 'selected',
    placeholder: 'µã»÷Ñ¡Ôñ...',
    onChange: function () {
    },
    delimiter: ',',
    optionFilter: function (filterText, option) {
        return (option.label.toLowerCase().indexOf(filterText) > -1);
    },
};

module.exports = Selected;

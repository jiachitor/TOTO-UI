'use strict';

import Events from './utils/Events';
import fecha from 'fecha';
import isNodeInTree from './utils/isNodeInTree';
import Input from './input';
import DateTimePicker from './dateTimePicker.js';

class DateTimeInput extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.dateTime || fecha.format(new Date(), this.props.format),
            showPicker: false,
        };

        this.handleOuterClick = this.handleOuterClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.renderPicker = this.renderPicker.bind(this);
    }

    handleOuterClick(event) {
        let picker = React.findDOMNode(this.refs.DateTimePicker);

        if (!isNodeInTree(event.target, picker)) {
            this.handleClose();
        }
    }

    bindOuterHandlers() {
        Events.on(document, 'click', this.handleOuterClick);
    }

    unbindOuterHandlers() {
        Events.off(document, 'click', this.handleOuterClick);
    }

    handleClose() {
        this.unbindOuterHandlers();
        return this.setState({
            showPicker: false,
        });
    }

    handleClick() {
        this.bindOuterHandlers();
        let posObj = this.refs.dateInput.getFieldDOMNode();

        let offset = {
            top: posObj.offsetTop + posObj.offsetHeight,
            left: posObj.offsetLeft,
        };

        let styles = {
            display: 'block',
            top: offset.top,
            left: offset.left,
            position: 'absolute',
            zIndex: 1120,
        };

        this.setState({
            showPicker: true,
            pickerStyle: styles,
        });
    }

    handleChange(event) {
        return this.setState({
            value: event.target.value,
        });
    }

    handleSelect(date) {
        return this.setState({
            value: date,
        });
    }

    renderPicker() {
        if (this.state.showPicker) {
            return (
                <DateTimePicker
                    style={this.state.pickerStyle}
                    ref="DateTimePicker"
                    showDatePicker={this.props.showDatePicker}
                    showTimePicker={this.props.showTimePicker}
                    onSelect={this.handleSelect}
                    onClose={this.handleClose}
                    amStyle={this.props.amStyle}
                    dateTime={this.state.value}
                    viewMode={this.props.viewMode}
                    minViewMode={this.props.minViewMode}
                    daysOfWeekDisabled={this.props.daysOfWeekDisabled}
                    weekStart={this.props.weekStart}
                    format={this.props.format}
                    locale={this.props.locale}
                    maxDate={this.props.maxDate}
                    minDate={this.props.minDate} />
            );
        }
    }

    render() {
        return (
            <div>
                <Input
                    {...this.props}
                    type="text"
                    onClick={this.handleClick}
                    value={this.state.value}
                    onChange={this.handleChange}
                    ref="dateInput" />
                {this.renderPicker()}
            </div>
        );
    }
}


DateTimeInput.displayName = "DateTimeInput";

DateTimeInput.propTypes = {
    format: React.PropTypes.string,
    dateTime: React.PropTypes.string,
};

DateTimeInput.defaultProps = {
    dateTime: '',
    format: 'YYYY-MM-DD HH:mm',
};

module.exports = DateTimeInput;

// TODO: ¶¯»­

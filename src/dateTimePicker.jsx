'use strict';

import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import fecha from 'fecha';
import DatePicker from './datePicker';
import TimePicker from './timePicker';
import Icon from './icon';

class DateTimePicker extends React.Component{

    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }

        let showToggle;
        let showTimePicker;

        if (this.props.showTimePicker && this.props.showDatePicker) {
            showToggle = true;
            showTimePicker = false;
        }

        if (!showToggle && !this.props.showDatePicker) {
            showTimePicker = true;
        }

        this.state = {
            showTimePicker: showTimePicker,
            showDatePicker: this.props.showDatePicker,
            caretDisplayed: this.props.caretDisplayed,
            showToggle: showToggle,
            date: fecha.parse(this.props.dateTime, this.props.format),
            toggleDisplay: {
                toggleTime: {display: 'block'},
                toggleDate: {display: 'none'},
            },
        };

        this.handleToggleTime = this.handleToggleTime.bind(this);
        this.handleToggleDate = this.handleToggleDate.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.renderToggleTime = this.renderToggleTime.bind(this);
        this.renderToggleDate = this.renderToggleDate.bind(this);
        this.renderDatePicker = this.renderDatePicker.bind(this);
        this.renderTimePicker = this.renderTimePicker.bind(this);
        this.renderCaret = this.renderCaret.bind(this);

    }

    handleToggleTime() {
        this.setState({
            showDatePicker: false,
            showTimePicker: true,
            toggleDisplay: {
                toggleTime: {display: 'none'},
                toggleDate: {display: 'block'},
            },
        });
    }

    handleToggleDate() {
        this.setState({
            showDatePicker: true,
            showTimePicker: false,
            toggleDisplay: {
                toggleTime: {display: 'block'},
                toggleDate: {display: 'none'},
            },
        });
    }

    handleSelect(date) {
        this.setState({
            date: date,
        });
        this.props.onSelect(fecha.format(date, this.props.format));
    }

    renderToggleTime() {
        if (this.state.showToggle) {
            return (
                <div style={this.state.toggleDisplay.toggleTime} className={this.prefixClass('toggle')} onClick={this.handleToggleTime}>
                    <Icon icon="clock-o" />
                </div>
            );
        }
    }

    renderToggleDate() {
        if (this.state.showToggle) {
            return (
                <div style={this.state.toggleDisplay.toggleDate} className={this.prefixClass('toggle')} onClick={this.handleToggleDate}>
                    <Icon icon="calendar" />
                </div>
            );
        }
    }

    renderDatePicker() {
        if (this.state.showDatePicker) {
            return (
                <DatePicker
                    onSelect={this.handleSelect}
                    onClose={this.props.onClose}
                    weekStart={this.props.weekStart}
                    viewMode={this.props.viewMode}
                    minViewMode={this.props.minViewMode}
                    daysOfWeekDisabled={this.props.daysOfWeekDisabled}
                    format={this.props.format}
                    date={this.state.date}
                    locale={this.props.locale}
                    minDate={this.props.minDate}
                    maxDate={this.props.maxDate} />
            );
        }
    }

    renderTimePicker() {
        if (this.state.showTimePicker) {
            return (
                <TimePicker
                    onSelect={this.handleSelect}
                    date={this.state.date}
                    format={this.props.format} />
            );
        }
    }

    renderCaret() {
        if (this.state.caretDisplayed) {
            return <div className={this.prefixClass('caret')}></div>;
        }
    }

    render() {
        let classSet = this.getClassSet();

        this.props.amStyle &&
        (classSet[this.prefixClass(this.props.amStyle)] = true);

        return (
            <div
                {...this.props}
                className={classNames(classSet, this.props.className)}
                style={this.props.style}>
                {this.renderCaret()}
                <div className={this.prefixClass('date')}>
                    {this.renderDatePicker()}
                </div>
                <div className={this.prefixClass('time')}>
                    {this.renderTimePicker()}
                </div>
                {this.renderToggleTime()}
                {this.renderToggleDate()}
            </div>
        );
    }
}

DateTimePicker.displayName = "Icon";

DateTimePicker.propTypes = {
    showTimePicker: React.PropTypes.bool,
    showDatePicker: React.PropTypes.bool,
    caretDisplayed: React.PropTypes.bool,
    amStyle: React.PropTypes.oneOfType(['success', 'danger', 'warning']),
    viewMode: React.PropTypes.string,
    minViewMode: React.PropTypes.string,
    onSelect: React.PropTypes.func.isRequired,
    onClose: React.PropTypes.func,
    daysOfWeekDisabled: React.PropTypes.array,
    format: React.PropTypes.string,
    dateTime: React.PropTypes.string,
    locale: React.PropTypes.string,
    weekStart: React.PropTypes.number,
    minDate: React.PropTypes.string,
    maxDate: React.PropTypes.string,
};

DateTimePicker.defaultProps = {
    classPrefix: 'datepicker',
    dateTime: '',
    format: 'YYYY-MM-DD HH:mm',
    showTimePicker: true,
    showDatePicker: true,
    caretDisplayed: true,
};

module.exports = DateTimePicker;

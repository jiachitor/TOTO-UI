'use strict';

import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';

class TimePicker extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.state = {
            viewDate: this.props.date,
            selectedDate: this.props.date,
            displayed: {
                times: {display: 'block'},
                minutes: {display: 'none'},
                hours: {display: 'none'},
            },
        };

        this.setTime = this.setTime.bind(this);
        this.setSelectedMinute = this.setSelectedMinute.bind(this);
        this.showMinutes = this.showMinutes.bind(this);
        this.showHours = this.showHours.bind(this);
        this.setSelectedHour = this.setSelectedHour.bind(this);
        this.showTimeText = this.showTimeText.bind(this);
        this.renderHours = this.renderHours.bind(this);
        this.renderMinutes = this.renderMinutes.bind(this);
    }

    // Minutes
    addMinute() {
        let viewDate = this.state.viewDate;

        viewDate.setMinutes(viewDate.getMinutes() + 1);

        this.setTime(viewDate);
    }

    subtractMinute() {
        let viewDate = this.state.viewDate;

        viewDate.setMinutes(viewDate.getMinutes() - 1);

        this.setTime(viewDate);
    }

    setTime(viewDate) {
        this.setState({
            viewDate: viewDate,
            selectedDate: new Date(viewDate.valueOf()),
        }, function() {
            this.props.onSelect(this.state.selectedDate);
        });
    }

    // set Minutes
    setSelectedMinute(event) {
        let viewDate = this.state.viewDate;
        let minute = parseInt(event.target.innerHTML.substr(3));

        viewDate.setMinutes(minute);
        this.setTime(viewDate);

        this.setState({
            displayed: {
                times: {display: 'block'},
                minutes: {display: 'none'},
                hours: {display: 'none'},
            },
        });
    }

    showMinutes() {
        this.setState({
            displayed: {
                times: {display: 'none'},
                minutes: {display: 'block'},
                hours: {display: 'none'},
            },
        });
    }

    // Hours
    showHours() {
        this.setState({
            displayed: {
                times: {display: 'none'},
                minutes: {display: 'none'},
                hours: {display: 'block'},
            },
        });
    }

    setSelectedHour(event) {
        let viewDate = this.state.viewDate;
        let hour = parseInt(event.target.innerHTML);

        viewDate.setHours(hour);
        this.setTime(viewDate);

        this.setState({
            displayed: {
                times: {display: 'block'},
                minutes: {display: 'none'},
                hours: {display: 'none'},
            },
        });
    }

    addHour() {
        let viewDate = this.state.viewDate;

        viewDate.setHours(viewDate.getHours() + 1);

        this.setTime(viewDate);
    }

    subtractHour() {
        let viewDate = this.state.viewDate;

        viewDate.setHours(viewDate.getHours() - 1);

        this.setTime(viewDate);
    }

    showTimeText() {
        let hour = this.state.viewDate.getHours();
        let minute = this.state.viewDate.getMinutes();

        if (minute < 10) {
            minute = '0' + minute;
        }

        if (hour < 10) {
            hour = '0' + hour;
        }

        return {
            hour: hour,
            minute: minute,
        };
    }

    renderHours() {
        let time = this.showTimeText().hour + ':' + this.showTimeText().minute;

        return (
            <HoursPicker
                style={this.state.displayed.hours}
                setSelectedHour={this.setSelectedHour}
                selectedDate={this.state.selectedDate}
                addHour={this.addHour}
                subtractHour={this.subtractHour}
                showTime={time} />
        );
    }

    renderMinutes() {
        let time = this.showTimeText().hour + ':' + this.showTimeText().minute;

        return (
            <MinutesPicker
                style={this.state.displayed.minutes}
                setSelectedMinute={this.setSelectedMinute}
                selectedDate={this.state.selectedDate}
                addMinute={this.addMinute}
                subtractMinute={this.subtractMinute}
                showTime={time} />
        );
    }

    render() {
        let time = this.showTimeText();

        let content = (
            <div className={this.prefixClass('time-box')}>
                <strong onClick={this.showHours}>{time.hour}</strong>
                <em>:</em>
                <strong onClick={this.showMinutes}>{time.minute}</strong>
            </div>
        );


        return (
            <div className={this.prefixClass('body')}>
                <SubPicker
                    style={this.state.displayed.times}
                    displayName="time-wrapper"
                    body={content}
                    add={this.addMinute}
                    subtract={this.subtractMinute}
                    showFunc={this.props.showDate}
                    showText="today" />
                {this.renderHours()}
                {this.renderMinutes()}
            </div>
        );
    }
}

TimePicker.displayName = "TimePicker";

TimePicker.propTypes = {
    onSelect: React.PropTypes.func.isRequired,
    date: React.PropTypes.object,
    format: React.PropTypes.string,
};

TimePicker.defaultProps = {
    classPrefix: 'datepicker',
    format: 'HH:mm',
};

module.exports = TimePicker;


/*---------------------------------------------------------------------------*/


class HoursPicker extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.renderHour = this.renderHour.bind(this);
    }
    renderHour() {
        let classes;
        let hour = this.props.selectedDate.getHours();
        let i = 0;
        let hours = [];

        while (i < 24) {
            classes = {};
            classes[this.prefixClass('hour')] = true;

            if (i === hour) {
                classes[this.setClassNamespace('active')] = true;
            }

            hours.push(
                <span
                    className={classNames(classes)}
                    onClick={this.props.setSelectedHour}
                    key={i}>
          {i < 10 ? '0' + i + ':00' : i + ':00'}
        </span>
            );

            i++;
        }

        return hours;
    }

    render() {
        return (
            <SubPicker
                displayName="hours"
                style={this.props.style}
                subtract={this.props.subtractHour}
                add={this.props.addHour}
                showText={this.props.showTime}
                body={this.renderHour()} />
        );
    }
}


HoursPicker.displayName = "HoursPicker";

HoursPicker.propTypes = {
    setSelectedHour: React.PropTypes.func.isRequired,
    selectedDate: React.PropTypes.object.isRequired,
};

HoursPicker.defaultProps = {
    classPrefix: 'datepicker',
};


/*---------------------------------------------------------------------------*/


class MinutesPicker extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.renderMinute = this.renderMinute.bind(this);
    }

    renderMinute() {
        let classes;
        let minute = this.props.selectedDate.getMinutes();
        let hour = this.props.selectedDate.getHours();
        let i = 0;
        let minutes = [];

        while (i < 60) {
            classes = {};
            classes[this.prefixClass('minute')] = true;

            if (i === minute) {
                classes[this.setClassNamespace('active')] = true;
            }

            if (i % 5 === 0) {
                minutes.push(
                    <span
                        className={classNames(classes)}
                        onClick={this.props.setSelectedMinute}
                        key={i}
                        >
          {i < 10 ? hour + ':0' + i : hour + ':' + i}
        </span>
                );
            }

            i++;
        }

        return minutes;
    }

    render() {
        return (
            <SubPicker
                displayName="minutes"
                style={this.props.style}
                subtract={this.props.subtractMinute}
                add={this.props.addMinute}
                showText={this.props.showTime}
                body={this.renderMinute()} />
        );
    }
}

MinutesPicker.displayName = "MinutesPicker";

MinutesPicker.propTypes = {
    setSelectedMinute: React.PropTypes.func.isRequired,
    selectedDate: React.PropTypes.object.isRequired,
};

MinutesPicker.defaultProps = {
    classPrefix: 'datepicker',
};


/*---------------------------------------------------------------------------*/


class SubPicker extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
    }
    render() {
        let prefixClass = this.prefixClass;

        return (
            <div
                className={prefixClass(this.props.displayName)}
                style={this.props.style}>
                <table className={prefixClass('table')}>
                    <thead>
                    <tr className={prefixClass('header')}>
                        <th className={prefixClass('prev')} onClick={this.props.subtract}>
                            <i className={prefixClass('prev-icon')}></i>
                        </th>
                        <th
                            className={prefixClass('switch')}
                            colSpan="5"
                            onClick={this.props.showFunc}
                            >
                            <div className={this.prefixClass('select')}>
                                {this.props.showText}
                            </div>
                        </th>
                        <th className={prefixClass('next')} onClick={this.props.add}>
                            <i className={prefixClass('next-icon')}></i>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan="7">
                            {this.props.body}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

SubPicker.displayName = "SubPicker";

SubPicker.defaultProps = {
    classPrefix: 'datepicker',
};

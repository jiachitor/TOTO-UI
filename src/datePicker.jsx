'use strict';

import classNames from 'classnames';
import ClassNameMixin from './minxins/ClassNameMixin';
import fecha from 'fecha';
import dateUtils from './utils/dateUtils';

class DatePicker extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }

        let displayed;

        switch (this.props.viewMode) {
            case 'days':
                displayed = {
                    days: {display: 'block'},
                    months: {display: 'none'},
                    years: {display: 'none'},
                };
                break;

            case 'months':
                displayed = {
                    days: {display: 'none'},
                    months: {display: 'block'},
                    years: {display: 'none'},
                };
                break;

            case 'years':
                displayed = {
                    days: {display: 'none'},
                    months: {display: 'none'},
                    years: {display: 'block'},
                };
                break;
        }

        this.state = {
            locale: dateUtils.getLocale(this.props.locale),
            viewDate: this.props.date,
            selectedDate: this.props.date,
            displayed: displayed,
        };

        this.subtractMonth = this.subtractMonth.bind(this);
        this.addMonth = this.addMonth.bind(this);
        this.setSelectedDate = this.setSelectedDate.bind(this);
        this.setViewDate = this.setViewDate.bind(this);
        this.showMonths = this.showMonths.bind(this);
        this.subtractYear = this.subtractYear.bind(this);
        this.addYear = this.addYear.bind(this);
        this.showYears = this.showYears.bind(this);
        this.setViewMonth = this.setViewMonth.bind(this);
        this.setViewYear = this.setViewYear.bind(this);
        this.addDecade = this.addDecade.bind(this);
        this.subtractDecade = this.subtractDecade.bind(this);
        this.renderDays = this.renderDays.bind(this);
        this.renderMonths = this.renderMonths.bind(this);
        this.renderYears = this.renderYears.bind(this);

    }

    // DaysPicker props function

    subtractMonth() {
        let viewDate = this.state.viewDate;
        let newDate = new Date(viewDate.valueOf());

        newDate.setMonth(viewDate.getMonth() - 1);
        this.setState({
            viewDate: newDate,
        });
    }

    addMonth() {
        let viewDate = this.state.viewDate;
        let newDate = new Date(viewDate.valueOf());

        newDate.setMonth(viewDate.getMonth() + 1);
        this.setState({
            viewDate: newDate,
        });
    }

    setSelectedDate(event) {
        if (/disabled/ig.test(event.target.className)) {
            return;
        }

        let viewDate = this.state.viewDate;

        if (/new/ig.test(event.target.className)) {
            viewDate.setMonth(viewDate.getMonth() + 1);
        } else if (/old/ig.test(event.target.className)) {
            viewDate.setMonth(viewDate.getMonth() - 1);
        }

        viewDate.setDate(event.target.innerHTML);

        this.setViewDate(viewDate);
    }

    setViewDate(viewDate) {
        this.setState({
            viewDate: viewDate,
            selectedDate: new Date(viewDate.valueOf()),
        }, function() {
            this.props.onSelect(this.state.selectedDate);
            this.props.onClose && this.props.onClose();
        });
    }

    showMonths() {
        return this.setState({
            displayed: {
                days: {display: 'none'},
                months: {display: 'block'},
                years: {display: 'none'},
            },
        });
    }

    // MonthsPicker props function

    subtractYear() {
        let viewDate = this.state.viewDate;
        let newDate = new Date(viewDate.valueOf());

        newDate.setFullYear(viewDate.getFullYear() - 1);

        return this.setState({
            viewDate: newDate,
        });
    }

    addYear() {
        let viewDate = this.state.viewDate;
        let newDate = new Date(viewDate.valueOf());

        newDate.setFullYear(viewDate.getFullYear() + 1);
        return this.setState({
            viewDate: newDate ,
        });
    }

    showYears() {
        return this.setState({
            displayed: {
                days: {display: 'none'},
                months: {display: 'none'},
                years: {display: 'block'},
            },
        });
    }

    setViewMonth(event) {
        let viewDate = this.state.viewDate;
        let month = event.target.innerHTML;
        let months = this.state.locale.monthsShort;
        let i = 0;
        let len = months.length;

        for (; i < len; i++) {
            if (month === months[i]) {
                viewDate.setMonth(i);
            }
        }

        if (this.props.minViewMode === 'months') {
            this.setViewDate(viewDate);
        }

        this.setState({
            viewDate: viewDate,
            displayed: {
                days: {display: 'block'},
                months: {display: 'none'},
                years: {display: 'none'},
            },
        });
    }

    // YearsPicker props function

    setViewYear(event) {
        let year = event.target.innerHTML;
        let viewDate = this.state.viewDate;

        viewDate.setFullYear(year);

        if (this.props.minViewMode === 'years') {
            this.setViewDate(viewDate);
        }

        this.setState({
            viewDate: viewDate,
            displayed: {
                days: {display: 'none'},
                months: {display: 'block'},
                years: {display: 'none'},
            },
        });
    }

    addDecade() {
        let viewDate = this.state.viewDate;
        let newDate = new Date(viewDate.valueOf());

        newDate.setFullYear(viewDate.getFullYear() + 10);
        this.setState({
            viewDate: newDate,
        });
    }

    subtractDecade() {
        let viewDate = this.state.viewDate;
        let newDate = new Date(viewDate.valueOf());

        newDate.setFullYear(viewDate.getFullYear() - 10);

        this.setState({
            viewDate: newDate ,
        });
    }

    // render children
    renderDays() {
        return (
            <DaysPicker
                style={this.state.displayed.days}
                selectedDate={this.state.selectedDate}
                viewDate={this.state.viewDate}

                subtractMonth={this.subtractMonth}
                addMonth={this.addMonth}
                setSelectedDate={this.setSelectedDate}
                showMonths={this.showMonths}

                locale={this.state.locale}
                weekStart={this.props.weekStart}
                daysOfWeekDisabled={this.props.daysOfWeekDisabled}
                minDate={this.props.minDate}
                maxDate={this.props.maxDate}
                />
        );
    }

    renderMonths() {
        return (
            <MonthsPicker
                style={this.state.displayed.months}
                locale={this.state.locale}
                addYear={this.addYear}
                subtractYear={this.subtractYear}
                viewDate={this.state.viewDate}
                selectedDate={this.state.selectedDate}
                showYears={this.showYears}
                setViewMonth={this.setViewMonth} />
        );
    }

    renderYears() {
        return (
            <YearsPicker
                style={this.state.displayed.years}
                viewDate={this.state.viewDate}
                selectDate={this.state.selectedDate}
                setViewYear={this.setViewYear}
                addDecade={this.addDecade}
                subtractDecade={this.subtractDecade} />
        );
    }

    render() {
        return (
            <div className={this.prefixClass('body')}>
                {this.renderDays()}
                {this.renderMonths()}
                {this.renderYears()}
            </div>
        );
    }
}


DatePicker.displayName = "DatePicker";

DatePicker.propTypes = {
    onSelect: React.PropTypes.func.isRequired,
    onClose: React.PropTypes.func,
    viewMode: React.PropTypes.string,
    minViewMode: React.PropTypes.string,
    daysOfWeekDisabled: React.PropTypes.array,
    format: React.PropTypes.string,
    date: React.PropTypes.object,
    weekStart: React.PropTypes.number,
    minDate: React.PropTypes.string,
    maxDate: React.PropTypes.string,
    locale: React.PropTypes.string ,
};

DatePicker.defaultProps = {
    classPrefix: 'datepicker',
    date: new Date(),
    daysOfWeekDisabled: [],
    viewMode: 'days',
    minViewMode: 'days',
    format: 'YYYY-MM-DD',
    displayed: {
        days: {display: 'block'},
        months: {display: 'none'},
        years: {display: 'none'},
    },
};

module.exports = DatePicker;


 /*-----------------------------------------------------------------------------------*/


class DaysPicker extends React.Component{

    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.renderDays = this.renderDays.bind(this);
        this.renderWeek = this.renderWeek.bind(this);
    }

    renderDays() {
        let row;
        let i;
        let _ref;
        let _i;
        let _len;
        let prevY;
        let prevM;
        let classes = {};
        let html = [];
        let cells = [];
        let weekStart = this.props.weekStart || this.props.locale.weekStart;

        let weekEnd = ((weekStart + 6) % 7);

        let d = this.props.viewDate;
        let year = d.getFullYear();
        let month = d.getMonth();
        let selectedDate = this.props.selectedDate;

        let currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 0, 0, 0, 0).valueOf();

        let prevMonth = new Date(year, month - 1, 28, 0, 0, 0, 0);
        let day = dateUtils.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());

        prevMonth.setDate(day);
        prevMonth.setDate(day - (prevMonth.getDay() - weekStart + 7) % 7);

        let nextMonth = new Date(prevMonth);

        nextMonth.setDate(nextMonth.getDate() + 42);
        nextMonth = nextMonth.valueOf();

        let minDate = this.props.minDate && fecha.parse(this.props.minDate);
        let maxDate = this.props.maxDate && fecha.parse(this.props.maxDate);

        while (prevMonth.valueOf() < nextMonth) {
            classes[this.prefixClass('day')] = true;

            prevY = prevMonth.getFullYear();
            prevM = prevMonth.getMonth();


            // set className old new
            if ((prevM < month && prevY === year) || prevY < year) {
                classes[this.prefixClass('old')] = true;
            } else if ((prevM > month && prevY === year) || prevY > year) {
                classes[this.prefixClass('new')] = true;
            }

            // set className active
            if (prevMonth.valueOf() === currentDate) {
                classes[this.setClassNamespace('active')] = true;
            }

            // set className disabled
            if ((minDate && prevMonth.valueOf() < minDate)
                || (maxDate && prevMonth.valueOf() > maxDate)) {
                classes[this.setClassNamespace('disabled')] = true;
            }

            // week disabled
            if (this.props.daysOfWeekDisabled) {
                _ref = this.props.daysOfWeekDisabled;
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    i = _ref[_i];
                    if (prevMonth.getDay() === this.props.daysOfWeekDisabled[i]) {
                        classes[this.setClassNamespace('disabled')] = true;
                        break;
                    }
                }
            }

            cells.push(
                <td
                    key={prevMonth.getMonth() + '-' + prevMonth.getDate()}
                    className={classNames(classes)}
                    onClick={this.props.setSelectedDate}>
                    {prevMonth.getDate()}
                </td>
            );

            // add tr
            if (prevMonth.getDay() === weekEnd) {
                row = <tr key={prevMonth.getMonth() + '-' + prevMonth.getDate()}>{cells}</tr>;
                html.push(row);
                cells = [];
            }

            classes = {};
            prevMonth.setDate(prevMonth.getDate() + 1);
        }

        return html;
    }

    renderWeek() {
        let ths = [];
        let locale = this.props.locale;
        let weekStart = this.props.weekStart || this.props.locale.weekStart;
        let weekEnd = weekStart + 7;

        while (weekStart < weekEnd) {
            ths.push(
                <th key={weekStart} className={this.prefixClass('dow')}>
                    {locale.daysMin[weekStart++ % 7]}
                </th>
            );
        }

        return (
            <tr>
                {ths}
            </tr>
        );
    }

    render() {
        let viewDate = this.props.viewDate;
        let prefixClass = this.prefixClass;
        let locale = this.props.locale;

        return (
            <div
                className={prefixClass('days')}
                style={this.props.style}>
                <table className={prefixClass('table')}>
                    <thead>
                    <tr className={prefixClass('header')}>
                        <th className={prefixClass('prev')} onClick={this.props.subtractMonth}>
                            <i className={prefixClass('prev-icon')}></i>
                        </th>
                        <th
                            className={prefixClass('switch')}
                            colSpan="5"
                            onClick={this.props.showMonths}>
                            <div className={this.prefixClass('select')}>
                                {locale.monthsShort[viewDate.getMonth()]}
                                {viewDate.getFullYear()}
                            </div>
                        </th>
                        <th className={prefixClass('next')} onClick={this.props.addMonth}>
                            <i className={prefixClass('next-icon')}></i>
                        </th>
                    </tr>
                    {this.renderWeek()}
                    </thead>
                    <tbody>
                    {this.renderDays()}
                    </tbody>
                </table>
            </div>
        );
    }
}


DaysPicker.displayName = "DaysPicker";

DaysPicker.propTypes = {
    subtractMonth: React.PropTypes.func.isRequired,
    addMonth: React.PropTypes.func.isRequired,

    setSelectedDate: React.PropTypes.func.isRequired,
    selectedDate: React.PropTypes.object.isRequired,

    viewDate: React.PropTypes.object.isRequired,
    showMonths: React.PropTypes.func.isRequired,

    locale: React.PropTypes.object,
    weekStart: React.PropTypes.number,
    daysOfWeekDisabled: React.PropTypes.array,
    minDate: React.PropTypes.string,
    maxDate: React.PropTypes.string,
};

DaysPicker.defaultProps = {
    classPrefix: 'datepicker',
};



/*-----------------------------------------------------------------------------------*/



class MonthsPicker extends React.Component{
    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.renderMonths = this.renderMonths.bind(this);
    }
    renderMonths() {
        let classes = {};
        let month = this.props.selectedDate.getMonth();
        let year = this.props.selectedDate.getFullYear();
        let i = 0;
        let months = [];
        let minDate = this.props.minDate && fecha.parse(this.props.minDate);
        let maxDate = this.props.maxDate && fecha.parse(this.props.maxDate);
        let prevMonth = new Date(year, month);

        // TODO: minDate maxDate months
        while (i < 12) {
            classes[this.prefixClass('month')] = true;

            if (this.props.viewDate.getFullYear() ===
                this.props.selectedDate.getFullYear()
                && i === month) {
                classes[this.setClassNamespace('active')] = true;
            }

            // set className disabled
            if ((minDate && prevMonth.valueOf() < minDate)
                || (maxDate && prevMonth.valueOf() > maxDate)) {
                classes[this.setClassNamespace('disabled')] = true;
            }

            months.push(
                <span
                    className={classNames(classes)}
                    onClick={this.props.setViewMonth}
                    key={i}>
          {this.props.locale.monthsShort[i]}
        </span>
            );

            classes = {};
            i++;
        }

        return months;
    }

    render() {
        return (
            <SubPicker
                displayName="months"
                style={this.props.style}
                subtract={this.props.subtractYear}
                add={this.props.addYear}
                showFunc={this.props.showYears}
                showText={this.props.viewDate.getFullYear()}
                body={this.renderMonths()} />
        );
    }
}

MonthsPicker.displayName = "MonthsPicker";

MonthsPicker.propTypes = {
    subtractMonth: React.PropTypes.func.isRequired,
    addMonth: React.PropTypes.func.isRequired,

    setSelectedDate: React.PropTypes.func.isRequired,
    selectedDate: React.PropTypes.object.isRequired,

    viewDate: React.PropTypes.object.isRequired,
    showMonths: React.PropTypes.func.isRequired,

    locale: React.PropTypes.object,
    weekStart: React.PropTypes.number,
    daysOfWeekDisabled: React.PropTypes.array,
    minDate: React.PropTypes.string,
    maxDate: React.PropTypes.string,
};

MonthsPicker.defaultProps = {
    classPrefix: 'datepicker',
};


/*-----------------------------------------------------------------------------------*/



class YearsPicker extends React.Component{

    constructor(props) {
        super(props);
        for(let v in ClassNameMixin){
            this[v] = ClassNameMixin[v].bind(this);
        }
        this.renderYears = this.renderYears.bind(this);
    }
    renderYears() {
        let classes = {};
        let years = [];
        let i = -1;
        let year = parseInt(this.props.viewDate.getFullYear() / 10, 10) * 10;

        year--;

        while (i < 11) {
            classes[this.prefixClass('year')] = true;

            if (i === -1 || i === 10) {
                classes[this.prefixClass('old')] = true;
            }

            if (this.props.selectDate.getFullYear() === year) {
                classes[this.setClassNamespace('active')] = true;
            }

            years.push(
                <span
                    className={classNames(classes)}
                    onClick={this.props.setViewYear}
                    key={year}>
          {year}
        </span>
            );

            classes = {};
            year++;
            i++;
        }

        return years;
    }

    render() {
        let year = parseInt(this.props.viewDate.getFullYear() / 10, 10) * 10;
        let addYear = year + 9;
        let showYear = year + '-' + addYear;

        return (
            <SubPicker
                displayName="years"
                style={this.props.style}
                subtract={this.props.subtractDecade}
                add={this.props.addDecade}
                showText={showYear}
                body={this.renderYears()} />
        );
    }
}


YearsPicker.displayName = "YearsPicker";

YearsPicker.propTypes = {
    viewDate: React.PropTypes.object.isRequired,
    selectDate: React.PropTypes.object.isRequired,
    subtractDecade: React.PropTypes.func.isRequired,
    addDecade: React.PropTypes.func.isRequired,
    setViewYear: React.PropTypes.func.isRequired,
};

YearsPicker.defaultProps = {
    classPrefix: 'datepicker',
};


/*-----------------------------------------------------------------------------------*/



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
                            onClick={this.props.showFunc}>
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

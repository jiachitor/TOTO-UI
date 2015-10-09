import React from 'react';
import DateTimePicker from '../../../../../src/dateTimePicker.jsx';
import DateTimeInput from '../../../../../src/dateTimeInput.jsx';

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {

        var DateTimeInputInstance1 = (
            <div>
                <DateTimeInput />
                <DateTimeInput dateTime="2015-05-20 12:12" />
            </div>
        );

        var DateTimeInputInstance2 = (
            <div>
                <DateTimeInput amStyle="success" />
                <DateTimeInput amStyle="warning" />
                <DateTimeInput amStyle="danger" />
            </div>
        );


        var DateTimeInputInstance3 = (
            <div>
                <DateTimeInput />
                <DateTimeInput format="YYYY/MM/DD" />
                <DateTimeInput format="YYYY/M/D HH:mm" />
                <DateTimeInput format="YYYY/M/D" />
                <DateTimeInput format="YYYY/MM" />
                <DateTimeInput format="YYYY/M" />
                <DateTimeInput format="YYYY" />
            </div>
        );

        var DateTimeInputInstance4 = (
            <div>
                <DateTimeInput viewMode="months" showTimePicker={false} />
                <DateTimeInput viewMode="years" showTimePicker={false} />
            </div>
        );


        var DateTimeInputInstance5 = (
            <div>
                <DateTimeInput format="YYYY-MM" minViewMode="months" showTimePicker={false} viewMode="months" />
                <DateTimeInput format="YYYY" minViewMode="years" showTimePicker={false} viewMode="years" />
            </div>
        );


        var DateTimeInputInstance6 = (
            <div>
                <DateTimeInput daysOfWeekDisabled={[0, '', '', '', '', '', 6]} />
                <DateTimeInput date="2015-06-01" maxDate="2015-06-24" minDate="2015-05-21" />
            </div>
        );


        var DateTimeInputInstance7 = (
            <div>
                <DateTimeInput weekStart={1} />
            </div>
        );


        var DateTimeInputInstance8 = (
            <div>
                <DateTimeInput showDatePicker={false} format="HH:mm" />
                <DateTimeInput showTimePicker={false} format="YYYY-MM-DD" />
            </div>
        );


        var DateTimeInputInstance9 = (
            <div>
                <DateTimeInput showDatePicker={false} format="HH:mm" />
                <DateTimeInput showTimePicker={false} format="YYYY-MM-DD" />
            </div>
        );


        var DateTimeText1 = React.createClass({
            getInitialState: function() {
                return {
                    dateTime: '2015-05-20 12:14',
                    time: '13:14',
                    date: '2015-05-20'
                };
            },

            handleSelect: function(dateTime) {
                this.setState({
                    dateTime: dateTime
                });
            },

            handleSelectDate: function(date) {
                this.setState({
                    date: date
                });
            },

            handleSelectTime: function(time) {
                this.setState({
                    time: time
                });
            },

            render: function() {
                return (
                    <div>
                        <p>日期时间: {this.state.dateTime}</p>
                        <DateTimePicker
                            style={{display: 'block'}}
                            onSelect={this.handleSelect}
                            dateTime="2015-05-20 12:14"
                            caretDisplayed={false}
                            />

                        <p>日期: {this.state.date}</p>
                        <DateTimePicker
                            style={{display: 'block'}}
                            onSelect={this.handleSelectDate}
                            dateTime="2015-05-20"
                            format="YYYY-MM-DD"
                            showTimePicker={false}
                            caretDisplayed={false}
                            />

                        <p>时间: {this.state.time}</p>
                        <DateTimePicker
                            style={{display: 'block'}}
                            onSelect={this.handleSelectTime}
                            dateTime="13:14"
                            format="HH:mm"
                            showDatePicker={false}
                            caretDisplayed={false}
                            />
                    </div>
                );
            }
        });

        var DateTimePickerInstance1 = (
            <DateTimeText1 />
        );



        var DateTimeText2 = React.createClass({
            getInitialState: function() {
                return {
                    dateTime: '2015-05-20 12:14'
                };
            },

            handleSelect: function(dateTime) {
                this.setState({
                    dateTime: dateTime
                });
            },

            handleClose: function() {
                alert('选择：' + this.state.dateTime);
            },

            render: function() {
                return (
                    <div>
                        <p>日期时间: {this.state.dateTime}</p>
                        <DateTimePicker
                            style={{display: 'block'}}
                            onSelect={this.handleSelect}
                            onClose={this.handleClose}
                            dateTime="2015-05-20 12:14"
                            caretDisplayed={false}
                            />
                    </div>
                );
            }
        });

        var DateTimePickerInstance2 = (
            <DateTimeText2 />
        );


        return (
            <div className="demos">
                <div className="demo_box">1.基本样式{DateTimeInputInstance1}</div>
                <div className="demo_box">2.更改颜色{DateTimeInputInstance2}</div>
                <div className="demo_box">3.日期格式{DateTimeInputInstance3}</div>
                <div className="demo_box">4.视图模式{DateTimeInputInstance4}</div>
                <div className="demo_box">5.限制视图{DateTimeInputInstance5}</div>
                <div className="demo_box">6.禁用日期{DateTimeInputInstance6}</div>
                <div className="demo_box">7.星期开始设置{DateTimeInputInstance7}</div>
                <div className="demo_box">8.禁用日期{DateTimeInputInstance8}</div>
                <div className="demo_box">9.语言设置{DateTimeInputInstance9}</div>

                <div className="demo_box">21.内联调用{DateTimePickerInstance1}</div>
                <div className="demo_box">22.onClose{DateTimePickerInstance2}</div>
            </div>
        );
    }
};

module.exports = Main;

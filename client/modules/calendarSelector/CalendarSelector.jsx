import React from 'react';
import {Calendar} from 'react-calendar-component';
import moment from 'moment';

class CalendarSelector extends React.Component {
  constructor() {
    super();
    this.state = {
      date: moment()
    };
  }

  render() {
    return (
      <Calendar
        onNextMonth={() => this.setState({ date: this.state.date.clone().add(1, 'months') }) }
        onPrevMonth={() => this.setState({ date: this.state.date.clone().subtract(1, 'months') }) }
        date={this.state.date}
        onPickDate={(date) => {this.props.setDateTimePreferance(date);}}
        renderDay={(day) => day.format('D')}
      />
    );
  }
}

export default CalendarSelector;

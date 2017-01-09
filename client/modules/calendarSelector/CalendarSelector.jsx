import React from 'react';
import {Calendar} from 'react-calendar-component';
import moment from 'moment';
import OptionsModal from '../optionsModal/OptionsModal.jsx';


class CalendarSelector extends React.Component {
  constructor() {
    super();
    this.state = {
      date: moment()
    };
  }

  render() {
    return (
      <div>
        <OptionsModal
          showModal={this.props.showModal}
          setTimePreferance={this.props.setTimePreferance}
          toggleModal={this.props.toggleModal}
          disableAddMeeting={this.props.disableAddMeeting}
          findMatches={this.props.findMatches}
        />
        <Calendar
          onNextMonth={() => this.setState({ date: this.state.date.clone().add(1, 'months')})}
          onPrevMonth={() => this.setState({ date: this.state.date.clone().subtract(1, 'months')})}
          date={this.state.date}
          onPickDate={(date) => {this.props.setDatePreferance(date);}}
          renderDay={(day) => day.format('D')}
        />
      </div>
    );
  }
}

export default CalendarSelector;

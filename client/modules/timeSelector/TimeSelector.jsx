import React from 'react';
import moment from 'moment';



class TimeSelector extends React.Component {

  renderOptionsElements() {
    // console.log(moment().startOf('day').format('LT'));
    const hoursInDay = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    return hoursInDay.map((hour, index) => {
      return (
        <option key={index} value={moment().startOf('Day').add(hour, 'hours')}>
          {moment().startOf('Day').add(hour, 'hours').format('LT')}
        </option>
      );
    });
  }

  render() {
    return (
      <select onChange={(event) => {this.props.setTimePreferance(event.target.value);}} disabled={this.props.disabled}>
        {this.renderOptionsElements()}
      </select>
    );
  }
}


export default TimeSelector;

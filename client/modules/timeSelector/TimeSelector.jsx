import React from 'react';
import moment from 'moment';
import {SplitButton, MenuItem} from 'react-bootstrap';



class TimeSelector extends React.Component {

  renderOptionsElements() {
    const hoursInDay = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    return hoursInDay.map((hour, index) => {
      return (
        <MenuItem key={index} data-value={index} onClick={(event) => {this.props.setTimePreferance(event.target.dataset.value);}}>
          {moment().startOf('Day').add(hour, 'hours').format('LT')}
        </MenuItem>
      );
    });
  }

  render() {
    return (
      <SplitButton bsClass='timeSelector dropdown' disabled={this.props.isDisabled} title='Pick a time' id='time-selector'>
        {this.renderOptionsElements()}
      </SplitButton>
    );
  }
}


export default TimeSelector;

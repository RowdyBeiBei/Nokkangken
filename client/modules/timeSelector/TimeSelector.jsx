import React from 'react';
import moment from 'moment';



class TimeSelector extends React.Component {

  renderOptionsElements() {
    const hoursInDay = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    return hoursInDay.map((hour, index) => {
      return (
        <div className='timeOption' key={index} data-value={index} onClick={(event) => {this.props.setTimePreferance(event.target.dataset.value);}}>
          {moment().startOf('Day').add(hour, 'hours').format('LT')}
        </div>
      );
    });
  }

  render() {
    return (

      <div className='timeSelector' disabled={this.props.isDisabled}>
        {this.renderOptionsElements()}
     </div>
    );
  }
}


export default TimeSelector;

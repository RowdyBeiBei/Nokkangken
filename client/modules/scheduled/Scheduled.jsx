import React from 'react';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import * as Actions from './scheduledMatchesActions.js';
import {connect} from 'react-redux';
import moment from 'moment';


class Scheduled extends React.Component {

  componentDidMount() {
    this.setScheduledMatches();
  }

  setScheduledMatches() {
    this.props.actions.setScheduledMatchesSent();
    this.getScheduledMatches(this.props.user.id).then((scheduleds) => {
      this.props.actions.setScheduledMatchesRecieved(scheduleds.data);
    });
  }

  getScheduledMatches(userId) {
    return axios.get(`/api/user/scheduleds/${userId}`);
  }

  renderScheduledMatches() {
    return this.props.scheduledMatches.scheduledMatches.map((scheduled, index) => {
      return (
          <div key={index} className='scheduledEntry'>
            <img className='scheduledImg scheduledEntryItem' src='https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg'/>
            <div className='scheduledEntryItem'>
              <h3><time className='time'>{moment.unix(scheduled.scheduledtime).format('llll')}</time></h3>
              <p>You have a date with <strong className='name'>{`lisa`}</strong> at <strong className='businessid'>{scheduled.businessid}</strong></p>
            </div>
          </div>
      );
    });
  }

  render() {
    return (
      <div className='scheduledFeed'>
        {this.props.scheduledMatches === null || this.props.scheduledMatches.isFetching ? null : this.renderScheduledMatches()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    scheduledMatches: state.scheduledMatches,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Scheduled);

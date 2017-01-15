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
            <h2><time>{moment.unix(scheduled.date).format('llll')}</time></h2>
            <p>You have a date with <strong>{`lisa`}</strong> at <strong>{scheduled.businessid}</strong> </p>
            <img className='scheduledImg' src='https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg'/>
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

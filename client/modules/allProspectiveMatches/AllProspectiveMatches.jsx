import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './allProspectiveMatchesActions.js';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import Loading from 'react-loading';
import ProspectiveMatchEntry from '../prospectiveMatchEntry/ProspectiveMatchEntry.jsx';
import {Button} from 'react-bootstrap';


class AllProspectiveMatches extends React.Component {

  componentWillMount() {
    this.setActiveProspect();
  }

  setActiveProspect() {
    this.props.actions.setActiveProspectiveMatch(this.props.allProspectiveMatches.allProspectiveMatches.pop());
  }

  responseRequest(wouldJoin, userId, eventTime, prospectId, businessId) {
    return axios.post('/api/response', {
      wouldJoin: wouldJoin,
      userId: userId,
      eventTime: eventTime,
      prospectId: prospectId,
      businessId: businessId
    });
  }

  triggerMatching() {
    this.responseRequest(true, this.props.user.id, this.props.activeProspectiveMatch.activeProspectiveMatch.possibletime, this.props.activeProspectiveMatch.activeProspectiveMatch.id, this.props.activeProspectiveMatch.activeProspectiveMatch.businessid);
    this.setActiveProspect();
  }

  triggerDeny() {
    this.reponseRequest(false, this.props.user.id, this.props.activeProspectiveMatch.activeProspectiveMatch.possibletime, this.props.activeProspectiveMatch.activeProspectiveMatch.id, this.props.activeProspectiveMatch.activeProspectiveMatch.businessId);
    this.setActiveProspect();
  }

  renderProspectiveMatch() {
    return (
      <div>
        <ProspectiveMatchEntry
          key={this.props.activeProspectiveMatch.activeProspectiveMatch.username}
          entry={this.props.activeProspectiveMatch.activeProspectiveMatch}
        />
        <button onClick={() => {this.triggerMatching();}}>Yes</button>
        <button onClick={() => {this.triggerDeny();}}>No</button>
      </div>
    );
  }

  renderLoading() {
    return (
      <div>
        <h2>You have no matches at this time</h2>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.activeProspectiveMatch === null || this.props.activeProspectiveMatch.activeProspectiveMatch === undefined ? this.renderLoading() : this.renderProspectiveMatch()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prospectiveMatches: state.prospectiveMatches,
    activeProspectiveMatch: state.activeProspectiveMatch,
    allProspectiveMatches: state.allProspectiveMatches,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
} ;

export default connect(mapStateToProps, mapDispatchToProps)(AllProspectiveMatches);

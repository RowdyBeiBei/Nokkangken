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

  repsonseRequest(wouldJoin, userId, eventTime, prospectId) {
    return axios.post('/response', {
      wouldJoin: wouldJoin,
      userId: userId,
      eventTime: eventTime,
      prospectId: prospectId
    });
  }

  triggerMatching(prospectId) {
    // trigger matching function. add possible match & check if this makes a match &
    // if it does add match to both users matches
    this.reponseRequest(true, this.props.user.id, this.props.timePreferance, this.props.activeProspectiveMatch.id);
    console.log(event.target);
    this.setActiveProspect();
  }

  triggerDeny(prospectId) {
    this.reponseRequest(false, this.props.user.id, this.props.timePreferance, this.props.activeProspectiveMatch.id);
    this.setActiveProspect();
  }

  renderProspectiveMatch() {
    return (
      <div>
        <ProspectiveMatchEntry
          key={this.props.activeProspectiveMatch.activeProspectiveMatch.username}
          entry={this.props.activeProspectiveMatch.activeProspectiveMatch}
        />
        <button onClick={(event) => {this.triggerMatching(event);}}>Yes</button>
        <button onClick={() => {this.triggerDeny();}}>No</button>
      </div>
    );
  }

  renderLoading() {
    console.log('loading');
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

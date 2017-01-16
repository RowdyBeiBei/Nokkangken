import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './allProspectiveMatchesActions.js';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import Loading from 'react-loading';
import ProspectiveMatchEntry from '../prospectiveMatchEntry/ProspectiveMatchEntry.jsx';
import {Button, Grid, Row, Col} from 'react-bootstrap';


class AllProspectiveMatches extends React.Component {

  componentWillMount() {
    this.setActiveProspect();
  }

  setActiveProspect() {
    this.props.actions.setActiveProspectiveMatch(this.props.allProspectiveMatches.allProspectiveMatches.pop());
  }

  responseRequest(wouldJoin, userId, eventTime, prospectId, businessId) {
    console.log(arguments);

    return axios.post('/api/response', {
      wouldJoin: wouldJoin,
      userId: userId,
      eventTime: eventTime,
      prospectId: prospectId,
      businessId: businessId
    });
  }

  triggerMatching() {
    this.responseRequest(true, this.props.user.idu, this.props.activeProspectiveMatch.activeProspectiveMatch.possibletime, this.props.activeProspectiveMatch.activeProspectiveMatch.idu, this.props.activeProspectiveMatch.activeProspectiveMatch.businessid);
    this.setActiveProspect();
  }

  triggerDeny() {
    this.reponseRequest(false, this.props.user.idu, this.props.activeProspectiveMatch.activeProspectiveMatch.possibletime, this.props.activeProspectiveMatch.activeProspectiveMatch.idu, this.props.activeProspectiveMatch.activeProspectiveMatch.businessId);
    this.setActiveProspect();
  }

  renderProspectiveMatch() {
    return (
      <Row>
        <Col bsClass='prospectiveMatchDiv col' sm={3} md={4} mdOffset={4}>
          <ProspectiveMatchEntry
            key={this.props.activeProspectiveMatch.activeProspectiveMatch.username}
            entry={this.props.activeProspectiveMatch.activeProspectiveMatch}
          />
          <Button block bsStyle='success' onClick={(event) => {this.triggerMatching(event);}}>Yes</Button>
          <Button block bsStyle='warning' onClick={() => {this.triggerDeny();}}>No</Button>
        </Col>
      </Row>
    );
  }

  renderLoading() {
    return (
      <Row>
        <h2 className='matchesLoading'>You have no matches at this time</h2>
      </Row>
    );
  }

  render() {
    return (
      <Grid bsClass='prospectiveMatchView container'>
        {this.props.activeProspectiveMatch === null || this.props.activeProspectiveMatch.activeProspectiveMatch === undefined ? this.renderLoading() : this.renderProspectiveMatch()}
      </Grid>
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

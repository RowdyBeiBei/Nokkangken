import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './prospectiveMatchesActions.js';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import Loading from 'react-loading';
import ProspectiveMatchEntry from '../prospectiveMatchEntry/ProspectiveMatchEntry.jsx';
import {Button} from 'react-bootstrap';


class ProspectiveMatches extends React.Component {

  componentWillMount() {
    this.setActiveProspect();
  }

  setActiveProspect() {
    this.props.actions.setActiveProspectiveMatch(this.props.prospectiveMatches.prospectiveMatches.pop());
  }

  triggerMatching(event) {
    // trigger matching function. add possible match & check if this makes a match &
    // if it does add match to both users matches
    console.log(event.target);
    this.setActiveProspect();
  }

  leftSwipe() {
    console.log('no');
    this.setActiveProspect();
  }

  renderProspectiveMatch() {
    return (
      <div>
        <ProspectiveMatchEntry key={this.props.activeProspectiveMatch.activeProspectiveMatch.username} entry={this.props.activeProspectiveMatch.activeProspectiveMatch}/>
        <button onClick={(event) => {this.triggerMatching(event);}}>Yes</button>
        <button onClick={() => {this.leftSwipe();}}>No</button>
      </div>
    );
  }

  renderLoading() {
    return <Loading/>;
  }

  render() {
    return (
      <div>
        {this.props.activeProspectiveMatch === null ? this.renderLoading() : this.renderProspectiveMatch()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prospectiveMatches: state.prospectiveMatches,
    activeProspectiveMatch: state.activeProspectiveMatch
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
} ;

export default connect(mapStateToProps, mapDispatchToProps)(ProspectiveMatches);

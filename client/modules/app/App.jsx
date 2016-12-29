import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './appActions.js';
import {bindActionCreators} from 'redux';
import Landing from '../landing/Landing.jsx';

class App extends React.Component {

  componentWillMount() {
    this.props.actions.requestLocation().then((location) => {
      this.getNearbyLocations(location.payload);
    });
  }

  getNearbyLocations(location) {
    this.props.actions.requestNearbyLocations(location);
  }

  render() {
    return (
       <Landing />
    );
  }
}

function mapStateToProps(state) {
  return {
    geolocation: state.location,
    nearbyLocations: state.nearbyLocations
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

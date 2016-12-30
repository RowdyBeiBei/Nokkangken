import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './appActions.js';
import {bindActionCreators} from 'redux';

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
      <div>
        <h1>hi</h1>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userlocation: state.userLocation,
    nearbyLocations: state.nearbyLocations
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

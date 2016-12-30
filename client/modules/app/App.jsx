import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './appActions.js';
import {bindActionCreators} from 'redux';
import axios from 'axios';



class App extends React.Component {

  componentWillMount() {
    this.props.actions.requestNearbyLocationsSent();
    this.props.actions.requestLocation().then((location) => {
      return this.getNearbyLocations(location.payload);
    }).then((nearbyLocations) => {
      return this.props.actions.requestNearbyLocationsRecieved(nearbyLocations);
    });
  }

  getNearbyLocations({longitude, latitude}) {
    return axios.get('/yelp/locations', {
      params: {
        latitude: latitude,
        longitude: longitude
      }
    });
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

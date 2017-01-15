import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './appActions.js';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import Navigation from '../navigation/Navigation.jsx';
import {hashHistory} from 'react-router';



class App extends React.Component {

  componentWillMount() {
    this.props.actions.requestUserLocationSent();
    this.getUserLocation()
    .then((geolocation) => {
      this.props.actions.requestUserLocationRecieved(geolocation);
    });
  }

  componentDidMount() {
    this.findAllProspectiveMatches();
  }

  getUserLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((location, err) => {
        if(err) {
          reject(err);
        }else {
          resolve({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          });
        }
      });
    });
  }

  findAllProspectiveMatches() {
    this.props.actions.requestAllProspectiveMatchesSent();
    this.getAllProspectiveMatches(this.props.user.id)
    .then((matches) => {
      if(matches.data.length === 0) {
        return;
      }
      let reducedMatches = matches.data.reduce((init, curr) => {
        return init.concat(curr);
      });
      matches.data = reducedMatches;
      this.props.actions.requestAllProspectiveMatchesRecieved(matches);
    });
  }

  getAllProspectiveMatches(userId) {
    return axios.get(`/api/user/possibles/${userId}`)
  }


  render() {
    return (
      <div>
        <Navigation userLocation={this.props.userLocation}/>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userLocation: state.userLocation,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

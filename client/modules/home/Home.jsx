import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './homeActions.js';
import {bindActionCreators} from 'redux';
import {Link, hashHistory} from 'react-router';
import axios from 'axios';
import CalendarSelector from '../calendarSelector/CalendarSelector.jsx';
import OptionsModal from '../optionsModal/OptionsModal.jsx';
import moment from 'moment';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      timePreferance: null,
      showModal: false,
      disableAddMeeting: true
    };
  }

  findMatches() {
    this.props.actions.requestProspectiveMatchesSent();
    this.getProspectiveMatches()
    .then((matches) => {
      this.props.actions.requestProspectiveMatchesRecieved(matches);
      hashHistory.push('/prospectiveMatches');
    });
  }

  getProspectiveMatches() {
    return axios.get('/prospectiveMatches');
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  setDatePreferance(date) {
    this.setState({timePreferance: date});
    this.setState({showModal: true});
  }

  setTimePreferance(time) {
    this.setState({
     timePreferance: this.state.timePreferance.hour(time)
    });
    console.log(this.state.timePreferance);
    this.setState({
      disableAddMeeting: false
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

  componentDidUpdate(prevProps, prevState) {
    if(!this.props.userLocation.isFetching) {
      this.props.actions.requestNearbyLocationsSent();
      this.getNearbyLocations(this.props.userLocation.geolocation)
      .then((locations) => {
        this.props.actions.requestNearbyLocationsRecieved(locations);
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="card hovercard">
              <div className="cardheader">

              </div>
              <div className="avatar">
                <img alt="" src={this.props.user.picUrl} />
              </div>
              <div className="info">
                <div className="title">{this.props.user.username}</div>
                <div className="desc">{this.props.user.bio}</div>
              </div>
              <div>
                <CalendarSelector
                   toggleModal={this.toggleModal.bind(this)}
                   setTimePreferance={this.setTimePreferance.bind(this)}
                   showModal={this.state.showModal}
                   setDatePreferance={this.setDatePreferance.bind(this)}
                   disableAddMeeting={this.state.disableAddMeeting}
                   findMatches={this.findMatches.bind(this)}
                 />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userLocation: state.userLocation,
    timePreferance: state.timePreferance
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

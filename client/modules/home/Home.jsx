import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './homeActions.js';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import axios from 'axios';
import TimeSelector from '../timeSelector/TimeSelector.jsx'


class Home extends React.Component {

  onChange(time) {
   this.setTimePreferance(time);
  }

  setTimePreferance(time) {
    const timePromise = Promise.resolve(time);
    return this.props.actions.setTimePreferance(timePromise);
  }

  getNearbyLocations({longitude, latitude}, open_at) {
    return axios.get('/yelp/locations', {
      params: {
        latitude: latitude,
        longitude: longitude,
        open_at: open_at.slice(0, -3)
      }
    });
  }

  componentDidUpdate(prevProps) {
    if(this.props.timePreferance && this.props.timePreferance !== prevProps.timePreferance) {
      this.props.actions.requestNearbyLocationsSent();
      this.getNearbyLocations(this.props.userLocation.geolocation, this.props.timePreferance)
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
              <TimeSelector setTimePreferance={this.setTimePreferance.bind(this)}/>
            <Link to='/locations'><button className='btn btn-primary mb3'>browse events</button></Link>
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

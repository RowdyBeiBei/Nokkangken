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

              <TimeSelector setTimePreferance={this.setTimePreferance.bind(this)}/>

              <div>
              <select className='btn btn-primary mb3 mr2' onChange={(event) => {this.onChange(event.target.value);}}>
                <option value={new Date(new Date().setHours(0)).setMinutes(0)}>12:00am</option>
                <option value={new Date(new Date().setHours(1)).setMinutes(0)}>1:00am</option>
                <option value={new Date(new Date().setHours(2)).setMinutes(0)}>2:00am</option>
                <option value={new Date(new Date().setHours(3)).setMinutes(0)}>3:00am</option>
                <option value={new Date(new Date().setHours(4)).setMinutes(0)}>4:00am</option>
                <option value={new Date(new Date().setHours(5)).setMinutes(0)}>5:00am</option>
                <option value={new Date(new Date().setHours(6)).setMinutes(0)}>6:00am</option>
                <option value={new Date(new Date().setHours(7)).setMinutes(0)}>7:00am</option>
                <option value={new Date(new Date().setHours(8)).setMinutes(0)}>8:00am</option>
                <option value={new Date(new Date().setHours(9)).setMinutes(0)}>9:00am</option>
                <option value={new Date(new Date().setHours(10)).setMinutes(0)}>10:00am</option>
                <option value={new Date(new Date().setHours(11)).setMinutes(0)}>11:00am</option>
                <option value={new Date(new Date().setHours(12)).setMinutes(0)}>12:00pm</option>
                <option value={new Date(new Date().setHours(13)).setMinutes(0)}>1:00pm</option>
                <option value={new Date(new Date().setHours(14)).setMinutes(0)}>2:00pm</option>
                <option value={new Date(new Date().setHours(15)).setMinutes(0)}>3:00pm</option>
                <option value={new Date(new Date().setHours(16)).setMinutes(0)}>4:00pm</option>
                <option value={new Date(new Date().setHours(17)).setMinutes(0)}>5:00pm</option>
                <option value={new Date(new Date().setHours(18)).setMinutes(0)}>6:00pm</option>
                <option value={new Date(new Date().setHours(19)).setMinutes(0)}>7:00pm</option>
                <option value={new Date(new Date().setHours(20)).setMinutes(0)}>8:00pm</option>
                <option value={new Date(new Date().setHours(21)).setMinutes(0)}>9:00pm</option>
                <option value={new Date(new Date().setHours(22)).setMinutes(0)}>10:00pm</option>
                <option value={new Date(new Date().setHours(23)).setMinutes(0)}>11:00pm</option>
              </select>
            </div>

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

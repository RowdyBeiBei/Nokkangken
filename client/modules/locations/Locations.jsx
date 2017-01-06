import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './locationsActions.js';
import {bindActionCreators} from 'redux';
import {Link, hashHistory} from 'react-router';
import Loading from 'react-loading';
import axios from 'axios';



class Locations extends React.Component {

  findMatches() {
    this.props.actions.requestProspectiveMatchesSent();
    this.getProspectiveMatches()
    .then((matches) => {
      this.props.actions.requestProspectiveMatchesRecieved(matches);
      hashHistory.push('/prospectiveMatches');
    });
  }

  getProspectiveMatches() {
    return axios.get('/prospectiveMatches')
  }

  getBusinessInfo(businessId) {
    return axios.get('/yelp/selectedLocation', {
      params: {
        businessId: businessId
      }
    });
  }

  onClick(businessId) {
    this.props.actions.requestBusinessInfoSent();
    this.getBusinessInfo(businessId)
    .then((businessInfo) => {
      return this.props.actions.requestBusinessInfoRecieved(businessInfo);
    });
    hashHistory.push('/selectedLocation');
  }

  renderNearbyLocations() {
    return this.props.nearbyLocations.nearbyLocations.map((location) => {
      return (
        <div  className="col-md-4 locationDiv"  key={location.id}>
          <hr/>
          <div>
            <button className="alert alert-danger truncate" onClick={() => {this.onClick(location.id)}}>{location.name}</button>
            <div>
              <input className="checkBox pull-right" type="checkbox"  />
              <img className="img-responsive" src={location.image_url}/>
            </div>
          </div>
        </div>
      );
    });
  }

  renderLoading() {
    return (
      <div>
        <Loading type='spokes'/>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Link to='/home'><button className="btn btn-primary mb3 mx1">Go Home</button></Link>
        <button onClick={() => {this.findMatches();}}>Find Matches</button>

        <h2>Check Out the Places Near You</h2>
        <small>(Click the Name Button for More Info)</small>

        <div className="container text-center">
          <div className="row">
            {this.props.nearbyLocations.isFetching ? this.renderLoading() : this.renderNearbyLocations()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nearbyLocations: state.nearbyLocations
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);

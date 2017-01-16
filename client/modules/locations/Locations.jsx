import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './locationsActions.js';
import {bindActionCreators} from 'redux';
import {Link, hashHistory} from 'react-router';
import Loading from 'react-loading';
import axios from 'axios';
import {Grid, Row, Col, Thumbnail, Checkbox, Button} from 'react-bootstrap';



class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedLocations: []
    };
  }

  onClick(businessId) {
    this.props.actions.requestBusinessInfoRecieved(businessInfo);
    hashHistory.push('/selectedLocation');
  }

  renderNearbyLocations() {
    return (
      <Grid bsClass='locationsDiv container'>
        {this.renderNearbyLocationRows()}
      </Grid>
    );
  }

  renderNearbyLocationRows() {
    return this.renderNearbyLocationEntries().map((rowEntries, index) => {
      return (
        <Row key={index}>
          {rowEntries[0]}
          {rowEntries[1]}
          {rowEntries[2]}
          {rowEntries[3]}
        </Row>
      );
    });
  }

  setSelectedLocation(location) {
    this.props.actions.requestBusinessInfoRecieved(location);
    hashHistory.push('/selectedLocation');
  }

  renderNearbyLocationEntries() {
    return this.props.nearbyLocations.nearbyLocations.map((location) => {
      return(
        <div className="col-md-3 col-sm-6 mb3">
          <div className="item-image">
            <Thumbnail src={location.image_url} bsClass='locationThumbnail thumbnail'/>
          </div>

          <div className="item-content">
            <h4 className="truncate" title={location.name}>{location.name}</h4>
            <h5>{location.categories[0].title}</h5>
            <Checkbox className='locationCheckBox' data-business-id={location.name}/>
            <Button onClick={() => {this.setSelectedLocation.call(this, location)}}>Go to selected location</Button>
          </div>
        </div>
      );
    }).reduce((init, curr, index) => {
      if(init[init.length - 1].length !== 4) {
        init[init.length - 1].push(curr);
      }else {
        init.push([curr]);
      }
      return init;
    }, [[]]);
  }

  renderLoading() {
    return (
      <div className="mt4 mx-auto">
        <Loading type='spokes'/>
      </div>
    );
  }

  renderPossiblesList() {
    let result = [];
    document.querySelectorAll('.locationCheckBox input').forEach((node) => {
      if(node.checked) {
        result.push(node.dataset.businessId);
      }
    });
    return result;
  }

  sendPossiblesList(timePreferance, userId, locationsList) {
    axios.post('/api/user/possibleEvent', {
      time: timePreferance,
      userId: userId,
      locations: locationsList
    }).then(() => {
      this.findMatches();
    });
  }

  getProspectiveMatches(userId, time) {
    return axios.get(`/api/user/possibles/${userId}/${time}`);
  }

  findMatches() {
    this.props.actions.requestProspectiveMatchesSent();
    this.getProspectiveMatches(this.props.user.idu, this.props.timePreferance.unix())
    .then((matches) => {
      this.props.actions.requestProspectiveMatchesRecieved(matches);
      hashHistory.push('/prospectiveMatches');
    });
  }

  render() {
    return (
      <div>
        {this.props.nearbyLocations.isFetching ? this.renderLoading() : this.renderNearbyLocations()}
        <Button className="btn btn-primary btn-lg center-block my3" onClick={() => {this.sendPossiblesList.call(this, this.props.timePreferance.unix(), this.props.user.idu, this.renderPossiblesList());}}>
          Checkout your possible matches
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    nearbyLocations: state.nearbyLocations,
    timePreferance: state.timePreferance
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);

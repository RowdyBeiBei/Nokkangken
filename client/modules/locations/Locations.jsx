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
        <Col md={3} sm={6}>
          <Thumbnail src={location.image_url}>
            <h2>{location.name}</h2>
            <h3>{location.categories[0].title}</h3>
            <Checkbox className='locationCheckBox' data-business-id={location.name}/>
            <Button onClick={() => {this.setSelectedLocation.call(this, location)}}>Go to selected location</Button>
          </Thumbnail>
        </Col>
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
      <div>
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

  sendPossiblesList(timePreferance, facebookId, locationsList) {
    // console.log(possiblesList);
    axios.post('/api/user/possibleEvent', {
      time: timePreferance,
      facebookId: facebookId,
      locations: locationsList
    }).then(() => {
      this.findMatches();
    });
    // {time: time, facebookId: facebookId, locations: [busId1, busId2...]}
    // get matches then
    // redirect to matches page
  }

  getProspectiveMatches(userId, time) {
    return axios.get(`/api/user/possibles/${userId}/${time}`);
  }

  findMatches() {
    this.props.actions.requestProspectiveMatchesSent();
    this.getProspectiveMatches(this.props.user.id, this.props.timePreferance.unix())
    .then((matches) => {
      this.props.actions.requestProspectiveMatchesRecieved(matches);
      hashHistory.push('/prospectiveMatches');
    });
  }

  render() {
    return (
      <div>
        {this.props.nearbyLocations.isFetching ? this.renderLoading() : this.renderNearbyLocations()}
        <Button onClick={() => {this.sendPossiblesList.call(this, this.props.timePreferance.unix(), this.props.user.facebook_id, this.renderPossiblesList());}}>
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

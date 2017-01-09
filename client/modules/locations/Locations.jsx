import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './locationsActions.js';
import {bindActionCreators} from 'redux';
import {Link, hashHistory} from 'react-router';
import Loading from 'react-loading';
import axios from 'axios';
import {Grid, Row, Col, Thumbnail, Checkbox} from 'react-bootstrap';



class Locations extends React.Component {

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

  renderNearbyLocationEntries() {
    return this.props.nearbyLocations.nearbyLocations.map((location) => {
      return(
        <Col md={3} sm={6}>
          <Thumbnail src={location.image_url}>
            <h2>{location.name}</h2>
            <h3>{location.categories[0].title}</h3>
            <Checkbox/>
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

  render() {
    return (
      <div>
        {this.props.nearbyLocations.isFetching ? this.renderLoading() : this.renderNearbyLocations()}
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

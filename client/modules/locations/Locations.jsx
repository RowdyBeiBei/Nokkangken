import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './locationsActions.js';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import Loading from 'react-loading';



class Locations extends React.Component {

  renderNearbyLocations() {
    return this.props.nearbyLocations.nearbyLocations.map((location) => {
      return (
        <div className='locationDiv' key={location.id}>
          <h2>{location.name}</h2>
          <img className='locationImg' src={location.image_url}/>
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
      <div >
        <h2>This is the loactions page</h2>
        {this.props.nearbyLocations.isFetching ? this.renderLoading() : this.renderNearbyLocations()}
        <Link to='/home'><button>Go Home</button></Link>
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

import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './locationsActions.js';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';


class Locations extends React.Component {


  renderNearbyLocations() {
    
  }

  render() {
    return (
      <div>
        <h2>This is the loactions page</h2>
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

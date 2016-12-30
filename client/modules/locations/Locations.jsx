import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './locationsActions.js';
import {bindActionCreators} from 'redux';


class Locations extends React.Component {


  render() {
    return (
      <div>
        <h2>This is the loactions page</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // business location information goes here
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);

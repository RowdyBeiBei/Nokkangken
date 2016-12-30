import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './signupActions.js';
import {bindActionCreators} from 'redux';

class Signup extends React.Component {



  render() {
    return (
      <form>
        <h2>This is the signup page</h2>
        <input type='text'/>
        <input type='password' placeholder='password'/>
        <input type='password' placeholder='retype password'/>
        <textarea placeholder='bio'/>
      </form>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    //user signup info goes here
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

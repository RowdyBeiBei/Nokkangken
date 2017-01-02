import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './signupActions.js';
import {bindActionCreators} from 'redux';

class Signup extends React.Component {

  render() {
    return (
      <form>
        <h2>This is the signup page</h2>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input className='form-control' type='text' placeholder='username' onChange/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input className='form-control' type='password' placeholder='password'/>
          </div>
          <div className="form-group">
            <label for="exampleInputFile">retype password</label>
            <input className='form-control' type='password' placeholder='retype password'/>
          </div>
          <div className="form-group">
            <label for="exampleInputFile">Bio</label>
            <textarea className='form-control' placeholder='bio'/>
          </div>
           <button type="submit" className="btn btn-primary">Submit</button>
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

import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './signupActions.js';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';

class Signup extends React.Component {

  onChange(event) {
    if(event.target.name === 'username') {
      this.props.actions.username(event.target.value);
    }else if(event.target.name === 'password'){
      this.props.actions.password(event.target.value);
    }else if(event.target.name === 'bio'){
      this.props.actions.bio(event.target.value);
    }
  }


  onSubmit(event) {
    event.preventDefault();
    this.props.actions.signup(this.props.signupInfo)
    .then(() => {
      hashHistory.push('/login');
    });
    event.target.reset();
  }

  render() {
    return (
      <form onSubmit = {(event)=> {this.onSubmit(event)}}>
        <h2>This is the signup page</h2>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input className='form-control' type='text' name='username' placeholder='username' onChange={(event) => {this.onChange(event);}}/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input className='form-control' type='password' name='password' placeholder='password' onChange={(event) => {this.onChange(event);}}/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputFile">retype password</label>
            <input className='form-control' type='password' placeholder='retype password'/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputFile">Bio</label>
            <textarea className='form-control' placeholder='bio' name='bio' onChange={(event) => {this.onChange(event);}}/>
          </div>
           <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
     signupInfo: state.signupInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './loginActions.js';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';


class Login extends React.Component {

  onChange(event) {
    if(event.target.name === 'username') {
      this.props.actions.updateUsername(event.target.value);
    }else {
      this.props.actions.updatePassword(event.target.value);
    }
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.actions.login(this.props.credentials)
    .then(() => {
      hashHistory.push('/home');
    });
    event.target.reset();
  }

  render() {
    return (
      <div className='loginDiv'>
        <form onSubmit={(event) => {this.onSubmit(event);}}>
          <input className='username' name='username' placeholder='username' type='text' onChange={(event) => {this.onChange(event);}}/>
          <input className='password' name='password' placeholder='password' type='password' onChange={(event) => {this.onChange(event);}}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    credentials: state.credentials
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps )(Login);

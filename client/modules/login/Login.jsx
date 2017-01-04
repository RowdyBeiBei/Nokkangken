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
      <div className="container">
        <div className="row mt4">
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Login via site</h3>
              </div>
              <div className="panel-body">
                <form acceptCharset="UTF-8" role="form" onSubmit={(event) => {this.onSubmit(event);}}>
                  <fieldset>
                    <div className="form-group">
                      <input className="form-control" name='username' placeholder="user name"  type="text" onChange={(event) => {this.onChange(event);}} />
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="Password" name="password" type="password" onChange={(event) => {this.onChange(event);}}/>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input name="remember" type="checkbox" value="Remember Me"/> Remember Me
                      </label>
                    </div>
                    <input className="btn btn-lg btn-success btn-block" type="submit" value="Login"/>
                  </fieldset>
                </form>

                <center><h4>OR</h4></center>
                <input className="btn btn-lg btn-facebook btn-block" type="submit" value="Login via facebook"/>
              </div>
            </div>
          </div>
        </div>
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

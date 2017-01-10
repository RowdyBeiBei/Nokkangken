import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './loginActions.js';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import {hashHistory} from 'react-router';




class Login extends React.Component {

  handleFblogin(event) {
    const that = this;
    FB.getLoginStatus(function(response){
      if (response.status === 'connected') {
        FB.api('/me','GET',{fields: 'name,id,picture.width(150).height(150)'}, function(response) {
          // console.log(response);
          that.getUser(response).then((response) => {that.props.actions.login(response.data)}).then(() => {
             hashHistory.push('/home')});
          });
      } else {
        console.log('not connected')
        FB.login(function(response) {
          FB.api('/me','GET',{fields: 'name,id,picture.width(150).height(150)'}, function(response) {
            that.getUser(response).then((response) => {that.props.actions.login(response.data)}).then(() => {
               hashHistory.push('/home')});
        });
     });
     }
   });
 }

  getUser(facebookId) {
    return axios.get(`/api/user/${1}`);
  }

  render() {
    return (
        <input className="btn btn-lg btn-facebook btn-block my1" type="submit" value="Login via facebook" onClick={(event) => { this.handleFblogin(event);}}/>
    );
  };
}



const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(null, mapDispatchToProps )(Login);

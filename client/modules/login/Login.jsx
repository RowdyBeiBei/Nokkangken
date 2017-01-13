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
      console.log(response.status);
      if (response.status === 'connected') {
        FB.api('/me','GET',{fields: 'name,id,picture.width(150).height(150)'}, function(response) {
          that.getUser(response.id).then((response) => {that.props.actions.login(response.data)}).then(() => {
             hashHistory.push('/home')});
          }
        );
      } else {
        console.log('not connected');
        FB.login(function(response) {
          FB.api('/me','GET',{fields: 'name,id,picture.width(150).height(150)'}, function(response) {
            that.getUser(response.id).then((response) => {that.props.actions.login(response.data)}).then(() => {
               hashHistory.push('/home')});
        });
     });
     }
   });
 }

   handleFbSignup(event) {
     const that = this;
     FB.getLoginStatus(function(response){
       if (response.status === 'connected') {
         FB.api('/me','GET',{fields: 'name,id,picture.width(150).height(150)'}, function(response) {
           that.addUser(response).then((response) => {that.props.actions.login(response.data)});
         });
       } else {
         console.log('not connected')
         FB.login(function(response) {
           FB.api('/me','GET',{fields: 'name,id,picture.width(150).height(150)'}, function(response) {
             that.addUser(response).then((response) => {that.props.actions.login(response.data)});
         });
      });
      }
    });
   }

  addUser({name, id, picture}) {
    return axios.post('/api/user',
    {
      name: name,
      id: id,
      email: null,
      bio: null,
      picture: picture.data.url,
    });
  }

  getUser(facebookId) {
    return axios.get(`/api/user/${facebookId}`);
  }

  render() {
    return (
      <div>

        {/* <input className="btn btn-lg btn-facebook btn-block my1" type="submit" value="Login via facebook"  onClick={(event) => { this.handleFblogin(event);}}/>
        <input className="btn btn-lg btn-facebook btn-block my1" type="submit" value="Signup via facebook" onClick={(event) => { this.handleFbSignup(event);}}/> */}
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(null, mapDispatchToProps )(Login);

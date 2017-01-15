import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as Actions from './loginActions.js';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import {hashHistory} from 'react-router';



class Landing extends React.Component {

	handleFblogin(event) {
    const that = this;
    FB.getLoginStatus(function(response){
			// console.log(response.status);
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
					 that.getUser(response.id).then((response) => {that.props.actions.login(response.data)}).then(() => {
							hashHistory.push('/home')});
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
		  	 	<div className='container'>
						<h1 className='logo pull-left'>Nokkangken</h1>
						<button className='pull-right btn mt2 fblogo' onClick={(event) => { this.handleFblogin(event);}}><img src="../assets/facebooklogo.png" alt="" /> Continue with Facebook</button>
						<div className="hero-container text-center">
							<h2 className='header'>Meet someone today!</h2>
		 					<p className='message'>Never hesitate to create some chances for your day. Choose your interests and pick a time. And
							we'll setup matches for you.
							</p>
							<button className='btn btn-primary mx-auto' onClick={(event) => { this.handleFbSignup(event);}}>Get Started</button>
						</div>

			  	</div>

					{this.props.children}
				 </div>


			);
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(null, mapDispatchToProps )(Landing);

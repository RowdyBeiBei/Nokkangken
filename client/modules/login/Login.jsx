import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './loginActions.js';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';



class Login extends React.Component {

  handleFblogin(event) {
    const that = this;
      FB.getLoginStatus(function(response){
        if (response.status === 'connected') {
          FB.api('/me','GET',{fields: 'name'}, function(response) {
              that.props.actions.updateUsername(response.name);
            });
          FB.api('/me','GET',{fields: 'id'}, function(response) {
            that.props.actions.updateUserid(response.id);
          });
          FB.api('/me','GET',{fields: 'picture.width(150).height(150)'}, function(response) {
            that.props.actions.updateUserpicture(response.picture.data.url);
          });
        } else {
          FB.login(function(response) {
            FB.api('/me','GET',{fields: 'name'}, function(response) {
                that.props.actions.updateUsername(response.name);
              });
            FB.api('/me','GET',{fields: 'id'}, function(response) {
              that.props.actions.updateUserid(response.id);
            });
            FB.api('/me','GET',{fields: 'picture.width(150).height(150)'}, function(response) {
              that.props.actions.updateUserpicture(response.picture.data.url);
            });
          });
        }
      });
    }



  onSubmit(event) {
    event.preventDefault();
    const that = this;
    that.props.actions.login(that.props.credentials)
    .then(() => {
      hashHistory.push('/home');
    });

    // event.target.reset();
  }


  render() {
    return (
      // <div className="container">
      //   <div className="row mt4">
      //     <div className="col-md-4 col-md-offset-4">
      //       <div className="panel panel-default">
      //         <div className="panel-heading">
      //           <h3 className="panel-title">Login via site</h3>
      //         </div>
      //         <div className="panel-body">
      //           <form acceptCharset="UTF-8" role="form" onSubmit={(event) => {this.onSubmit(event);}}>
      //             <fieldset>
      //               <div className="form-group">
      //                 <input className="form-control" name='username' placeholder="user name"  type="text" onChange={(event) => {this.onChange(event);}} />
      //               </div>
      //               <div className="form-group">
      //                 <input className="form-control" placeholder="Password" name="password" type="password" onChange={(event) => {this.onChange(event);}}/>
      //               </div>
      //               <div className="checkbox">
      //                 <label>
      //                   <input name="remember" type="checkbox" value="Remember Me"/> Remember Me
      //                 </label>
      //               </div>
      //               <input className="btn btn-lg btn-success btn-block" type="submit" value="Login"/>
      //             </fieldset>
      //           </form>
      //
      //           <center><h4>OR</h4></center>
                <input className="btn btn-lg btn-facebook btn-block my1" type="submit" value="Login via facebook" onClick={(event) => { this.handleFblogin(event); this.onSubmit(event);}}/>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
  };
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

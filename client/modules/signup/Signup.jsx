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
    <div className="container" >
        <div className="row mt4">
        <div className="col-xs-12 col-sm-8 col-md-8 col-sm-offset-2 col-md-offset-2">
        	<div className="panel panel-default">
        		<div className="panel-heading">
			    		<h3 className="panel-title">Sign Up Form</h3>
            </div>
            <div className="panel-body">
			    		<form role="form" onSubmit={(event) => {this.onSubmit(event);}}>
			    			<div className="row">
			    				<div className="col-md-12">
			    					<div className="form-group">
			                <input type="text" name="username" className="form-control input-sm" placeholder='Full name' onChange={(event) => {this.onChange(event);}} />
			    					</div>
                  </div>
			    				</div>
			    			<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password" onChange={(event) => {this.onChange(event);}}/>
			    					</div>
			    				</div>
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input type="password" name="password" id="password" className="form-control input-sm" placeholder="Confirm Password" onChange={(event) => {this.onChange(event);}} />
			    					</div>
			    				</div>
                </div>

			    					<div className="form-group">
                     <textarea className='form-control' placeholder='bio' name='bio' rows='4' onChange={(event) => {this.onChange(event);}}/>
			    					</div>
			    		<button type="submit" className="btn btn-primary">Submit</button>

			    		</form>
            </div>
          </div>
			 	</div>

	    		</div>
    		</div>
    )
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

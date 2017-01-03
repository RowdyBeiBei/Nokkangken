import React from 'react';
import {Link} from 'react-router';


class Landing extends React.Component {
	  render() {
		   return (
				 <div>
		  	 	<div className='container hero-container'>
	 					<h1 className='header'> Nokkangken </h1>
	 					<p className='message'> Meet someone with the chance created by yourself</p>
						<Link to='signup'><button className='btn btn-primary pull-right mb2'>SignUp</button></Link>
	 					<Link to='login'><button className='btn btn-primary pull-right mb2 mr2'>Log In</button></Link>
			  	</div>
					{this.props.children}
				 </div>
			);
    }
}

export default Landing;

import React from 'react';
import {Link} from 'react-router';


class Landing extends React.Component {
	  render() {
		   return (
				 <div>
		  	 	<div className='container title'>
	 					<h1 className='header'> Nokkangken </h1>
	 					<p className='message'> Meet someone with the chance created by yourself</p>
	 					<Link to='login'><button>Log In</button></Link>
	 					<Link><button>SignUp</button></Link>
			  	</div>
					{this.props.children}
				 </div>
			);
    }
}

export default Landing;

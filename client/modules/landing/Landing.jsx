import React from 'react';
import {Link} from 'react-router';


class Landing extends React.Component {
	  render() {
		   return (
				 <div>
		  	 	<div className='container'>
						<h1 className='logo pull-left'>Nokkangken</h1>
						<Link to='login'><button className='btn btn-primary pull-right mt2'>Log In</button></Link>
						<div className="hero-container text-center">
							<h2 className='header'>Meet someone today!</h2>
		 					<p className='message'>It's easy, just choose your your interests and pick a time. And
							we'll setup matches for you.
							</p>
							<Link to='signup'><button className='btn btn-primary mx-auto'>Get Started</button></Link>

						</div>

			  	</div>

					{this.props.children}
				 </div>


			);
    }
}

export default Landing;

import React from 'react';


class Landing extends React.Component {
	  render() {
		   return (
				<div className='container title'>
					<h1 className='header'> Nokkangken </h1>
					<p className='message'> Meet someone with the chance created by yourself</p>
					<button className='btn btn-info'>Log In</button>
					<button className='btn btn-info'>SignUp</button>
				</div>
			 )
    }
}


export default Landing;

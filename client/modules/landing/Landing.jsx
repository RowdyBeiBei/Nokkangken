import React from 'react';
import {Link} from 'react-router';


className Landing extends React.Component {
	  render() {
		   return (
					 <div className="site-wrapper">
						 <div className='container hero-container'>
							 <h1 className='header'> Nokkangken </h1>
							 <p className='message'> Meet someone with the chance created by yourself</p>
							 <Link to='signup'><button className='btn btn-primary pull-right mb2'>SignUp</button></Link>
							 <Link to='login'><button className='btn btn-primary pull-right mb2 mr2'>Log In</button></Link>

						 {this.props.children}
									 <div className="cover-container">
										 <div className="masthead clearfix">
											 <div className="inner">
												 <h3 className="masthead-brand">Cover</h3>

												 <ul className="nav masthead-nav">
													 <li className="active">
														 <a href="http://bootsnipp.com/iframe/g6GWQ" target=
														 "_blank">View full screen</a>
													 </li>

													 <li>
														 <a href="#">Features</a>
											 </li>

											 <li>
												 <a href="#">Contact</a>
											 </li>
										 </ul>
									 </div>
								 </div>

								 <div className="inner cover">
									 <h1 className="cover-heading">Full screen background cover page.</h1>

									 <p className="lead">Cover is a one-page template for building simple and
									 beautiful home pages. Download, edit the text, and add your own
									 fullscreen background color and photo to make it your own.
									 </p>

									 <p className="lead"><a className="btn btn-lg btn-info" href="#">Learn
									 more</a></p>
								 </div>

								 <div className="mastfoot">
									 <div className="inner">
										 <!-- Validation -->

										 <p><a href=
										 "http://validator.w3.org/check?uri=http%3A%2F%2Fbootsnipp.com%2Fiframe%2Fg6GWQ"
										 target="_blank"><small>HTML</small><sup>5</sup></a></p>


										 <p><a href=
										 "https://github.com/twbs/bootlint"
										 target="_blank"><small>Checked with Bootlint</small></a></p>



										 <p>© 2014 Your Name ~ <a href=
										 "http://getbootstrap.com/">Bootstrap</a></p>
									 </div>
								 </div>
							 </div>
							</div>
			);
    }
}

export default Landing;

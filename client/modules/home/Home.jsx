import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './homeActions.js';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';



class Home extends React.Component {

  render() {
    return (
      // <div>
      //   <div>{this.props.user.username}</div>
      //   <img className='profilePic' src={this.props.user.picUrl}/>
      //   <hr/>
      //   <div>{this.props.user.bio}</div>
      //   <hr/>
      //   <Link to='/locations'><button>browse events</button></Link>
      // </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="card hovercard">
              <div className="cardheader">

              </div>
              <div className="avatar">
                <img alt="" src={this.props.user.picUrl} />
              </div>
              <div className="info">
                <div className="title">{this.props.user.username}</div>

                <div className="desc">{this.props.user.bio}</div>
              </div>
            <Link to='/locations'><button className='btn btn-primary mb3'>browse events</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null)(Home);

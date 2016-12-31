import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './homeActions.js';
import {bindActionCreators} from 'redux';

class Home extends React.Component {

  render() {
    return (
      <div>
        <div>{this.props.user.username}</div>
        <img className='profilePic' src={this.props.user.picUrl}/>
        <hr/>
        <div>{this.props.user.bio}</div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;

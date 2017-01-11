import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Loading from 'react-loading';
import {Button} from 'react-bootstrap';


class SelectedLocation extends React.Component {

  renderSelectedLocation() {
    return (
      <div className='selectedLocation'>
        <h2>{this.props.selectedLocation.businessInfo.name}</h2>
        <img className='locationImg' src={this.props.selectedLocation.businessInfo.image_url}/>
      </div>
    );
  }

  renderLoading() {
    return (
      <div>
        <Loading type='spokes'/>
      </div>
    );
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary mb3 mx1">back to locations</button>
        {this.props.selectedLocation.isFetching ? this.renderLoading() : this.renderSelectedLocation()}
        <Link to='/locations'><Button>Go back to location list</Button></Link>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    selectedLocation: state.selectedLocation
  };
};

export default connect(mapStateToProps, null)(SelectedLocation);

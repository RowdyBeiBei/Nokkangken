import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Loading from 'react-loading';
import {Button} from 'react-bootstrap';


class SelectedLocation extends React.Component {

  renderSelectedLocation() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-md-6">
            <div className="well well-sm">
                <div className="row">
                    <div className="col-xs-3 col-md-3 text-center">
                        <img src={this.props.selectedLocation.businessInfo.image_url}
                            className="img-rounded img-responsive" />
                    </div>
                    <div className="col-xs-9 col-md-9 section-box">
                         <h2>{this.props.selectedLocation.businessInfo.name}</h2>
                         <h4>{this.props.selectedLocation.businessInfo.display_phone}</h4>
                         <h5>{this.props.selectedLocation.businessInfo.display_address}</h5>
                        <hr />
                        <div className="row rating-desc">
                            <div className="col-md-12">
                                <span className="glyphicon glyphicon-heart"></span><span className="glyphicon glyphicon-heart">
                                </span><span className="glyphicon glyphicon-heart"></span><span className="glyphicon glyphicon-heart">
                                </span><span className="glyphicon glyphicon-heart"></span>({this.props.selectedLocation.businessInfo.rating})<span className="separator">|</span>
                                <span className="glyphicon glyphicon-comment"  href={this.props.selectedLocation.businessInfo.url}>(Yelp Review)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
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
        <Link to='/locations'><button className='btn btn-primary pull-left my3'>Go back to location list</button></Link>
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

import React from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import Loading from 'react-loading';
import {Button} from 'react-bootstrap';

class SelectedLocation extends React.Component {

    componentDidMount() {
        $(".carousel").carousel({
            vertical: true
        });
    }

    renderSelectedLocation() {

        return (
        //     //<div>hello</div>
        //     <div className="container">
        //     <div className="row">
        //       <div className="col-md-6">
        //           <div className="well well-sm">
        //               <div className="row">
        //                   <div className="col-xs-3 col-md-3 text-center">
        //                       <img src={this.props.selectedLocation.businessInfo.image_url}
        //                           className="img-rounded img-responsive" />
        //                   </div>
        //                   <div className="col-xs-9 col-md-9 section-box">
        //                        <h2>{this.props.selectedLocation.businessInfo.name}</h2>
        //                        <h4>{this.props.selectedLocation.businessInfo.display_phone}</h4>
        //                        <h5>{this.props.selectedLocation.businessInfo.display_address}</h5>
        //                       <hr />
        //                       <div className="row rating-desc">
        //                           <div className="col-md-12">
        //                               <span className="glyphicon glyphicon-heart"></span><span className="glyphicon glyphicon-heart">
        //                               </span><span className="glyphicon glyphicon-heart"></span><span className="glyphicon glyphicon-heart">
        //                               </span><span className="glyphicon glyphicon-heart"></span>({this.props.selectedLocation.businessInfo.rating})<span className="separator">|</span>
        //                               <span className="glyphicon glyphicon-comment"  href={this.props.selectedLocation.businessInfo.url}>(Yelp Review)</span>
        //                           </div>
        //                       </div>
        //                   </div>
        //               </div>
        //           </div>
        //       </div>
        //     </div>
        // </div>

        <div className="container mt4">
          <div className="row">
            <button className='btn btn-primary my3' onClick={(event) => { hashHistory.push('/locations');}}>Go back to location list</button>
          </div>
          <div className="detailed-info">
            <div className="row">
              <div className="col-md-2 col-xs-12">
                <div className="carousel thin">
                  <a className="prev"><span className="glyphicon glyphicon-chevron-up"></span></a>
                  <div className="window">
                    <ul className="clr">
                      <li className="item">
                        <img src={this.props.selectedLocation.businessInfo.photos[0]} alt="#Img desc#" width="150" height="150"/>
                      </li>
                      <li className="item">
                        <img src={this.props.selectedLocation.businessInfo.photos[1]} alt="#Img desc#" width="150" height="150"/>
                      </li>
                      <li className="item">
                        <img src={this.props.selectedLocation.businessInfo.photos[2]} alt="#Img desc#" width="150" height="150"/>
                      </li>
                    </ul>
                  </div>
                  <a className="next"><span className="glyphicon glyphicon-chevron-down"></span></a>
                </div>
              </div>

              <div className="col-md-10 col-xs-12">
                <h2>{this.props.selectedLocation.businessInfo.name}</h2>
                <h4>{this.props.selectedLocation.businessInfo.display_phone}</h4>
                 <h5>{this.props.selectedLocation.businessInfo.location.display_address[0]}</h5>
                 <span className="glyphicon glyphicon-heart"></span>
                 <span className="glyphicon glyphicon-heart"></span>
                 <span className="glyphicon glyphicon-heart"></span>
                 <span className="glyphicon glyphicon-heart"></span>
                 <span className="glyphicon glyphicon-heart"></span>

                 <span className="text-success">({this.props.selectedLocation.businessInfo.rating})</span>
                 <a href={this.props.selectedLocation.businessInfo.url} target="_blank">
                   <div className="glyphicon glyphicon-comment"></div> (Yelp Review)
                 </a>
              </div>
            </div>
          </div>

        </div>

        );
    }

    renderLoading() {
        return (
            <div className="mt4 mx-auto">
                <Loading type='spokes'/>
            </div>
        );
    }

    render() {
      if(!this.props.selectedLocation) {
        return (
            <div className="mt4 mx-auto">
                <Loading type='spokes'/>
            </div>
        );
      } else {
        return (
          <div>
            {this.props.selectedLocation.isFetching ? this.renderLoading() : this.renderSelectedLocation()}
            {/* <button className='btn btn-primary pull-left my3' onClick={(event) => { hashHistory.push('/locations');}}>Go back to location list</button> */}
          </div>
        );
      }

    }

}

const mapStateToProps = (state) => {
    return {selectedLocation: state.selectedLocation};
};

export default connect(mapStateToProps, null)(SelectedLocation);

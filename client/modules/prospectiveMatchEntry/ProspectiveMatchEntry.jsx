import React from 'react';
import {Image} from 'react-bootstrap';

class ProspectiveMatchEntry extends React.Component {

  render() {
    return (
      <div className='prospectiveMatchInfoDiv'>
        <Image bsClass='possiblesPic img' src={this.props.entry.picture} responsive/>
        <h2>{this.props.entry.name}</h2>
      </div>
    );
  }
}

export default ProspectiveMatchEntry;

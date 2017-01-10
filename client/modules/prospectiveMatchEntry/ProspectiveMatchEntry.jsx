import React from 'react';

class ProspectiveMatchEntry extends React.Component {

  render() {
    return (
      <div className='prospectiveMatchDiv'>
        <h2>{this.props.entry.name}</h2>
        <img className='profilePic' src={this.props.entry.picture}/>
        <p>{this.props.entry.bio}</p>
      </div>
    );
  }
}

export default ProspectiveMatchEntry;

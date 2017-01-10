import React from 'react';

class ProspectiveMatchEntry extends React.Component {

  render() {
    return (
      <div>
        <h3>{this.props.entry.name}</h3>
        <img className='profilePic' src={this.props.entry.picture}/>
        <h2>{this.props.entry.bio}</h2>
      </div>
    );
  }
}

export default ProspectiveMatchEntry;

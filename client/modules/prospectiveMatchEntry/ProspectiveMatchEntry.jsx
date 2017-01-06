import React from 'react';

class ProspectiveMatchEntry extends React.Component {

  render() {
    return (
      <div>
        {console.log(this.props)};
        <h3>{this.props.entry.username}</h3>
        <img className='profilePic' src={this.props.entry.imgUrl}/>
        <h2>ljsdbfljabdsjlfsdvbvjhavsdjh</h2>
      </div>
    );
  }
}

export default ProspectiveMatchEntry;

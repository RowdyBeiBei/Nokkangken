import React from 'react';
import TimeSelector from '../timeSelector/TimeSelector.jsx';
import {Modal, Button} from 'react-bootstrap';


class OptionsModal extends React.Component {

  findMatches() {
    this.props.findMatches();
  }

  render() {
    return (
      <div className='modal-container'>
        <Modal show={this.props.showModal} onHide={() => {this.props.toggleModal();}}>
          <Modal.Header>
            <Modal.Title>This is the modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button block bsStyle='primary' >Scheduled</Button>
            <Button block bsStyle='primary' onClick={() => {this.findMatches()}}>Find Matches</Button>
            <Button block bsStyle='primary' href='#/locations' disabled={this.props.disableAddMeeting}>Add new Meeting</Button>
            <TimeSelector setTimePreferance={this.props.setTimePreferance}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => {this.props.toggleModal();}}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default OptionsModal;

import React from 'react';
import TimeSelector from '../timeSelector/TimeSelector.jsx';
import {Modal, Button, ControlLabel} from 'react-bootstrap';
import {hashHistory} from 'react-router';


class OptionsModal extends React.Component {

  getProspectiveMatches() {
    this.props.getProspectiveMatches();
  }

  getAllProspectiveMatches() {
    this.props.getAllProspectiveMatches();
  }

  render() {
    return (
      <div className='modal-container'>
        <Modal show={this.props.showModal} onHide={() => {this.props.toggleModal();}}>
          <Modal.Header>
            <Modal.Title>Your Scheduled Event and Add Event </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button block bsStyle='primary'>Scheduled</Button>
            <Button block bsStyle='primary' onClick={() => {hashHistory.push('/allProspectiveMatches')}}>Show possible matches</Button>
            <Button block bsStyle='primary' href='#/locations' disabled={this.props.disableAddMeeting}>Add new meeting</Button>
            <div className='timeSelectorDiv'>
              <TimeSelector setTimePreferance={this.props.setTimePreferance}/>
              <ControlLabel bsClass='controlLabel control-label'>{this.props.timePreferance !== null ? this.props.timePreferance.format('llll') : null}</ControlLabel>
            </div>
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

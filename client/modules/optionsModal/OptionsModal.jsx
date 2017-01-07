import React from 'react';
import {Modal, ModalHeader, ModalBody} from 'elemental';
import TimeSelector from '../timeSelector/TimeSelector.jsx';
import '../../../node_modules/elemental/less/elemental.less';


class OptionsModal extends React.Component {


  render() {
    return (
      <div>
        <Modal isOpen={this.props.showModal} width='small' backdropClosesModal onCancel={() => {console.log(5);}}>
          <ModalHeader text='This will be the selected date' showCloseButton onClose={() => {this.props.toggleModal();}}/>
          <ModalBody>
            <button className='btn btn-primary mb3 modalButton'>Scheduled Events</button>
            <button className='btn btn-primary mb3 modalButton'>Browse Matches</button>
            <TimeSelector setTimePreferance={this.props.setTimePreferance}/>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default OptionsModal;

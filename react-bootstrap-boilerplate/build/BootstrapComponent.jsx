import React from 'react';
import {Modal, Button, Dialog, Header, Body, Footer} from 'react-bootstrap';

const ModalInstance = (
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>react-bootstrap-boilerplate</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        stuff stuff stuff
      </Modal.Body>

      <Modal.Footer>
        <Button>Close</Button>
        <Button bsStyle="primary">Save</Button>
      </Modal.Footer>

    </Modal.Dialog>
  </div>
);

export default ModalInstance;


/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

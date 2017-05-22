import React from 'react';
import {Modal, Button} from 'react-bootstrap';
class PurchaseModal extends React.Component {


    render(){
        return(
            <Modal.Dialog>
                <Modal.Body>
                    <Button>Purchase</Button>
                </Modal.Body>
            </Modal.Dialog>
        );
    }
}

export default PurchaseModal;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

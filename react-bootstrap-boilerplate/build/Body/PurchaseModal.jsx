import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../../styles/modal-styles.css';
class PurchaseModal extends React.Component {

    render(){
        //console.log('showModal: ' + this.props.showModal + ' image: ' + this.props.image + ' artist: ' + this.props.artist + ' title: ' + this.props.title + ' desc: ' + this.props.description);
        return(
            <Modal show={this.props.showModal} onHide={() => this.props.onHide()}>
                <Modal.Body id="modal-body">
                    <img id="modal-img" src={this.props.image}/>
                    <div id="modal-content">
                        <h4><i>{this.props.title}</i></h4>
                        <h4>{this.props.artist}</h4>
                        <p>{this.props.price}</p>
                        <p><b>Description: </b>{this.props.description}</p>
                        <Button>Purchase</Button>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

export default PurchaseModal;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

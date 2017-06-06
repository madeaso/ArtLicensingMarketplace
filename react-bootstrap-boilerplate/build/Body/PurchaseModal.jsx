import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import '../../styles/modal-styles.css';
import '../../styles/purchase-form-styles.css';

import axios from 'axios';

class PurchaseModal extends React.Component {

    constructor(props){
        super(props);
        this.state={
            transactionID: '',
            purchaseStatus:'',
        }
    }

    genTransactionKey(){
        var baseRequest = "http://localhost:9090/returnTransactionKey/";
        var fullRequest = baseRequest + this.props.blockchainID;

        axios.get(fullRequest).then(response => this.setState({transactionID:response.data,purchaseStatus:'purchased'}))
            .catch(function (error) {
                console.log(error);
            });
    }

    componentWillReceiveProps(){
        if(this.props.showModal ==false){
            this.setState({purchaseStatus: ''});
        }
    }

    render(){
        var purchaseMsg;

        if(this.state.purchaseStatus == 'purchased'){
            console.log('the trans id: ' + this.state.transactionID);
            purchaseMsg = <h4>Blockchain purchase receipt: {this.state.transactionID}</h4>;
        }else{
            purchaseMsg = null;
        }

        var imgStringSplit = this.props.image.split("/");
        var imgDownload = imgStringSplit[2];

        return(
            <Modal show={this.props.showModal} onHide={() => this.props.onHide()}>
                <Modal.Body id="modal-body">
                    <img id="modal-img" src={this.props.image}/>
                    <div id="modal-content">
                        <h4><i>{this.props.title}</i></h4>
                        <h4>{this.props.artist}</h4>
                        <p>{this.props.price}</p>
                        <p><b>Description: </b>{this.props.description}</p>
                        <Button onClick={this.genTransactionKey.bind(this)}>
                            <a id="download-link" href={this.props.image} download={imgDownload}>Purchase</a>
                        </Button>
                        {purchaseMsg}
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

export default PurchaseModal;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

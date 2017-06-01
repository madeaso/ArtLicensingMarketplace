import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import ImagesUploader from 'react-images-uploader';


import 'react-images-uploader/styles.css';
import '../../styles/modal-styles.css';
import '../../styles/searchbar-styles.css';
import '../../styles/submit-form-styles.css';


class PurchaseModal extends React.Component {

    constructor(props){
        super(props);
        this.state={
            title:'',
            price:'',
            desc:'',
            img:''
        }
    }

    submit(e,title,price,desc,img){

        this.setState({title:title,price:price,desc:desc,img:img});
    }

    render(){
        //console.log('showModal: ' + this.props.showModal + ' image: ' + this.props.image + ' artist: ' + this.props.artist + ' title: ' + this.props.title + ' desc: ' + this.props.description);
        return(
            <Modal show={this.props.showModal} onHide={() => this.props.onHide()}>
                <Modal.Body id="modal-body">
                    <div id="modal-content">
                        <div id="img-dropzone">
                            <ImagesUploader
                                url="http://localhost:9090/notmultiple"
                                optimisticPreviews
                                multiple={false}
                                onLoadEnd={(err) => {
                                    if (err) {
                                        console.error(err);
                                    }
                                }}
                                label="Upload a picture"
                            />
                        </div>
                        <div id="modal-forms">
                            <input id="submit-field-title"  type="text" placeholder="  Title"/>
                            <input id="submit-field-price" type="text" placeholder="  Price"/>
                            <textarea id="submit-field-textarea" maxlength="150" placeholder="  Description"></textarea>
                            <Button id="submit-button" onClick={this.submit.bind(this,'title,price,desc,img')}>Submit</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

export default PurchaseModal;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

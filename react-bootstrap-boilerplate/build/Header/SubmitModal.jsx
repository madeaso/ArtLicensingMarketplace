import React from 'react';
import {Modal, Button,DropdownButton,MenuItem} from 'react-bootstrap';
import ImagesUploader from 'react-images-uploader';
import axios from 'axios';


import 'react-images-uploader/styles.css';
import '../../styles/modal-styles.css';
import '../../styles/searchbar-styles.css';
import '../../styles/submit-form-styles.css';


class PurchaseModal extends React.Component {

    constructor(props){
        super(props);
        this.state={
            artist:'',
            title:'',
            price:'',
            desc:'',
            img:'',
            dropDownTitle:'Subject',
            dropDownItems:['Photography','Illustration','Graphic Desgin','8 Bit Digital','Game Concept','Oil','Watercolor','Concept','Pastel','Digital Illustration','3D','Comics','Mixed Media','Anaglyph'],
        }
        this.state.dropDownItems.sort();
    }

    dropDownSelect(selectedItem,index){
        var items = this.state.dropDownItems;
        var replace;

        if(this.state.dropDownTitle == 'Subject'){
            replace = 'None';
        }else{
            replace = this.state.dropDownTitle;
        }
        items[index] = replace;

        this.state.dropDownItems = this.state.dropDownItems.sort();
        this.setState({dropDownTitle:selectedItem,dropDownItems:items});
    }

    submit(e,artist,title,price,desc,img){
        axios.post("http://localhost:9090/insert",{
            artist:artist,
            title:title,
            price:price,
            desc:desc,
            img:img
        })
        .then(function (response){
            console.log(response);
        })
        .catch(function (error) {
                console.log(error);
        });

        this.setState({artist:artist,title:title,price:price,desc:desc,img:img});
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
                            <DropdownButton title={this.state.dropDownTitle} id="dropdown-submit">
                                <MenuItem eventKey="1" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[0],0)}>{this.state.dropDownItems[0]}</MenuItem>
                                <MenuItem eventKey="2" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[1],1)}>{this.state.dropDownItems[1]}</MenuItem>
                                <MenuItem eventKey="3" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[2],2)}>{this.state.dropDownItems[2]}</MenuItem>
                                <MenuItem eventKey="1" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[3],3)}>{this.state.dropDownItems[3]}</MenuItem>
                                <MenuItem eventKey="2" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[4],4)}>{this.state.dropDownItems[4]}</MenuItem>
                                <MenuItem eventKey="3" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[5],5)}>{this.state.dropDownItems[5]}</MenuItem>
                                <MenuItem eventKey="1" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[6],6)}>{this.state.dropDownItems[6]}</MenuItem>
                                <MenuItem eventKey="2" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[7],7)}>{this.state.dropDownItems[7]}</MenuItem>
                                <MenuItem eventKey="3" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[8],8)}>{this.state.dropDownItems[8]}</MenuItem>
                                <MenuItem eventKey="2" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[9],9)}>{this.state.dropDownItems[9]}</MenuItem>
                                <MenuItem eventKey="3" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[10],10)}>{this.state.dropDownItems[10]}</MenuItem>
                                <MenuItem eventKey="1" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[11],11)}>{this.state.dropDownItems[11]}</MenuItem>
                                <MenuItem eventKey="2" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[12],12)}>{this.state.dropDownItems[12]}</MenuItem>
                                <MenuItem eventKey="3" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[13],13)}>{this.state.dropDownItems[13]}</MenuItem>
                                <MenuItem eventKey="1" onSelect={this.dropDownSelect.bind(this,this.state.dropDownItems[14],14)}>{this.state.dropDownItems[14]}</MenuItem>
                            </DropdownButton>
                            <Button id="submit-button" onClick={this.submit.bind(this,'Kian','11','$130.00','lorem ipsum valore','imageurl')}>Submit</Button>
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

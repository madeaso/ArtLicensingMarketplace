import React from 'react';
import '../../styles/content-grid-styles.css';
import '../../styles/modal-styles.css';
import PurchaseModal from "./PurchaseModal";
import {Modal,Button} from 'react-bootstrap';

class BottomContainer extends React.Component {

    constructor(){
        super();
        this.state={
            showModal:false
        }
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    getInitialState(){
        return {showModal:false};
    }

    close(){
        this.setState({showModal:false});
    }

    open(imgToView,descString){
        this.setState({showModal:true});
    }

    // Creates images to display on grid
    createImages(){

        const imageType = 'image';
        const imageWidth = 225;
        const imageHeight = 225;
        const imageStyleId = 'grid-item';
        const imageSrcs=['../../assets/squareGreenLogo.png','../../assets/squareMagentaLogo.png','../../assets/squareOrangeLogo.png'];
        const numberOfItemsToDisplay = 50;
        var descriptionString = 'Title: The Title\nArtist: Artist\nPrice: $130.00';

        var x = 0;
        var gridItems = [];

        for(var i = 0; i < numberOfItemsToDisplay; i++){
            gridItems.push(
                <div id="item-container">
                    <img id={imageType} src={imageSrcs[x]} width={imageWidth} height={imageHeight} />
                    <div id="overlay" onClick={this.open}>
                        <div id="text">{descriptionString}</div>
                    </div>
                </div>
            );
            if(x>=2)
                x=0;
            else
                x = x+1;
        }
        return(<div id="grid">{gridItems}</div>);
    }

    render(){
        return(
            <div id="grid-container">
                {this.createImages()}
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Body>
                        <Button>Purchase</Button>
                    </Modal.Body>
                </Modal>
            </div>

        );
    }
}

export default BottomContainer;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

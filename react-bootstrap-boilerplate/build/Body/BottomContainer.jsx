import React from 'react';
import '../../styles/content-grid-styles.css';
import '../../styles/modal-styles.css';
import PurchaseModal from "./PurchaseModal";
import {Modal,Button} from 'react-bootstrap';

const imageWidth = 225;
const imageHeight = 225;
const logoArray = ['../../assets/squareOrangeLogo.png','../../assets/squareMagentaLogo.png','../../assets/squareGreenLogo.png'];

class BottomContainer extends React.Component {

    constructor(props){
        super(props);
        console.log('HI IM IN BOTTOM CONTAINER AND THESE ARE MY FUCKING PROPS: ' + this.props.responseData);
        this.state={
            showModal:false,
            image:'',
            title:'',
            artist:'',
            description:'',
            price:'',
            blockchainID:''
        }
        this.close = this.close.bind(this);
    }

    getInitialState(){
        return {showModal:false};
    }

    open(bID,img,artist,title,desc,price,e){
        this.setState({showModal:true,blockchainID:bID,image:img, artist:artist, title:title,description:desc,price:price});
    }

    close(){
        this.setState({showModal:false});
    }

    render(){
        var gridItems = [];
        var grid;

        if(this.props.filter == 'single'){
            for(var i = 0; i < this.props.responseData.length; i++){

                // Create overlay text
                var overlayText = this.props.responseData[i].title + '\n' +  this.props.responseData[i].artist + '\n' + this.props.responseData[i].price;

                gridItems.push(
                    <div id="item-container">
                        <img src={this.props.responseData[i].image_url} width={imageWidth} height={imageHeight} />
                        <div id="overlay" onClick={this.open.bind(this,this.props.responseData[i].blockchain_id,this.props.responseData[i].image_url,this.props.responseData[i].artist,this.props.responseData[i].title,this.props.responseData[i].description,this.props.responseData[i].price)}>
                            <div id="text">{overlayText}</div>
                        </div>
                    </div>
                );
            }
            grid = (<div id="grid">{gridItems}</div>)
        }else{
            var x = 0;
            var overlayText;
            for(var i = 0; i < this.props.responseData.length; i++){

                if(x != 0 && x%3 == 0){
                    x = 0;
                }

                // Create overlay text
                overlayText = this.props.responseData[i];

                gridItems.push(
                    <div id="item-container">
                        <img src={logoArray[x]} width={imageWidth} height={imageHeight} />
                        <div id="overlay-static">
                            <div id="text-static">{overlayText}</div>
                        </div>
                    </div>
                );
                x = x +1;
            }
            grid = (<div id="grid">{gridItems}</div>)
        }

        return(
            <div id="grid-container">
                {grid}
                <PurchaseModal showModal={this.state.showModal} onHide={() => this.close()} image={this.state.image}
                 title={this.state.title} artist={this.state.artist} description={this.state.description} price={this.state.price}
                blockchainID = {this.state.blockchainID}>
                </PurchaseModal>
            </div>

        );
    }
}

export default BottomContainer;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

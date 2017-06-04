import React from 'react';
import '../../styles/content-grid-styles.css';
import '../../styles/modal-styles.css';
import PurchaseModal from "./PurchaseModal";
import {Modal,Button} from 'react-bootstrap';

const imageWidth = 225;
const imageHeight = 225;

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
            price:''
        }
        this.close = this.close.bind(this);
    }

    getInitialState(){
        return {showModal:false};
    }

    open(img,artist,title,desc,price,e){
        this.setState({showModal:true, image:img, artist:artist, title:title,description:desc,price:price});
    }

    close(){
        this.setState({showModal:false});
    }

    render(){
        var gridItems = [];
        var grid;

        if(this.props.filter == 'recent'){
            for(var i = 0; i < this.props.responseData.length; i++){

                // Create overlay text
                var overlayText = this.props.responseData[i].title + '\n' +  this.props.responseData[i].artist + '\n' + this.props.responseData[i].price;

                gridItems.push(
                    <div id="item-container">
                        <img src={this.props.responseData[i].image_url} width={imageWidth} height={imageHeight} />
                        <div id="overlay" onClick={this.open.bind(this,this.props.responseData[i].image_url,this.props.responseData[i].artist,this.props.responseData[i].title,this.props.responseData[i].description,this.props.responseData[i].price)}>
                            <div id="text">{overlayText}</div>
                        </div>
                    </div>
                );
            }
            grid = (<div id="grid">{gridItems}</div>)
        }else{
            for(var i = 0; i < this.props.responseData.length; i++){

                // Create overlay text
                if(this.props.filter == 'artist')
                    var overlayText = this.props.responseData[i].artist;
                else
                    var overlayText = this.props.responseData[i].subject_type;

                gridItems.push(
                    <div id="item-container">
                        <img src={this.props.responseData[i].image_url} width={imageWidth} height={imageHeight} />
                        <div id="overlay" onClick={this.open.bind(this,this.props.responseData[i].image_url,this.props.responseData[i].artist,this.props.responseData[i].title,this.props.responseData[i].description,this.props.responseData[i].price)}>
                            <div id="text">{overlayText}</div>
                        </div>
                    </div>
                );
            }
            grid = (<div id="grid">{gridItems}</div>)
        }

        return(
            <div id="grid-container">
                {grid}
                <PurchaseModal showModal={this.state.showModal} onHide={() => this.close()} image={this.state.image}
                 title={this.state.title} artist={this.state.artist} description={this.state.description} price={this.state.price}>
                </PurchaseModal>
            </div>

        );
    }
}

export default BottomContainer;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

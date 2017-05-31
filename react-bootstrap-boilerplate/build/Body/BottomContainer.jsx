import React from 'react';
import '../../styles/content-grid-styles.css';
import '../../styles/modal-styles.css';
import PurchaseModal from "./PurchaseModal";
import {Modal,Button} from 'react-bootstrap';

const imageWidth = 225;
const imageHeight = 225;
var descriptionString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
                        'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
                        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
                        'voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
var grid;

class BottomContainer extends React.Component {

    constructor(props){
        super(props);
        console.log('HI IM IN BOTTOM CONTAINER AND THESE ARE MY FUCKING PROPS: ' + this.props.imgs);
        this.state={
            showModal:false,
            image:'',
            title:'',
            artist:'',
            description:'',
            price:'$130.00'
        }
        this.close = this.close.bind(this);
        //this.open = this.open.bind(this);
    }

    getInitialState(){
        return {showModal:false};
    }

    open(img,artist,title,desc,e){
        this.setState({showModal:true, image:img, artist:artist, title:title,description:desc});
    }

    close(){
        this.setState({showModal:false});
    }

    render(){
        var gridItems = [];
        var artist;
        var title;

        for(var i = 0; i < this.props.imgs.length; i++){

            // Extract artist name and work title from file path
            var titleAr = this.props.imgs[i].split('/');
            artist = titleAr[3];
            var titleNoExt = titleAr[4].split('.');
            title = titleNoExt[0];

            // Create overlay text
            var overlayText = title + '\n' +  artist + '\n' + this.state.price;

            gridItems.push(
                <div id="item-container">
                    <img src={this.props.imgs[i]} width={imageWidth} height={imageHeight} />
                    <div id="overlay" key={this.props.imgs[i]} onClick={this.open.bind(this,this.props.imgs[i],artist,title,descriptionString,this.state.price)}>
                        <div id="text">{overlayText}</div>
                    </div>
                </div>
            );
        }
        grid = (<div id="grid">{gridItems}</div>)
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

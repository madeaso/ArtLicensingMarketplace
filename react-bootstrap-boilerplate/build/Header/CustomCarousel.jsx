import React from 'react';
import {Carousel} from 'react-bootstrap';
import PurchaseModal from "../Body/PurchaseModal";
import '../../styles/carousel-styles.css';
import '../../styles/link-styles.css';

class CustomCarousel extends React.Component{

    constructor(props){
        super(props);
        this.state={
            showModal:false,
            image:'',
            title:'',
            artist:'',
            description:'',
            price:'$130.00'
        }

        this.close = this.close.bind(this);
    }

    close(){
        this.setState({showModal:false});
    }

    open(img,artist,title,desc,e){
        this.setState({showModal:true, image:img, artist:artist, title:title,description:desc});
    }

    render(){
        return(
            <div>
            <Carousel>
                <Carousel.Item>
                    <img width={900} height={500} src="../../assets/Kian Khiaban/11.jpg"/>
                    <Carousel.Caption>
                        <h4> 11 </h4>
                        <p>Kian Khiaban</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} src="../../assets/Roger Dean/Floating Jungle.jpg"/>
                    <Carousel.Caption>
                        <h4> Floating Jungle </h4>
                        <p>Roger Dean</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} src="../../assets/Mark Ferrari/Desert Twighlight.jpg"/>
                    <Carousel.Caption>
                        <h4> Red Canyon </h4>
                        <p>Mark Ferrari</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} src="../../assets/Roger Dean/Tales from Topographic Oceans.jpg"/>
                    <Carousel.Caption>
                        <h4> Tales from Topographic Oceans </h4>
                        <p>Roger Dean</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} src="../../assets/Anonymous/City.png"/>
                    <Carousel.Caption>
                        <h4> City </h4>
                        <p>Anonymous</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <PurchaseModal showModal={this.state.showModal} onHide={() => this.close()} image={this.state.image}
                title={this.state.title} artist={this.state.artist} description={this.state.description} price={this.state.price}>
            </PurchaseModal>
            </div>
        );
    }
}

export default CustomCarousel;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

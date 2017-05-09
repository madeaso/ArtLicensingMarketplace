import React from 'react';
import {Carousel, Button} from 'react-bootstrap';
import '../styles/carousel-styles.css';
const TopContainer = (
    <div>
        <Carousel>
            <Carousel.Item>
                <img width={900} height={500} src="../assets/testFeatureItem1.jpg"/>
                <Carousel.Caption>
                    <h4> Variable for Work Title 1</h4>
                    <p>Variable for by Line 1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} src="../assets/testFeatureItem2.jpg"/>
                <Carousel.Caption>
                    <h4> Variable for Work Title 2</h4>
                    <p>Variable for by Line 2</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} src="../assets/testFeatureItem3.jpg"/>
                <Carousel.Caption>
                    <h4> Variable for Work Title 3</h4>
                    <p>Variable for by Line 3</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
);

export default TopContainer;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

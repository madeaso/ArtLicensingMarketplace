import React from 'react';


import {DropdownButton,MenuItem,Button,Glyphicon} from 'react-bootstrap';

import BottomContainer from './Body/BottomContainer';
import CustomCarousel from './Header/CustomCarousel';
import LoginButtonGroup from './Header/LoginButtonGroup';

import '../styles/top-container-styles.css';
import '../styles/link-styles.css';
import '../styles/dropdown-styles.css';
import '../styles/searchbar-styles.css';

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            imgs: ['../../assets/Kian Khiaban/11.jpg','../../assets/Kian Khiaban/12.jpg',
                '../../assets/Kian Khiaban/Ego.jpg','../../assets/Kian Khiaban/Flipped.png',
                '../../assets/Kian Khiaban/Frailty.png','../../assets/Kian Khiaban/From A Distance.png',
                '../../assets/Kian Khiaban/Half+&+Half.png','../../assets/Kian Khiaban/Material Studies.png',
                '../../assets/Kian Khiaban/Re-Balance.png','../../assets/Kian Khiaban/StreetDance.png',
                '../../assets/Anonymous/Unknown.png','../../assets/Mark Ferrari/Cave.jpg',
                '../../assets/Roger Dean/Floating Jungle.jpg','../../assets/Roger Dean/Tales from Topographic Oceans.jpg',
                '../../assets/Mark Ferrari/Desert Fortress - Dawn.jpg','../../assets/Mark Ferrari/Desert Twighlight.jpg',
                '../../assets/Mark Ferrari/Elven Falls - Morning.jpg','../../assets/Mark Ferrari/Fire Fly Swamp.jpg',
                '../../assets/Mark Ferrari/Henge.jpg','../../assets/Mark Ferrari/Lotus Bayou.jpg',
                '../../assets/Mark Ferrari/Mayan City - Rain.jpg','../../assets/Mark Ferrari/Mossy Forest.jpg',
                '../../assets/Mark Ferrari/Mountain Gate.jpg','../../assets/Mark Ferrari/Mountain Gods.jpg',
                '../../assets/Mark Ferrari/Red Canyon.jpg','../../assets/Mark Ferrari/Reef.jpg',
                '../../assets/Mark Ferrari/Ruined City.jpg','../../assets/Mark Ferrari/Swamp Troll Cave.jpg'],
            filter: 'none'
        }
    }

    updateImgList(imgList,filterChoice){
        console.log('artist link clicked imgList: ' + imgList + " filterChoice: " + filterChoice);
        this.setState({imgs:imgList,filter:filterChoice});
    }

    render(){
        return(
            <div>
                <div id="top-container">
                    <CustomCarousel></CustomCarousel>
                    <LoginButtonGroup></LoginButtonGroup>
                    <div id="search-container">
                        <div id="logo">
                            <img height="90" width="250"src="../../assets/whitelogo.png"/>
                        </div>
                        <div id="form-group">
                            <input type="text" placeholder="  Search"/>
                            <DropdownButton title="Filter By" id="dropdown">
                                <MenuItem eventKey="1" >Artists</MenuItem>
                                <MenuItem eventKey="2" >Subjects</MenuItem>
                                <MenuItem eventKey="3" >Recently Added</MenuItem>
                            </DropdownButton>
                            <Button bsSize="large"><Glyphicon glyph="search" /></Button>
                        </div>
                        <div id="quick-search-group">
                            <a id="link-style" onClick={this.updateImgList.bind(this,[],'artist')}><Glyphicon glyph="user"/> Artists</a>
                            <a id="link-style" onClick={this.updateImgList.bind(this,[],'subject')}><Glyphicon glyph="picture"/> Subjects</a>
                            <a id="link-style" onClick={this.updateImgList.bind(this,[],'recent')}><Glyphicon glyph="calendar"/> Recently Added</a>
                        </div>
                    </div>
                </div>
                <BottomContainer filter= {this.state.filter} imgs={this.state.imgs}></BottomContainer>
            </div>
        );
    }
}

export default MainPage;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

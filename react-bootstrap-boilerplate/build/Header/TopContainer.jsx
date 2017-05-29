import React from 'react';
import CustomCarousel from './CustomCarousel';
import LoginButtonGroup from './LoginButtonGroup'
import SearchFormGroup from "./SearchFormGroup";
import QuickSearchGroup from "./QuickSearchGroup";
import '../../styles/top-container-styles.css';
import {Glyphicon} from 'react-bootstrap';
import '../../styles/link-styles.css';

class TopContainer extends React.Component{

    constructor(props){
        super(props);
        //this.updateImgList = this.updateImgList.bind(this);
    }

    /*updateImgList(imgs,filter){
        console.log('im in topcontainer updateImgList w props: ' + this.props.filter + this.props.imgs)
        this.props.updateImgList(imgs,filter);
    }*/

    render(){
        return(
            <div id="top-container">
                <CustomCarousel></CustomCarousel>
                <LoginButtonGroup></LoginButtonGroup>
                <div id="search-container">
                    <div id="logo">
                        <img height="90" width="250"src="../../assets/whitelogo.png"/>
                    </div>
                    <SearchFormGroup filter= {this.props.filter} imgs={this.props.imgs} update={this.props.update}></SearchFormGroup>
                    <div id="quick-search-group">
                        <a id="link-style" onClick={() => this.props.update([],'quicksearch')}><Glyphicon glyph="user"/> Artists</a>
                        <a id="link-style" href="./build/MainPage.jsx"><Glyphicon glyph="picture"/> Subjects</a>
                        <a id="link-style" href="./build/MainPage.jsx"><Glyphicon glyph="calendar"/> Recently Added</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopContainer;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

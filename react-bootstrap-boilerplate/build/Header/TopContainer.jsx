import React from 'react';
import CustomCarousel from './CustomCarousel';
import LoginButtonGroup from './LoginButtonGroup'
import SearchFormGroup from "./SearchFormGroup";
import QuickSearchGroup from "./QuickSearchGroup";
import '../../styles/top-container-styles.css';

class TopContainer extends React.Component{
    render(){
        return(
            <div id="top-container">
                <CustomCarousel></CustomCarousel>
                <LoginButtonGroup></LoginButtonGroup>
                <div id="search-container">
                    <div id="logo">
                        <img height="90" width="250"src="../../assets/whitelogo.png"/>
                    </div>
                    <SearchFormGroup filter= {this.props.filter} imgs={this.props.imgs} updateImgList={this.props.updateImgList}></SearchFormGroup>
                    <QuickSearchGroup filter= {this.props.filter} imgs={this.props.imgs} updateImgList={this.props.updateImgList}></QuickSearchGroup>
                </div>
            </div>
        );
    }
}

export default TopContainer;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

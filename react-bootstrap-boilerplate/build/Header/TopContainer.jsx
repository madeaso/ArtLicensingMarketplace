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
                <CustomCarousel>{this.props.children}</CustomCarousel>
                <LoginButtonGroup>{this.props.children}</LoginButtonGroup>
                <div id="logo">
                    <img height="90" width="250"src="../../assets/whitelogo.png"/>
                </div>
                <SearchFormGroup>{this.props.children}</SearchFormGroup>
                <QuickSearchGroup>{this.props.children}</QuickSearchGroup>
            </div>
        );
    }
}

export default TopContainer;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

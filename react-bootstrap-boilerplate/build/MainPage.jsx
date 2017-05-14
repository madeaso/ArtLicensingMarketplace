import React from 'react';
import TopContainer from './Header/TopContainer';
import BottomContainer from './Body/BottomContainer';

class MainPage extends React.Component {
    render(){
        return(
            <div>
                <TopContainer>{this.props.children}</TopContainer>
                <BottomContainer>{this.props.children}</BottomContainer>
            </div>
        );
    }
}

export default MainPage;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

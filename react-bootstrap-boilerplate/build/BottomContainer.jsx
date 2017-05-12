import React from 'react';

class BottomContainer extends React.Component {
    render(){
        return(
            <p>This will be a listing of available art</p>
        );
    }
}

export default BottomContainer;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

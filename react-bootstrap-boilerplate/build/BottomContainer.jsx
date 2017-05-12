import React from 'react';
import {Button,Glyphicon} from 'react-bootstrap';

class BottomContainer extends React.Component {
    render(){
        return(
            <div>
                <p>This will be a listing of available art</p>
            </div>
        );
    }
}

export default BottomContainer;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

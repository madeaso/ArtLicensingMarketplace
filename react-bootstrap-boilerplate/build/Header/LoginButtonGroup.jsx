import React from 'react';
import {Button} from 'react-bootstrap';
import '../../styles/button-styles.css';

class LoginButtonGroup extends React.Component{

    render(){
        return(
            <div id="btn-group">
                <Button>Login</Button>
                {" "}
                <Button>Sign Up</Button>
            </div>
        );
    }
}

export default LoginButtonGroup;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

import React from 'react';

import {Button} from 'react-bootstrap';

import SubmitModal from './SubmitModal';

import '../../styles/button-styles.css';


class LoginButtonGroup extends React.Component{

    constructor(props){
        super(props);
        this.state={
            loggedIn: false,
            showModal:false
        }

        this.close = this.close.bind(this);
    }

    login(){
        this.setState({loggedIn:true});
    }

    logout(){
        this.setState({loggedIn:false});
    }

    open(){
        this.setState({showModal:true});
    }

    close(){
        this.setState({showModal:false});
    }

    render(){
        var buttonGroup;
        if(this.state.loggedIn){
            buttonGroup = <div id="btn-group"><Button onClick={this.open.bind(this)}> Submit </Button>{" "}<Button onClick={this.logout.bind(this)}> Logout </Button><SubmitModal showModal={this.state.showModal} onHide={() => this.close()}/></div>
        }else{
            buttonGroup = <div id="btn-group"><Button onClick={this.login.bind(this)}>Login</Button>{" "}<Button>Sign Up</Button></div>
        }
        return(
                buttonGroup
        );
    }
}

export default LoginButtonGroup;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

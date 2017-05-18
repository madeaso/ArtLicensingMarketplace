import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import '../../styles/button-styles.css';

class LoginButtonGroup extends React.Component{

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    render(){
        return(
            <div id="btn-group">
                <Button onClick={() => this.toggleModal()}>Login</Button>
                {" "}
                <Button>Sign Up</Button>

                <Modal show={this.state.isOpen}
                       //onClose={() => this.toggleModal}
                       contentLabel="loginmodal">
                    <h1>Login</h1>
                    <div id="loginform">
                        <form>
                            <input ref="loginemail" type="text" placeholder="Email"/>
                            <input ref="loginpassword" type="text" placeholder="Password"/>
                            <Button onClick="">Submit</Button>
                        </form>
                    </div>
                    <p><Button onClick={() => this.toggleModal()}>Close</Button></p>
                </Modal>

            </div>
        );
    }

    toggleModal() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    // login() {
    //     var user = {email: this.refs.loginemail.value, password: this.refs.loginpassword.value};
    //     var res;
    //     LoginRoutes.login(user, res);
    //
    // }
}


export default LoginButtonGroup;

/* You can also use props.message and have props as a param in the ({message, children})
, but this is much cleaner */

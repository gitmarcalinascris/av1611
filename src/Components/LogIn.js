import React from 'react'
import { Button, Tooltip, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//Import Icons
import { FaUser } from "react-icons/fa";
import { Form, FormGroup, Label, Input } from 'reactstrap';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenLogin: false,
            isTooltipOpen: false,
        }

        this.toggleLogin = this.toggleLogin.bind(this);
        this.toggleTooltip = this.toggleTooltip.bind(this);
    }
  
    toggleLogin = () =>{
        this.setState({
            isOpenLogin: !this.state.isOpenLogin
        });
    }

    toggleTooltip() {
        this.setState({
            isTooltipOpen: !this.state.isTooltipOpen
        });
    }


    render() {


        return (
            <React.Fragment>
                <Tooltip placement="bottom" target="btnLogin" isOpen={this.state.isTooltipOpen} toggle={this.toggleTooltip}>
                    Login
                 </Tooltip>
                <FaUser id="btnLogin" style={{ cursor: "pointer" }} onClick={this.toggleLogin} />
                <Modal isOpen={this.state.isOpenLogin}>
                    <ModalHeader toggle={this.toggleLogin}>Login</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="txtUsername">Username</Label>
                                <Input id="txtUsername" type="text" name="username"  placeholder="Enter username" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="txtPassword">Password</Label>
                                <Input id="txtPassword" type="password" name="password"  placeholder="Enter Password" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleLogin}>Login</Button>{' '}
                        <Button color="secondary" onClick={this.toggleLogin}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}

export default LogIn;
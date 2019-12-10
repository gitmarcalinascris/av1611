import React from 'react'
import { Card, CardBody, CardHeader, CardImg, CardFooter, Table, Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import EventImg from "./../Assets/images/BlowOut2019.png"
import "./Layout.css"
import "./../index.css"
class Events extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowRegister: false
        }
    }

    onRegisterClick = () => {
        this.setState({
            isShowRegister: !this.state.isShowRegister
        });
        console.log(this.state.isShowRegister);
    }


    render() {
        return (
            <div style={{ margin: ".5%" }}  >
                <Modal isOpen={this.state.isShowRegister} toggle={this.onRegisterClick} >
                    <ModalHeader toggle={this.onRegisterClick}>How to Register</ModalHeader>
                    <ModalBody>
                        <ol>
                            <li><p>Pay through BDO/BPI bank transfer (Contact Sis. April Manabat or Emma Madera for details)</p></li>
                            <li><p>Send Email (Name Person/s and Cellphone No. and Contact Person ) and Screenshot of Deposit Slip to PasigKJV1611@gmail.com</p> </li>
                            <li><p>Wait for Email/SMS Confirmation </p></li>
                            <li><p>Once confirmed, Bring the Deposit slip on the event for validation</p></li>
                        </ol>
                    </ModalBody>
                </Modal>
                <center>
                    <Card className="div-event bg-common">
                        <CardHeader><b>Baptist Blowout 2019</b></CardHeader>
                        <CardBody >
                            <CardImg src={EventImg} className="div-event-img" />
                            <br />
                            <br />
                            <Table striped bordered size="sm" >
                                <tbody>
                                    <tr>
                                        <td>When:</td>
                                        <td>Dec 25 - 27, 2019</td>
                                    </tr>
                                    <tr>
                                        <td>Where:</td>
                                        <td><a href="https://www.google.com/maps/place/AV1611+Bible+Believers+Baptist+Church+Taloy+Sur/@16.3792674,120.5160409,1564m/data=!3m1!1e3!4m18!1m12!4m11!1m3!2m2!1d120.5231797!2d16.3665833!1m6!1m2!1s0x33919ff1c21cb3cd:0xf8a88a64673c3cfb!2sTaloy+Sur,+Tuba,+Benguet!2m2!1d120.5221524!2d16.3665949!3m4!1s0x33919f8ef78658b5:0x8fc928354acba3cf!8m2!3d16.379508!4d120.5194187">Taloy Sur Baguio</a> (Ben Palispis)</td>
                                    </tr>
                                    <tr>
                                        <td>Registration:</td>
                                        <td>
                                            P500 inclusive of meals [Dec. 25 (Dinner) - Dec. 27 (Dinner)]
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Slots:</td>
                                        <td>First Come, First Serve (Max of 180)</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                        <CardFooter className="text-muted"><Button color="success" onClick={this.onRegisterClick}>How to Pre-Register</Button></CardFooter>
                    </Card>
                </center>
            </div>
        )
    }
}

export default Events
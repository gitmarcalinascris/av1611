import React from 'react';
import { Jumbotron } from 'reactstrap';
import "./Layout.css";
import fbImg from "./../Assets/images/fb.png";
const ContactUs = () => {
    return (
        <React.Fragment>
            <div id="HomeTitle" style={{ padding: "10% 0" }}>
                <center>
                    <Jumbotron className="jumbotron-custom">
                        <div className="bg-common tbl-display" style={{ maxWidth: "400px", padding: "20px 0" }} >
                            <p className="lead"><b>Pastor Ismael Sanchez.</b></p>
                            <p className="lead">1542 E. Santos St., Barangay Palatiw.
                            Pasig City, Philippines 1600
                            <div>
                                    ☎ 0999 352 4318
                                <p>
                                    ✉ PasigKJV1611@gmail.com
                                </p>
                                    <p style={{ marginTop: -10 }}>
                                        <a href="https://www.facebook.com/Av1611BelieversBaptistChurchPasig/"><img src={fbImg} alt="logo" style={{ width: 32, height: 32 }} /> Visit our Facebook</a>
                                    </p>
                                </div>
                            </p>
                        </div>
                        <br />
                       
                    </Jumbotron>
                </center>
            </div>

        </React.Fragment>
    );
}

export default ContactUs;
import React from 'react'
import { Jumbotron} from 'reactstrap';
import "./Layout.css"
import "./../index.css"

const Home = () => {

    return (

        <React.Fragment>
            <div id="HomeTitle">
                <center>
                    <Jumbotron className="jumbotron-custom">
                        <div className="bg-common">
                        <p className="lead" style={{ marginTop: "-5px" }}><b>Welcome!</b></p>
                        <div className="div-title">What is Pasig Bible Believers Baptist Church and Missions (P3BCM)?</div>
                        <p id="p-desc" className="text-sm-center blockquote">
                            The P3BCM is dispensational KJV-only Baptist church in Metro Manila. It is an Independent, Old fashioned, Evangelistic and Missionary local Church. It believes, teaches and preaches the <b>King James Bible</b> also known as the <b>1611 Authorized Version </b>.The P3BCM <u><b>IS NOT</b></u> a “Baptist Brider”, a “Calvinist”, a “Hyper-dispensationalist”, a “Reformed Baptist”, an anti-“sinner’s prayer” nor an antisemitic church.
                        </p>
                        <br />
                        </div>
                    </Jumbotron>
                </center>
            </div>

        </React.Fragment>
    );
}

export default Home;
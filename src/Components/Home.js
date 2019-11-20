import React from 'react'
import { Jumbotron } from 'reactstrap';
import { Table } from 'reactstrap';
import "./Layout.css"
const Home = () => {

    return (

        <React.Fragment>
            <div id="HomeTitle">

                <center>
                    <Jumbotron className="jumbotron-custom">
                        <p className="lead blockquote">Welcome!</p>
                        <div className="div-title">What is Pasig Bible Believers Baptist Church and Missions (P3BCM)?</div>
                        <p id="p-desc" className="text-sm-center blockquote">
                    
                            The P3BCM is dispensational KJV-only Baptist church in Metro Manila. It is an Independent, Old fashioned, Evangelistic and Missionary local Church. It believes, teaches and preaches the <b>King James Bible</b> also known as the <b>1611 Authorized Version </b>.The P3BCM <u><b>IS NOT</b></u> a “Baptist Brider”, a “Calvinist”, a “Hyper-dispensationalist”, a “Reformed Baptist”, an anti-“sinner’s prayer” nor an antisemitic church.
                            
                        </p>
                        <br/>
                        <p className="lead"><b>Pastor Ismael Sanchez.</b></p>
                        <p className="lead">1542 E. Santos St., Barangay Palatiw.</p>
                        <p className="lead">Pasig City, Philippines 1600</p>

                        <p className="lead">
                            ☎ 0999 352 4318
                            ✉ PasigKJV1611@gmail.com
                        </p>
                        <hr className="my-2" />
                        <br />
                        <Table striped bordered size="sm" responsive className="tbl-display">
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Schedule <span role="img" aria-label="sched">📅</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Saturday School(For Children Only)</td>
                                    <td>Every Saturday 9am</td>
                                </tr>
                                <tr>
                                    <td>Sunday School<span role="img" aria-label="pasigkjv">📖</span> </td>
                                    <td>Every Sunday 9am-10am</td>
                                </tr>
                                <tr>
                                    <td>Morning Service<span role="img" aria-label="pasigkjv">📖</span> </td>
                                    <td>Every Sunday 10am-12pm</td>
                                </tr>
                                <tr>
                                    <td>Afternoon Service<span role="img" aria-label="pasigkjv">📖</span> </td>
                                    <td>Every Sunday 3pm-5pm</td>
                                </tr>
                                <tr>
                                    <td>Prayer Meeting <span role="img" aria-label="pasigkjvprayer">🙏</span></td>
                                    <td>Every Wednesday 7pm(Occasionally 3pm)</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Jumbotron>
                </center>
            </div>

        </React.Fragment>
    );
}

export default Home;
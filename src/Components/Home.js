import React from 'react'
import { Jumbotron } from 'reactstrap';
import { Table } from 'reactstrap';
const Home = () => {

    return (

        <React.Fragment>
            <div id="HomeTitle">

                <center>
                    <Jumbotron style={{ backgroundColor: "transparent" }}>
                        <p className="lead blockquote">Welcome!</p>
                        <h1 className="display-4">Pasig Bible Believers Baptist Church and Missions</h1>
                        <p className="font-italic blockquote"> A dispensational KJV-only Baptist church in Metro Manila</p>

                        <p className="lead">Pastor Ismael Sanchez.</p>
                        <p className="lead">1542 E. Santos St., Barangay Palatiw.</p>
                        <p className="lead">Pasig City, Philippines 1600</p>

                        <p className="lead">
                            ☎ 0999 352 4318
                            ✉ PasigKJV1611@gmail.com
                        </p>
                        <hr className="my-2" />
                        <br />
                            <Table striped bordered size="sm" responsive style={{maxWidth:"45%"}}>
                                <thead>
                                    <tr>
                                        <th>Service</th>
                                        <th>Schedule📅</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Saturday School(For Children Only)</td>
                                        <td>Every Saturday @9am</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday School📖 </td>
                                        <td>Every Sunday 9am-10am</td>
                                    </tr>
                                    <tr>
                                        <td>Morning Service📖 </td>
                                        <td>Every Sunday 10am-12pm</td>
                                    </tr>
                                    <tr>
                                        <td>Afternoon Service📖 </td>
                                        <td>Every Sunday 3pm-5pm</td>
                                    </tr>
                                    <tr>
                                        <td>Prayer Meeting 🙏</td>
                                        <td>Every Wednesday @ 7pm(Occasionally 3pm)</td>
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
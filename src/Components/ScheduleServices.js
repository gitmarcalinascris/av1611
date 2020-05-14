import React from 'react';
import { Table } from 'reactstrap';
import "./Layout.css";
const ScheduleServices = () => {
    return (
        <React.Fragment>
            <div id="HomeTitle" style={{ padding : "10% 0" }}>
                <center>
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
                                    <td>Every Sunday 10am-12pm, 7pm</td>
                                </tr>
                                <tr>
                                    <td>Afternoon Service<span role="img" aria-label="pasigkjv">📖</span> </td>
                                    <td>Every Sunday 3pm-5pm</td>
                                </tr>
                                <tr>
                                    <td>Prayer Meeting <span role="img" aria-label="pasigkjvprayer">🙏</span></td>
                                    <td>Every Wednesday 7pm(Occasionally 3pm)</td>
                                </tr>
                                <tr>
                                    <td>Bible Study (Special Service Only)<span role="img" aria-label="pasigkjv">📖</span> </td>
                                    <td>Friday/Tuesday between 5am-6am</td>
                                </tr>
                            </tbody>
                        </Table>
                </center>
            </div>

        </React.Fragment>
    );
}

export default ScheduleServices;
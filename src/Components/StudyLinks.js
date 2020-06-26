import React from 'react'
import { Table } from 'reactstrap';
import "./Layout.css";
const StudyLinks = () => {
    return (
        <div style={{ marginTop: '5%' }}>

            <center>
                <Table striped bordered size="xs" responsive className="tbl-display">
                    <thead>
                        <tr>
                            <th>Youtube Bible Studies</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="https://www.youtube.com/watch?v=H4I8MEc0OHs" target="_blank" rel="noopener noreferrer">Why do People Suffer?</a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.youtube.com/watch?v=ObXB3QzEDOY" target="_blank" rel="noopener noreferrer">Parable of the Sower</a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.youtube.com/watch?v=IacQG56aNio" target="_blank" rel="noopener noreferrer">God's Judgment for Christians (Judgment Seat of Christ)</a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.youtube.com/watch?v=jQLnS5QymWk" target="_blank" rel="noopener noreferrer">Work or Labor in the Bible</a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.youtube.com/watch?v=LdDuOn-ytPE" target="_blank" rel="noopener noreferrer">Satan Attacking the words of God (Another Book)</a></td>
                        </tr>
                    </tbody>
                </Table>
            </center>
        </div>
    )
}
export default StudyLinks;
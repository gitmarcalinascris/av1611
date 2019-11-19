import React from 'react'
import { Jumbotron } from 'reactstrap';
import "./../Layout.css"
const StatementOfFaith = () => {
    return (
        <div className="p-desc">
            <center>
                <Jumbotron className="jumbotron-custom">
                    <p className="lead blockquote">What do we Believe?</p>
                    <div id="h1-title">We Believe...</div>
                </Jumbotron>
            </center>
        </div>
    );
}

export default StatementOfFaith;
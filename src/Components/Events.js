import React from 'react'
import { Card, CardBody, CardHeader, CardImg, CardFooter } from 'reactstrap'

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };

    }


    render() {
        return (
            <div style={{margin:"5%"}} >
                <center>
                    <Card className="div-event">
                        <CardHeader>Israel and The World Today 2019</CardHeader>
                        <CardBody>
                            <CardImg top src="/images/IsraelAndTheWorldToday.jpg" alt="Image"  />
                        </CardBody>
                        <CardFooter className="text-muted">Closed</CardFooter>
                    </Card>
                </center>
            </div>
        )
    }
}

export default Events
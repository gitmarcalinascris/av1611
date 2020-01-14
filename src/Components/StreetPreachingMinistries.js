import React from 'react'
import { Card, CardBody, CardHeader, CardImg, CardFooter } from 'reactstrap'
import WarAgainstIdolatry from "./../Assets/images/NazarenoHighlights.png"
import NewBro from "./../Assets/images/kuyaart.PNG"
const StreetPreachingMinistries = () => {
    return (
        <div style={{ margin: ".5%" }}>
            <center>
                <Card className="div-event bg-common">
                    <CardHeader><b>Preaching Against Idolatry(Nazareno 2020)</b></CardHeader>
                    <CardBody >
                        <CardImg src={WarAgainstIdolatry} height="350" width="800" />
                        <br/>
                        <br/>
                        <p><b>Street Preaching has NO FRUITS!? REALLY?</b></p>
                        <p>
                            January 9, we as Bible Believers did what we normally do every Black Nazarene Parade. Preaching againts false beliefs, sin (mostly about idolatry) and preaching to them the saving Gospel. And about the end of our preaching, we noticed a man  in front us who has been listening thru the course of our singing and preachings. When our speaker ran out of battery, the preacher approached him and asked if he wanted to to get saved that day.
                            <br/>
                            <img src={NewBro}  alt="kuyaInBlue" width="20%" height="20%" />
                        </p>
                        <b>
                            <p>
                                Brethren in Christ, he did not only believed Jesus as his Savior and got saved... right then and there he REPENTED of his belief in the black nazarene and his CATHOLICISM! PRAISE THE LORD!
                            </p>
                            <p>

                                He further testified (with tears) that for seven years he has been living his life in a lie and blindness. While the preaching was ongoing, he even removed his bandana (Black nazarene identification) and THREW IT AWAY!
                            </p>
                            </b>
                            <p>
                                Thats one great CONVERSION right there! Preachers were truly Spirit filled by God and still moving people to repentance. Not to mention a bunch also got saved that day after believing the Gospel and professing right infront of us (and we dont even know those who didnt tell us). God is SO GOOD, and He’s still in business saving souls!
    
                                Yes, Even in street preaching.<span aria-label="Smiley" role="img"> 🙂</span>
                            </p>
                            <p>
                                PS: Pray for the young man, his name is Art and lives in tondo Manila.
                            </p>
                    </CardBody>
                    <CardFooter>
            
                      
                    </CardFooter>
                </Card>
            </center>
        </div>)
};


export default StreetPreachingMinistries;
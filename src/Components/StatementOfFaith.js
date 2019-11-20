import React from 'react'
import Table from 'reactstrap/lib/Table';
import "./Layout.css"
const StatementOfFaith = () => {
    return (
        <div className="p-desc">
            <div className="text-center">
                <p className="lead blockquote" style={{ marginTop: "10px" }}>What do we Believe?</p>
                <div className="div-title" style={{ marginTop: "-20px" }}>We Believe...</div>
                <center>
                    <Table striped bordered size="md" responsive className="tbl-display">
                        <tbody>
                            <tr>
                                <td>
                                    <span role="img" aria-label="pasigkjv">📖</span>
                                    The <b>Old and New Testament of the Bible</b>, the 1611 Authorized Version, which “is <b>given</b> by inspiration of God” (<b>2 Timothy 3:16</b>), is the Final Authority in all matters of faith and practice. (<b>Isaiah 34:16. 2 Peter 1:19-21</b>)
                                 </td>
                            </tr>
                            <tr>
                                <td>
                                    <span role="img" aria-label="pasigkjv">📖</span>
                                    The <b>One living and true God is</b> manifested in three distinct Persons, the Father, the Son and the Holy Spirit, equal and united in the Godhead. (1 John 5:7; Matthew 3:15-17; 2 Corinthians 13:14)
                                 </td>
                            </tr>

                            <tr>
                                <td>
                                    <span role="img" aria-label="pasigkjv">📖</span>
                                    The <b>Lord Jesus Christ</b>, who is “God manifest in the flesh,” gave himself and shed his <b>precious blood</b> at the cross of Calvary for forgiveness of sin and for the redemption of man. He literally, physically <b>resurrected</b> from the dead and ascended to heaven. (<b>2 Timothy 3:16, 1 Peter 1:18, Ephesians 1:8, Romans 1:4; 1 Corinthians 15</b>)
                                 </td>
                            </tr>

                            <tr>
                                <td>
                                    <span role="img" aria-label="pasigkjv">📖</span>
                                    The <b>salvation of sinners</b> from the penalty of sin in the literal Hell-fire is by <b>grace through faith</b> in this church age. Once a man believes and accepts the Lord Jesus Christ as his own personal savior, he is <b>saved and sealed</b> with the holy Spirit unto the day of redemption. (<b>John 1:12; Ephesians 1:13; 2:8; 4:30</b>)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span role="img" aria-label="pasigkjv">📖</span>
                                    The <b>Body of Christ</b> is a spiritual body called The Church composed of <b>all saved ones</b> (<b>1 Corinthians 12: 13; Ephesian 5: 23-32</b>); it will soon be caught up in the air at the imminent return of Jesus Christ (<b>1 Thessalonian 4:16-18</b>) to take His “Bride” away before the Tribulation Period.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span role="img" aria-label="pasigkjv">📖</span>
                                    The <b>Second Coming of Jesus Christ</b> after the Great Tribulation will be for the <b>salvation of the Jews</b>, the <b>doomed of the Anti-Christ</b>, after which Christ will establish His earthly visible Kingdom and <b>His Throne in Jerusalem</b> to reign over all the Earth for a thousand years. (<b>1 Samuel 7:16; Psalms 89:34-37; Isaiah 9:7; Romans 11:26; Revelation 19:11-16</b>)
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    <span role="img" aria-label="pasigkjv">📖</span>
                                    The <b>local church</b> is an organized assembly of professing Christians baptized by immersion lead and ruled by an <b> ordained pastor</b> for the spiritual purposes of worship, prayer, teaching and preaching the Bible, evangelistic and missionary endeavors, mutual aid, and, as a testimony for Jesus Christ to the community. (<b>Ephesians 4:11; Hebrew 13:7, 17; I Peter 5:1-3 ; Acts 4, 11, 13, 14, 16; Revelation 1:2</b>).
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                </center>
                <div className="text-center"><b>Prepared by Pastor I. Sanchez</b></div>
            </div>
        </div>
    );
}

export default StatementOfFaith;
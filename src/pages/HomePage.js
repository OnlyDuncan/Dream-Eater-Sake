import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import logo from '../app/assets/img/Portfolio_Project_Logo.png';
import sakePageImage1 from '../app/assets/img/Sake_Page_Image_1.png';
import eventPageImage1 from '../app/assets/img/Event_Page_Image_1.png';
import shopPageImage1 from '../app/assets/img/Shop_Page_Image_1.png';
import aboutPageImage from '../app/assets/img/About_Page_Image.png';

const HomePage = () => {
    return (
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0, overflow: "hidden" }}>
            <div id = "HomePage" style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#9b9fda", height: 500 }}>
                <Row>
                    <Col>
                        <img src={logo} alt="Logo" className="homepage-logo" />
                    </Col>
                </Row>
            </div>
            <div id = "SakePage" style={{ backgroundColor: "#d1d3e8", paddingTop: 50, paddingBottom: 200 }}>
                <Row>
                    <Col>
                        <h2 className = "subheader" style={{ paddingBottom: 100 }}>Our Sake Selection</h2>
                    </Col>
                </Row>
                <Row>
                    <Col />
                    <Col>
                        <img src={sakePageImage1} alt="Sake Page Image 1" className = "sakepageimages" />
                        <br />
                        <div className = "centered">Flavor Profile</div>
                    </Col>
                    <Col />
                    <Col>
                        <img src={sakePageImage1} alt="Sake Page Image 1" className = "sakepageimages" />
                        <br />
                        <div className = "centered">Flavor Profile</div>
                    </Col>
                    <Col />
                    <Col>
                        <img src={sakePageImage1} alt="Sake Page Image 1" className="sakepageimages" />
                        <br />
                        <div className = "centered">Flavor Profile</div>
                    </Col>
                    <Col />
                </Row>
            </div>
            <div id = "EventsPage" style={{ backgroundColor: "#9ec2e0", paddingTop: 50, paddingBottom: 200 }}>
                <Row>
                    <Col>
                        <h2 className = "subheader" style={{ paddingBottom: 100 }}>Upcoming Events</h2>
                    </Col>
                </Row>
                <Row>
                    <Col />
                    <Col>
                        <div>Event Name</div>
                        <div>Event Description</div>
                    </Col>
                    <Col />
                    <Col>
                        <img src={eventPageImage1} alt="Event Page Image 1" className="eventpageimages" />
                    </Col>
                    <Col />
                </Row>
                <br />
                <Row>
                    <Col />
                    <Col>
                        <img src={eventPageImage1} alt="Event Page Image 1" className="eventpageimages" />
                    </Col>
                    <Col />
                    <Col>
                        <div>Event Name</div>
                        <div>Event Description</div>
                    </Col>
                    <Col />
                </Row>
            </div>
            <div id = "ShopPage" style={{ backgroundColor: "#e6c1dd", paddingTop: 50, paddingBottom: 200 }}>
                <Row>
                    <Col>
                        <h2 className = "subheader" style={{ paddingBottom: 100 }}>Shop</h2>
                    </Col>
                </Row>
                <Row>
                    <Col />
                    <Col>
                        <img src={shopPageImage1} alt="Shop Page Image 1" className="shoppageimages" />
                        <br />
                        <div className = "centered">Product Name</div>
                    </Col>
                    <Col />
                    <Col>
                        <img src={shopPageImage1} alt="Shop Page Image 1" className="shoppageimages" />
                        <br />
                        <div className = "centered">Product Name</div>
                    </Col>
                    <Col />
                    <Col>
                        <img src={shopPageImage1} alt="Shop Page Image 1" className="shoppageimages" />
                        <br />
                        <div className = "centered">Product Name</div>
                    </Col>
                    <Col />
                </Row>
                <br />
                <Row>
                    <Col>
                        <div className = "centered">Disclaimer: Can be bought at location or by following link to online store.</div>
                    </Col>
                </Row>
            </div>
            <div id = "AboutPage" style={{ backgroundColor: "#61419f", paddingTop: 50, paddingBottom: 700, height: 500 }}>
                <h2 className = "subheader" style={{ paddingBottom: 100 }}>About Us</h2>
                <Container style={{ display: 'flex' }}>
                    <Row style={{ margin: "auto" }}>
                        <Col xs='12' md='6'>
                            <img src={aboutPageImage} alt="About Page Image" className="aboutpageimages" />
                        </Col>
                        <Col >
                            <p style={{ color: "white", textAlign: 'center', marginLeft: "40px", marginRight: "40px" }}>
                                Based in Marfa, Texas, Dream Eater Sake is dedicated to creating the most unique and memorable mixological experiences available.
                                Inspired by the unconcious mind, each flavor is a one of a kind multi-sensory experience that is guaranteed to bring back memories of your most peaceful, pleasureable, and terrifying oneironautical journeys.
                                Our sake is a dream come true.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    );
};

export default HomePage;
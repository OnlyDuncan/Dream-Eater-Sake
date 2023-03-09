import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import logo from '../app/assets/img/Portfolio_Project_Logo.png';

const HomePage = () => {
    return (
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0, overflow: "hidden" }}>
            <div id = "HomePage" style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#9b9fda", height: 500, width: "100%" }}>
                <Row>
                    <Col>
                        <img src={logo} alt="Logo" className="homepage-logo" />
                    </Col>
                </Row>
            </div>
            <div id = "SakePage" style={{ backgroundColor: "#d1d3e8", paddingTop: 100, paddingBottom: 200 }}>
                <Row>
                    <Col>
                        <h2 className = "subheader">Our Sake Selection</h2>
                    </Col>
                </Row>
                <Row>
                    <Col />
                    <Col>
                        <div className = "sakepageimages" />
                        <div className = "centered">Flavor Profile</div>
                    </Col>
                    <Col />
                    <Col>
                        <div className = "sakepageimages" />
                        <div className = "centered">Flavor Profile</div>
                    </Col>
                    <Col />
                    <Col>
                        <div className = "sakepageimages" />
                        <div className = "centered">Flavor Profile</div>
                    </Col>
                    <Col />
                </Row>
            </div>
            <div id = "EventsPage" style={{ backgroundColor: "#9ec2e0"}}>
                <Row>
                    <Col>
                        <h2 className = "subheader">Upcoming Events</h2>
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
                        <div className = "eventpageimages" />
                    </Col>
                    <Col />
                </Row>
                <br />
                <Row>
                    <Col />
                    <Col>
                        <div className = "eventpageimages" />
                    </Col>
                    <Col />
                    <Col>
                        <div>Event Name</div>
                        <div>Event Description</div>
                    </Col>
                    <Col />
                </Row>
            </div>
            <div id = "ShopPage" style={{ backgroundColor: "#e6c1dd"}}>
                <Row>
                    <Col>
                        <h2 className = "subheader">Shop</h2>
                    </Col>
                </Row>
                <Row>
                    <Col />
                    <Col>
                        <div className = "shoppageimages" />
                        <div className = "centered">Product Name</div>
                    </Col>
                    <Col />
                    <Col>
                        <div className = "shoppageimages" />
                        <div className = "centered">Product Name</div>
                    </Col>
                    <Col />
                    <Col>
                        <div className = "shoppageimages" />
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
            <div id = "AboutPage" style={{ backgroundColor: "#61419f", height: 400 }}>
                <Row>
                    <Col>
                        <h2 className = "subheader">About Us</h2>
                    </Col>
                </Row>
                <Row>
                    <Col />
                    <Col>
                        <div>Description</div>
                    </Col>
                    <Col />
                    <Col>
                        <div className = "aboutpageimages" />
                    </Col>
                    <Col />
                </Row>
            </div>
        </Container>
    );
};

export default HomePage;
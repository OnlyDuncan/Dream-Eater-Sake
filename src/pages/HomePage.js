import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import logo from '../app/assets/img/Portfolio_Project_Logo.png';

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
                        <div className = "sakepageimages" />
                        <br />
                        <div className = "centered">Flavor Profile</div>
                    </Col>
                    <Col />
                    <Col>
                        <div className = "sakepageimages" />
                        <br />
                        <div className = "centered">Flavor Profile</div>
                    </Col>
                    <Col />
                    <Col>
                        <div className = "sakepageimages" />
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
            <div id = "ShopPage" style={{ backgroundColor: "#e6c1dd", paddingTop: 50, paddingBottom: 200 }}>
                <Row>
                    <Col>
                        <h2 className = "subheader" style={{ paddingBottom: 100 }}>Shop</h2>
                    </Col>
                </Row>
                <Row>
                    <Col />
                    <Col>
                        <div className = "shoppageimages" />
                        <br />
                        <div className = "centered">Product Name</div>
                    </Col>
                    <Col />
                    <Col>
                        <div className = "shoppageimages" />
                        <br />
                        <div className = "centered">Product Name</div>
                    </Col>
                    <Col />
                    <Col>
                        <div className = "shoppageimages" />
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
            <div id = "AboutPage" style={{ backgroundColor: "#61419f", paddingTop: 50, paddingBottom: 200, height: 500 }}>
                <Row>
                    <Col>
                        <h2 className = "subheader" style={{ paddingBottom: 100 }}>About Us</h2>
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
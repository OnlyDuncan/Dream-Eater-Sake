import { Col, Row, Container } from "reactstrap";
import Logo from "../app/assets/img/Logo.png";
import SakePageImage1 from "../app/assets/img/SakePageImage1.png";
import ArtShowImage from "../app/assets/img/ArtShow.png";
import FilmFestivalImage from "../app/assets/img/FilmFestival.png";
import ShopPageImage1 from "../app/assets/img/ShopPageImage1.png";
import AboutPageImage from "../app/assets/img/AboutPageImage.png";

const HomePage = () => {
    return (
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0, overflow: "hidden" }}>
            <div id = "HomePage" style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#9b9fda", height: 500 }}>
                <Row>
                    <Col>
                        <img src={Logo} alt="Logo" className="homepage-logo" />
                    </Col>
                </Row>
            </div>

            <div id="SakePage" style={{ backgroundColor: "#b8e0dc", paddingTop: 50, paddingBottom: 200 }}>
                <h2 className="subheader" style={{ paddingBottom: 100 }}>Our Sake Selection</h2>
                <Container fluid style={{ display: "flex" }}>
                    <Row style={{ margin: "auto" }}>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <img src={SakePageImage1} alt="Sake Page Image 1" className="sakepageimages" />
                            <br />
                            <div className="centered lust" style={{ color: "white" }}>Sweet Dreams</div>
                        </Col>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <img src={SakePageImage1} alt="Sake Page Image 1" className="sakepageimages" />
                            <br />
                            <div className="centered lust" style={{ color: "white" }}>Strange Journeys</div>
                        </Col>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <img src={SakePageImage1} alt="Sake Page Image 1" className="sakepageimages" />
                            <br />
                            <div className="centered lust" style={{ color: "white" }}>Dark Nightmares</div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="EventsPage" style={{ backgroundColor: "#9ec2e0", paddingTop: 50, paddingBottom: 200 }}>
                <h2 className="subheader" style={{ paddingBottom: 100 }}>Upcoming Events</h2>
                <Container fluid style={{ display: "flex" }}>
                    <Row style={{ margin: "auto" }}>
                        <Col xs={{ size: '12', order: 0 }} md='6' style={{ marginBottom: "40px" }}>
                            <div className="lust centered" style={{ color: "white" }}>Dream Film Festival</div>
                            <div className="poppins centered" style={{ color: "white" }}>
                                A film festival celebrating the work of dream inspired filmmakers. Featuring films directed by David Lynch, Dali, as well as contemporary artists on the rise. Drinks and samples will be available to compliment the experience. The films will start at 6:00 on April 15th, 2023 and end shortly after midnight.
                            </div>
                        </Col>
                        <Col xs={{ size: '12', order: 1 }} md='6'>
                            <img src={FilmFestivalImage} alt="Event Page Image 1" className="eventpageimages" />
                        </Col>
                        <br />
                        <Col xs={{ size: '12', order: 2 }} md='6' style={{ marginBottom: "40px" }}>
                            <div className="lust centered" style={{ color: "white" }}>Collective Unconcious Art Show</div>
                            <div className="poppins centered" style={{ color: "white" }}>
                                An art show featuring the works of internationally recognized artists and focusing on the theme of dreams. The opening will be April 7th, 2023, at 7:00 PM, where the artists will speak about their work, and there will be free samples of our drinks. Entry is free and all art work is on sale. The show will come down on June 9th, 2023.
                            </div>
                        </Col>
                        <Col xs={{ size: '12', order: 3 }} md='6'>
                            <img src={ArtShowImage} alt="Event Page Image 1" className="eventpageimages" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="ShopPage" style={{ backgroundColor: "#e6c1dd", paddingTop: 50, paddingBottom: 200 }}>
                <h2 className="subheader" style={{ paddingBottom: 100 }}>Shop</h2>
                <Container fluid style={{ display: "flex" }}>
                    <Row style={{ margin: "auto" }}>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <img src={ShopPageImage1} alt="Shop Page Image 1" className="shoppageimages" />
                            <br />
                            <div className="centered lust" style={{ color: "white" }}>T-Shirts</div>
                        </Col>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <img src={ShopPageImage1} alt="Shop Page Image 1" className="shoppageimages" />
                            <br />
                            <div className="centered lust" style={{ color: "white" }}>Sake Bottles</div>
                        </Col>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <img src={ShopPageImage1} alt="Shop Page Image 1" className="shoppageimages" />
                            <br />
                            <div className="centered lust" style={{ color: "white" }}>Shot Glasses</div>
                        </Col>
                        <Col xs='12'>
                            <a href="https://www.shopify.com/" target="_blank" className = "centered poppins" style={{ color: "white" }}>
                                Products seen here and more can be purchased at our brewery at 1313 E Nothing St, Marfa, TX, or by following this link to our online shop.
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="AboutPage" style={{ backgroundColor: "#61419f", paddingTop: 50, paddingBottom: 700, height: 500 }}>
                <h2 className="subheader" style={{ paddingBottom: 100 }}>About Us</h2>
                <Container fluid style={{ display: 'flex' }}>
                    <Row style={{ margin: "auto" }}>
                        <Col xs='12' md='6'>
                            <img src={Logo} alt="About Page Image" className="aboutpageimages" />
                        </Col>
                        <Col >
                            <p className="poppins" style={{ color: "white", textAlign: 'center', marginLeft: "40px", marginRight: "40px" }}>
                                Based in Marfa, Texas, Dream Eater Sake is dedicated to creating the most unique and memorable mixological experiences available.
                                Inspired by the Baku, a mythical creature from Japan that eats dreams, as well as the unconcious mind, each flavor is a one of a kind multi-sensory experience that is guaranteed to bring back memories of your most peaceful, pleasureable, and terrifying oneironautical journeys.
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
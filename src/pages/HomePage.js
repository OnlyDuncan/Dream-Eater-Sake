import { Col, Row, Container } from "reactstrap";
import Hero from "../app/assets/img/Dreameater Hero.webp";
import Logo from "../app/assets/img/Dreameater Logo.webp";
import SakePageImage1 from "../app/assets/img/Sweet Dreams.webp";
import SakePageImage2 from "../app/assets/img/Strange Journeys.webp";
import SakePageImage3 from "../app/assets/img/Dark Nightmares.webp";
import ShopPageImage1 from "../app/assets/img/T Shirt Mockup.webp";
import ShopPageImage2 from "../app/assets/img/Sake Can All 3 Mockup.webp";
import ShopPageImage3 from "../app/assets/img/Mug Mockup.webp";
import ArtShowImage from "../app/assets/img/ArtShow.webp";
import FilmFestivalImage from "../app/assets/img/FilmFestival.webp";

const HomePage = () => {
    return (
        <Container fluid style={{ backgroundColor: "#F4FFFF", paddingLeft: 0, paddingRight: 0, overflow: "hidden" }}>
            <div id = "HomePage" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 500 }}>
                <Row>
                    <Col>
                        <img src={Hero} alt="Logo" className="homepage-hero" />
                    </Col>
                </Row>
            </div>

            <div id="SakePage" style={{ paddingTop: 50, paddingBottom: 200 }}>
                <h2 className="subheader" style={{ paddingBottom: 100 }}>Our Sake Selection</h2>
                <Container fluid>
                    <Row style={{ margin: "auto" }}>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <div className="frame" style={{ width: "180px", margin: "auto", paddingTop: "10px", paddingBottom: "10px" }}>
                                <img src={SakePageImage1} alt="Sake Page Image 1" className="sakepageimages" />
                            </div>
                            <br />
                            <div className="centered lust productHeader" style={{ textAlign: "center" }}>Sweet <br /> Dreams</div>
                            
                        </Col>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <div className="frame" style={{ width: "180px", margin: "auto", paddingTop: "10px", paddingBottom: "10px" }}>
                                <img src={SakePageImage2} alt="Sake Page Image 1" className="sakepageimages" />
                            </div>
                            <br />
                            <div className="centered lust productHeader" style={{ textAlign: "center" }}>Strange <br /> Journey</div>
                        </Col>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <div className="frame" style={{ width: "180px", margin: "auto", paddingTop: "10px", paddingBottom: "10px" }}>
                                <img src={SakePageImage3} alt="Sake Page Image 1" className="sakepageimages" />
                            </div>
                            <br />
                            <div className="centered lust productHeader" style={{ textAlign: "center" }}>Dark <br /> Nightmares</div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="EventsPage" style={{ paddingTop: 50, paddingBottom: 200 }}>
                <h2 className="subheader" style={{ paddingBottom: 100 }}>Upcoming Events</h2>
                <Container fluid style={{ display: "flex" }}>
                    <Row style={{ margin: "auto" }}>
                        <Col xs={{ size: '12', order: 1 }} md={{ size: '6', order: 0 }} style={{ marginBottom: "40px" }}>
                            <div className="lust centered productHeader">Once Upon A Dream Film Festival</div>
                            <div className="poppins centered productHeader" style={{ marginLeft: "40px" }}>
                                A film festival celebrating the work of dream inspired filmmakers. Featuring films directed by David Lynch, Dali, as well as contemporary artists on the rise. Drinks and samples will be available to compliment the experience. The films will start at 6:00 PM on December 15th, 2023 and end shortly after midnight.
                            </div>
                        </Col>
                        <Col xs={{ size: '12', order: 0}} md={{ size: '6', order: 1 }}>
                            <div className="frame" style={{ width: "280px", margin: "auto", paddingTop: "10px", paddingBottom: "10px", marginBottom: "40px" }}>
                                <img src={FilmFestivalImage} alt="Event Page Image 1" className="eventpageimages" />
                            </div>
                        </Col>
                        <br />
                        <Col xs={{ size: '12', order: 3 }} md={{ size: '6', order: 2 }} style={{ marginBottom: "40px" }}>
                            <div className="lust centered productHeader">Collective Unconscious Art Show</div>
                            <div className="poppins centered productHeader" style={{ marginLeft: "40px" }}>
                                An art show featuring the works of internationally recognized artists and focusing on the theme of dreams. The opening will be December 20th, 2023, at 7:00 PM, where the artists will speak about their work, and there will be free samples of our drinks. Entry is free and all art work is on sale. The show will come down on February 20th, 2024.
                            </div>
                        </Col>
                        <Col xs={{ size: '12', order: 2 }} md={{ size: '6', order: 3 }}>
                            <div className="frame" style={{ width: "280px", margin: "auto", paddingTop: "10px", paddingBottom: "10px", marginBottom: "40px" }}>
                                <img src={ArtShowImage} alt="Event Page Image 1" className="eventpageimages" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="ShopPage" style={{ paddingTop: 50, paddingBottom: 200 }}>
                <h2 className="subheader" style={{ paddingBottom: 100 }}>Store</h2>
                <Container fluid style={{ display: "flex" }}>
                    <Row style={{ margin: "auto" }}>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <div className="frame" style={{ width: "270px", margin: "auto", paddingTop: "10px", paddingBottom: "10px" }}>
                                <img src={ShopPageImage1} alt="Shop Page Image 1" className="shoppageimages" />
                            </div>
                            <br />
                            <div className="centered lust productHeader">T-Shirts</div>
                        </Col>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <div className="frame" style={{ width: "270px", margin: "auto", paddingTop: "10px", paddingBottom: "10px" }}>
                                <img src={ShopPageImage2} alt="Shop Page Image 1" className="shoppageimages" />
                            </div>
                            <br />
                            <div className="centered lust productHeader">Sake</div>
                        </Col>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <div className="frame" style={{ width: "270px", margin: "auto", paddingTop: "10px", paddingBottom: "10px" }}>
                                <img src={ShopPageImage3} alt="Shop Page Image 1" className="shoppageimages" />
                            </div>
                            <br />
                            <div className="centered lust productHeader">Mugs</div>
                        </Col>
                        <Col xs='12'>
                            <a href="https://www.shopify.com/" target="_blank" className = "centered poppins productHeader" style={{ textAlign: "center" }}>
                                Products seen here and more can be purchased at our brewery at 1313 E Nothing St, Marfa, TX, or by following this link to our online shop.
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="AboutPage" style={{ paddingTop: 50, paddingBottom: 850, height: 500 }}>
                <h2 className="subheader" style={{ paddingBottom: 100 }}>About Us</h2>
                <Container fluid style={{ display: 'flex' }}>
                    <Row style={{ margin: "auto" }}>
                        <Col xs='12' md='6'>
                            <img src={Logo} alt="About Page Image" className="aboutpageimages" />
                        </Col>
                        <Col >
                            <p className="poppins productHeader" style={{ textAlign: 'center', marginLeft: "40px", marginRight: "40px", marginTop: "40px" }}>
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
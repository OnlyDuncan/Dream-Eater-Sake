import { Container, Row, Col } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <footer className = 'site-footer'>
            <Container fluid>
                <Row>
                    <Col xs='12' md='4' className='text-center' style={{ marginBottom: "20px" }}>
                        <h5 className="lust" style={{ color: "white" }}>Location</h5>
                        <div className="poppins" style={{ color: "#DADADA" }}>
                            1313 E Nothing St, Marfa, TX 79843
                        </div>
                    </Col>
                    <Col xs='12' md='4' className='text-center' style={{ marginBottom: "20px" }}>
                        <h5 className="lust" style={{ color: "white" }}>Social</h5>
                        <SocialIcon url="https://instagram.com" style={{ color: "white" }} />{' '}
                        <SocialIcon url="https://facebook.com" />
                    </Col>
                    <Col xs='12' md='4' className='text-center'>
                        <h5 className="lust" style={{ color: "white"}}>Contact</h5>
                        <a role='button' className='poppins' href='tel:+12345678910' style={{ textDecoration: "none", color: "#DADADA" }}>
                            1-234-567-8910
                        </a>
                        <br />
                        <a role='button' className='poppins' href='mailto:notreal@notreal.co' style={{ textDecoration: "none", color: "#DADADA" }}>
                            DreamEaterSake@gmail.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

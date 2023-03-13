import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer className = 'site-footer'>
            <Container fluid>
                <Row>
                    <Col xs='12' md='4' className='text-center' style={{ marginBottom: "20px" }}>
                        <h5 className="lust">Location</h5>
                        <div className="poppins" style={{ color: "white" }}>
                            1313 E Nothing St, Marfa, TX 79843
                        </div>
                    </Col>
                    <Col xs='12' md='4' className='text-center' style={{ marginBottom: "20px" }}>
                        <h5 className="lust">Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                    </Col>
                    <Col xs='12' md='4' className='text-center'>
                        <h5 className="lust">Contact</h5>
                        <a role='button' className='poppins' href='tel:+12345678910' style={{ textDecoration: "none", color: "white" }}>
                            1-234-567-8910
                        </a>
                        <br />
                        <a role='button' className='poppins' href='mailto:notreal@notreal.co' style={{ textDecoration: "none", color: "white" }}>
                            DreamEaterSake@gmail.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

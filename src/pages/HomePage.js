import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import logo from '../app/assets/img/Portfolio_Project_Logo.png';

const HomePage = () => {
    return (
        <div>
            <div className = "section page-background">
                <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={logo} alt="Logo" className="homepage-logo" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
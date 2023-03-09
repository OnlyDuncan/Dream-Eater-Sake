import { Navbar,
         NavbarBrand,
         Collapse,
         NavbarToggler,
         Nav,
         NavItem,
    } from 'reactstrap';
import BakuLogo from '../app/assets/img/Portfolio_Project_Logo.png';
import { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/' className='ms-5'>
                <img src= {BakuLogo} alt= "baku logo" className= "float-start" />
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className= "ms-auto" navbar>
                    <NavItem>
                        <Link className="nav-link" activeClass="active" to="HomePage" spy={true} smooth={true} offset={-150} duration={500}>
                            Home
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className='nav-link' activeClass="active" to="SakePage" spy={true} smooth={true} offset={-60} duration={500}>
                            Sake
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className='nav-link' activeClass="active" to="EventsPage" spy={true} smooth={true} offset={-150} duration={500}>
                            Events
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className='nav-link' activeClass="active" to="ShopPage" spy={true} smooth={true} offset={-150} duration={500}>
                            Shop
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className='nav-link' activeClass="active" to="AboutPage" spy={true} smooth={true} offset={-150} duration={500}>
                            About
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
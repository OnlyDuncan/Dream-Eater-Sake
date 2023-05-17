import { Navbar,
         NavbarBrand,
         Collapse,
         NavbarToggler,
         Nav,
         NavItem,
    } from 'reactstrap';
import Logo from '../app/assets/img/Dreameater Logo.png';
import { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <Navbar dark sticky='top' expand='md'>
            <NavbarBrand href='/' className='ms-5'>
                <img src= {Logo} alt= "Logo" className= "float-start" />
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className= "ms-auto" navbar>
                    <NavItem>
                        <Link className="nav-link" activeClass="active" to="HomePage" spy={true} smooth={true} offset={-130} duration={500}>
                            Home
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className='nav-link' activeClass="active" to="SakePage" spy={true} smooth={true} offset={-130} duration={500}>
                            Sake
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className='nav-link' activeClass="active" to="EventsPage" spy={true} smooth={true} offset={-130} duration={500}>
                            Events
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className='nav-link' activeClass="active" to="ShopPage" spy={true} smooth={true} offset={-130} duration={500}>
                            Store
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className='nav-link' activeClass="active" to="AboutPage" spy={true} smooth={true} offset={-130} duration={500}>
                            About
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
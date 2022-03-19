import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
function NavBar() {
    
    return (<Navbar expand="lg">
        <Container>
            <Navbar.Brand >

                <NavLink className='nav-link' to="/"><img
                    alt=""
                    src={process.env.PUBLIC_URL + '/images/logo.png'}
                    // width="100"
                    // height="100"
                    className="d-inline-block align-top"
                />{' '}</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className='nav-link' to="/all">all service</NavLink>
                    <NavLink className='nav-link' to="/shop">order</NavLink>
                    <NavLink className='nav-link' to="/blog">blog</NavLink>
                </Nav>
                <Nav className="ms-auto">
                    <NavLink className='nav-link' to="/pro">become a pro</NavLink>
                    <NavLink className='nav-link' to="/sign">sign</NavLink>
                    <NavLink className='nav-link' to="/login">login</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>);
}


export default NavBar;
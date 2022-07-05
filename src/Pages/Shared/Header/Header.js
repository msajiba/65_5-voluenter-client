import React from 'react';
import { Navbar,Container,Nav, Button, Spinner } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../../../assets/logos/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../init-config';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    if(loading){
        return <Spinner animation="border" /> 
    }

    return (
        
        <>
    
        <Navbar expand="lg" bg="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className='w-25' src={logo} alt="" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto fs-5">

                        <Nav.Link as={Link} to="/"> Home </Nav.Link>
                        <Nav.Link as={Link} to="/donation"> Donation </Nav.Link>
                        <Nav.Link as={Link} to="/events"> Events </Nav.Link>
                        <Nav.Link as={Link} to="/blog"> Blog </Nav.Link>
                        <Nav.Link as={Link} to="/addvolunteer"> Add  </Nav.Link>
                        <Nav.Link as={Link} to="admin"> Admin </Nav.Link>

                      {
                        user? <Button onClick={()=> signOut(auth)}> Sign Out</Button> 
                            : <Nav.Link as={Link} to="/login"> Login </Nav.Link>
                      }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        </>
    
    );
};

export default Header;
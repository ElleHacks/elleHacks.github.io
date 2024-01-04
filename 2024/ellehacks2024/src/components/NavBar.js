import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function NavBar() {
  const linkText = {
    color: '#FFF',
    textAlign: 'center',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
  };

  return (
    <>
      <Navbar fixed="top" expand="lg" style={{ backgroundColor: '#853536' }}>
        <Container>
          {/* Website Logo */}
          <Navbar.Brand className='m-10px' href="#home" style={linkText}>
            <Image
              src={require('../assets/logo.png')}
              alt="ElleHacks Logo"
              fluid
              style={{ maxHeight: '50px', marginRight: '10px' }}
            />
            ElleHacks
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center">
              <Nav.Link href="#home" style={linkText}>
                Home
              </Nav.Link>
              <Nav.Link href="#aboutus" style={linkText}>
                About Us
              </Nav.Link>
              <Nav.Link href="#features" style={linkText}>
                Register
              </Nav.Link>
              <Nav.Link href="#sponsor" style={linkText}>
                Sponsors
              </Nav.Link>
              <Nav.Link href="#faq" style={linkText}>
                FAQ
              </Nav.Link>
              <Nav.Link href="#contact" style={linkText}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* MLH Badge (visible only on larger screens) */}
          <Image
            src={require('../assets/mlh-trust-badge.png')}
            alt="MLH Trust Badge"
            fluid
            style={{ maxHeight: '150px', marginLeft: '10px', display: 'none' }}
            className="d-lg-block"
          />
        </Container>
      </Navbar>

      {/* Add padding to the top of the body */}
      <div style={{ paddingTop: '80px' }}>
        {/* Your other components go here */}
      </div>
    </>
  );
}

export default NavBar;

import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: 'lightblue',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="dark">
      <Container>
        <Logo alt={title} style={{ maxWidth: '12rem', maxHeight: '2rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;

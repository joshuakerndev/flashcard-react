import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const FlashNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">flash</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/decklist/">Decks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/study/">Study</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Flashcards by Joshua Kern</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default FlashNavbar;
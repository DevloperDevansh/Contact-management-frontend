import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navigationbar = () => {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">ContactManager</NavbarBrand>

        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/about">About</NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/add-contact">Add Contact</NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/view-contact">View Contact</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/contact">Contact Us</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigationbar;

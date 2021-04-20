import React from 'react';
import { Card, CardBody, Nav, NavItem, NavLink, Navbar, DropdownToggle, DropdownMenu, DropdownItem, NavbarBrand, UncontrolledDropdown } from 'reactstrap';

const Subnav = () => {
  return (
    <>
    <Navbar color="light" light expand="md" className="fs--1 font-weight-semi-bold navbar-standard rounded-top">
      <NavbarBrand href="/" className="text-300">
        All Accounts
      </NavbarBrand>
    </Navbar>
    <Navbar color="primary" light expand="md" className="fs--1 font-weight-semi-bold navbar-standard rounded-bottom mb-3">
      <NavbarBrand href="/" className="text-white">
        Cool Checking
      </NavbarBrand>
      <h5><code className="text-white">234982341</code></h5>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="#" className="text-white">
            Overview
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            |
          </NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret className="text-white">
            Transfer
          </DropdownToggle>
          <DropdownMenu right className="py-0">
            <div className="bg-white py-2 rounded-soft">
              <DropdownItem>Between Accounts</DropdownItem>
              <DropdownItem>To Letter User</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>ACH</DropdownItem>
              <DropdownItem>Wire</DropdownItem>
              <DropdownItem>E-Check</DropdownItem>
              <DropdownItem>Physical Check</DropdownItem>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <NavLink href="#" className="text-white">
            Statements
          </NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret className="text-white">
            Settings
          </DropdownToggle>
          <DropdownMenu right className="py-0">
            <div className="bg-white py-2 rounded-soft">
              <DropdownItem>Users</DropdownItem>
              <DropdownItem>Beneficiaries</DropdownItem>
              <DropdownItem>Account Nickname</DropdownItem>
              <DropdownItem>Account POA</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Freeze Account</DropdownItem>
              <DropdownItem>Flag for Review</DropdownItem>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
    </>
  );
};

export default Subnav;

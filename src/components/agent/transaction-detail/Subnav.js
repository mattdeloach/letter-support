import React from 'react';
import { Card, CardBody, Nav, NavItem, NavLink, Navbar, DropdownToggle, DropdownMenu, DropdownItem, NavbarBrand, UncontrolledDropdown } from 'reactstrap';

const Subnav = () => {
  return (
    <>
    <Navbar light expand="md" className="fs--1 font-weight-semi-bold navbar-standard rounded-top bg-200">
      <h5><code className="text-white"><a href="#">All Accounts</a></code></h5>
    </Navbar>
    <Navbar light expand="md" className="fs--1 font-weight-semi-bold navbar-standard bg-100">
      <h5><code className="text-white">&nbsp;<a href="#">Cool Account</a></code></h5>

    </Navbar>
    </>
  );
};

export default Subnav;

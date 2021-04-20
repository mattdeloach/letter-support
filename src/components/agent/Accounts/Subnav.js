import React from 'react';
import { Card, CardBody, Nav, NavItem, NavLink } from 'reactstrap';

const Subnav = () => {
  return (
    <Card className="bg-dark mb-3">
      <CardBody className="p-3">
        <Nav pills fill>
          <NavItem>
            <NavLink href="#" active>
              Overview
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Transfer</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Statements</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Settings</NavLink>
          </NavItem>
        </Nav>
      </CardBody>
    </Card>
  );
};

export default Subnav;

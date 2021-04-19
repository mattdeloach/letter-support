import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody } from 'reactstrap';
import FalconCardHeader from '../../common/FalconCardHeader';

const Opportunity = props => (
  <Card {...props}>
    <CardBody className="mt-3 mt-lg-0">
      <h5 className="fs-0">Robo Opportunity</h5>
      <p className="fs--1">
        Set up a robo to increase growth potential
      </p>
      <Button tag={Link} color="falcon-success" block to="#!" className="btn-sm">
        Set Up Robo Flow
      </Button>
    </CardBody>
  </Card>
);

Opportunity.propTypes = {
  className: PropTypes.string
};

export default Opportunity;

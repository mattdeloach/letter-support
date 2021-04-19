import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
import Background from '../../common/Background';
import corner1 from '../../../assets/img/illustrations/corner-1.png';
import ButtonIcon from '../../common/ButtonIcon';
import { Link } from 'react-router-dom';

const ClientNote = ({ className }) => (
  <Card className={`overflow-hidden ${className}`}>
    <Background image={corner1} className="p-card bg-card" />
    <CardBody className="position-relative">
      <h5 className="text-warning">4/10/21</h5>
      <p className="fs--1 mb-0">
        This guy loves to geek out on robotics and saving
        <br /> the world from intergalactic foes.
        <br />&nbsp;
      </p>
    </CardBody>
  </Card>
);

ClientNote.propTypes = {
  className: PropTypes.string
};

export default ClientNote;

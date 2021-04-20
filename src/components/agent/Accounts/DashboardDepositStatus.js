import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DashBoardDepositStatus = () => {
  return (
    <Card className="bg-light mb-3">
      <CardBody className="p-3">
        <p className="fs--1 mb-0">
            <FontAwesomeIcon icon="exchange-alt" className="mr-2" />A deposit of
            <strong> $921.42</strong> was initiated yesterday. It will clear by 9am tomorrow
        </p>
      </CardBody>
    </Card>
  );
};

export default DashBoardDepositStatus;

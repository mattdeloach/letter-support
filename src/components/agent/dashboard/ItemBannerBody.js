import React from 'react';
import { CardBody, Row } from 'reactstrap';
import ClientDetails from './ClientDetails';
import ClientMenu from './ClientMenu';

const ProfileBannerBody = props => {
  return (
    <CardBody>
      <Row>
        <ClientDetails {...props} />
        <ClientMenu {...props} />
      </Row>
    </CardBody>
  );
};

export default ProfileBannerBody;

import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import Premium from '../Premium';

const ProfileBannerIntro = ({ name, verified, headline, location, children }) => {
  return (
    <Col lg="8">
      <h4 className="mb-1">
        {name}
        {verified && <Premium placement="right" id="profileVerified" />}
      </h4>
      {headline && <h5 className="fs-0 font-weight-normal">{headline}</h5>}
      {location && <p className="text-500">{location}</p>}
      {children}
      <hr className="border-dashed my-4 d-lg-none" />
    </Col>
  );
};

ProfileBannerIntro.propTypes = {
  name: PropTypes.string.isRequired,
  verified: PropTypes.bool,
  headline: PropTypes.string,
  location: PropTypes.string,
  children: PropTypes.node
};

ProfileBannerIntro.defaultProps = { verified: false };

export default ProfileBannerIntro;

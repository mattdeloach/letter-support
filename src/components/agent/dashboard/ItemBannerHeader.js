import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CardHeader, Input, Label } from 'reactstrap';
import { Row, Col, Button, Media } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Background from '../../common/Background';
import Avatar from '../../common/Avatar';

import WeeklySales from './WeeklySales';
import TotalOrder from './TotalOrder';
import MarketShare from './MarketShare';
import Weather from './Weather';

import Networth from './Networth';
import BalanceTrend from './BalanceTrend';
import OpenTicket from './OpenTicket';
import ClientNote from './ClientNote';
import Notification from './Notification';
import Opportunity from './Opportunity';

import AgentWidget from './AgentWidget';

import weeklySales from '../../../data/dashboard/weeklySales';
import totalOrder from '../../../data/dashboard/totalOrder';
import marketShare from '../../../data/dashboard/marketShare';
import networth from '../../../data/dashboard/networth';
import weather from '../../../data/dashboard/weather';

const status = 'status-online';

const ProfileBannerHeader = ({ coverSrc, avatarSrc, isEditable }) => {
  return (
    <CardHeader className={`position-relative min-vh-25 ${isEditable ? 'mb-8' : 'mb-7'}`}>
    <span className="d-block">Update</span>
        <Fragment>
          <Background image={coverSrc} className="rounded-soft rounded-bottom-0 bg-dark" />
            <Row noGutters>
              <Col md={6} lg={4} xl={4} className="col-xxl-4 mb-3 pr-md-2">
                <Networth data={networth} />
              </Col>
              <Col md={6} lg={4} xl={4} className="col-xxl-4 mb-3 pr-md-2">
                <BalanceTrend data={totalOrder} />
              </Col>
              <Col md={6} lg={4} xl={4} className="col-xxl-4 mb-3 pr-md-2">
                <Weather data={weather} className="h-md-100" />
              </Col>
              <Col md={0} lg={4} xl={4} className="col-xxl-4 mb-3 pr-md-2">
                <Notification name="Tony" profileLink="/pages/profile" />
              </Col>
              <Col md={6} lg={4} xl={4} className="col-xxl-4 mb-3 pr-md-2">
                <Opportunity className="mb-3" />
              </Col>
              <Col md={6} lg={4} xl={4} className="col-xxl-4 mb-3 pr-md-2">
                <OpenTicket className="mb-3" />
              </Col>
            </Row>
          <Avatar
            src={avatarSrc}
            width={200}
            size="5xl"
            rounded="circle"
            className=" avatar-profile"
            mediaClass="img-thumbnail shadow-sm"
          />
          <AgentWidget />
        </Fragment>
    </CardHeader>
  );
};

ProfileBannerHeader.propTypes = {
  coverSrc: PropTypes.string.isRequired,
  avatarSrc: PropTypes.string,
  isEditable: PropTypes.bool
};

ProfileBannerHeader.defaultProps = { isEditable: false };

export default ProfileBannerHeader;

import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import Weather from './Weather';
import StorageStatus from './StorageStatus';
import SpaceWarning from './SpaceWarning';
import WeeklySales from './WeeklySales';
import TotalOrder from './TotalOrder';
import MarketShare from './MarketShare';


import Networth from './Networth';
import BalanceTrend from './BalanceTrend';

import RunningProjects from './RunningProjects';
import SharedFiles from './SharedFiles';
import ActiveUsers from './ActiveUsers';

import TopProducts from './TopProducts';
import TotalSales from './TotalSales';

import ProfileBanner from './ProfileBanner';
import ProfileContent from './ProfileContent';
import ProfileFooter from './ProfileFooter';

import weeklySales from '../../../data/dashboard/weeklySales';
import totalOrder from '../../../data/dashboard/totalOrder';
import marketShare from '../../../data/dashboard/marketShare';
import weather from '../../../data/dashboard/weather';
import storageStatus from '../../../data/dashboard/storageStatus';
import products from '../../../data/dashboard/products';
import files from '../../../data/dashboard/files';
import users from '../../../data/dashboard/users';

const Dashboard = () => {
  const resolveUsers = users.slice(0, 5);
  return (
    <Fragment>
      <ProfileBanner />


      <Row noGutters>
        <Col lg={6} className="mb-3 pr-lg-2 mb-3">
          <RunningProjects projects={products} />
        </Col>
        <Col lg={6} className="mb-3 pl-lg-2 mb-3">
          <TotalSales className="h-lg-100" />
        </Col>
      </Row>





    </Fragment>
  );
};

export default Dashboard;

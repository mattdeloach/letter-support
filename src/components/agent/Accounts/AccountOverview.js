import React, { Fragment, useEffect, useState } from 'react';
import { Row, Col, Card, CardBody, Button, InputGroup, CustomInput } from 'reactstrap';
import CountUp from 'react-countup';
import CardSummary from './CardSummary';
import ActiveUsersBarChart from './ActiveUsersBarChart';
import AccountGraph from './AccountGraph';
import { toast } from 'react-toastify';
import FalconCardHeader from '../../common/FalconCardHeader';
import ButtonIcon from '../../common/ButtonIcon';

import loadable from '@loadable/component';
import DashBoardDepositStatus from './DashboardDepositStatus';
import Subnav from './Subnav';

const PurchasesTable = loadable(() => import('./PurchasesTable'));
const ActiveUsersMap = loadable(() => import('./ActiveUsersMap'));

const AccountOverview = () => {
  // State
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    toast(
      <Fragment>
        Welcome to Letter Support!
      </Fragment>
    );
  }, []);

  return (
    <Fragment>
      <Subnav />
      <AccountGraph />
      <DashBoardDepositStatus />
      <div className="card-deck">
        <CardSummary rate="2.25%" title="Available" color="success" linkText="See History">
          $764,928.39
        </CardSummary>
        <CardSummary rate="0.0%" title="Deposits" color="info" linkText="See Deposits">
          $73,462.00
        </CardSummary>
        <CardSummary rate="9.54%" title="Debits" color="warning" linkText="See Debits">
          $43,593.29
        </CardSummary>
      </div>
      <Card className="mb-3">
        <FalconCardHeader title="Recent Purchases" light={false}>
          {isSelected ? (
            <InputGroup size="sm" className="input-group input-group-sm">
              <CustomInput type="select" id="bulk-select">
                <option>Bulk actions</option>
                <option value="Refund">Refund</option>
                <option value="Delete">Delete</option>
                <option value="Archive">Archive</option>
              </CustomInput>
              <Button color="falcon-default" size="sm" className="ml-2">
                Apply
              </Button>
            </InputGroup>
          ) : (
            <Fragment>
              <ButtonIcon icon="filter" transform="shrink-3 down-2" color="falcon-default" size="sm" className="mx-2">
                Filter
              </ButtonIcon>
              <ButtonIcon icon="external-link-alt" transform="shrink-3 down-2" color="falcon-default" size="sm">
                Export
              </ButtonIcon>
            </Fragment>
          )}
        </FalconCardHeader>
        <CardBody className="p-0">
          <PurchasesTable setIsSelected={setIsSelected} />
        </CardBody>
      </Card>
      <Row noGutters>
        <Col lg="4" className="pr-lg-2">
          <ActiveUsersBarChart />
        </Col>
        <Col lg="8" className="pl-lg-2">
          <ActiveUsersMap />
        </Col>
      </Row>
    </Fragment>
  );
};

export default AccountOverview;

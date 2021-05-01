import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Media,
  Row,
  Table,
  UncontrolledDropdown
} from 'reactstrap';
import Loader from '../../common/Loader';
import ButtonIcon from '../../common/ButtonIcon';
import FalconCardHeader from '../../common/FalconCardHeader';
import FalconCardFooterLink from '../../common/FalconCardFooterLink';
import useFakeFetch from '../../../hooks/useFakeFetch';
import { isIterableArray } from '../../../helpers/utils';
import createMarkup from '../../../helpers/createMarkup';
import rawCustomer from './data/vendor';
import rawCustomerLogs from './data/purchaseHistory';
import Avatar from '../../common/Avatar';
import logo from '../../../assets/img/logos/apple.png';



import Subnav from './Subnav';

const TransactionHeader = () => {
  const { loading, data: customer } = useFakeFetch(rawCustomer);
  const { name, email, createdAt } = customer;

  return (
    <Card className="mb-3">
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <CardHeader className="rounded-bottom">
            <Row>
              <Col>
                <h5 className="mb-2">
                  <ButtonIcon color="falcon-default" size="sm" icon="arrow-left" iconClassName="fs--2" /> &nbsp; Transaction Detail &nbsp;
                  <Badge color={'soft-success'} className="mr-2" pill>

                  <FontAwesomeIcon icon="check" />&nbsp;
                    Repeat Payment
                  </Badge>
                </h5>
                <p className="ml-6">Alerts: <code> none</code></p>
              </Col>
            </Row>
          </CardHeader>
        </Fragment>
      )}
    </Card>
  );
};

const VendorSummary = () => {
  const { loading, data: customer } = useFakeFetch(rawCustomer);
  const { name, email, createdAt } = customer;

  return (
    <Card className="mb-3">
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <CardHeader>
            <Row noGutters>
              <Col>
                <Row noGutters>
                <Avatar
                  src={logo}
                  width={100}
                  size="4xl"
                  rounded="square"
                  className="mb-2"
                  mediaClass="img-thumbnail"
                />
                <div className="mt-2 ml-2">
                  <h5 className="mb-2">
                    Stark Industries
                  </h5>
                  (888) 456-9873<br />
                  starkind.com
                </div>
                <div className="mt-2 ml-10">
                  <br /><p>123 Main St<br />
                  New York, NY 05432-1906</p>
                </div>

                </Row>
                <ButtonIcon color="falcon-default" size="sm" icon="plus" iconClassName="fs--2">
                  Add note
                </ButtonIcon>

                <UncontrolledDropdown className="d-inline-block ml-2">
                  <DropdownToggle color="falcon-default" size="sm">
                    <FontAwesomeIcon icon="ellipsis-h" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem>Report</DropdownItem>
                    <DropdownItem>Archive</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className="text-danger">Delete user</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
              <Col xs="auto" className="d-none d-sm-block">
                <h6 className="text-uppercase text-600">
                  Vendor
                  <FontAwesomeIcon icon="check-square" className="ml-2" />
                </h6>
              </Col>
            </Row>
          </CardHeader>
          <CardBody className="border-top">
            <Media>
              <FontAwesomeIcon icon="check-square" transform="down-5" className="text-success mr-2" />
              <Media body>
                <p className="mb-0">Merchant flagged for fraud</p>
                <p className="fs--1 mb-0 text-600">{createdAt}</p>
              </Media>
            </Media>
          </CardBody>
        </Fragment>
      )}
    </Card>
  );
};

const CustomerDetailRow = ({ title, isLastItem, children }) => (
  <Row>
    <Col xs={5} sm={4}>
      <p
        className={classNames('font-weight-semi-bold', {
          'mb-0': isLastItem,
          'mb-1': !isLastItem
        })}
      >
        {title}
      </p>
    </Col>
    <Col>{children}</Col>
  </Row>
);

CustomerDetailRow.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isLastItem: PropTypes.bool
};

CustomerDetailRow.defaultProps = { last: false };

const CustomerDetail = () => {
  const { loading, data: customer } = useFakeFetch(rawCustomer);
  const { status, id, email, createdAt, description, vat_no, email_to, address, cell, invoice_prefix } = customer;

  return (
    <Card className="mb-3">
      <FalconCardHeader title="$82,239.23">
      </FalconCardHeader>
      <CardBody className="bg-light border-top">
        {loading ? (
          <Loader />
        ) : (
          <Row>
            <Col lg className="col-xxl-5">
              <h6 className="font-weight-semi-bold ls mb-3 text-uppercase">Overview</h6>
              <CustomerDetailRow title="Status">{status}</CustomerDetailRow>
              <CustomerDetailRow title="ID">92348209384</CustomerDetailRow>
              <CustomerDetailRow title="Created">
                {createdAt}
              </CustomerDetailRow>
              <CustomerDetailRow title="Category">
                {description ? description : <p className="font-italic text-400 mb-1">Merchandise</p>}
              </CustomerDetailRow>
              <CustomerDetailRow title="Description" isLastItem>
                {vat_no ? vat_no : <p className="font-italic text-400 mb-0">A super secret laboratory</p>}
              </CustomerDetailRow>
            </Col>
            <Col lg className="col-xxl-5 mt-4 mt-lg-0 offset-xxl-1">
              <h6 className="font-weight-semi-bold ls mb-3 text-uppercase">Internal Details</h6>
              <CustomerDetailRow title="Merchant Code">
                <a href={`mailto:${email_to}`}>000008475136201</a>
              </CustomerDetailRow>
              <CustomerDetailRow title="Transaction Code">
                0HE74CSR 000008475136201
              </CustomerDetailRow>
              <CustomerDetailRow title="Customer Tag">
                none
              </CustomerDetailRow>
              <CustomerDetailRow title="Customer Flag" isLastItem>
                none
              </CustomerDetailRow>
            </Col>
          </Row>
        )}
      </CardBody>
      <CardFooter className="border-top text-right">
        <ButtonIcon tag={Link} color="falcon-default" size="sm" icon="exclamation-circle" to="#!" iconClassName="fs--2">
          Dispute
        </ButtonIcon>
      </CardFooter>
    </Card>
  );
};

const CustomerLog = ({ status, link, time, user, amount, date }) => {
  let badgeColor = 'soft-warning';
  if (status === 404) badgeColor = 'soft-danger';
  else if (status === 200) badgeColor = 'soft-success';

  return (
    <Fragment>
        <tr>
          <td colSpan="1">
            {date}
          </td>
          <td colSpan="1">
            ${amount}
          </td>
          <td colSpan="4">
            <Badge color={badgeColor} pill>
              <p className="mb-0">{user}</p>
            </Badge>
          </td>
        </tr>
        </Fragment>
  );
};

CustomerLog.propTypes = {
  status: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

const CustomerLogs = () => {
  const { loading, data: customerLogs } = useFakeFetch(rawCustomerLogs);

  return (
    <Card>
      <FalconCardHeader title="Purchase History" />
      {loading ? (
        <Loader />
      ) : (
      <CardBody className="border-top p-0">
        <Table striped bordered className="mb-0">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
          {isIterableArray(customerLogs) && customerLogs.map((log, index) => <CustomerLog {...log} key={index} />)}
          </tbody>
        </Table>
      </CardBody>

      )}
      <FalconCardFooterLink title="6 Purchases" to="#!" borderTop={false} />
    </Card>
  );
};

const TransactionDetail = () => (
  <Fragment>
    <Subnav />
    <TransactionHeader />
    <VendorSummary />
    <CustomerDetail />
    <CustomerLogs />
  </Fragment>
);

export default TransactionDetail;

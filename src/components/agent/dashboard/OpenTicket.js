import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../../common/PageHeader';
import { Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const OpenTicket = props => {
  return (
    <PageHeader title="Open Ticket: #2737" titleTag="h5" {...props}>
      <p className="fs--1 mt-1">April 21, 2021, 5:33 PM</p>
      <div>
        <strong className="mr-2">Status: </strong>
        <Badge color="soft-warning" pill className="fs--2">
          In Process
          <FontAwesomeIcon icon="external-link-alt" transform="shrink-2" className=" ml-1" />
        </Badge>
      </div>
    </PageHeader>
  );
};
OpenTicket.propTypes = {
  className: PropTypes.string
};
OpenTicket.defaultProps = {
  className: 'mb-3'
};
export default OpenTicket;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Media, Row } from 'reactstrap';
import HighlightMedia from '../../common/HighlightMedia';
import Avatar from '../../common/Avatar';
import avatarSrc from '../../../assets/img/team/3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const status = 'status-online';

const ClientMenu = ({ noOfFollowers, previousJobs }) => {
  return (
    <Col className="pl-2 pl-lg-3 d-flex align-items-end mb-3">
    <div className="mr-auto">
      <Row>
      <Avatar src={avatarSrc} className={status} size="3xl" />
      <Media body className="align-self-center ml-2">
        <h6 className="mb-0">
          Carol Danvers
        </h6>
        <p className="fs--1 mb-0">online</p>
        <Button color="light" size="sm" className="py-0 mt-1 border" transform="shrink-5">
          <span className="fs--1">Message</span>
        </Button>
      </Media>

      </Row>
      </div>


      <div class="mt-auto">
        <ul class="nav nav-pills mt-auto">
         <li class="nav-item"><a class="nav-link active" href="#">Accounts</a></li>
         <li class="nav-item"><a class="nav-link" href="#">Lending</a></li>
         <li class="nav-item"><a class="nav-link" href="#">Investments</a></li>
         <li class="nav-item"><a class="nav-link" href="#">Digital Office</a></li>
        </ul>
      </div>


    </Col>
  );
};

ClientMenu.propTypes = {
  noOfFollowers: PropTypes.number,
  previousJobs: PropTypes.arrayOf(
    PropTypes.shape({
      institution: PropTypes.string,
      src: PropTypes.string
    })
  )
};

ClientMenu.defaultProps = {
  noOfFollowers: 0,
  previousJobs: []
};

export default ClientMenu;

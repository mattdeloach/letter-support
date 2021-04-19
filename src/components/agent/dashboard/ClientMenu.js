import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Button } from 'reactstrap';
import HighlightMedia from '../../common/HighlightMedia';

const ClientMenu = ({ noOfFollowers, previousJobs }) => {
  return (
    <Col className="pl-2 pl-lg-3 d-flex flex-column align-items-end mb-3">
      <div>
      Agent:
      <Button color="falcon-default" size="sm" className="px-3 ml-2">
        Hannah Ellis
      </Button>

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

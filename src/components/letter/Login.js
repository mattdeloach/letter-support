import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rocket from '../../assets/img/illustrations/rocket.png';

const Login = ({ layout, titleTag: TitleTag }) => {
  return (
    <Fragment>
      <img className="d-block mx-auto mb-4" src={rocket} alt="shield" width={70} />
      <TitleTag>Welcome!</TitleTag>
      <p>
        Please log in with your google credentials
      </p>
      <Button tag={Link} color="primary" size="sm" className="mt-3" to={`/authentication/${layout}/login`}>
        <FontAwesomeIcon icon="chevron-left" transform="shrink-4 down-1" className="mr-1" />
        Login
      </Button>
    </Fragment>
  );
};

Login.propTypes = {
  layout: PropTypes.string,
  titleTag: PropTypes.string
};

Login.defaultProps = {
  layout: 'basic',
  titleTag: 'h4'
};

export default Login;

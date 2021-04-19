import React, { useContext } from 'react';
import { Nav, NavItem, NavLink, UncontrolledTooltip } from 'reactstrap';
import ProfileDropdown from './ProfileDropdown';
import NotificationDropdown from './NotificationDropdown';
import SettingsAnimatedIcon from './SettingsAnimatedIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import AppContext from '../../context/Context';
import classNames from 'classnames';
import { navbarBreakPoint } from '../../config';

const TopNavRightSideNavItem = () => {
  const { isTopNav, isCombo } = useContext(AppContext);
  return (
    <Nav navbar className="navbar-nav-icons ml-auto flex-row align-items-center">
      <NavItem>
        <SettingsAnimatedIcon />
      </NavItem>
      <NotificationDropdown />
      <ProfileDropdown />
    </Nav>
  );
};

export default TopNavRightSideNavItem;

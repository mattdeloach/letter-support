import React, { useContext } from 'react';
import { Collapse, Navbar, NavItem, Nav } from 'reactstrap';
import classNames from 'classnames';
import AppContext from '../../context/Context';
import SearchBox from './SearchBox';
import TopNavRightSideNavItem from './TopNavRightSideNavItem';
import NavbarTopDropDownMenus from './NavbarTopDropDownMenus';
import { navbarBreakPoint, topNavbarBreakpoint } from '../../config';
import autoCompleteInitialItem from '../../data/autocomplete/autocomplete';

const NavbarTop = () => {
  const {
    showBurgerMenu,
    setShowBurgerMenu,
    isTopNav,
    isVertical,
    isCombo,
    navbarCollapsed,
    setNavbarCollapsed
  } = useContext(AppContext);
  const handleBurgerMenu = () => {
    isTopNav && !isCombo && setNavbarCollapsed(!navbarCollapsed);
    (isCombo || isVertical) && setShowBurgerMenu(!showBurgerMenu);
  };
  return (
    <Navbar
      light
      className="navbar-glass fs--1 font-weight-semi-bold row navbar-top sticky-kit"
    >
        <button className="btn rounded-capsule btn-outline-success mr-1 mb-1" type="button">
          Complete Session
        </button>
        <button className="btn-sm btn-danger mr-1 mb-1" type="button">
          This is an urgent notification
        </button>
      <TopNavRightSideNavItem />
    </Navbar>
  );
};

export default NavbarTop;

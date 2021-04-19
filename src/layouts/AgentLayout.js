import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import DashboardAlt from '../components/dashboard-alt/DashboardAlt';
import NavbarTop from '../components/navbar/NavbarTop';
import NavbarVertical from '../components/navbar/NavbarVertical';
import Footer from '../components/footer/Footer';
import AgentFooter from '../components/footer/AgentFooter';
import loadable from '@loadable/component';
import AppContext from '../context/Context';
import ProductProvider from '../components/e-commerce/ProductProvider';
import SidePanelModal from '../components/faq-panel/SidePanelModal';
import { getPageName } from '../helpers/utils';
import AgentNav from './navbar/AgentNav';

const AgentRoutes = loadable(() => import('./AgentRoutes'));

const AgentLayout = ({ location }) => {
  const { isFluid, isVertical, navbarStyle } = useContext(AppContext);

  const isKanban = getPageName('kanban');

  useEffect(() => {
    AgentRoutes.preload();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={isFluid || isKanban ? 'container-fluid' : 'container'}>
      <ProductProvider>
        <div className="content">
          <AgentNav />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/dashboard-alt" exact component={DashboardAlt} />
            <AgentRoutes />
          </Switch>
          {!isKanban && <AgentFooter />}
        </div>
        <SidePanelModal path={location.pathname} />
      </ProductProvider>
    </div>
  );
};

AgentLayout.propTypes = { location: PropTypes.object.isRequired };

export default AgentLayout;

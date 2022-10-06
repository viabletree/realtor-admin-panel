import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery, Box } from '@material-ui/core';
import { MenuItemLink } from 'react-admin';
import SubMenu from './SubMenu';

import PropTypes from 'prop-types';

import Users from '../Users';
import Properties from '../Properties';
import PropertySeller from '../PropertySellers';
import PropertyBuyer from '../PropertyBuyers';
import Notes from '../Notes';
import Setting from '../Setting';
import Faqs from '../Faqs';
import Showings from '../Showings';
import Subscriptions from '../Subscriptions';
import Reports from '../Reports';


const Menu = ({ onMenuClick, logout, dense = false }) => {
  const [state, setState] = useState({
    menuUsers: false,
    menuProperties: false,

  });
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const open = useSelector((state) => state.admin.ui.sidebarOpen);
  useSelector((state) => state.theme); // force rerender on theme change

  const handleToggle = (menu) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <Box mt={1}>

      {/* {* users menu *} */}
      <SubMenu
        handleToggle={() => handleToggle('menuUsers')}
        isOpen={state.menuUsers}
        sidebarIsOpen={open}
        name="Users"
        icon={<Users.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={'/users'}
          primaryText={'List'}
          leftIcon={<Users.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle('menuProperties')}
        isOpen={state.menuProperties}
        sidebarIsOpen={open}
        name="Properties"
        icon={<Properties.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={'/properties'}
          primaryText={'List'}
          leftIcon={<Properties.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu>
      {/* <SubMenu
        handleToggle={() => handleToggle('menuPropertyTypes')}
        isOpen={state.menuPropertyTypes}
        sidebarIsOpen={open}
        name="PropertyTypes"
        icon={<Users.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={'/property_types'}
          primaryText={'List'}
          leftIcon={<Users.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu> */}
      <SubMenu
        handleToggle={() => handleToggle('menuPropertyBuyers')}
        isOpen={state.menuPropertyBuyers}
        sidebarIsOpen={open}
        name="PropertyBuyers"
        icon={<PropertyBuyer.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={'/property_buyers'}
          primaryText={'List'}
          leftIcon={<PropertyBuyer.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle('menuPropertySellers')}
        isOpen={state.menuPropertySellers}
        sidebarIsOpen={open}
        name="PropertySellers"
        icon={<PropertySeller.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={'/property_sellers'}
          primaryText={'List'}
          leftIcon={<PropertySeller.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle('menuNotes')}
        isOpen={state.menuNotes}
        sidebarIsOpen={open}
        name="Notes"
        icon={<Notes.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={'/notes'}
          primaryText={'List'}
          leftIcon={<Notes.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu> 
      <SubMenu
        handleToggle={() => handleToggle('menuShowings')}
        isOpen={state.menuShowings}
        sidebarIsOpen={open}
        name="Showings"
        icon={<Showings.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={'/showings'}
          primaryText={'List'}
          leftIcon={<Showings.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle('menuFaqs')}
        isOpen={state.menuFaqs}
        sidebarIsOpen={open}
        name="Faqs"
        icon={<Faqs.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={'/faqs'}
          primaryText={'List'}
          leftIcon={<Faqs.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle('menuSetting')}
        isOpen={state.menuSetting}
        sidebarIsOpen={open}
        name="Setting"
        icon={<Setting.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={'/setting'}
          primaryText={'List'}
          leftIcon={<Notes.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
</SubMenu>
<SubMenu
        handleToggle={() => handleToggle('menuSubscriptions')}
        isOpen={state.menuSubscriptions}
        sidebarIsOpen={open}
        name="Subscriptions"
        icon={<Subscriptions.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={'/subscriptions'}
          primaryText={'List'}
          leftIcon={<Notes.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
</SubMenu>
<SubMenu
        handleToggle={() => handleToggle('menuReports')}
        isOpen={state.menuReports}
        sidebarIsOpen={open}
        name="Reports"
        icon={<Reports.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={'/Reports'}
          primaryText={'List'}
          leftIcon={<Reports.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
</SubMenu>

      {logout}
    </Box>
  );
};

Menu.propTypes = {
  onMenuClick: PropTypes.func,
  logout: PropTypes.any,
  dense: PropTypes.bool
};

export default Menu;

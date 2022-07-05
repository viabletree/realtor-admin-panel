import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery, Box } from '@material-ui/core';
import { MenuItemLink } from 'react-admin';
import SubMenu from './SubMenu';

import PropTypes from 'prop-types';

import Users from '../Users';

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
        icon={<Users.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={'/properties'}
          primaryText={'List'}
          leftIcon={<Users.icon />}
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
        icon={<Users.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={'/property_buyers'}
          primaryText={'List'}
          leftIcon={<Users.icon />}
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
        icon={<Users.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={'/property_sellers'}
          primaryText={'List'}
          leftIcon={<Users.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu>

      {isXSmall && logout}
    </Box>
  );
};

Menu.propTypes = {
  onMenuClick: PropTypes.func,
  logout: PropTypes.any,
  dense: PropTypes.bool
};

export default Menu;

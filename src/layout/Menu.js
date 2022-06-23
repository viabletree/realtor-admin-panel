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
    menuEvents: false,
    menuSeasons: false,
    menuSessions: false,
    menuPosts: false,
    menuFeaturedPosts: false,
    menuPostReports: false,
    menuInterests: false,
    menuHashtags: false,
    menuPages: false,
    menuFacilities: false,
    menuGroups: false,
    menuMeetings: false,
    menuSearchedkeywords: false,
    menuFeedbacks: false,

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

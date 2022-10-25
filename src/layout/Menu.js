import { forwardRef, useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery, Box } from "@material-ui/core";
import { MenuItemLink, useLogout } from "react-admin";
import SubMenu from "./SubMenu";

import PropTypes from "prop-types";

import Users from "../Users";
import Properties from "../Properties";
import PropertySeller from "../PropertySellers";
import PropertyBuyer from "../PropertyBuyers";
import Notes from "../Notes";
import Setting from "../Setting";
import Faqs from "../Faqs";
import Showings from "../Showings";
import Subscriptions from "../Subscriptions";
import Reports from "../Reports";
import { Button, Grid, MenuItem, Modal, Typography } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { Check, CheckCircle, Close, ErrorOutline } from "@material-ui/icons";

const Menu = ({ onMenuClick, logout, dense = false }) => {
  const [state, setState] = useState({
    menuUsers: false,
    menuProperties: false,
  });

  const [isOpen, setIsOpen] = useState(false);
  const logoutHook = useLogout();

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleLogout = () => {
    setIsOpen(false);
    logoutHook();
    //localStorage.removeItem("email")
    //localStorage.removeItem("password")
  };
  // const MyLogoutButton = forwardRef((props, ref) => {
  //   const logout = useLogout();
  //   const handleClick = () => {
  //     setIsOpen(false);
  //     logout();
  //   };
  //   return (
  //     <MenuItem onClick={handleClick} ref={ref}>
  //       <Logout /> Logout
  //     </MenuItem>
  //   );
  // });

  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const open = useSelector((state) => state.admin.ui.sidebarOpen);
  useSelector((state) => state.theme); // force rerender on theme change

  const handleToggle = (menu) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalWrap">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Do yo want to logout?
          </Typography>
          <Grid container justifyContent={"flex-end"} style={{ padding: 8 }}>
            <Grid item>
              <Button
                onClick={handleClose}
                style={{ color: "#000" }}
                startIcon={<Close />}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={handleLogout}
                color="primary"
                startIcon={<CheckCircle />}
              >
                Confirm
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Box mt={1}>
        {/* {* users menu *} */}
          <MenuItemLink
            to={"/users"}
            primaryText={"Users"}
            leftIcon={<Users.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <MenuItemLink
            to={"/properties"}
            primaryText={"Properties"}
            leftIcon={<Properties.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
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
          <MenuItemLink
            to={"/property_buyers"}
            primaryText={"Property Buyer"}
            leftIcon={<PropertyBuyer.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <MenuItemLink
            to={"/property_sellers"}
            primaryText={"Property Seller"}
            leftIcon={<PropertySeller.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <MenuItemLink
            to={"/notes"}
            primaryText={"Notes"}
            leftIcon={<Notes.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <MenuItemLink
            to={"/showings"}
            primaryText={"Showings"}
            leftIcon={<Showings.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <MenuItemLink
            to={"/faqs"}
            primaryText={"Faqs"}
            leftIcon={<Faqs.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <MenuItemLink
            to={"/setting"}
            primaryText={"Settings"}
            leftIcon={<Setting.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <MenuItemLink
            to={"/subscriptions"}
            primaryText={"Subscriptions"}
            leftIcon={<Subscriptions.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <MenuItemLink
            to={"/Reports"}
            primaryText={"Reports"}
            leftIcon={<Reports.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
        <MenuItem onClick={handleOpen} className="logoutMenuWrap">
          <div>
            <Logout />
          </div>
          <span> Logout</span>
        </MenuItem>
      </Box>
    </>
  );
};

Menu.propTypes = {
  onMenuClick: PropTypes.func,
  logout: PropTypes.any,
  dense: PropTypes.bool,
};

export default Menu;

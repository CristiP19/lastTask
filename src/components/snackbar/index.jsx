import React, {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import SettingsIcon from "@mui/icons-material/Settings";
import StyledDrawer from "./styled";
import CloseIcon from "@mui/icons-material/CloseRounded";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

const SidebarMenu = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>
        <SettingsIcon/>
      </Button>
      <StyledDrawer anchor="right" open={isDrawerOpen} onClose={handleClose}>
        <Box className="drawerHeader">
          <Typography>Settings</Typography>
          <Button onClick={handleClose} className="closeBtn">
            <CloseIcon/>
          </Button>
        </Box>
        <Divider/>
        <Link to="/categoriesTable"> <Button>Categories Table</Button> </Link>
        <Link to="/productsTable"> <Button>Products Table</Button> </Link>
      </StyledDrawer>
    </>
  );
};

export default SidebarMenu;

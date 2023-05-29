import React, {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import SettingsIcon from "@mui/icons-material/Settings";
import StyledDrawer from "./styled";
import CloseIcon from "@mui/icons-material/CloseRounded";
import {Alert, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import api from "../../api";

const SidebarMenu = () => {
  const [error, setError] = useState("");

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  const handleLogout = async () => {
      try {
        await api.auth().logout();
        localStorage.setItem("user", "")
      } catch (error) {
        if (error.message) {
          setError(error.message);
        } else {
          setError("An error occurred while resetting the password.");
        }
    }
  }

  return (
    <>
      <Button onClick={handleOpen}>
          <SettingsIcon/>
      </Button>
      <Button onClick={handleLogout}>Logout</Button>
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
      {error && (
        <Alert severity="error" style={{ marginTop: "1rem" }}>
          {error}
        </Alert>
      )}
    </>
  );
};

export default SidebarMenu;

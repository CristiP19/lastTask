import React, {useState} from "react";
import StyledNavbar from "./styled";
import Toolbar from "@mui/material/Toolbar";
import {Container, Menu, Stack,} from "@mui/material";
import {Link} from "react-router-dom";
import {Box} from "@material-ui/core";
import SidebarMenu from "components/snackbar";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <StyledNavbar position={"static"}>
        <Container className="navbarContainer">
          <Toolbar className="navbarToolbar" disableGutters>
            <Box className="navbarLogoItems">
              <Stack>
                <Link to={"/"} className="navbarTitle">
                  NanoIT
                </Link>
              </Stack>
            </Box>
            <Box className="navbarMenu">
              <Box className="navbarMenu">
                <Menu
                    className="navbarExpandedMenu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                </Menu>
              </Box>
              <SidebarMenu />
            </Box>
          </Toolbar>
        </Container>
      </StyledNavbar>
  );
};

export default Navbar;

import { AppBar } from "@mui/material";
import { styled } from "@mui/system";

const StyledNavbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.bgSecondary.main,
  height: 90,
  display: "flex",
  justifyContent: "center",
  marginBottom: "70px",
  fontFamily: "Abel",
  ".navbarContainer": {
    maxWidth: 1620,
    padding: "0px",
    margin: "0 auto",
  },
  ".navbarToolbar": {
    display: "flex",
    justifyContent: "space-between",
  },
  ".navbarLogoItems": {
    display: "flex",
  },
  ".navbarLogo": {
    height: "85px",
    width: "90px",
  },
  ".navbarTitle": {
    color: theme.palette.textPrimary.main,
    textDecoration: "none",
    fontSize: 34,
    marginLeft: "2rem",
    lineHeight: "60px",
    fontWeight: "600",
  },
  ".navbarSubTitle": {
    color: theme.palette.textPrimary.main,
    textDecoration: "none",
    fontSize: 16,
    lineHeight: "1px",
  },
  ".navbarMenuLink": {
    position: "relative",
    padding: "6px 25px",
    fontSize: 16,
    textDecoration: "none",
    color: theme.palette.textSecondary.main,
    "&:hover": {
      color: theme.palette.textPrimary.main,
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
  ".navbarLogoImg": {
    height: "64px",
    width: "60px",
  },
  ".navbarMenu": {
    display: "flex",
    alignItems: "center",
  },

  ".navbarMenuUser": {
    display: "flex",
    alignItems: "center",
  },
  ".navbarMenuArrow": {
    color: theme.palette.secondary.main,
  },
  ".navbarUser": {
    height: "32px",
    width: "32px",
    margin: "0px 8px 0px 25px",
    backgroundColor: "green",
    borderRadius: "50%",
    fontSize: 16,
  },
  ".navbarProfile": {
    color: theme.palette.textSecondary.main,
    fontSize: 16,
    lineHeight: "18px",
    textDecoration: "none",
  },
  ".navbarOpenMenu": {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  ".buttonLanguages": {
    margin: "2px 0",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
}));
export const StyledButtonLang = styled("img")(() => ({
  width: "20px",
  height: "20px",
  cursor: "pointer",
  margin: "2px 0",
}));
export const StackButtonLang = styled("stack")(() => ({
  left: "100px"
}));

export default StyledNavbar;

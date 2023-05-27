import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    bgPrimary: {
      main: "#EBE8EC",
    },
    primary: {
      main: "#5255C8",
      contrastText: "#ffffff",
      dark: "#ffa318",
    },
    secondary: {
      main: "rgba(0, 0, 0, 0.6)",
      contrastText: "#ffffff",
      dark: "#333333",
    },
    bgSecondary: {
      main: "#ffffff",
    },
    textPrimary: {
      main: "#5255C8",
    },
    textSecondary: {
      main: "rgba(0, 0, 0, 0.6)",
    },
  },
  typography: {
    fontFamily: "Abel, sans-serif",
    fontWeightSemibold: 600,
    fontWeight: 400,
    fontSize: 15,
    h1: {
      fontFamily: "Abel, sans-serif",
      fontWeight: 600,
      fontSize: 36,
    },
    h2: {
      fontFamily: "Abel, sans-serif",
      fontWeight: 600,
      fontSize: 32,
    },
    title: {
      fontFamily: "Abel, sans-serif",
      fontWeight: 600,
      fontSize: 15,
    },
  },
});

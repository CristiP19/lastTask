import { styled } from "@mui/system";

export const LoginDivStyle = styled("div")(() => ({
  width: "50vw",
  height: "100vh",
  backgroundColor: "white",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  ".auth-subtitle": {
    color: "rgba(0, 0, 0, 0.6)",
  },
}));

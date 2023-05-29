import { styled } from "@mui/system";

export const StyledTextInput = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: "1rem",

  "& .MuiTextField-root": {
    width: "17rem",
    textAlign: "center",
  },

  "& .MuiInputBase-root": {
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#FFFFFF",
    "&:focus": {
      outline: "none",
    },
  },
}));

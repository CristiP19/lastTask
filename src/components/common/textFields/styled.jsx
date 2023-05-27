
import { styled } from "@mui/system";

const StyledTextInput = styled("div")(() => ({
  width: "100%",
  ".MuiInputBase-root ": {
    height: "57px",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#FFFFFF",
    "&:focus": {
      outline: "none",
    },
  },
  "#large": {
    width: "100%",
  },
  "#small": {
    width: "220px",

  },
}));

export { StyledTextInput };

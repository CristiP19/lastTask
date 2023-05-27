import { styled } from "@mui/system";

const commonInputStyles = {
  height: "57px",
  border: "none",
  borderRadius: "20px",
  padding: "10px",
  "&:focus": {
    outline: "none",
  },
};

const StyledSelectInput = styled("div")(() => ({
  width: "100%",
  ".MuiInputBase-root": {
    borderRadius: "20px",
    backgroundColor: "#FFFFFF",
    border: "none",
    "&:focus": {
      outline: "none",
    },
  },
  "#small": {
    width: "220px",
  },
  "#large": {
    width: "100%",
  },
}));

const StyledPasswordInput = styled("div")(() => ({
  ".css-1vi09us-MuiInputBase-root-MuiOutlinedInput-root": {
    ...commonInputStyles,
    backgroundColor: "#FFFFFF",
  },
}));

export {StyledSelectInput, StyledPasswordInput };

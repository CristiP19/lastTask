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

const StyledPasswordInput = styled("div")(() => ({
  ".css-1vi09us-MuiInputBase-root-MuiOutlinedInput-root": {
    ...commonInputStyles,
    backgroundColor: "#FFFFFF",
  },
}));

export { StyledPasswordInput };

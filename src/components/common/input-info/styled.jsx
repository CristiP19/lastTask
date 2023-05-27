import { Stack } from "@mui/material";
import { styled } from "@mui/system";

const CustomStack = styled(Stack)(({ theme }) => ({
  alignItems: "flex-end",
  paddingBottom: "50px",
  paddingRight: "20px",
  fontFamily: "Abel",
  ".title": {
    fontSize: "16px",
    lineHeight: "24px",
  },
  ".subtitle": {
    fontSize: "12px",
    lineHeight: "20px",
  },
  ".stackContainer": {
    display: "flex",
    justifyContent: "end",
  },
}));

export default CustomStack;
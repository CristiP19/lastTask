import { Button } from "@mui/material";
import { styled } from "@mui/system";

const ButtonStyled = styled(Button)(() => ({
  marginLeft: "20px",
  width: "260px",
  height: "60px",
  borderRadius: "30px",
  backgroundColor: "#FFF",
  color: "#000",
  display: "flex",
  margin: "0 auto",
  ".arrows": {
    margin: "10px",
  },
}));

export { ButtonStyled };

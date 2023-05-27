import { styled } from "@mui/system";
const StyledWrapper = styled("div")(() => ({
  left: "0",
  width: "100%",
  "#main": {
    maxWidth: "1550px",
  },
  "#newOrder": {
    maxWidth: "850px",
  },
  "#flex": {
    display: "flex",
    maxWidth: "850px",
    justifyContent: "center",
    textAlign: "center",  
  },
  ".serviceTitle": {
    fontSize: "23px",
    fontFamily: "Acme",
    marginBottom: "20px",
  },
  ".dataValues": {
    fontSize: "21px",
    fontFamily: "Abel"
  }
}));
export default StyledWrapper;

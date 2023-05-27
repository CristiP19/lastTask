import {Drawer} from "@mui/material";
import {styled} from "@mui/system";

const StyledDrawer = styled(Drawer)(() => ({
  ".MuiDrawer-paper": {
    width: "350px",
    borderRadius: "10px 0px 0px 10px",
  },
  ".drawerHeader": {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
    alignItems: "center",
  },
  ".closeBtn": {
    borderRadius: "30px",
  },
  ".groupBtn": {
    height: " 80px",
    padding: "15px",
  },
  ".action": {
    padding: "16px",
  },
}));

export default StyledDrawer;


import { styled } from "@mui/system";

export const InfoTableStyled = styled("div")(({ theme }) => ({
  ".paper": {
    padding: theme.spacing(2),
  },
  ".label": {
    fontWeight: "bold",
    marginRight: theme.spacing(1),
  },
}));

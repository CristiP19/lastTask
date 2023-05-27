import { Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import React from "react";
import { CustomError } from "./styled";

const ErrorMessage = ({ message }) => {
  return (
    <CustomError>
      <ErrorIcon color="error" sx={{ width: "20px" }} />
      <Typography color="error.main" fontSize="14px">
        {message}
      </Typography>
    </CustomError>
  );
};

export default ErrorMessage;

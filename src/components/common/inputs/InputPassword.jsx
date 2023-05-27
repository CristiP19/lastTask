import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import ErrorMessage from "../error";
import React, { useState } from "react";
import { StyledPasswordInput } from "./styled";
import { IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const InputPassword = ({
                         label,
                         control,
                         name,
                         errors,
                         id,
                         placeholder,
                       }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleVisibilityToggle = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  return (
    <StyledPasswordInput>
      <FormControl id={id} fullWidth sx={{ mb: "1rem" }}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={label}
              placeholder={placeholder}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleVisibilityToggle}>
                    {isPasswordVisible ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                ),
              }}
              type={isPasswordVisible ? "text" : "password"}
            />
          )}
        />
        {errors[name] ? (
          <ErrorMessage message={errors[name].message} />
        ) : null}
      </FormControl>
    </StyledPasswordInput>
  );
};

export default InputPassword;

import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import ErrorMessage from "../error";
import React from "react";
import { StyledTextInput } from "./styled";

const TextFields = ({
                       label,
                       inputProps,
                       control,
                       name,
                       errors,
                       id,
                       placeholder,
                       type = "text"
                     }) => {
  return (
    <StyledTextInput>
      <FormControl
        className="orederInput"
        id={id}
        fullWidth
        sx={{ mb: "1rem" }}
      >
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={label}
              placeholder={placeholder}
              variant="outlined"
              InputProps={inputProps}
              type={type}
            />
          )}
        />
        {errors && errors[name] ? (
          <ErrorMessage message={errors[name].message} />
        ) : null}
      </FormControl>
    </StyledTextInput>
  );
};

export default TextFields;

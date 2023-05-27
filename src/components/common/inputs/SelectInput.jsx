import { FormControl } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import ErrorMessage from "../error";
import React from "react";
import { StyledSelectInput } from "./styled";

const SelectInput = ({
                       label,
                       options,
                       control,
                       name,
                       errors,
                       id,
                       defaultValue,
                     }) => {
  return (
    <StyledSelectInput>
      <FormControl className="orderInput" id={id} fullWidth sx={{ mb: "1rem" }}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Autocomplete
              {...field}
              options={options}
              getOptionLabel={(option) => option.name || ""}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={label}
                  variant="outlined"
                />
              )}
              onChange={(_, data) => {
                field.onChange(data);
              }}
              value={
                options.find((option) => option.id === field.value) ||
                defaultValue ||
                null
              }
            />
          )}
          defaultValue={defaultValue || null}
        />
        {errors[name] && (
          <ErrorMessage message={errors[name].message}/>
        )}
      </FormControl>
    </StyledSelectInput>
  );
};

export default SelectInput;

import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Alert, Typography} from "@mui/material";
import TextFields from "components/common/textFields";
import Button from "components/common/button";
import api from "api";
import {StyledTextInput} from "./styled";

const PasswordResetPage = () => {
  const [error, setError] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    const token = JSON.parse(localStorage.getItem("user"))?.accessToken
    try {
      await api.auth().resetPassword({...data, token: token });
    } catch (error) {
      if (error.message) {
        setError(error.message);
      } else {
        setError("An error occurred while resetting the password.");
      }
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <Typography variant="h5" align="center" style={{ marginBottom: "1rem" }}>
          Password Reset
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledTextInput>
            <TextFields
              label="New Password"
              name="password"
              type="password"
              control={control}
              error={!!errors.newPassword}
              helperText={errors.newPassword?.message}
            />
            <TextFields
              label="Confirm Password"
              name="passwordConfirmation"
              type="password"
              control={control}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          </StyledTextInput>
          <Button type="submit">Reset Password</Button>
        </form>
        {error && (
          <Alert severity="error" style={{ marginTop: "1rem" }}>
            {error}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default PasswordResetPage;

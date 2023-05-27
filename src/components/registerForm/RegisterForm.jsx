import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import {useForm} from "react-hook-form";
import TextFields from "components/common/textFields";
import Button from "components/common/button";
import InputPassword from "components/common/inputs/InputPassword";
import {Link} from "react-router-dom";
import api from "api";

const RegisterForm = () => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.auth().register({...data, roles: "user"});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Register</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFields
          control={control}
          name={"firstName"}
          errors={errors}
          placeholder={"First Name"}
        />
        <TextFields
          control={control}
          name={"lastName"}
          errors={errors}
          placeholder={"Last Name"}
        />
        <TextFields
          control={control}
          name={"email"}
          errors={errors}
          placeholder={"Email"}
        />
        <InputPassword
          control={control}
          name={"password"}
          errors={errors}
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <InputPassword
          control={control}
          name={"confirmPassword"}
          errors={errors}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <Typography mb={1} align="center" variant="subtitle1">
          Do you already have an account?<Link to="/login">Log in</Link>
        </Typography>
        <Button type="submit" value="Submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;

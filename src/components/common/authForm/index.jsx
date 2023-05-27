import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import {LoginDivStyle} from "./styled";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "store/slices/userSlice";
import TextFields from "components/common/textFields";
import Button from "components/common/button";
import InputPassword from "components/common/inputs/InputPassword";
import api from "api";

const AuthForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const redirectToHome = () => {
    window.open("/", "_parent");
  };

  const onSubmit = async (data) => {
    try {
      const responseData = await api.auth().login(data);
      localStorage.setItem("user", JSON.stringify(responseData));
      dispatch(setUser(responseData));
      redirectToHome();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginDivStyle>
      <Typography variant="h4">Login</Typography>
      <Typography mb={2} variant="subtitle1" className="auth-subtitle">
        Login to have access
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFields
          control={control}
          name="email"
          errors={errors}
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <InputPassword
          control={control}
          name="password"
          errors={errors}
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Typography mb={1} align="center" variant="subtitle1">
          Do not have an account? <Link to="/register">Register</Link>
        </Typography>
        <Button type="submit">Login</Button>
      </form>
    </LoginDivStyle>
  );
};

export default AuthForm;

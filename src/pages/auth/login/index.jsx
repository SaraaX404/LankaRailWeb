import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import {Lock,AccountCircle} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../slices/authSlice";
import train from "../../../assets/img/train.jpg";

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await dispatch(login({ requestData: data, navigate }));
  };
  return (
    <div container style={{ height: "auto", padding: "50px 10px" }}>
        <div style={{ margin: "0 auto", borderRadius: "50%" }} align="center">
          <img
            src={train}
            width={150}
            height={150}
            alt=""
            style={{ borderRadius: "50%" }}
          />
          <h2 align="center">SIGNIN</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={3}></Grid>

            <Grid
              container
              spacing={2}
              item
              xs={6}
              sx={{ padding: "50px 10px" }}
            >
              <Grid item xs={12}>
                <TextField
                  id="email-outline"
                  label="Email"
                  name="email"
                  {...register("email", {
                    required: "Email is required.",
                  })}
                  fullWidth
                  sx={{ marginRight: "10px" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  {...register("email", {
                    required: "Email is required.",
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                  })}
                  error={errors?.email}
                  helperText={errors.email?.message}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password-outline"
                  label="Password"
                  type="password"
                  name="password"
                  {...register("password", {
                    required: "Password is required.",
                  })}
                  fullWidth
                  sx={{ marginRight: "10px" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                  }}
                  helperText={errors.password?.message}
                  error={errors?.password}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{color:"white",backgroundColor:'#34495e'}}
                  fullWidth
                  disableElevation
                >
                  SignIn
                </Button>
              </Grid>
              <Grid container item xs={12}>
                <Grid xs={6}>
                   <a href="/forget-password">Forget Password</a>  
                </Grid>
                <Grid xs={2}></Grid>
                <Grid xs={4}>
                   <a href="/register">Create a New Account ?</a> 
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </form>
    </div>
  );
};

export default Index;

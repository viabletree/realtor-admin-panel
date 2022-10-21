import React, { useState } from "react";
import { fetchUtils, Link, PasswordInput, useRedirect } from "react-admin";

import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import Logo from "../assets/logo.svg";
import { paperStyle, avatarStyle, btnStyle, gridStyle } from "../myStyles";
import logo from "../assets/logo.svg";
import { BASE_URL } from "../constants";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Lock, Visibility, VisibilityOff } from "@material-ui/icons";

export default function MyLoginPage(props) {
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [emailAdd, setEmailAdd] = useState("");
  const [oneTimePswd, setOneTimePswd] = useState("");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const redirect = useRedirect();
  const handleRememberMe = (event) => {
    setIsRememberMe(event.target.checked);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  let getResponseEmail = localStorage.getItem("email");

  const handleSubmit = (event) => {
    event.preventDefault();
    let body = JSON.parse(
      JSON.stringify({
        email: getResponseEmail,
        password: values.password,
        otp: oneTimePswd,
      })
    );
    let url = BASE_URL + "/forget-password/confirm-otp";
    let options = {};

    options.headers = new Headers({ Accept: "application/json" });
    options.method = "POST";
    options.body = JSON.stringify(body);
    fetchUtils
      .fetchJson(url, options)

      .then((data) => {
        if (data.status == 200 && data.json.status == true) {
          localStorage.setItem("token", data.json.data.token);
          redirect("/reset-password");
          alert("Valid otp");
        } else {
          alert(data.json.message);
          //this.props.history.push("/reset-password");
        }
      })
      .catch((err, ...rest) => {});
  };

  return (
    <div style={gridStyle}>
      <Grid style={{ marginTop: "6em" }}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <img src={Logo} alt="My-Rlty" width={"142px"} />
          </Grid>
          <form noValidate onSubmit={handleSubmit} autoComplete="off">
            {/* <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              type="email"
              name="email"
              value={emailAdd}
              onChange={(e) => setEmailAdd(e.target.value)}
            /> */}
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="otp"
              label="OTP"
              type="text"
              name="otp"
              value={oneTimePswd}
              onChange={(e) => setOneTimePswd(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              style={btnStyle}
              fullWidth
            >
              Next
            </Button>
            <Grid
              spacing={22}
              container
              alignItems="center"
              justifyContent="space-between"
            ></Grid>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}

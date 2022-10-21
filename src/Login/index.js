import React, { useEffect, useState } from "react";
import _ from "lodash";
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
  const localEmail = localStorage.getItem("email");
  const localPass = localStorage.getItem("password");

  useEffect(() => {
    !_.isEmpty(localEmail) && setEmailAdd(localEmail);
    !_.isEmpty(localPass) && setValues({ ...values, password: localPass });
    !_.isEmpty(localPass && localEmail) && setIsRememberMe(true);
  }, [isRememberMe]);
  // debugger
  // if(!_.isEmpty(localEmail) && !_.isEmpty(localPass)){
  //   setIsRememberMe(true)
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    let body = JSON.parse(
      JSON.stringify({ email: emailAdd, password: values.password })
    );
    let url = BASE_URL + "/login";
    let options = {};

    options.headers = new Headers({ Accept: "application/json" });
    options.method = "POST";
    options.body = JSON.stringify(body);
    fetchUtils
      .fetchJson(url, options)
      .then((data) => {
        debugger;
        if (data.json.data.isAdmin == 1) {
          localStorage.removeItem("not_authenticated");
          localStorage.setItem("auth", data.json.data.access_token);
          if (isRememberMe === true) {
            localStorage.setItem("email", emailAdd);
            localStorage.setItem("password", values.password);
          }
          redirect("/users");
        } else {
          alert("invalid credentials");
          this.props.history.push("/login");
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
            <TextField
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
            />

            <TextField
              variant="standard"
              margin="normal"
              name="password"
              id="password"
              fullWidth
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              //  value={values.password}
              onChange={handleChange("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Password"
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
            >
              <Grid item>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isRememberMe}
                        onChange={handleRememberMe}
                        name="checkedA"
                      />
                    }
                    label="RememberMe"
                  />
                </FormGroup>
              </Grid>
              <Grid item>
                <Link to="/forgot-password">Forgot Password</Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}

import React, { useRef, useState } from "react";
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
import _ from "lodash";

export default function MyLoginPage(props) {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [confirmPswdMsg, setConfirmPswdMsg] = useState("");
  const [confirmPswdValues, setConfirmPswdValues] = useState({
    confirmPassword: "",
    showConfirmPassword: false,
  });

  const pswdRef = useRef(null);
  const confrimPswdRef = useRef(null);

  const [isValidPswd, setIsValidPswd] = useState(true);
  const [isValidConfirmPswd, setIsValidConfirmPswd] = useState(true);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setIsValidPswd(true);
  };
  const handleChangeConfirmPswd = (prop) => (event) => {
    setConfirmPswdValues({ ...confirmPswdValues, [prop]: event.target.value });
    setIsValidConfirmPswd(true);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowConfirmPassword = () => {
    setConfirmPswdValues({
      ...confirmPswdValues,
      showConfirmPassword: !confirmPswdValues.showConfirmPassword,
    });
  };
  const redirect = useRedirect();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let getResponseToken = localStorage.getItem("token");
  let getResponseEmail = localStorage.getItem("email");

  // Form validation

  const validateForm = () => {
    let isValid = true;
    setIsValidPswd(true);
    setIsValidConfirmPswd(true);
    // required check
    if (_.isEmpty(values.password)) {
      pswdRef.current.focus();
      setIsValidPswd(false);
      isValid = false;
    }
    if (_.isEmpty(confirmPswdValues.confirmPassword)) {
      confrimPswdRef.current.focus();
      setIsValidConfirmPswd(false);
      isValid = false;
      setConfirmPswdMsg("Confirm password should not be empty");
    }
    if (values.password != confirmPswdValues.confirmPassword) {
      confrimPswdRef.current.focus();
      setIsValidConfirmPswd(false);
      isValid = false;
      setConfirmPswdMsg("Confirm password should be same as password");
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      let body = JSON.parse(
        JSON.stringify({
          password: values.password,
          token: getResponseToken,
          email: getResponseEmail,
        })
      );
      let url = BASE_URL + "/forget-password/change-password";
      let options = {};

      options.headers = new Headers({ Accept: "application/json" });
      options.method = "POST";
      options.body = JSON.stringify(body);
      fetchUtils
        .fetchJson(url, options)

        .then((data) => {
          if (data.status == 200 && data.json.status == true) {
            localStorage.removeItem('email');
            localStorage.removeItem('token');
            alert(data.json.message);
            redirect("/login");
          } else {
            alert(data.json.message);
            this.props.history.push("/change-password");
          }
        })
        .catch((err, ...rest) => {});
    }
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
              name="password"
              id="password"
              ref={pswdRef}
              fullWidth
              type={values.showPassword ? "text" : "password"}
              value={values.password}
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
            {!isValidPswd ? (
              <span className={`formError`}>
                {"Password should not be empty"}
              </span>
            ) : (
              ""
            )}
            <TextField
              variant="standard"
              margin="normal"
              name="confirm-password"
              id="confirm-password"
              ref={confrimPswdRef}
              fullWidth
              type={confirmPswdValues.showConfirmPassword ? "text" : "password"}
              value={confirmPswdValues.confirmPassword}
              onChange={handleChangeConfirmPswd("confirmPassword")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {confirmPswdValues.showConfirmPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Confirm Password"
            />
            {!isValidConfirmPswd ? (
              <span className={`formError`}>{confirmPswdMsg}</span>
            ) : (
              ""
            )}

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

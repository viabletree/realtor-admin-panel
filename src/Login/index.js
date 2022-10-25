import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";
import { fetchUtils, Link, PasswordInput, useRedirect } from "react-admin";

import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import Logo from "../assets/logo.svg";
import { paperStyle, avatarStyle, btnStyle, gridStyle } from "../myStyles";
import logo from "../assets/logo.svg";
import {
  BASE_URL,
  INVALID_EMAIL,
  INVALID_PASSWORD,
  INVALID_PASSWORD_REGEX,
} from "../constants";
import {
  Alert,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  Snackbar,
} from "@mui/material";
import { Lock, Visibility, VisibilityOff } from "@material-ui/icons";
import Utils from "../services/Utils";

const AlertComp = React.forwardRef(function Alert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MyLoginPage(props) {
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [emailAdd, setEmailAdd] = useState("");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPswd, setIsValidPswd] = useState(true);
  const [serverError, setServerError] = useState("");

  const emailRef = useRef(null);
  const pswdRef = useRef(null);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setIsValidPswd(true);
  };

  const validateForm = () => {
    let isValid = true;
    setIsValidEmail(true);
    setIsValidPswd(true);
    // required check
    if (_.isEmpty(emailAdd) || !Utils.isEmailValid(emailAdd)) {
      emailRef.current.focus();
      setIsValidEmail(false);
      isValid = false;
    }
    if (_.isEmpty(values.password)) {
      pswdRef.current.focus();
      setIsValidPswd(false);
      isValid = false;
    }

    return isValid;
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

  const handleSnackbarClose = () => {
    setOpenSnackBar(false);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const localEmail = localStorage.getItem("email");
  const localPass = localStorage.getItem("password");

  useEffect(() => {
    !_.isEmpty(localEmail) ? setEmailAdd(localEmail) : setEmailAdd("");
    !_.isEmpty(localPass)
      ? setValues({ ...values, password: localPass })
      : setValues({ ...values, password: "" });
    !_.isEmpty(localPass && localEmail) && setIsRememberMe(true);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
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
          if (data.json.data.isAdmin == 1) {
            localStorage.removeItem("not_authenticated");
            localStorage.setItem("auth", data.json.data.access_token);
            if (isRememberMe === true) {
              localStorage.setItem("email", emailAdd);
              localStorage.setItem("password", values.password);
            }
            redirect("/users");
          } else {
            alert("Invalid credentials");
            // setOpenSnackBar(true);
            // setServerError("Invalid credentials");
            this.props.history.push("/login");
          }
        })
        .catch((err, ...rest) => {});
    }
  };

  return (
    <>
      {/* <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClick={handleSnackbarClose}
      >
        <AlertComp severity="error" sx={{ width: "100%" }}>
          {serverError}
        </AlertComp>
      </Snackbar> */}
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
                ref={emailRef}
                onChange={(e) => {
                  return setEmailAdd(e.target.value), setIsValidEmail(true);
                }}
              />
              {!isValidEmail ? (
                <span className={`formError`}>{INVALID_EMAIL}</span>
              ) : (
                ""
              )}

              <TextField
                variant="standard"
                margin="normal"
                name="password"
                id="password"
                fullWidth
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                ref={pswdRef}
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
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                label="Password"
              />
              {!isValidPswd ? (
                <span className={`formError`}>{INVALID_PASSWORD}</span>
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
    </>
  );
}

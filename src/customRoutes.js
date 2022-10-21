import React from "react";
import { Route } from "react-router-dom";

import ForgotPassword from "./ForgotPassword/index";
import ResetPassword from "./ResetPassword/index";
import ConfirmOtp from "./ConfirmOtp/index";

const routes = [
	<Route path="/forgot-password" component={ForgotPassword} noLayout />,
	<Route path="/confirm-otp" component={ConfirmOtp} noLayout />,
	<Route path="/reset-password" component={ResetPassword} noLayout />,
	
];

export default routes;

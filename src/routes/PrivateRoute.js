import React from "react";
import { Navigate } from "react-router-dom";

// user 값이 있다면? TodoPage : redirect to /login
const PrivateRoute = ({ user, children }) => {
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

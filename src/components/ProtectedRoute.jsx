import React from "react";
import Admin from "../admin/Admin";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth }) => {
  if (isAuth) {
    return <Admin />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;

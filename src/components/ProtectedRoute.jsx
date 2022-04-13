import React from "react";
import Admin from "../admin/Admin";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ infosAdmin }) => {
  if (infosAdmin) {
    return <Admin />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;

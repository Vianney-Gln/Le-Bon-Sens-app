import React from "react";
import Admin from "../admin/Admin";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  if (
    localStorage.getItem("name") &&
    localStorage.getItem("firstname") &&
    localStorage.getItem("uuid")
  ) {
    return <Admin />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;

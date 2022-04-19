import React, { useEffect, useState } from "react";
import Admin from "../admin/Admin";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../services/auth";

const ProtectedRoute = () => {
  const [resultToken, setResultToken] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(false);
    const token = localStorage.getItem("token");
    verifyToken(token)
      .then((result) => {
        setResultToken(result.data);
        setLoad(true);
      })
      .catch(() => {
        setResultToken(false);
        setLoad(true);
      });
  }, []);

  if (load) {
    console.log(resultToken);
    if (!resultToken) return <Navigate to="/login" />;
    else {
      return <Admin />;
    }
  } else {
    return null;
  }
};

export default ProtectedRoute;

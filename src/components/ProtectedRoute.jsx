import React, { useEffect, useState } from "react";
import Admin from "../admin/Admin";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = () => {
  const [resultToken, setResultToken] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(false);
    const token = localStorage.getItem("token");
    axios({
      url: "http://localhost:3001/api/LeBonSens/verifyToken",
      data: { token: token },
      method: "post",
    })
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

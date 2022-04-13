import axios from "axios";

const baseUrl = "http://localhost:3001";

const auth = (credentials) => {
  return axios({
    method: "post",
    data: credentials,
    url: `${baseUrl}/api/LeBonSens/auth/login`,
  });
};

export default auth;

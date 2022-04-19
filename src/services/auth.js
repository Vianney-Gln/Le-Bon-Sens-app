import axios from "axios";

const baseUrl = "http://localhost:3001";

/**
 *
 * @param {object} credentials
 * @returns {object}
 */
const authentificate = (credentials) => {
  return axios({
    method: "post",
    data: credentials,
    url: `${baseUrl}/api/LeBonSens/auth/login`,
  }).then((result) => result.data);
};

export const verifyToken = (token) => {
  return axios({
    url: "http://localhost:3001/api/LeBonSens/verifyToken",
    data: { token: token },
    method: "post",
  });
};

export default authentificate;

import axios from "axios";

const baseUrl = "http://localhost:3001";

/**
 * function taking email and password to connect the user
 * @param {object} credentials
 * @returns {string}
 */
const authentificate = (credentials) => {
  return axios({
    method: "post",
    data: credentials,
    url: `${baseUrl}/api/LeBonSens/auth/login`,
  }).then((result) => result.data);
};

/**
 * function verifying if a user is connected by sending a token to the back
 * @param {string} token
 * @returns {boolean}
 */
export const verifyToken = (token) => {
  return axios({
    url: "http://localhost:3001/api/LeBonSens/verifyToken",
    data: { token: token },
    method: "post",
  });
};

export default authentificate;

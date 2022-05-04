import axios from "axios";

const baseUrl = "https://shielded-sea-56340.herokuapp.com";

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
    url: `${baseUrl}/api/LeBonSens/verifyToken`,
    data: { token: token },
    method: "post",
  });
};

export const changePasswordRequest = (email) => {
  return axios({
    url: "http://localhost:3001/api/LeBonSens/auth/changepassword",
    data: email,
    method: "put",
  });
};

export default authentificate;

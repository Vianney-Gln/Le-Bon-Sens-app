import axios from "axios";

const baseUrl = "https://shielded-sea-56340.herokuapp.com";

/**
 * Function taking email and password and generate a token
 * @param {Object} credentials
 * @returns {Promise}
 */
const authentificate = (credentials) => {
  return axios({
    method: "post",
    data: credentials,
    url: `${baseUrl}/api/LeBonSens/auth/login`,
  }).then((result) => result.data);
};

/**
 * Function verifying if a user is connected by sending a token to the back
 * @param {String} token
 * @returns {Promise}
 */
export const verifyToken = (token) => {
  return axios({
    url: `${baseUrl}/api/LeBonSens/verifyToken`,
    data: { token: token },
    method: "post",
  });
};
/**
 * Function running a change password request by sending an email
 * @param {String} email
 * @returns {Promise}
 */
export const changePasswordRequest = (email) => {
  return axios({
    url: `${baseUrl}/api/LeBonSens/auth/lostpassword`,
    data: email,
    method: "put",
  });
};

/**
 * Function updating the user's password
 * @param {Object} creds
 * @returns {Promise}
 */
export const updatePassword = (creds) => {
  return axios({
    url: `${baseUrl}/api/LeBonSens/auth/changePassword`,
    data: creds,
    method: "put",
  });
};

export default authentificate;

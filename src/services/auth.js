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

export default authentificate;

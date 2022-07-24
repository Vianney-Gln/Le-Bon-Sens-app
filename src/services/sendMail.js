import axios from "axios";

const baseUrl = "https://shielded-sea-56340.herokuapp.com";

/**
 * Function sending an email from users to owner
 * @param {object} data
 * @returns {promise}
 */
const sendMail = (data) => {
  return axios({
    method: "post",
    url: `${baseUrl}/api/LeBonSens/sendMail`,
    data: data,
  }).then((result) => result.data);
};

export default sendMail;

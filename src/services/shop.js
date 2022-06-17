// Axios
import axios from "axios";

const baseUrl = "https://shielded-sea-56340.herokuapp.com";
/**
 * Function getting data from shop
 * @returns {Promise}
 */
const getInfosShop = () =>
  axios.get(`${baseUrl}/api/LeBonSens/shop`).then((result) => result.data);

/**
 * Function updating infos from shop [only authentificated user]
 * @param {Object} dataShopToUpdate
 * @param {String} token
 * @returns {Promise}
 */
export const updateInfosShop = (dataShopToUpdate, token) => {
  let url = `${baseUrl}/api/LeBonSens/shop`;
  return axios({
    method: "put",
    data: { dataShopToUpdate, token },
    url: url,
  });
};

export default getInfosShop;

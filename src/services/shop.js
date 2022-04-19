import axios from "axios";

const baseUrl = "http://localhost:3001";

const getInfosShop = () =>
  axios.get(`${baseUrl}/api/LeBonSens/shop`).then((result) => result.data);

export const updateInfosShop = (dataShopToUpdate, token) => {
  let url = `${baseUrl}/api/LeBonSens/shop`;
  return axios({
    method: "put",
    data: { dataShopToUpdate, token },
    url: url,
  });
};

export default getInfosShop;

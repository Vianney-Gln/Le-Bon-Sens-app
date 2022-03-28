import axios from "axios";

const baseUrl = "https://le-bon-sens.herokuapp.com";

const getInfosShop = () =>
  axios.get(`${baseUrl}/api/LeBonSens/shop`).then((result) => result.data);

export const updateInfosShop = (dataShopToUpdate) => {
  let url = `${baseUrl}/api/LeBonSens/shop`;
  return axios({
    method: "put",
    data: dataShopToUpdate,
    url: url,
  });
};

export default getInfosShop;

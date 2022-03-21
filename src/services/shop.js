import axios from "axios";

const url = "http://localhost:3001/api/LeBonSens/shop";

const getInfosShop = () => axios.get(url).then((result) => result.data);

export const updateInfosShop = (dataShopToUpdate) => {
  return axios({
    method: "put",
    data: dataShopToUpdate,
    url: url,
  });
};

export default getInfosShop;

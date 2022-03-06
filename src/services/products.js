import axios from "axios";

/**
 * function calling api getting products infos
 * @returns array
 */
const getProducts = (paramCategory, paramSearch) => {
  let url = "http://localhost:3001/api/LeBonSens/products";
  if (paramCategory && paramSearch) {
    url += `?category=${paramCategory}&name=${paramSearch}`;
  } else if (paramCategory) {
    url += `?category=${paramCategory}`;
  } else if (paramSearch) {
    url += `?name=${paramSearch}`;
  }
  return axios.get(url).then((products) => products.data);
};

export default getProducts;

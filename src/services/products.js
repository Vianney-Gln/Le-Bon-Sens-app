import axios from "axios";

/**
 * function calling api getting products infos in terms of params(category or name)
 * @param (string,string)
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

export const getOneProductById = (id) => {
  return axios
    .get(`http://localhost:3001/api/LeBonSens/products/${id}`)
    .then((product) => product.data);
};

/**
 * function creating a new product
 * @param {object} dataProduct
 * @returns object
 */
export const postOneProduct = (dataProduct) => {
  return axios({
    method: "post",
    url: "http://localhost:3001/api/LeBonSens/products",
    data: dataProduct,
  });
};

/**
 * function deleting one product by his id
 * @param {number} id
 * @returns
 */

export const deleteOneProduct = (id) => {
  return axios.delete(`http://localhost:3001/api/LeBonSens/products/${id}`);
};

export const updateOneProduct = (dataProduct, id) => {
  return axios({
    method: "put",
    url: `http://localhost:3001/api/LeBonSens/products/${id}`,
    data: dataProduct,
  });
};

export default getProducts;

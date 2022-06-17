import axios from "axios";

const baseUrl = "https://shielded-sea-56340.herokuapp.com";
/**
 * Function calling api getting products infos in terms of params(category or name)
 * @param {String} paramCategory
 * @param {String} paramSearch
 * @returns {Promise}
 */
const getProducts = (paramCategory, paramSearch) => {
  let url = `${baseUrl}/api/LeBonSens/products`;
  if (paramCategory && paramSearch) {
    url += `?category=${paramCategory}&name=${paramSearch}`;
  } else if (paramCategory) {
    url += `?category=${paramCategory}`;
  } else if (paramSearch) {
    url += `?name=${paramSearch}`;
  }
  return axios.get(url).then((products) => products.data);
};

/**
 * Function getting data from one product by id
 * @param {Number} id
 * @returns {Promise}
 */
export const getOneProductById = (id) => {
  return axios
    .get(`${baseUrl}/api/LeBonSens/products/${id}`)
    .then((product) => product.data);
};

/**
 * Function creating a new product
 * @param {object} dataProduct
 * @param {String} token
 * @returns {Promise}
 */
export const postOneProduct = (dataProduct, token) => {
  let url = `${baseUrl}/api/LeBonSens/products`;
  return axios({
    method: "post",
    url: url,
    data: { dataProduct, token },
  });
};

/**
 * Function deleting one product by his id only connected as admin
 * @param {Number} id
 * @param {String} token
 * @returns {Promise}
 */

export const deleteOneProduct = (id, token) => {
  return axios.post(`${baseUrl}/api/LeBonSens/products/${id}`, { token });
};

/**
 * Function updating one product by his id , only for admin connected
 * @param {Object} dataProduct
 * @param {Number} id
 * @param {String} token
 * @returns {Promise}
 */
export const updateOneProduct = (dataProduct, token, id) => {
  return axios({
    method: "put",
    url: `${baseUrl}/api/LeBonSens/products/${id}`,
    data: { dataProduct, token },
  });
};

export default getProducts;

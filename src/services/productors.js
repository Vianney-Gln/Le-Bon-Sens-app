import axios from "axios";

const baseUrl = "https://shielded-sea-56340.herokuapp.com";

/**
 * function getting only name and id for productors
 * @returns array
 */
const getNamesProductors = () => {
  return axios
    .get(`${baseUrl}/api/LeBonSens/productors`)
    .then((result) => result.data);
};

/**
 *function getting infos from one productor by his id
 * @param {number} id
 * @returns array
 */
const getInfosProductors = (id) => {
  return axios
    .get(`${baseUrl}/api/LeBonSens/productors/${id}`)
    .then((result) => result.data);
};

/**
 *function getting carrousel from one productor by his id
 * @param {number} id
 * @returns array
 */
const getCarrouselProductor = (id) => {
  return axios
    .get(`${baseUrl}/api/LeBonSens/productors/getCarrousel/${id}`)
    .then((result) => result.data);
};

/**
 * function service adding a productor in database if authentificated
 * @param {Object} dataProductor
 * @param {String} token
 * @returns {Promise}
 */

const addProductor = (dataProductor, token) => {
  return axios({
    method: "post",
    url: "http://localhost:3001/api/LeBonSens/productors",
    data: { dataProductor, token },
  });
};

/**
 *
 * @param {Object} dataProductor
 * @param {String} token
 * @param {Number} id
 * @returns {Promise}
 */
const updateProductorById = (dataProductor, token, id) => {
  return axios({
    method: "put",
    url: `http://localhost:3001/api/LeBonSens/productors/${id}`,
    data: { dataProductor, token },
  });
};

/**
 * function deletting oneProductor by his id (only if user authentificated)
 * @param {Number} id
 * @param {String} token
 * @returns {Promise}
 */
const deleteOneProductorById = (id, token) => {
  return axios({
    method: "post",
    url: `http://localhost:3001/api/LeBonSens/productors/${id}`,
    data: { token },
  });
};

/**
 * function adding one item in the carrousel for one productor
 * @param {Object} dataCarrouselProductor
 * @param {String} token
 * @returns {Promise}
 */
const addOneCarrouselItem = (dataCarrouselProductor, token) => {
  return axios({
    method: "post",
    url: `http://localhost:3001/api/LeBonSens/productors/carrouselProductor`,
    data: { dataCarrouselProductor, token },
  });
};

export {
  getNamesProductors,
  getInfosProductors,
  getCarrouselProductor,
  addProductor,
  updateProductorById,
  deleteOneProductorById,
  addOneCarrouselItem,
};

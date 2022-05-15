import axios from "axios";

const baseUrl = "https://shielded-sea-56340.herokuapp.com";

/**
 * function getting name, id, status for productors
 * @returns {Promise}
 */
const getNamesProductors = () => {
  return axios
    .get(`http://localhost:3001/api/LeBonSens/productors`)
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
 * function service adding a productor in database if authentificated
 * @param {Object} dataProductor
 * @param {String} token
 * @returns {Promise}
 */

const addProductor = (dataProductor, token) => {
  return axios({
    method: "post",
    url: `http://localhost:3001/api/LeBonSens/productors`,
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
    url: `${baseUrl}/api/LeBonSens/productors/${id}`,
    data: { token },
  });
};

/**
 * function adding one item in the carrousel for one productor
 * @param {Object} dataCarrouselProductor
 * @param {String} token
 * @returns {Promise}
 */
const addOneCarrouselItem = (dataCarrousel, token) => {
  return axios({
    method: "post",
    url: `${baseUrl}/api/LeBonSens/productors/carrouselProductor`,
    data: { dataCarrousel, token },
  });
};

/**
 * function deleting one item from carrousel by his id
 * @param {Number} id
 * @param {String} [token=undefined]
 * @returns {Promise}
 */
const deleteOneItemCarrouselById = (id, token) => {
  return axios({
    method: "post",
    url: `${baseUrl}/api/LeBonSens/productors/carrouselProductor/${id}`,
    data: { token },
  })
    .then((result) => result.data)
    .catch((err) => console.log(err));
};

export {
  getNamesProductors,
  getInfosProductors,
  addProductor,
  updateProductorById,
  deleteOneProductorById,
  addOneCarrouselItem,
  deleteOneItemCarrouselById,
};

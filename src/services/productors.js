import axios from "axios";

const baseUrl = "https://shielded-sea-56340.herokuapp.com";

/**
 * Function getting name, id, status for productors
 * @returns {Promise}
 */
const getNamesProductors = () => {
  return axios
    .get(`${baseUrl}/api/LeBonSens/productors`)
    .then((result) => result.data);
};

/**
 * Function getting infos from one productor by his id
 * @param {Number} id
 * @returns {Promise}
 */
const getInfosProductors = (id) => {
  return axios
    .get(`${baseUrl}/api/LeBonSens/productors/${id}`)
    .then((result) => result.data);
};

/**
 * Function service adding a productor in database if authentificated
 * @param {Object} dataProductor
 * @param {String} token
 * @returns {Promise}
 */

const addProductor = (dataProductor, token) => {
  return axios({
    method: "post",
    url: `${baseUrl}/api/LeBonSens/productors`,
    data: { dataProductor, token },
  });
};

/**
 * Function updtating productor by id only authentificated user
 * @param {Object} dataProductor
 * @param {String} token
 * @param {Number} id
 * @returns {Promise}
 */
const updateProductorById = (dataProductor, token, id) => {
  return axios({
    method: "put",
    url: `${baseUrl}/api/LeBonSens/productors/${id}`,
    data: { dataProductor, token },
  });
};

/**
 * Function deletting oneProductor by his id (only if user authentificated)
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
 * Function adding one item in the carrousel for one productor only authentificated user
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
 * Function deleting one item from carrousel by his id only authentificated user
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

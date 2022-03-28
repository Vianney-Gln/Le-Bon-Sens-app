import axios from "axios";

const baseUrl = "https://le-bon-sens.herokuapp.com";

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

export { getNamesProductors, getInfosProductors, getCarrouselProductor };

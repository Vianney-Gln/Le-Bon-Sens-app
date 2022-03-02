import axios from "axios";

const url = "http://localhost:3001/api/LeBonSens/productors";

/**
 * function getting only name and id for productors
 * @returns array
 */
const getNamesProductors = () => {
  axios.get(url).then((result) => result.data);
};

/**
 *function getting infos from one productor by his id
 * @param {number} id
 * @returns array
 */
const getInfosProductors = (id) =>
  axios.get(`${url}/${id}`).then((result) => result.data);

/**
 *function getting carrousel from one productor by his id
 * @param {number} id
 * @returns array
 */
const getCarrouselProductor = (id) =>
  axios.get(`${url}/getCarrousel/${id}`).then((result) => result.data);

export { getInfosProductors, getCarrouselProductor, getNamesProductors };

import axios from "axios";

const baseUrl = "https://shielded-sea-56340.herokuapp.com";

/**
 * Function getting first 6 events
 * @returns {Promise}
 */
const getInfosEvents = () => {
  return axios.get(`${baseUrl}/api/LeBonSens/events`).then((res) => res.data);
};

/**
 * Function getting one event By id (for pre filling form admin update event)
 * @param {Number} id
 * @returns {Promise}
 */
export const getOneEventById = (id) => {
  return axios
    .get(`${baseUrl}/api/LeBonSens/events/${id}`)
    .then((res) => res.data);
};

/**
 * Function getting all events (for admin use)
 * @returns {Promise}
 */
export const getAllInfosEvents = (token) => {
  return axios
    .post(`${baseUrl}/api/LeBonSens/events/all`, { token: token })
    .then((res) => res.data);
};

/**
 * Function creating an event (for admin use)
 * @param {Object} dataEvents
 * @param {String} token
 * @returns {Promise}
 */
export const createOneEvent = (dataEvents, token) => {
  return axios({
    method: "post",
    url: `${baseUrl}/api/LeBonSens/events`,
    data: { dataEvents, token },
  }).then((res) => res);
};

/**
 * Function deleting one event by his id only admin
 * @param {Number} id
 * @param {String} token
 * @returns {Promise}
 */
export const deleteOneEventById = (id, token) => {
  return axios.post(`${baseUrl}/api/LeBonSens/events/${id}`, {
    token: token,
  });
};

/**
 * Function updating one event by id only for admin
 * @param {Object} dataEventToUpdate
 * @param {String} token
 * @param {Number} id
 * @returns {Promise}
 */
export const updateOneEventById = (dataEventToUpdate, token, id) => {
  return axios({
    method: "put",
    url: `${baseUrl}/api/LeBonSens/events/${id}`,
    data: { dataEventToUpdate, token },
  });
};

export default getInfosEvents;

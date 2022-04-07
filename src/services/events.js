import axios from "axios";

const baseUrl = "http://localhost:3001";

/**
 * function getting first 6 events
 * @returns {array}
 */
const getInfosEvents = () => {
  return axios.get(`${baseUrl}/api/LeBonSens/events`).then((res) => res.data);
};

export const getAllInfosEvents = () => {
  return axios
    .get(`${baseUrl}/api/LeBonSens/events/all`)
    .then((res) => res.data);
};

/**
 * function creating an event
 * @param {object} dataEvents
 * @returns
 */
export const createOneEvent = (dataEvents) => {
  return axios({
    method: "post",
    url: `${baseUrl}/api/LeBonSens/events`,
    data: dataEvents,
  }).then((res) => res);
};

/**
 * function deleting one event by his id
 * @param {number} id
 * @returns
 */
export const deleteOneEventById = (id) => {
  return axios.delete(`${baseUrl}/api/LeBonSens/events/${id}`);
};

export const updateOneEventById = (dataEventToUpdate, id) => {
  return axios({
    method: "put",
    url: `${baseUrl}/api/LeBonSens/events/${id}`,
    data: dataEventToUpdate,
  });
};

export default getInfosEvents;

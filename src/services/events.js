import axios from "axios";

const baseUrl = "http://localhost:3001";

/**
 * function getting first 6 events
 * @returns {array}
 */
const getInfosEvents = () =>
  axios.get(`${baseUrl}/api/LeBonSens/events`).then((res) => res.data);

/**
 * function creting an event
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

export default getInfosEvents;

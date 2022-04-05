import axios from "axios";

const baseUrl = "https://le-bon-sens.herokuapp.com";

/**
 * function getting first 6 events
 * @returns {array}
 */
const getInfosEvents = () =>
  axios.get(`${baseUrl}/api/LeBonSens/events`).then((res) => res.data);

export const createOneEvent = (dataEvents) => {
  return axios({
    method: "post",
    url: baseUrl,
    data: dataEvents,
  });
};

export default getInfosEvents;

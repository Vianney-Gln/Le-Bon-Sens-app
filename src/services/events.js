import axios from "axios";

const baseUrl = "https://le-bon-sens.herokuapp.com";

const getInfosEvents = () =>
  axios.get(`${baseUrl}/api/LeBonSens/events`).then((res) => res.data);

export default getInfosEvents;

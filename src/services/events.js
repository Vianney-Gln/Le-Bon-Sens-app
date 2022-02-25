import axios from "axios";

const url = "http://localhost:3001/api/LeBonSens/events";

const getInfosEvents = () => axios.get(url).then((res) => res.data);

export default getInfosEvents;

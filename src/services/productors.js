import axios from "axios";

const url = "http://localhost:3001/api/LeBonSens/productors";

const getInfosProductors = (id) =>
  axios.get(`${url}/${id}`).then((result) => result.data);

const getCarrouselProductor = (id) =>
  axios.get(`${url}/getCarrousel/${id}`).then((result) => result.data);

export { getInfosProductors, getCarrouselProductor };

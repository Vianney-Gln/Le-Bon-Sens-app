import axios from "axios";

const url = "http://localhost:3001/api/LeBonSens/shop";

const getInfosShop = () => axios.get(url).then((result) => result.data);

export default getInfosShop;

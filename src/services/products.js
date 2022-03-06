import axios from "axios";

const url = "http://localhost:3001/api/LeBonSens/products";

/**
 * function calling api getting products infos
 * @returns array
 */
const getProducts = () => axios.get(url).then((products) => products.data);

export default getProducts;

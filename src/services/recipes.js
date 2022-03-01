import axios from "axios";

const url = "http://localhost:3001/api/LeBonSens/recipes";

const getRecipes = () => axios.get(url).then((res) => res.data);

export default getRecipes;

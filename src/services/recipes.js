import axios from "axios";

const getRecipes = (paramSearch) => {
  let url = "http://localhost:3001/api/LeBonSens/recipes";

  if (paramSearch) url += `?name=${paramSearch}`;

  return axios.get(url).then((res) => res.data);
};

export default getRecipes;

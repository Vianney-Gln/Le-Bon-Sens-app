import axios from "axios";

/**
 *function getting all recipes or recipes in terms of searchParams
 * @param {string} paramSearch
 * @returns array
 */
const getRecipes = (paramSearch) => {
  let url = "http://localhost:3001/api/LeBonSens/recipes";

  if (paramSearch) url += `?name=${paramSearch}`;

  return axios.get(url).then((res) => res.data);
};

export const addRecipe = (dataRecipe) => {
  return axios({
    method: "post",
    url: url,
    data: dataRecipe,
  });
};

export default getRecipes;

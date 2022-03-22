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

/**
 * function posting a new recipe
 * @param {object} dataRecipe
 * @returns
 */
export const addRecipe = (dataRecipe) => {
  let url = "http://localhost:3001/api/LeBonSens/recipes";
  return axios({
    method: "post",
    url: url,
    data: dataRecipe,
  });
};

export const deleteOneRecipeById = (id) => {
  return axios({
    method: "delete",
    url: `http://localhost:3001/api/LeBonSens/recipes/${id}`,
  });
};
export default getRecipes;

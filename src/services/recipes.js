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

/**
 * function deleteting one recipe by his id
 * @param {number} id
 * @returns
 */
export const deleteOneRecipeById = (id) => {
  return axios({
    method: "delete",
    url: `http://localhost:3001/api/LeBonSens/recipes/${id}`,
  });
};

/**
 * function getting all data for one recipe by id
 * @param {number} id
 * @returns object
 */

export const getOneRecipeById = (id) => {
  return axios
    .get(`http://localhost:3001/api/LeBonSens/recipes/${id}`)
    .then((result) => result.data);
};
export default getRecipes;

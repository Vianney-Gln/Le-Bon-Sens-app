import axios from "axios";

const baseUrl = "http://localhost:3001";

/**
 *function getting all recipes or recipes in terms of searchParams
 * @param {string} paramSearch
 * @returns array
 */
const getRecipes = (paramSearch) => {
  let url = `${baseUrl}/api/LeBonSens/recipes`;

  if (paramSearch) url += `?name=${paramSearch}`;

  return axios.get(url).then((res) => res.data);
};

/**
 * function posting a new recipe
 * @param {object} dataRecipe
 * @returns
 */
export const addRecipe = (dataRecipe, token) => {
  let url = `${baseUrl}/api/LeBonSens/recipes`;
  return axios({
    method: "post",
    url: url,
    data: { dataRecipe, token },
  });
};

/**
 * function deleteting one recipe by his id
 * @param {number} id
 * @returns
 */
export const deleteOneRecipeById = (id, token) => {
  return axios({
    method: "post",
    url: `${baseUrl}/api/LeBonSens/recipes/${id}`,
    data: { token },
  });
};

/**
 * function getting all data for one recipe by id
 * @param {number} id
 * @returns object
 */

export const getOneRecipeById = (id) => {
  return axios
    .get(`${baseUrl}/api/LeBonSens/recipes/${id}`)
    .then((result) => result.data);
};

export const updateOneRecipeById = (dataRecipe, id, token) => {
  return axios({
    method: "put",
    url: `${baseUrl}/api/LeBonSens/recipes/${id}`,
    data: { dataRecipe, token },
  });
};
export default getRecipes;

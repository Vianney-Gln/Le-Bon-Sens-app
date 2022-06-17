import axios from "axios";

const baseUrl = "https://shielded-sea-56340.herokuapp.com";

/**
 * Function getting all recipes or recipes in terms of searchParams
 * @param {string} paramSearch
 * @returns {Promise}
 */
const getRecipes = (paramSearch) => {
  let url = `${baseUrl}/api/LeBonSens/recipes`;
  if (paramSearch) url += `?name=${paramSearch}`;
  return axios.get(url).then((res) => res.data);
};

/**
 * Function posting a new recipe
 * @param {object} dataRecipe
 * @param {String} token
 * @returns {Pomise}
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
 * Function deleteting one recipe by his id
 * @param {number} id
 * @param {String} token
 * @returns {Promise}
 */
export const deleteOneRecipeById = (id, token) => {
  return axios({
    method: "post",
    url: `${baseUrl}/api/LeBonSens/recipes/${id}`,
    data: { token },
  });
};

/**
 * Function getting all data for one recipe by id
 * @param {Number} id
 * @returns {Promise}
 */

export const getOneRecipeById = (id) => {
  return axios
    .get(`${baseUrl}/api/LeBonSens/recipes/${id}`)
    .then((result) => result.data);
};

/**
 * Function updtating one recipe by is
 * @param {Object} dataRecipe
 * @param {String} token
 * @param {Number} id
 * @returns {Promise}
 */
export const updateOneRecipeById = (dataRecipe, token, id) => {
  return axios({
    method: "put",
    url: `${baseUrl}/api/LeBonSens/recipes/${id}`,
    data: { dataRecipe, token },
  });
};
export default getRecipes;

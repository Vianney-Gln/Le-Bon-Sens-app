/**
 * function verifying if the contains "?" and replace it by "€";
 * @param {string} price
 * @returns string
 */
const translateEuro = (price) => {
  let translatedPrice = "";
  if (price.indexOf("?") !== -1) {
    translatedPrice = price.replace("?", "€");
  }
  return translatedPrice;
};

/**
 *function verifying if object is empty
 * @param {object} obj
 * @returns boolean
 */
export const isObjEmpty = (obj) => Object.keys(obj).length === 0;

export default translateEuro;

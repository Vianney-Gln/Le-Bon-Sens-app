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

export default translateEuro;

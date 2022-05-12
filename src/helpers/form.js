/**
 * function getting all inputs items
 * @param {Object} state
 * @param {Function} setState
 * @param {String | Number} value
 * @param {String} key
 */
const getDataInput = (state, setState, value, key) => {
  const newData = state;
  newData[key] = value;
  setState(newData);
};

export default getDataInput;

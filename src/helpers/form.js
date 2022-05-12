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

/**
 * function calling service function, manage error or success messages and redirect to admin
 * @param {Event} e
 * @param {Function} serviceFunction
 * @param {Function} setMessage
 * @param {Function} setError
 * @param {Object} dataInputs
 * @param {Function} nav
 */
export const handleForm = (
  e,
  serviceFunction,
  setMessage,
  setError,
  dataInputs,
  nav
) => {
  e.preventDefault();
  const token = localStorage.getItem("token_access_le_bon_sens");
  serviceFunction(dataInputs, token)
    .then((result) => {
      setMessage("ok");
      setError(false);
      console.log(result);
      setTimeout(() => {
        nav("/admin");
      }, 3000);
    })
    .catch((err) => {
      setError(true);
      setMessage("Nok");
      console.log(err);
    });
};

export default getDataInput;

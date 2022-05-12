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
 * @param {String} operation
 */
export const handleForm = (
  e,
  serviceFunction,
  setMessage,
  setError,
  dataInputs,
  nav,
  operation
) => {
  e.preventDefault();
  const token = localStorage.getItem("token_access_le_bon_sens");
  serviceFunction(dataInputs, token)
    .then(() => {
      manageSuccessMessage(operation, setMessage);
      setError(false);
      setTimeout(() => {
        nav("/admin");
      }, 3000);
    })
    .catch((err) => {
      setError(true);
      manageErrorMessage(setMessage, err.message);
      console.log(err.message);
    });
};

/**
 * function managing the content of success messages
 * @param {String} operation
 * @param {Function} setMessage
 */
const manageSuccessMessage = (operation, setMessage) => {
  const baseMessage = "avec succés, vous allez être redirigé à l'accueil admin";
  switch (operation) {
    case "addProductor":
      setMessage(`producteur ajouté ${baseMessage}`);
      break;
    case "addRecipe":
      setMessage(`recette ajoutée ${baseMessage}`);
      break;
    case "addProduct":
      setMessage(`produit ajouté ${baseMessage}`);
      break;
    case "createEvent":
      setMessage(`événement créé ${baseMessage}`);
      break;
  }
};

const manageErrorMessage = (setMessage, messageError) => {
  switch (messageError) {
    case "Request failed with status code 401":
      setMessage("Vous devez remplir tous les champs obligatoires");
      break;
    default:
      setMessage(
        "Il y eu erreur lors de l'ajout du producteur, veuillez réessayer plus tard"
      );
  }
};

export default getDataInput;

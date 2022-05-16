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
 * @param {Number | undefined} [idToManage=undefined]
 */
export const handleForm = (
  e,
  serviceFunction,
  setMessage,
  setError,
  dataInputs,
  nav,
  operation,
  idToManage = undefined
) => {
  e.preventDefault();
  const token = localStorage.getItem("token_access_le_bon_sens");
  serviceFunction(dataInputs, token, idToManage)
    .then(() => {
      console.log("ok!");
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
      setMessage(`Producteur ajouté ${baseMessage}`);
      break;
    case "addRecipe":
      setMessage(`Recette ajoutée ${baseMessage}`);
      break;
    case "addProduct":
      setMessage(`Produit ajouté ${baseMessage}`);
      break;
    case "updateProduct":
      setMessage(`mise à jour effectuée ${baseMessage}`);
      break;
    case "createEvent":
      setMessage(`Evénement créé ${baseMessage}`);
      break;
    case "manageCarrouselProductor":
      setMessage(`Image ajoutée ${baseMessage}`);
      break;
    case "updateProductor":
      setMessage(`mise à jour effectuée ${baseMessage}`);
      break;
    case "updateEvent":
      setMessage(`mise à jour effectuée ${baseMessage}`);
      break;
  }
};

/**
 * function managing the content of error messages
 * @param {Function} setMessage
 * @param {String} messageError
 */
const manageErrorMessage = (setMessage, messageError) => {
  switch (messageError) {
    case "Request failed with status code 401":
      setMessage("Vous devez remplir tous les champs obligatoires");
      break;
    default:
      setMessage("Une erreur s'est produite , veuillez réessayer plus tard");
  }
};

export default getDataInput;

/**
 *
 * @param {Number} id
 * @param {Function} serviceFunction
 * @param {(String | Undefined)} [token=udefined]
 * @param {Function} navigate
 * @param {Function} setMessage
 */
const deleteOneThing = (
  id,
  serviceFunction,
  token = undefined,
  navigate,
  setMessage
) => {
  serviceFunction(id, token)
    .then((result) => {
      console.log(result);
      setMessage(
        "élément supprimé, vous allez être redirigé à l'accueil admin"
      );
      setTimeout(() => {
        navigate("/admin");
      }, 3000);
    })
    .catch((err) => {
      console.log(err);
      setMessage("erreur lors de la suppression");
    });
};

export default deleteOneThing;

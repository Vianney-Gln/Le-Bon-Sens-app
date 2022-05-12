const deleteOneThing = (id, serviceFunction, token, navigate, setMessage) => {
  serviceFunction(id, token)
    .then(() => {
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

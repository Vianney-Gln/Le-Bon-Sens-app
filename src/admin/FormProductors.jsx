import React from "react";

const FormProductors = ({ operation }) => {
  return (
    <div className="container-addProductors">
      {operation === "updateProductor" && <h3>Modifier un producteur</h3>}
      {operation === "addProductor" && <h3>Créer un producteur</h3>}

      <form>
        <label htmlFor="name">
          <input type="text" name="name" placeholder="nom du producteur" />
        </label>
        <label htmlFor="name">
          <textarea
            name="description"
            placeholder="description du producteur"
          />
        </label>
        <label htmlFor="urlGoogleMap">
          <input
            type="text"
            name="urlGoogleMap"
            placeholder="entrez l'url google map"
          />
        </label>
        <label htmlFor="urlWebsite">
          <input
            type="text"
            name="urlWebsite"
            placeholder="entrez l'url du site web du producteur"
          />
        </label>
        <label htmlFor="urlImage1">
          <input
            type="text"
            name="urlImage1"
            placeholder="entrez l'url de votre image 1"
          />
        </label>
        <label htmlFor="urlImage2">
          <input
            type="text"
            name="urlImage2"
            placeholder="entrez l'url de votre image 2"
          />
        </label>
        <label htmlFor="urlFaceBook">
          <input
            type="text"
            name="urlFaceBook"
            placeholder="entrez l'url du urlFaceBook"
          />
        </label>
        <label htmlFor="urlTwitter">
          <input
            type="text"
            name="urlTwitter"
            placeholder="entrez l'url du twitter"
          />
        </label>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default FormProductors;

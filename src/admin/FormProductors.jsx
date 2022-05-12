import React, { useState } from "react";
//Helper
import getDataInput from "../helpers/form"; //function getting input items

const FormProductors = ({ operation }) => {
  const [dataProductor, setDataProductor] = useState({});

  return (
    <div className="container-addProductors">
      {operation === "updateProductor" && <h3>Modifier un producteur</h3>}
      {operation === "addProductor" && <h3>Créer un producteur</h3>}

      <form>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            placeholder="nom du producteur"
            onChange={(e) => {
              getDataInput(
                dataProductor,
                setDataProductor,
                e.target.value,
                "name"
              );
            }}
          />
        </label>
        <label htmlFor="description1">
          <textarea
            name="description1"
            placeholder="description du producteur"
            onChange={(e) =>
              getDataInput(
                dataProductor,
                setDataProductor,
                e.target.value,
                "description1"
              )
            }
          />
        </label>
        <label htmlFor="urlGoogleMap">
          <input
            type="text"
            name="urlGoogleMap"
            placeholder="entrez l'url google map"
            onChange={(e) =>
              getDataInput(
                dataProductor,
                setDataProductor,
                e.target.value,
                "urlGoogleMap"
              )
            }
          />
        </label>
        <label htmlFor="urlWebsite">
          <input
            type="text"
            name="urlWebsite"
            placeholder="entrez l'url du site web du producteur"
            onChange={(e) =>
              getDataInput(
                dataProductor,
                setDataProductor,
                e.target.value,
                "urlWebsite"
              )
            }
          />
        </label>
        <label htmlFor="urlImage1">
          <input
            type="text"
            name="urlImage1"
            placeholder="entrez l'url de votre image 1"
            onChange={(e) =>
              getDataInput(
                dataProductor,
                setDataProductor,
                e.target.value,
                "urlImage1"
              )
            }
          />
        </label>
        <label htmlFor="urlImage2">
          <input
            type="text"
            name="urlImage2"
            placeholder="entrez l'url de votre image 2"
            onChange={(e) =>
              getDataInput(
                dataProductor,
                setDataProductor,
                e.target.value,
                "urlImage2"
              )
            }
          />
        </label>
        <label htmlFor="urlFaceBook">
          <input
            type="text"
            name="urlFaceBook"
            placeholder="entrez l'url du urlFaceBook"
            onChange={(e) =>
              getDataInput(
                dataProductor,
                setDataProductor,
                e.target.value,
                "urlFaceBook"
              )
            }
          />
        </label>
        <label htmlFor="urlTwitter">
          <input
            type="text"
            name="urlTwitter"
            placeholder="entrez l'url du twitter"
            onChange={(e) =>
              getDataInput(
                dataProductor,
                setDataProductor,
                e.target.value,
                "urlTwitter"
              )
            }
          />
        </label>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default FormProductors;

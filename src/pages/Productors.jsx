import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// style
import "../styles/productors.scss";
import "react-slideshow-image/dist/styles.css";
// images
import { Slide } from "react-slideshow-image";
import iconFaceBook from "../images/icone-fb.jpg";
import iconTwitter from "../images/icone-twitter.png";
import carrou1 from "../images/carrou1.jpg";
import carrou2 from "../images/carrou2.jpg";
import carrou3 from "../images/carrou3.jpg";

//service
import {
  getInfosProductors,
  getCarrouselProductor,
} from "../services/productors";

const Productors = () => {
  /* ----- doc title ----- */
  document.title = "Le Bon Sens - Nos Producteurs associés";

  /* ----- param ----- */
  const param = useParams();

  /* ----- states ----- */
  const [infosProductor, setInfosProductor] = useState({});
  const [carrouselProductor, setCarrouselProductor] = useState([]);

  /* ----- getting infos productor by id on component mounting ----- */
  useEffect(() => {
    getInfosProductors(param.id).then((result) => setInfosProductor(result));
    getCarrouselProductor(param.id).then((result) =>
      setCarrouselProductor(result)
    );
  }, []);

  // carrousel
  const slideImages = [
    {
      url: carrou1,
      caption: "Slide 1",
    },
    {
      url: carrou2,
      caption: "Slide 2",
    },
    {
      url: carrou3,
      caption: "Slide 3",
    },
  ];

  return (
    <div className="container-productors">
      <h1>Nos producteurs associés</h1>
      <div className="container-top">
        <div className="container-carrousel">
          <Slide>
            {carrouselProductor.map((slideImage) => (
              <div className="each-slide" key={slideImage.urlImageCarrousel}>
                <div
                  className="slide"
                  style={{
                    backgroundImage: `url(${slideImage.urlImageCarrousel})`,
                  }}
                />
              </div>
            ))}
          </Slide>
        </div>
        <div className="container-description-productor">
          <h2>{infosProductor.name}</h2>
          <p className="description-productor">{infosProductor.description1}</p>
          <p className="link-website">
            <a
              href={infosProductor.urlWebsite ? infosProductor.urlWebsite : "#"}
            >
              Site Web
              <span>
                <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                    fill="#000"
                    fillRule="nonzero"
                  />
                </svg>
              </span>
            </a>
          </p>
          <div className="link-social-networks">
            {infosProductor.urlFacebook && (
              <a href={infosProductor.urlFacebook}>
                <img src={iconFaceBook} alt="facebook" />
              </a>
            )}
            {infosProductor.urlTwitter && (
              <a href={infosProductor.urlTwitter}>
                <img src={iconTwitter} alt="twitter" />
              </a>
            )}
          </div>
          <div className="container-buttons"></div>
        </div>
      </div>
      <div className="container-bottom">
        <img src={infosProductor.urlImage1} alt={infosProductor.name} />
        <div className="description-productor2">
          <div>
            <h3>{infosProductor.titleDescription2}</h3>
            <p>{infosProductor.description2}</p>
          </div>
        </div>
        <img src={infosProductor.urlImage2} alt={infosProductor.name} />
      </div>
    </div>
  );
};

export default Productors;

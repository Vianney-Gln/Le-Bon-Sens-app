import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// style
import "../styles/productors.scss";
import "react-slideshow-image/dist/styles.css";
// images
import { Slide } from "react-slideshow-image";
import iconFaceBook from "../images/icone-fb.jpg";
import iconTwitter from "../images/icone-twitter.png";

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
  const [carrousel, setCarrousel] = useState([]);

  /* ----- getting infos productor by id on component mounting ----- */
  useEffect(() => {
    getInfosProductors(param.id).then((result) => {
      setInfosProductor(result);
      if (result.carrousel) {
        setCarrousel(result.carrousel);
      }
    });
  }, [param.id]);

  return (
    <div className="container-productors">
      <h1>Nos producteurs associés</h1>
      <div className="container-top">
        <div className="container-carrousel">
          <Slide>
            {carrousel.length &&
              carrousel.map((slideImage) => (
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
          <div className="container-buttons-mobile"></div>
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
        <div className="container-iframe">
          <div>
            <iframe
              title="location Le Bon Sens"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.053648826712!2d-1.2235271845005193!3d47.371871379169725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480603f0e515c905%3A0x8d19d704011726e5!2zTmF0dXInw6lsZXZhZ2UgZGUgU2FpbnQtR8OpcsOpb24!5e0!3m2!1sfr!2sfr!4v1645537785093!5m2!1sfr!2sfr"
              width="auto"
              height="auto"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
        <img src={infosProductor.urlImage2} alt={infosProductor.name} />
      </div>
    </div>
  );
};

export default Productors;

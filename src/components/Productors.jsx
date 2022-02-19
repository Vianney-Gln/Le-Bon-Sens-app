import React from "react";
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

const Productors = () => {
  // doc title
  document.title = "Le Bon Sens - Nos Producteurs associés";

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
            {slideImages.map((slideImage) => (
              <div className="each-slide" key={slideImage.caption}>
                <div
                  className="slide"
                  style={{
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                />
              </div>
            ))}
          </Slide>
        </div>
        <div className="container-description-productor">
          <h2>Nom du producteur</h2>
          <p className="description-productor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia enim
            recusandae quae. Fugit tempore ab nisi, consectetur, natus sunt vel
            dicta error incidunt quidem qui, omnis corporis in sed voluptatum.
          </p>
          <p className="link-website">
            <a href="http://localhost:3000/">
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
            <img src={iconFaceBook} alt="facebook" />
            <img src={iconTwitter} alt="twitter" />
          </div>
        </div>
      </div>
      <div className="container-bottom">
        <img src={carrou1} alt="carrou1" />
        <div className="description-productor2">
          <p>
            <h3> Lorem ipsum, dolor sit amet</h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            veniam cupiditate aperiam consectetur expedita accusamus molestiae.
            Libero repellendus minus, similique consequatur, neque vero
            molestiae doloremque quia consectetur, at a nisi?
          </p>
        </div>
        <img src={carrou2} alt="carrou2" />
      </div>
    </div>
  );
};

export default Productors;

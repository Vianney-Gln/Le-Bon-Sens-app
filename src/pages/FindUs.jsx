import React, { useContext, useState } from "react";
// style
import "../styles/findUs.scss";
//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
// Context
import { shopContext } from "../context/shop";
// Helper
import getDataInput from "../helpers/form";

const FindUs = () => {
  // Doc title
  document.title = "Le Bon Sens - Nous trouver";

  // UseContext
  const ShopContext = useContext(shopContext);

  // State
  const [data, setData] = useState({}); // state data form contact

  const runSendMail = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="container-find-us">
      <h1>Nous contacter</h1>
      <div className="container-iframe-form">
        <div className="container-iframe">
          <iframe
            title="location Le Bon Sens"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.053648826712!2d-1.2235271845005193!3d47.371871379169725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480603f0e515c905%3A0x8d19d704011726e5!2zTmF0dXInw6lsZXZhZ2UgZGUgU2FpbnQtR8OpcsOpb24!5e0!3m2!1sfr!2sfr!4v1645537785093!5m2!1sfr!2sfr"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
        <form onSubmit={(e) => runSendMail(e)}>
          <div className="container-name-firstname">
            <p>
              <span>NOM,</span>
              <span> PRENOM</span>
            </p>
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                placeholder="nom"
                onChange={(e) =>
                  getDataInput(data, setData, e.target.value, "name")
                }
              ></input>
            </label>
            <label htmlFor="firstname">
              <input
                type="text"
                name="firstname"
                placeholder="prénom"
                className="input-firstname"
                onChange={(e) =>
                  getDataInput(data, setData, e.target.value, "firstname")
                }
              ></input>
            </label>
          </div>
          <div className="container-email">
            <p>
              <span>EMAIL</span>
            </p>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={(e) =>
                  getDataInput(data, setData, e.target.value, "email")
                }
              ></input>
            </label>
          </div>
          <div className="container-object">
            <p>
              <span>OBJET</span>
            </p>
            <label htmlFor="objet">
              <input
                type="text"
                name="objet"
                placeholder="objet"
                onChange={(e) =>
                  getDataInput(data, setData, e.target.value, "object")
                }
              ></input>
            </label>
          </div>
          <div className="container-message">
            <p>
              <span>MESSAGE</span>
            </p>
            <label htmlFor="message">
              <textarea
                name="message"
                placeholder="votre message ici"
                onChange={(e) =>
                  getDataInput(data, setData, e.target.value, "message")
                }
              ></textarea>
            </label>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
      <div className="container-contact-information">
        <h3>
          <FontAwesomeIcon icon={faLocationDot} color="blue" />
          {ShopContext.infosShop.address && (
            <span>{ShopContext.infosShop.address}</span>
          )}
        </h3>
        <h3>
          <FontAwesomeIcon icon={faPhone} color="blue" />
          {ShopContext.infosShop.phone && (
            <span>{ShopContext.infosShop.phone}</span>
          )}
        </h3>
        <h3>
          <FontAwesomeIcon icon={faEnvelope} color="blue" />
          {ShopContext.infosShop.email && (
            <span>{ShopContext.infosShop.email}</span>
          )}
        </h3>
      </div>
    </div>
  );
};

export default FindUs;

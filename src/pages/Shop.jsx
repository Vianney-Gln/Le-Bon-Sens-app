import React from "react";
// styles
import "../styles/shop.scss";
// images
import herbs from "../images/herbs.jpg";
import kiwi from "../images/kiwi.jpg";
import storeShelf from "../images/store-shelf.jpg";

// components
import InsertEvent from "../components/InsertEvent";

const Shop = ({ insert, disableInsert }) => {
  // doc title
  document.title = "Le Bon Sens - Notre Magasin";
  return (
    <div className="container-shop">
      {insert && <InsertEvent disableInsert={disableInsert} />}
      <h1>Notre Magasin</h1>
      <p className="description">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
      <div className="container-images">
        <div className="image">
          <img src={herbs} alt="herbs" />
        </div>
        <div className="image">
          <img src={kiwi} alt="kiwi" />
        </div>
        <div className="image">
          <img src={storeShelf} alt="store-shelf" />
        </div>
      </div>
      <p className="description">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
    </div>
  );
};

export default Shop;

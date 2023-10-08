// import { useState } from "react";
import { products } from "../../data/products";
import "./firstSession.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import Icons from "../icons/icons";

function FirstSession() {
  const cellphones =
    products[0].selectedProducts[0].cellphones[1].itemInfo.itemImg[2];
  const gaming = products[0].selectedProducts[0].gaming[1].itemInfo.itemImg[1];
  const computers =
    products[0].selectedProducts[0].computers[2].itemInfo.itemImg[2];
  const tvs = products[0].selectedProducts[0].tv[1].itemInfo.itemImg[0];
  const speakers =
    products[0].selectedProducts[0].speakers[2].itemInfo.itemImg[0];

    
  const infos = [
    {
      id: 1,
      image: cellphones,
      category1: "Cellphones",
      category2: "Collection",
      button: `Shop Now `,
    },
    {
      id: 2,
      image: gaming,
      category1: "Gaming",
      category2: "Collection",
      button: `Shop Now `,
    },

    {
      id: 3,
      image: tvs,
      category1: "TV",
      category2: "Collection",
      button: `Shop Now `,
    },
    {
      id: 4,
      image: speakers,
      category1: "Speakers",
      category2: "Collection",
      button: `Shop Now `,
    },

    {
      id: 5,
      image: computers,
      category1: "Computers",
      category2: "Collection",
      button: `Shop Now `,
    },
  ];

  const links = [
    { id: 1, value: "/cellphoneSession" },
    { id: 2, value: "/gamingSession" },
    { id: 3, value: "/tvSession" },
    { id: 4, value: "/speakerSession" },
    { id: 5, value: "/computerSession" },
  ];

  function dod(id) {
    const filterLinks = links.filter((link) => link.id === id);
    return filterLinks[0].value;
  }

  return (
    <div className="firstSession">
      <div className="container">
        {infos.map((info) => (
          <div className="products" key={info.id}>
            <Link to={dod(info.id)}>
              <div className="image">
                <img src={info.image} alt="aae" />
              </div>
              <div className="tag"></div>
              <div className="tagInfo">
                <p>
                  {" "}
                  {info.category1} <span> {info.category2} </span>
                </p>
                <button>
                  {info.button} <FontAwesomeIcon icon={faArrowCircleRight} />
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* <Icons /> */}
    </div>
  );
}

export default FirstSession;

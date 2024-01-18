import "./shopItems.css";
import { products } from "../data/products";
import { useState } from "react";
import {Link} from "react-router-dom"
// import Footer from "../homepage/Footer/Footer";

function ShopItems(props) {
  const cellphones = products[0].selectedProducts[0].cellphones;
  const gaming = products[0].selectedProducts[0].gaming;
  const computers = products[0].selectedProducts[0].computers;
  const tvs = products[0].selectedProducts[0].tv;
  const speakers = products[0].selectedProducts[0].speakers;

  const infos = [
    { category: cellphones, itemName: "Smart Phones", button: "See All" },
    { category: gaming, itemName: "Gaming", button: "See All" },
    { category: computers, itemName: "Computers", button: "See All" },
    { category: tvs, itemName: "TVs", button: "See All" },
    { category: speakers, itemName: "Speakers", button: "See All" },
  ];



  const links = [
    { id: "Cellphones", value: "/cellphoneSession" },
    { id: "Gaming", value: "/gamingSession" },
    { id: "TV", value: "/tvSession" },
    { id: "Speakers", value: "/speakerSession" },
    { id: "Computers", value: "/computerSession" },
  ];

  function filterLinksHandler(id) {
    const filterLinks = links.filter((link) => link.id === id);
    return filterLinks[0].value;
  }

  return (
    <div>
      <div className="shopItems">
        {/* <Navbar displayMenu={onDisplayMenu} />
        <Menu stateHandler={state} removeMenuHandler={onRemoveMenuHandler} /> */}

        <div style={{ padding: "0 10px" }}>
          {infos.map((eachProducts, index) => (
            <div key={index}>
              <div className="headerContainer">
                <div>
                  <h1 className="header" >{eachProducts.itemName}</h1>
                </div>
                <div className="buyBtnContainer">
                <Link to={filterLinksHandler(eachProducts.category[0].itemInfo.category)} className="linkTag">
                  <button className="buyBtn" > {eachProducts.button}</button>
                  <div id="filler"> </div>
                  </Link>
                </div>
              </div>

              <div className="container">
                {eachProducts.category.map(
                  (eachItems, index) =>
                    index < 12 && (
                      <div key={eachItems.id}>
                        <Link
                    className="linkTag"
                    to={`/viewItem/${eachItems.id}/${eachItems.itemInfo.category}`}
                  >
                        <div className="eachTab">
                          <div className="infoOne">
                            <img
                              src={eachItems.itemInfo.itemImg[0]}
                              alt="fsk"
                            />
                          </div>

                          <div className="infoTwo">
                            <p className="name"> {eachItems.itemInfo.name}</p>
                            <p className="namePlusColor">
                              {" "}
                              {eachItems.itemInfo.description1}
                            </p>

                            <div className="prices">
                              <h1 className="newItemPrice">
                                {" "}
                                ${eachItems.itemInfo.newItemPrice}
                              </h1>
                              <p className="oldItemPrice">
                                {" "}
                                {eachItems.itemInfo.oldItemPrice}
                              </p>
                            </div>
                          </div>
                        </div>
                        </Link>
                      </div>
                    )
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
      {/* <Footer/> */}

    </div>
  );
}
export default ShopItems;

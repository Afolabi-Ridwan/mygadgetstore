import "./sessionControl.css";
import { products } from "../../data/products";
import Navbar from "../../homepage/navbar/navbar";
import Menu from "../../homepage/menus/menu";
import { useState } from "react";
import {Link} from "react-router-dom"



function SessionControl(props) {
  const getItemName = props.itemName;

  const product = products[0].selectedProducts[0][getItemName];

  console.log(product);




  
  return (

    <div >
    <div className="sessionControl">
    
      <h1 className="header"> Products available for {props.itemName} </h1>

      <div className="container">
        {product.map((eachTab) => (

          <div  key={eachTab.id} >
            <Link className="linkTag"  to={`/viewItem/${eachTab.id}/${getItemName}`}>
            <div className="eachTab" >
            <div className="infoOne">
              <img src={eachTab.itemInfo.itemImg[0]} alt="ajk" />
            </div>

            <div className="infoTwo">
              <p className="name"> {eachTab.itemInfo.name}</p>
              <p className="namePlusColor"> {eachTab.itemInfo.description1}</p>

              <div className="prices">
                <h1 className="newItemPrice">
                  {" "}
                  ${eachTab.itemInfo.newItemPrice}
                </h1>
                <p className="oldItemPrice"> {eachTab.itemInfo.oldItemPrice}</p>
              </div>
            </div>
            </div>
            </Link>
          </div>

        ))}
      </div>
      </div>

      </div>

  
  );
}

export default SessionControl;

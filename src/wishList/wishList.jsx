import { useSelector } from "react-redux";
import "./wishList.css";

import { Link } from "react-router-dom";

function WishList() {
  const wishList = useSelector((state) => state.cart.wishList);

  return (
    <div>
      <div className="wishList">
      {wishList.length < 1 ? (
          <h1 style={{color: "white", textAlign: "center", marginTop: "30px"}}>No item added to WishList!</h1>
        ) : (
        <h1 className="header" > Products on your WishList </h1>)
        }
        
          <div className="container">
            {wishList.map((eachTab) => (
              <div key={eachTab.id}>
                <Link
                  className="linkTag"
                  to={`/viewItem/${eachTab.id}/${eachTab.category}`}
                >
                  <div className="eachTab">
                    <div className="infoOne">
                      <img src={eachTab.img} alt="ajk" />
                    </div>

                    <div className="infoTwo">
                      <p className="name"> {eachTab.name}</p>

                      <div className="prices">
                        <h1 className="newItemPrice"> ${eachTab.newPrice}</h1>
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

export default WishList;

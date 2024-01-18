import { useParams } from "react-router";
import { products } from "../data/products";
import { product } from "../data/data";
import { Link } from "react-router-dom";
import "../sessions/sessionControl/sessionControl.css";

const SearchPage = () => {
  const { searchInput } = useParams();

  const searchResult = product.filter(
    (eachProduct) =>
      eachProduct.itemInfo.name
        .toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      eachProduct.itemInfo.category
        .toLowerCase()
        .includes(searchInput.toLowerCase())
  );

  console.log(searchResult);

  return (
    <>
      <div className="sessionControl">
        <h1 className="header"> Products available for {searchInput} </h1>

        <div className="container">
          {searchResult.map((eachTab) => (
            <div key={eachTab.id}>
              <Link className="linkTag" to={`/viewItem/${eachTab.id}/${eachTab.itemInfo.category}`}>
                <div className="eachTab">
                  <div className="infoOne">
                    <img src={`../../${eachTab.itemInfo.itemImg[0]}`} alt="ajk" />
                  </div>

                  <div className="infoTwo">
                    <p className="name"> {eachTab.itemInfo.name}</p>
                    <p className="namePlusColor">
                      {" "}
                      {eachTab.itemInfo.description1}
                    </p>

                    <div className="prices">
                      <h1 className="newItemPrice">
                        {" "}
                        ${eachTab.itemInfo.newItemPrice}
                      </h1>
                      <p className="oldItemPrice">
                        {" "}
                        {eachTab.itemInfo.oldItemPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;

import "./newProducts.css"
import { products } from "../../data/products";

import Slider from 

function NewProducts(){

    const cellphones =
    products[0].selectedProducts[0].cellphones[1].itemInfo.itemImg[2];
  const gaming = products[0].selectedProducts[0].gaming[1].itemInfo.itemImg[1];
  const computers =
    products[0].selectedProducts[0].computers[2].itemInfo.itemImg[2];
  const tvs = products[0].selectedProducts[0].tv[1].itemInfo.itemImg[0];
  const speakers =
    products[0].selectedProducts[0].speakers[2].itemInfo.itemImg[0];


    const info = [
        {id: 1, name: "lerom ipsum", price: "$200", image: cellphones},
        {id: 2, name: "lerom ipsum", price: "$200", image: gaming},
        {id: 3, name: "lerom ipsum", price: "$200", image: computers},
        {id: 4, name: "lerom ipsum", price: "$200", image: tv},
    ]

    return (
        <div>
            {
                info.map ( eachInfo => (
                    <div key={eachInfo.id}>

                    </div>
                ))
            }

        </div>
    )
}

export default NewProducts;
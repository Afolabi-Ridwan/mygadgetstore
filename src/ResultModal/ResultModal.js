// import { Context } from "../redux/cartStore/storeContext";
// import { useContext } from "react";
import style from "styled-components";
// import { forwardRef } from "react";
// import vid from "../../public/assets/video/smartphone.mp4"
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";

const Video = style.div`
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Title = style.h3`
    position: absolute;
    font-size: 35px;
    color: white;
`;

const CartTabContainer = style.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 70vw;
    justify-content: space-between;
`;

const Table = style.table`
    
    margin: 0;
    width: 70vw;
`;

const Hr = style.div`
  width: 70vw;
  border-top: 2px solid var(--lemon);
`;

const Headers = style.p`
  font-weight: bold;
`

const THead = style.thead`
  margin-top: 500px;
`

function ResultModal() {
  // const { cartItems, counter } = useContext(Context);
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  return (
    <div style={{ marginBottom: "50px" }}>
      <div>
      <Video>
        <video
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
          autoPlay={true}
          loop
          muted
          controls=""
          preload="auto"
        >
          <source src="./assets/video/smartphone.mp4" type="video/mp4" />
        </video>

        <Title> Your Cart Items</Title>
      </Video>
      </div>

<div >
      <Table>
        <THead >
          <tr >
            <th> Image</th>
            <th> Name</th>
            <th> Price</th>
            <th> Qty</th>
            <th> Remove</th>
          </tr>
        </THead>

        <tbody >
          {cartItems.map((eachItem) => {
            return(
          <tr key={eachItem.id} >
              <td>
                <img
                  src={eachItem.img}
                  style={{
                    width: "auto",
                    height: "50px",
                    objectFit: "contain",
                    
                  }}
                  alt="sd"
                />
              </td>
              <td> {eachItem.name}</td>
              <td> {eachItem.newPrice}</td>
              <td> {eachItem.quantity}</td>
              <td>
                <FaTrash />
              </td>
            </tr>
            )
                })}
        </tbody>
      </Table>
      </div>
    </div>
  );
}

export default ResultModal;



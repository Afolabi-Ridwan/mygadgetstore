import "./modal.css";
import { useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Modal = ({ inputs }) => {
  const { cartItems, counter } = {
    cartItems: useSelector((state) => state.cart.cartItems),
    counter: useSelector((state) => state.cart.counter),
  };

  const eachTotalPrice = cartItems.map((eachItem) => {
    return eachItem.totalPrice;
  });

  const totalCartAmount = eachTotalPrice.reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
    0
  );

  console.log(cartItems);

  return (
    <div className="container">
      <h1 className="header" >Thank You for Ordering!</h1>
      
      <div className="userDetails">
      <h2>Billing Details</h2>
      <p>{inputs.name}</p>
      <p>{inputs.email}</p>
      <p>{inputs.number}</p>
      <p>{inputs.address}</p>
      <p>{inputs.postalCode}</p>
      <p>{inputs.city}</p>
      </div>
      

      <div className="details">
        <h1> Shopping Details </h1>

        {cartItems.map((eachItem) => (
          <div className="eachItem" key={eachItem.id}>
            <p> {eachItem.quantity}X</p>
            <img src={eachItem.img} alt="kjd" />
            <p className="name"> {eachItem.name}</p>
          </div>
        ))}

        <div className="calcTab">
          <span> Total Order(s)</span> <span> {counter}</span>
        </div>
        <div className="calcTab">
          <span> SubTotal</span> <span> ${totalCartAmount}</span>
        </div>
        <div className="calcTab">
          <span> Delivery Fee</span> <span> Free</span>
        </div>

        <hr />

        <div className="calcTab totalTab">
          <span> TOTAL</span>
          <span> ${totalCartAmount}</span>
        </div>
      </div>
      <div className="buttonTab">
        <Link to={"/resultModal"} className="backBtn linkTag" >
        <button >
          <FaArrowLeft /> Back
        </button>
        </Link>

          <Link className="continueBtn linkTag"  to={"/home"}>
        <button > Continue</button>
          </Link>
      </div>
    </div>
  );
};

export default Modal;

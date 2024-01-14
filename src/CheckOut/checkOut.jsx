import { useState } from "react";
import { useSelector } from "react-redux";
import style from "styled-components";
import Modal from "../Modal/modal";

const Container = style.div`
    display:  flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 30px;
    margin-bottom: 50px;

    @media(max-width: 818px){
        flex-direction: column;
    }
    `;

const FormContainer = style.div`
    width: 55%;

    @media(max-width: 818px){
        width: 100%;
    }
`;
const CheckOutContainer = style.div`
    width: 35%;
  background-color: rgb(48, 126, 108, 0.7);
  padding: 20px;
  color: white;

  @media(max-width: 818px){
    width: 100%;
    margin-top: 40px;
}
`;

const Input = style.input`
    padding: 15px  10px;
    margin-top: 10px;
    background: transparent;
    border: 2px solid rgb(43, 153, 109);
    border-radius: 10px;
    color: white;
    font-size: 17px;
    outline: none;
`;

const Header = style.h3`
    font-size: 25px;
    color: white;

    @media(max-width: 818px){
        text-align: center;
    }
`;

const FlexDiv = style.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  font-size: 15px;
`;

const Title = style.span`
    font-size: 18px;
`;

const Value = style.span`
    font-size: 25px;
    font-weight: bold;
`;
const ButtonCont = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubmitBtn = style.span`
padding: 15px 0px;
width: 200px;
font-size: 16px;
font-weight: 600;
margin-bottom: 10px;
background-color: rgb(26, 31, 29, 0.8);
color: var(--lemon);
border: none;
cursor: pointer;
transition: ease-in 0.3s;
display: flex;
justify-content: center;
&:hover{
background-color: white;

}
`;

const CheckOut = () => {
  const { totalQuantity, cartItems } = {
    totalQuantity: useSelector((state) => state.cart.counter),
    cartItems: useSelector((state) => state.cart.cartItems),
  };

  const eachTotalPrice = cartItems.map((eachItem) => {
    return eachItem.totalPrice;
  });
  const totalCartAmount = eachTotalPrice.reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
    0
  );

  // console.log(totalQuantity, totalCartAmount);

  const [inputs, updateInputs] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    number: 807929388,
    address: "19 Bode Thomas Surulere, Lagos",
    postalCode: "123456",
    city: "Lagos"
  })

  function changeHandler(event){
    const {name, value} = event.target
    updateInputs({...inputs, [name]:value})
    console.log(inputs)
  }

  const [active, setActive] = useState(true)
  
  function handleSubmit(){
    setActive(false)
  }

  return (
    <>
    {active ?
      <div>
        <img src="./photos/smart-watch.png" alt="bg" />
        <Container>
          <FormContainer>
            <Header>Billing Information</Header>
            <form>
              <Input
                type="text"
                name="name"
                value = {inputs.name}
                placeholder="Enter your Name"
                onChange={changeHandler}
                required
              />
              <Input
                type="email"
                name="email"
                value = {inputs.email}
                placeholder="Enter your Email"
                onChange={changeHandler}
                required
              />
              <Input
                type="number"
                name="number"
                value={inputs.number}
                placeholder="Enter your Number"
                onChange={changeHandler}
                required
              />
              <Input
                type="text"
                name="address"
                value={inputs.address}
                placeholder="Street Address"
                onChange={changeHandler}
                required
              />
              <Input
                type="text"
                name="postalCode"
                value={inputs.postalCode}
                placeholder=" Postal Code"
                onChange={changeHandler}
              />
              <Input
                type="text"
                name="city"
                value={inputs.city}
                placeholder="City"
                onChange={changeHandler}
              />
            </form>
          </FormContainer>

          <CheckOutContainer>
            <FlexDiv>
              <Title>TotalQty:</Title> <Value>{totalQuantity}</Value>
            </FlexDiv>
            <FlexDiv>
              <Title>Subtotal:</Title>
              <Value>${totalCartAmount}</Value>
            </FlexDiv>
            <FlexDiv>
              <Title>Shipping:</Title>

              <Value>$0</Value>
            </FlexDiv>
            <FlexDiv><Title> Free Shipping</Title></FlexDiv>
            <hr style={{ marginBottom: "30px" }} />
            <FlexDiv>
              <Title>Total cost:</Title>
              <Value>${totalCartAmount}</Value>
            </FlexDiv>

            <ButtonCont>
              <SubmitBtn
                type="submit"
                 onClick={handleSubmit}
              >
                Place an order
              </SubmitBtn>
            </ButtonCont>
          </CheckOutContainer>
        </Container>
      </div>
      :
      <Modal inputs={inputs}/>
      }
    </>
  );
};

export default CheckOut;
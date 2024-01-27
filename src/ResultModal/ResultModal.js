import style from "styled-components";
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { CartActions } from "../redux/cartSlice/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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

const TableTab = style.div`  
width: 55vw;
display: flex;
align-items: center;
flex-direction: column;

@media(max-width: 818px){
  width: 100%;
  padding: 0 30px;
}
`;
const Table = style.table`  
margin: 40px 0;
width: 100%;
border-collapse: collapse;
color: white;

`;

const Th = style.th`
border-bottom: 1px solid white;
padding: 8px;
text-align: center;
font-weight: bolder;
font-size: 18px;
`;

const Td = style.td`
border-top: 1px solid white;
border-bottom: 1px solid white;
padding: 8px;
text-align: center;
font-size: 16px;
`;

const CheckOutTab = style.div`
  background-color: rgb(48, 126, 108, 0.7);
  padding: 20px ; 
  width: 38vw;
  margin-right:  20px;
  height: 350px;
  margin-top: 40px;
  color: white;
  border-radius: 20px;


  @media(max-width: 818px){
   width: 100%;
  margin-right:  0px;
  }
`;

const CheckOutTabContainer = style.div`
@media(max-width: 818px){
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 30px;
 }
`

const Tab = style.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-left:  20px;

  @media(max-width: 818px){
    flex-direction: column;
  margin-left:  0px;
  }
`;

const FlexDiv = style.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media(max-width: 818px){
  margin-bottom: 20px;
    
  }
`;

const ButtonCont = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = style.button`
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

  &:hover{
  background-color: white;

  }
`;

const ClearAllButton = style.button`
  padding: 15px 0px;
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  background-color: var(--lemon);
  color: white;
  border: none;
  cursor: pointer;
  transition: ease-in 0.3s;

  &:hover{
  background-color: white;
  color: var(--lemon);
  }
`;

function ResultModal() {
  const { cartItems, counter } = {
    cartItems: useSelector((state) => state.cart.cartItems),
    counter: useSelector((state) => state.cart.counter),
  };

  const eachTotalPrice = cartItems.map((eachItem) => {
    return eachItem.totalPrice;
  });

  console.log(eachTotalPrice);

  const totalCartAmount = eachTotalPrice.reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
    0
  );

  console.log(totalCartAmount);

  const dispatch = useDispatch();

  const deleteHandler = (eachItem) => {
    dispatch(CartActions.removeItem(eachItem.id));
  };

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

      <Tab>
        <TableTab>
          <Table>
            <thead>
              <tr>
                <Th> Image</Th>
                <Th> Name</Th>
                <Th> Price</Th>
                <Th> Qty</Th>
                <Th> Remove</Th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((eachItem) => {
                return (
                  <tr key={eachItem.id}>
                    <Td>
                      <img
                        src={eachItem.img}
                        style={{
                          width: "auto",
                          height: "50px",
                          objectFit: "contain",
                        }}
                        alt="sd"
                      />
                    </Td>
                    <Td> {eachItem.name}</Td>
                    <Td style={{ marginLeft: "150px" }}>
                      {" "}
                      {eachItem.newPrice}
                    </Td>
                    <Td> {eachItem.quantity}</Td>
                    <Td onClick={() => deleteHandler(eachItem)}>
                      <FaTrash />
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <ClearAllButton onClick={() => dispatch(CartActions.clearAllItems())}>
            {" "}
            Clear All
          </ClearAllButton>
        </TableTab>
        <CheckOutTabContainer>
          <CheckOutTab>
            <FlexDiv>
              {" "}
              <span style={{ fontSize: "18px" }}> TotalQty:</span>{" "}
              <span style={{ fontWeight: "bolder", fontSize: "25px" }}>
                {" "}
                {counter}{" "}
              </span>{" "}
            </FlexDiv>
            <FlexDiv>
              {" "}
              <span style={{ fontSize: "18px" }}> Subtotal: </span>{" "}
              <span style={{ fontWeight: "bolder", fontSize: "25px" }}>
                {" "}
                ${totalCartAmount}
              </span>{" "}
            </FlexDiv>
            <div style={{ borderBottom: "1px solid  white", margin: "30px 0" }}>
              {" "}
            </div>
            <FlexDiv>
              {" "}
              <span style={{ fontSize: "18px" }}> Total Cost: </span>{" "}
              <span style={{ fontWeight: "bolder", fontSize: "25px" }}>
                {" "}
                ${totalCartAmount}{" "}
              </span>{" "}
            </FlexDiv>

            <ButtonCont>
              <Link to={"/checkOut"} className="linkTag"> <Button> Check Out</Button></Link>
              <Link className=" linkTag"  to={"/home"}>
              <Button>Continue Shopping</Button>
          </Link>

            </ButtonCont>
          </CheckOutTab>
        </CheckOutTabContainer>
      </Tab>
    </div>
  );
}

export default ResultModal;

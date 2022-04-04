import { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { DataContext } from "../Hooks/useContext";

const SingleProduct = ({modal, setModal}) => {
  const [productInfo, setProductInfo] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { setCart, cart, calcItemTotal } = useContext(DataContext);
  const history = useHistory();

  // getting product id from params
  const params = useParams().productId
  const productId = params || modal;

  // fetching the product info
  useEffect(() => {
    fetch(`/api/get-item/${productId}`)
    .then((res) => res.json())
    .then((data) => setProductInfo(data.data))
    .catch((err) => console.log("error:", err));
  }, [productId]);
  
  // updating the cart with product info, quanity and total price
  const handleClick = () => {
    setCart([
      ...cart,
      {
        productInfo,
        qnt: Number(quantity),
        itemTotal: calcItemTotal(productInfo.price, quantity),
      },
    ]);
    history.push("/cart");
  };
  
  if (!modal && !params) return null;
  
  // returning a loading message until server has responded with product data
  if (!productInfo) return <div>Loading...</div>;

  // creating an array of quantity in stock for the dropdown to map over
  let numArray = [];
  for (let i = 1; i <= productInfo.numInStock; i++) {
    numArray.push(i);
  }

  // closing the modal if user clicks outside the main Wrapper
  // if params were used to navigate here, returning to the Products page
  const handleModalClose = () => {
    if (params) history.push("/products")
    if (modal) setModal(null);
  }
  
  return (
    <Modal onClick={handleModalClose}>
    <Wrapper onClick={(ev) => ev.stopPropagation()}>
      <ItemContainer>
        <LeftDiv>
          <img src={productInfo.imageSrc} />
        </LeftDiv>
        <RightDiv>
          <Title>{productInfo.name}</Title>
          <InfoBox>
            <h4>From: {productInfo.companyName}</h4>
            <h4>Category: {productInfo.category}</h4>
            <Price>
              ${calcItemTotal(productInfo.price, quantity).toFixed(2)}
            </Price>
          </InfoBox>
          <QuantityBox>
            Quantity:
            <select
              defaultValue={1}
              placeholder="1"
              onChange={(ev) => setQuantity(ev.target.value)}
            >
              {numArray.map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </QuantityBox>
          {productInfo.numInStock > 0 ? (
            <BuyButton onClick={handleClick}>Add to Cart</BuyButton>
          ) : (
            <BuyButton disabled={true}>Out of stock</BuyButton>
          )}
        </RightDiv>
      </ItemContainer>
    </Wrapper>
    </Modal>
  );
};

const Modal = styled.div`
 position: fixed;
 top: 0;
 right: 0;
 left: 0;
 bottom: 0;
 display: flex;
  align-items: center;
  justify-content: center;
 background-color: rgba(55, 55, 55, 0.8);
 z-index: 200;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  background-color: black;
  padding: 200px;
  /* box-shadow: 0px 0px 32px 0px rgba(0,0,0,0.75); */
`;

const ItemContainer = styled.div`
  display: flex;
`;

const LeftDiv = styled.div`
  margin: 0 20px;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 300px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

const Price = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  > * {
    margin: 8px 0;
  }
`;

const BuyButton = styled.button`
  margin: 10px 0;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 50px;
  background-color: #00416a;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const QuantityBox = styled.div`
  > select {
    margin: 0 8px;
  }
`;

export default SingleProduct;
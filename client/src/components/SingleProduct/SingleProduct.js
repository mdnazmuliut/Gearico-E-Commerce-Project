import { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { DataContext } from "../Hooks/useContext";

const SingleProduct = () => {
  const [productInfo, setProductInfo] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { setCart, cart, calcItemTotal } = useContext(DataContext);
  const history = useHistory();

  // getting product id from params
  const productId = useParams().productId;

  // fetching the product info
  useEffect(() => {
    fetch(`/api/get-item/${productId}`)
      .then((res) => res.json())
      .then((data) => setProductInfo(data.data))
      .catch(err => console.log("error:", err));
  }, []);

  // updating the cart with product info, quanity and total price
  const handleClick = () => {
    setCart([...cart, { productInfo, qnt: quantity, itemTotal: calcItemTotal(productInfo.price, quantity) }]);
    history.push("/cart");
  };

  // returning a loading message until server has responded with product data
  if (!productInfo) return <div>Loading...</div>;

  // creating an array of quantity in stock for the dropdown to map over
  let numArray = [];
  for (let i = 1; i <= productInfo.numInStock; i++) {
    numArray.push(i);
  }

  return (
    <Wrapper>
      <ItemContainer>
        <LeftDiv>
          <img src={productInfo.imageSrc} />
        </LeftDiv>
        <RightDiv>
          <Title>{productInfo.name}</Title>
          <InfoBox>
            <h4>From: {productInfo.companyId}</h4>
            <h4>Category: {productInfo.category}</h4>
            <Price>${calcItemTotal(productInfo.price, quantity).toFixed(2)}</Price>
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
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
  font-family: "Open Sans", sans-serif;
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

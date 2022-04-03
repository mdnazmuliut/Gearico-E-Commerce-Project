import { useContext, useState } from "react";
import { DataContext } from "../Hooks/useContext";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const { cart, setCart, calcItemTotal, total } = useContext(DataContext);
  const history = useHistory();

  // creating an array out of a number (for the Quantity dropdowns)
  const numArray = (number) => {
    let numArray = [];
    for (let i = 1; i <= number; i++) {
      numArray.push(i);
    }
    return numArray;
  };

  // updating the quantity of a product
  const updateQuantity = (ev, price, index) => {
    let updatedCart = [...cart];
    updatedCart[index].qnt = ev.target.value;
    updatedCart[index].itemTotal = calcItemTotal(price, ev.target.value);
    setCart(updatedCart);
  };

  // removing a product from the cart
  const removeItem = (ev, index) => {
    let updatedCart = cart.filter((item, cartIndex) => cartIndex !== index);
    setCart(updatedCart);
  };

  return (
    <Wrapper>
      <MainContainer>
        
        {cart.length > 0 &&
          cart.map((item, index) => {
            return (
              <ItemDiv>
                <Image src={item.productInfo.imageSrc} />
                <ProdName>{item.productInfo.name}</ProdName>
                <Line />
                <QuantityBox>
                  Quantity:
                  <select
                    defaultValue={item.qnt}
                    onChange={(ev) => updateQuantity(ev, item.productInfo.price, index)}
                  >
                    {numArray(item.productInfo.numInStock).map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </QuantityBox>
                <ItemTotal>
                  ${calcItemTotal(item.productInfo.price, cart[index].qnt).toFixed(2)}
                </ItemTotal>
                <RemoveButton onClick={(ev) => removeItem(ev, index)}>
                  x
                </RemoveButton>
              </ItemDiv>
            );
          })}
       
        <CartTotalDiv>
          <SpacerDivLeft />
          <CartTotal>${total.toFixed(2)}</CartTotal>
        </CartTotalDiv>

        <CheckoutButtonDiv>
          <SpacerDivLeft />
          <CheckoutButton onClick={() => history.push("/checkout")}>Checkout</CheckoutButton>
        </CheckoutButtonDiv>

      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  font-family: "Open Sans", sans-serif;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  > * {
    margin: 0 10px;
  }
`;

const Image = styled.img`
  width: 100px;
  border-radius: 5px;
`;

const ProdName = styled.p`
  font-size: 20px;
  font-weight: 700;
  width: 400px;
`;

const Line = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  width: 200px;
  height: 0;
`;

const QuantityBox = styled.div`
  width: 150px;
  > select {
    width: 40px;
    margin: 0 5px;
  }
`;

const ItemTotal = styled.p`
  width: 50px;
  display: flex;
  justify-content: flex-end;
`;

const RemoveButton = styled.button`
  font-size: 18px;
  border: none;
  background-color: red;
  cursor: pointer;
`;

const SpacerDivLeft = styled.div`
  width: 960px;
`;

const CartTotalDiv = styled.div`
  display: flex;
`;
const CartTotal = styled.div`
width: 50px;
  display: flex;
  justify-content: flex-end;
`;

const CheckoutButtonDiv = styled.div`
  display: flex;
`;
const CheckoutButton = styled.button`
  margin: 10px 0;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 50px;
  background-color: #00416a;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default Cart;

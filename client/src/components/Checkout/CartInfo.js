import React from "react";
import styled from "styled-components";

const CartInfo = () => {
  return (
    <>
      <Content>
        <OrderSummary>
          <Header>Order Summary</Header>
        </OrderSummary>
        <OrderDetails>
          <Header>Order Details</Header>
        </OrderDetails>
      </Content>
    </>
  );
};

const Content = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const OrderSummary = styled.div`
  padding: 10px;
  width: 200px;
  background-color: beige;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;

const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const OrderDetails = styled.div`
  padding: 10px;
  margin-top: 20px;
  background-color: beige;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;

export default CartInfo;

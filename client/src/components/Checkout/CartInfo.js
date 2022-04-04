import React from "react";
import styled from "styled-components";

const CartInfo = ({ cart, total }) => {

  return (
    <>
      <Content>
        <OrderSummary>
          <Header>Order Summary</Header>

          <SmallTxt>Subtotal: ${total.toFixed(2)}</SmallTxt>
          <SmallTxt>Taxes: ${(total * 0.15).toFixed(2)}</SmallTxt>
          <SmallTxt>Total: ${(total * 1.15).toFixed(2)}</SmallTxt>
        </OrderSummary>

        <OrderDetails>
          <Header>Order Details</Header>
          {cart.map((item) => {
            return (
              <Wrapper>
                <PicnCap>
                  <Img src={item.productInfo.imageSrc} />
                  <CaptionWrap>
                    <BoldTxt>{item.productInfo.name}</BoldTxt>
                    <SmallTxt>{item.productInfo.category}</SmallTxt>
                  </CaptionWrap>
                </PicnCap>
                <SmallTxt>Qty: {item.qnt}</SmallTxt>
              </Wrapper>
            );
          })}
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
  width: 250px;
  background-color: beige;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;

const Header = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const OrderDetails = styled.div`
  padding: 10px;
  margin-top: 20px;

  width: 250px;
  background-color: beige;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

const PicnCap = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const CaptionWrap = styled.div`
  margin-left: 10px;
`;

const Img = styled.img`
  width: 50px;
`;

const SmallTxt = styled.div`
  font-size: 14px;
  color: black;
`;

const BoldTxt = styled.div`
  color: black;
  font-size: 14px;
  font-weight: bold;
`;

export default CartInfo;

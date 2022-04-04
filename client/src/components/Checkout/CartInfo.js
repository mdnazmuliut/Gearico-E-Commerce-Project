import React from "react";
import styled from "styled-components";

const CartInfo = ({ cart, total }) => {
  return (
    <>
      <Content>
        <OrderSummary>
          <Header>Order Summary</Header>

          <SmallTxt>
            <strong> Subtotal:</strong> ${total.toFixed(2)}
          </SmallTxt>
          <SmallTxt>
            <strong> Taxes:</strong> ${(total * 0.15).toFixed(2)}
          </SmallTxt>
          <Divider />
          <SmallTxt>
            <strong> Total:</strong> ${(total * 1.15).toFixed(2)}
          </SmallTxt>
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
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
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
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
  height: 220px;
  overflow: scroll;
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
  font-size: 15px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  color: black;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 15px 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const BoldTxt = styled.div`
  color: black;
  font-size: 14px;
  font-weight: bold;
`;

export default CartInfo;

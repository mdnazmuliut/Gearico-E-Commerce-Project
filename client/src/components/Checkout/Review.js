import React, { useContext } from "react";
import styled from "styled-components";
import { AccountContext } from "../Hooks/AccountContext";

const Review = ({ formData, handleClickBack, setStepColor, setFormData }) => {
  const { userInfo } = useContext(AccountContext)
  
  if (formData.shipping.firstName === "") {
    let newData = userInfo;
    newData.shipping["email"] = userInfo.email;
    setFormData(newData);
  }

  let cardNumHide = [];
  let cvvNumHide = [];

  

  let cardNoDisp = (card) => {
    if (card) {
      for (let i = 0; i < card.length; i++) {
        if (i < card.length - 4) {
          cardNumHide.push("*");
        } else {
          cardNumHide.push(card[i]);
        }
      }
    }
    return cardNumHide.join("");
  };

  let cvvNoDisp = (card) => {
    if (card) {
      for (let i = 0; i < card.length; i++) {
        if (i < card.length - 1) {
          cvvNumHide.push("*");
        } else {
          cvvNumHide.push(card[i]);
        }
      }
    }
    return cvvNumHide.join("");
  };

  cardNoDisp(formData.billing.cardNo);
  cvvNoDisp(formData.billing.cvv);

  return (
    <>
      <Main>
        <Header>Review</Header>

        <CustomerInfo>
          <TextHeader>Customer Information</TextHeader>
          <Text>
            {formData.shipping.firstName} {formData.shipping.lastName}
          </Text>
          <Text>{formData.shipping.email}</Text>
        </CustomerInfo>

        <ShippingInfo>
          <TextHeader>Shipping Information</TextHeader>
          <Text>{formData.shipping.address}</Text>
          <Text>
            {formData.shipping.city}, {formData.shipping.province}
          </Text>
          <Text>{formData.shipping.postcode}</Text>
          <Text>{formData.shipping.country}</Text>
        </ShippingInfo>

        <PaymentDetails>
          <TextHeader>Billing Information</TextHeader>
          <Text>{formData.billing.fullName}</Text>
          <Text>{cardNumHide}</Text>
          <Text>
            {formData.billing.expMonth} / {formData.billing.expYear}
          </Text>

          <Text>{cvvNumHide}</Text>
        </PaymentDetails>
      </Main>
      <ButtonWrapper>
        <ButtonBack
          onClick={() => {
            handleClickBack();
            setStepColor("grey");
          }}
        >
          Back
        </ButtonBack>
      </ButtonWrapper>
    </>
  );
};

const Main = styled.div`
  margin: 20px;
  width: 500px;
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 400px;
`;

const Header = styled.div`
  margin: 20px 40px;
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const CustomerInfo = styled.div`
  margin: 20px 40px;
`;

const PaymentDetails = styled.div`
  margin: 20px 40px;
`;
const ShippingInfo = styled.div`
  margin: 20px 40px;
`;

const Text = styled.div`
  color: black;
  font-size: 17px;
  margin: 4px 0;
`;

const TextHeader = styled.div`
  margin-bottom: 10px;
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

const ButtonBack = styled.button`
  border: none;
  border-radius: 10px;
  color: black;
  margin-left: 20px;
  width: 100px;
  font-size: 18px;
  cursor: pointer;
  padding: 8px;
  transition: 0.2s;

  &:active {
    background-color: rgba(169, 169, 169);
    color: white;
    font-weight: bold;
  }
`;

export default Review;
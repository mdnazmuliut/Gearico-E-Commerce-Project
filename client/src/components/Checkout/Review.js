import React from "react";
import styled from "styled-components";

const Review = ({
  formData,
  handleChange,
  handleClick,
  disabled,
  subStatus,
}) => {
  console.log("Review Form Data:", formData);

  let cardNumHide = [];
  let cvvNumHide = [];

  let cardNoDisp = (card) => {
    for (let i = 0; i < card.length; i++) {
      if (i < card.length - 4) {
        cardNumHide.push("*");
      } else {
        cardNumHide.push(card[i]);
      }
    }
    return cardNumHide.join("");
  };

  let cvvNoDisp = (card) => {
    for (let i = 0; i < card.length; i++) {
      if (i < card.length - 1) {
        cvvNumHide.push("*");
      } else {
        cvvNumHide.push(card[i]);
      }
    }
    return cvvNumHide.join("");
  };

  cardNoDisp(formData.cardNo);
  cvvNoDisp(formData.cvv);

  return (
    <>
      <Main>
        <Header>Review</Header>
        <CustomerInfo>
          <TextHeader>Customer Information:</TextHeader>
          <Text>{formData.firstName}</Text>
          <Text>{formData.lastName}</Text>
          <Text>{formData.email}</Text>
          <Text>{formData.address}</Text>
          <Text>{formData.city}</Text>
          <Text>{formData.province}</Text>
          <Text>{formData.postcode}</Text>
          <Text>{formData.country}</Text>
        </CustomerInfo>
        <PaymentDetails>
          <TextHeader>Billing Information:</TextHeader>
          <Text>{formData.fullName}</Text>
          <Text>{cardNumHide}</Text>
          <Text>{formData.expMonth}</Text>
          <Text>{formData.expYear}</Text>
          <Text>{cvvNumHide}</Text>
        </PaymentDetails>
      </Main>
    </>
  );
};

const Main = styled.div`
  margin: 20px;
  /* padding: 10px; */
  width: 500px;
  background-color: beige;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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

const Text = styled.div`
  color: black;
  font-size: 18px;
`;

const TextHeader = styled.div`
  margin-bottom: 10px;
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

export default Review;

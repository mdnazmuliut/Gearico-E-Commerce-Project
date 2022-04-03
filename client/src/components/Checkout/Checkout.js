import React, { useState } from "react";
import styled from "styled-components";
import Shipping from "./Shipping";
import Billing from "./Billing";
import Review from "./Review";
import CartInfo from "./CartInfo";
import { NavLink } from "react-router-dom";

const Checkout = () => {
  const [inputDisplay, setInputDisplay] = useState(1);

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    province: "",
    postcode: "",
    country: "",
    fullName: "",
    cardNo: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  };

  const initialShippingState = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    province: "",
    postcode: "",
    country: "",
  };

  const initialBillingState = {
    fullName: "",
    cardNo: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [disabled, setDisabled] = useState(true);
  const [subStatus, setSubStatus] = useState("idle");

  const [shippingData, setShippingData] = useState(initialShippingState);
  const [billingData, setBillingData] = useState(initialBillingState);

  const handleClickNext = () => {
    // ev.preventDefault();
    let goNextPage = true;

    Object.values(shippingData).forEach((value) => {
      value === "" && (goNextPage = false);
    });

    if (goNextPage === true) {
      inputDisplay < 3 && setInputDisplay(inputDisplay + 1);
    }
    // console.log(
    //   "Object Value Shipping in checkout:",
    //   Object.values(shippingData)
    // );
  };
  const handleClickBack = () => {
    inputDisplay > 1 && setInputDisplay(inputDisplay - 1);
  };

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });

    setShippingData({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      address: formData.address,
      province: formData.province,
      postcode: formData.postcode,
      country: formData.country,
    });

    setBillingData({
      fullName: formData.fullName,
      cardNo: formData.cardNo,
      expMonth: formData.expMonth,
      expYear: formData.expYear,
      cvv: formData.cvv,
    });
    console.log(
      "Shipping Object Value HandleChange:",
      Object.values(shippingData)
    );
    console.log(
      "Billing Object Value HandleChange:",
      Object.values(billingData)
    );
  };

  console.log("formadata:", formData);

  const handleClick = (ev) => {
    ev.preventDefault();
    setSubStatus("pending");

    fetch("/api/place-order", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setSubStatus("confirmed");
        }
      })
      .catch((err) => {
        console.error(err);
        setSubStatus("error");
      });
  };

  return (
    <>
      <CheckoutContents>
        <StepsHead>
          <StepCircle>
            <Circle>1</Circle>
            <div>Shipping</div>
          </StepCircle>
          <StepCircle>
            <Circle>2</Circle>
            <div>Billing</div>
          </StepCircle>
          <StepCircle>
            <Circle>3</Circle>
            <div>Review</div>
          </StepCircle>
        </StepsHead>
        <Main>
          <InputSection>
            {inputDisplay === 1 && (
              <Shipping
                formData={formData}
                handleChange={handleChange}
                handleClick={handleClick}
                handleClickNext={handleClickNext}
                subStatus={subStatus}
              />
            )}
            {inputDisplay === 2 && (
              <Billing
                formData={formData}
                handleChange={handleChange}
                handleClick={handleClick}
                handleClickBack={handleClickBack}
                subStatus={subStatus}
                billingData={billingData}
                inputDisplay={inputDisplay}
                setInputDisplay={setInputDisplay}
              />
            )}
            {inputDisplay === 3 && (
              <Review formData={formData} handleClickBack={handleClickBack} />
            )}
            {/* <ButtonWrapper>
              <ButtonBack onClick={handleClickBack}>Back</ButtonBack>
              <ButtonNext onClick={handleClickNext}>Next</ButtonNext>
            </ButtonWrapper> */}
          </InputSection>
          <CartInfo />
        </Main>
        <PlaceOrderBtn onClick={handleClick}>Place Order</PlaceOrderBtn>
      </CheckoutContents>
    </>
  );
};

const CheckoutContents = styled.div`
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StepsHead = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px;
  justify-content: space-around;
  font-size: 24px;
`;

const StepCircle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  margin-bottom: 10px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  background-color: palevioletred;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  width: 100px;
  font-size: 18px;
  cursor: pointer;
`;
const ButtonNext = styled.button`
  border: none;
  border-radius: 10px;
  color: black;
  margin-left: 20px;
  width: 100px;
  font-size: 18px;
  cursor: pointer;
`;
const PlaceOrderBtn = styled.button`
  margin: auto;
  border: none;
  border-radius: 40px;
  color: black;
  width: 200px;
  height: 50px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
`;

export default Checkout;

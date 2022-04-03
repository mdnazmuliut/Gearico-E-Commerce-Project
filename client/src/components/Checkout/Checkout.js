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
  };

  const [formData, setFormData] = useState(initialState);
  const [disabled, setDisabled] = useState(true);
  const [subStatus, setSubStatus] = useState("idle");

  const handleClickNext = () => {
    let goNextPage = true;
    console.log("Object Vaue:", Object.values(formData));
    Object.values(formData).forEach((value) => {
      value === "" && (goNextPage = false);
    });

    if (goNextPage === true) {
      inputDisplay < 3 && setInputDisplay(inputDisplay + 1);
    }
  };
  const handleClickBack = () => {
    inputDisplay > 1 && setInputDisplay(inputDisplay - 1);
  };

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
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
          <div>Shipping</div>
          <div>Billing</div>
          <div>Review</div>
        </StepsHead>
        <Main>
          <InputSection>
            {inputDisplay === 1 && (
              <Shipping
                formData={formData}
                handleChange={handleChange}
                handleClick={handleClick}
                subStatus={subStatus}
              />
            )}
            {inputDisplay === 2 && (
              <Billing
                formData={formData}
                handleChange={handleChange}
                handleClick={handleClick}
                subStatus={subStatus}
              />
            )}
            {inputDisplay === 3 && <Review formData={formData} />}
            <ButtonWrapper>
              <ButtonBack onClick={handleClickBack}>Back</ButtonBack>
              <ButtonNext onClick={handleClickNext}>Next</ButtonNext>
            </ButtonWrapper>
          </InputSection>
          <CartInfo />
        </Main>
        <PlaceOrderBtn>Place Order</PlaceOrderBtn>
      </CheckoutContents>
    </>
  );
};

const CheckoutContents = styled.div``;
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
  border: none;
  border-radius: 10px;
  color: black;
  width: 100px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
`;

export default Checkout;

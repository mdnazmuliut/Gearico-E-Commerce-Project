import React, { useState, useContext } from "react";
import styled from "styled-components";
import Shipping from "./Shipping";
import Billing from "./Billing";
import Review from "./Review";
import CartInfo from "./CartInfo";
import { DataContext } from "../Hooks/useContext";
import Confirmation from "./Confirmation";

const Checkout = () => {
  const [inputDisplay, setInputDisplay] = useState(1);
  const { cart, total } = useContext(DataContext);

  const initialState = {
    shipping: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      province: "",
      postcode: "",
      country: "",
    },
    billing: {
      fullName: "",
      cardNo: "",
      expMonth: "",
      expYear: "",
      cvv: "",
    },
  };

  const [formData, setFormData] = useState(initialState);
  const [subStatus, setSubStatus] = useState("idle");

  // updating the formData any time an input is changed
  const handleChange = (value, name, section) => {
    let newFormData = { ...formData };
    newFormData[section][name] = value;
    setFormData(newFormData);
  };

  // NEXT BUTTON - verifying all fields have data, then incrementing the inputDisplay
  const handleClickNext = (ev, section) => {
    let goNextPage = true;
    console.log("TEST SECTION?", section);
    Object.values(formData[section]).forEach((value) => {
      value === "" && (goNextPage = false);
    });

    if (goNextPage === true) {
      inputDisplay < 3 && setInputDisplay(inputDisplay + 1);
    }
  };

  // BACK BUTTON - decrementing the inputDisplay
  const handleClickBack = () => {
    inputDisplay > 1 && setInputDisplay(inputDisplay - 1);
  };

  // PLACE ORDER BUTTON - appending the order info to the customer info, then sending it to the server
  const handleClick = (ev) => {
    ev.preventDefault();
    setSubStatus("pending");

    let newFormData = { ...formData };
    newFormData["order"] = cart;

    fetch("/api/place-order", {
      method: "POST",
      body: JSON.stringify(newFormData),
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
        <Confirmation subStatus={subStatus} setSubStatus={setSubStatus} />
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
                handleClickNext={handleClickNext}
              />
            )}
            {inputDisplay === 2 && (
              <Billing
                formData={formData}
                handleChange={handleChange}
                handleClickBack={handleClickBack}
                handleClickNext={handleClickNext}
              />
            )}
            {inputDisplay === 3 && (
              <Review formData={formData} handleClickBack={handleClickBack} />
            )}
          </InputSection>
          <CartInfo cart={cart} total={total} />
        </Main>
        <PlaceOrderBtn
          onClick={handleClick}
          disabled={inputDisplay === 3 ? false : true}
        >
          Place Order
        </PlaceOrderBtn>
        {/* <PlaceOrderBtn onClick={handleClick}>Place Order</PlaceOrderBtn> */}
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

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
  const [stepColor, setStepColor] = useState("grey");

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
    // console.log("TEST SECTION?", section);
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
    // newFormData["order"] = cart;
    newFormData["order"] = cart.map((order) => {
      return {
        _id: order.productInfo._id,
        qnt: order.qnt,
        itemTotal: order.itemTotal,
      };
    });

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
          {/* <ProgressBar /> */}
          <StepCircle>
            <CircleOne style={{ backgroundColor: stepColor }}>1</CircleOne>
            <div>Shipping</div>
          </StepCircle>
          <StepCircle>
            <CircleTwo style={{ backgroundColor: stepColor }}>2</CircleTwo>
            <div>Billing</div>
          </StepCircle>
          <StepCircle>
            <CircleThree style={{ backgroundColor: stepColor }}>3</CircleThree>
            <div>Review</div>
          </StepCircle>
        </StepsHead>
        <Main>
          <InputSection>
            {inputDisplay === 1 && (
              <Shipping
                setStepColor={setStepColor}
                formData={formData}
                handleChange={handleChange}
                handleClickNext={handleClickNext}
              />
            )}
            {inputDisplay === 2 && (
              <Billing
                setStepColor={setStepColor}
                formData={formData}
                handleChange={handleChange}
                handleClickBack={handleClickBack}
                handleClickNext={handleClickNext}
              />
            )}
            {inputDisplay === 3 && (
              <Review
                setStepColor={setStepColor}
                formData={formData}
                handleClickBack={handleClickBack}
              />
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
  position: relative;
  flex-direction: row;
  margin: 50px;
  justify-content: space-evenly;
  font-size: 24px;
`;

const ProgressBar = styled.div`
  background-color: green;
  position: absolute;
  top: 35%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  z-index: -1;
  transition: 0.4s ease;
`;

const StepCircle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

const CircleOne = styled.div`
  margin-bottom: 10px;
  padding-top: 12px;
  border-radius: 50%;
  font-size: 25px;
  width: 50px;
  height: 50px;
  text-align: center;
`;

const CircleTwo = styled.div`
  margin-bottom: 10px;
  padding-top: 12px;
  border-radius: 50%;
  font-size: 25px;
  width: 50px;
  height: 50px;
  text-align: center;
`;

const CircleThree = styled.div`
  margin-bottom: 10px;
  padding-top: 12px;
  border-radius: 50%;
  font-size: 25px;
  width: 50px;
  height: 50px;
  text-align: center;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// const ButtonWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 50px;
// `;
// const ButtonBack = styled.button`
//   border: none;
//   border-radius: 10px;
//   color: black;
//   width: 100px;
//   font-size: 18px;
//   cursor: pointer;
// `;
// const ButtonNext = styled.button`
//   border: none;
//   border-radius: 10px;
//   color: black;
//   margin-left: 20px;
//   width: 100px;
//   font-size: 18px;
//   cursor: pointer;
// `;
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
  transition: 0.2s;

  &:active {
    box-shadow: 0 0.5em 0.5em -0.2em grey;
    transform: translateY(-0.25em);
  }
`;

export default Checkout;

import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Billing = ({
  formData,
  handleChange,
  handleClickNext,
  handleClickBack,
  setStepColor,
}) => {
  const section = "billing";

  return (
    <>
      <Main>
        <Header>Payment Details</Header>
        <Wrapper>
          <FormContent>
            <Input
              name="fullName"
              type="text"
              placeholder="Cardholder Name"
              section={section}
              defaultValue={formData.billing.fullName}
              handleChange={handleChange}
            />
            <Input
              name="cardNo"
              type="text"
              placeholder="Card Number"
              section={section}
              defaultValue={formData.billing.cardNo}
              handleChange={handleChange}
            />
            <FormGroup>
              <Input
                name="expMonth"
                type="text"
                placeholder="MM"
                section={section}
                defaultValue={formData.billing.expMonth}
                handleChange={handleChange}
              />
              <Input
                name="expYear"
                type="text"
                placeholder="YY"
                section={section}
                defaultValue={formData.billing.expYear}
                handleChange={handleChange}
              />
            </FormGroup>
            <Input
              name="cvv"
              type="text"
              placeholder="CVC / CVV"
              section={section}
              defaultValue={formData.billing.cvv}
              handleChange={handleChange}
            />
          </FormContent>
          <Logo>Gearico</Logo>
        </Wrapper>
      </Main>
      <ButtonWrapper>
        <ButtonBack
          onClick={() => {
            handleClickBack();
          }}
        >
          Back
        </ButtonBack>
        <ButtonNext
          onClick={(ev) => {
            handleClickNext(ev, section);
            setStepColor("green");
          }}
        >
          Next
        </ButtonNext>
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

const Wrapper = styled.form`
  margin: 40px 20px;
  padding: 0 20px;
`;
const FormContent = styled.div``;

const Logo = styled.h2`
  margin-top: 58px;
  font-size: 5em;
  font-weight: 800;
  font-style: italic;
  color: rgba(0, 0, 0, 0.1);
  cursor: default;
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > div {
    flex: 1 0 auto;
    width: 48%;

    &:first-child {
      margin-right: 6px;
    }
  }
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
  padding: 8px;
  transition: 0.2s;

  &:active {
    background-color: rgba(169, 169, 169);
    color: white;
    font-weight: bold;
  }
`;
const ButtonNext = styled.button`
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

export default Billing;

import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Shipping = ({
  formData,
  handleChange,
  handleClickNext,
  setStepColor,
}) => {
  const section = "shipping";

  return (
    <>
      <Main>
        <Header>Shipping Address</Header>
        <Wrapper>
          <FormContent>
            <FormGroup>
              <Input
                name="firstName"
                type="text"
                placeholder="First name"
                section={section}
                defaultValue={formData.shipping.firstName}
                handleChange={handleChange}
              />
              <Input
                name="lastName"
                type="text"
                placeholder="Last name"
                section={section}
                defaultValue={formData.shipping.lastName}
                handleChange={handleChange}
              />
            </FormGroup>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              section={section}
              defaultValue={formData.shipping.email}
              handleChange={handleChange}
            />
            <Input
              name="address"
              type="address"
              placeholder="Address"
              section={section}
              defaultValue={formData.shipping.address}
              handleChange={handleChange}
            />
            <FormGroup>
              <Input
                name="city"
                type="text"
                placeholder="City"
                section={section}
                defaultValue={formData.shipping.city}
                handleChange={handleChange}
              />
              <Input
                name="province"
                type="text"
                placeholder="Province"
                section={section}
                defaultValue={formData.shipping.province}
                handleChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="postcode"
                type="text"
                placeholder="Postal Code"
                section={section}
                defaultValue={formData.shipping.postcode}
                handleChange={handleChange}
              />
              <Input
                name="country"
                type="text"
                placeholder="Country"
                section={section}
                defaultValue={formData.shipping.country}
                handleChange={handleChange}
              />
            </FormGroup>
          </FormContent>
          <Logo>Gearico</Logo>
        </Wrapper>
      </Main>
      <ButtonWrapper>
        <ButtonNextOne
          onClick={(ev) => {
            handleClickNext(ev, section);
          }}
        >
          Next
        </ButtonNextOne>
      </ButtonWrapper>
    </>
  );
};

const Main = styled.form`
  margin: 20px;
  /* padding: 10px; */
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

const Wrapper = styled.div`
  margin: 40px 20px;
  padding: 0 20px;
`;
const FormContent = styled.div`
  /* margin: 0 16px 0; */
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

const Logo = styled.h2`
  margin-top: 10px;
  content: "GEARICO";
  font-size: 5em;
  font-weight: 800;
  font-style: italic;
  color: rgba(0, 0, 0, 0.1);
  cursor: default;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

const ButtonNextOne = styled.button`
  border: none;
  border-radius: 8px;
  color: black;
  margin-left: 20px;
  width: 100px;
  font-size: 18px;
  padding: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:active {
    background-color: rgba(169, 169, 169);
    color: white;
    font-weight: bold;
    transform: scale(0.97);
  }
`;

export default Shipping;

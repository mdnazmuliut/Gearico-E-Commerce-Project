import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Shipping = ({
  formData,
  handleChange,
  handleClick,
  handleClickNext,
  disabled,
  subStatus,
}) => {
  return (
    <>
      <Main>
        <Header>Shipping Address</Header>
        <Wrapper>
          <FormContent>
            {/* <h1>Order Form</h1>
            <h2>Provide your information</h2> */}
            <FormGroup>
              <Input
                name="firstName"
                type="text"
                placeholder="First name"
                defaultValue={formData.firstName}
                handleChange={handleChange}
                // {required:true}
              />
              <Input
                name="lastName"
                type="text"
                placeholder="Last name"
                defaultValue={formData.lastName}
                handleChange={handleChange}
                required
              />
            </FormGroup>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              defaultValue={formData.email}
              handleChange={handleChange}
              required
            />
            {/* <h2>Shipping Address</h2> */}
            <Input
              name="address"
              type="address"
              placeholder="Address"
              defaultValue={formData.address}
              handleChange={handleChange}
              required
            />
            <FormGroup>
              <Input
                name="city"
                type="text"
                placeholder="City"
                defaultValue={formData.city}
                handleChange={handleChange}
                required
              />
              <Input
                name="province"
                type="text"
                placeholder="Province"
                defaultValue={formData.province}
                handleChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                name="postcode"
                type="text"
                placeholder="Postal Code"
                defaultValue={formData.postcode}
                handleChange={handleChange}
                required
              />
              <Input
                name="country"
                type="text"
                placeholder="Country"
                defaultValue={formData.country}
                handleChange={handleChange}
                required
              />
            </FormGroup>
          </FormContent>
        </Wrapper>
      </Main>
      <ButtonWrapper>
        <ButtonNext onClick={handleClickNext}>Next</ButtonNext>
      </ButtonWrapper>
    </>
  );
};

const Main = styled.form`
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

const Wrapper = styled.div`
  margin: 20px;
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
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

export default Shipping;

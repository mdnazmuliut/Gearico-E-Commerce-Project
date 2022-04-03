import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Shipping = ({
  formData,
  handleChange,
  handleClickNext,
}) => {

  const section="shipping";

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
        </Wrapper>
      </Main>
      <ButtonWrapper>
        <ButtonNext onClick={(ev) => handleClickNext(ev, section)}>Next</ButtonNext>
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
